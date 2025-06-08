import React from "react";

const faqData = [
  {
    question: "What is this platform for?",
    answer:
      "This is an online group-study platform where every user is a friend. Create assignments, complete them, and help grade others.",
  },
  {
    question: "Can I grade my friends' assignments?",
    answer: "Yes! Peer grading is a built-in feature that encourages collaborative learning.",
  },
  {
    question: "Is it free to use?",
    answer: "Absolutely. The platform is free for everyone to use and collaborate with.",
  },
  {
    question: "How do I connect with friends?",
    answer: "No invitations needed! All users are automatically connected in the same network.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 px-4 bg-base-100 text-base-content">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <div className="collapse collapse-arrow bg-base-200" key={idx}>
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">{item.question}</div>
              <div className="collapse-content text-sm text-base-content">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
