/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as HomeIndexImport } from './routes/home/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as HomeFeature3Import } from './routes/home/feature3'
import { Route as HomeCeksertifImport } from './routes/home/ceksertif'
import { Route as HomeAutentikasiImport } from './routes/home/autentikasi'
import { Route as HomeAboutImport } from './routes/home/about'
import { Route as DashboardPindahtanganImport } from './routes/dashboard/pindah_tangan'
import { Route as DashboardAktivitasImport } from './routes/dashboard/aktivitas'
import { Route as DashboardNibImport } from './routes/dashboard/$nib'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const HomeIndexRoute = HomeIndexImport.update({
  id: '/home/',
  path: '/home/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/dashboard/',
  path: '/dashboard/',
  getParentRoute: () => rootRoute,
} as any)

const HomeFeature3Route = HomeFeature3Import.update({
  id: '/home/feature3',
  path: '/home/feature3',
  getParentRoute: () => rootRoute,
} as any)

const HomeCeksertifRoute = HomeCeksertifImport.update({
  id: '/home/ceksertif',
  path: '/home/ceksertif',
  getParentRoute: () => rootRoute,
} as any)

const HomeAutentikasiRoute = HomeAutentikasiImport.update({
  id: '/home/autentikasi',
  path: '/home/autentikasi',
  getParentRoute: () => rootRoute,
} as any)

const HomeAboutRoute = HomeAboutImport.update({
  id: '/home/about',
  path: '/home/about',
  getParentRoute: () => rootRoute,
} as any)

const DashboardPindahtanganRoute = DashboardPindahtanganImport.update({
  id: '/dashboard/pindah_tangan',
  path: '/dashboard/pindah_tangan',
  getParentRoute: () => rootRoute,
} as any)

const DashboardAktivitasRoute = DashboardAktivitasImport.update({
  id: '/dashboard/aktivitas',
  path: '/dashboard/aktivitas',
  getParentRoute: () => rootRoute,
} as any)

