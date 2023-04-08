import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../Services/data-transfer.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  PlaceDetails:any=[];
  constructor (private svc: DataTransferService, private router: Router, private mtdlg: MatDialog) {}

  ngOnInit(): void {
    this.svc.GetPlaceCardToPlaceDetails().subscribe((data)=>{
      this.PlaceDetails = data;
    })
  }

  OpenBookingForm(n:any){
    this.svc.SetPlaceDetailsToReceipt(n);
    this.router.navigate(['BookingForm']);
  }

  BackToPlaces(){
    this.router.navigate(['Place'])
  }

}
