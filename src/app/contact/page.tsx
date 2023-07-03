'use client';
import { FormEvent, useState } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleButtonClick = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate form data
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setShowSuccessModal(true);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <main className="bg-white py-10 px-4">
      <section className="max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
          <p className="text-lg text-gray-800 mb-6">
            Have a question or want to discuss a project? Feel free to reach out
            to me using the form below. I&apos;ll get back to you as soon as
            possible.
          </p>
          <form onSubmit={handleButtonClick} className="max-w-md mx-auto">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-800 font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-800 font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-800 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="flex justify-center mt-6">
            <a
              href="https://twitter.com/SergeyMkrt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 mx-2"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/smkrtum/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 mx-2"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/sergey-mkrtumyan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 mx-2"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </section>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white rounded-md p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Success!</h2>
            <p className="text-gray-800">
              Thank you for your message. I will get back to you soon.
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700 transition-colors duration-300"
              onClick={() => setShowSuccessModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Loading Indicator */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white rounded-md p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Submitting...</h2>
            <p className="text-gray-800">
              Please wait while your message is being sent.
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white rounded-md p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Error</h2>
            <p className="text-red-600">{error}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700 transition-colors duration-300"
              onClick={() => setError('')}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
