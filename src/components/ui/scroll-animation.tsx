"use client";

import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

// Keeping these types for compatibility but they are unused in logic now
type Variant = any; 

const defaultViewport = { amount: 0.3, margin: '0px 0px -100px 0px' };

interface ScrollAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variants?: {
    hidden?: Variant;
    visible?: Variant;
  };
  viewport?: {
    amount?: number;
    margin?: string;
    once?: boolean;
  };
  delay?: number;
  direction?: Direction;
}

const ScrollAnimation = forwardRef<HTMLDivElement, ScrollAnimationProps>(
  (
    {
      children,
      className,
      variants,
      viewport = defaultViewport,
      delay = 0,
      direction = 'down',
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

ScrollAnimation.displayName = 'ScrollAnimation';

export default ScrollAnimation;
