import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsComponent } from './components/listings/listings.component';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { MyListingsComponent } from './components/my-listings/my-listings.component';
import { CreateListingComponent } from './components/create-listing/create-listing.component';

const routes: Routes = [
  {path: '', redirectTo: '/listings', pathMatch: 'full'},
  {path: 'listings', component: ListingsComponent, pathMatch: 'full'},
  {path: 'listings/:id', component: ListingDetailsComponent},
  {path: 'contact/:id', component: ContactComponent},
  {path: 'edit-listing/:id', component: EditListingComponent},
  {path: 'my-listings', component: MyListingsComponent},
  {path: 'create-listing', component: CreateListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
