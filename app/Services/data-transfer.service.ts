import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor(private http: HttpClient) { }

  GetTourisPlaceData(): Observable <any>{
    return this.http.get('http://localhost:3000/state');
  }

  private StateToPlace = new BehaviorSubject <any> (null);
  SetStateToPlace(n:any){
    this.StateToPlace.next(n);
  }
  GetStateToPlace(){
    return this.StateToPlace.asObservable();
  }

  private PlaceCardToPlaceDetails = new BehaviorSubject <any> (null);
  SetPlaceCardToPlaceDetails(n:any){
    this.PlaceCardToPlaceDetails.next(n);
  }
  GetPlaceCardToPlaceDetails(){
    return this.PlaceCardToPlaceDetails.asObservable();
  }

  private PlaceDetailsToReceipt = new BehaviorSubject <any> (null);
  SetPlaceDetailsToReceipt(n:any){
    this.PlaceDetailsToReceipt.next(n);
  }
  GetPlaceDetailsToReceipt(){
    return this.PlaceDetailsToReceipt.asObservable();
  }

  SetVisitorData(n:any): Observable <any>{
    return this.http.post('http://localhost:3000/visitorData', n)
  }
  GetVisitorData(): Observable <any>{
    return this.http.get('http://localhost:3000/visitorData')
  }

  private VisitorInfo = new BehaviorSubject <any> (null);
  SetVisitorInfo(n:any){
    this.VisitorInfo.next(n);
  }
  GetVisitorInfo(){
    return this.VisitorInfo.asObservable();
  }

}
