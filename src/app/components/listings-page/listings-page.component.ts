import { Component } from '@angular/core';
import { Listing } from 'src/app/types';
// import { fakeListings } from 'src/app/fake-data';
import { ListingsService } from 'src/app/services/listings.service';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.scss'],
})
export class ListingsPageComponent {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    // this.listings = fakeListings;

    this.listingsService
      .getListings()
      .subscribe((listings) => (this.listings = listings));
  }
}
