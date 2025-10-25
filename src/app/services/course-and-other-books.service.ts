import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from "../core/models/API";
@Injectable({
  providedIn: 'root'
})
export class CourseAndOtherBooksService {
  constructor(private http: HttpClient) { }

  // ------------------------------Program Course Book--------------------------------

  getAllProgramCourseBooks(): Observable<any> {
    return this.http.get(`${url}/faculty/program-coursebook`);
  }
  getAllProgramCourseBooksByDepartmentHead(departmentHeadId: string): Observable<any> {
    return this.http.get(`${url}/faculty/program-coursebook-by-department-head/${departmentHeadId}`);
  }

  createProgramCourseBook(data: any): Observable<any> {
    return this.http.post(`${url}/faculty/store-program-coursebook`, data);
  }

  updateProgramCourseBook(id: any, data: any): Observable<any> {
    return this.http.put(`${url}/faculty/update-program-coursebook/${id}`, data);
  }

  deleteProgramCourseBook(id: any): Observable<any> {
    return this.http.delete(`${url}/faculty/delete-program-coursebook/${id}`);
  }

  approveProgramCourseBook(id: any): Observable<any> {
    return this.http.put(`${url}/faculty/approve-program-coursebook/${id}`, {});
  }

  rejectProgramCourseBook(id: any): Observable<any> {
    return this.http.put(`${url}/faculty/reject-program-coursebook/${id}`, {});
  }

  getApprovedProgramCourseBooks(): Observable<any> {
    return this.http.get(`${url}/faculty/approved-program-coursebook`);
  }
  // Approved Program coursebook by department head

  getApprovedProgramCourseBooksByDepartmentHead(departmentHeadId: string): Observable<any> {
    return this.http.get(`${url}/faculty/approved-program-coursebook-by-department-head/${departmentHeadId}`);
  }

  getProgramCourseBookByDean(deanId: string): Observable<any> {
    return this.http.get(`${url}/faculty/program-coursebook-by-id/${deanId}`);
  }

  // Program coursebook by study program
  getProgramCourseBookByStudyProgram(studyProgramId: string): Observable<any> {
    return this.http.get(`${url}/faculty/approved-program-coursebook-by-study-program/${studyProgramId}`);
  }



  // -------------------------------Grade Book Template-----------------------------

  getAllGradeBookTemplate(): Observable<any> {
    return this.http.get(`${url}/faculty/grade-book-templates`);
  }

  createGradeBookTemplate(data: any): Observable<any> {
    return this.http.post(`${url}/faculty/store-grade-book-template`, data);
  }

  updateGradeBookTemplate(id: any, data: any): Observable<any> {
    return this.http.put(`${url}/faculty/update-grade-book-template/${id}`, data);
  }

  deleteGradeBookTemplate(id: any): Observable<any> {
    return this.http.delete(`${url}/faculty/delete-grade-book-template/${id}`);
  }

  // -------------------------------University coursebook -----------------------------


  getAllUniversityCoursebook(): Observable<any> {
    return this.http.get(`${url}/faculty/university-course-book`);
  }

  createUniversityCoursebook(data: any): Observable<any> {
    return this.http.post(`${url}/faculty/store-university-course-book`, data);
  }

  updateUniversityCoursebook(id: any, data: any): Observable<any> {
    return this.http.put(`${url}/faculty/update-university-course-book/${id}`, data);
  }

  deleteUniversityCoursebook(id: any): Observable<any> {
    return this.http.delete(`${url}/faculty/university-course-book-delete/${id}`);
  }


  // copy university coursebook
  copyUniversityCoursebook(id: any, payload: any): Observable<any> {
    return this.http.put(`${url}/faculty/copy-university-coursebook/${id}`, payload);
  }

}
