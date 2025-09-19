import Image from "next/image";
import { TypingAnimation, ScrollToTop, Logo } from "../components";

export default function Home() {
  return (
    <>
    <div>
      {/* Mobile Header black gradient like desktop background */}
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
              <a href="#about" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">About</a>
              <a href="#impact" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">Impact</a>
              <a href="#achievements" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">Achievements</a>
              <a href="#register" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">Register</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-white text-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-20 pb-8 md:pt-20" style={{ backgroundImage: 'url(/videos/IMG_0846.mp4)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/videos/IMG_0846.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 to-black/70 z-0"></div>

        {/* Header */}
        {/* <div className="pt-24 pb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Sujoy Das
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Transform your life through powerful workshops and personal coaching. Unlock your potential and achieve extraordinary success.
          </p>
        </div> */}

        {/* Hero Content - Responsive Layout */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 flex-1 flex flex-col justify-center">
          
          {/* Mobile Layout - Stacked */}
          <div className="md:mt-0 md:hidden space-y-6">
            {/* Workshop Card - Mobile */}
            <div className="mt-35 bg-white/10 mt-8 backdrop-blur-md border border-white/20 rounded-2xl p-4 mx-auto max-w-xs sm:max-w-sm">
              <div className="flex items-center space-x-3">
                <Image 
                  className="rounded-2xl border-2 border-white shadow-lg flex-shrink-0" 
                  src="/images/profile-img.png" 
                  alt="Workshop Instructor" 
                  width={60} 
                  height={60}
                  priority
                />
                <div className="text-left flex-1 min-w-0">
                  <h1 className="text-white text-base sm:text-lg font-bold leading-tight mb-1">
                    2 DAYS WIN YOUR LIFE
                  </h1>
                  <h2 className="text-white text-sm sm:text-base font-semibold mb-1">
                    WORKSHOP
                  </h2>
                  <p className="text-white/90 text-xs sm:text-sm font-medium">
                    Kolkata, West Bengal
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Icons - Mobile */}
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a 
                href="https://www.facebook.com/SUJOYDASMOTIVATION" 
                className="text-white hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg bg-black/20 backdrop-blur-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.youtube.com/@sujoydasmotivation" 
                className="text-white hover:text-red-400 transition-colors duration-300 p-2 rounded-lg bg-black/20 backdrop-blur-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a 
                href="https://www.instagram.com/sujoydasmotivation/" 
                className="text-white hover:text-pink-400 transition-colors duration-300 p-2 rounded-lg bg-black/20 backdrop-blur-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zm-2.22 3.896c1.429-.064 1.877-.078 5.503-.078 3.626 0 4.074.014 5.503.078 1.397.064 2.16.3 2.668.498.672.26 1.15.572 1.653 1.074.502.502.814.98 1.074 1.652.198.508.434 1.271.498 2.668.064 1.429.078 1.877.078 5.503s-.014 4.074-.078 5.503c-.064 1.397-.3 2.16-.498 2.668a4.456 4.456 0 01-1.074 1.653c-.502.502-.98.814-1.652 1.074-.508.198-1.271.434-2.668.498-1.429.064-1.877.078-5.503.078s-4.074-.014-5.503-.078c-1.397-.064-2.16-.3-2.668-.498a4.456 4.456 0 01-1.653-1.074 4.456 4.456 0 01-1.074-1.652c-.198-.508-.434-1.271-.498-2.668-.064-1.429-.078-1.877-.078-5.503s.014-4.074.078-5.503c.064-1.397.3-2.16.498-2.668.26-.672.572-1.15 1.074-1.653.502-.502.98-.814 1.652-1.074.508-.198 1.271-.434 2.668-.498zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z"/>
                </svg>
              </a>

              <a 
                href="https://twitter.com/sujoydasmotivation" 
                className="text-white hover:text-blue-300 transition-colors duration-300 p-2 rounded-lg bg-black/20 backdrop-blur-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
                 {/* linkedin */}
                 <a href="https://in.linkedin.com/in/sujoy-das-motivation-838a1a28a" className="text-white hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
            </div>

            {/* Register Button - Mobile */}
            <div className="flex justify-center pt-2">
              <a href="#register" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold text-base sm:text-lg shadow-lg transform hover:scale-105 transition-all duration-300 inline-block">
                REGISTER NOW
              </a>
            </div>
          </div>

          {/* Desktop Layout - Horizontal */}
          <div className=" hidden md:flex items-center justify-between">
            
            {/* Left Side - Workshop Card */}
            <div style={{width: '500px' , height: '150px'}} className="mt-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex items-center space-x-4 max-w-lg">
              {/* Profile Image */}
              <Image 
                className="rounded-2xl border-2 border-white shadow-lg flex-shrink-0" 
                src="/images/profile-img.png" 
                alt="Workshop Instructor" 
                width={100} 
                height={100}
                priority
              />
              
              {/* Text Content */}
              <div className="text-left">
                <h1 className="text-white text-xl font-bold leading-tight mb-1">
                2 DAYS WIN YOUR LIFE
                </h1>
                <h2 className="text-white text-lg font-semibold mb-2">
                  WORKSHOP
                </h2>
                <p className="text-white/90 text-sm font-medium">
                  Kolkata, West Bengal
                </p>
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div className="mt-80 hidden lg:block w-px h-20 bg-gradient-to-b from-transparent via-white/80 to-transparent"></div>

            {/* Right Side - Social Media and Register Button */}
            <div className=" mt-80 flex items-center space-x-6">
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/SUJOYDASMOTIVATION" 
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/sujoydasmotivation/" 
                  className="text-white hover:text-pink-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zm-2.22 3.896c1.429-.064 1.877-.078 5.503-.078 3.626 0 4.074.014 5.503.078 1.397.064 2.16.3 2.668.498.672.26 1.15.572 1.653 1.074.502.502.814.98 1.074 1.652.198.508.434 1.271.498 2.668.064 1.429.078 1.877.078 5.503s-.014 4.074-.078 5.503c-.064 1.397-.3 2.16-.498 2.668a4.456 4.456 0 01-1.074 1.653c-.502.502-.98.814-1.652 1.074-.508.198-1.271.434-2.668.498-1.429.064-1.877.078-5.503.078s-4.074-.014-5.503-.078c-1.397-.064-2.16-.3-2.668-.498a4.456 4.456 0 01-1.653-1.074 4.456 4.456 0 01-1.074-1.652c-.198-.508-.434-1.271-.498-2.668-.064-1.429-.078-1.877-.078-5.503s.014-4.074.078-5.503c.064-1.397.3-2.16.498-2.668.26-.672.572-1.15 1.074-1.653.502-.502.98-.814 1.652-1.074.508-.198 1.271-.434 2.668-.498zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.youtube.com/@sujoydasmotivation" 
                  className="text-white hover:text-red-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

               

                <a 
                  href="https://www.twitter.com" 
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                {/* linkedin */}
                <a href="https://in.linkedin.com/in/sujoy-das-motivation-838a1a28a" className="text-white hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
             
              </div>

              {/* Register Now Button */}
              <a  href="#register" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 inline-block">
                REGISTER NOW
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* About Sujoy Das Section */}
      <section id="about" className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-gray-500 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-gray-500 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-gray-500 rounded-full"></div>
          {/* Decorative Lines */}
          <div className="absolute top-32 right-32 w-32 h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
          <div className="absolute bottom-40 left-32 w-24 h-1 bg-gradient-to-r from-green-500 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 lg:mb-4 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                  SUJOY DAS 
                </h2>
                <h3 className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium mb-4 lg:mb-8">
                  {/* LIFE & BUSINESS COACH */}
                  MINDSET & WEALTH COACH
                </h3>
              </div>

              <div className="space-y-4 lg:space-y-6 text-gray-100 leading-relaxed">
                <p className="text-sm sm:text-base text-justify">
                  Life & Business Coach | Mindset Mentor | Wealth Trainer
                  For the past 10+years, Sujoy Das has empowered thousands of individuals across India and globally to break mental barriers, build unstoppable confidence, and achieve financial independence.
                </p>
                <p className="text-sm sm:text-base text-justify">
                  Through live seminars, online courses, and personal coaching, Sujoy has mentored students, entrepreneurs, corporate professionals, and individuals facing financial and life challenges—guiding them to build wealth, clarity, and purpose in their lives.
                </p>
                <p className="text-sm sm:text-base text-justify">
                  His high-energy, practical, and deeply relatable training style has earned him recognition among aspiring leaders and business owners seeking lasting personal transformation and business growth.
                </p>
                
                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-3 lg:p-4 my-4">
                  <p className="text-sm sm:text-base font-semibold text-center text-yellow-400">
                    &ldquo;To Make India the Largest Financially Educated Country in the World!&rdquo;
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm sm:text-base">⚡ Transform mindsets to action mindsets.</p>
                  <p className="text-sm sm:text-base">⚡ Build Wealth Warriors who conquer their financial struggles.</p>
                  <p className="text-sm sm:text-base">⚡ Create leaders who live with purpose and build legacies.</p>
                </div>

                <div className="mt-4 lg:mt-6">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400">Recognitions & Achievements</span>
                  <div className="space-y-2 mt-2">
                    <p className="text-xs sm:text-sm">🏆 Helped over Thousand of students and entrepreneurs transform their financial and personal lives.</p>
                    <p className="text-xs sm:text-sm">🏆 Featured speaker at [ NDTV 24*7 ] Block Development!</p>
                    <p className="text-xs sm:text-sm bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-3 lg:p-4 my-4">🏆 Creator of &ldquo;Wealth Warriors Coach &rdquo;, empowering people to fight for financial freedom.</p>
                    <p className="text-xs sm:text-sm">🏆 Recognized for his unique blend of motivation + practical wealth building strategies.</p>
                    <p className="text-xs sm:text-sm">🏆 Founder & CEO of Guides Money 💰 and My11 Fighters Private Limited!</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 lg:pt-6 flex justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-base lg:text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                  <span>MY STORY</span>
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative flex justify-center mt-8 lg:mt-0">
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-96">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent blur-3xl transform scale-150"></div>
                
                {/* Profile Image Container */}
                <div className="relative z-10 w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] rounded-2xl overflow-hidden premium-border animate-breathe shadow-2xl">
                  <div className="premium-border-content backdrop-blur-sm">
                    <Image 
                      style={{width: '90%', height: '100%' , marginTop: '4%' , alignItems: 'center' , justifyContent: 'center' , objectFit: 'contain'}}
                      src="/images/5ndbackground.png" 
                      alt="Sujoy Das - Life & Business Coach" 
                      width={500} 
                      height={500}
                      priority
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Floating Decorative Elements - Hidden on small screens */}
                <div className="hidden md:block absolute -top-4 -right-4 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                <div className="hidden md:block absolute -bottom-4 -left-4 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-xl"></div>
                
                {/* Geometric Accents - Hidden on small screens */}
                <div className="hidden md:block absolute top-8 -left-6 lg:-left-8 w-2 h-12 lg:h-16 bg-gradient-to-b from-blue-400 to-transparent rounded-full"></div>
                <div className="hidden md:block absolute bottom-8 -right-6 lg:-right-8 w-2 h-8 lg:h-12 bg-gradient-to-b from-purple-400 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Impact Section */}
      <section id="impact" style={{backgroundImage: 'url(/images/DSC02246-min-scaled-1-scaled.jpg.webp)' , backgroundSize: 'cover' , backgroundPosition: 'center'}} className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden" >
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-5">
           <div className="absolute top-20 left-20 w-40 h-40 border border-red-500 rounded-full animate-pulse"></div>
           <div className="absolute bottom-20 right-20 w-32 h-32 border border-blue-500 rounded-full animate-pulse delay-300"></div>
           <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-yellow-500 rounded-full animate-pulse delay-700"></div>
         </div>

         <div className="container mx-auto px-4 relative z-10">
            {/* Dark Overlay */}
 {/* <div className="absolute top-0 left-0 w-full h-50 bg-gradient-to-b from-black/40 to-black/70 z-0"></div> */}
           {/* Animated Title */}
           <div className="text-center mb-10">
             <h2 className="text-2xl md:text-xl lg:text-4xl font-bold mb-10">
               <span className="text-white">WE IMPACT PEOPLE&apos;S LIVES BY </span>
               <TypingAnimation 
                 words={[
                   'FOUNDATION',
                   'EDUCATION', 
                   'MINDSET',
                   'WEALTH',
                   'COACHING',
                   'TRAINING',
                   'MENTORING',
                   'EMPOWERMENT'
                 ]}
                 typingSpeed={120}
                 deletingSpeed={80}
                 pauseTime={1500}
               />
             </h2>
           </div>

           {/* Images Layout - Grid Structure */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
             
             {/* Left Column - Two Images */}
             <div className="space-y-6 animate-fade-in-left">
               {/* Top Left Image */}
               <div className="relative w-full h-64 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl transform hover:scale-105 transition-all duration-500">
                 <Image 
                  style={{width: '100%' , height: '100%' , objectFit: 'cover' }}
                   src="/images/Workshops.png" 
                   alt="26+ Years Of Experience" 
                   width={400} 
                   height={240}
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                   <h3 className="text-white font-bold text-lg">10+ Years Of Experience </h3>
                 </div>
               </div>
               
               {/* Bottom Left Image */}
                               <div className="relative mt-8 w-full h-64 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl transform hover:scale-105 transition-all duration-500">
                 <Image 
                   className="w-full h-full object-cover" 
                   src="/images/Awards.png" 
                   alt="Global Network" 
                   width={400} 
                   height={240}
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                   <h3 className="text-white font-bold text-lg"> Awards Received </h3>
                 </div>
               </div>
             </div>

             {/* Center Column - Main Profile */}
             <div className="flex justify-center">
               <div className="w-full max-w-sm h-150  overflow-hidden ">
                 <Image 
                 style={{width: '100%' , height: '100%' , objectFit: 'cover'}}
                   src="/images/middleimage.png" 
                   alt="Sujoy Das - Central Profile" 
                   width={320} 
                   height={400}
                   priority
                 />
                 <div style={{width: '100%' , height: '100%' }} className="absolute bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                 
               </div>
             </div>

             {/* Right Column - Two Images */}
             <div  className="space-y-6 animate-fade-in-right">
               {/* Top Right Image */}
               <div className="relative w-full h-64 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl transform hover:scale-105 transition-all duration-500">
                 <Image 
                   className="w-full h-full object-cover" 
                   src="/images/workshopimg.png" 
                   alt="50+ Different Workshops" 
                   width={400} 
                   height={240}
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                   <h3 className="text-white font-bold text-lg">13+ Different Workshops</h3>
                 </div>
               </div>
               
               {/* Bottom Right Image */}
               <div className="relative mt-8 w-full h-64 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl transform hover:scale-105 transition-all duration-500">
                 <Image 
                   className="w-full h-full object-cover" 
                   src="/images/mediapartners.jpeg" 
                   alt="Media Recognition" 
                   width={400} 
                   height={240}
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                   <h3 className="text-white font-bold text-lg">Media Recognition</h3>
                 </div>
               </div>
             </div>

           </div>
         </div>
              </section>

       {/* Achievement Statistics Section */}
       <section id="achievements" className="py-12 md:py-20 bg-black text-white relative overflow-hidden">
         <div className="container mx-auto px-4">
           
           {/* Statistics Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
             
             {/* Lives Transformed */}
             <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-2xl p-6 lg:p-8 text-center transform hover:scale-105 transition-all duration-300 hover:border-yellow-500/60 animate-border-glow">
               <div className="mb-4 lg:mb-6 flex justify-center">
                 <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                   <svg className="w-8 h-8 lg:w-12 lg:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h3v7c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-7h3v6l2.5-1.5L19 18.5l-2.5 1.5L14 18zm8-14.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM12 6c-1.1 0-2 .9-2 2 0 .74.4 1.38 1 1.73v.27h2v-.27c.6-.35 1-.99 1-1.73 0-1.1-.9-2-2-2z"/>
                   </svg>
                 </div>
               </div>
               <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-1 lg:mb-2">10,000+</h3>
               <p className="text-gray-300 text-sm sm:text-base lg:text-lg font-medium">Lives Transformed</p>
             </div>

             {/* Countries Traveled */}
             <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-2xl p-6 lg:p-8 text-center transform hover:scale-105 transition-all duration-300 hover:border-blue-500/60 animate-pulse-glow">
               <div className="mb-4 lg:mb-6 flex justify-center">
                 <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                   <svg className="w-8 h-8 lg:w-12 lg:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                   </svg>
                 </div>
               </div>
               <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 lg:mb-2">4+</h3>
               <p className="text-gray-300 text-sm sm:text-base lg:text-lg font-medium">Countries Traveled</p>
             </div>

             {/* Google Reviews */}
             <div className="bg-gradient-to-br from-gray-900 to-black border border-red-500/30 rounded-2xl p-6 lg:p-8 text-center transform hover:scale-105 transition-all duration-300 hover:border-red-500/60 animate-shimmer">
               <div className="mb-4 lg:mb-6 flex justify-center">
                 <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                   <svg className="w-8 h-8 lg:w-12 lg:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                   </svg>
                 </div>
               </div>
               <h3 className="text-lg sm:text-xl lg:text-3xl font-bold text-red-400 mb-1 lg:mb-2">5 Star rating</h3>
               <p className="text-gray-300 text-sm sm:text-base lg:text-lg font-medium">Google Reviews</p>
             </div>

             {/* Sky Diving Jump */}
             <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-2xl p-6 lg:p-8 text-center transform hover:scale-105 transition-all duration-300 hover:border-purple-500/60 animate-breathe">
               <div className="mb-4 lg:mb-6 flex justify-center">
                 <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                   <svg className="w-8 h-8 lg:w-12 lg:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                     {/* Sky diving person with parachute */}
                     <path d="M12 2C13.1 2 14 2.9 14 4S13.1 6 12 6 10 5.1 10 4 10.9 2 12 2M8.5 7H15.5C16.3 7 17 7.7 17 8.5S16.3 10 15.5 10H8.5C7.7 10 7 9.3 7 8.5S7.7 7 8.5 7M12 11C12.6 11 13 11.4 13 12V14C13 14.6 12.6 15 12 15S11 14.6 11 14V12C11 11.4 11.4 11 12 11M4 16C4 14.9 4.9 14 6 14S8 14.9 8 16H16C16 14.9 17.1 14 18 14S20 14.9 20 16C20 16.6 19.6 17 19 17H17.8L16.5 19.5C16.2 20.2 15.4 20.6 14.7 20.3L12 19L9.3 20.3C8.6 20.6 7.8 20.2 7.5 19.5L6.2 17H5C4.4 17 4 16.6 4 16M9.5 17.5L10.5 19L12 18.3L13.5 19L14.5 17.5H9.5Z"/>
                   </svg>
                 </div>
               </div>
               <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 lg:mb-2">5+</h3>
               <p className="text-gray-300 text-sm sm:text-base lg:text-lg font-medium">Sky Diving Jump</p>
             </div>

           </div>
         </div>

         {/* Bottom CTA */}
         <div className="text-center mt-12 lg:mt-16 px-4">
           <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">Ready to Transform Your Life?</h3>
           <p className="text-base sm:text-lg text-gray-300 mb-6">Join thousands who have already started their journey to success</p>
           <a href="#register" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg transform hover:scale-105 transition-all duration-300 inline-block">
             Get Started Today
           </a>
         </div>
       </section>

        {/* Register Now Section */}
        <section id="register" className="py-8 sm:py-12 lg:py-16 bg-black text-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              
              {/* Left Column - Registration Form */}
              <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                
                {/* Heading */}
                <div className="space-y-3 lg:space-y-4 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    <span className="text-white">REGISTER NOW & GET A</span>
                    <br />
                    <span className="text-white">FREE COURSE</span>
                  </h2>
                  <div className="space-y-2">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-500">
                      WORTH ₹4999/-
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-400">
                      AFTER DISCOUNT: ₹0 (100% FREE!)
                    </p>
                  </div>
                </div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSefkYqhAgfiJptt5FLjkTi8yo-LD5Xg3xNc3JpdSMVGRo9_CQ/viewform" target="_blank" rel="noopener noreferrer">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span className="hidden sm:inline">REGISTER NOW - GET FREE COURSE</span>
                    <span className="sm:hidden">REGISTER FOR FREE COURSE</span>
                  </button>
                </a>
                {/* Registration Form */}
                {/* <form className="space-y-4 lg:space-y-6" > */}

                  {/* Submit Button */}
                  {/* <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span className="hidden sm:inline">REGISTER NOW - GET FREE COURSE</span>
                    <span className="sm:hidden">REGISTER FOR FREE COURSE</span>
                  </button>

                </form> */}

              </div>

              {/* Right Column - Professional Image */}
              <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                  
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
                  
                  {/* Main Image */}
                  <div className="relative z-10 animate-rainbow-border rounded-2xl">
                    <Image
                      src="/images/gaurgopal.png"
                      alt="Sujoy Das - Professional Coach"
                      width={500}
                      height={600}
                      className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                      priority
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
                  </div>

                  {/* Floating Elements - Hidden on small screens */}
                  <div className="hidden md:block absolute -top-4 -right-4 w-6 lg:w-8 h-6 lg:h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="hidden md:block absolute top-1/3 -left-4 lg:-left-6 w-4 lg:w-6 h-4 lg:h-6 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="hidden md:block absolute bottom-1/4 -right-6 lg:-right-8 w-8 lg:w-10 h-8 lg:h-10 bg-red-400 rounded-full animate-ping"></div>

                </div>
              </div>

            </div>

            {/* Bottom CTA Text */}
            <div className="text-center mt-12 lg:mt-16 px-4">
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Join thousands of successful individuals who have transformed their lives through our proven coaching methods. 
                <span className="text-yellow-400 font-bold"> Limited time offer - Act now!</span>
              </p>
            </div>

          </div>
                </section>

        {/* We Have Made History in India Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8">
                <span className="text-white">WE HAVE MADE </span>
                <span className="text-gradient bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">HISTORY</span>
                <span className="text-white">, IN INDIA</span>
              </h2>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              
              {/* Growth Summit India 2022 */}
              <div className="space-y-6">
                
                {/* 2022 Title */}
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Growth Summit India 2022
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                </div>

                {/* 2022 Image Grid */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Top Left - Main Stage Speaking */}
                  <div className="col-span-2 relative h-150 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl transform hover:scale-105 transition-all duration-500">
                    <Image
                      src="/images/Picsart_23-08-03_12-32-14-236.jpg"
                      alt="Growth Summit India 2022 - Main Stage"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-lg">Main Stage Keynote</h4>
                      <p className="text-gray-300 text-sm">Transforming Lives Through Education</p>
                    </div>
                  </div>

                  {/* Bottom Left - Awards & Recognition */}
                  <div className="relative h-50 rounded-xl overflow-hidden border border-white/20 shadow-lg transform hover:scale-105 transition-all duration-500">
                    <Image
                      src="/images/Awards.png"
                      alt="Awards & Recognition 2022"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="text-white font-semibold text-sm">Excellence Award</h4>
                    </div>
                  </div>

                  {/* Bottom Right - Networking */}
                  <div className="relative h-50 rounded-xl overflow-hidden border border-white/20 shadow-lg transform hover:scale-105 transition-all duration-500">
                    <Image
                      src="/images/workshopimg.png"
                      alt="Networking & Workshops 2022"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="text-white font-semibold text-sm">Expert Sessions</h4>
                    </div>
                  </div>
     {/* Bottom Left - Awards & Recognition */}
              <div className="relative h-32 rounded-xl overflow-hidden border border-white/20 shadow-lg transform hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ranveer-allahbadia.jpeg"
                  alt="Awards & Recognition 2022"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h4 className="text-white font-semibold text-sm">Ranveer Allahbadia</h4>
                </div>
              </div>

              {/* Bottom Right - Networking */}
              <div className="relative h-80 rounded-xl overflow-hidden border border-white/20 shadow-lg transform hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/raj.jpeg"
                  alt="Networking & Workshops 2022"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h4 className="text-white font-semibold text-sm">Raj Sharmani</h4>
                </div>
              </div>

                </div>


              </div>

              {/* Growth Summit India 2023 */}
              <div className="space-y-6">
                
                {/* 2023 Title */}
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Growth Summit India 2023
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
                </div>

                {/* 2023 Image Grid */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Top Left - Panel Discussion */}
                  <div className="relative h-36 rounded-xl overflow-hidden border border-white/20 shadow-lg transform hover:scale-105 transition-all duration-500">
                    <Image
                      src="/images/Experience.jpeg"
                      alt="Panel Discussion 2023"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="text-white font-semibold text-sm">Khan Sir Discussion</h4>
                    </div>
                  </div>

                  {/* Top Right - VIP Networking */}
                  <div className="relative h-36 rounded-xl overflow-hidden border border-white/20 shadow-lg transform hover:scale-105 transition-all duration-500">
                    <Image
                      src="/images/cm.jpeg"
                      alt="VIP Networking 2023"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="text-white font-semibold text-sm"></h4>
                    </div>
                  </div>

                  {/* Bottom - Main Presentation */}
                  <div className="col-span-2 relative h-56 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl transform hover:scale-105 transition-all duration-500">
                    <Image
                      src="/images/RobertKiyosaki.jpeg"
                      alt="Growth Summit India 2023 - Main Presentation"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-lg">Revolutionary Workshops</h4>
                      <p className="text-gray-300 text-sm">Next-Level Business Growth Strategies</p>
                    </div>
                  </div>


                    {/* Top Left - Panel Discussion */}
                    <div className="relative h-80 rounded-xl overflow-hidden border border-white/20 shadow-lg transform hover:scale-105 transition-all duration-500">
                    <Image
                      src="/images/himesh.jpeg"
                      alt="Panel Discussion 2023"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="text-white font-semibold text-sm">
                      Him-eesh Madaan</h4>
                    </div>
                  </div>

                  {/* Top Right - VIP Networking */}
                  <div className="relative h-80 rounded-xl overflow-hidden border border-white/20 shadow-lg transform hover:scale-105 transition-all duration-500">
                    <Image
                      src="/images/aman.jpeg"
                      alt="VIP Networking 2023"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="text-white font-semibold text-sm">Aman Gupta</h4>
                    </div>
                  </div>
  {/* Top Left - Panel Discussion */}
  <div className="relative h-80 rounded-xl overflow-hidden border border-white/20 shadow-lg transform hover:scale-105 transition-all duration-500">
                    <Image
                      src="/images/img1.jpeg"
                      alt="Panel Discussion 2023"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="text-white font-semibold text-sm">Shivam Malik</h4>
                    </div>
                  </div>

                  {/* Top Right - VIP Networking */}
                  <div className="relative h-80 rounded-xl overflow-hidden border border-white/20 shadow-lg transform hover:scale-105 transition-all duration-500">
                    <Image
                      src="/images/img2.jpeg"
                      alt="VIP Networking 2023"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="text-white font-semibold text-sm">Rahul Jain</h4>
                    </div>
                  </div>
                  

                  
                </div>


              </div>

            </div>

            {/* Bottom Section - Overall Impact */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-yellow-900/20 via-orange-900/20 to-red-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Creating History, One Summit at a Time
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  From pioneering financial education to revolutionary business growth strategies, 
                  the Growth Summit India series has become the most influential platform for 
                  transformation in the country. <span className="text-yellow-400 font-bold">Join us as we continue to make history!</span>
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
    );
  }
