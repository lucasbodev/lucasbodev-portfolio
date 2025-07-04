import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['fr', 'en', 'nl', 'de'],

  // Used when no locale matches
  defaultLocale: 'fr',

  localePrefix: 'never',

  // The routing configuration
  pathnames: {
    '/': '/',
    '/projects': '/projects',
    '/project-details': '/project-details',
    '/contact': '/contact',
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);