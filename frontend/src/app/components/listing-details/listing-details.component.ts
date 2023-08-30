import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from 'src/app/fakeData';
import { Listing } from 'src/app/interfaces/listing';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit{
  listing: Listing | undefined;
  panelOpenState = false;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id);
  }


}
