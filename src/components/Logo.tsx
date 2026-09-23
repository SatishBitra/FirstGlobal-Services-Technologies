import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'symbol' | 'compact';
  size?: 'sm' | 'md' | 'lg';
}

export const LogoSymbol: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 40,
}) => {
  return (
    <img
      src="/fg-logo.png"
      alt="FirstGlobal Symbol"
      style={{ height: size, width: 'auto' }}
      className={`object-contain select-none ${className}`}
    />
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const heightClass =
    size === 'sm'
      ? 'h-8 sm:h-9'
      : size === 'lg'
      ? 'h-11 sm:h-12 md:h-13 lg:h-14'
      : 'h-10 sm:h-11 md:h-12 lg:h-[52px]';

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src="/fg-logo.png"
        alt="FirstGlobal Services & Technologies Private Limited"
        className={`${heightClass} w-auto max-w-[320px] object-contain select-none`}
      />
    </div>
  );
};
