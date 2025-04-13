const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/HomePage.vue'),
      },
    ],
  },
  {
    path: '/projects',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/projects',
        component: () => import('pages/ProjectsPage.vue'),
      },
    ],
  },
  {
    path: '/notes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/notes',
        component: () => import('pages/NotesPage.vue'),
      },
    ],
  },
  {
    path: '/blog',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/blog',
        component: () => import('pages/BlogPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
