import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PackageHeaderComponent } from './components/package-header/package-header.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';
import { PackageDetailsComponent } from './components/package-details/package-details.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PackageHeaderComponent,
    ImageGalleryComponent,
    ItineraryComponent,
    PackageDetailsComponent,
    BookingFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }