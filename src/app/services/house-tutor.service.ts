import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from '../core/models/API';

@Injectable({
  providedIn: 'root'
})
export class HouseTutorService {
  getBoarderList() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }


// borders
//  resource/hall-allotment
getBoarders(): Observable<any> {
  return this.http.get<any>(url + '/resource/hall-allotment');
}

// /requisition
getRequisition(): Observable<any> {
  return this.http.get<any>(url + '/resource/requisition');
}


// resource/application-house-tutor-form
getHouseTutorApplications(): Observable<any> {
  return this.http.get<any>(url + '/resource/application-house-tutor-form');
}

// resource/requisition/add
addRequisition(data: any): Observable<any> {
  return this.http.post<any>(url + '/resource/requisition/add', data);
}

// resource/requisition/delete/2
deleteRequisition(id: number): Observable<any> {
  return this.http.delete(`${url}/resource/requisition/delete/${id}`);
}


// resource/application-house-tutor-form-delete/1
deleteHouseTutorApplication(id: number): Observable<any> {
  return this.http.delete(`${url}/resource/application-house-tutor-form-delete/${id}`);
}

// resource/application-house-tutor-form-add
addHouseTutorApplication(data: any): Observable<any> {
  return this.http.post<any>(url + '/resource/application-house-tutor-form-add', data);
}

}
