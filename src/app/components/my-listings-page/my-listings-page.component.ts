import { Component } from '@angular/core';
import { fakeListings } from 'src/app/fake-data';
import { ListingsService } from 'src/app/services/listings.service';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.scss'],
})
export class MyListingsPageComponent {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    // this.listings = fakeListings;
    this.listingsService
      .getListingsForUser()
      .subscribe((listings) => (this.listings = listings));
  }

  onDeleteClicked(listingId: string): void {
    // alert(`deleting your listing id ${listingId}`);
    this.listingsService.deleteListing(listingId).subscribe(() => {
      this.listings = this.listings.filter(
        (listing) => listing.id !== listingId
      );
    });
  }
}
