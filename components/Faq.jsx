"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal"; // Add this import

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Add modal state

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer:
        "I am an out-of-network provider and do not directly accept insurance. However, I provide detailed superbills that you can submit to your insurance company for possible reimbursement. Many clients receive 50-80% reimbursement depending on their plan.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes, I offer all therapy sessions virtually through a secure, HIPAA-compliant Zoom platform. This allows you to engage in therapy from the comfort of your own space, anywhere in California.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "I require 24 hours notice for appointment cancellations. Appointments cancelled with less than 24 hours notice will be charged the full session fee. This policy helps me maintain availability for all clients.",
    },
    {
      question: "How long are therapy sessions?",
      answer:
        "Standard therapy sessions are 50 minutes. Extended 80-minute sessions are available for couples counseling or intensive work, which can be scheduled upon request.",
    },
    {
      question: "What is your approach to therapy?",
      answer:
        "My approach integrates evidence-based practices including Cognitive Behavioral Therapy (CBT), Mindfulness-Based Stress Reduction (MBSR), and Psychodynamic principles. I tailor my approach to each client's unique needs and goals, creating a collaborative therapeutic relationship.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 px-4 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center  mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 text-[#41413F]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Common questions about therapy, services, and the therapeutic
            process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left p-6 focus:outline-none group"
              >
                <span className="font-medium text-lg text-gray-800 group-hover:text-[#41413F] transition-colors">
                  {faq.question}
                </span>
                <div className="ml-4 flex-shrink-0">
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-[#41413F]"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="mt-16 font-serif text-center border-t border-gray-100 pt-16">
          <h3 className="text-xl font-medium text-gray-800 mb-4">
            Still have questions?
          </h3>
          <button
            onClick={() => setIsModalOpen(true)} // Open modal on click
            className="bg-[#41413F] text-white font-medium py-3 px-8 rounded-full hover:bg-[#333331] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-2 focus:ring-teal-300 focus:outline-none"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Add Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
