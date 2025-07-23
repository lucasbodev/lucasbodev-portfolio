import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['fr', 'en', 'nl', 'de', 'lb'],

  // Used when no locale matches
  defaultLocale: 'fr',

  localePrefix: 'never',

  // The routing configuration
  pathnames: {
    '/': '/',
    '/projects': '/projects',
    '/project-details/[id]': '/project-details/[id]',
    '/contact': '/contact',
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);