const DashboardNibRoute = DashboardNibImport.update({
  id: '/dashboard/$nib',
  path: '/dashboard/$nib',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/$nib': {
      id: '/dashboard/$nib'
      path: '/dashboard/$nib'
      fullPath: '/dashboard/$nib'
      preLoaderRoute: typeof DashboardNibImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/aktivitas': {
      id: '/dashboard/aktivitas'
      path: '/dashboard/aktivitas'
      fullPath: '/dashboard/aktivitas'
      preLoaderRoute: typeof DashboardAktivitasImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/pindah_tangan': {
      id: '/dashboard/pindah_tangan'
      path: '/dashboard/pindah_tangan'
      fullPath: '/dashboard/pindah_tangan'
      preLoaderRoute: typeof DashboardPindahtanganImport
      parentRoute: typeof rootRoute
    }
    '/home/about': {
      id: '/home/about'
      path: '/home/about'
      fullPath: '/home/about'
      preLoaderRoute: typeof HomeAboutImport
      parentRoute: typeof rootRoute
    }
    '/home/autentikasi': {
      id: '/home/autentikasi'
      path: '/home/autentikasi'
      fullPath: '/home/autentikasi'
      preLoaderRoute: typeof HomeAutentikasiImport
      parentRoute: typeof rootRoute
    }
    '/home/ceksertif': {
      id: '/home/ceksertif'
      path: '/home/ceksertif'
      fullPath: '/home/ceksertif'
      preLoaderRoute: typeof HomeCeksertifImport
      parentRoute: typeof rootRoute
    }
    '/home/feature3': {
      id: '/home/feature3'
      path: '/home/feature3'
      fullPath: '/home/feature3'
      preLoaderRoute: typeof HomeFeature3Import
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof rootRoute
    }
    '/home/': {
      id: '/home/'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard/$nib': typeof DashboardNibRoute
  '/dashboard/aktivitas': typeof DashboardAktivitasRoute
  '/dashboard/pindah_tangan': typeof DashboardPindahtanganRoute
  '/home/about': typeof HomeAboutRoute
  '/home/autentikasi': typeof HomeAutentikasiRoute
  '/home/ceksertif': typeof HomeCeksertifRoute
  '/home/feature3': typeof HomeFeature3Route
  '/dashboard': typeof DashboardIndexRoute
  '/home': typeof HomeIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dashboard/$nib': typeof DashboardNibRoute
  '/dashboard/aktivitas': typeof DashboardAktivitasRoute
  '/dashboard/pindah_tangan': typeof DashboardPindahtanganRoute
  '/home/about': typeof HomeAboutRoute
  '/home/autentikasi': typeof HomeAutentikasiRoute
  '/home/ceksertif': typeof HomeCeksertifRoute
  '/home/feature3': typeof HomeFeature3Route
  '/dashboard': typeof DashboardIndexRoute
  '/home': typeof HomeIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashboard/$nib': typeof DashboardNibRoute
  '/dashboard/aktivitas': typeof DashboardAktivitasRoute
  '/dashboard/pindah_tangan': typeof DashboardPindahtanganRoute
  '/home/about': typeof HomeAboutRoute
  '/home/autentikasi': typeof HomeAutentikasiRoute
  '/home/ceksertif': typeof HomeCeksertifRoute
  '/home/feature3': typeof HomeFeature3Route
  '/dashboard/': typeof DashboardIndexRoute
  '/home/': typeof HomeIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dashboard/$nib'
    | '/dashboard/aktivitas'
    | '/dashboard/pindah_tangan'
    | '/home/about'
    | '/home/autentikasi'
    | '/home/ceksertif'
    | '/home/feature3'
    | '/dashboard'
    | '/home'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/dashboard/$nib'
    | '/dashboard/aktivitas'
    | '/dashboard/pindah_tangan'
    | '/home/about'
    | '/home/autentikasi'
    | '/home/ceksertif'
    | '/home/feature3'
    | '/dashboard'
    | '/home'
  id:
    | '__root__'
    | '/'
    | '/dashboard/$nib'
    | '/dashboard/aktivitas'
    | '/dashboard/pindah_tangan'
    | '/home/about'
    | '/home/autentikasi'
    | '/home/ceksertif'
    | '/home/feature3'
    | '/dashboard/'
    | '/home/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardNibRoute: typeof DashboardNibRoute
  DashboardAktivitasRoute: typeof DashboardAktivitasRoute
  DashboardPindahtanganRoute: typeof DashboardPindahtanganRoute
  HomeAboutRoute: typeof HomeAboutRoute
  HomeAutentikasiRoute: typeof HomeAutentikasiRoute
  HomeCeksertifRoute: typeof HomeCeksertifRoute
  HomeFeature3Route: typeof HomeFeature3Route
  DashboardIndexRoute: typeof DashboardIndexRoute
  HomeIndexRoute: typeof HomeIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardNibRoute: DashboardNibRoute,
  DashboardAktivitasRoute: DashboardAktivitasRoute,
  DashboardPindahtanganRoute: DashboardPindahtanganRoute,
  HomeAboutRoute: HomeAboutRoute,
  HomeAutentikasiRoute: HomeAutentikasiRoute,
  HomeCeksertifRoute: HomeCeksertifRoute,
  HomeFeature3Route: HomeFeature3Route,
  DashboardIndexRoute: DashboardIndexRoute,
  HomeIndexRoute: HomeIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard/$nib",
        "/dashboard/aktivitas",
        "/dashboard/pindah_tangan",
        "/home/about",
        "/home/autentikasi",
        "/home/ceksertif",
        "/home/feature3",
        "/dashboard/",
        "/home/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard/$nib": {
      "filePath": "dashboard/$nib.tsx"
    },
    "/dashboard/aktivitas": {
      "filePath": "dashboard/aktivitas.tsx"
    },
    "/dashboard/pindah_tangan": {
      "filePath": "dashboard/pindah_tangan.tsx"
    },
    "/home/about": {
      "filePath": "home/about.tsx"
    },
    "/home/autentikasi": {
      "filePath": "home/autentikasi.tsx"
    },
    "/home/ceksertif": {
      "filePath": "home/ceksertif.tsx"
    },
    "/home/feature3": {
      "filePath": "home/feature3.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx"
    },
    "/home/": {
      "filePath": "home/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
