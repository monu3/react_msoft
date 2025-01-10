import { Button, ToggleSwitch } from "flowbite-react";
import React, { useState } from "react";
import { FormContainer, FormField, FormGrid } from "~/common/components/FormLayout";

const ReCaptchaSetting = () => {
  const [switch1, setSwitch1] = useState(true);
  return (
    <FormContainer
      title="ReCaptcha Settings"
      description=""
    >
      <form action="">
        <FormGrid>
          <div className="space-y-6">
            <FormField label="Google ReCaptcha Key" id="recaptcha" defaultValue="" placeholder="Enter Google ReCaptcha Key"/>
          </div>
          <div className="space-y-6">
            <FormField
              label="Google ReCaptcha Secret"
              id=""
              defaultValue=""
              placeholder="Enter Google ReCaptcha Secret"
            />
          </div>
        </FormGrid>
        <div className="flex mt-10"> 
          <ToggleSwitch checked={switch1} onChange={setSwitch1} label="Enable"/>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-4 my-4">
          <Button color="warning">Save Changes</Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default ReCaptchaSetting;
