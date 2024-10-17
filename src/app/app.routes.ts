import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { ProductComponent } from './pages/product/product.component';
import { OrderComponent } from './pages/order/order.component';
import { MessageComponent } from './pages/message/message.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { SettingComponent } from './pages/setting/setting.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {
        path:'',
        component:DashboardComponent,
    },
    {
        path:'analytics',
        component:AnalyticsComponent,
    },
    {
        path:'products',
        component:ProductComponent,
    },
    {
        path:'orders',
        component:OrderComponent,
    },
    {
        path:'messages',
        component:MessageComponent,
    },
    {
        path:'customers',
        component:CustomerComponent,
    },
    {
        path:'settings',
        component:SettingComponent,
    },
    {
        path:'**',
        component:NotfoundComponent
    }
];
