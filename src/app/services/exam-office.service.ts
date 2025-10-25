import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url } from "../core/models/API";

@Injectable({
    providedIn: "root",
})
export class ExamOfficeService {
    constructor(private http: HttpClient) { }

    // clearance policy
    getClearancePolicyList(): Observable<any> {
        return this.http.get(`${url}/accounting/clearance-policies`);
    }
    getClearancePolicy(clearanceId: string): Observable<any> {
        return this.http.get(
            `${url}/accounting/clearance-policy/${clearanceId}`
        );
    }
    createClearancePolicy(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/add/clearance-policy`, data);
    }
    updateClearancePolicy(clearanceId: string, data: any): Observable<any> {
        return this.http.put(
            `${url}/accounting/clearance-policy/update/${clearanceId}`,
            data
        );
    }
    deleteClearancePolicy(clearanceId: string): Observable<any> {
        return this.http.delete(
            `${url}/accounting/clearance-policy/delete/${clearanceId}`
        );
    }

    getStudentListByPolicy(policyId: string): Observable<any> {
        return this.http.get(
            `${url}/accounting/get-student-according-to-clearance-policy/${policyId}`
        );
    }
    // paper challenge
    getChallengesPapers(): Observable<any> {
        return this.http.get(
            `${url}/auth/student-challenge-paper-by-exam-controller`
        );
    }

    getOneChallengePaper(paperId: string): Observable<any> {
        return this.http.get(`${url}/auth/student-challenge-paper/${paperId}`);
    }

    assignTeacherToPaper(paperId: string, data: any): Observable<any> {
        return this.http.put(
            `${url}/auth/assign-teacher-for-challenged-paper/${paperId}`,
            data
        );
    }

    // tabulation sheet
    getTabulationsSheet(): Observable<any> {
        return this.http.get(`${url}/exam/tabulation-sheet`);
    }

    getSingleTabulationsSheet(id: number): Observable<any> {
        return this.http.get(`${url}/exam/tabulation-sheet/${id}`);
    }

    putTabulationsSheet(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/exam/tabulation-sheet-update/${id}`, data);
    }

    getTabulationSheetByPlanAndSemester(
        academicPlanId: string,
        semesterId: string,
        examSessionId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/find-by-academic-plan-and-and-semester-exam-session-department-head-approve/${academicPlanId}/${semesterId}/${examSessionId}`
        );
    }

    generateTabulationSheet(data: any): Observable<any> {
        return this.http.post(`${url}/exam/tabulation-sheet-store`, data);
    }

    tabulationSheetResultPublish(tabulationSheetId: string): Observable<any> {
        return this.http.put(
            `${url}/exam/result-publish-by-tabulation-sheet/${tabulationSheetId}`,
            {}
        );
    }

    approveTabulationSheetByExamController(
        program: number,
        plan: number,
        semester: number,
        data: any
    ): Observable<any> {
        return this.http.put(
            `${url}/exam/tabulation-sheet-approve-by-exam-controller-study-program-academic-plan-semester/${program}/${plan}/${semester}`,
            data
        );
    }

    getProgramWiseTabulationSheet(programId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/student-program-wise-all-information/${programId}`
        );
    }

    getSemesterWiseTabulationSheet(semesterId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/student-semester-wise-all-information/${semesterId}`
        );
    }
    getSemesterWiseTabulationSheetWithType(
        semesterId: string,
        type: String
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/student-semester-wise-all-information-with-type/${semesterId}/${type}`
        );
    }

    getStudentSemesterReport(
        departmentId: string,
        semesterId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/report/semester-wise-result-by-department-semester/${departmentId}/${semesterId}`,
            { responseType: "blob" }
        );
    }

    getSubjectWiseTabulationSheet(
        examSessionId: string,
        departmentId: string,
        plan: string,
        semesterId: string,
        subjectId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/mark-sheet-by-exam-session-department-academic-plan-semester-subject/${examSessionId}/${departmentId}/${plan}/${semesterId}/${subjectId}`
        );
    }
    getExamSessionByStudyProgramAndAcademicPlanAndSemester(
        studyProgramId: string,
        plan: string,
        semesterId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/exam-session-list-study-program-academic-plan-semester/${studyProgramId}/${plan}/${semesterId}`
        );
    }

    downloadAverageMarkSheet(
        examSessionId: string,
        departmentId: string,
        plan: string,
        semesterId: string,
        subjectId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/report/average-mark-sheet-by-exam-session-department-academic-plan-semester-subject/${examSessionId}/${departmentId}/${plan}/${semesterId}/${subjectId}`,
            { responseType: "blob" }
        );
    }

    // assessment type
    getAssessmentTypeList(): Observable<any> {
        return this.http.get(`${url}/exam/assessment-type`);
    }
    getInternalAssessmentTypeList(): Observable<any> {
        return this.http.get(`${url}/exam/internal-assessment-type`);
    }
    getFinalAssessmentTypeList(): Observable<any> {
        return this.http.get(`${url}/exam/final-assessment-type`);
    }
    getAssessmentType(typeId: number): Observable<any> {
        return this.http.get(`${url}/exam/assessment-type/${typeId}`);
    }
    postAssessmentType(data: any): Observable<any> {
        return this.http.post(`${url}/exam/assessment-type/add`, data);
    }
    putAssessmentType(data: any, typeId: number): Observable<any> {
        return this.http.put(
            `${url}/exam/assessment-type/update/${typeId}`,
            data
        );
    }
    deleteAssessmentType(typeId: number): Observable<any> {
        return this.http.delete(`${url}/exam/assessment-type/delete/${typeId}`);
    }

    getAssessmentList(): Observable<any> {
        return this.http.get(`${url}/exam/assessment`);
    }
    getAssessment(assessmentId: number): Observable<any> {
        return this.http.get(`${url}/exam/assessment/${assessmentId}`);
    }
    postAssessment(data: any): Observable<any> {
        return this.http.post(`${url}/exam/assessment/add`, data);
    }
    // putAssessment(data: any, typeId: number): Observable<any> {
    //     return this.http.put(
    //         `${url}/exam/assessment-type/update/${typeId}`,
    //         data
    //     );
    // }
    deleteAssessment(assessmentId: number): Observable<any> {
        return this.http.delete(
            `${url}/exam/assessment/delete/${assessmentId}`
        );
    }
}
