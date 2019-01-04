import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FiguresComponent} from './figures/figures.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FigureDetailComponent} from './figure-detail/figure-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'nazca-figures', component: FiguresComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: FigureDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
