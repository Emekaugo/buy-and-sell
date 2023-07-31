import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings, fakeMyListings } from 'src/app/fake-data';
import { ListingsService } from 'src/app/services/listings.service';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.scss'],
})
export class EditListingPageComponent {
  listing: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.listing = fakeListings.find((listing) => listing.id === id);
    this.listingsService
      .getListingById(id)
      .subscribe((listing) => (this.listing = listing));
  }

  onSubmit({ name, description, price }: any): void {
    this.listingsService
      .editListing(this.listing?.id, name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings');
      });
  }

  // onSubmit(): void {
  // alert('saving changes to the listing...');
  // this.router.navigateByUrl('/my-listings');
  // }
}
