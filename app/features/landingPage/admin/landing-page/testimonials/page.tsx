// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { addTestimonial } from "~/features/landingPage/actions/landing-page";
// import { useState } from "react";

// export default function TestimonialsAdmin() {
//   const [message, setMessage] = useState("");

//   async function handleSubmit(formData: FormData) {
//     const result = await addTestimonial(formData);
//     if (result.success) {
//       setMessage("Testimonial added successfully!");
//     }
//   }

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">Add Testimonial</h1>
//       <form action={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Client Name</label>
//           <Input name="clientName" placeholder="John Doe" required />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Position</label>
//           <Input name="position" placeholder="CEO at Company" required />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Content</label>
//           <Textarea
//             name="content"
//             placeholder="Their testimonial..."
//             required
//           />
//         </div>

//         <Button type="submit">Add Testimonial</Button>

//         {message && <p className="text-green-600 mt-4">{message}</p>}
//       </form>
//     </div>
//   );
// }


"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";

type Testimonial = { clientName: string; position: string; content: string };

const LOCAL_STORAGE_KEY = "testimonials_data";

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  // Load testimonials from local storage
  useEffect(() => {
    const storedTestimonials = localStorage.getItem(LOCAL_STORAGE_KEY);
    setTestimonials(storedTestimonials ? JSON.parse(storedTestimonials) : []);
  }, []);

  // Save testimonials to local storage
  const saveTestimonials = (updatedTestimonials: Testimonial[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTestimonials));
    setTestimonials(updatedTestimonials);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const clientName = formData.get("clientName")?.toString() || "";
    const position = formData.get("position")?.toString() || "";
    const content = formData.get("content")?.toString() || "";

    if (!clientName || !position || !content) {
      setMessage("Please fill out all fields.");
      return;
    }

    if (editingIndex !== null) {
      // Update existing testimonial
      const updatedTestimonials = [...testimonials];
      updatedTestimonials[editingIndex] = { clientName, position, content };
      saveTestimonials(updatedTestimonials);
      setEditingIndex(null);
      setMessage("Testimonial updated successfully!");
    } else {
      // Add new testimonial
      saveTestimonials([...testimonials, { clientName, position, content }]);
      setMessage("Testimonial added successfully!");
    }

    e.currentTarget.reset();
  };

  const handleEdit = (index: number) => {
    const testimonial = testimonials[index];
    setEditingIndex(index);

    // Populate the form with the selected testimonial for editing
    const form = document.getElementById("testimonial-form") as HTMLFormElement;
    (form.elements.namedItem("clientName") as HTMLInputElement).value =
      testimonial.clientName;
    (form.elements.namedItem("position") as HTMLInputElement).value =
      testimonial.position;
    (form.elements.namedItem("content") as HTMLTextAreaElement).value =
      testimonial.content;
  };

  const handleDelete = (index: number) => {
    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    saveTestimonials(updatedTestimonials);
    setMessage("Testimonial deleted successfully!");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto custom-scroll-container scrollbar-hidden">
      <h1 className="text-2xl font-bold mb-6">Manage Testimonials</h1>
      <form id="testimonial-form" onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Client Name</label>
          <Input name="clientName" placeholder="John Doe" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Position</label>
          <Input name="position" placeholder="CEO at Company" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <Textarea
            name="content"
            placeholder="Their testimonial..."
            required
          />
        </div>

        <Button type="submit">
          {editingIndex !== null ? "Update Testimonial" : "Add Testimonial"}
        </Button>
      </form>

      {message && <p className="text-green-600 mt-4">{message}</p>}

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Existing Testimonials</h2>
        <ul className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
              <p className="font-bold">{testimonial.clientName}</p>
              <p>{testimonial.position}</p>
              <p className="mt-2">{testimonial.content}</p>
              <div className="mt-2 space-x-4">
                <Button size="sm" onClick={() => handleEdit(index)}>
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
