'use client';

import { savePDF } from "../utils/savePDF";
import { useState, useEffect } from 'react';
import { getAllDoshaAnalysis, getActiveDoshaAnalysis } from '@/data/Doshaanalysis';
import Link from 'next/link';
import {
  ArrowLeft,
  Printer,
  Sparkles,
  CheckCircle2,
  Compass,
  ShieldAlert,
  BookOpen,
  Loader2,
  User,
  Briefcase,
  Coins,
  Heart,
  GraduationCap,
  Flame,
  Clock,
  AlertCircle,
  ChevronDown
} from 'lucide-react';

import { ASCENDANT_REMEDIES, getPrimaryBottleneck, getLifelineRemedy } from '@/data/ascendantRemedies';
import { PLANETARY_REMEDIES } from '@/data/planetaryRemedies';
import { getPlanetExplanation, getFunctionalNature } from '@/data/planetaryData';
import Footer from '../components/Footer';
import BrandLogo from '../components/BrandLogo';

const SIGN_ELEMENTS = {
  Aries: 'Fire',
  Taurus: 'Earth',
  Gemini: 'Air',
  Cancer: 'Water',
  Leo: 'Fire',
  Virgo: 'Earth',
  Libra: 'Air',
  Scorpio: 'Water',
  Sagittarius: 'Fire',
  Capricorn: 'Earth',
  Aquarius: 'Air',
  Pisces: 'Water',
};

const ELEMENT_EMOJIS = {
  Fire: '🔥',
  Earth: '🌍',
  Air: '💨',
  Water: '💧',
};

