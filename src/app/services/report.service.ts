import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url } from "../core/models/API";
@Injectable({
    providedIn: "root",
})
export class ReportService {
    constructor(private http: HttpClient) {}

    /**
     * Download report as pdf
     * @param response Http Response
     * @param fileName string
     * @returns void
     */
    downloadReport(response: any, fileName: string): void {
        const blob = new Blob([response], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        // Create a link element and trigger a click to start download
        const a = document.createElement("a");
        a.href = url;
        a.download = `${fileName}.pdf`;
        document.body.appendChild(a);
        a.click();

        // Clean up
        window.URL.revokeObjectURL(url);
    }

    /**
     * Get registered students
     * Department Head
     * @param args Object
     * @returns Promise
     */
    getRegisteredStudentsReport(args: any): Observable<any> {
        return this.http.get(
            `${url}/auth/report/registered-student-by-department-study-program-academic-plan-semester/${args?.departmentId}/${args?.studyProgramId}/${args?.academicPlanId}/${args?.semesterId}`,
            { responseType: "blob" }
        );
    }

    /**
     * Get non-registered students
     * Department Head
     * @param args Object
     * @returns Promise
     */
    getNonRegisteredStudentsReport(args: any): Observable<any> {
        return this.http.get(
            `${url}/auth/report/non-registered-student-by-department-study-program-academic-plan-semester/${args?.departmentId}/${args?.studyProgramId}/${args?.academicPlanId}/${args?.semesterId}`,
            { responseType: "blob" }
        );
    }

    /**
     * Get students payment
     * Accounting
     * @param args Object
     * @returns Promise
     */
    getStudentsPaymentReport(args: any): Observable<any> {
        return this.http.get(
            `${url}/accounting/report/student-fees-by-department-study-program-academic-plan-semester/${args?.departmentId}/${args?.studyProgramId}/${args?.academicPlanId}/${args?.semesterId}`,
            { responseType: "blob" }
        );
    }
}
