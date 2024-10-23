import { Component, OnInit } from '@angular/core';
import { Annonce } from '../../../models/annonce';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css']
})
export class ListAnnoncesComponent implements OnInit{
  listAnnonces:Annonce[];

  constructor(private data:DataService){

  }
  ngOnInit(): void {
    this.listAnnonces=this.data.listAnnonces;
  }

}
