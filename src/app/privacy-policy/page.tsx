import React from 'react';
import { Logo } from '../../components';

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-200 px-4 py-3">
        <div className="flex justify-between items-center">
          <Logo size="small" variant="dark" showText={true} />
          <button className="p-2">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-700/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Logo size="medium" variant="white" showText={true} />
            <div className="flex items-center space-x-8">
              <a href="/" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">Home</a>
              <a href="/#about" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">About</a>
              <a href="/#impact" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">Impact</a>
              <a href="/#achievements" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">Achievements</a>
              <a href="/contact" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">Contact</a>
              <a href="/#register" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">Register</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Header */}
        <div className="pt-24 pb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        <div className="container mx-auto px-4 pb-20 max-w-4xl">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Information We Collect</h2>
              <p className="text-gray-300 mb-6">
                We collect information you provide directly to us, such as when you register for workshops, 
                request coaching sessions, or contact us. This may include your name, email address, phone number, 
                and payment information.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-6">
                We use the information we collect to:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>Provide and improve our coaching services and workshops</li>
                <li>Process registrations and payments</li>
                <li>Send you updates about workshops and events</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Information Sharing</h2>
              <p className="text-gray-300 mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only in the following circumstances:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and the safety of our participants</li>
                <li>With service providers who help us operate our business</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Data Security</h2>
              <p className="text-gray-300 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized 
                access, alteration, disclosure, or destruction. However, no method of transmission over the Internet 
                is 100% secure.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Your Rights</h2>
              <p className="text-gray-300 mb-6">
                You have the right to:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to certain processing of your information</li>
                <li>Withdraw consent where applicable</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Cookies and Tracking</h2>
              <p className="text-gray-300 mb-6">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Changes to This Policy</h2>
              <p className="text-gray-300 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any significant 
                changes by posting the new policy on our website.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Contact Information</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-blue-600/20 p-4 rounded-lg">
                <p className="text-white font-semibold">Sujoy Das Motivation</p>
                <p className="text-gray-300">Email: contact@sujoydasmotivation.com</p>
                <p className="text-gray-300">Location: West Bengal, West Bengal, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 