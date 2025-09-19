'use client';

import React, { useState, useEffect } from 'react';
import { Loader } from './';

interface LayoutWithLoaderProps {
  children: React.ReactNode;
}

export default function LayoutWithLoader({ children }: LayoutWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for minimum 1.5 seconds for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Also hide loader when page is fully loaded
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        {children}
      </div>
    </>
  );
}