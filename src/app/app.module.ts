import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeGalleryComponent } from './pages/home/home-gallery/home-gallery.component';
import { HomeAboutComponent } from './pages/home/home-about/home-about.component';
import { HomeEventsComponent } from './pages/home/home-events/home-events.component';
import { HomeDrinksComponent } from './pages/home/home-drinks/home-drinks.component';
import { HomeSectionComponent } from './pages/home/shared/home-section/home-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeGalleryComponent,
    HomeAboutComponent,
    HomeEventsComponent,
    HomeDrinksComponent,
    HomeSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
