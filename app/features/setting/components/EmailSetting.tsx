import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const EmailSettingsForm = () => {
  return (
    <div className=" bg-white rounded-lg shadow">
      <form className="space-y-6">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label htmlFor="mail-driver" className="block font-medium mb-2">
                Mail Driver
              </label>
              <Input
                type="text"
                id="mail-driver"
                name="mail-driver"
                defaultValue="smtp"
              />
            </div>

            <div>
              <label htmlFor="mail-port" className="block font-medium mb-2">
                Mail Port
              </label>
              <Input
                type="text"
                id="mail-port"
                name="mail-port"
                defaultValue="465"
              />
            </div>

            <div>
              <label htmlFor="mail-password" className="block font-medium mb-2">
                Mail Password
              </label>
              <Input
                type="password"
                id="mail-password"
                name="mail-password"
                defaultValue="cif#xace7d+"
              />
            </div>

            <div>
              <label htmlFor="mail-from-address" className="block font-medium mb-2">
                Mail From Address
              </label>
              <Input
                type="email"
                id="mail-from-address"
                name="mail-from-address"
                defaultValue="info@bizzosflow.com"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label htmlFor="mail-host" className="block font-medium mb-2">
                Mail Host
              </label>
              <Input
                type="text"
                id="mail-host"
                name="mail-host"
                defaultValue="mail.bizzosflow.com"
              />
            </div>

            <div>
              <label htmlFor="mail-username" className="block font-medium mb-2">
                Mail Username
              </label>
              <Input
                type="email"
                id="mail-username"
                name="mail-username"
                defaultValue="info@bizzosflow.com"
              />
            </div>

            <div>
              <label htmlFor="mail-encryption" className="block font-medium mb-2">
                Mail Encryption
              </label>
              <Input
                type="text"
                id="mail-encryption"
                name="mail-encryption"
                defaultValue="ssl"
              />
            </div>

            <div>
              <label htmlFor="mail-from-name" className="block font-medium mb-2">
                Mail From Name
              </label>
              <Input
                type="text"
                id="mail-from-name"
                name="mail-from-name"
                defaultValue="Msoft International"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <Button>Send Test Mail</Button>
          <Button>Save Changes</Button>
        </div>
      </form>
    </div>
  );
};

export default EmailSettingsForm;