import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from 'src/app/models/annonce';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  annonce: Annonce | undefined;
  annonceId:any;
  constructor(private activatedRoute: ActivatedRoute, private data:DataService) {
  }
  ngOnInit() {
  this.activatedRoute.params.subscribe(
      (params)=>{
        this.annonceId=this.activatedRoute.snapshot.params['id'];
      })
    this.annonce=this.data.listAnnonces.find((a)=>a.id==this.annonceId);
  }
}
