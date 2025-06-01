import React, { useState } from 'react';

// Sample FAQ data
const faqData = [
  {
    question: "What is the purpose of this FAQ?",
    answer: "This FAQ section is here to provide information about common questions users might have.",
  },
  {
    question: "How do I subscribe to a plan?",
    answer: "To subscribe to a plan, go to the pricing section and choose the one that fits your needs.",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time from your account settings.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial for all new users. No credit card required!",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit cards, PayPal, and direct bank transfers. Our secure payment gateway ensures that your transactions are safe and confidential. In addition, you can update your payment method anytime from your account page without any hassle.",
  },
];

const FAQCard = ({ question, answer, isOpen, onClick }) => {
  return (
    <div 
        className="border border-gray-200 hover:border-orange-200 shadow-lg overflow-hidden transition-all duration-300 mb-4"
        onClick={onClick}
        >
        {/* Question Section */}
        <div className="p-4 cursor-pointer">
            <h3 className="text-lg md:text-xl font-semibold">{question}</h3>
        </div>
        
        {/* Answer Section - Hidden until clicked */}
        <div
        className={`px-4 md:px-6 overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
        >
        <p className="text-gray-700 transition-opacity duration-300">
            {answer}
        </p>
        </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <FAQCard 
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;