export default function ReportPage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlanet, setSelectedPlanet] = useState('Sun');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedData = sessionStorage.getItem('astro_user_data');
      if (storedData) {
        const parsed = JSON.parse(storedData);
        const merged = { ...parsed, ...(parsed.chartResults || {}) };
        setUserData(merged);
        const availablePlanets = merged.planetPositions ? Object.keys(merged.planetPositions) : [];
        if (availablePlanets.length > 0) {
          setSelectedPlanet(availablePlanets[0]);
        }
      } else {
        setUserData({
          name: "Love Khanna",
          dob: "2003-07-13",
          time: "11:39 AM",
          place: "Moradabad, UP",
          ascendant: "Virgo",
          rulerHouse: 10,
          moonSign: "Sagittarius",
          mahadasha: "Mercury",
          planetPositions: {
            Sun: { sign: "Gemini", house: 10 },
            Moon: { sign: "Sagittarius", house: 4 },
            Mars: { sign: "Aries", house: 8 },
            Mercury: { sign: "Gemini", house: 10 },
            Jupiter: { sign: "Cancer", house: 11 },
            Venus: { sign: "Taurus", house: 9 },
            Saturn: { sign: "Aquarius", house: 6 },
            Rahu: { sign: "Taurus", house: 9 },
            Ketu: { sign: "Scorpio", house: 3 }
          }
        });
        setSelectedPlanet('Sun');
      }
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center text-slate-800">
        <Loader2 className="w-8 h-8 animate-spin text-amber-800 mb-3" />
        <p className="text-sm font-semibold text-slate-600 tracking-wide">Calculating Sidereal Planetary Coordinates...</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-5 shadow-sm">
          <ShieldAlert className="w-8 h-8 text-amber-800" />
        </div>
        <h1 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">No Birth Details Found</h1>
        <p className="text-slate-600 text-sm mb-6 max-w-md leading-relaxed">
          Please fill in your birth details on the home page first so we can generate your chart.
        </p>
        <Link
          href="/"
          className="bg-amber-800 hover:bg-amber-900 active:scale-[0.98] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Return to Home Form
        </Link>
      </div>
    );
  }

  const ascendantSign = userData.ascendant || 'Aries';
  const rulerHouse = userData.rulerHouse ?? 1;
  const moonSign = userData.moonSign || 'Not calculated';
  const sunSign = userData.sunSign || 'Not calculated';
  const getElement = (sign) => SIGN_ELEMENTS[sign] || 'Unknown';
  const getElementLabel = (sign) => `${ELEMENT_EMOJIS[getElement(sign)] || ''} ${getElement(sign)}`.trim();

  const ascendantKey = Object.keys(ASCENDANT_REMEDIES || {}).find(
    (key) => key.toLowerCase() === ascendantSign.toLowerCase()
  ) || ascendantSign;

  const ascendantData = ASCENDANT_REMEDIES?.[ascendantKey] || {};

  const bottleneckProblem = typeof getPrimaryBottleneck === 'function'
    ? getPrimaryBottleneck(ascendantSign, rulerHouse)
    : null;

  const lifelineRemedy = typeof getLifelineRemedy === 'function'
    ? getLifelineRemedy(ascendantSign, rulerHouse)
    : null;

  const availablePlanets = userData.planetPositions
    ? Object.keys(userData.planetPositions)
    : Object.keys(PLANETARY_REMEDIES);

  const activePlanetPos = userData.planetPositions?.[selectedPlanet] || { sign: ascendantSign, house: 1 };

  // PLANETARY_REMEDIES is nested as [Planet][Ascendant][House].
  // Look up the remedy block for the planet's actual house placement
  // in this person's ascendant, not just the planet's generic entry.
  const activePlanetData =
    PLANETARY_REMEDIES?.[selectedPlanet]?.[ascendantSign]?.[String(activePlanetPos.house)] || {};

  const doshaAnalysis = userData.planetPositions
    ? getAllDoshaAnalysis(userData.planetPositions)
    : [];
  const orderedDoshaAnalysis = [...doshaAnalysis].sort(
    (first, second) => Number(second.present) - Number(first.present)
  );
  const activeFunctionalNature = typeof getFunctionalNature === 'function'
    ? getFunctionalNature(selectedPlanet, ascendantSign)
    : 'Benefic Planet';

  const activeExplanation = typeof getPlanetExplanation === 'function'
    ? getPlanetExplanation(selectedPlanet, activePlanetPos.sign, ascendantSign, activePlanetPos.house)
    : null;

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans antialiased pb-20">
      <header className="border-b border-amber-900/10 bg-[#FAF6F0]/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-amber-800 transition-colors duration-150">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>

          <BrandLogo />

          <button
            onClick={savePDF}
            className="flex items-center gap-2 bg-white border border-amber-900/15 hover:bg-amber-50 hover:border-amber-900/25 active:scale-[0.97] text-slate-700 text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-2 rounded-lg transition-all duration-150 shadow-sm hover:shadow-md"
          >
            <Printer className="w-3.5 h-3.5 text-amber-800" />
            <span className="hidden sm:inline">Save PDF</span>
          </button>
        </div>
      </header>

      {/* ============ ON-SCREEN CONTENT ============ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-5 sm:pt-8 space-y-4 sm:space-y-6">
        {/* Header / Identity Card */}
        <section className="bg-white border border-amber-900/15 rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 pb-6 border-b border-amber-900/10">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">{userData.name || 'User Chart'}</h1>
            </div>
            <div className="bg-[#FAF6F0] border border-amber-900/10 rounded-2xl p-4 text-xs space-y-1.5 font-medium text-slate-700 w-full md:w-auto min-w-[220px]">
              <div className="flex justify-between gap-4"><span className="text-black">Archetype :</span> <span className="text-right">{ascendantData?.tagline || `${ascendantSign} Persona`}</span></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            <div className="p-4 rounded-2xl bg-[#FAF6F0]/60 border border-amber-900/10 transition-colors duration-150 hover:bg-[#FAF6F0]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-black block mb-1">Ascendant</span>
              <span className="text-base font-bold text-slate-500">{ascendantSign} <span className="text-xs font-semibold text-amber-800">· {getElementLabel(ascendantSign)}</span></span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF6F0]/60 border border-amber-900/10 transition-colors duration-150 hover:bg-[#FAF6F0]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-black block mb-1">Moon Sign</span>
              <span className="text-base font-bold text-slate-500">{moonSign} {moonSign !== 'Not calculated' && <span className="text-xs font-semibold text-amber-800">· {getElementLabel(moonSign)}</span>}</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF6F0]/60 border border-amber-900/10 transition-colors duration-150 hover:bg-[#FAF6F0]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-black block mb-1">Sun Sign</span>
              <span className="text-base font-bold text-slate-500">{sunSign} {sunSign !== 'Not calculated' && <span className="text-xs font-semibold text-amber-800">· {getElementLabel(sunSign)}</span>}</span>
            </div>
          </div>
        </section>

        {/* Ascendant Conflict / Lifeline */}
        <section className="bg-white border border-amber-900/15 rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5 text-amber-800" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Core  Conflict & Lifeline</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#FAF6F0]/50 border border-amber-900/10 space-y-3 transition-colors duration-150 hover:bg-[#FAF6F0]/80">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">Primary Bottleneck</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                {bottleneckProblem || `Challenges related to ${ascendantSign} placements.`}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF6F0]/50 border border-amber-900/10 space-y-3 transition-colors duration-150 hover:bg-[#FAF6F0]/80">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">Lifeline Position Reading</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                {lifelineRemedy || `General alignment guidance for ${ascendantSign} placements.`}
              </p>
            </div>
          </div>
        </section>

        {/* Planetary Diagnostics (interactive - screen only) */}
        <section className="bg-white border border-amber-900/15 rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-amber-900/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Planetary Remedies</h2>
                <p className="text-xs text-slate-500 mt-0.5">Select a planet to view detailed tailored remedies</p>
              </div>
            </div>

            <div className="relative min-w-[180px]">
              <select
                value={selectedPlanet}
                onChange={(e) => setSelectedPlanet(e.target.value)}
                className="w-full appearance-none bg-[#FAF6F0] border border-amber-900/20 rounded-xl px-4 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-800/25 focus:border-amber-800/40 hover:bg-amber-50/60 cursor-pointer pr-10 transition-colors duration-150"
              >
                {availablePlanets.map((planet) => (
                  <option key={planet} value={planet}>
                    {planet} Placement
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-amber-900 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="px-2.5 sm:px-3 py-1.5 bg-amber-800 text-white font-bold text-[11px] sm:text-xs rounded-lg shadow-sm">
              {selectedPlanet}
            </span>

            <span className={`px-2.5 sm:px-3 py-1.5 font-bold text-[11px] sm:text-xs rounded-lg border transition-colors duration-150 ${activeFunctionalNature.toLowerCase().includes('benefic')
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
              : 'bg-rose-50 text-rose-800 border-rose-200'
              }`}>
              {activeFunctionalNature}
            </span>

            <span className="px-2.5 sm:px-3 py-1.5 bg-amber-100/70 text-amber-900 border border-amber-200 font-semibold text-[11px] sm:text-xs rounded-lg">
              {activePlanetPos.sign}
            </span>

            <span className="px-2.5 sm:px-3 py-1.5 bg-amber-100/70 text-amber-900 border border-amber-200 font-semibold text-[11px] sm:text-xs rounded-lg">
              {activePlanetPos.house}H
            </span>
          </div>

          {activeExplanation?.dignityText && (
            <p className="text-xs font-medium text-amber-900/80 bg-[#FAF6F0] p-3.5 rounded-xl border border-amber-900/10 leading-relaxed">
              {activeExplanation.dignityText}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF6F0]/40 border border-amber-900/10 space-y-2.5 transition-colors duration-150 hover:bg-[#FAF6F0]/70">
              <span className="text-xs font-bold text-rose-900 uppercase tracking-wider block">Core Problem & Affliction</span>
              <p className="text-xs text-slate-700 leading-relaxed">{activePlanetData.coreProblem}</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF6F0]/40 border border-amber-900/10 space-y-2.5 transition-colors duration-150 hover:bg-[#FAF6F0]/70">
              <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider block">Fast & Quick Donation Remedies</span>
              <p className="text-xs text-slate-700 leading-relaxed">{activePlanetData.quickRemedy}</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF6F0]/40 border border-amber-900/10 space-y-2.5 transition-colors duration-150 hover:bg-[#FAF6F0]/70">
              <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block">Practical Lifestyle Habits</span>
              <p className="text-xs text-slate-700 leading-relaxed">{activePlanetData.practicalRemedy}</p>
            </div>


            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF6F0]/40 border border-amber-900/10 space-y-2.5 transition-colors duration-150 hover:bg-[#FAF6F0]/70">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">Gemstone & Core Solution</span>
              <p className="text-xs text-slate-700 leading-relaxed">{activePlanetData.coreRemedy}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-900/5 border border-amber-900/15 border-l-4 border-l-amber-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider block mb-1">Vedic Sound Frequency (Mantra)</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">{activePlanetData.mantraRemedy}</span>
            </div>
            <span className="px-2.5 py-1 bg-white border border-amber-900/20 font-bold text-[11px] text-amber-900 rounded-lg shrink-0 shadow-sm">
              108 Recitations
            </span>
          </div>
        </section>

        {/* Dosha Diagnostics */}
        <section className="bg-white border border-amber-900/15 rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Special Dosha Diagnostics</h2>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full">FREE</span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">Automated planetary balance checks for {ascendantSign} Lagna</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {orderedDoshaAnalysis.map((dosha) => {
              const isPresent = dosha.present;
              const isUnknown = dosha.severity === 'unknown';

              return (
                <div
                  key={dosha.key}
                  className="p-4 rounded-2xl border border-amber-900/10 bg-[#FAF6F0]/30 transition-colors duration-150 hover:bg-[#FAF6F0]/60"
                >
                  <div className="flex items-start gap-3">
                    {isPresent ? (
                      <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${isUnknown ? 'text-slate-400' : 'text-emerald-600'}`} />
                    )}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-bold text-slate-900 text-sm">{dosha.name}</h4>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${isPresent
                          ? 'bg-amber-100 text-amber-900'
                          : isUnknown
                            ? 'bg-slate-100 text-slate-600'
                            : 'bg-emerald-100 text-emerald-800'
                          }`}>
                          {isPresent ? dosha.severity : isUnknown ? 'Unknown' : 'Clear'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{dosha.description}</p>
                      {dosha.remedies && (
                        <div className="mt-3 space-y-1.5 text-xs text-slate-700 leading-relaxed">
                          <p><span className="font-bold text-amber-900">Practical:</span> {dosha.remedies.practical}</p>
                          <p><span className="font-bold text-amber-900">Spiritual:</span> {dosha.remedies.spiritual}</p>
                          <p><span className="font-bold text-amber-900">Mantra:</span> {dosha.remedies.mantra}</p>
                          <p><span className="font-bold text-amber-900">Puja:</span> {dosha.remedies.puja}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Detailed Life Domains */}
        <section className="relative space-y-4 pt-2 overflow-hidden">
          <div className="relative min-h-[720px] md:min-h-[650px]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 px-1">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Detailed Life Domains</h2>
              <p className="text-xs text-slate-500 mt-0.5">In-depth career timelines, wealth cycles, relationship compatibility, and future forecasts</p>
            </div>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full w-fit">
              <Clock className="w-3 h-3" /> Coming Soon
            </span>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 blur-sm select-none pointer-events-none opacity-40">
              <div className="bg-white border border-amber-900/15 rounded-2xl p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-amber-800">
                  <User className="w-4 h-4" />
                  <h3 className="font-bold text-slate-900 text-sm">Personality & Mindset</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tailored analytical overview based on your {ascendantSign} ascendant and moon placement.
                </p>
              </div>

              <div className="bg-white border border-amber-900/15 rounded-2xl p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-amber-800">
                  <Briefcase className="w-4 h-4" />
                  <h3 className="font-bold text-slate-900 text-sm">Career & Profession</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High potential sectors based on 10th house and Dasha period timings.
                </p>
              </div>

              <div className="bg-white border border-amber-900/15 rounded-2xl p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-amber-800">
                  <Coins className="w-4 h-4" />
                  <h3 className="font-bold text-slate-900 text-sm">Finances & Wealth</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Wealth creation potential and secondary revenue streams.
                </p>
              </div>

              <div className="bg-white border border-amber-900/15 rounded-2xl p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-amber-800">
                  <Heart className="w-4 h-4" />
                  <h3 className="font-bold text-slate-900 text-sm">Marriage & Relationships</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  7th house dynamics and relationship stability analysis.
                </p>
              </div>

              <div className="bg-white border border-amber-900/15 rounded-2xl p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-amber-800">
                  <GraduationCap className="w-4 h-4" />
                  <h3 className="font-bold text-slate-900 text-sm">Education & Learning</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Technical disciplines and intuitive knowledge retention paths.
                </p>
              </div>

              <div className="bg-white border border-amber-900/15 rounded-2xl p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-amber-800">
                  <Flame className="w-4 h-4" />
                  <h3 className="font-bold text-slate-900 text-sm">Spirituality & Guidance</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Internal self-mastery, high-frequency mantras, and chart alignments.
                </p>
              </div>
            </div>

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center bg-white/75 backdrop-blur-sm">
              <div className="max-w-xl w-full bg-white/95 backdrop-blur-md border border-amber-900/20 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-800 text-amber-100 flex items-center justify-center mx-auto shadow-md">
                  <Clock className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Deep Life Domain Analysis — Coming Soon</h3>
                  <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">
                    We are currently calibrating high-precision deep readings for specific pain points:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left bg-[#FAF6F0] p-4 rounded-2xl border border-amber-900/10 text-xs">
                  <div className="flex items-start gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <span><b>Career Timeline:</b> Sector recommendations & promotion cycles</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <span><b>Wealth & Business:</b> Investment periods & revenue streams</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <span><b>Marriage & Dynamics:</b> Partner trait profile & timing</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <span><b>Domain Remedies:</b> Targeted mantras & lifestyle alignment</span>
                  </div>
                </div>

                <div className="w-full bg-amber-800/10 text-amber-900 font-bold py-3.5 px-6 rounded-xl text-xs border border-amber-800/20 flex items-center justify-center gap-2 cursor-not-allowed">
                  <Sparkles className="w-4 h-4 text-amber-700" />
                  <span>Full Report Module Launching Soon</span>
                </div>

                <p className="text-[10px] text-slate-400 font-medium">Free planetary remedies and gemstones remain fully accessible above.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============ HIDDEN PDF-ONLY CONTENT ============
          Never visible on screen. html2canvas renders this off-DOM-flow
          when savePDF() runs. Contains only free content:
          Identity + Ascendant + all planets Sun→Ketu + Dosha. */}
      <div
        id="pdf-content"
        style={{ display: 'none' }}
        className="px-10 py-10 max-w-4xl mx-auto text-slate-800 bg-white"
      >
        {/* Identity */}
        <div className="mb-6 pb-4 border-b border-slate-300">
          <h1 className="text-2xl font-black text-slate-900">{userData.name || 'User Chart'}</h1>
          <p className="text-xs text-slate-600 mt-1">Archetype: {ascendantData?.tagline || `${ascendantSign} Persona`}</p>
          <div className="flex gap-6 mt-2 text-xs text-slate-700">
            <span><b>Ascendant:</b> {ascendantSign} ({getElementLabel(ascendantSign)})</span>
            <span><b>Moon Sign:</b> {moonSign}{moonSign !== 'Not calculated' ? ` (${getElementLabel(moonSign)})` : ''}</span>
            <span><b>Sun Sign:</b> {sunSign}{sunSign !== 'Not calculated' ? ` (${getElementLabel(sunSign)})` : ''}</span>
          </div>
        </div>

        {/* Ascendant Conflict / Lifeline */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Core Ascendant Conflict & Lifeline</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
              <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider block mb-1">Primary Bottleneck</span>
              <p className="text-xs leading-relaxed">{bottleneckProblem || `Challenges related to ${ascendantSign} placements.`}</p>
            </div>
            <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
              <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider block mb-1">Lifeline Position Reading</span>
              <p className="text-xs leading-relaxed">{lifelineRemedy || `General alignment guidance for ${ascendantSign} placements.`}</p>
            </div>
          </div>
        </div>

        {/* All Planets: Sun -> Ketu */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-3">Planetary Remedies</h2>
          <div className="space-y-0">
            {availablePlanets.map((planet) => {
              const pos = userData.planetPositions?.[planet] || { sign: ascendantSign, house: 1 };

              // Nested lookup: [Planet][Ascendant][House] — matches the
              // planet's actual house placement for this person's ascendant.
              const data = PLANETARY_REMEDIES?.[planet]?.[ascendantSign]?.[String(pos.house)] || {};

              const nature = typeof getFunctionalNature === 'function'
                ? getFunctionalNature(planet, ascendantSign)
                : 'Benefic Planet';
              const explanation = typeof getPlanetExplanation === 'function'
                ? getPlanetExplanation(planet, pos.sign, ascendantSign, pos.house)
                : null;

              return (
                <div key={planet} className="pdf-block mb-4 p-4 rounded-xl border border-slate-200">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-amber-800 text-white font-bold text-[11px] rounded">{planet}</span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] rounded border border-slate-200">{nature}</span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] rounded border border-slate-200">Sign: {pos.sign}</span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] rounded border border-slate-200">House {pos.house}</span>
                  </div>

                  {explanation?.dignityText && (
                    <p className="text-[11px] text-amber-900/80 bg-amber-50 p-2 rounded mb-2">{explanation.dignityText}</p>
                  )}

                  <div className="grid grid-cols-2 gap-3 text-[11px] leading-relaxed">
                    <p><span className="font-bold text-rose-900">Core Problem: </span>{data.coreProblem}</p>
                    <p><span className="font-bold text-amber-900">Gemstone: </span>{data.coreRemedy}</p>
                    <p><span className="font-bold text-emerald-900">Lifestyle: </span>{data.practicalRemedy}</p>
                    <p><span className="font-bold text-indigo-900">Donation: </span>{data.quickRemedy}</p>
                  </div>

                  <p className="text-[11px] mt-2"><span className="font-bold text-amber-900">Mantra: </span>{data.mantraRemedy} <span className="text-slate-500">(108 Recitations Daily)</span></p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dosha Diagnostics */}
        <div className="mb-2">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Special Dosha Diagnostics</h2>
          <div className="grid grid-cols-2 gap-6">
            {orderedDoshaAnalysis.map((dosha) => (
              <div key={dosha.key} className="pdf-block p-3 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-slate-900 text-sm">{dosha.name}</h4>
                  <span className="text-[10px] font-bold uppercase text-slate-600">
                    {dosha.present ? dosha.severity : dosha.severity === 'unknown' ? 'Unknown' : 'Clear'}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{dosha.description}</p>
                {dosha.remedies && (
                  <div className="mt-2 space-y-1 text-[11px] leading-relaxed text-slate-700">
                    <p><span className="font-bold">Practical:</span> {dosha.remedies.practical}</p>
                    <p><span className="font-bold">Spiritual:</span> {dosha.remedies.spiritual}</p>
                    <p><span className="font-bold">Mantra:</span> {dosha.remedies.mantra}</p>
                    <p><span className="font-bold">Puja:</span> {dosha.remedies.puja}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}