import { Button, ToggleSwitch } from "flowbite-react";
import React, { useState } from "react";
import {
  FormContainer,
  FormField,
  FormGrid,
} from "~/common/components/FormLayout";

const PaymentSetting = () => {
  const [switch1, setSwitch1] = useState(false);
  return (
    <FormContainer
      title="Payment Setting"
      description="Edit your payment setting"
    >
      <form action="">
        <FormGrid>
          <div className="space-y-6">
            <FormField label="Currency" id="currency" defaultValue="NPR" />
          </div>
          <div className="space-y-6">
            <FormField
              label="Currency Symbol"
              id="currency-symbol"
              defaultValue="Rs."
            />
          </div>
        </FormGrid>
        <div className="flex justify-between mt-4 rounded-md p-3 bg-brand-light">
          <p>ESEWA</p>
          <ToggleSwitch
            checked={switch1}
            onChange={setSwitch1} 
          />
        </div>
        <div className="flex flex-wrap items-center justify-end gap-4 my-4">
          <Button color="warning">Save Changes</Button>
        </div>
      </form>
    </FormContainer>
  )
}

export default PaymentSetting;
