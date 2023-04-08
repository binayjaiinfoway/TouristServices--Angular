import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataTransferService } from '../Services/data-transfer.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {

  VisitorData:any=[];
  constructor (private fb: FormBuilder, private mtdlg: MatDialog, private svc: DataTransferService, private router: Router) {}

  TicketForm = this.fb.group({
    Name: ['', Validators.required],
    Email: ['', Validators.required],
    Adult: ['', Validators.required],
    Child: ['', Validators.required],
    Date: ['', Validators.required]
  })


  PostVisitorData(){
    this.svc.SetVisitorData(this.TicketForm.value).subscribe({});
    this.svc.SetVisitorInfo(this.TicketForm.value);
    this.router.navigate(['Payment']);
  }

  BackToCard(){
    this.router.navigate(['PlaceDetails'])
  }
}
// http://localhost:3000/visitorData