'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { PageLoader } from '@/components/PageLoader';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const pathname = usePathname();

  const startLoading = () => {
    setIsLoading(true);
    setShowLoader(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
    // Add a slight delay before hiding the loader to ensure smooth transition
    setTimeout(() => {
      setShowLoader(false);
    }, 300);
  };

  // Handle route changes
  useEffect(() => {
    // Start loading when pathname changes
    startLoading();
    
    // Simulate minimum loading time for better UX
    const minLoadingTime = setTimeout(() => {
      stopLoading();
    }, 1000);

    return () => {
      clearTimeout(minLoadingTime);
    };
  }, [pathname]);

  // Initial page load
  useEffect(() => {
    // Show loader on initial page load
    setShowLoader(true);
    startLoading();
    
    const timer = setTimeout(() => {
      stopLoading();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const value: LoadingContextType = {
    isLoading,
    setIsLoading,
    startLoading,
    stopLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      {showLoader && <PageLoader />}
      <div className={`transition-opacity duration-300 ${showLoader ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </LoadingContext.Provider>
  );
};