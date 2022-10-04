import { Component, OnInit, Input } from '@angular/core';
import { FaceSnape } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snape',
  templateUrl: './face-snape.component.html',
  styleUrls: ['./face-snape.component.scss']
})
export class FaceSnapeComponent implements OnInit  {
  @Input() faceSnape! : FaceSnape;

  title!: string;
  description! : string;
  createdDate! : Date;
  snaps!: number;
  imageUrl! : string;
  buttonText! : string;

  ngOnInit(){
    this.title = "Premère photo";
    this.description = "Ma 1ere image";
    this.createdDate = new Date();
    this.snaps = 40;
    this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
    this.buttonText = "Like";
  }

  onAddSnap(){
    
    if (this.buttonText ==="Like") {
      this.faceSnape.snaps ++;   
      this.buttonText ="Unlike";
    }else{
      this.faceSnape.snaps--;
      this.buttonText = "Like";
    }
    
  }
}
