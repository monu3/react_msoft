"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { getFeatures, addFeature, useFeatures } from "./featuresData";

export default function FeaturesAdmin() {
  const [features, setFeatures] = useFeatures();
  const [message, setMessage] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", description: "" });

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleEdit(index: number) {
    const feature = features[index];
    setFormData({ name: feature.title, description: feature.description });
    setEditingIndex(index);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { name, description } = formData;

    if (name && description) {
      const newFeature = { title: name, description };

      if (editingIndex !== null) {
        // Edit existing feature
        const updatedFeatures = [...features];
        updatedFeatures[editingIndex] = newFeature;
        localStorage.setItem("features_data", JSON.stringify(updatedFeatures));
        setFeatures(updatedFeatures);
        setMessage("Feature updated successfully!");
      } else {
        // Add new feature
        addFeature(newFeature);
        setFeatures(getFeatures());
        setMessage("Feature added successfully!");
      }

      setFormData({ name: "", description: "" });
      setEditingIndex(null);
      e.currentTarget.reset();
    }
  }

  function handleDelete(index: number) {
    const updatedFeatures = features.filter((_, i) => i !== index);
    localStorage.setItem("features_data", JSON.stringify(updatedFeatures));
    setFeatures(updatedFeatures);
    setMessage("Feature deleted successfully!");
  }

  return (
    <div className="p-6 max-w-4xl mx-auto custom-scroll-container scrollbar-hidden">
      <h1 className="text-2xl font-bold mb-6">
        {editingIndex !== null ? "Edit Feature" : "Add Feature"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Feature Name</label>
          <Input
            name="name"
            placeholder="Feature name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <Textarea
            name="description"
            placeholder="Feature description"
            value={formData.description}
            onChange={handleFormChange}
            required
          />
        </div>

        <Button type="submit">
          {editingIndex !== null ? "Update Feature" : "Add Feature"}
        </Button>
      </form>

      {message && <p className="text-green-600 mt-4">{message}</p>}

      <div className="mt-8">
        {/* <h2 className="text-xl font-bold mb-4">Existing Features</h2> */}
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 bg-background rounded-lg shadow-sm"
            >
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
