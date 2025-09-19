import React from 'react';
import { Logo } from '../../components';

export default function DisclaimerPage() {
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
            Disclaimer
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Important information about our services, limitations, and your responsibilities as a participant.
          </p>
        </div>

        <div className="container mx-auto px-4 pb-20 max-w-4xl">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
              </p>

              <div className="bg-yellow-600/20 border border-yellow-500/30 p-4 rounded-lg mb-6">
                <p className="text-yellow-200 font-semibold mb-2">⚠️ Important Notice</p>
                <p className="text-yellow-100 text-sm">
                  Please read this disclaimer carefully before participating in any workshops, coaching sessions, 
                  or using any materials provided by Sujoy Das Motivation.
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Educational and Motivational Purpose</h2>
              <p className="text-gray-300 mb-6">
                All content, workshops, coaching sessions, and materials provided by Sujoy Das Motivation are 
                intended for educational, motivational, and inspirational purposes only. The information shared 
                is based on personal experiences, research, and proven methodologies but should not be considered 
                as professional advice in legal, medical, financial, or psychological matters.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">2. No Medical or Mental Health Advice</h2>
              <p className="text-gray-300 mb-6">
                Our services are NOT a substitute for professional medical, psychological, or psychiatric treatment. 
                We do not provide:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>Medical diagnosis or treatment</li>
                <li>Mental health therapy or counseling</li>
                <li>Crisis intervention or emergency support</li>
                <li>Treatment for depression, anxiety, or other mental health conditions</li>
              </ul>
              <p className="text-gray-300 mb-6">
                If you are experiencing mental health issues, please consult with qualified healthcare professionals 
                or contact emergency services immediately if in crisis.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Results and Outcomes</h2>
              <p className="text-gray-300 mb-6">
                <strong>No Guarantee of Results:</strong> While we are committed to providing valuable content and 
                support, we cannot guarantee specific outcomes or results from our workshops, coaching, or materials. 
                Success depends on various factors including:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>Individual effort and commitment</li>
                <li>Personal circumstances and background</li>
                <li>Application of learned principles</li>
                <li>External factors beyond our control</li>
                <li>Individual learning styles and capabilities</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Personal Responsibility</h2>
              <p className="text-gray-300 mb-6">
                By participating in our programs, you acknowledge that:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>You are solely responsible for your decisions and actions</li>
                <li>You will use the information provided at your own discretion</li>
                <li>You understand the importance of consulting professionals for specific advice</li>
                <li>You will not hold Sujoy Das Motivation liable for outcomes based on our content</li>
                <li>You are participating voluntarily and at your own risk</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Financial and Business Advice</h2>
              <p className="text-gray-300 mb-6">
                Any financial or business strategies discussed are for educational purposes only and should not be 
                considered as financial advice. We strongly recommend consulting with qualified financial advisors, 
                accountants, or business consultants before making any financial decisions or business investments.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Third-Party Content and Testimonials</h2>
              <p className="text-gray-300 mb-6">
                Testimonials and success stories shared are individual experiences and may not represent typical results. 
                Any third-party content, links, or recommendations are provided for informational purposes only and do 
                not constitute endorsement of external products or services.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Website Accuracy and Availability</h2>
              <p className="text-gray-300 mb-6">
                While we strive to keep our website information accurate and up-to-date:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>Information may become outdated or inaccurate</li>
                <li>Technical issues may affect website availability</li>
                <li>Content may be updated without prior notice</li>
                <li>We are not responsible for typographical or technical errors</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Limitation of Liability</h2>
              <p className="text-gray-300 mb-6">
                To the fullest extent permitted by law, Sujoy Das Motivation, its founder, employees, and affiliates 
                shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising 
                from:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>Use of our services, content, or materials</li>
                <li>Inability to use our services</li>
                <li>Decisions made based on our content</li>
                <li>Technical issues or interruptions</li>
                <li>Loss of data or information</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">9. Age and Capacity Requirements</h2>
              <p className="text-gray-300 mb-6">
                Our services are intended for individuals who are:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                <li>18 years of age or older (or have parental consent)</li>
                <li>Mentally capable of making informed decisions</li>
                <li>Not under the influence of substances during sessions</li>
                <li>Able to participate voluntarily without coercion</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">10. Changes to This Disclaimer</h2>
              <p className="text-gray-300 mb-6">
                We reserve the right to modify this disclaimer at any time. Changes will be posted on our website 
                and will become effective immediately upon posting. Your continued use of our services after any 
                changes constitutes acceptance of the revised disclaimer.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">11. Governing Law</h2>
              <p className="text-gray-300 mb-6">
                This disclaimer shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising shall be subject to the jurisdiction of courts in West Bengal, West Bengal.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-blue-400">12. Contact Information</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this disclaimer or need clarification on any points:
              </p>
              <div className="bg-blue-600/20 p-4 rounded-lg">
                <p className="text-white font-semibold">Sujoy Das Motivation</p>
                <p className="text-gray-300">Email: contact@sujoydasmotivation.com</p>
                <p className="text-gray-300">Subject: Disclaimer Inquiry</p>
                <p className="text-gray-300">Location: Kolkata, West Bengal, India</p>
                <p className="text-gray-300 mt-2 text-sm">
                  <strong>Emergency:</strong> If you are in crisis, please contact local emergency services 
                  or a mental health crisis hotline immediately.
                </p>
              </div>

              <div className="bg-green-600/20 border border-green-500/30 p-4 rounded-lg mt-6">
                <p className="text-green-200 font-semibold mb-2">✅ By Using Our Services</p>
                <p className="text-green-100 text-sm">
                  You acknowledge that you have read, understood, and agree to be bound by this disclaimer. 
                  You understand the limitations of our services and accept full responsibility for your 
                  participation and any outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 