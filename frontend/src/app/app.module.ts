import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListingsComponent } from './components/listings/listings.component';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { MyListingsComponent } from './components/my-listings/my-listings.component';
import { CreateListingComponent } from './components/create-listing/create-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import {FormsModule} from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ListingFormComponent } from './components/listing-form/listing-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    ListingDetailsComponent,
    ContactComponent,
    MyListingsComponent,
    CreateListingComponent,
    EditListingComponent,
    ListingFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
