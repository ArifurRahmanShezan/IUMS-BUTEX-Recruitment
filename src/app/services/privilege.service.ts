import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { url } from "../core/models/API";

@Injectable({
    providedIn: "root",
})
export class PrivilegeService {
    constructor(private http: HttpClient) {}

    getAllPrivileges():Observable<any>{
        return this.http.get(`${url}/admission/applicant/privilege`);
    }

    getSinglePrivilege(id: string) : Observable<any>{
        return this.http.get(`${url}/admission/applicant/privilege/${id}`);
    }

    createPrivilege(privilege: any) {
        return this.http.post(
            `${url}/admission/applicant/privilege/add`,
            privilege
        );
    }

    updatePrivilege(id:string, privilege: any) {
        return this.http.put(
            `${url}/admission/applicant/privilege/update/${id}`,
            privilege
        );
    }

    deletePrivilege(id: any) {
        return this.http.delete(
            `${url}/admission/applicant/privilege/delete/${id}`
        );
    }
}
