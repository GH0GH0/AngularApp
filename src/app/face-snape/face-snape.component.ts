import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snape',
  templateUrl: './face-snape.component.html',
  styleUrls: ['./face-snape.component.scss']
})
export class FaceSnapeComponent implements OnInit  {
  title!: string;
  description! : string;
  createdDate! : Date;
  snaps!: number;
  imageUrl! : string;

  ngOnInit(){
    this.title = "Premère photo";
    this.description = "Ma 1ere image";
    this.createdDate = new Date();
    this.snaps = 40;
    this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
  }
}
