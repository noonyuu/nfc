/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RegisterImport } from './routes/register'
import { Route as LoginImport } from './routes/login'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as NfcIndexImport } from './routes/nfc/index'
import { Route as ProfileEditImport } from './routes/profile/edit'
import { Route as WorksCreateIndexImport } from './routes/works/create/index'
import { Route as NfcWorkIdIndexImport } from './routes/nfc/$workId/index'
import { Route as WorksCreateEventIdIndexImport } from './routes/works/create/$eventId/index'

// Create/Update Routes

const RegisterRoute = RegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const NfcIndexRoute = NfcIndexImport.update({
  id: '/nfc/',
  path: '/nfc/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileEditRoute = ProfileEditImport.update({
  id: '/profile/edit',
  path: '/profile/edit',
  getParentRoute: () => rootRoute,
} as any)

const WorksCreateIndexRoute = WorksCreateIndexImport.update({
  id: '/works/create/',
  path: '/works/create/',
  getParentRoute: () => rootRoute,
} as any)

const NfcWorkIdIndexRoute = NfcWorkIdIndexImport.update({
  id: '/nfc/$workId/',
  path: '/nfc/$workId/',
  getParentRoute: () => rootRoute,
} as any)

const WorksCreateEventIdIndexRoute = WorksCreateEventIdIndexImport.update({
  id: '/works/create/$eventId/',
  path: '/works/create/$eventId/',
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
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/profile/edit': {
      id: '/profile/edit'
      path: '/profile/edit'
      fullPath: '/profile/edit'
      preLoaderRoute: typeof ProfileEditImport
      parentRoute: typeof rootRoute
    }
    '/nfc/': {
      id: '/nfc/'
      path: '/nfc'
      fullPath: '/nfc'
      preLoaderRoute: typeof NfcIndexImport
      parentRoute: typeof rootRoute
    }
    '/nfc/$workId/': {
      id: '/nfc/$workId/'
      path: '/nfc/$workId'
      fullPath: '/nfc/$workId'
      preLoaderRoute: typeof NfcWorkIdIndexImport
      parentRoute: typeof rootRoute
    }
    '/works/create/': {
      id: '/works/create/'
      path: '/works/create'
      fullPath: '/works/create'
      preLoaderRoute: typeof WorksCreateIndexImport
      parentRoute: typeof rootRoute
    }
    '/works/create/$eventId/': {
      id: '/works/create/$eventId/'
      path: '/works/create/$eventId'
      fullPath: '/works/create/$eventId'
      preLoaderRoute: typeof WorksCreateEventIdIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/profile/edit': typeof ProfileEditRoute
  '/nfc': typeof NfcIndexRoute
  '/nfc/$workId': typeof NfcWorkIdIndexRoute
  '/works/create': typeof WorksCreateIndexRoute
  '/works/create/$eventId': typeof WorksCreateEventIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/profile/edit': typeof ProfileEditRoute
  '/nfc': typeof NfcIndexRoute
  '/nfc/$workId': typeof NfcWorkIdIndexRoute
  '/works/create': typeof WorksCreateIndexRoute
  '/works/create/$eventId': typeof WorksCreateEventIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/profile/edit': typeof ProfileEditRoute
  '/nfc/': typeof NfcIndexRoute
  '/nfc/$workId/': typeof NfcWorkIdIndexRoute
  '/works/create/': typeof WorksCreateIndexRoute
  '/works/create/$eventId/': typeof WorksCreateEventIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/login'
    | '/register'
    | '/profile/edit'
    | '/nfc'
    | '/nfc/$workId'
    | '/works/create'
    | '/works/create/$eventId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/login'
    | '/register'
    | '/profile/edit'
    | '/nfc'
    | '/nfc/$workId'
    | '/works/create'
    | '/works/create/$eventId'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/login'
    | '/register'
    | '/profile/edit'
    | '/nfc/'
    | '/nfc/$workId/'
    | '/works/create/'
    | '/works/create/$eventId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  LoginRoute: typeof LoginRoute
  RegisterRoute: typeof RegisterRoute
  ProfileEditRoute: typeof ProfileEditRoute
  NfcIndexRoute: typeof NfcIndexRoute
  NfcWorkIdIndexRoute: typeof NfcWorkIdIndexRoute
  WorksCreateIndexRoute: typeof WorksCreateIndexRoute
  WorksCreateEventIdIndexRoute: typeof WorksCreateEventIdIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  LoginRoute: LoginRoute,
  RegisterRoute: RegisterRoute,
  ProfileEditRoute: ProfileEditRoute,
  NfcIndexRoute: NfcIndexRoute,
  NfcWorkIdIndexRoute: NfcWorkIdIndexRoute,
  WorksCreateIndexRoute: WorksCreateIndexRoute,
  WorksCreateEventIdIndexRoute: WorksCreateEventIdIndexRoute,
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
        "/about",
        "/login",
        "/register",
        "/profile/edit",
        "/nfc/",
        "/nfc/$workId/",
        "/works/create/",
        "/works/create/$eventId/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/register": {
      "filePath": "register.tsx"
    },
    "/profile/edit": {
      "filePath": "profile/edit.tsx"
    },
    "/nfc/": {
      "filePath": "nfc/index.tsx"
    },
    "/nfc/$workId/": {
      "filePath": "nfc/$workId/index.tsx"
    },
    "/works/create/": {
      "filePath": "works/create/index.tsx"
    },
    "/works/create/$eventId/": {
      "filePath": "works/create/$eventId/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
