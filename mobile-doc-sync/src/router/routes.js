const routes = [{
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [{
                path: '',
                component: () => import('pages/Index.vue')
            },
            {
                path: '/timesheets',
                component: () => import('pages/TimeSheets.vue')
            },
            {
                path: '/expense-reports',
                component: () => import('pages/ExpenseReports.vue')
            }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/Error404.vue')
    }
]

export default routes