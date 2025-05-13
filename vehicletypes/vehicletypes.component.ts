import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-vehicletypes',
  templateUrl: './vehicletypes.component.html',
  styleUrls: ['./vehicletypes.component.css']
})
export class VehicletypesComponent implements OnInit {
  cars: any[] = [];
  selectedcars: any;
  selectedCity: string = '';
  locations:string[]=["Banglore","Chennai","Hyderbad","Mumbai"];
   pickupdate:string=''; //we need to type here yyyy-mm-dd format
  pickuptime:string='';
  returndate:string='';
  returntime:string='';

  constructor(private http: HttpClient, private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {
  this.cars = [
    {  name: 'SUV', Model: 2023, Luggage: '2 bags', milage:30, photo: '/assets/Suv1.jpeg' },
    {  name: 'Seaden', Model: 2022, Luggage: '6 bags',milage:20, photo: '/assets/sedan.jpg' },
    {  name: 'Hyundai', Model: 2021, Luggage: '3 bags',milage:25, photo: '/assets/Hyundai.webp'},
    {  name: 'Honda', Model: 2020, Luggage: '4 bags',milage:35, photo: '/assets/honda.jfif' },
    {  name: 'Tempo', Model: 2016, Luggage: '6 bags',milage:40, photo: '/assets/Tempo1.jpg' }
  ];
  this.selectedcars = this.cars[0];//default car image 1 will be displayed

}

  public selectcar(car: any): void {
    this.selectedcars = car;
  }
formvalid()
{
  
  return (this.selectedCity && 
  this.pickupdate &&
  this.pickuptime &&
  this.returndate &&
  this.returntime
);
}
  public booknow(): void {
   this.sharedService.setCityAndCar(this.selectedCity, this.selectedcars.name);
    console.log('City and Car set in shared service:', this.selectedCity, this.selectedcars.name);
    this.router.navigate(['/test']);
  }

  public onCityChange(event: any): void {
    this.selectedCity = event.target.value;
    console.log('Selected city:', this.selectedCity);
  }
}
