import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from 'src/app/interfaces/listing';


@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.css']
})
export class ListingFormComponent implements OnInit{
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice!: number;
  @Input() currentUserId!: string;
  @Input() currentViews!: number;
  @Input() buttonText: string = '';
  @Output() onSubmit = new EventEmitter<Listing>();

  name: string = '';
  description: string = '';
  price!: number;
  userId!: string;
  views!: number;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onSubmitClicked() {
    // alert('creating a new listing...');
    // this.router.navigateByUrl('/my-listings');
    this.onSubmit.emit({
      id: '', 
      name: this.name,
      description: this.description,
      price: this.price,
      userId: this.userId,
      views: this.views
    });
  }

}
