import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'phaAmbulancia';

  ngOnInit(): void{ }
    // Initialize Firebase
  /*var config = {
    apiKey: "AIzaSyBl_YQXa6AayDrx1zGZz2aL1HAM6UJ5sTI",
    authDomain: "projeto-tg-pha.firebaseapp.com",
    databaseURL:"https://projeto-tg-pha.firebaseio.com",
    projectId: "projeto-tg-pha",
    storageBucket: "projeto-tg-pha.appspot.com",
    messagingSenderId: "35170508886"
  };
  
    firebase.initializeApp(config);
  } */

}
