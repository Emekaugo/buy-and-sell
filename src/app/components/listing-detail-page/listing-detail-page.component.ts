import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { fakeListings } from 'src/app/fake-data';
import { ListingsService } from 'src/app/services/listings.service';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.scss'],
})
export class ListingDetailPageComponent {
  isLoading: boolean = true;
  listing!: Listing | undefined;

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.listing = fakeListings.find((listing) => listing.id === id);

    this.listingsService.getListingById(id).subscribe((listing) => {
      this.listing = listing;
      this.isLoading = false;
    });
    this.listingsService
      .addViewToListing(id)
      .subscribe(() => console.log('Views updated!'));
  }
}
