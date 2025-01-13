// import React from "react";

// type FormProps = {
//   onAddLogo: (logo: { alt: string; src: string }) => void;
// };

// export default function TrustedAdmin({ onAddLogo }: FormProps) {
//   const handleAddLogo = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const form = event.target as HTMLFormElement;
//     const newAlt = (form.elements.namedItem("alt") as HTMLInputElement).value;
//     const newSrc = (form.elements.namedItem("src") as HTMLInputElement).value;

//     if (newAlt && newSrc) {
//       onAddLogo({ alt: newAlt, src: newSrc });
//       form.reset(); // Clear form inputs
//     }
//   };

//   return (
//     <div className="mt-16">
//       <h3 className="text-center text-lg font-semibold text-gray-900 mb-4">
//         Add a New Logo
//       </h3>
//       <form
//         onSubmit={handleAddLogo}
//         className="mx-auto max-w-md bg-gray-100 p-6 rounded-lg shadow-md"
//       >
//         <div className="mb-4">
//           <label
//             htmlFor="alt"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Logo Name (Alt Text):
//           </label>
//           <input
//             type="text"
//             id="alt"
//             name="alt"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="src"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Logo URL:
//           </label>
//           <input
//             type="url"
//             id="src"
//             name="src"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//         >
//           Add Logo
//         </button>
//       </form>
//     </div>
//   );
// }

// TrustedAdmin.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Logo = {
  alt: string;
  src: string;
};

const LOCAL_STORAGE_KEY = "logos_data";

// Function to get logos from local storage
function getLogos(): Logo[] {
  if (typeof window !== "undefined") {
    const storedLogos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedLogos ? JSON.parse(storedLogos) : [];
  }
  return [];
}

// Function to save logos to local storage
function saveLogos(logos: Logo[]) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(logos));
}

export default function TrustedAdmin() {
  const [logos, setLogos] = useState<Logo[]>(getLogos());
  const [formData, setFormData] = useState({ alt: "", src: "" });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLogos(getLogos());
  }, []);

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleEdit(index: number) {
    const logo = logos[index];
    setFormData({ alt: logo.alt, src: logo.src });
    setEditingIndex(index);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { alt, src } = formData;

    if (alt && src) {
      const newLogo = { alt, src };

      if (editingIndex !== null) {
        // Edit existing logo
        const updatedLogos = [...logos];
        updatedLogos[editingIndex] = newLogo;
        setLogos(updatedLogos);
        saveLogos(updatedLogos);
        setMessage("Logo updated successfully!");
      } else {
        // Add new logo
        const updatedLogos = [...logos, newLogo];
        setLogos(updatedLogos);
        saveLogos(updatedLogos);
        setMessage("Logo added successfully!");
      }

      setFormData({ alt: "", src: "" });
      setEditingIndex(null);
    }
  }

  function handleDelete(index: number) {
    const updatedLogos = logos.filter((_, i) => i !== index);
    setLogos(updatedLogos);
    saveLogos(updatedLogos);
    setMessage("Logo deleted successfully!");
  }

  return (
    <div className="p-6 max-w-4xl mx-auto custom-scroll-container scrollbar-hidden">
      <h1 className="text-2xl font-bold mb-6">
        {editingIndex !== null ? "Edit Logo" : "Add Logo"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Logo Name (Alt Text):</label>
          <Input
            name="alt"
            placeholder="Logo name"
            value={formData.alt}
            onChange={handleFormChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Logo URL:</label>
          <Input
            name="src"
            placeholder="Logo URL"
            value={formData.src}
            onChange={handleFormChange}
            required
          />
        </div>

        <Button type="submit">
          {editingIndex !== null ? "Update Logo" : "Add Logo"}
        </Button>
      </form>

      {message && <p className="text-green-600 mt-4">{message}</p>}

      <div className="mt-8">
        <ul className="space-y-4">
          {logos.map((logo, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm"
            >
              <div>
                <h3 className="font-semibold">{logo.alt}</h3>
                <p className="text-gray-600">{logo.src}</p>
              </div>
              <div className="space-x-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(index)}>
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
