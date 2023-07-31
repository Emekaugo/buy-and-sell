import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.scss'],
})
export class ListingDataFormComponent {
  @Input() buttonText: any;
  @Input() currentName: any = '';
  @Input() currentDescription: any = '';
  @Input() currentPrice: any = '';

  name: string = '';
  description: string = '';
  price: string = '';
  id: string = '';
  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(
    private router: Router // private listingsService: ListingsService,
  ) {}

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  // onSubmit({ name, description, price }): void {
  // this.listingsService.createListing(name, description, price)
  //   .subscribe(() => {
  //     this.router.navigateByUrl('/my-listings');
  //   });
  // }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: this.id,
      name: this.name,
      description: this.description,
      price: Number(this.price),
      views: 0,
    });
    // alert('creating a new listing');
    // this.router.navigateByUrl('/my-listings');
  }
}
