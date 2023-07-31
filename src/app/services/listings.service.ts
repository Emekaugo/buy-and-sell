import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from '../types';
// import { fakeListings } from '../fake-data';

import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

const httpOptionsWithAuthToken = (token: any) => ({
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    AuthToken: token,
  }),
});

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  // Listings: Listing[] = [];

  constructor(private http: HttpClient, private auth: AngularFireAuth) {}

  // getListings(): Listing[] {
  //   return fakeListings;
  // }

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }

  getListingById(id: any): Observable<Listing> {
    return this.http.get<Listing>(`/api/listings/${id}`);
  }

  addViewToListing(id: any): Observable<Listing> {
    return this.http.post<Listing>(
      `/api/listings/${id}/add-view`,
      {},
      httpOptions
    );
  }

  getListingsForUser(): Observable<Listing[]> {
    // return this.http.get<Listing[]>('/api/users/12345/listings');

    return new Observable<Listing[]>((observer) => {
      this.auth.user.subscribe((user) => {
        user &&
          user.getIdToken().then((token) => {
            if (user && token) {
              this.http
                .get<Listing[]>(
                  `/api/users/${user.uid}/listings`,
                  httpOptionsWithAuthToken(token)
                )
                .subscribe((listings) => {
                  observer.next(listings);
                });
            } else {
              observer.next([]);
            }
          });
      });
    });
  }

  deleteListing(id: string): Observable<any> {
    // return this.http.delete(`/api/listings/${id}`);

    return new Observable<any>((observer) => {
      this.auth.user.subscribe((user) => {
        user &&
          user.getIdToken().then((token) => {
            this.http
              .delete(`/api/listings/${id}`, httpOptionsWithAuthToken(token))
              .subscribe(() => observer.next());
          });
      });
    });
  }

  createListing(
    name: string,
    description: string,
    price: number
  ): Observable<Listing> {
    // return this.http.post<Listing>(
    //   '/api/listings',
    //   { name, description, price },
    //   httpOptions
    // );

    return new Observable<Listing>((observer) => {
      this.auth.user.subscribe((user) => {
        user &&
          user.getIdToken().then((token) => {
            this.http
              .post<Listing>(
                '/api/listings',
                { name, description, price },
                httpOptionsWithAuthToken(token)
              )
              .subscribe(() => observer.next());
          });
      });
    });
  }

  editListing(
    id: string,
    name: string,
    description: string,
    price: number
  ): Observable<Listing> {
    // return this.http.post<Listing>(
    //   `/api/listings/${id}`,
    //   { name, description, price },
    //   httpOptions
    // );

    return new Observable<Listing>((observer) => {
      this.auth.user.subscribe((user) => {
        user &&
          user.getIdToken().then((token) => {
            return this.http
              .post<Listing>(
                `/api/listings/${id}`,
                { name, description, price },
                httpOptionsWithAuthToken(token)
              )
              .subscribe(() => observer.next());
          });
      });
    });
  }
}
