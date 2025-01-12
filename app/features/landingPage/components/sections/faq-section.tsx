"use client";

import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LOCAL_STORAGE_KEY = "faqs_data";

export function FAQSection() {
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([]);

  useEffect(() => {
    const storedFaqs = localStorage.getItem(LOCAL_STORAGE_KEY);
    setFaqs(storedFaqs ? JSON.parse(storedFaqs) : []);
  }, []);

  return (
    <section className="py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            FAQ
          </h2>
          <p className="text-muted-foreground text-lg">
            Use these awesome forms to login or create a new account in your
            project for free.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
