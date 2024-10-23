import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/models/annonce';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
   title:string | undefined;
   listAnnonces:Array<Annonce> ;

   constructor(private data:DataService){

   }
  ngOnInit(): void {
    this.title="Recently added announcements";
    this.listAnnonces= this.data.listAnnonces.slice(-6);
  }

}
