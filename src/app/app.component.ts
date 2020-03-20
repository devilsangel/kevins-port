import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kevins-port';
  ngOnInit(){
    AOS.init({
      duration: 1000,
      disable: 'mobile'
    });
  }
}
