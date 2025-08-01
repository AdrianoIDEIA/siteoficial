import React, { useState, useEffect } from 'react';

/**
 * Componente ParallaxElement reutilizável
 * Implementa o princípio da Responsabilidade Única (SRP)
 * Responsável apenas por criar efeito parallax
 */

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  disabled?: boolean;
}

export const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 0.5,
  className = '',
  direction = 'up',
  disabled = false
}) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [disabled]);

  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  const getTransform = () => {
    const offset = offsetY * speed;
    switch (direction) {
      case 'up':
        return `translateY(${-offset}px)`;
      case 'down':
        return `translateY(${offset}px)`;
      case 'left':
        return `translateX(${-offset}px)`;
      case 'right':
        return `translateX(${offset}px)`;
      default:
        return `translateY(${-offset}px)`;
    }
  };

  return (
    <div 
      className={className}
      style={{ 
        transform: getTransform(),
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};