import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url } from "../core/models/API";

@Injectable({
  providedIn: 'root'
})
export class RecruitmentService {

  constructor(private http: HttpClient) { }


  // http://localhost:8080/api/v1/resource/item-add-requests
  getItemAddRequests(): Observable<any> {
    return this.http.get(`${url}/resource/item-add-requests`);
  }

  // http://localhost:8080/api/v1/resource/item-add-request-add
  addItemAddRequest(data: any): Observable<any> {
    return this.http.post(`${url}/resource/item-add-request-add`, data);
  }
  // http://localhost:8080/api/v1/resource/item-add-request-update/1
  updateItemAddRequest(data: any, id: any): Observable<any> {
    return this.http.put(`${url}/resource/item-add-request-update/${id}`, data);
  }
  // http://localhost:8080/api/v1/resource/item-add-request-delete/1
  deleteItemAddRequest(id: any): Observable<any> {
    return this.http.delete(`${url}/resource/item-add-request-delete/${id}`);
  }


}
