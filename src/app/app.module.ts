import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';

import { AppComponent } from './app.component';
import { ZComponentsComponent } from './components/z-components/z-components.component';
import { ZPipesPipe } from './pipes/z-pipes.pipe';
import { ZDirectivesDirective } from './directives/z-directives.directive';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ListingsPageComponent } from './components/listings-page/listings-page.component';
import { ListingDetailPageComponent } from './components/listing-detail-page/listing-detail-page.component';
import { MyListingsPageComponent } from './components/my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './components/new-listing-page/new-listing-page.component';
import { EditListingPageComponent } from './components/edit-listing-page/edit-listing-page.component';
import { ListingDataFormComponent } from './components/listing-data-form/listing-data-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ZComponentsComponent,
    ZPipesPipe,
    ZDirectivesDirective,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ListingsPageComponent,
    ListingDetailPageComponent,
    MyListingsPageComponent,
    NewListingPageComponent,
    EditListingPageComponent,
    ListingDataFormComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore()),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
