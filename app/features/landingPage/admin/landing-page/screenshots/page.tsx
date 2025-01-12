"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

// Local storage key
const LOCAL_STORAGE_KEY = "screenshots_data";

// Function to get screenshots from local storage
function getScreenshots() {
  if (typeof window !== "undefined") {
    const storedScreenshots = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedScreenshots ? JSON.parse(storedScreenshots) : [];
  }
  return [];
}

// Function to add a screenshot to local storage
function addScreenshot(screenshot: { title: string; image: string }) {
  const currentScreenshots = getScreenshots();
  const updatedScreenshots = [...currentScreenshots, screenshot];
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedScreenshots));
}

// Function to delete a screenshot from local storage
function deleteScreenshot(index: number) {
  const currentScreenshots = getScreenshots();
  currentScreenshots.splice(index, 1);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentScreenshots));
}

// Function to edit a screenshot in local storage
function editScreenshot(
  index: number,
  updatedScreenshot: { title: string; image: string }
) {
  const currentScreenshots = getScreenshots();
  currentScreenshots[index] = updatedScreenshot;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentScreenshots));
}

export default function ScreenshotsAdmin() {
  const [screenshots, setScreenshots] = useState<
    { title: string; image: string }[]
  >([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setScreenshots(getScreenshots());
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("name")?.toString() || "";
    const image = formData.get("image")?.toString() || "";

    if (!title || !image) {
      setMessage("Please provide both a title and an image URL.");
      return;
    }

    if (editingIndex !== null) {
      // Edit mode
      editScreenshot(editingIndex, { title, image });
      setMessage("Screenshot updated successfully!");
      setEditingIndex(null);
    } else {
      // Add mode
      addScreenshot({ title, image });
      setMessage("Screenshot added successfully!");
    }

    setScreenshots(getScreenshots());
    e.currentTarget.reset();
  }

  function handleEdit(index: number) {
    const screenshot = screenshots[index];
    setEditingIndex(index);

    const form = document.getElementById("screenshot-form") as HTMLFormElement;

    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const imageInput = form.elements.namedItem("image") as HTMLInputElement;
    nameInput.value = screenshot.title;
    imageInput.value = screenshot.image;
  }

  function handleDelete(index: number) {
    deleteScreenshot(index);
    setScreenshots(getScreenshots());
    setMessage("Screenshot deleted successfully!");
  }

  return (
    <div className="p-6 max-w-4xl mx-auto custom-scroll-container scrollbar-hidden">
      <h1 className="text-2xl font-bold mb-6">
        {editingIndex !== null ? "Edit Screenshot" : "Add Screenshot"}
      </h1>
      <form id="screenshot-form" onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Screenshot Name
          </label>
          <Input name="name" placeholder="CRM Dashboard" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <Input name="image" type="url" placeholder="https://..." required />
        </div>

        <Button type="submit">
          {editingIndex !== null ? "Update" : "Add"}
        </Button>
        {message && <p className="text-green-600 mt-4">{message}</p>}
      </form>

      <div className="mt-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
              <img
                src={screenshot.image}
                alt={screenshot.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold mb-2">{screenshot.title}</h3>
              <div className="flex gap-2">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
