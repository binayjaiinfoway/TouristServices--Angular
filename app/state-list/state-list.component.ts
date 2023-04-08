import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../Services/data-transfer.service';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})
export class StateListComponent implements OnInit {

  WholeData:any=[];

  constructor (private svc: DataTransferService) {}
  ngOnInit(): void {

  }
}
