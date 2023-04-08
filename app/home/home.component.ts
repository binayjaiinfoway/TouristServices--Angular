import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../Services/data-transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private svc: DataTransferService, private router: Router) {}

  Crousel:boolean = true;
  TouristPlace:any=[];

  ngOnInit(): void {
    this.svc.GetTourisPlaceData().subscribe((data)=>{
      this.TouristPlace=data;
    })
  }

  OpenPlaceByState(n:any){
    this.svc.SetStateToPlace(n);
    this.router.navigate(['/Place']);
  }

  Openhome(){
    this.router.navigate([''])
  }

}
