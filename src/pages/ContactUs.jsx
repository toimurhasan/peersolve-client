import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-65px-200px)] justify-center items-center container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-2">Have questions or feedback? Reach out to us!</p>
      <ul className="list-disc pl-5 mb-4">
        <li>
          Email:{" "}
          <a href="mailto:support@peersolve.com" className="text-blue-600">
            support@peersolve.com
          </a>
        </li>
        <li>
          Phone: <span className="text-blue-600">+1 (555) 123-4567</span>
        </li>
      </ul>
      <p className="text-md">We value your input and strive to respond as quickly as possible.</p>
    </div>
  );
};

export default ContactUs;
