import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { url } from "../core/models/API";
import { GenericResponse } from "../core/models/GenericResponse";
import { Token } from "../core/models/Token";
import { User } from "../core/models/User";

@Injectable({
    providedIn: "root",
})
export class ApplicantService {
    constructor(private http: HttpClient, private router: Router) {}

    getApplicantInfo(id: string): any {
        return this.http.get(`${url}/auth/applicant/${id}`);
    }

    updateApplicant(user: User): Observable<GenericResponse<User>> {
        return this.http.post<GenericResponse<User>>(
            `${url}/applicant/update`,
            user
        );
    }

    // getApplicantPrograms(): any {
    //     return this.http.get(`${url}/applicant/update`);
    // }

    // postApplicantPersonalInfo(Personal: object): any {
    //     return this.http.post(`${url}/applicant/update`, Personal);
    // }

    // postApplicantFamilyInfo(Family: any): any {
    //     return this.http.post(`${url}/applicant/update`, Family);
    // }

    // postApplicantEducationInfo(Education: any): any {
    //     return this.http.post(`${url}/applicant/update`, Education);
    // }

    // getAdmitCardInfo(): any {
    //     return this.http.get(`${url}/applicant/update`);
    // }

    // applicant apply-now
    getSingleApplication(id: string) {
        return this.http.get(`${url}/admission/application/show/${id}`);
    }

    applicantApplySave(formData: any, userId: string) {
        // console.log(formData)
        return this.http.post(
            `${url}/admission/application/add/${userId}`,
            formData
        );
    }

    applicantAdmission(formData: any, userId: string) {
        // console.log(formData)
        return this.http.put(
            `${url}/admission/application/update/applied-status/${userId}`,
            formData
        );
    }

    submitApplicantFees(id: string, data: object): any {
        return this.http.put(
            `${url}/admission/application/update/with/fees/add/${id}/Application`,
            data
        );
    }

    // file upload
    appliCantImageUpload(formData: any, id: string) {
        console.log(formData)
        const requestOptions = {
            headers: new HttpHeaders(),
            reportProgress: true
        };
        return this.http.post(
            `${url}/admission/applicant-image/${id}`,
            formData,
            requestOptions,
        );
    }

    appliCantSignUpload(formData: any, id: string) {
        console.log(formData)
        const requestOptions = {
            headers: new HttpHeaders(),
            reportProgress: true
        };
        return this.http.post(
            `${url}/admission/applicant-signature-image/${id}`,
            formData,
            requestOptions,
        );
    }

    appliCantPrivilegeUpload(formData: any, id: string) {
        const requestOptions = {
            headers: new HttpHeaders(),
            reportProgress: true
        };
        return this.http.post(
            `${url}/admission/applicant-privilege-document/${id}`,
            formData,
            requestOptions,
        );
    }

    // board api check

    checkApplicantBoardResult(body: any): any {
        const headers = {
            APIKEY: "d49c6512c7134fe5c0ce5595873bb7a4",
        };
        const requestOptions = {
            headers: new HttpHeaders(headers),
        };
        return this.http.post(
            `http://ebapi.teletalk.com.bd/v1.0/ebapi.php`,
            body,
            requestOptions
        );
    }
}
