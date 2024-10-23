import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAnnoncesComponent } from './home-annonces/home-annonces.component';
import { ListAnnoncesComponent } from './list-annonces/list-annonces.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path:'',
  component: HomeAnnoncesComponent,
  children:[
    {path: '', component: ListAnnoncesComponent},
    {path:':id', component: CardComponent}
  ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnoncesRoutingRoutingModule { }
