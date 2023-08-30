import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { fakeListings } from 'src/app/fakeData';
import { Listing } from 'src/app/interfaces/listing';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  email: string = '';
  message: string = '';
  listing!: Listing | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id);
    this.message = `Hi, I'm interested in ${this.listing?.name}!`;
  }

  sendMessage() {
    alert('Your message has been send');
    this.router.navigateByUrl('/listings');
    this.showFormControlls();
  }

  showFormControlls() {
    console.log(this.email)
    console.log(this.message)
  }

}
