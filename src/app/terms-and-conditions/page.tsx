import React from 'react';
import { Logo } from '../../components';

export default function TermsAndConditionsPage() {
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
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Please read these terms carefully before using our services or attending our workshops.
          </p>
        </div>

        <div className="container mx-auto px-4 pb-20 max-w-4xl">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By registering for our workshops, coaching sessions, or using our services, you agree to be bound by these 
                Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">2. Services Provided</h2>
              <p className="text-gray-300 mb-6">
                Sujoy Das Motivation provides:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>Motivational workshops and seminars</li>
                <li>Personal coaching sessions</li>
                <li>Life transformation programs</li>
                <li>Speaking engagements and corporate training</li>
                <li>Digital content and resources</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Registration and Payment</h2>
              <p className="text-gray-300 mb-6">
                To register for our workshops or coaching sessions:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>You must provide accurate and complete information</li>
                <li>Payment must be made in advance for all services</li>
                <li>Registration is confirmed only after payment is processed</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Workshop Attendance</h2>
              <p className="text-gray-300 mb-6">
                For workshop attendees:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>Punctual attendance is expected</li>
                <li>Disruptive behavior may result in removal without refund</li>
                <li>Recording of sessions without permission is prohibited</li>
                <li>Respect for other participants and facilitators is mandatory</li>
                <li>Mobile phones should be on silent mode during sessions</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Intellectual Property</h2>
              <p className="text-gray-300 mb-6">
                All content, materials, and intellectual property provided during workshops and coaching sessions 
                are owned by Sujoy Das Motivation. You may not:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>Copy, reproduce, or distribute our content without permission</li>
                <li>Use our materials for commercial purposes</li>
                <li>Claim ownership of any content provided</li>
                <li>Share recordings or materials with third parties</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Liability and Disclaimers</h2>
              <p className="text-gray-300 mb-6">
                Please understand that:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>Our services are for educational and motivational purposes</li>
                <li>Results may vary and are not guaranteed</li>
                <li>We are not liable for any decisions made based on our content</li>
                <li>Personal transformation requires your own effort and commitment</li>
                <li>Our services do not replace professional medical or psychological treatment</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Code of Conduct</h2>
              <p className="text-gray-300 mb-6">
                All participants must maintain:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>Respectful behavior towards all participants and staff</li>
                <li>Professional conduct during all interactions</li>
                <li>Confidentiality of personal information shared by others</li>
                <li>A positive and supportive learning environment</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Modifications to Terms</h2>
              <p className="text-gray-300 mb-6">
                We reserve the right to modify these terms at any time. Changes will be posted on our website 
                and will become effective immediately upon posting.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">9. Contact Information</h2>
              <p className="text-gray-300 mb-6">
                For questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-blue-600/20 p-4 rounded-lg">
                <p className="text-white font-semibold">Sujoy Das Motivation</p>
                <p className="text-gray-300">Email: contact@sujoydasmotivation.com</p>
                <p className="text-gray-300">Location: Kolkata, West Bengal, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 