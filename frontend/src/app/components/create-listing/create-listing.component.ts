import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.css']
})
export class CreateListingComponent implements OnInit{
  name: string = '';
  description: string = '';
  price!: number;  

  constructor(private router: Router) {}
  ngOnInit(): void {
  }

  onSubmit() {
    alert('creating a new listing...');
    this.router.navigateByUrl('/my-listings');
  }


}
