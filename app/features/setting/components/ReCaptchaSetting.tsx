import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const ReCaptchaSetting = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <div>
      <form action="">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
          <div>
            <label htmlFor="recaptcha" className="block font-medium mb-2">
              Google ReCaptcha Key
            </label>
            <Input
              id="recaptcha"
              name="recaptcha"
              placeholder="Enter Google ReCaptcha Key"
              defaultValue=""
            />
          </div>

          <div>
            <label htmlFor="recaptcha-secret" className="block font-medium mb-2">
              Google ReCaptcha Secret
            </label>
            <Input
              id="recaptcha-secret"
              name="recaptcha-secret"
              placeholder="Enter Google ReCaptcha Secret"
              defaultValue=""
            />
          </div>
        </div>

        <div className="flex items-center gap-2 mt-10">
          <Switch
            checked={isEnabled}
            onCheckedChange={setIsEnabled}
          />
          <label htmlFor="recaptcha-enable" className="text-sm font-medium">
            Enable
          </label>
        </div>

        <div className="mt-6">
          <Button>Save Changes</Button>
        </div>
      </form>
    </div>
  );
};

export default ReCaptchaSetting;