import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'motion/react';
import { cn } from './ui/utils';

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = "relative overflow-hidden rounded-xl font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variantClasses = {
      primary: "glass text-white shadow-lg hover:shadow-xl",
      secondary: "glass-hover bg-white/10 text-primary hover:bg-white/20 border border-white/20",
      outline: "glass-hover border-2 border-primary/30 text-primary hover:border-primary/50 hover:bg-primary/5"
    };
    
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        whileHover={{ 
          scale: 1.02,
          y: -2,
        }}
        whileTap={{ 
          scale: 0.98,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17
        }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {variant === 'primary' && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary via-primary-medium to-primary-light opacity-90"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </motion.button>
    );
  }
);

GlassButton.displayName = "GlassButton";