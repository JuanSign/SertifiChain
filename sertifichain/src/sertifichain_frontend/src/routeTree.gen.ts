/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SuccessImport } from './routes/success'
import { Route as IndexImport } from './routes/index'
import { Route as HomeIndexImport } from './routes/home/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as CekSertifikatIndexImport } from './routes/cek-sertifikat/index'
import { Route as PindahTanganNibImport } from './routes/pindah-tangan/$nib'
import { Route as HomeCeksertifImport } from './routes/home/ceksertif'
import { Route as HomeAutentikasiImport } from './routes/home/autentikasi'
import { Route as HomeAboutImport } from './routes/home/about'
import { Route as DashboardPindahTanganImport } from './routes/dashboard/pindah-tangan'
import { Route as DashboardAktivitasImport } from './routes/dashboard/aktivitas'
import { Route as DashboardDetailNibImport } from './routes/dashboard/detail/$nib'

// Create/Update Routes

const SuccessRoute = SuccessImport.update({
  id: '/success',
  path: '/success',
  getParentRoute: () => rootRoute,
} as any)

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

const CekSertifikatIndexRoute = CekSertifikatIndexImport.update({
  id: '/cek-sertifikat/',
  path: '/cek-sertifikat/',
  getParentRoute: () => rootRoute,
} as any)

