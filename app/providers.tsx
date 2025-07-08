'use client';

import { MobileProvider } from '@/lib/context/MobileContext';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import React from 'react';

export function Providers ({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <MobileProvider>
            {children}
      </MobileProvider>
    </UserProvider> 
  );
}
