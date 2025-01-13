import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useBrandSettings } from '../hook/useBrandSettings';
import {
  FormContainer,
  FormField,
  FormGrid,
} from '~/common/components/FormLayout';
import {
  CardContainer,
  CardImage,
  CardInputFile,
  CardLayout,
} from '~/common/components/ImageInputCardLayouts';

const BrandSetting = () => {
  const { settings, updateSettings } = useBrandSettings();
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [localTitleText, setLocalTitleText] = useState(settings.titleText);

  useEffect(() => {
    setLocalTitleText(settings.titleText);
  }, [settings.titleText]);

  const handleFileSelect = (type: 'lightLogo' | 'darkLogo' | 'favIcon') => (file: File) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const result = e.target?.result as string;
      updateSettings({ [type]: result });
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const titleText = localTitleText.trim() || 'ReDash';
    const footerText = formData.get('footerText')?.toString().trim() || '';

    updateSettings({ titleText, footerText });
    setIsFormOpen(false);
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalTitleText(e.target.value);
      };

  if (!isFormOpen) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-lg">Brand settings saved successfully!</p>
      </div>
    );
  }

  return (
    <FormContainer description="Edit your brand setting">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4">
          <CardLayout>
            <CardContainer title="Light Logo">
              {settings.lightLogo && (
                <CardImage src={settings.lightLogo} alt="Light logo" />
              )}
              <div className="mt-4">
                <CardInputFile 
                  onFileSelect={handleFileSelect('lightLogo')} 
                  accept="image/*" 
                />
              </div>
            </CardContainer>
          </CardLayout>

          <CardLayout>
            <CardContainer title="Dark Logo">
              {settings.darkLogo && (
                <CardImage src={settings.darkLogo} alt="Dark logo" />
              )}
              <div className="mt-4">
                <CardInputFile 
                  onFileSelect={handleFileSelect('darkLogo')} 
                  accept="image/*" 
                />
              </div>
            </CardContainer>
          </CardLayout>

          <CardLayout>
            <CardContainer title="Fav Icon">
              {settings.favIcon && (
                <CardImage src={settings.favIcon} alt="Favicon" />
              )}
              <div className="mt-4">
                <CardInputFile 
                  onFileSelect={handleFileSelect('favIcon')} 
                  accept="image/*" 
                />
              </div>
            </CardContainer>
          </CardLayout>
        </div>

        <FormGrid>
          <FormField 
            label="Title Text" 
            id="titleText" 
            value={localTitleText}
            onChange={handleTitleChange}
            name="titleText"
          />
        </FormGrid>

        <div className="flex flex-wrap items-center justify-end gap-4 my-4">
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default BrandSetting;


