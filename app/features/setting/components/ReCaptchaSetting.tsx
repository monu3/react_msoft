import {ToggleSwitch } from "flowbite-react";
import { Button } from '@/components/ui/button';
import React, { useState } from "react";
import { FormContainer, FormField, FormGrid } from "~/common/components/FormLayout";

const ReCaptchaSetting = () => {
  const [switch1, setSwitch1] = useState(true);
  return (
    <FormContainer
      description=""
    >
      <form action="">
        <FormGrid>
          <div className="space-y-6">
            <FormField label="Google ReCaptcha Key" id="recaptcha" defaultValue="" placeholder="Enter Google ReCaptcha Key" name=""/>
          </div>
          <div className="space-y-6">
            <FormField
              label="Google ReCaptcha Secret"
              id=""
              defaultValue=""
              placeholder="Enter Google ReCaptcha Secret"
              name=""
            />
          </div>
        </FormGrid>
        <div className="flex mt-10"> 
          <ToggleSwitch checked={switch1} onChange={setSwitch1} label="Enable"/>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-4 my-4">
          <Button>Save Changes</Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default ReCaptchaSetting;
