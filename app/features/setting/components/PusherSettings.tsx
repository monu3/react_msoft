import { Button } from "flowbite-react";
import React from "react";
import {
  FormContainer,
  FormGrid,
  FormField,
} from "~/common/components/FormLayout";

const PusherSettings = () => {
  return (
    <FormContainer title="Pusher Settings" description="Edit Pusher Settings">
      <form className="space-y-6">
        <FormGrid>
          <div className="space-y-6">
            <FormField label="Pusher App Id" id="pusher-app" defaultValue="" />
            <FormField
              label="Pusher App Secret"
              id="pusher-app-secret"
              defaultValue=""
            />
          </div>
          <div className="space-y-6">
            <FormField
              label="Pusher App Key"
              id="pusher-app-key"
              defaultValue=""
            />
            <FormField
              label="Pusher App Cluster"
              id="pusher-app-cluster"
              defaultValue=""
            />
          </div>
        </FormGrid>

        <div className="flex justify-end">
          <Button color="warning">Save Changes</Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default PusherSettings;
