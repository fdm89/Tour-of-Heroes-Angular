import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero/hero.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
