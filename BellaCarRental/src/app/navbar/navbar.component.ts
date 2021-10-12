import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
donations = 0;
  constructor() { }

  donate(){
this.donations +=10;
  }

  ngOnInit(): void {
  }

}
