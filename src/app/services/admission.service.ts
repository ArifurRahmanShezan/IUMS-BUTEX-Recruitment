import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { url } from "../core/models/API";

@Injectable({
    providedIn: "root",
})
export class AdmissionService {
    constructor(private http: HttpClient) { }

    getAllAdmissionCenter(): Observable<Object> {
        return this.http.get(`${url}/admission/center`);
    }

    getSingleAdmissionCenter(centerId: string): Observable<Object> {
        return this.http.get(`${url}/admission/center/${centerId}`);
    }

    createAdmissionCenter(center: any): any {
        return this.http.post(`${url}/admission/center/add`, center);
    }

    updateAdmissionCenter(centerId: string, center: any): any {
        return this.http.put(
            `${url}/admission/center/update/${centerId}`,
            center
        );
    }

    deleteAdmissionCenter(centerId: string): any {
        return this.http.delete(`${url}/admission/center/delete/${centerId}`);
    }

    createAdmissionCenterRoom(room: any) {
        return this.http.post(`${url}/admission/center/room/add`, room);
    }

    getAllCenterRooms(): any {
        return this.http.get(`${url}/admission/center/room`);
    }

    getSingleCenterRoom(roomId: string): any {
        return this.http.get(`${url}/admission/center/room/${roomId}`);
    }

    deleteAdmissionCenterRoom(roomId: string): any {
        return this.http.delete(
            `${url}/admission/center/room/delete/${roomId}`
        );
    }
    updateAdmissionCenterRoom(roomId: string, room: any): any {
        return this.http.put(
            `${url}/admission/center/room/update/${roomId}`,
            room
        );
    }

    //  application apis
    getSingleApplication(applicantId: string): any {
        // by applicant id
        return this.http.get(
            `${url}/admission/application/show/${applicantId}`
        );
    }

    getApplication(applicationId: string): any {
        return this.http.get(`${url}/admission/application/${applicationId}`);
    }

    getAllApplication(): any {
        return this.http.get(`${url}/admission/application`);
    }

    deleteApplication(id: string): any {
        return this.http.delete(`${url}/admission/application/delete/${id}`);
    }

    getApplicationByApplyStatus(): any {
        return this.http.get(`${url}/admission/application/by/apply`);
    }

    getAllApplicationByYearOfId(id: string): any {
        return this.http.get(
            `${url}/admission/application/by/year-of-study/${id}`
        );
    }

    getApplicationBySubmitted(): any {
        return this.http.get(`${url}/admission/application/by/submit`);
    }

    updateApplicationMarks(application: any): any {
        return this.http.put(
            `${url}/admission/application/update/with/marks-and-status/`,
            application
        );
    }

    updateSingleApplicationMark(marks: any, id: string): any {
        return this.http.put(
            `${url}/admission/application/update-marks/${id}`,
            marks
        );
    }

    applicantApplySave(formData: any, userId: string) {
        // console.log(formData)
        return this.http.post(
            `${url}/admission/application/add/${userId}`,
            formData
        );
    }

    submitApplicantFees(id: string, data: object): any {
        console.log(data);
        return this.http.put(
            `${url}/admission/application/update/with/fees/add/${id}/Application`,
            data
        );
    }

    //assign application to center
    assignApplicationToCenter(formData: any): any {
        return this.http.put(
            `${url}/admission/application/admission-center/assign`,
            formData
        );
    }

    // admit card
    getAdmitCard(id: string): any {
        return this.http.get(`${url}/admission/admit-card/${id}`);
    }

    // approval student put
    approvalStudent(applicantId: string, status: any): any {
        return this.http.put(
            `${url}/auth/applicant/to/student/update/${applicantId}`,
            status
        );
    }

    // approval student put
    generateStudent(applicantId: string, status: any): any {
        return this.http.put(
            `${url}/auth/applicant/to/student/update/family/${applicantId}`,
            status
        );
    }

    // application fees get
    getApplicationFees(): any {
        return this.http.get(`${url}/admission/fees-structure/application-fee`);
    }

    // admission target
    getAdmissionTargetList(): Observable<any> {
        return this.http.get(`${url}/admission/admission-target`);
    }

    getAdmissionTarget(id: string): Observable<any> {
        return this.http.get(`${url}/admission/admission-target/${id}`);
    }

    createAdmissionTarget(data: any): Observable<any> {
        return this.http.post(`${url}/admission/admission-target/add`, data);
    }

