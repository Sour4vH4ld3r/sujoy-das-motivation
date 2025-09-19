import React from 'react';
import { Logo } from '../../components';

export default function ShippingAndDeliveryPage() {
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
            Shipping and Delivery Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Information about our digital and physical delivery services for workshops and coaching materials.
          </p>
        </div>

        <div className="container mx-auto px-4 pb-20 max-w-4xl">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
              </p>

              <div className="bg-blue-600/20 p-4 rounded-lg mb-6">
                <p className="text-white font-semibold mb-2">📧 Primary Service Model</p>
                <p className="text-gray-300">
                  Our services are primarily delivered digitally and through in-person workshops. 
                  Physical shipping applies only to specific materials and merchandise.
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Digital Delivery Services</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Workshop Confirmations & Materials:</h3>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li><strong>Registration Confirmation:</strong> Instant email confirmation upon payment</li>
                <li><strong>Workshop Details:</strong> Sent 24-48 hours before the event</li>
                <li><strong>Digital Resources:</strong> Delivered within 2 hours of workshop completion</li>
                <li><strong>Certificates:</strong> Digital certificates sent within 1 week</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">Online Coaching Sessions:</h3>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li><strong>Session Links:</strong> Sent 1 hour before scheduled time</li>
                <li><strong>Recording Access:</strong> Available within 24 hours (if applicable)</li>
                <li><strong>Action Plans:</strong> Delivered within 48 hours post-session</li>
                <li><strong>Resource Materials:</strong> Sent immediately after session</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">Digital Products:</h3>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li><strong>E-books & Guides:</strong> Instant download after purchase</li>
                <li><strong>Video Courses:</strong> Access granted within 1 hour</li>
                <li><strong>Audio Programs:</strong> Download links sent immediately</li>
                <li><strong>Workbooks:</strong> PDF delivery within 30 minutes</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">2. Physical Delivery Services</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Workshop Materials:</h3>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li><strong>Printed Workbooks:</strong> Available at venue (no shipping required)</li>
                <li><strong>Certificates:</strong> Physical certificates sent within 2 weeks</li>
                <li><strong>Branded Materials:</strong> Distributed during workshops</li>
                <li><strong>Welcome Kits:</strong> Handed out at registration</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">Merchandise & Books:</h3>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li><strong>Within West Bengal:</strong> 2-3 business days</li>
                <li><strong>Within West Bengal:</strong> 3-5 business days</li>
                <li><strong>Within India:</strong> 5-7 business days</li>
                <li><strong>International:</strong> 10-14 business days</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Shipping Charges</h2>
              
              <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-2 text-white">Standard Shipping Rates:</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Within West Bengal: ₹50</li>
                  <li>• Within West Bengal: ₹100</li>
                  <li>• Within India: ₹150</li>
                  <li>• International: ₹500</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white">Free Shipping:</h3>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>Orders above ₹2,000 (within India)</li>
                <li>Workshop participants (for course materials)</li>
                <li>Coaching package participants</li>
                <li>Special promotions and offers</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Delivery Timeline</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Processing Time:</h3>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li><strong>Digital Products:</strong> Instant to 2 hours</li>
                <li><strong>Physical Products:</strong> 1-2 business days</li>
                <li><strong>Custom Materials:</strong> 3-5 business days</li>
                <li><strong>Personalized Items:</strong> 5-7 business days</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">Delivery Methods:</h3>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li><strong>Digital:</strong> Email, SMS, and app notifications</li>
                <li><strong>Physical:</strong> India Post, private courier services</li>
                <li><strong>Express:</strong> Same-day delivery in West Bengal (additional charges)</li>
                <li><strong>International:</strong> Registered post and courier services</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Tracking and Support</h2>
              
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li><strong>Digital Delivery:</strong> Instant confirmation via email and SMS</li>
                <li><strong>Physical Delivery:</strong> Tracking number provided within 24 hours</li>
                <li><strong>Delivery Status:</strong> Real-time updates via SMS and email</li>
                <li><strong>Support:</strong> 24/7 customer service for delivery issues</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Failed Delivery Policy</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Digital Delivery Issues:</h3>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>Check spam/junk folders</li>
                <li>Verify email address accuracy</li>
                <li>Contact support for re-delivery</li>
                <li>Alternative delivery methods available</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">Physical Delivery Issues:</h3>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>3 delivery attempts will be made</li>
                <li>Package held at local post office for 7 days</li>
                <li>Re-delivery charges may apply</li>
                <li>Address verification required for future orders</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">7. International Delivery</h2>
              
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li><strong>Customs Duties:</strong> Responsibility of the recipient</li>
                <li><strong>Delivery Time:</strong> 10-21 business days</li>
                <li><strong>Tracking:</strong> Available for all international shipments</li>
                <li><strong>Documentation:</strong> Proper customs declaration provided</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Contact for Delivery Support</h2>
              <p className="text-gray-300 mb-6">
                For any delivery-related queries or issues:
              </p>
              <div className="bg-blue-600/20 p-4 rounded-lg">
                <p className="text-white font-semibold">Sujoy Das Motivation - Delivery Support</p>
                <p className="text-gray-300">Email: contact@sujoydasmotivation.com</p>
                <p className="text-gray-300">Subject: Delivery Issue - [Your Order Number]</p>
                <p className="text-gray-300">Response Time: 24 hours</p>
                <p className="text-gray-300">Phone Support: Available during business hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 