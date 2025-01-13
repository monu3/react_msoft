import { Button } from '@/components/ui/button';
import React from "react";
import {
  FormContainer,
  FormGrid,
  FormField,
} from "~/common/components/FormLayout";

const PusherSettings = () => {
  return (
    <FormContainer description="Edit Pusher Settings">
      <form className="space-y-6">
        <FormGrid>
          <div className="space-y-6">
            <FormField label="Pusher App Id" id="pusher-app" defaultValue="" name=''/>
            <FormField
              label="Pusher App Secret"
              id="pusher-app-secret"
              defaultValue=""
              name=''
            />
          </div>
          <div className="space-y-6">
            <FormField
              label="Pusher App Key"
              id="pusher-app-key"
              defaultValue=""
              name=''
            />
            <FormField
              label="Pusher App Cluster"
              id="pusher-app-cluster"
              defaultValue=""
              name=''
            />
          </div>
        </FormGrid>

        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default PusherSettings;
