// 'use client'

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { addFeature } from "@/features/monu/actions/landing-page"
// import { useState } from "react"

// export default function FeaturesAdmin() {
//   const [message, setMessage] = useState('')

//   async function handleSubmit(formData: FormData) {
//     const result = await addFeature(formData)
//     if (result.success) {
//       setMessage('Feature added successfully!')
//     }
//   }

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">Add Feature</h1>
//       <form action={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Feature Name</label>
//           <Input name="name" placeholder="Feature name" required />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Description</label>
//           <Textarea name="description" placeholder="Feature description" required />
//         </div>

//         <Button type="submit">Add Feature</Button>

//         {message && (
//           <p className="text-green-600 mt-4">{message}</p>
//         )}
//       </form>
//     </div>
//   )
// }
// --------------------------------------------------------------------------------------------------------

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addFeature } from "./featuresData";
import { useState } from "react";

export default function FeaturesAdmin() {
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString() || "";
    const description = formData.get("description")?.toString() || "";

    if (name && description) {
      addFeature({ title: name, description });
      setMessage("Feature added successfully!");
      e.currentTarget.reset();
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Feature</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Feature Name</label>
          <Input name="name" placeholder="Feature name" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <Textarea
            name="description"
            placeholder="Feature description"
            required
          />
        </div>

        <Button type="submit">Add Feature</Button>

        {message && <p className="text-green-600 mt-4">{message}</p>}
      </form>
    </div>
  );
}
