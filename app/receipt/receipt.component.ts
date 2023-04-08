import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataTransferService } from '../Services/data-transfer.service';
import { jsPDF } from 'jspdf'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  @ViewChild ('receipt', {static: false}) el!: ElementRef;

  constructor (private svc: DataTransferService, private router: Router){}

  Visitor:any;
  Place:any;

  ngOnInit(): void {
    this.svc.GetVisitorInfo().subscribe((data)=>{
      this.Visitor = data;
    })
    this.svc.GetPlaceDetailsToReceipt().subscribe((data)=>{
      this.Place = data;
    })
  }

  BackToHome(){
    this.router.navigate(['PlaceDetails'])
  }

  MakePDF(){
    Swal.fire(
      'Downloaded!',
      'Your ticket is downloaded successfully.',
      'success'
    )
    let pdf = new jsPDF('l', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf)=> {
        pdf.save("receipt.pdf");
      }
    });
  }
}
