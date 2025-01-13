// import { useState, useEffect } from 'react';
// import type { BrandSettings } from '../types/types';

// export const BRAND_SETTINGS_KEY = 'brandSettings';


// const defaultSettings: BrandSettings = {
//   lightLogo: null,
//   darkLogo: null,
//   favIcon: null,
//   titleText: '',
//   footerText: ''
// };

// export const useBrandSettings = () => {
//   const [settings, setSettings] = useState<BrandSettings>(() => {
//     try {
//       const stored = localStorage.getItem(BRAND_SETTINGS_KEY);
//       return stored ? JSON.parse(stored) : defaultSettings;
//     } catch (error) {
//       console.error('Error loading brand settings:', error);
//       return defaultSettings;
//     }
//   });

//   useEffect(() => {
//     localStorage.setItem(BRAND_SETTINGS_KEY, JSON.stringify(settings));
//   }, [settings]);

//   const updateSettings = (newSettings: Partial<BrandSettings>) => {
//     setSettings(prev => {
//       const updated = { ...prev, ...newSettings };
//       localStorage.setItem(BRAND_SETTINGS_KEY, JSON.stringify(updated));
//       return updated;
//     });
//   };

//   return { settings, updateSettings };
// };

// import { useState, useEffect } from 'react';
// import type { BrandSettings } from '../types/types';

// export const BRAND_SETTINGS_KEY = 'brandSettings';

// const defaultSettings: BrandSettings = {
//   lightLogo: null,
//   darkLogo: null,
//   favIcon: null,
//   titleText: 'Default Title',
//   footerText: ''
// };

// export const useBrandSettings = () => {
//   const [settings, setSettings] = useState<BrandSettings>(() => {
//     if (typeof window !== 'undefined') {
//       try {
//         const stored = localStorage.getItem(BRAND_SETTINGS_KEY);
//         return stored ? JSON.parse(stored) : defaultSettings;
//       } catch (error) {
//         console.error('Error loading brand settings:', error);
//         return defaultSettings;
//       }
//     }
//     return defaultSettings;
//   });

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       localStorage.setItem(BRAND_SETTINGS_KEY, JSON.stringify(settings));
//     }
//   }, [settings]);

//   useEffect(() => {
//     document.title = settings.titleText || 'Default Title';
//   }, [settings.titleText]);

//   const updateSettings = (newSettings: Partial<BrandSettings>) => {
//     setSettings(prev => {
//       const updated = { ...prev, ...newSettings };
//       if (typeof window !== 'undefined') {
//         localStorage.setItem(BRAND_SETTINGS_KEY, JSON.stringify(updated));
//       }
//       return updated;
//     });
//   };

//   return { settings, updateSettings };
// };

import { useState, useEffect } from 'react';
import type { BrandSettings } from '../types/types';

export const BRAND_SETTINGS_KEY = 'brandSettings';

const defaultSettings: BrandSettings = {
  lightLogo: null,
  darkLogo: null,
  favIcon: null,
  titleText: 'Default Title',
  footerText: ''
};

export const useBrandSettings = () => {
  const [settings, setSettings] = useState<BrandSettings>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(BRAND_SETTINGS_KEY);
        return stored ? JSON.parse(stored) : defaultSettings;
      } catch (error) {
        console.error('Error loading brand settings:', error);
        return defaultSettings;
      }
    }
    return defaultSettings;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(BRAND_SETTINGS_KEY, JSON.stringify(settings));
    }
  }, [settings]);

  useEffect(() => {
    if (settings.titleText) {
      document.title = settings.titleText;
    }
  }, [settings.titleText]);

  const updateSettings = (newSettings: Partial<BrandSettings>) => {
    setSettings(prev => {
      const updated = { ...prev, ...newSettings };
      if (typeof window !== 'undefined') {
        localStorage.setItem(BRAND_SETTINGS_KEY, JSON.stringify(updated));
      }
      return updated;
    });
  };

  return { settings, updateSettings };
};



