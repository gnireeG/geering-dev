import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { FrontendLayoutComponent } from './layout/frontend-layout/frontend-layout.component';

import { IndexComponent } from './frontend/index/index.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: FrontendLayoutComponent,
        children: [
            {
                path: '',
                component: IndexComponent,
            }
        ]
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
            }
        ]
    },
];
