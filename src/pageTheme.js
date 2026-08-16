// Single source of truth for each route's accent color and derived styling.
// Consumed by App.jsx (background pattern) and Navbar.jsx (active-link styling)
// so a page's theme is declared once instead of duplicated per component.
export const DEFAULT_ACCENT = 'orange';

export const PAGE_THEME = {
    '/': {
        accent: 'orange',
        bgClass: 'bg-page-home',
    },
    '/about': {
        accent: 'periwinkle',
        bgClass: 'bg-page-about',
        desktopActiveClass: 'border-periwinkle-400',
        mobileActiveClass: 'bg-periwinkle-50 dark:bg-periwinkle-950 text-periwinkle-700 dark:text-periwinkle-400',
    },
    '/cslua': {
        accent: 'navy',
        bgClass: 'bg-page-cslua',
        desktopActiveClass: 'border-navy-500 dark:border-periwinkle-400',
        mobileActiveClass: 'bg-navy-50 dark:bg-navy-950 text-navy-600 dark:text-periwinkle-400',
    },
    '/projects': {
        accent: 'amber',
        bgClass: 'bg-page-projects',
        desktopActiveClass: 'border-amber-500',
        mobileActiveClass: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400',
    },
    '/contact': {
        accent: 'orange',
        bgClass: 'bg-page-contact',
        desktopActiveClass: 'border-orange-500',
        mobileActiveClass: 'bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400',
    },
};

export function getPageTheme(pathname) {
    return PAGE_THEME[pathname] ?? {};
}

// Page order for h/l vim-style navigation — mirrors the Navbar's left-to-right order.
export const PAGE_ORDER = ['/', '/about', '/cslua', '/projects', '/contact'];
