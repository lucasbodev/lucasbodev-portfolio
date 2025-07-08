'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const MobileContext = createContext(false);

export function useIsMobile() {
  return useContext(MobileContext);
};

export function MobileProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handleResize = () => setIsMobile(mq.matches);
    handleResize();
    mq.addEventListener('change', handleResize);
    return () => mq.removeEventListener('change', handleResize);
  }, []);

  return (
    <MobileContext.Provider value={isMobile!}>
      {children}
    </MobileContext.Provider>
  );
};