const PindahTanganNibRoute = PindahTanganNibImport.update({
  id: '/pindah-tangan/$nib',
  path: '/pindah-tangan/$nib',
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

const DashboardPindahTanganRoute = DashboardPindahTanganImport.update({
  id: '/dashboard/pindah-tangan',
  path: '/dashboard/pindah-tangan',
  getParentRoute: () => rootRoute,
} as any)

const DashboardAktivitasRoute = DashboardAktivitasImport.update({
  id: '/dashboard/aktivitas',
  path: '/dashboard/aktivitas',
  getParentRoute: () => rootRoute,
} as any)

const DashboardDetailNibRoute = DashboardDetailNibImport.update({
  id: '/dashboard/detail/$nib',
  path: '/dashboard/detail/$nib',
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
    '/success': {
      id: '/success'
      path: '/success'
      fullPath: '/success'
      preLoaderRoute: typeof SuccessImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/aktivitas': {
      id: '/dashboard/aktivitas'
      path: '/dashboard/aktivitas'
      fullPath: '/dashboard/aktivitas'
      preLoaderRoute: typeof DashboardAktivitasImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/pindah-tangan': {
      id: '/dashboard/pindah-tangan'
      path: '/dashboard/pindah-tangan'
      fullPath: '/dashboard/pindah-tangan'
      preLoaderRoute: typeof DashboardPindahTanganImport
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
    '/pindah-tangan/$nib': {
      id: '/pindah-tangan/$nib'
      path: '/pindah-tangan/$nib'
      fullPath: '/pindah-tangan/$nib'
      preLoaderRoute: typeof PindahTanganNibImport
      parentRoute: typeof rootRoute
    }
    '/cek-sertifikat/': {
      id: '/cek-sertifikat/'
      path: '/cek-sertifikat'
      fullPath: '/cek-sertifikat'
      preLoaderRoute: typeof CekSertifikatIndexImport
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
    '/dashboard/detail/$nib': {
      id: '/dashboard/detail/$nib'
      path: '/dashboard/detail/$nib'
      fullPath: '/dashboard/detail/$nib'
      preLoaderRoute: typeof DashboardDetailNibImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/success': typeof SuccessRoute
  '/dashboard/aktivitas': typeof DashboardAktivitasRoute
  '/dashboard/pindah-tangan': typeof DashboardPindahTanganRoute
  '/home/about': typeof HomeAboutRoute
  '/home/autentikasi': typeof HomeAutentikasiRoute
  '/home/ceksertif': typeof HomeCeksertifRoute
  '/pindah-tangan/$nib': typeof PindahTanganNibRoute
  '/cek-sertifikat': typeof CekSertifikatIndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/home': typeof HomeIndexRoute
  '/dashboard/detail/$nib': typeof DashboardDetailNibRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/success': typeof SuccessRoute
  '/dashboard/aktivitas': typeof DashboardAktivitasRoute
  '/dashboard/pindah-tangan': typeof DashboardPindahTanganRoute
  '/home/about': typeof HomeAboutRoute
  '/home/autentikasi': typeof HomeAutentikasiRoute
  '/home/ceksertif': typeof HomeCeksertifRoute
  '/pindah-tangan/$nib': typeof PindahTanganNibRoute
  '/cek-sertifikat': typeof CekSertifikatIndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/home': typeof HomeIndexRoute
  '/dashboard/detail/$nib': typeof DashboardDetailNibRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/success': typeof SuccessRoute
  '/dashboard/aktivitas': typeof DashboardAktivitasRoute
  '/dashboard/pindah-tangan': typeof DashboardPindahTanganRoute
  '/home/about': typeof HomeAboutRoute
  '/home/autentikasi': typeof HomeAutentikasiRoute
  '/home/ceksertif': typeof HomeCeksertifRoute
  '/pindah-tangan/$nib': typeof PindahTanganNibRoute
  '/cek-sertifikat/': typeof CekSertifikatIndexRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/home/': typeof HomeIndexRoute
  '/dashboard/detail/$nib': typeof DashboardDetailNibRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/success'
    | '/dashboard/aktivitas'
    | '/dashboard/pindah-tangan'
    | '/home/about'
    | '/home/autentikasi'
    | '/home/ceksertif'
    | '/pindah-tangan/$nib'
    | '/cek-sertifikat'
    | '/dashboard'
    | '/home'
    | '/dashboard/detail/$nib'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/success'
    | '/dashboard/aktivitas'
    | '/dashboard/pindah-tangan'
    | '/home/about'
    | '/home/autentikasi'
    | '/home/ceksertif'
    | '/pindah-tangan/$nib'
    | '/cek-sertifikat'
    | '/dashboard'
    | '/home'
    | '/dashboard/detail/$nib'
  id:
    | '__root__'
    | '/'
    | '/success'
    | '/dashboard/aktivitas'
    | '/dashboard/pindah-tangan'
    | '/home/about'
    | '/home/autentikasi'
    | '/home/ceksertif'
    | '/pindah-tangan/$nib'
    | '/cek-sertifikat/'
    | '/dashboard/'
    | '/home/'
    | '/dashboard/detail/$nib'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  SuccessRoute: typeof SuccessRoute
  DashboardAktivitasRoute: typeof DashboardAktivitasRoute
  DashboardPindahTanganRoute: typeof DashboardPindahTanganRoute
  HomeAboutRoute: typeof HomeAboutRoute
  HomeAutentikasiRoute: typeof HomeAutentikasiRoute
  HomeCeksertifRoute: typeof HomeCeksertifRoute
  PindahTanganNibRoute: typeof PindahTanganNibRoute
  CekSertifikatIndexRoute: typeof CekSertifikatIndexRoute
  DashboardIndexRoute: typeof DashboardIndexRoute
  HomeIndexRoute: typeof HomeIndexRoute
  DashboardDetailNibRoute: typeof DashboardDetailNibRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  SuccessRoute: SuccessRoute,
  DashboardAktivitasRoute: DashboardAktivitasRoute,
  DashboardPindahTanganRoute: DashboardPindahTanganRoute,
  HomeAboutRoute: HomeAboutRoute,
  HomeAutentikasiRoute: HomeAutentikasiRoute,
  HomeCeksertifRoute: HomeCeksertifRoute,
  PindahTanganNibRoute: PindahTanganNibRoute,
  CekSertifikatIndexRoute: CekSertifikatIndexRoute,
  DashboardIndexRoute: DashboardIndexRoute,
  HomeIndexRoute: HomeIndexRoute,
  DashboardDetailNibRoute: DashboardDetailNibRoute,
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
        "/success",
        "/dashboard/aktivitas",
        "/dashboard/pindah-tangan",
        "/home/about",
        "/home/autentikasi",
        "/home/ceksertif",
        "/pindah-tangan/$nib",
        "/cek-sertifikat/",
        "/dashboard/",
        "/home/",
        "/dashboard/detail/$nib"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/success": {
      "filePath": "success.tsx"
    },
    "/dashboard/aktivitas": {
      "filePath": "dashboard/aktivitas.tsx"
    },
    "/dashboard/pindah-tangan": {
      "filePath": "dashboard/pindah-tangan.tsx"
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
    "/pindah-tangan/$nib": {
      "filePath": "pindah-tangan/$nib.tsx"
    },
    "/cek-sertifikat/": {
      "filePath": "cek-sertifikat/index.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx"
    },
    "/home/": {
      "filePath": "home/index.tsx"
    },
    "/dashboard/detail/$nib": {
      "filePath": "dashboard/detail/$nib.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
