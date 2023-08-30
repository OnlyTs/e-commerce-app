import { Component, OnInit } from '@angular/core';
import { fakeListings } from 'src/app/fakeData';
import { Listing } from 'src/app/interfaces/listing';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit{
  listings: Listing[] = [];

  constructor() {}   

  ngOnInit(): void {  
    this.listings = fakeListings;
  }

}
