import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  currentRoute!: string | undefined;

  constructor(private router: Router, 
              private activatedRoute: ActivatedRoute ) {}
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.currentRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;
      console.log(this.currentRoute);
    })
  }
  getButtonText(): string {
    return this.currentRoute === 'my-listings' ? 'Go To All listings' : 'Go To My listings';
  }

  
}
