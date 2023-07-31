import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings } from 'src/app/fake-data';
import { ListingsService } from 'src/app/services/listings.service';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  email: string = '';
  message: string = '';
  listing: Listing | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService
  )
  {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.listing = fakeListings.find((listing) => listing.id === id);
    // this.message = `I am interested in your ${this.listing?.name.toLocaleLowerCase()}!`;

    this.listingsService.getListingById(id)
      .subscribe(listing => {
        this.listing = listing;
        this.message = `Hi, I'm interested in your ${this.listing.name.toLowerCase()}!`;
      });
  }

  sendMessage(): void {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }
}
