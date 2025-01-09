// import React from "react";

// interface FormLayoutProps {
//   children: React.ReactNode;
//   // navbarContent: React.ReactNode;
// }

// const FormLayout: React.FC<FormLayoutProps> = ({ children}) => {
//   return (
//     <div className="flex">
//       {/* Left side navbar (1/4 width)
//       <nav className="w-1/4 bg-gray-100 p-4">{navbarContent}</nav> */}

//       {/* Right side form content (3/4 width) */}
//       <main className="w-full mx-6 my-auto p-4 bg-white shadow-lg rounded-lg sm:w-3/4 sm:mx-auto sm:p-8">{children}</main>
//     </div>
//   );
// };

// export default FormLayout;
import React from "react"

interface FormLayoutProps {
  children: React.ReactNode
  // navbarContent: React.ReactNode
}

interface FormContainerProps {
  title: string
  description: string
  children: React.ReactNode
}

const FormContainer: React.FC<FormContainerProps> = ({ title, description, children }) => {
  return (
    <div className="max-w-4xl p-6 bg-white rounded-lg shadow">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      {children}
    </div>
  )
}

const FormLayout: React.FC<FormLayoutProps> = ({ children}) => {
  return (
    <div className="flex min-h-screen">
      {/* <nav className="w-1/4 bg-gray-100 p-4">{navbarContent}</nav> */}
      <main className="w-3/4 p-4">{children}</main>
    </div>
  )
}

// Common form grid layout component
interface FormGridProps {
  children: React.ReactNode
}

const FormGrid: React.FC<FormGridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {children}
    </div>
  )
}

// Common form field component
interface FormFieldProps {
  label: string
  id: string
  type?: string
  placeholder?: string
  defaultValue?: string
  required?: boolean
}

const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  id, 
  type = "text", 
  placeholder, 
  defaultValue,
  required = true 
}) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
      />
    </div>
  )
}

export { FormLayout, FormContainer, FormGrid, FormField }
