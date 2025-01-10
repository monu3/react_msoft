// import { Card } from 'flowbite-react'
// import React from 'react'

// const BrandSetting = () => {
//   return (
//     <>
//     <div className=''>
//         <h2>Brand Settings</h2>
//         <p>Edit your brand details</p>
//     </div>
//     <div>
//     <Card href="#" className="max-w-sm">
//       <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//         Noteworthy technology acquisitions 2021
//       </h5>
//       <p className="font-normal text-gray-700 dark:text-gray-400">
//         Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
//       </p>
//     </Card>
//     </div>
//     </>
//   )
// }

// export default BrandSetting

// import React, { useState, useRef } from 'react'
// import { Card, Button, Label, Select } from 'flowbite-react'
// import { HiUpload } from 'react-icons/hi'

// interface LogoState {
//   preview: string
//   file: File | null
// }

// const BrandSetting = () => {
//   const [darkLogo, setDarkLogo] = useState<LogoState>({ preview: '/placeholder.svg', file: null })
//   const [lightLogo, setLightLogo] = useState<LogoState>({ preview: '/placeholder.svg', file: null })
//   const [favicon, setFavicon] = useState<LogoState>({ preview: '/placeholder.svg', file: null })

//   const darkLogoRef = useRef<HTMLInputElement>(null)
//   const lightLogoRef = useRef<HTMLInputElement>(null)
//   const faviconRef = useRef<HTMLInputElement>(null)

//   const handleFileChange = (
//     event: React.ChangeEvent<HTMLInputElement>,
//     setLogo: React.Dispatch<React.SetStateAction<LogoState>>
//   ) => {
//     const file = event.target.files?.[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setLogo({
//           preview: reader.result as string,
//           file: file,
//         })
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const triggerFileInput = (ref: React.RefObject<HTMLInputElement>) => {
//     ref.current?.click()
//   }

//   const renderLogoUpload = (
//     title: string,
//     logo: LogoState,
//     inputRef: React.RefObject<HTMLInputElement>,
//     setLogo: React.Dispatch<React.SetStateAction<LogoState>>
//   ) => (
//     <Card>
//       <div className="space-y-4 text-center">
//         <h3 className="font-medium">{title}</h3>
//         <div className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg aspect-video mb-4">
//           <img
//             src={logo.preview}
//             alt={`${title} Preview`}
//             className="max-h-20 w-auto object-contain"
//           />
//         </div>
//         <input
//           type="file"
//           ref={inputRef}
//           onChange={(e) => handleFileChange(e, setLogo)}
//           accept="image/*"
//           className="hidden"
//         />
//         <Button size="sm" outline onClick={() => triggerFileInput(inputRef)}>
//           <HiUpload className="mr-2 h-4 w-4" />
//           Choose file here
//         </Button>
//       </div>
//     </Card>
//   )

//   return (
//     <div className="p-6 space-y-6">
//       <div>
//         <h2 className="text-2xl font-bold">Brand Settings</h2>
//         <p className="text-gray-500">Edit your brand details</p>
//       </div>

//       <div className="grid gap-6 md:grid-cols-3">
//         {renderLogoUpload('Dark Logo', darkLogo, darkLogoRef, setDarkLogo)}
//         {renderLogoUpload('Light Logo', lightLogo, lightLogoRef, setLightLogo)}
//         {renderLogoUpload('Favicon', favicon, faviconRef, setFavicon)}
//       </div>

//       <div className="grid gap-6 md:grid-cols-3">
//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="title" value="Title Text" />
//           </div>
//           <input
//             id="title"
//             type="text"
//             defaultValue="MSoftCRM SaaS"
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="footer" value="Footer Text" />
//           </div>
//           <input
//             id="footer"
//             type="text"
//             defaultValue="MSoftCRM SaaS"
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="language" value="Default Language" />
//           </div>
//           <Select id="language" defaultValue="english">
//             <option value="english">ENGLISH</option>
//             <option value="spanish">Spanish</option>
//             <option value="french">French</option>
//             <option value="german">German</option>
//           </Select>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BrandSetting
import { Button, Dropdown } from "flowbite-react";
import React, { useState } from "react";
import {
  FormContainer,
  FormField,
  FormGrid,
  FormLayout,
} from "~/common/components/FormLayout";
import {
  CardContainer,
  CardImage,
  CardInputFile,
  CardLayout,
} from "~/common/components/ImageInputCardLayouts";

const BrandSetting = () => {
  // const [selectedLogo, setSelectedLogo] = useState<string>();
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedLogo(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };
  return (
    <FormContainer title="Brand Setting" description="Edit your brand setting">
      <form action="">
        <div className="grid grid-cols-3">
          <CardLayout>
            <CardContainer title="Light Logo">
              {selectedLogo && (
                <CardImage src={selectedLogo} alt="Selected logo" />
              )}
              <div className="mt-4">
                <CardInputFile
                  onFileSelect={handleFileSelect}
                  accept="image/*"
                />
              </div>
            </CardContainer>
          </CardLayout>
          <CardLayout>
            <CardContainer title="Dark Logo">
              {selectedLogo && (
                <CardImage src={selectedLogo} alt="Selected logo" />
              )}
              <div className="mt-4">
                <CardInputFile
                  onFileSelect={handleFileSelect}
                  accept="image/*"
                />
              </div>
            </CardContainer>
          </CardLayout>
          <CardLayout>
            <CardContainer title="Fav Icon">
              {selectedLogo && (
                <CardImage src={selectedLogo} alt="Selected logo" />
              )}
              <div className="mt-4">
                <CardInputFile
                  onFileSelect={handleFileSelect}
                  accept="image/*"
                />
              </div>
            </CardContainer>
          </CardLayout>
        </div>
        <FormGrid>
          <FormField label="Title Text" id="title-text" defaultValue="" />
          <FormField label="Footer Text" id="footer-text" defaultValue="" />
        </FormGrid>
        <div className="flex flex-wrap items-center justify-end gap-4 my-4">
          <Button color="warning">Save Changes</Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default BrandSetting;
