import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

import { url } from "../core/models/API";
import { profileImage } from "../core/models/API";
import { GenericResponse } from "../core/models/GenericResponse";
import { User } from "../core/models/User";
import { AdmissionService } from "./admission.service";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    loginUser: BehaviorSubject<any>;

    constructor(
        private http: HttpClient,
        private admissionService: AdmissionService
    ) {
        this.loginUser = new BehaviorSubject<any>(
            localStorage.getItem("user")
                ? JSON.parse(localStorage.getItem("user") as string)
                : null
        );
    }

    private user: any;
    private token: string = '';

    login(user: User): Observable<any> {
        return this.http.post(`${url}/auth/login`, user);
    }

    register(user: any): Observable<GenericResponse<string>> {
        return this.http.post<GenericResponse<string>>(
            `${url}/auth/applicant/add`,
            user
        );
    }

    userRegister(user: any): any {
        console.log(user);
        return this.http.post<GenericResponse<string>>(
            `${url}/auth/register`,
            user
        );
    }

    forgetPassword(data: any): Observable<any> {
        return this.http.post<GenericResponse<string>>(
            `${url}/auth/forgotpassword`,
            data
        );
    }

    resetPassword(data: any): Observable<any> {
        return this.http.post<GenericResponse<string>>(
            `${url}/auth/resetpassword`,
            data
        );
    }

    logout(): void {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem('topNavData');
        localStorage.removeItem('topNavParent');
        localStorage.removeItem('isExamCommitteeChairman');
        // this.router.navigate(["/auth/login"]);
        localStorage.clear();
        window.location.href = "/";
    }

    getMe(): Observable<any> {
        return this.http.get(`${url}/auth/me`);
    }

    getProfileImage(name: string): any {
        return this.http.get(`${profileImage}/${name}`);
    }

    updateProfile(profile: any): any {
        return this.http.put(`${url}/auth/me`, profile);
    }

    uploadMyProfile(file: FormData): any {
        return this.http.post(`${url}/auth/me/profile-image`, file);
    }

    validateRoles(roles: any) {
        if (this.getUser()) {
            const userRoles: Set<string> = new Set(this.user.roles);
            const matchedRoles = roles.filter((r: any) => userRoles.has(r));

            if (matchedRoles.length > 0) {
                return true;
            }
        }

        return false;
    }

    setToken(token: string) {
        this.token = token;
        // this.user = user;
        // localStorage.setItem("user", JSON.stringify(this.user));
        localStorage.setItem("token", this.token);
    }

    setUser(user: any) {
        this.loginUser.next(user);
    }

    getToken() {
        if (!this.token) {
            const token = localStorage.getItem("token");
            if (token) {
                this.token = token;
                return token;
            }
        }
        return this.token;
    }

    tokenExpired() {
        let token = this.getToken();
        if (token) {
            const expiry = JSON.parse(atob(token.split(".")[1])).exp;
            return Math.floor(new Date().getTime() / 1000) >= expiry;
        }
        return false;
    }

    getUser(): any {
        const user = JSON.parse(localStorage.getItem("user") as string);
        if (user) {
            this.user = user;
            return user;
        }

        return null;
    }

    getRoles() {
        const user: any = JSON.parse(localStorage.getItem("user") as string);
        if (user) {
            return user.roles;
        }
    }

    isUser() {
        if (
            this.getRoles().includes("USER") &&
            !this.getRoles().includes("STUDENT") &&
            !this.getRoles().includes("TEACHER") &&
            !this.getRoles().includes("ADMIN") &&
            !this.getRoles().includes("APPLICANT") &&
            !this.getRoles().includes("COUNSELOR")
        ) {
            return true;
        }
        return false;
    }

    isAdmin() {
        if (this.getUser()) {
            const foundRole = this.getUser().roles.find(
                (e: string) => e === "ADMIN"
            );
            if (foundRole) {
                return true;
            }
            return false;
        }

        return false;
    }

    isStudent() {
        if (this.getUser()) {
            const foundRole = this.getUser().roles.find((e: any) => e === "STUDENT");
            if (foundRole) {
                return true;
            }
            return false;
        }

        return false;
    }

    isTeacher() {
        if (this.getUser()) {
            const foundRole = this.getUser().roles.find(
                (e: string) => e === "TEACHER"
            );
            if (foundRole) {
                return true;
            }
            return false;
        }

        return false;
    }

    isApplicant() {
        if (this.getUser()) {
            const foundRole = this.getUser().roles.find(
                (e: string) => e === "APPLICANT"
            );
            if (foundRole) {
                return true;
            }
            return false;
        } else {
            return false;
        }
    }

    isCounselor() {
        if (this.getUser()) {
            const foundRole = this.getUser().roles.find(
                (e: string) => e === "COUNSELOR"
            );
            if (foundRole) {
                return true;
            }
            return false;
        }

        return false;
    }

    hasCommittee(): boolean {
        const user: any = JSON.parse(localStorage.getItem("user") as string);
        return user.hasCommittee;
    }

    isEnrollmentOpen(): Observable<boolean> {
        return this.admissionService
            .getAdmissionEnrollment()
            .pipe(
                map((response) => response.payload?.admissionStatus || false)
            );
    }


    // show-employee-by-user-id
    showEmployeeByUserId(userId: any): Observable<any> {
        return this.http.get(`${url}/auth/show-employee-by-user-id/${userId}`);
    }



    // /find-provost-id-by-another-member-user-id/{userId}
    findProvostIdByAnotherMemberUserId(userId: any): Observable<any> {
        return this.http.get(`${url}/resource/find-provost-id-by-another-member-user-id/${userId}`);
    }
}
