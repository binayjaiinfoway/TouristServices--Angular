import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../Services/data-transfer.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  constructor (private svc: DataTransferService, private router: Router) {}

  PlaceData:any=[];
  ngOnInit(): void {
    this.svc.GetStateToPlace().subscribe((data)=>{
      this.PlaceData = data;
    })
  }

  OpenPlaceDetails(n:any){
    this.svc.SetPlaceCardToPlaceDetails(n);
    this.router.navigate(['PlaceDetails']);
  }
}
