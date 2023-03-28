import { Component, OnInit } from '@angular/core';
import { FaceSnape } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  faceSnaps! : FaceSnape[];
 
  ngOnInit()  {
    this.faceSnaps = [
      {
        title : 'Monkey D Luffy',
        description : "Le capitaine de l'équipage au chapeau de paille",
        imageUrl : 'https://boutique-manga.fr/wp-content/uploads/2021/08/One-Piece-Monkey-D.-Luffy.jpg',
        createdDate : new Date(),
        snaps : 0,
        location : 'East blue'
      },
      { 
        title : 'Roronoa Zoro',
        description : "Le bras droit de l'équipage au chapeau de paille",
        imageUrl : 'https://www.laboutique-onepiece.com/_i/136023/p%7B1000%7D-49738/1066/40/10-choses-savoir-roronoa-zoro-boutique-one-piece-11.jpeg',
        createdDate : new Date(),
        snaps : 0,
        location : 'Wano'
      },
      {
        title : 'Vinsmoke Sanji',
        description : "Le bras gauche de l'équipage au chapeau de paille",
        imageUrl : 'https://lumcelblog.files.wordpress.com/2017/02/sanji_kun__by_mirimmd-d4qfcgl.jpg?w=816',
        createdDate : new Date(),
        snaps : 0
      },
      {
        title : 'Monkey D Luffy',
        description : "Le capitaine de l'équipage au chapeau de paille",
        imageUrl : 'https://boutique-manga.fr/wp-content/uploads/2021/08/One-Piece-Monkey-D.-Luffy.jpg',
        createdDate : new Date(),
        snaps : 0,
        location : 'East blue'
      },
      { 
        title : 'Roronoa Zoro',
        description : "Le bras droit de l'équipage au chapeau de paille",
        imageUrl : 'https://www.laboutique-onepiece.com/_i/136023/p%7B1000%7D-49738/1066/40/10-choses-savoir-roronoa-zoro-boutique-one-piece-11.jpeg',
        createdDate : new Date(),
        snaps : 0,
        location : 'Wano'
      },
      {
        title : 'Vinsmoke Sanji',
        description : "Le bras gauche de l'équipage au chapeau de paille",
        imageUrl : 'https://lumcelblog.files.wordpress.com/2017/02/sanji_kun__by_mirimmd-d4qfcgl.jpg?w=816',
        createdDate : new Date(),
        snaps : 0
      }

    ];
    
      
    
  };
}
