'use client';

import React from 'react';
import Image from 'next/image';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
      <div className="text-center">
        {/* Logo Container */}
        <div className="relative mb-8 animate-pulse">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <Image
              src="/images/profile-img.png"
              alt="Sujoy Das"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>
          
          {/* Rotating ring around logo */}
          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
        </div>
        
        {/* Brand Name */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white mb-2 opacity-0 animate-fade-in">
            SUJOY DAS
          </h2>
          <p className="text-blue-400 text-lg font-medium opacity-0 animate-fade-in-delay">
            Motivational Speaker & Life Coach
          </p>
        </div>
        
        {/* Loading Animation */}
        <div className="flex justify-center items-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-gray-400 text-sm animate-pulse">
          Transforming Lives...
        </p>
      </div>
    </div>
  );
} 