    updateAdmissionTarget(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/admission/admission-target/update/${id}`,
            data
        );
    }

    deleteAdmissionTarget(id: string): Observable<any> {
        return this.http.delete(
            `${url}/admission/admission-target/delete/${id}`
        );
    }

    // pre admission
    getPreAdmissionList(): Observable<any> {
        return this.http.get(`${url}/admission/pre-admission`);
    }

    getPreAdmissionListByCounselor(counselorId: string): Observable<any> {
        return this.http.get(
            `${url}/admission/show-pre-admission-by-admission-counselor-id/${counselorId}`
        );
    }

    getPreAdmission(id: string): Observable<any> {
        return this.http.get(`${url}/admission/pre-admission/${id}`);
    }

    createPreAdmission(data: any): Observable<any> {
        return this.http.post(`${url}/admission/pre-admission/add`, data);
    }

    updatePreAdmission(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/admission/pre-admission/update/${id}`,
            data
        );
    }

    deletePreAdmission(id: string): Observable<any> {
        return this.http.delete(`${url}/admission/pre-admission/delete/${id}`);
    }

    // admission enrollment
    getAdmissionEnrollment(): Observable<any> {
        return this.http.get(`${url}/admission/admission-enrollment/1`);
    }
    putAdmissionEnrollment(data: any): Observable<any> {
        return this.http.put(
            `${url}/admission/admission-enrollment-update/1`,
            data
        );
    }

    // masters enrollment
    getMastersEnrollments(): Observable<any> {
        return this.http.get(
            `${url}/admission/post-graduation-admission-enrollment`
        );
    }
    getMastersEnrollment(id: string): Observable<any> {
        return this.http.get(
            `${url}/admission/post-graduation-admission-enrollment/${id}`
        );
    }
    getMastersEnrollmentsByHead(id: string): Observable<any> {
        return this.http.get(
            `${url}/admission/post-graduation-admission-enrollment-by-department-head/${id}`
        );
    }
    postMastersEnrollment(data: any): Observable<any> {
        return this.http.post(
            `${url}/admission/post-graduation-admission-enrollment-add`,
            data
        );
    }

    putMastersEnrollment(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/admission/post-graduation-admission-enrollment-update/${id}`,
            data
        );
    }
    deleteMastersEnrollment(id: string): Observable<any> {
        return this.http.delete(
            `${url}/admission/post-graduation-admission-enrollment-delete/${id}`
        );
    }




    // /admission/applicant-fees-by-admission-circular-id/1
    getApplicantFeesByCircular(circularId: string): Observable<any> {
        return this.http.get(`${url}/admission/applicant-fees-by-admission-circular-id/${circularId}`);
    }

    // /admission/applicant-fees-structure-by-payment-date/2024-11-24
    getApplicantFeesByPaymentDate(date: string): Observable<any> {
        return this.http.get(`${url}/admission/applicant-fees-structure-by-payment-date/${date}`);
    }

    // /admission/applicant-fees-structure-by-admission-circular-and-payment-date/1/2024-11-24
    getApplicantFeesByCircularAndPaymentDate(circularId: string, date: string): Observable<any> {
        return this.http.get(`${url}/admission/applicant-fees-structure-by-admission-circular-and-payment-date/${circularId}/${date}`);
    }



    // /admission/applicant-fees-structure-excel-download-by-admission-circular/2
    admissionFeesPaymentList(circularId: string): Observable<any> {
        return this.http.get(`${url}/admission/applicant-fees-structure-excel-download-by-admission-circular/${circularId}`, { responseType: 'blob' });
    }


    approveApplicantByHead(data: any): Observable<any> {
        return this.http.post(
            `${url}/admission/store-department-applicant`,
            data
        );
    }

    searchApplicantByIdAndDepartment(
        studentId: string,
        departmentId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/admission/completed-interview-by-temporary-student-id-and-department/${studentId}/${departmentId}`
        );
    }

    getApplicantsByDepartment(departmentId: string): Observable<any> {
        return this.http.get(
            `${url}/admission/department-applicant-by-department/${departmentId}`
        );
    }



    getInterviewPassedApplicantsByDepartment(
        departmentId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/admission/completed-interview-by-department/${departmentId}`
        );
    }


    getAdmissionCircularList(): Observable<any> {
        return this.http.get(`${url}/admission/admission-circular`);
    }


    // /completed-interview-by-admission-circular-and-student-merit-and-department/{admissionCircularId}/{studentMerit}/{departmentId}
    getCompletedInterviewByAdmissionCircularAndStudentMeritAndDepartment(admissionCircularId: any, studentMerit: any, departmentId: any): Observable<any> {
        return this.http.get(`${url}/admission/completed-interview-by-admission-circular-and-student-merit-and-department/${admissionCircularId}/${studentMerit}/${departmentId}`);
    }
    // http://localhost:8080/api/v1/admission/manula-admission-by-admission-circular-id/1
    getManualAdmissionByAdmissionCircularId(admissionCircularId: any): Observable<any> {
        return this.http.get(`${url}/admission/manula-admission-by-admission-circular-id/${admissionCircularId}`);
    }


    // {{baseurl}}/student/butex-and-board-merit-student-information-by-merit-position/230
    getButexAndBoardMeritStudentInformationByMeritPosition(meritPosition: any): Observable<any> {
        return this.http.get(`${url}/student/butex-and-board-merit-student-information-by-merit-position/${meritPosition}`);
    }

    // {{baseurl}}/student/butex-merit-student-information-by-department/1
    getButexMeritStudentInformationByDepartment(departmentId: any): Observable<any> {
        return this.http.get(`${url}/student/butex-merit-student-information-by-department/${departmentId}`);
    }


}
