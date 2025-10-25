import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url } from "../core/models/API";

@Injectable({
    providedIn: "root",
})
export class AlumniService {
    constructor(private http: HttpClient) {}

    // alumni card.
    getAlumniCardByStudentId(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/alumni/alumni-card-application-by-student-unique-id/${studentId}`
        );
    }
    applyForAlumniCard(data: any): Observable<any> {
        return this.http.post(
            `${url}/alumni/alumni-card-application-store`,
            data
        );
    }

    // alumni clearance
    getAlumniClearanceList(): Observable<any> {
        return this.http.get(`${url}/alumni/alumni-clearance`);
    }

    alumniClearanceByAccounts(id: number): Observable<any> {
        return this.http.put(
            `${url}/alumni/alumni-clearance-by-accounts/${id}`,
            {}
        );
    }
    alumniClearanceRejectByAccounts(id: number): Observable<any> {
        return this.http.put(
            `${url}/alumni/alumni-clearance-reject-by-accounts/${id}`,
            {}
        );
    }

    alumniClearanceByAdmission(id: number): Observable<any> {
        return this.http.put(
            `${url}/alumni/alumni-clearance-by-admission/${id}`,
            {}
        );
    }
    alumniClearanceRejectByAdmission(id: number): Observable<any> {
        return this.http.put(
            `${url}/alumni/alumni-clearance-reject-by-admission/${id}`,
            {}
        );
    }

    alumniClearanceByLibrary(id: number): Observable<any> {
        return this.http.put(
            `${url}/alumni/alumni-clearance-by-library/${id}`,
            {}
        );
    }

    alumniClearanceRejectByLibrary(id: number): Observable<any> {
        return this.http.put(
            `${url}/alumni/alumni-clearance-reject-by-library/${id}`,
            {}
        );
    }

    alumniClearanceByAdministrative(id: number): Observable<any> {
        return this.http.put(
            `${url}/alumni/alumni-clearance-by-administrative-affairs/${id}`,
            {}
        );
    }
    alumniClearanceRejectByAdministrative(id: number): Observable<any> {
        return this.http.put(
            `${url}/alumni/alumni-clearance-reject-by-administrative-affairs/${id}`,
            {}
        );
    }

    alumniClearanceByExamOffice(id: number): Observable<any> {
        return this.http.put(
            `${url}/alumni/alumni-clearance-by-examination/${id}`,
            {}
        );
    }
    alumniClearanceRejectByExamOffice(id: number): Observable<any> {
        return this.http.put(
            `${url}/alumni/alumni-clearance-reject-by-examination/${id}`,
            {}
        );
    }

    // alumni card final approval
    getAlumniCardApprovalList(): Observable<any> {
        return this.http.get(`${url}/alumni/alumni-card-approve-able-list`);
    }
    alumniCardFinalApproval(id: number): Observable<any> {
        return this.http.put(
            `${url}/alumni/alumni-card-application-approve/${id}`,
            {}
        );
    }
    alumniCardFinalReject(id: number): Observable<any> {
        return this.http.put(
            `${url}/alumni/alumni-card-application-reject/${id}`,
            {}
        );
    }

    alumniDocumentApply(data: any): Observable<any> {
        return this.http.post(
            `${url}/alumni/documents-application-store`,
            data
        );
    }

    // documents clearance
    getDocumentsApprovalList(): Observable<any> {
        return this.http.get(`${url}/alumni/documents-approve-able-list`);
    }
    getDocumentsByStudent(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/alumni/documents-application-by-student-unique-id/${studentId}`
        );
    }
    documentApprove(id: number): Observable<any> {
        return this.http.put(
            `${url}/alumni/documents-application-approve/${id}`,
            {}
        );
    }
    documentReject(id: number): Observable<any> {
        return this.http.put(
            `${url}/alumni/documents-application-reject/${id}`,
            {}
        );
    }

    // Provisional certificate
    getProvisionalCertificates(): Observable<any> {
        return this.http.get(`${url}/alumni/provisional-certificate`);
    }
    getSingleProvisionalCertificate(id: number): Observable<any> {
        return this.http.get(`${url}/alumni/provisional-certificate/${id}`);
    }
    updateProvisionalCertificate(id: number, data: any): Observable<any> {
        return this.http.put(
            `${url}/alumni/provisional-certificate-update-status/${id}`,
            data
        );
    }

    // academic transcript
    getAcademicTranscripts(): Observable<any> {
        return this.http.get(`${url}/alumni/academic-transcript`);
    }
    getSingleAcademicTranscript(id: number): Observable<any> {
        return this.http.get(`${url}/alumni/academic-transcript/${id}`);
    }
    updateAcademicTranscript(id: number, data: any): Observable<any> {
        return this.http.put(
            `${url}/alumni/academic-transcript-update-status/${id}`,
            data
        );
    }

    // grade certificate
    gradeCertificates(): Observable<any> {
        return this.http.get(`${url}/alumni/grade-certificate`);
    }
    singleGradeCertificate(id: number): Observable<any> {
        return this.http.get(`${url}/alumni/grade-certificate/${id}`);
    }
    updateCertificate(id: number, data: any): Observable<any> {
        return this.http.put(
            `${url}/alumni/grade-certificate-update-status/${id}`,
            data
        );
    }
    gradeCertificateVerifyInformation(
        serial: string,
        registration: string
    ): Observable<any> {
        return this.http.get(
            `${url}/alumni/grade-certificate-verify/${serial}/${registration}`
        );
    }

    provisionCertificateVerifyInformation(
        serial: string,
        registration: string
    ): Observable<any> {
        return this.http.get(
            `${url}/alumni/provisional-certificate-verify/${serial}/${registration}`
        );
    }

    // convocation
    getConvocations(): Observable<any> {
        return this.http.get(`${url}/alumni/convocation`);
    }
    getConvocationById(id: string): Observable<any> {
        return this.http.get(`${url}/alumni/convocation/${id}`);
    }
    createConvocation(data: any): Observable<any> {
        return this.http.post(`${url}/alumni/convocation/add`, data);
    }
    updateConvocation(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/alumni/convocation/update/${id}`, data);
    }
    deleteConvocation(id: string): Observable<any> {
        return this.http.delete(`${url}/alumni/convocation/delete/${id}`);
    }

    getKitVenues(): Observable<any> {
        return this.http.get(
            `${url}/alumni/convocation-kit-distribution-venue`
        );
    }
    getKitVenueById(id: string): Observable<any> {
        return this.http.get(
            `${url}/alumni/convocation-kit-distribution-venue/${id}`
        );
    }
    createKitVenue(data: any): Observable<any> {
        return this.http.post(
            `${url}/alumni/convocation-kit-distribution-venue-add`,
            data
        );
    }
    updateKitVenue(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/alumni/convocation-kit-distribution-venue/update/${id}`,
            data
        );
    }
    deleteKitVenue(id: string): Observable<any> {
        return this.http.delete(
            `${url}/alumni/convocation-kit-distribution-venue/delete/${id}`
        );
    }

    // alumni convocation apply
    getEligibleConvocation(alumniId: string): Observable<any> {
        return this.http.get(
            `${url}/alumni/alumni-eligible-convocation-show/${alumniId}`
        );
    }

    alumniConvocationRegistration(data: any): Observable<any> {
        return this.http.post(
            `${url}/alumni/alumni-convocation-registration`,
            data
        );
    }

    alumniByRegistrationId(data: any): Observable<any> {
        return this.http.post(
            `${url}/alumni/alumni-convocation-registration-by-registration-id`,
            data
        );
    }
    getKitCollections(): Observable<any> {
        return this.http.get(`${url}/alumni/alumni-kit-collection-list`);
    }

    alumniKitCollection(data: any): Observable<any> {
        return this.http.post(
            `${url}/alumni/store-alumni-kit-collection`,
            data
        );
    }

    // examination details
    getExaminationsDetails(): Observable<any> {
        return this.http.get(`${url}/alumni/examination-details`);
    }

    getExaminationsDetail(id: string): Observable<any> {
        return this.http.get(`${url}/alumni/examination-details/${id}`);
    }

    createExaminationsDetail(data: any): Observable<any> {
        return this.http.post(`${url}/alumni/examination-details-add`, data);
    }

    updateExaminationsDetail(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/alumni/examination-details-update/${id}`,
            data
        );
    }

    deleteExaminationsDetail(id: string): Observable<any> {
        return this.http.delete(
            `${url}/alumni/examination-details-delete/${id}`
        );
    }
}
