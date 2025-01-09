export interface FormProps {
  onClose: () => void;
}

export interface SidebarItem {
  label: string;
  form: string; // The associated form's key
}
