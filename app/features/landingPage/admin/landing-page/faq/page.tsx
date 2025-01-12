"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";

type FAQ = { question: string; answer: string };

const LOCAL_STORAGE_KEY = "faqs_data";

export default function FAQAdmin() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  // Load FAQs from local storage
  useEffect(() => {
    const storedFaqs = localStorage.getItem(LOCAL_STORAGE_KEY);
    setFaqs(storedFaqs ? JSON.parse(storedFaqs) : []);
  }, []);
  // Save FAQs to local storage
  const saveFaqs = (updatedFaqs: FAQ[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedFaqs));
    setFaqs(updatedFaqs);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const question = formData.get("question")?.toString() || "";
    const answer = formData.get("answer")?.toString() || "";

    if (!question || !answer) {
      setMessage("Please provide both a question and an answer.");
      return;
    }

    if (editingIndex !== null) {
      // Update existing FAQ
      const updatedFaqs = [...faqs];
      updatedFaqs[editingIndex] = { question, answer };
      saveFaqs(updatedFaqs);
      setEditingIndex(null);
      setMessage("FAQ updated successfully!");
    } else {
      // Add new FAQ
      saveFaqs([...faqs, { question, answer }]);
      setMessage("FAQ added successfully!");
    }

    e.currentTarget.reset();
  };

  const handleEdit = (index: number) => {
    const faq = faqs[index];
    setEditingIndex(index);

    // Populate the form with the selected FAQ for editing
    const form = document.getElementById("faq-form") as HTMLFormElement;
    (form.elements.namedItem("question") as HTMLInputElement).value = faq.question;
    (form.elements.namedItem("answer") as HTMLTextAreaElement).value = faq.answer;
  };

  const handleDelete = (index: number) => {
    const updatedFaqs = faqs.filter((_, i) => i !== index);
    saveFaqs(updatedFaqs);
    setMessage("FAQ deleted successfully!");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto custom-scroll-container scrollbar-hidden">
      <h1 className="text-2xl font-bold mb-6">Manage FAQs</h1>
      <form id="faq-form" onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Question</label>
          <Input name="question" placeholder="What is...?" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Answer</label>
          <Textarea name="answer" placeholder="The answer is..." required />
        </div>

        <Button type="submit">{editingIndex !== null ? "Update FAQ" : "Add FAQ"}</Button>
      </form>

      {message && <p className="text-green-600 mt-4">{message}</p>}

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Existing FAQs</h2>
        <ul className="space-y-4">
          {faqs.map((faq, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
              <p className="font-bold">{faq.question}</p>
              <p>{faq.answer}</p>
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
