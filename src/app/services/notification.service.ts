import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from "../core/models/API";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  // Student notifications
  // {{baseUrl}}/notification/all-notice-of-student/1498
  getStudentNotifications(studentId: string): Observable<any> {
    return this.http.get(`${url}/notification/all-notice-of-student/${studentId}`);
  }





  // /notification/all-notices-of-registrar
  getRegistrarNotifications(): Observable<any> {
    return this.http.get(`${url}/notification/all-notices-of-registrar`);
  }






  // register

  // /notification/all-academic-notice-of-registrar
  getAcademicNotificationsRegistrar(): Observable<any> {
    return this.http.get(`${url}/notification/all-academic-notice-of-registrar`);
  }
  // /notification/registrar-academic-notice-by-id/1
  getAcademicNotificationRegistrarById(id: string): Observable<any> {
    return this.http.get(`${url}/notification/registrar-academic-notice-by-id/${id}`);
  }
  // /notification/store-registrar-academic-notice
  storeRegistrarAcademicNoticeRegistrar(data: any): Observable<any> {
    return this.http.post(`${url}/notification/store-registrar-academic-notice`, data);
  }
  // /notification/update-registrar-academic-notice/1
  updateRegistrarAcademicNoticeRegistrar(id: any, data: any): Observable<any> {
    return this.http.put(`${url}/notification/update-registrar-academic-notice/${id}`, data);
  }
  // /notification/delete-registrar-academic-notice/1
  deleteRegistrarAcademicNoticeRegistrar(id: any): Observable<any> {
    return this.http.delete(`${url}/notification/delete-registrar-academic-notice/${id}`);
  }



  // teacher
  // /notification/all-notice-of-teacher/186
  getTeacherNotifications(teacherId: string): Observable<any> {
    return this.http.get(`${url}/notification/all-notice-of-teacher/${teacherId}`);
  }





  // department-head
  // {{baseurl}}/notification/all-notice-of-department/1

  getDepartmentHeadNotificationsByDepartment(departmentId: string): Observable<any> {
    return this.http.get(`${url}/notification/all-notice-of-department/${departmentId}`);
  }


}
