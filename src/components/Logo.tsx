import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'symbol' | 'compact';
  theme?: 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const LogoSymbol: React.FC<{
  className?: string;
  theme?: 'white' | 'dark';
  size?: number;
}> = ({
  className = '',
  theme = 'dark',
  size = 40,
}) => {
  const src = theme === 'white' ? '/FIRST-global_white.png' : '/FIRST-global_black.png';
  const fallback = theme === 'white' ? '/image-84.png' : '/image 85.png';

  return (
    <img
      src={src}
      onError={(e) => {
        e.currentTarget.src = fallback;
      }}
      alt="FirstGlobal Symbol"
      style={{ height: size, width: 'auto' }}
      className={`object-contain select-none ${className}`}
    />
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  theme = 'dark',
  size = 'md',
}) => {
  const heightClass =
    size === 'sm'
      ? 'h-5 sm:h-6'
      : size === 'lg'
      ? 'h-8 sm:h-9 md:h-10'
      : 'h-6 sm:h-7 md:h-8';

  const src = theme === 'white' ? '/FIRST-global_white.png' : '/FIRST-global_black.png';
  const fallback = theme === 'white' ? '/image-84.png' : '/image 85.png';

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={src}
        onError={(e) => {
          e.currentTarget.src = fallback;
        }}
        alt="FirstGlobal Services & Technologies Private Limited"
        className={`${heightClass} w-auto max-w-[320px] sm:max-w-[400px] object-contain select-none`}
      />
    </div>
  );
};
