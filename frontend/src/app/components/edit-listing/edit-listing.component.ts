import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings } from 'src/app/fakeData';
import { Listing } from 'src/app/interfaces/listing';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit{
  listing!: Listing | undefined;
  constructor(private router: Router, 
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log('Extracted ID:', id);
    this.listing = fakeListings.find(listing => listing.id === id);
    // console.log('Fetched Listing:', this.listing);
  }

  onSubmit() {
    alert('saving changes...')
    this.router.navigateByUrl('/listings');
  }
}
