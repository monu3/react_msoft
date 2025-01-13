import { useState, useEffect, useCallback } from 'react';
import type { BrandSettings } from '../types/types';

export const BRAND_SETTINGS_KEY = 'brandSettings';
export const BRAND_SETTINGS_UPDATED_EVENT = 'brandSettingsUpdated';

const defaultSettings: BrandSettings = {
  lightLogo: null,
  darkLogo: null,
  favIcon: null,
  titleText: 'ReDash',
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

  // Listen for settings updates from other components
  useEffect(() => {
    const handleSettingsUpdate = (event: CustomEvent<BrandSettings>) => {
      setSettings(event.detail);
    };

    window.addEventListener(
      BRAND_SETTINGS_UPDATED_EVENT,
      handleSettingsUpdate as EventListener
    );

    return () => {
      window.removeEventListener(
        BRAND_SETTINGS_UPDATED_EVENT,
        handleSettingsUpdate as EventListener
      );
    };
  }, []);

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

  const updateSettings = useCallback((newSettings: Partial<BrandSettings>) => {
    setSettings(prev => {
      const updated = { ...prev, ...newSettings };
      if (typeof window !== 'undefined') {
        localStorage.setItem(BRAND_SETTINGS_KEY, JSON.stringify(updated));
        window.dispatchEvent(
          new CustomEvent(BRAND_SETTINGS_UPDATED_EVENT, { detail: updated })
        );
      }
      return updated;
    });
  }, []);

  return { settings, updateSettings };
};






