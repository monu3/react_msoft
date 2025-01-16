import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const PusherSettingsForm = () => {
  return (
    <div>
      <form action="" id="pusher-settings">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="pusher-app">Pusher App Id</label>
              <Input
                name="pusher-app"
                id="pusher-app"
                defaultValue=""
              />
            </div>
            <div>
              <label htmlFor="pusher-app-secret">Pusher App Secret</label>
              <Input
                name="pusher-app-secret"
                id="pusher-app-secret"
                defaultValue=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="pusher-app-key">Pusher App Key</label>
              <Input
                name="pusher-app-key"
                id="pusher-app-key"
                defaultValue=""
              />
            </div>
            <div>
              <label htmlFor="pusher-app-cluster">Pusher App Cluster</label>
              <Input
                name="pusher-app-cluster"
                id="pusher-app-cluster"
                defaultValue=""
              />
            </div>
          </div>
        </div>
        <Button className="mt-2">Save Changes</Button>
      </form>
    </div>
  );
};

export default PusherSettingsForm;