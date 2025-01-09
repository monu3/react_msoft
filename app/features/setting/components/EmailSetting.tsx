// import { Button } from "flowbite-react";
// import React from "react";
// import FormLayout from "~/common/components/FormLayout";

// const EmailSetting = () => {
//   return (
//     <>
//     <FormLayout>
//       <div>
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold text-gray-900">
//             Email Settings
//           </h2>
//           <p className="text-sm text-gray-500">Edit your email details</p>
//         </div>

//         <form className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             {/* Left Column */}
//             <div className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="mail-driver"
//                   className="block mb-2 text-sm font-medium text-gray-900"
//                 >
//                   Mail Driver
//                 </label>
//                 <input
//                   type="text"
//                   id="mail-driver"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                   defaultValue="smtp"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="mail-port"
//                   className="block mb-2 text-sm font-medium text-gray-900"
//                 >
//                   Mail Port
//                 </label>
//                 <input
//                   type="text"
//                   id="mail-port"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                   defaultValue="465"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="mail-password"
//                   className="block mb-2 text-sm font-medium text-gray-900"
//                 >
//                   Mail Password
//                 </label>
//                 <input
//                   type="password"
//                   id="mail-password"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                   defaultValue="cif#xace7d+"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="mail-from-address"
//                   className="block mb-2 text-sm font-medium text-gray-900"
//                 >
//                   Mail From Address
//                 </label>
//                 <input
//                   type="email"
//                   id="mail-from-address"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                   defaultValue="info@bizzosflow.com"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="mail-host"
//                   className="block mb-2 text-sm font-medium text-gray-900"
//                 >
//                   Mail Host
//                 </label>
//                 <input
//                   type="text"
//                   id="mail-host"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                   defaultValue="mail.bizzosflow.com"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="mail-username"
//                   className="block mb-2 text-sm font-medium text-gray-900"
//                 >
//                   Mail Username
//                 </label>
//                 <input
//                   type="email"
//                   id="mail-username"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                   defaultValue="info@bizzosflow.com"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="mail-encryption"
//                   className="block mb-2 text-sm font-medium text-gray-900"
//                 >
//                   Mail Encryption
//                 </label>
//                 <input
//                   type="text"
//                   id="mail-encryption"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                   defaultValue="ssl"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="mail-from-name"
//                   className="block mb-2 text-sm font-medium text-gray-900"
//                 >
//                   Mail From Name
//                 </label>
//                 <input
//                   type="text"
//                   id="mail-from-name"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                   defaultValue="Msoft International"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-wrap items-center gap-4">
//             <Button color="warning">Send Test Mail</Button>
//             <Button color="warning">Save Changes</Button>
//           </div>
//         </form>
//       </div>
//       </FormLayout>
//     </>
//   );
// };

// export default EmailSetting;
'use client'

import { Button } from 'flowbite-react'
import { FormContainer, FormGrid, FormField } from '~/common/components/FormLayout'

export default function EmailSettingsForm() {
  return (
    <FormContainer 
      title="Email Settings"
      description="Edit your email details"
    >
      <form className="space-y-6">
        <FormGrid>
          {/* Left Column */}
          <div className="space-y-6">
            <FormField
              label="Mail Driver"
              id="mail-driver"
              defaultValue="smtp"
            />
            <FormField
              label="Mail Port"
              id="mail-port"
              defaultValue="465"
            />
            <FormField
              label="Mail Password"
              id="mail-password"
              type="password"
              defaultValue="cif#xace7d+"
            />
            <FormField
              label="Mail From Address"
              id="mail-from-address"
              type="email"
              defaultValue="info@bizzosflow.com"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <FormField
              label="Mail Host"
              id="mail-host"
              defaultValue="mail.bizzosflow.com"
            />
            <FormField
              label="Mail Username"
              id="mail-username"
              type="email"
              defaultValue="info@bizzosflow.com"
            />
            <FormField
              label="Mail Encryption"
              id="mail-encryption"
              defaultValue="ssl"
            />
            <FormField
              label="Mail From Name"
              id="mail-from-name"
              defaultValue="Msoft International"
            />
          </div>
        </FormGrid>

        <div className="flex flex-wrap items-center gap-4">
          <Button color="warning">
            Send Test Mail
          </Button>
          <Button color="warning">
            Save Changes
          </Button>
        </div>
      </form>
    </FormContainer>
  )
}


