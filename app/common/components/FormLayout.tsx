import React from "react"
import { cn } from "@/lib/utils"

interface FormLayoutProps {
  children: React.ReactNode
  className?: string
}

interface FormContainerProps {
  description: string
  children: React.ReactNode
  className?: string
}

interface FormGridProps {
  children: React.ReactNode
  className?: string
}

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  name: string
}

const FormContainer: React.FC<FormContainerProps> = ({ description, children, className }) => {
  return (
    <div>
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  )
}

const FormLayout: React.FC<FormLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("flex min-h-screen", className)}>
      <main className="w-full p-4">{children}</main>
    </div>
  )
}

const FormGrid: React.FC<FormGridProps> = ({ children, className }) => {
  return (
    <div className={cn("grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-6", className)}>
      {children}
    </div>
  )
}

const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  id,
  name, 
  type = "text", 
  className,
  required = false,
  ...props
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        {...props}
      />
    </div>
  )
}

export { FormLayout, FormContainer, FormGrid, FormField }

