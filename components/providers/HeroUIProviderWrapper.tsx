'use client';

import { HeroUIProvider } from '@heroui/react';
import { type ReactNode } from 'react';

export function HeroUIProviderWrapper({ children }: { children: ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
