import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const iAmOptions = {
      strings: ['I am a web developer.', 'I am a UI developer.'],
      typeSpeed: 60,
      smartBackspace: true,
      showCursor: false
    };

    new Typed('.iam', iAmOptions);

    const iCanOptions = {
      strings: ['I can solve all your problems.', 'I can solve most of your problems.', 'I can solve problems.', 'I can create and deploy fast and effective solutions.'],
      typeSpeed: 60,
      smartBackspace: true,
      showCursor: false,
      startDelay: 5000
    }
    new Typed('.ican', iCanOptions);
  }

}
