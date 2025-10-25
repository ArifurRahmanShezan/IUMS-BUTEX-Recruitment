import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url } from "../core/models/API";

@Injectable({
  providedIn: 'root'
})
export class ScholarshipService {

  constructor(private http: HttpClient) { }

  // Scholarship Type
  storeScholarshipType(data: any): Observable<any> {
    return this.http.post(`${url}/accounting/store-scholarship-type`, data);
  }
  getAllScholarshipType(): Observable<any> {
    return this.http.get(`${url}/accounting/all-scholarship-type`);
  }

  updateScholarshipType(data: any, id: number): Observable<any> {
    return this.http.put(`${url}/accounting/update-scholarship-type/${id}`, data);
  }

  deleteScholarshipType(id: number): Observable<any> {
    return this.http.delete(`${url}/accounting/delete-scholarship-type/${id}`);
  }



  // Funding Source Create
  storeFundingSource(data: any): Observable<any> {
    return this.http.post(`${url}/accounting/store-funding-source`, data);
  }
  getAllFundingSource(): Observable<any> {
    return this.http.get(`${url}/accounting/all-funding-source`);
  }

  showFundingSource(id: number): Observable<any> {
    return this.http.get(`${url}/accounting/funding-source-by-id/${id}`);
  }

  updateFundingSource(data: any, id: number): Observable<any> {
    return this.http.put(`${url}/accounting/update-funding-source/${id}`, data);
  }

  deleteFundingSource(id: number): Observable<any> {
    return this.http.delete(`${url}/accounting/delete-funding-source/${id}`);
  }







  // Scholarship Fund
  storeScholarshipFund(data: any): Observable<any> {
    return this.http.post(`${url}/accounting/store-scholarship-fund`, data);
  }
  getAllScholarshipFund(): Observable<any> {
    return this.http.get(`${url}/accounting/all-scholarship-fund`);
  }

  showScholarshipFund(id: number): Observable<any> {
    return this.http.get(`${url}/accounting/scholarship-fund-by-id/${id}`);
  }

  updateScholarshipFund(data: any, id: number): Observable<any> {
    return this.http.put(`${url}/accounting/update-scholarship-fund/${id}`, data);

  }

  deleteScholarshipFund(id: number): Observable<any> {
    return this.http.delete(`${url}/accounting/delete-scholarship-fund/${id}`);
  }






  // Eligibility Criteria
  storeEligibilityCriteria(data: any): Observable<any> {
    return this.http.post(`${url}/accounting/store-special-category-eligibility`, data);
  }
  getAllEligibilityCriteria(): Observable<any> {
    return this.http.get(`${url}/accounting/all-special-category-eligibility`);
  }

  showEligibilityCriteria(id: number): Observable<any> {
    return this.http.get(`${url}/accounting/special-category-eligibility-by-id/${id}`);
  }

  updateEligibilityCriteria(data: any, id: number): Observable<any> {
    return this.http.put(`${url}/accounting/update-special-category-eligibility/${id}`, data);
  }

  deleteEligibilityCriteria(id: number): Observable<any> {
    return this.http.delete(`${url}/accounting/delete-special-category-eligibility/${id}`);
  }


  // Award Type

  storeAwardType(data: any): Observable<any> {
    return this.http.post(`${url}/accounting/store-award-type`, data);
  }
  getAllAwardType(): Observable<any> {
    return this.http.get(`${url}/accounting/all-award-type`);
  }

  showAwardType(id: number): Observable<any> {
    return this.http.get(`${url}/accounting/award-type-by-id/${id}`);
  }

  updateAwardType(data: any, id: number): Observable<any> {
    return this.http.put(`${url}/accounting/update-award-type/${id}`, data);
  }

  deleteAwardType(id: number): Observable<any> {
    return this.http.delete(`${url}/accounting/delete-award-type/${id}`);
  }





  // Disbursement Mode

  storeDisbursementMode(data: any): Observable<any> {
    return this.http.post(`${url}/accounting/store-disbursement-mode`, data);
  }
  getAllDisbursementMode(): Observable<any> {
    return this.http.get(`${url}/accounting/all-disbursement-mode`);
  }

  showDisbursementMode(id: number): Observable<any> {
    return this.http.get(`${url}/accounting/disbursement-mode-by-id/${id}`);
  }

  updateDisbursementMode(data: any, id: number): Observable<any> {
    return this.http.put(`${url}/accounting/update-disbursement-mode/${id}`, data);
  }

  deleteDisbursementMode(id: number): Observable<any> {
    return this.http.delete(`${url}/accounting/delete-disbursement-mode/${id}`);
  }



  // Scholarship Rule-book

