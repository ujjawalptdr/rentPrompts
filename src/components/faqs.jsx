import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const faqs = [
    {
      id: 1,
      question: "What makes RentPrompts Academy different from other AI courses?",
      answer:
        "We focus on practical, real-world applications with a marketplace integration. You don't just learn AI prompting - you learn how to monetize your skills on our platform. Plus, you get access to our community of successful creators and ongoing mentorship.",
    },
    {
      id: 2,
      question: "Do I need any prior experience with AI or programming?",
      answer:
        "Not at all! Our courses are designed for complete beginners. We start with the fundamentals and gradually build up to advanced techniques. Our step-by-step approach ensures everyone can follow along, regardless of their technical background.",
    },
    {
      id: 3,
      question: "How long does it take to complete a course?",
      answer:
        "Course duration varies from 4-12 weeks depending on the program. You can learn at your own pace with lifetime access to all materials. Most students spend 2-3 hours per week and see results within the first month.",
    },
    {
      id: 4,
      question: "Can I really make money from AI prompting?",
      answer:
        "Our students have generated over $2M in total earnings. Many earn $1K-$10K+ monthly by selling prompts, building AI apps, or offering consulting services. We provide the tools, training, and marketplace to help you succeed.",
    },
    {
      id: 5,
      question: "What kind of support do I get as a student?",
      answer:
        "You get access to our private Discord community, weekly live Q&A sessions, direct instructor feedback, and our comprehensive resource library. Plus, advanced students get 1-on-1 mentorship opportunities.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-16 bg-gray-900">
      {/* Background grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-800/50 to-gray-900"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(rgba(6,182,212,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <div className="inline-flex items-center space-x-2 bg-gray-800 border border-cyan-700 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="h-4 w-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">Got Questions?</span>
          </div>

          <div className="text-3xl md:text-4xl font-bold text-white mb-4">
            {/* This part is NOT animated to avoid oklch error*/}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Frequently Asked Questions
            </span>
          </div>

          <p className="text-sm text-gray-300">
            Everything you need to know about RentPrompts Academy
          </p>
        </motion.div>

        {/* FAQ section */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="border border-gray-500 rounded-xl bg-gray-800 overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-800 transition-colors duration-200"
              >
                <h3 className="text-sm font-semibold text-white pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-cyan-400" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 text-sm pb-5 border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div className="text-center mt-12" variants={itemVariants}>
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-cyan-500 transition duration-300 cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
