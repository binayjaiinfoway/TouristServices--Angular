import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../Services/data-transfer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  constructor(private svc: DataTransferService, private router: Router) {}

  PlaceData: any;
  VisitorsData: any;
  PriceForAdult: any;
  PriceForChild: any;
  TotalAmt: any;
  userData:any;

  ngOnInit(): void {
    this.svc.GetPlaceDetailsToReceipt().subscribe((data) => {
      this.PlaceData = data;
    });

    this.svc.GetVisitorInfo().subscribe((data) => {
      this.VisitorsData = data;
      this.PriceForAdult = this.VisitorsData.Adult * 50;
      this.PriceForChild = this.VisitorsData.Child * 50;
      this.TotalAmt = this.PriceForAdult + this.PriceForChild;
    });
    this.svc.GetVisitorData().subscribe((data)=>{
      this.userData = data;
    })
  }

  PrintReceipt() {
    Swal.fire({
      title: 'Your ticket has been booked successfully.',
      icon: 'info',
      showCancelButton: false,
      confirmButtonText: 'Download Ticket!',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['Receipt']);
      }
    });
  }

  BackToCard() {
    Swal.fire('Cancelled', 'Your order has been canceled :)', 'error');
    this.router.navigate(['PlaceDetails']);
  }
}
