import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useBrandSettings } from '../hook/useBrandSettings';

const BrandSetting = () => {
  const { settings, updateSettings } = useBrandSettings();
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [localTitleText, setLocalTitleText] = useState(settings.titleText);
  const [imagePreview, setImagePreview] = useState({
    lightLogo: settings.lightLogo,
    darkLogo: settings.darkLogo,
    favIcon: settings.favIcon
  });

  useEffect(() => {
    setLocalTitleText(settings.titleText);
  }, [settings.titleText]);

  const handleFileSelect = (type: 'lightLogo' | 'darkLogo' | 'favIcon') => (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImagePreview(prev => ({ ...prev, [type]: result }));
        updateSettings({ [type]: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const titleText = localTitleText.trim() || 'ReDash';
    const footerText = formData.get('footerText')?.toString().trim() || '';
    updateSettings({ titleText, footerText });
    setIsFormOpen(false);
  };

  if (!isFormOpen) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-lg">Brand settings saved successfully!</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-4">Light Logo</h3>
              <div className="h-48 mb-4 flex items-center justify-center bg-gray-50 rounded-lg">
                {imagePreview.lightLogo ? (
                  <img
                    src={imagePreview.lightLogo}
                    alt="Light logo"
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="text-gray-400">No image uploaded</div>
                )}
              </div>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileSelect('lightLogo')(e)}
                className="mt-2"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-4">Dark Logo</h3>
              <div className="h-48 mb-4 flex items-center justify-center bg-gray-50 rounded-lg">
                {imagePreview.darkLogo ? (
                  <img
                    src={imagePreview.darkLogo}
                    alt="Dark logo"
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="text-gray-400">No image uploaded</div>
                )}
              </div>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileSelect('darkLogo')(e)}
                className="mt-2"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-4">Fav Icon</h3>
              <div className="h-48 mb-4 flex items-center justify-center bg-gray-50 rounded-lg">
                {imagePreview.favIcon ? (
                  <img
                    src={imagePreview.favIcon}
                    alt="Favicon"
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="text-gray-400">No image uploaded</div>
                )}
              </div>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileSelect('favIcon')(e)}
                className="mt-2"
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="titleText" className="block font-medium mb-2">
                Title Text
              </label>
              <Input
                id="titleText"
                name="titleText"
                value={localTitleText}
                onChange={(e) => setLocalTitleText(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  );
};

export default BrandSetting;