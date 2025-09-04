import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: 'section1',
        loadComponent: () => import('./section1 - binding, diretivas, templates, decorators, pipes/listatarefas/listatarefas')
            .then(m => m.Listatarefas)
    },
    {
        path: 'section2',
        loadComponent: () => import('./Section 2 — Input, Output, EventEmitter e Content Projection/home/home')
            .then(m => m.Home)
    }
];
