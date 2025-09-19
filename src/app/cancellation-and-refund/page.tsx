import React from 'react';
import { Logo } from '../../components';

export default function CancellationAndRefundPage() {
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
            Cancellation and Refund Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Please review our cancellation and refund policy before making any registration or payment.
          </p>
        </div>

        <div className="container mx-auto px-4 pb-20 max-w-4xl">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Workshop Cancellation Policy</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">Cancellation by Participant:</h3>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li><strong>More than 7 days before workshop:</strong> Full refund minus 10% processing fee</li>
                <li><strong>3-7 days before workshop:</strong> 50% refund</li>
                <li><strong>Less than 3 days before workshop:</strong> No refund</li>
                <li><strong>No-show or same-day cancellation:</strong> No refund</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">Cancellation by Organizer:</h3>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>Full refund will be provided if we cancel the workshop</li>
                <li>Alternative dates will be offered when possible</li>
                <li>Participants will be notified at least 48 hours in advance</li>
                <li>We are not responsible for travel or accommodation costs</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">2. Personal Coaching Sessions</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">Cancellation Policy:</h3>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li><strong>More than 24 hours notice:</strong> Free rescheduling</li>
                <li><strong>Less than 24 hours notice:</strong> 50% fee applies</li>
                <li><strong>No-show:</strong> Full session fee applies</li>
                <li><strong>Emergency situations:</strong> Will be considered on case-by-case basis</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">Refund Policy:</h3>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>Refunds for coaching packages are prorated based on unused sessions</li>
                <li>Refund requests must be made within 30 days of purchase</li>
                <li>At least one session must be completed before refund eligibility</li>
                <li>Processing fee of 10% applies to all refunds</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Digital Products and Courses</h2>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li><strong>Within 7 days of purchase:</strong> Full refund if less than 20% content accessed</li>
                <li><strong>After 7 days:</strong> No refund available</li>
                <li><strong>Technical issues:</strong> We will provide support or alternative access</li>
                <li><strong>Downloadable content:</strong> No refund once downloaded</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Refund Process</h2>
              <p className="text-gray-300 mb-4">
                To request a refund:
              </p>
              <ol className="text-gray-300 mb-6 list-decimal list-inside space-y-2">
                <li>Contact us via email with your registration details</li>
                <li>Provide reason for cancellation/refund request</li>
                <li>Include any supporting documentation if applicable</li>
                <li>Allow 5-7 business days for processing</li>
                <li>Refunds will be processed to the original payment method</li>
              </ol>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Force Majeure</h2>
              <p className="text-gray-300 mb-6">
                In case of unforeseen circumstances beyond our control (natural disasters, government restrictions, 
                health emergencies, etc.), we will:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>Offer alternative dates or online sessions</li>
                <li>Provide full refund if alternatives are not acceptable</li>
                <li>Waive all processing fees in such situations</li>
                <li>Prioritize participant satisfaction and safety</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Special Circumstances</h2>
              <p className="text-gray-300 mb-6">
                We understand that emergencies happen. In cases of:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>Medical emergencies (with documentation)</li>
                <li>Family emergencies</li>
                <li>Travel restrictions</li>
                <li>Other genuine emergencies</li>
              </ul>
              <p className="text-gray-300 mb-6">
                Please contact us immediately. We will review each case individually and may offer flexible solutions.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Contact for Refunds</h2>
              <p className="text-gray-300 mb-6">
                For all refund requests and cancellations, please contact us:
              </p>
              <div className="bg-blue-600/20 p-4 rounded-lg">
                <p className="text-white font-semibold">Sujoy Das Motivation</p>
                <p className="text-gray-300">Email: contact@sujoydasmotivation.com</p>
                <p className="text-gray-300">Subject: Refund Request - [Your Registration Number]</p>
                <p className="text-gray-300">Response Time: 24-48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 