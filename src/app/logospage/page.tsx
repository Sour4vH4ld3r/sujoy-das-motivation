import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LogosPage() {
  const logos = [
    {
      id: 'main-logo',
      title: 'Main Logo',
      description: 'Primary logo with full branding for light backgrounds',
      file: '/logos/sujoy-das-logo.svg',
      background: 'bg-white',
      usage: 'Use on light backgrounds, websites, business cards, letterheads'
    },
    {
      id: 'white-logo',
      title: 'White Logo',
      description: 'White version for dark backgrounds and overlays',
      file: '/logos/sujoy-das-logo-white.svg',
      background: 'bg-gray-900',
      usage: 'Use on dark backgrounds, video overlays, dark presentations'
    },
    {
      id: 'icon-logo',
      title: 'Icon Logo',
      description: 'Compact icon version for small displays and favicons',
      file: '/logos/sujoy-das-icon.svg',
      background: 'bg-gray-100',
      usage: 'Use as favicon, app icons, social media profile pictures'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Image 
                src="/logos/sujoy-das-icon.svg" 
                alt="Sujoy Das Icon" 
                width={40} 
                height={40}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Sujoy Das</h1>
                <p className="text-sm text-gray-600">Brand Assets</p>
              </div>
            </div>
            <Link 
              href="/" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Brand <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Logos</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Official logo assets for Sujoy Das - Motivational Speaker & Life Coach. 
            Download high-quality SVG logos for your design needs.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Logo Preview */}
              <div className={`${logo.background} p-8 flex items-center justify-center min-h-[200px]`}>
                <Image 
                  src={logo.file} 
                  alt={logo.title}
                  width={280}
                  height={120}
                  className="max-w-full h-auto"
                />
              </div>
              
              {/* Logo Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{logo.title}</h3>
                <p className="text-gray-600 mb-4">{logo.description}</p>
                
                {/* Usage */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Usage:</h4>
                  <p className="text-sm text-gray-600">{logo.usage}</p>
                </div>
                
                {/* Download Button */}
                <a 
                  href={logo.file}
                  download={`sujoy-das-${logo.id}.svg`}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download SVG</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Guidelines */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Brand Guidelines</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Do's */}
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Do&apos;s
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Use the appropriate logo version for your background</li>
                <li>• Maintain proper spacing around the logo</li>
                <li>• Keep the logo proportions intact</li>
                <li>• Use high-resolution SVG format when possible</li>
                <li>• Ensure sufficient contrast for readability</li>
              </ul>
            </div>
            
            {/* Don'ts */}
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Don&apos;ts
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Don&apos;t stretch or distort the logo</li>
                <li>• Don&apos;t change the colors or gradients</li>
                <li>• Don&apos;t place on busy backgrounds without proper contrast</li>
                <li>• Don&apos;t add effects like drop shadows or outlines</li>
                <li>• Don&apos;t use low-resolution versions when possible</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Need Custom Branding?</h2>
          <p className="text-blue-100 mb-6">
            For custom logo variations or branding materials, get in touch with our design team.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Image 
              src="/logos/sujoy-das-icon.svg" 
              alt="Sujoy Das" 
              width={32} 
              height={32}
            />
            <span className="text-lg font-semibold">Sujoy Das</span>
          </div>
          <p className="text-gray-400">
            © 2024 Sujoy Das. All rights reserved. | Motivational Speaker & Life Coach
          </p>
        </div>
      </footer>
    </div>
  );
} 