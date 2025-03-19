import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home.component').then((m => m.HomeComponent))
        }
    },
    {
        path: 'cards',
        loadComponent: () => {
            return import('./cards/cards.component').then((m => m.CardsComponent))
        }
    },
    {
        path: 'contact',
        loadComponent: () => {
            return import('./contact/contact.component').then((m => m.ContactComponent))
        }
    }
];
