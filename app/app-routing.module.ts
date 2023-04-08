import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { PlaceComponent } from './place/place.component';
import { ReceiptComponent } from './receipt/receipt.component';

const routes: Routes = [
  {path:'', component: HomeComponent
, children:[
  {path:'Place', component: PlaceComponent},
  {path:'PlaceDetails', component: PlaceDetailsComponent},
  {path:'BookingForm', component: BookingFormComponent},
  {path:'Payment', component: PaymentComponent},
  {path:'Receipt', component: ReceiptComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
