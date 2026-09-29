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
  const src = theme === 'white' ? '/image 84.png' : '/image-85.png';
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
      ? 'h-8 sm:h-9'
      : size === 'lg'
      ? 'h-11 sm:h-12 md:h-14'
      : 'h-9 sm:h-10 md:h-11';

  const src = theme === 'white' ? '/image 84.png' : '/image-85.png';
  const fallback = theme === 'white' ? '/image-84.png' : '/image 85.png';

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={src}
        onError={(e) => {
          e.currentTarget.src = fallback;
        }}
        alt="FirstGlobal Services & Technologies Private Limited"
        className={`${heightClass} w-auto max-w-[280px] sm:max-w-[340px] object-contain select-none`}
      />
    </div>
  );
};
