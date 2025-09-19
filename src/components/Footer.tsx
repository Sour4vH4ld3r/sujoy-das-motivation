import Link from 'next/link';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Life Coaching', href: '#coaching' },
        { name: 'Business Mentoring', href: '#mentoring' },
        { name: 'Wealth Training', href: '#wealth' },
        { name: 'Mindset Development', href: '#mindset' },
      ],
    },
    {
      title: 'Programs',
      links: [
        { name: 'Online Workshops', href: '#workshops' },
        { name: 'Personal Coaching', href: '#personal' },
        { name: 'Group Sessions', href: '#group' },
        { name: 'Corporate Training', href: '#corporate' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { name: 'Terms and Conditions', href: '/terms-and-conditions' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Cancellation and Refund', href: '/cancellation-and-refund' },
        { name: 'Shipping and Delivery', href: '/shipping-and-delivery' },
        { name: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#help' },
        { name: 'Schedule Call', href: '#schedule' },
        { name: 'Community', href: '#community' },
        { name: 'FAQ', href: '#faq' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61562346656950&ref=_xav_ig_profile_page_web',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/sujoydasmotivation/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zm-2.22 3.896c1.429-.064 1.877-.078 5.503-.078 3.626 0 4.074.014 5.503.078 1.397.064 2.16.3 2.668.498.672.26 1.15.572 1.653 1.074.502.502.814.98 1.074 1.652.198.508.434 1.271.498 2.668.064 1.429.078 1.877.078 5.503s-.014 4.074-.078 5.503c-.064 1.397-.3 2.16-.498 2.668a4.456 4.456 0 01-1.074 1.653c-.502.502-.98.814-1.652 1.074-.508.198-1.271.434-2.668.498-1.429.064-1.877.078-5.503.078s-4.074-.014-5.503-.078c-1.397-.064-2.16-.3-2.668-.498a4.456 4.456 0 01-1.653-1.074 4.456 4.456 0 01-1.074-1.652c-.198-.508-.434-1.271-.498-2.668-.064-1.429-.078-1.877-.078-5.503s.014-4.074.078-5.503c.064-1.397.3-2.16.498-2.668.26-.672.572-1.15 1.074-1.653.502-.502.98-.814 1.652-1.074.508-.198 1.271-.434 2.668-.498zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@sujoydasmotivation',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-500 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-purple-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-yellow-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info with Logo */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo size="medium" variant="white" showText={true} />
            </div>
            <p className="text-gray-300 text-base mb-6 leading-relaxed">
              Empowering individuals to break mental barriers, build unstoppable confidence, and achieve financial independence through proven coaching methodologies.
            </p>
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 mb-6">
              <h4 className="text-white font-semibold mb-2">Mission Statement</h4>
              <p className="text-gray-300 text-sm">
                &ldquo;To Make India the Largest Financially Educated Country in the World!&rdquo;
              </p>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg bg-gray-800/50 hover:bg-blue-600/20"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold mb-4 text-lg border-b border-blue-500/30 pb-2">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Transform Your Life Today
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Subscribe to receive exclusive coaching tips, wealth-building strategies, and life-changing insights directly in your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email for free resources"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg">
                Get Free Access
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">10,000+</div>
              <div className="text-gray-400 text-sm">Lives Transformed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
              <div className="text-gray-400 text-sm">Countries Reached</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">5★</div>
              <div className="text-gray-400 text-sm">Google Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sujoy Das - Life & Business Coach. All rights reserved. Empowering lives since 2014.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms and Conditions
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 