  storeScholarshipRuleBook(data: any): Observable<any> {
    return this.http.post(`${url}/accounting/store-general-scholarship-information`, data);
  }
  getAllScholarshipRuleBook(): Observable<any> {
    return this.http.get(`${url}/accounting/all-general-scholarship-information`);
  }

  showScholarshipRuleBook(id: any): Observable<any> {
    return this.http.get(`${url}/accounting/general-scholarship-information-by-id/${id}`);
  }

  updateScholarshipRuleBook(data: any, id: any): Observable<any> {
    return this.http.put(`${url}/accounting/update-general-scholarship-information/${id}`, data);
  }

  deleteScholarshipRuleBook(id: any): Observable<any> {
    return this.http.delete(`${url}/accounting/delete-general-scholarship-information/${id}`);
  }



  // scholarship circular
  storeScholarshipCircular(data: any): Observable<any> {
    return this.http.post(`${url}/accounting/scholarship-circular-information-add`, data);
  }

  getAllScholarshipCircular(): Observable<any> {
    return this.http.get(`${url}/accounting/scholarship-circular-information`);
  }

  showScholarshipCircular(id: any): Observable<any> {
    return this.http.get(`${url}/accounting/scholarship-circular-information-by-id/${id}`);
  }

  updateScholarshipCircular(data: any, id: number): Observable<any> {
    return this.http.put(`${url}/accounting/scholarship-circular-information-update/${id}`, data);
  }

  deleteScholarshipCircular(id: number): Observable<any> {
    return this.http.delete(`${url}/accounting/circular-scholarship-delete/${id}`);
  }
  deleteScholarshipInfoById(id: number): Observable<any> {
    return this.http.delete(`${url}/accounting/scholarship-circular-information-delete/${id}`);
  }

  // Student apply
  applyScholarship(data: any): Observable<any> {
    return this.http.post(`${url}/accounting/personal-scholarship-information-add`, data);
  }

  getAllApplyScholarship(): Observable<any> {
    return this.http.get(`${url}/accounting/personal-scholarship-information`);
  }

  studentGetAllAppliedScholarshipByStudentId(Id: any): Observable<any> {
    return this.http.get(`${url}/accounting/personal-scholarship-information-by-student-id/${Id}`);
  }










  // accounting/personal-scholarship-information-by-department-head-id/
  getScholarshipInfoByDepartmentHeadId(id: any): Observable<any> {
    return this.http.get(`${url}/accounting/personal-scholarship-information-by-department-head-id/${id}`);
  }

  // /accounting/personal-scholarship-information-by-dean-id/
  getScholarshipInfoByDeanId(id: any): Observable<any> {
    return this.http.get(`${url}/accounting/personal-scholarship-information-by-dean-id/${id}`);
  }

  // accounting/personal-scholarship-information-by-registrar-id/
  getScholarshipInfoByRegistrarId(id: any): Observable<any> {
    return this.http.get(`${url}/accounting/personal-scholarship-information-by-registrar-id/${id}`);
  }





  //     http://localhost:8080/api/v1/accounting/personal-scholarship-information-department-head-approve/8
  // http://localhost:8080/api/v1/accounting/personal-scholarship-information-dean-approve/8
  // http://localhost:8080/api/v1/accounting/personal-scholarship-information-registrar-approve/8

  scholarshipDepartmentHeadApprove(id: any): Observable<any> {
    return this.http.put(`${url}/accounting/personal-scholarship-information-department-head-approve/${id}`, null);
  }

  scholarshipDeanApprove(id: any): Observable<any> {
    return this.http.put(`${url}/accounting/personal-scholarship-information-dean-approve/${id}`, null);
  }

  scholarshipRegistrarApprove(id: any): Observable<any> {
    return this.http.put(`${url}/accounting/personal-scholarship-information-registrar-approve/${id}`, null);
  }



  // http://localhost:8080/api/v1/accounting/personal-scholarship-information-department-head-reject/8" 
  //   "http://localhost:8080/api/v1/accounting/personal-scholarship-information-dean-reject/8"
  //   "http://localhost:8080/api/v1/accounting/personal-scholarship-information-registrar-reject/8"

  scholarshipDepartmentHeadReject(id: any, data: any): Observable<any> {
    return this.http.put(`${url}/accounting/personal-scholarship-information-department-head-reject/${id}`, data);
  }

  scholarshipDeanReject(id: any, data: any): Observable<any> {
    return this.http.put(`${url}/accounting/personal-scholarship-information-dean-reject/${id}`, data);
  }

  scholarshipRegistrarReject(id: any, data: any): Observable<any> {
    return this.http.put(`${url}/accounting/personal-scholarship-information-registrar-reject/${id}`, data);
  }


}
