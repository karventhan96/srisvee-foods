"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is SrisVee Nendram Banana Powder suitable for babies starting solid foods?",
    a: "Yes! Traditional raw Nendram banana porridge is one of the most trusted first foods across South India for babies aged 6 months and above. It is naturally gentle on delicate tummies, rich in natural dietary fiber, potassium, and assists in healthy, natural weight gain.",
  },
  {
    q: "Are there any preservatives, added sugar, or chemicals in the powder?",
    a: "Absolutely none. SrisVee Nendram Banana Powder contains 100% pure Nendram bananas. We never add sugar, salt, artificial colors, maltodextrin, milk solids, or chemical preservatives.",
  },
  {
    q: "How is SrisVee Nendram Banana Powder made?",
    a: "We handpick mature, raw green Nendram bananas. They are thoroughly washed, peeled, finely sliced, naturally dried in clean hygienic drying facilities, and ground into an ultra-fine powder before being sealed in food-grade standing pouches.",
  },
  {
    q: "What is the shelf life and how should I store the powder?",
    a: "The product has a shelf life of 6 months from the date of manufacture. Store in a clean, cool, and dry place away from direct sunlight. After opening, keep the zip-lock sealed or transfer to an airtight stainless steel or glass jar.",
  },
  {
    q: "How can I order and what are the delivery options?",
    a: "You can order directly using the WhatsApp order button above or by calling +91 9790491850. We confirm your address and dispatch via express courier service across Tamil Nadu and throughout India with tracking numbers provided.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // open first FAQ by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section faqSection">
      <div className="centerHeading">
        <span className="eyebrow">Got Questions?</span>
        <h2>
          Frequently Asked <em>Questions</em>
        </h2>
        <p>Everything you need to know about our Nendram Banana Powder.</p>
      </div>

      <div className="faqList">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`faqItem ${isOpen ? "open" : ""}`}
            >
              <button
                type="button"
                className="faqQuestion"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <span className="faqArrow">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="faqAnswer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

