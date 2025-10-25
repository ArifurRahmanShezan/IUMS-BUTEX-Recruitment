import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url } from "../core/models/API";
@Injectable({
  providedIn: "root",
})
export class IdCardService {
  constructor(private http: HttpClient) { }


  // admin
  getStudentByBatch(batchId: number): Observable<any> {
    return this.http.get(`${url}/auth/find-student-by-batch/${batchId}`);
  }
  getStudentByBatchDepartment(departmentId: number): Observable<any> {
    return this.http.get(`${url}/auth/find-student-by-department/${departmentId}`);
  }

  findAllStudentById(): Observable<any> {
    return this.http.get(`${url}/auth/find-all-student-by-id`);
  }

  getAllReIssueApplyStudent(): Observable<any> {
    return this.http.get(`${url}/auth/find-all-student-re-issue-apply`);
  }



  // /find-re-issue-apply-student-by-batch/{batchId}
  getReIssueApplyStudentByBatch(batchId: number): Observable<any> {
    return this.http.get(`${url}/auth/find-re-issue-apply-student-by-batch/${batchId}`);
  }

  // /find-student-re-issue-apply-by-department/{departmentId}
  getReIssueApplyStudentByDepartment(departmentId: number): Observable<any> {
    return this.http.get(`${url}/auth/find-student-re-issue-apply-by-department/${departmentId}`);
  }











  // hall Provost
  getStudentByHall(hallId: number): Observable<any> {
    return this.http.get(`${url}/auth/find-student-by-hall/${hallId}`);
  }


  // disbursement

  getDisbursedStudentIdCard(id: number): Observable<any> {
    return this.http.put(`${url}/auth/disbursed-student-id-card-by-student-assign-to-batch/${id}`, {});
  }
  getHallDisbursedStudentIdCard(id: number): Observable<any> {
    return this.http.put(`${url}/auth/hall-disbursed-student-id-card-by-student-assign-to-batch/${id}`, {});
  }


  // re-issue Apply
  // "/student-id-card-re-issue-apply/{studentId}")
  studentIdCardByReIssueApply(studentId: any, payload: any): Observable<any> {
    return this.http.put(`${url}/auth/student-id-card-re-issue-apply/${studentId}`, payload);
  }
  // auth/find-hall-id-card-by-re-issue-apply/3
  hallIdCardByReIssueApply(studentId: any, payload: any): Observable<any> {
    return this.http.put(`${url}/auth/student-hall-id-card-re-issue-apply/${studentId}`, payload);
  }






  // auth/re-issue-apply-find-student-by-batch-department/3
  getReIssueApplyStudentByBatchDepartment(departmentId: number): Observable<any> {
    return this.http.get(`${url}/auth/re-issue-apply-find-student-by-batch-department/${departmentId}`);
  }


  // auth/re-issue-apply-find-student-by-batch-hall/3
  getReIssueApplyStudentByBatchHall(hallId: number): Observable<any> {
    return this.http.get(`${url}/auth/re-issue-apply-find-student-by-batch-hall/${hallId}`);
  }



  // Approve Re-issue Apply
  // /re-issue-id-card-approve-by-student-assign-to-batch
  approveReIssueApply(id: number): Observable<any> {
    return this.http.put(`${url}/auth/re-issue-id-card-approve-by-student-assign-to-batch/${id}`, {});
  }

  // re-issue-id-card-reject-by-student-assign-to-batch
  rejectReIssueApply(id: number): Observable<any> {
    return this.http.put(`${url}/auth/re-issue-id-card-reject-by-student-assign-to-batch/${id}`, {});
  }



  // student get id card info
  // find-student-re-issue-apply
  getStudentIdCardInfo(studentId: any): Observable<any> {
    return this.http.get(`${url}/auth/find-student-re-issue-apply/${studentId}`);
  }



  // auth/student-id-card-approver-store
  studentIdCardApproverStore(payload: any): Observable<any> {
    return this.http.post(`${url}/auth/student-id-card-approver-store`, payload);
  }

  // auth/student-id-card-approver
  getAllSudentIdCardApprover(): Observable<any> {
    return this.http.get(`${url}/auth/student-id-card-approver`);
  }

  // auth/student-id-card-approver-delete/4
  studentIdCardApproverDelete(id: number): Observable<any> {
    return this.http.delete(`${url}/auth/student-id-card-approver-delete/${id}`);
  }
}
