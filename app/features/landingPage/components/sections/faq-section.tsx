import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function FAQSection() {
    const faqs = [
      {
        question: "What does \"Theme/Package Installation\" mean?",
        answer: "Theme/Package Installation refers to the process of setting up and configuring the CRM software package on your system."
      },
      {
        question: "What does \"Lifetime updates\" mean?",
        answer: "Lifetime updates means you'll receive all future updates and improvements to the software at no additional cost."
      },
      {
        question: "What does \"6 months of support\" mean?",
        answer: "You'll receive dedicated technical support and assistance for 6 months from the date of purchase."
      }
    ]
  
    return (
      <section className="py-20 px-4 md:px-6 bg-muted/50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">FAQ</h2>
            <p className="text-muted-foreground text-lg">
              Use these awesome forms to login or create new account in your project for free.
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
    )
  }
  
  