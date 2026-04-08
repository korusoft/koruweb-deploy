'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from '@heroui/react';
import { motion } from 'motion/react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

const navKeys = ['home', 'about', 'services', 'portfolio', 'blog'] as const;

const pathMap: Record<string, string> = {
  home: '',
  about: '/about',
  services: '/services',
  portfolio: '/portfolio',
  blog: '/blog',
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, lang } = useTranslation();
  const localizedPath = useLocalizedPath();

  const isActive = (path: string) => {
    const fullPath = localizedPath(path);
    if (path === '') {
      return pathname === `/${lang}` || pathname === `/${lang}/`;
    }
    return pathname.startsWith(fullPath);
  };

  return (
    <HeroNavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white/90 backdrop-blur-md shadow-sm"
      maxWidth="xl"
      height="5rem"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href={localizedPath('/')} className="flex items-center gap-2">
            <motion.img
              src="/assets/logo.svg"
              alt="Koru"
              className="h-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {navKeys.map((key) => {
          const path = pathMap[key];
          return (
            <NavbarItem key={key} isActive={isActive(path)}>
              <Link
                href={localizedPath(path || '/')}
                className={`text-sm font-medium transition-colors ${
                  isActive(path)
                    ? 'text-[#001D3D] font-semibold'
                    : 'text-gray-600 hover:text-[#001D3D]'
                }`}
              >
                {t(`nav.${key}`)}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-2">
        <NavbarItem className="hidden sm:flex">
          <LanguageSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href={localizedPath('/contact')}
            color="primary"
            variant="solid"
            radius="full"
            className="font-semibold"
          >
            {t('nav.contact')}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-6">
        {navKeys.map((key) => {
          const path = pathMap[key];
          return (
            <NavbarMenuItem key={key}>
              <Link
                href={localizedPath(path || '/')}
                onClick={() => setIsMenuOpen(false)}
                className={`w-full text-lg py-2 block ${
                  isActive(path)
                    ? 'text-[#001D3D] font-semibold'
                    : 'text-gray-600'
                }`}
              >
                {t(`nav.${key}`)}
              </Link>
            </NavbarMenuItem>
          );
        })}
        <NavbarMenuItem>
          <Link
            href={localizedPath('/contact')}
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-lg py-2 block text-[#001D3D] font-semibold"
          >
            {t('nav.contact')}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="pt-4">
          <LanguageSwitcher />
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroNavbar>
  );
}
