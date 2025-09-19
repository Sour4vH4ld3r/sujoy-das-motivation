import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer, LayoutWithLoader } from "../components";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sujoy Das - Best Motivational Speaker in West Bengal | Life Coach & Mindset & Wealth Coach",
    template: "%s | Sujoy Das"
  },
  description: "Join Sujoy Das for life-changing workshops in West Bengal . Expert motivational speaker, life coach, and personal development trainer. Transform your life in 2 days with proven techniques and strategies.",
  keywords: [
    "Sujoy Das",
    "motivational speaker",
    "life coach",
    "personal development",
    "workshop",
    "West Bengal",
    "West Bengal",
    "life transformation",
    "self improvement",
    "motivation",
    "success coach",
    "leadership training",
    "mindset coach",
    "2 days win your life",
    "personal growth",
    "life coaching",
    "inspiration",
    "goal setting",
    "confidence building",
    "public speaking"
  ],
  authors: [{ name: "Sujoy Das" }],
  creator: "Sujoy Das",
  publisher: "Sujoy Das Motivation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sujoydasmotivation.com",
    title: "Sujoy Das - Motivational Speaker & Life Coach & Mindset & Wealth Coach",
    description: "Transform your life with Sujoy Das - Expert motivational speaker and life coach in West Bengal. Join the 3 Days Change Your Life Workshop.",
    siteName: "Sujoy Das Motivation",
    images: [
      {
        url: "/images/profile-img.png",
        width: 1200,
        height: 630,
        alt: "Sujoy Das - Motivational Speaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujoy Das - Motivational Speaker & Life Coach & Mindset & Wealth Coach",
    description: "Transform your life with Sujoy Das - Expert motivational speaker and life coach in West Bengal. Join the 3 Days Change Your Life Workshop.",
    creator: "@sujoydasmotivation",
    images: ["/images/profile-img.png"],
  },
  verification: {
    google: "x_TawUS2wqMItR0DL59yNtbGqvkoKancGAfmBRPuHDU",
    // Add other verification codes as needed
  },
  category: "Personal Development",
  classification: "Motivational Speaking, Life Coaching, Personal Development, Mindset & Wealth Coach",
  other: {
    "revisit-after": "7 days",
    "distribution": "global",
    "rating": "general",
    "language": "en",
    "geo.region": "IN-WB",
    "geo.placename": "West Bengal",
    "geo.position": "22.5726;88.3639",
    "ICBM": "22.5726, 88.3639"
  },
  alternates: {
    canonical: "https://sujoydasmotivation.com",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="canonical" href="https://sujoydasmotivation.com" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/profile-img.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Video Optimization Script for Production - cPanel Hosting */}
        <Script id="video-optimizer" strategy="afterInteractive">
          {`
            (function() {
              function optimizeVideo() {
                var video = document.getElementById('hero-background-video');
                if (!video) return;
                
                // Force video to load immediately for instant playback
                video.load();
                
                // Handle seamless restart when video ends (no delay)
                video.addEventListener('ended', function() {
                  this.currentTime = 0;
                  this.play().catch(function(e) {
                    console.log('Video restart failed:', e);
                  });
                });
                
                // Ensure immediate playback when ready
                video.addEventListener('canplay', function() {
                  if (this.paused && this.autoplay) {
                    this.play().catch(function(e) {
                      console.log('Video autoplay failed:', e);
                    });
                  }
                });
                
                // Reset to beginning on load for consistency
                video.addEventListener('loadstart', function() {
                  this.currentTime = 0;
                });
                
                // Force immediate restart on page load/reload
                if (video.readyState >= 2) {
                  video.currentTime = 0;
                  video.play().catch(function(e) {
                    console.log('Initial video play failed:', e);
                  });
                }
              }
              
              // Run when DOM is ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', optimizeVideo);
              } else {
                optimizeVideo();
              }
              
              // Also run on page show (for browser back button)
              window.addEventListener('pageshow', optimizeVideo);
            })();
          `}
        </Script>
        
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5T448BSPB2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-5T448BSPB2');
          `}
        </Script>
        
        {/* JSON-LD Structured Data */}
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "name": "Sujoy Das",
                  "jobTitle": ["Motivational Speaker", "Life Coach", "Business Coach"],
                  "description": "Leading motivational speaker and life coach specializing in personal development, wealth building, and mindset transformation",
                  "url": "https://sujoydasmotivation.com",
                  "image": "https://sujoydasmotivation.com/images/profile-img.png",
                  "sameAs": [
                    "https://www.facebook.com/SUJOYDASMOTIVATION",
                    "https://www.instagram.com/sujoydasmotivation/",
                    "https://www.youtube.com/@sujoydasmotivation",
                    "https://in.linkedin.com/in/sujoy-das-motivation-838a1a28a"
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "West Bengal",
                    "addressRegion": "West Bengal",
                    "addressCountry": "India"
                  },
                  "knows": ["Personal Development", "Wealth Building", "Mindset Coaching", "Business Strategy"]
                },
                {
                  "@type": "WebSite",
                  "name": "Sujoy Das Motivation",
                  "url": "https://sujoydasmotivation.com",
                  "description": "Official website of Sujoy Das - Motivational Speaker & Life Coach",
                  "publisher": {
                    "@type": "Person",
                    "name": "Sujoy Das"
                  }
                }
              ]
            }
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <LayoutWithLoader>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LayoutWithLoader>
      </body>
    </html>
  );
}
