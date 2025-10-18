'use client';

import Link from 'next/link';
import { useLoading } from '@/contexts/LoadingContext';
import { ReactNode } from 'react';

interface LoadingLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

export const LoadingLink = ({ href, children, className = '', ...props }: LoadingLinkProps) => {
  const { startLoading } = useLoading();

  const handleClick = () => {
    // Only start loading for different routes
    if (window.location.pathname !== href) {
      startLoading();
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};