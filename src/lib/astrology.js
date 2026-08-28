// src/lib/astrology.js
import * as Astronomy from 'astronomy-engine';

const SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

function getZodiacSign(deg) {
  const normalized = (deg % 360 + 360) % 360;
  return SIGNS[Math.floor(normalized / 30)];
}



// Lightweight Lahiri ayanamsa approximation
function getLahiriAyanamsa(date) {
  const year = date.getUTCFullYear();
  const doy = (date - new Date(Date.UTC(year, 0, 0))) / 86400000;
  const decimalYear = year + doy / 365.25;
  return 23.85 + (decimalYear - 2000) * 0.01396;
}

// Convert local sidereal time and latitude into the ecliptic longitude rising
// on the eastern horizon.
function calculateAscendant(date, lat, lon) {
  const siderealHours = Astronomy.SiderealTime(date) + lon / 15;
  const theta = ((siderealHours % 24 + 24) % 24) * (Math.PI / 12);
  const latitude = (Number(lat) * Math.PI) / 180;
  const obliquity = (23.439291 - 0.0130042 * ((date.getUTCFullYear() - 2000) / 100)) * (Math.PI / 180);

  const ascendantRadians = Math.atan2(
    -Math.cos(theta),
    Math.sin(theta) * Math.cos(obliquity) + Math.tan(latitude) * Math.sin(obliquity)
  );

  // The raw angle identifies the opposite horizon point; rotate to the
  // eastern horizon, which is the ascendant.
  return (ascendantRadians * 180 / Math.PI + 540) % 360;
}

// Ascendant (Lagna) lord per sign — needed to derive `rulerHouse`
const SIGN_LORD = {
  Aries: 'Mars', Taurus: 'Venus', Gemini: 'Mercury', Cancer: 'Moon',
  Leo: 'Sun', Virgo: 'Mercury', Libra: 'Venus', Scorpio: 'Mars',
  Sagittarius: 'Jupiter', Capricorn: 'Saturn', Aquarius: 'Saturn', Pisces: 'Jupiter',
};

// Whole-sign house system: house = offset between a planet's sign and the
// ascendant's sign, 1-indexed.
function getHouseFromSign(sign, ascendantSign) {
  const ascIdx = SIGNS.indexOf(ascendantSign);
  const signIdx = SIGNS.indexOf(sign);
  if (ascIdx === -1 || signIdx === -1) return 1;
  return ((signIdx - ascIdx + 12) % 12) + 1;
}

export function calculateChart(dateObj, lat, lon, timeZone, system = 'vedic', debug = false) {
  if (!(dateObj instanceof Date)) {
    throw new Error("calculateChart requires a Date object");
  }

  // The birth-form sends 'vedic' or 'western' (with legacy 'sidereal'/'tropical'
  // also supported). Only apply the Lahiri ayanamsa correction for Vedic charts.
  const isVedic = system === 'vedic' || system === 'sidereal';
  const ayanamsa = isVedic ? getLahiriAyanamsa(dateObj) : 0;

  if (debug) {
    console.log('[calculateChart] dateObj (UTC ISO):', dateObj.toISOString());
    console.log('[calculateChart] ayanamsa:', ayanamsa);
  }

  const bodies = [
    { name: 'Sun', body: Astronomy.Body.Sun },
    { name: 'Moon', body: Astronomy.Body.Moon },
    { name: 'Mercury', body: Astronomy.Body.Mercury },
    { name: 'Venus', body: Astronomy.Body.Venus },
    { name: 'Mars', body: Astronomy.Body.Mars },
    { name: 'Jupiter', body: Astronomy.Body.Jupiter },
    { name: 'Saturn', body: Astronomy.Body.Saturn }
  ];

  const planetPositions = {};
  const signSummary = {};

  // Ascendant is needed up front so every planet's house can be derived
  const ascDeg = (calculateAscendant(dateObj, lat, lon) - ayanamsa + 360) % 360;
  const ascSign = getZodiacSign(ascDeg);

  bodies.forEach(({ name, body }) => {
    // FIX: the Moon must NOT go through the generic GeoVector() aberration /
    // light-time iteration used for planets — that path is built for distant
    // bodies and is unreliable for something as close as the Moon. Use the
    // library's dedicated high-precision lunar function (GeoMoon) instead,
    // which returns the Moon's true geocentric position directly.
    const vec = (name === 'Moon')
      ? Astronomy.GeoMoon(dateObj)
      : Astronomy.GeoVector(body, dateObj, true);

    const ecl = Astronomy.Ecliptic(vec);
    const tropicalLon = (ecl.elon + 360) % 360;
    const lonDeg = (tropicalLon - ayanamsa + 360) % 360;
    const sign = getZodiacSign(lonDeg);

    if (debug) {
      console.log(`[calculateChart] ${name}: tropical=${tropicalLon.toFixed(4)}° sidereal=${lonDeg.toFixed(4)}° sign=${sign}`);
    }

    planetPositions[name] = {
      longitude: +lonDeg.toFixed(2),
      sign,
      degree: +(lonDeg % 30).toFixed(2),
      house: getHouseFromSign(sign, ascSign)
    };
    signSummary[name] = sign;
  });

  // Mean lunar node (Rahu) — Meeus formula, degrees, tropical
  function getMeanLunarNode(dateObj) {
    const time = Astronomy.MakeTime(dateObj);
    const T = time.tt / 36525; // Julian centuries since J2000.0 (terrestrial time)

    let node = 125.04452
      - 1934.136261 * T
      + 0.0020708 * T * T
      + (T * T * T) / 450000;

    return ((node % 360) + 360) % 360;
  }
  // Rahu/Ketu approx
  // Rahu/Ketu — true mean lunar node, not derived from Moon's position
  const rahuTropical = getMeanLunarNode(dateObj);
  const rahu = (rahuTropical - ayanamsa + 360) % 360;
  const ketu = (rahu + 180) % 360;
  const rahuSign = getZodiacSign(rahu);
  const ketuSign = getZodiacSign(ketu);
  planetPositions['Rahu'] = { longitude: +rahu.toFixed(2), sign: rahuSign, degree: +(rahu % 30).toFixed(2), house: getHouseFromSign(rahuSign, ascSign) };
  planetPositions['Ketu'] = { longitude: +ketu.toFixed(2), sign: ketuSign, degree: +(ketu % 30).toFixed(2), house: getHouseFromSign(ketuSign, ascSign) };
  // House occupied by the Ascendant's own ruling planet — this is what
  // report.js's Lifeline Remedy section keys off (`getLifelineRemedy`)
  const ascLord = SIGN_LORD[ascSign];
  const rulerHouse = planetPositions[ascLord]?.house || 1;

  return {
    ascendant: ascSign,
    rulerHouse,
    moonSign: signSummary['Moon'],
    sunSign: signSummary['Sun'],
    system: isVedic ? 'vedic' : 'western',
    timeZone,
    planetPositions
  };
}