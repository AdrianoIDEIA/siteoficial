import { useState, useEffect } from 'react';

/**
 * Hook customizado para tracking de mouse
 * Implementa o princípio da Responsabilidade Única (SRP)
 * Centraliza a lógica de rastreamento do mouse
 */
export const useMouseTracking = (isActive: boolean = false) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isActive) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isActive]);

  return mousePosition;
};

/**
 * Hook customizado para tracking de mouse relativo a um elemento
 * Útil para efeitos de mouse follower em modais
 */
export const useRelativeMouseTracking = (elementRef: React.RefObject<HTMLElement>, isActive: boolean = false) => {
  const [relativePosition, setRelativePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isActive || !elementRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = elementRef.current!.getBoundingClientRect();
      setRelativePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isActive, elementRef]);

  return relativePosition;
};