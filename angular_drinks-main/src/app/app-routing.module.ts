import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkComponent } from './pages/drink/drink.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { OrdiniComponent } from './pages/ordini/ordini.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'drink',
    component: DrinkComponent,
    children: [{ path: ':id', component: DrinkComponent }],
  },
  { path: 'login', component: LoginComponent },
  { path: 'ordini', component: OrdiniComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
