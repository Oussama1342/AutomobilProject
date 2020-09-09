import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Shop1Component } from './shop1/shop1.component';
import { Shop2Component } from './shop2/shop2.component';
import { Shop1DetailComponent } from './shop1-detail/shop1-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarCellComponent } from './car-cell/car-cell.component';
import { CarBookingComponent } from './car-booking/car-booking.component';

const routes: Routes = [
{path:"header", component: HeaderComponent},
{path:"home", component:HomeComponent},
{path: "signin" , component: SignInComponent},
{path: "signup", component: SignUpComponent},
{path : "contact", component:ContactComponent},
{path :"aboutus", component:AboutUsComponent},
{path: "shop1", component: Shop1Component},
{path: "shop2", component: Shop2Component},
{path: "detail-shop1", component : Shop1DetailComponent},
{path: "detail-shop2", component : Shop2Component},
{path : "car-cell", component : CarCellComponent},
{path : "car-booking", component : CarBookingComponent}, 
{path : "not-found", component: NotFoundComponent},
//{path: '**', redirectTo: '/not-found'} ,
{path : "", redirectTo:"/home", pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
