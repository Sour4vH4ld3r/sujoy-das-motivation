'use client';

import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  className?: string;
}

export default function VideoBackground({ className = '' }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Optimize video for instant playback
    const handleVideoLoad = () => {
      if (video) {
        video.currentTime = 0;
        video.play().catch((error) => {
          console.log('Video autoplay failed:', error);
        });
      }
    };

    // Handle seamless looping - restart immediately when ended
    const handleVideoEnd = () => {
      if (video) {
        video.currentTime = 0;
        video.play().catch((error) => {
          console.log('Video restart failed:', error);
        });
      }
    };

    // Ensure video is ready for instant restart
    const handleCanPlay = () => {
      if (video && video.paused) {
        video.play().catch((error) => {
          console.log('Video play failed:', error);
        });
      }
    };

    // Add event listeners
    video.addEventListener('loadstart', handleVideoLoad);
    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('canplay', handleCanPlay);

    // Force video to load immediately
    video.load();

    // Cleanup
    return () => {
      if (video) {
        video.removeEventListener('loadstart', handleVideoLoad);
        video.removeEventListener('ended', handleVideoEnd);
        video.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/videos/poster.jpg"
      className={`absolute top-0 left-0 w-full h-full object-cover -z-10 ${className}`}
      style={{
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
    >
      {/* Primary smaller video for faster loading */}
      <source src="/videos/bg.mp4" type="video/mp4" />
      {/* Fallback larger video */}
      <source src="/videos/IMG_0846.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
} 