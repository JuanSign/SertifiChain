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
import { Route as HomeFeature2Import } from './routes/home/feature2'
import { Route as HomeFeatureImport } from './routes/home/feature'
import { Route as HomeAboutImport } from './routes/home/about'

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

const HomeFeature2Route = HomeFeature2Import.update({
  id: '/home/feature2',
  path: '/home/feature2',
  getParentRoute: () => rootRoute,
} as any)

const HomeFeatureRoute = HomeFeatureImport.update({
  id: '/home/feature',
  path: '/home/feature',
  getParentRoute: () => rootRoute,
} as any)

const HomeAboutRoute = HomeAboutImport.update({
  id: '/home/about',
  path: '/home/about',
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
    '/home/about': {
      id: '/home/about'
      path: '/home/about'
      fullPath: '/home/about'
      preLoaderRoute: typeof HomeAboutImport
      parentRoute: typeof rootRoute
    }
    '/home/feature': {
      id: '/home/feature'
      path: '/home/feature'
      fullPath: '/home/feature'
      preLoaderRoute: typeof HomeFeatureImport
      parentRoute: typeof rootRoute
    }
    '/home/feature2': {
      id: '/home/feature2'
      path: '/home/feature2'
      fullPath: '/home/feature2'
      preLoaderRoute: typeof HomeFeature2Import
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
  '/home/about': typeof HomeAboutRoute
  '/home/feature': typeof HomeFeatureRoute
  '/home/feature2': typeof HomeFeature2Route
  '/home/feature3': typeof HomeFeature3Route
  '/dashboard': typeof DashboardIndexRoute
  '/home': typeof HomeIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/home/about': typeof HomeAboutRoute
  '/home/feature': typeof HomeFeatureRoute
  '/home/feature2': typeof HomeFeature2Route
  '/home/feature3': typeof HomeFeature3Route
  '/dashboard': typeof DashboardIndexRoute
  '/home': typeof HomeIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/home/about': typeof HomeAboutRoute
  '/home/feature': typeof HomeFeatureRoute
  '/home/feature2': typeof HomeFeature2Route
  '/home/feature3': typeof HomeFeature3Route
  '/dashboard/': typeof DashboardIndexRoute
  '/home/': typeof HomeIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/home/about'
    | '/home/feature'
    | '/home/feature2'
    | '/home/feature3'
    | '/dashboard'
    | '/home'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/home/about'
    | '/home/feature'
    | '/home/feature2'
    | '/home/feature3'
    | '/dashboard'
    | '/home'
  id:
    | '__root__'
    | '/'
    | '/home/about'
    | '/home/feature'
    | '/home/feature2'
    | '/home/feature3'
    | '/dashboard/'
    | '/home/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  HomeAboutRoute: typeof HomeAboutRoute
  HomeFeatureRoute: typeof HomeFeatureRoute
  HomeFeature2Route: typeof HomeFeature2Route
  HomeFeature3Route: typeof HomeFeature3Route
  DashboardIndexRoute: typeof DashboardIndexRoute
  HomeIndexRoute: typeof HomeIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  HomeAboutRoute: HomeAboutRoute,
  HomeFeatureRoute: HomeFeatureRoute,
  HomeFeature2Route: HomeFeature2Route,
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
        "/home/about",
        "/home/feature",
        "/home/feature2",
        "/home/feature3",
        "/dashboard/",
        "/home/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/home/about": {
      "filePath": "home/about.tsx"
    },
    "/home/feature": {
      "filePath": "home/feature.tsx"
    },
    "/home/feature2": {
      "filePath": "home/feature2.tsx"
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
