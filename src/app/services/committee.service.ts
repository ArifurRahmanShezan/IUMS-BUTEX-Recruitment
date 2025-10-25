import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url } from "../core/models/API";

@Injectable({
    providedIn: "root",
})
export class CommitteeService {
    constructor(private http: HttpClient) { }

    getCommittees(): Observable<any> {
        return this.http.get(`${url}/committee/committee`);
    }

    getCommittee(id: number): Observable<any> {
        return this.http.get(`${url}/committee/committee/${id}`);
    }

    getCommitteesByUser(userId: number): Observable<any> {
        return this.http.get(
            `${url}/committee/committee-member-with-role-and-committee/${userId}`
        );
    }

    updateCommitteeMember(data: any): Observable<any> {
        return this.http.put(`${url}/committee/committee-member-update`, data);
    }

    geChildCommitteesByParentCommittee(parentId: string): Observable<any> {
        return this.http.get(
            `${url}/committee/child-committee-by-parent-committee/${parentId}`
        );
    }

    getCommitteesByDepartment(departmentId: string): Observable<any> {
        return this.http.get(
            `${url}/committee/committees-by-department/${departmentId}`
        );
    }

    getExamCommitteeByUser(id: number): Observable<any> {
        return this.http.get(`${url}/committee/exam-committee-by-user/${id}`);
    }
    getCentralExamCommitteeByUser(id: number): Observable<any> {
        return this.http.get(`${url}/committee/central-exam-committee-by-user/${id}`);
    }

    getExamCommittees(): Observable<any> {
        return this.http.get(`${url}/committee/all-exam-committee`);
    }

    getAdmissionCommitteeByUser(id: number): Observable<any> {
        return this.http.get(
            `${url}/committee/admission-committee-by-user/${id}`
        );
    }

    getDepartmentsByExamCommittee(id: string): Observable<any> {
        return this.http.get(
            `${url}/committee/department-by-exam-committee/${id}`
        );
    }
    getDepartmentsByCentralCommittee(id: string): Observable<any> {
        return this.http.get(
            `${url}/exam/department-by-exam-session/${id}`
        );
    }

    getStudyProgramByExamCommittee(id: any): Observable<any> {
        return this.http.get(
            `${url}/committee/study-program-by-exam-committee/${id}`
        );
    }

    getStudyProgramsByDepartmentAndExamCommittee(
        departmentId: string,
        id: string
    ): Observable<any> {
        return this.http.get(
            `${url}/committee/study-program-by-department-exam-committee/${departmentId}/${id}`
        );
    }
    getStudyProgramsByDepartmentAndCenterlCommittee(
        departmentId: string,
        id: string
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/study-program-by-department-exam-session/${departmentId}/${id}`
        );
    }

    getStudyProgramPlanByExamCommittee(id: number): Observable<any> {
        return this.http.get(
            `${url}/committee/study-program-academic-plan-by-exam-committee/${id}`
        );
    }

    getAcademicPlansByProgramAndExamCommittee(
        committeeId: string,
        programId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/committee/academic-plan-by-exam-committee-study-program/${committeeId}/${programId}`
        );
    }

    getSemestersByProgramPlanAndExamCommittee(
        programId: string,
        planId: string,
        examCommitteeId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/committee/semester-by-study-program-academic-plan-exam-committee/${programId}/${planId}/${examCommitteeId}`
        );
    }

    getApprovalCommitteeForExamController(): Observable<any> {
        return this.http.get(
            `${url}/committee/exam-controller-committee-approve-able-list`
        );
    }

    approveCommitteeByExamController(id: string, data: any): Observable<any> {
        return this.http.put(
            `${url}/committee/exam-controller-approve-exam-committee/${id}`,
            data
        );
    }

    rejectCommitteeByExamController(id: string): Observable<any> {
        return this.http.get(
            `${url}/committee/exam-controller-reject-exam-committee/${id}`,
            {}
        );
    }

    addNewMemberToCommittee(data: any): Observable<any> {
        return this.http.post(`${url}/committee/committee-member-add`, data);
    }

    postCommittee(data: any): Observable<any> {
        return this.http.post(`${url}/committee/committee-add`, data);
    }

    updateCommittee(data: any, id: number): Observable<any> {
        return this.http.put(`${url}/committee/committee-update/${id}`, data);
    }

    deleteCommittee(id: number): Observable<any> {
        return this.http.delete(`${url}/committee/committee-delete/${id}`);
    }

    // report
    getExaminersBySession(sessionId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/exams-examiner-by-exam-session/${sessionId}`
        );
    }
    lastOfferedSemesterByAcademicPlan(academicPlanId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/last-offered-semester-by-academic-plan/${academicPlanId}`
        );
    }





    // academic-plan-by-study-program-exam-session/{studyProgramId}/{examSessionId}
    getAcademicPlanByStudyProgramAndExamSessionByCenterlCommittee(studyProgramId: string, examSessionId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/academic-plan-by-study-program-exam-session/${studyProgramId}/${examSessionId}`
        );
    }

    // semester-by-study-program-academic-plan-exam-session/{studyProgramId}/{academicPlanId}/{examSessionId}
    getSemesterByStudyProgramAndAcademicPlanAndExamSessionByCenterlCommittee(studyProgramId: string, academicPlanId: string, examSessionId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/semester-by-study-program-academic-plan-exam-session/${studyProgramId}/${academicPlanId}/${examSessionId}`
        );
    }




    // timetable/find-student-exam-routine-by-study-program-academic-plan-and-semester-and-exam-session/{studyProgramId}/{academicPlanId}/{semesterId}/{examSessionId}
    getTimetableByStudyProgramAndAcademicPlanAndSemesterAndExamSession(studyProgramId: string, academicPlanId: string, semesterId: string, examSessionId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/find-student-exam-routine-by-study-program-academic-plan-and-semester-and-exam-session/${studyProgramId}/${academicPlanId}/${semesterId}/${examSessionId}`
        );
    }



    // {{baseurl}}/committee/committee-members-by-committee-and-user/1/1
    getCommitteeMembersByCommitteeAndUser(committeeId: string, userId: string): Observable<any> {
        return this.http.get(
            `${url}/committee/committee-members-by-committee-and-user/${committeeId}/${userId}`
        );
    }



    // timetable/total-attended-students-by-academic-plan-semester-subject/{academicPlanId}/{semesterId}/{subjectId} 
    totalAttendedStudentsByAcademicPlanAndSemesterAndSubject(academicPlanId: string, semesterId: string, subjectId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/total-attended-students-by-academic-plan-semester-subject/${academicPlanId}/${semesterId}/${subjectId}`
        );
    }



    // /semester-offer/find-by-academic-plan/{academicPlanId}
    getAllSemesterOfferedByAcademicPlan(id: any): Observable<any> {
        return this.http.get(
            `${url}/faculty/semester-offer/find-by-academic-plan/${id}`
        );
    }

    getExamSessionsBySemester(semesterId: string): Observable<any> {
        return this.http.get<any>(
            `${url}/exam/exam-session-program-by-semester/${semesterId}`
        );
    }


    getCommitteeMemberByCommitteeUser(committeeId: string, userId: string): Observable<any> {
        return this.http.get(`${url}/committee/committee-member-by-committee-user/${committeeId}/${userId}`);
    }
}
