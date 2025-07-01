"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function ContactModal({ isOpen, onClose }) {
  // Form state
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
    contactTime: "",
    contactMethod: "",
    isRobot: false,
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
    };
  }, [isOpen]);

  // Validation rules
  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "email":
        if (!value.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = "Invalid email format";
        } else {
          delete newErrors.email;
        }
        break;

      case "phone":
        if (
          value &&
          !/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value)
        ) {
          newErrors.phone = "Invalid phone number";
        } else {
          delete newErrors.phone;
        }
        break;

      case "message":
        if (!value.trim()) {
          newErrors.message = "Message is required";
        } else if (value.trim().length < 10) {
          newErrors.message = "Message must be at least 10 characters";
        } else {
          delete newErrors.message;
        }
        break;

      case "contactMethod":
        if (!value) {
          newErrors.contactMethod = "Please select a contact method";
        } else {
          delete newErrors.contactMethod;
        }
        break;

      case "isRobot":
        if (!value) {
          newErrors.isRobot = "You must verify you're not a robot";
        } else {
          delete newErrors.isRobot;
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));

    // Real-time validation after first interaction
    if (errors[name]) {
      validateField(name, val);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const isValid = Object.keys(formData).every((field) => {
      return validateField(field, formData[field]);
    });

    if (isValid) {
      // Form submission logic would go here
      console.log("Form submitted:", formData);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        alert("Message sent successfully!");
        onClose();
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white bg-opacity-50"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="bg-[#F3F0E8] rounded-xl shadow-xl w-full max-w-md my-10 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-serif font-light text-gray-800 mb-2">
                  Get In Touch
                </h3>
                <p className="text-gray-600 text-sm">
                  Simply fill out the brief fields below and Dr. Serena will be
                  in touch
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close contact form"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-teal-500 focus:border-teal-500 bg-white`}
                    placeholder="your@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-teal-500 focus:border-teal-500 bg-white`}
                    placeholder="(555) 234-5678"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    How can I help you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-teal-500 focus:border-teal-500 bg-white`}
                    placeholder="Briefly describe your needs or questions"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-time"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Contact Time
                  </label>
                  <input
                    type="text"
                    id="contact-time"
                    name="contactTime"
                    value={formData.contactTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 bg-white"
                    placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Let us know when you're typically available for a call or
                    consultation
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="contact-method"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Contact Method
                  </label>
                  <select
                    id="contact-method"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border ${
                      errors.contactMethod
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBmaWxsPSIjNkI3MjgwIj48cGF0aCBkPSJNNyAxMGw1IDUgNS01eiIvPjwvc3ZnPg==')] bg-no-repeat bg-[center_right_1rem]`}
                  >
                    <option value="">Select preferred method</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="text">Text Message</option>
                    <option value="video">Video Call</option>
                  </select>
                  {errors.contactMethod && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.contactMethod}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="robot-check"
                    name="isRobot"
                    type="checkbox"
                    checked={formData.isRobot}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-5 h-5 border ${
                      errors.isRobot ? "border-red-500" : "border-gray-300"
                    } rounded focus:ring-teal-500`}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="robot-check"
                    className="font-medium text-gray-700"
                  >
                    I'm not a robot
                  </label>
                  {errors.isRobot && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.isRobot}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${
                  isSubmitting ? "bg-teal-400" : "bg-teal-600"
                } text-white py-4 rounded-lg hover:bg-teal-700 transition-colors duration-300 font-medium shadow-md disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
