'use client';

import { useState, useEffect } from 'react';

export function useGeoLocation() {
  const [country, setCountry] = useState('IN'); // Default to India
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Check local storage first
    const cachedCountry = localStorage.getItem('user_country');
    if (cachedCountry) {
      setCountry(cachedCountry);
      setLoading(false);
      return;
    }

    // 2. Fetch from IP API if not cached
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        const detectedCountry = data.country_code || 'IN';
        localStorage.setItem('user_country', detectedCountry);
        setCountry(detectedCountry);
      })
      .catch(() => setCountry('IN')) // Fallback to IN on failure
      .finally(() => setLoading(false));
  }, []);

  return { 
    country, 
    isIndia: country === 'IN', 
    loading 
  };
}