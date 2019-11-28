import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {};
export const POKE_ROUNTING = RouterModule.forRoot(routes);
