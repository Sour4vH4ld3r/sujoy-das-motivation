import React from 'react';
import Image from 'next/image';
import { Logo } from '../../components';

export default function ContactPage() {
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
              <a href="/contact" className="text-blue-400 font-medium">Contact</a>
              <a href="/#register" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">Register</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Header */}
        <div className="pt-24 pb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Contact Sujoy Das
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Ready to transform your life? Get in touch for workshops, speaking engagements, or personal coaching sessions.
          </p>
        </div>

        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    required
                  >
                    <option value="" className="bg-gray-800">Select a subject</option>
                    <option value="workshop" className="bg-gray-800">Workshop Registration</option>
                    <option value="speaking" className="bg-gray-800">Speaking Engagement</option>
                    <option value="coaching" className="bg-gray-800">Personal Coaching</option>
                    <option value="media" className="bg-gray-800">Media & Press</option>
                    <option value="collaboration" className="bg-gray-800">Collaboration</option>
                    <option value="other" className="bg-gray-800">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300 resize-none"
                    placeholder="Tell us about your goals and how Sujoy Das can help you..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Profile Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center">
                <div className="mb-6">
                  <Image
                    src="/images/profile-img.png"
                    alt="Sujoy Das"
                    width={120}
                    height={120}
                    className="rounded-full mx-auto border-4 border-white/30 shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Sujoy Das</h3>
                <p className="text-blue-400 font-semibold mb-4">Motivational Speaker & Life Coach</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Transforming lives through powerful workshops and personal coaching. 
                  Helping individuals unlock their potential and achieve extraordinary success.
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-300">West Bengal, West Bengal, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-600 p-3 rounded-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-300">contact@sujoydasmotivation.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-600 p-3 rounded-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Workshop Inquiries</p>
                      <p className="text-gray-300">Available via contact form</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6">Follow Sujoy Das</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.facebook.com/SUJOYDASMOTIVATION"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="font-medium">Facebook</span>
                  </a>
                  
                  <a
                    href="https://www.youtube.com/@sujoydasmotivation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-red-600/20 rounded-lg hover:bg-red-600/30 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="font-medium">YouTube</span>
                  </a>
                  
                  <a
                    href="https://www.instagram.com/sujoydasmotivation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-pink-600/20 rounded-lg hover:bg-pink-600/30 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zm-2.22 3.896c1.429-.064 1.877-.078 5.503-.078 3.626 0 4.074.014 5.503.078 1.397.064 2.16.3 2.668.498.672.26 1.15.572 1.653 1.074.502.502.814.98 1.074 1.652.198.508.434 1.271.498 2.668.064 1.429.078 1.877.078 5.503s-.014 4.074-.078 5.503c-.064 1.397-.3 2.16-.498 2.668a4.456 4.456 0 01-1.074 1.653c-.502.502-.98.814-1.652 1.074-.508.198-1.271.434-2.668.498-1.429.064-1.877.078-5.503.078s-4.074-.014-5.503-.078c-1.397-.064-2.16-.3-2.668-.498a4.456 4.456 0 01-1.653-1.074 4.456 4.456 0 01-1.074-1.652c-.198-.508-.434-1.271-.498-2.668-.064-1.429-.078-1.877-.078-5.503s.014-4.074.078-5.503c.064-1.397.3-2.16.498-2.668.26-.672.572-1.15 1.074-1.653.502-.502.502-.814 1.074-1.074.508-.198 1.271-.434 2.668-.498zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z"/>
                    </svg>
                    <span className="font-medium">Instagram</span>
                  </a>
                  
                  <a
                    href="https://in.linkedin.com/in/sujoy-das-motivation-838a1a28a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 