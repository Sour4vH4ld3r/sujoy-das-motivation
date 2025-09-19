import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'white' | 'dark';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'medium', 
  variant = 'default', 
  showText = false,
  className = '' 
}) => {
  const dimensions = {
    small: { width: 120, height: 40, iconSize: 32, fontSize: 'text-lg', logoWidth: 130, logoHeight: 110 },
    medium: { width: 160, height: 50, iconSize: 40, fontSize: 'text-xl', logoWidth: 180, logoHeight: 152 },
    large: { width: 200, height: 60, iconSize: 48, fontSize: 'text-2xl', logoWidth: 260, logoHeight: 220 }
  };

  const colors = {
    default: {
      primary: '#3B82F6', // Blue
      secondary: '#8B5CF6', // Purple
      accent: '#F59E0B', // Yellow
      text: '#1F2937'
    },
    white: {
      primary: '#FFFFFF',
      secondary: '#F3F4F6',
      accent: '#FCD34D',
      text: '#FFFFFF'
    },
    dark: {
      primary: '#1F2937',
      secondary: '#374151',
      accent: '#F59E0B',
      text: '#1F2937'
    }
  };

  const currentColors = colors[variant];
  const currentSize = dimensions[size];

  return (
    <div  className={`flex items-center space-x-3 ${className}`}>
      {/* backgroundlogo.png */}
       <div className="relative">
        <Image 
          src="/logos/sujoydaslogo.png" 
          alt="Sujoy Das Stacked Arrow Logo" 
          width={200} 
          height={100} 
        />
       </div>

      {/* Logo Text */}
      {/* {showText && (
        <div className="flex flex-col leading-tight">
          <div className={`font-bold ${currentSize.fontSize} tracking-tight`} style={{ color: currentColors.text }}>
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              SUJOY
            </span>
            <span className="ml-1" style={{ color: currentColors.accent }}>
              DAS
            </span>
          </div>
          <div 
            className="text-xs font-medium tracking-wider uppercase opacity-80"
            style={{ color: currentColors.text }}
          >
            Mindset & Wealth Coach
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Logo; 