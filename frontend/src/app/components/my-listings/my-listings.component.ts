import { Component, OnInit } from '@angular/core';
import { fakeListings } from 'src/app/fakeData';
import { Listing } from 'src/app/interfaces/listing';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit{
  listings!: Listing[];
  constructor() {}

  ngOnInit(): void {
    this.listings = fakeListings;
  }

  onDelete(listingId: string) {
    alert(`listing with id: ${listingId} was deleted...`);
  }

}
