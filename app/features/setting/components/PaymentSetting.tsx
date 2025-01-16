import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const PaymentSetting = () => {
  const [esewaEnabled, setEsewaEnabled] = useState(false);

  return (
    <div className="p-6">
      <form action="">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
          <div>
            <label htmlFor="currency" className="block font-medium mb-2">
              Currency
            </label>
            <Input
              id="currency"
              name="currency"
              defaultValue="NPR"
            />
          </div>

          <div>
            <label htmlFor="currency-symbol" className="block font-medium mb-2">
              Currency Symbol
            </label>
            <Input
              id="currency-symbol"
              name="currency-symbol"
              defaultValue="Rs."
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 p-4 bg-blue-50 rounded-lg">
          <span className="font-medium">ESEWA</span>
          <Switch
            checked={esewaEnabled}
            onCheckedChange={setEsewaEnabled}
          />
        </div>

        <div className="mt-6">
          <Button>Save Changes</Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentSetting;