import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAnnoncesComponent } from './home-annonces/home-annonces.component';
import { ListAnnoncesComponent } from './list-annonces/list-annonces.component';
import { CardComponent } from './card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AnnoncesRoutingRoutingModule } from './annonces-routing-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeAnnoncesComponent,
    ListAnnoncesComponent,
    CardComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AnnoncesRoutingRoutingModule,
    SharedModule
  ]
})
export class AnnoncesModule { }
