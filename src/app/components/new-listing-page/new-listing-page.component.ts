import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from 'src/app/services/listings.service';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.scss'],
})
export class NewListingPageComponent {
  // name: string = '';
  // description: string = '';
  // price: string = '';

  constructor(
    private router: Router ,
     private listingsService: ListingsService,
  ) {}

  ngOnInit(): void {}

  onSubmit({ name, description, price }:any): void {
  this.listingsService.createListing(name, description, price)
    .subscribe(() => {
      this.router.navigateByUrl('/my-listings');
    });
  }

  // onSubmit(): void {
  //   alert('creating a new listing');
  //   this.router.navigateByUrl('/my-listings');
  // }
}
