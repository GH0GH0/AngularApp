import { Component, OnInit, Input } from '@angular/core';
import { FaceSnape } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snape',
  templateUrl: './face-snape.component.html',
  styleUrls: ['./face-snape.component.scss']
})
export class FaceSnapeComponent implements OnInit  {
  @Input() faceSnape! : FaceSnape;


  buttonText! : string;

  ngOnInit(){
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
