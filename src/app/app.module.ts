import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CarBookingComponent } from './car-booking/car-booking.component';
import { CarCellComponent } from './car-cell/car-cell.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Shop1Component } from './shop1/shop1.component';
import { Shop2Component } from './shop2/shop2.component';
import { Shop1DetailComponent } from './shop1-detail/shop1-detail.component';
import { Shop2DetailComponent } from './shop2-detail/shop2-detail.component';
import { HomeComponent } from './home/home.component';
import {AuthentificationService} from './authentification.service'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    AboutUsComponent,
    SignUpComponent,
    CarBookingComponent,
    CarCellComponent,
    ContactComponent,
    NotFoundComponent,
    Shop1Component,
    Shop2Component,
    Shop1DetailComponent,
    Shop2DetailComponent,
    HomeComponent,
    AuthentificationService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
