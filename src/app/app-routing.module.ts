import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'',redirectTo:'home',pathMatch:"full"},
  { path: 'list', loadChildren: () => import('./features/annonces/annonces.module').then(m => m.AnnoncesModule) },
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
