import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {



carsForSale = [
{
  model: "small Delivery Van" ,
  image:"https://images.pexels.com/photos/6156596/pexels-photo-6156596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  color: "light pink",
  price: 23.98,
},{
  model: "big Pick-Up Truck" ,
  image:"https://images.pexels.com/photos/4993067/pexels-photo-4993067.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  color: "light green",
  price: 20.55,
},{
  model: "Motorcycle" ,
  image:"https://images.pexels.com/photos/4993066/pexels-photo-4993066.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  color: "indefinable",
  price: 14.99,
},{
  model: "long Car" ,
  image:"https://images.pexels.com/photos/4997893/pexels-photo-4997893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  color: "yellow",
  price: 25.19,
}

];

  constructor() { }

  ngOnInit(): void {
  }

}
