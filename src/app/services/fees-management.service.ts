import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { url } from "../core/models/API";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class FeesManagementService {
    constructor(private http: HttpClient) { }

    getAllFeesHead(): any {
        return this.http.get(`${url}/admission/fees-head`);
    }

    getAllFeesHeadBySystem(): any {
        return this.http.get(`${url}/admission/fees-head-by-system-amount`);
    }

    getSingleFeesHead(id: string): any {
        return this.http.get(`${url}/admission/fees-head/${id}`);
    }

    createFeesHead(feesHead: any) {
        return this.http.post(`${url}/admission/fees-head/add`, feesHead);
    }

    updateFeesHead(id: string, feesHead: any) {
        return this.http.put(
            `${url}/admission/fees-head/update/${id}`,
            feesHead
        );
    }

    deleteFeesHead(id: any) {
        return this.http.delete(`${url}/admission/fees-head/delete/${id}`);
    }

    getAllFeesStructureType() {
        return this.http.get(`${url}/admission/fees-structure-type`);
    }
    createFeesStructureType(type: object) {
        return this.http.post(`${url}/admission/fees-structure-type/add`, type);
    }
    deleteFeesStructureType(id: string) {
        return this.http.delete(
            `${url}/admission/fees-structure-type/delete/${id}`
        );
    }

    getAllFeesStructure(): any {
        return this.http.get(`${url}/admission/fees-structure`);
    }

    getFeesStructure(id: string): Observable<any> {
        return this.http.get(
            `${url}/admission/fees-structure-details-by-fees-structure/${id}`
        );
    }

    createFeesStructure(feesStructure: any) {
        return this.http.post(
            `${url}/admission/fees-structure/add`,
            feesStructure
        );
    }
    deleteFeesStructure(id: string): any {
        return this.http.delete(
            `${url}/admission/fees-structure/delete/single/${id}`
        );
    }

    // Student fees
    getAllStudentFees(): any {
        return this.http.get(`${url}/admission/student/fees`);
    }

    // admission
    // /admission/applicant-fees
    getAllApplicantFees(): any {
        return this.http.get(`${url}/admission/applicant-fees`);
    }






    createManualStudentFees(
        studentId: string,
        feesStructureId: string,
        status: object
    ): any {
        return this.http.post(
            `${url}/admission/student/fees/${studentId}/${feesStructureId}`,
            status
        );
    }

    updateStudentFees(id: string, data: object): any {
        return this.http.put(
            `${url}/admission/student/fees/update/${id}`,
            data
        );
    }

    createManualFees(
        applicantId: string,
        feesStructureId: string,
        status: object
    ): any {
        return this.http.post(
            `${url}/admission//applicant/fees/manual/${applicantId}/${feesStructureId}`,
            status
        );
    }

    getAllFeesType(): Observable<any> {
        return this.http.get(`${url}/admission/fees-structure-type`);
    }

    getAdmissionApplicantFees(): Observable<any> {
        return this.http.get(`${url}/admission/applicant/fees`);
    }

    updateFeesForAdmission(uId: string, data: any): Observable<any> {
        return this.http.put(
            `${url}/admission/applicant/fees/update/${uId}`,
            data
        );
    }

    getStudentPartialTranscriptFee(data: any): Observable<any> {
        return this.http.post(
            `${url}/admission/find-partial-transcript-fee`,
            data
        );
    }

    // alumni fees
    getAlumniRegistrationFee(): Observable<any> {
        return this.http.get(`${url}/admission/find-alumni-registration-fee`);
    }
    getAlumniCardFee(): Observable<any> {
        return this.http.get(`${url}/admission/find-alumni-card-fee`);
    }

    // certificate and transcript
    getCertificateFee(data: any): Observable<any> {
        return this.http.post(`${url}/admission/find-certificate-fee`, data);
    }
    getGradeCertificateFee(data: any): Observable<any> {
        return this.http.post(
            `${url}/admission/find-grade-certificate-fee`,
            data
        );
    }
    getAcademicTranscriptFee(data: any): Observable<any> {
        return this.http.post(
            `${url}/admission/find-academic-transcript-fee`,
            data
        );
    }
}
