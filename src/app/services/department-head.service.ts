import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { url } from "../core/models/API";
@Injectable({
    providedIn: "root",
})
export class DepartmentHeadService {
    // nav data
    public navDataParentName: BehaviorSubject<string> = new BehaviorSubject("");

    constructor(private http: HttpClient) { }

    // department
    getDepartment(departmentHeadId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/show-department-by-department-head/${departmentHeadId}`
        );
    }
    // faculty
    getFaculty(departmentHeadId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/show-faculty-by-department-head/${departmentHeadId}`
        );
    }
    // marks approval api end point
    getStudyProgramList(departmentHeadId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/study-program-by-department-head/${departmentHeadId}`
        );
    }

    getSubjectByStudyProgram(programId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/open-curriculum-subject/by/study-program/${programId}`
        );
    }

    getPendingResultBySubject(subjectId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/show-pending-final-marks/${subjectId}`
        );
    }

    subjectResultApproval(data: any): Observable<any> {
        return this.http.put(`${url}/exam/approve-student-final-marks`, data);
    }

    // paper challenge
    getChallengePapers(departmentHeadId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/student-challenge-paper-by-department-head/${departmentHeadId}`
        );
    }
    approveChallengePaper(Id: string, remark: any): Observable<any> {
        return this.http.put(
            `${url}/auth/student-challenge-paper-approve-by-department-head/${Id}`,
            remark
        );
    }
    rejectChallengePaper(Id: string, remark: any): Observable<any> {
        return this.http.put(
            `${url}/auth/student-challenge-paper-reject-by-department-head/${Id}`,
            remark
        );
    }

    // teacher subject
    getTeacherSubject(departmentHeadId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/get-initial-teacher-subject-list-for-department-head/${departmentHeadId}`
        );
    }
    approveTeacherSubject(data: any): Observable<any> {
        return this.http.put(
            `${url}/faculty/teacher-subject-approve-by-department-head-with-teacher-subject-initial/${data.id}`,
            data
        );
    }

    rejectTeacherSubject(data: any): Observable<any> {
        return this.http.put(
            `${url}/faculty/teacher-subject-reject-by-department-head-with-teacher-subject-initial/${data.id}`,
            data
        );
    }

    // subject assessment
    getSubjectAssessmentList(): Observable<any> {
        return this.http.get(`${url}/exam/subject-assessment`);
    }
    getSubjectAssessmentsByHead(headId: number): Observable<any> {
        return this.http.get(
            `${url}/exam/subject-assessment-by-department-head/${headId}`
        );
    }
    getSubjectAssessment(id: number): Observable<any> {
        return this.http.get(`${url}/exam/subject-assessment/${id}`);
    }
    storeSubjectAssessment(data: any): Observable<any> {
        return this.http.post(`${url}/exam/subject-assessment-store`, data);
    }
    deleteSubjectAssessment(id: number): Observable<any> {
        return this.http.get(`${url}/exam/subject-assessment-delete/${id}`);
    }


    // {{baseUrl}}/auth//assign-co-ordination-officer
    assignCoOrdinationOfficer(data: any): Observable<any> {
        return this.http.post(`${url}/auth/assign-co-ordination-officer`, data);
    }
    // /auth/co-ordination-officer-by-department-head/1
    getCoOrdinationOfficerByDepartmentHead(headId: number): Observable<any> {
        return this.http.get(
            `${url}/auth/co-ordination-officer-by-department-head/${headId}`
        );
    }
    // {{baseUrl}}/auth/co-ordination-officer-status-update/1
    updateCoOrdinationOfficerStatus(id: number): Observable<any> {
        return this.http.put(
            `${url}/auth/co-ordination-officer-status-update/${id}`, {}
        );
    }


    // {{baseUrl}}/auth/employee-by-department-id/1
    getEmployeeByDepartmentId(departmentId: number): Observable<any> {
        return this.http.get(
            `${url}/auth/employee-by-department-id/${departmentId}`
        );
    }

    // /auth/permissions-by-co-ordination-officer/3
    getPermissionsByCoOrdinationOfficer(id: number): Observable<any> {
        return this.http.get(
            `${url}/auth/permissions-by-co-ordination-officer/${id}`
        );
    }

    // /auth/delete-co-ordination-officer-permission/1
    deleteCoOrdinationOfficerPermission(id: number): Observable<any> {
        return this.http.delete(
            `${url}/auth/delete-co-ordination-officer-permission/${id}`
        );
    }


    // /auth/add-co-ordination-officer-permission-by-co-ordination-officer/1
    addCoOrdinationOfficerPermission(data: any, id: number): Observable<any> {
        return this.http.put(
            `${url}/auth/add-co-ordination-officer-permission-by-co-ordination-officer/${id}`,
            data
        );
    }

    getPromotionApplicationsByDepartmentHead(departmentHeadId: number): Observable<any> {
        return this.http.get(`${url}/auth/promotion-application-by-department-head/${departmentHeadId}`);
    }

    //promotion-application-by-department-head-approve/{id}
    approvePromotionApplicationByDepartmentHead(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/auth/promotion-application-by-department-head-approve/${id}`, data);
    }

    ///promotion-application-by-department-head-reject/{id}
    rejectPromotionApplicationByDepartmentHead(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/auth/promotion-application-by-department-head-reject/${id}`, data);
    }
    ///all-promotion-application
    getAllPromotionApplications(): Observable<any> {
        return this.http.get(`${url}/auth/all-promotion-application`);
    }

    //promotion-application-by-registrar-approve/{id}
    approvePromotionApplicationByRegistrar(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/auth/promotion-application-by-registrar-approve/${id}`, data);
    }

    ///promotion-application-by-registrar-reject/{id}
    rejectPromotionApplicationByRegistrar(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/auth/promotion-application-by-registrar-reject/${id}`, data);
    }

    ///promotion-application-by-vice-chancellor-approve/{id}
    approvePromotionApplicationByViceChancellor(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/auth/promotion-application-by-vice-chancellor-approve/${id}`, data);
    }

    //promotion-application-by-vice-chancellor-reject/{id}
    rejectPromotionApplicationByViceChancellor(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/auth/promotion-application-by-vice-chancellor-reject/${id}`, data);
    }

    ///resignation-application-by-department-head/{departmentHeadId}
    getResignationApplicationsByDepartmentHead(departmentHeadId: number): Observable<any> {
        return this.http.get(`${url}/auth/resignation-application-by-department-head/${departmentHeadId}`);

    }

    ///show-department-head-by-user/{userId}
    getDepartmentHeadByUserId(userId: number): Observable<any> {
        return this.http.get(`${url}/auth/show-department-head-by-user/${userId}`);
    }

    ///rrp-application-by-department-head-approve/{id} for approve
    approveRrpApplicationByDepartmentHead(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/auth/rrp-application-by-department-head-approve/${id}`, data);
    }

    ///rrp-application-by-department-head-reject/{id}
    rejectRrpApplicationByDepartmentHead(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/auth/rrp-application-by-department-head-reject/${id}`, data);
    }

    ///update-rrp-application-status/{id}
    updateRrpApplicationStatus(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/auth/update-rrp-application-status/${id}`, data);
    }

    //retirement-application-by-department-head/{departmentHeadId}
    getRetirementApplicationsByDepartmentHead(departmentHeadId: number): Observable<any> {
        return this.http.get(`${url}/auth/retirement-application-by-department-head/${departmentHeadId}`);
    }

    ///prl-application-by-department-head/{departmentHeadId}
    getPrlApplicationsByDepartmentHead(departmentHeadId: number): Observable<any> {
        return this.http.get(`${url}/auth/prl-application-by-department-head/${departmentHeadId}`);
    }


    // /all-resignation-application
    getAllResignationApplications(): Observable<any> {
        return this.http.get(`${url}/auth/all-resignation-application`);
    }

    // /all-retirement-application
    getAllRetirementApplications(): Observable<any> {
        return this.http.get(`${url}/auth/all-retirement-application`);
    }

    ///all-prl-application
    getAllPrlApplications(): Observable<any> {
        return this.http.get(`${url}/auth/all-prl-application`);
    }

    ///rrp-application-by-registrar-approve/{id} for put
    approveRrpApplicationByRegistrar(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/auth/rrp-application-by-registrar-approve/${id}`, data);
    }

    ///rrp-application-by-registrar-reject/{id} for put
    rejectRrpApplicationByRegistrar(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/auth/rrp-application-by-registrar-reject/${id}`, data);
    }


    ///rrp-application-by-vice-chancellor-approve/{id}
    approveRrpApplicationByViceChancellor(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/auth/rrp-application-by-vice-chancellor-approve/${id}`, data);
    }

    ///rrp-application-by-vice-chancellor-reject/{id}
    rejectRrpApplicationByViceChancellor(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/auth/rrp-application-by-vice-chancellor-reject/${id}`, data);
    }



    // {{baseurl}}/auth/registrar-office-officer-by-registrar/1
    getRegistrarOfficeOfficerByRegistrar(registrarId: number): Observable<any> {
        return this.http.get(
            `${url}/auth/registrar-office-officer-by-registrar/${registrarId}`
        );
    }

    // {{baseurl}}/auth/assign-registrar-office-officer
    assignRegistrarOfficeOfficer(data: any): Observable<any> {
        return this.http.post(`${url}/auth/assign-registrar-office-officer`, data);
    }

    // {{baseurl}}/auth/registrar-office-officer-status-update/1
    updateRegistrarOfficeOfficerStatus(id: number): Observable<any> {
        return this.http.put(
            `${url}/auth/registrar-office-officer-status-update/${id}`, {}
        );
    }

    // {{baseurl}}/auth/delete-registrar-office-officer-permission/1
    deleteRegistrarOfficeOfficerPermission(id: number): Observable<any> {
        return this.http.delete(
            `${url}/auth/delete-registrar-office-officer-permission/${id}`
        );
    }

    // {{baseurl}}/auth/add-registrar-office-officer-permission-by-registrar-office-officer/1
    addRegistrarOfficeOfficerPermission(data: any, id: number): Observable<any> {
        return this.http.put(
            `${url}/auth/add-registrar-office-officer-permission-by-registrar-office-officer/${id}`,
            data
        );
    }

    // {{baseurl}}/auth/permissions-by-registrar-office-officer/1
    getPermissionsByRegistrarOfficeOfficer(id: number): Observable<any> {
        return this.http.get(
            `${url}/auth/permissions-by-registrar-office-officer/${id}`
        );
    }

    // {{baseurl}}/auth/registrar-office-officer-by-user/1
    getRegistrarOfficeOfficerByUser(userId: number): Observable<any> {
        return this.http.get(
            `${url}/auth/registrar-office-officer-by-user/${userId}`
        );
    }





    // exam office 

    // {{baseurl}}/auth/exam-office-officer-by-exam-controller/1
    getExamOfficeOfficerByExamController(examControllerId: number): Observable<any> {
        return this.http.get(
            `${url}/auth/exam-office-officer-by-exam-controller/${examControllerId}`
        );
    }

    // {{baseurl}}/auth/exam-office-officers
    getExamOfficeOfficers(): Observable<any> {
        return this.http.get(
            `${url}/auth/exam-office-officers`
        );
    }

    // {{baseurl}}/auth/exam-office-officer-by-user/1
    getExamOfficeOfficerByUser(userId: number): Observable<any> {
        return this.http.get(
            `${url}/auth/exam-office-officer-by-user/${userId}`
        );
    }

    // {{baseurl}}/auth/exam-office-officer/1
    getExamOfficeOfficer(id: number): Observable<any> {
        return this.http.get(
            `${url}/auth/exam-office-officer/${id}`
        );
    }

    // {{baseurl}}/auth/permissions-by-exam-office-officer/1
    getPermissionsByExamOfficeOfficer(id: number): Observable<any> {
        return this.http.get(
            `${url}/auth/permissions-by-exam-office-officer/${id}`
        );
    }

    // {{baseurl}}/auth/assign-exam-office-officer
    assignExamOfficeOfficer(data: any): Observable<any> {
        return this.http.post(`${url}/auth/assign-exam-office-officer`, data);
    }

    // {{baseurl}}/auth/exam-office-officer-status-update/1
    updateExamOfficeOfficerStatus(id: number): Observable<any> {
        return this.http.put(
            `${url}/auth/exam-office-officer-status-update/${id}`, {}
        );
    }

    // {{baseurl}}/auth/add-exam-office-officer-permission-by-exam-office-officer/1
    addExamOfficeOfficerPermission(data: any, id: number): Observable<any> {
        return this.http.put(
            `${url}/auth/add-exam-office-officer-permission-by-exam-office-officer/${id}`,
            data
        );
    }

    // {{baseurl}}/auth/delete-exam-office-officer-permission/1
    deleteExamOfficeOfficerPermission(id: number): Observable<any> {
        return this.http.delete(
            `${url}/auth/delete-exam-office-officer-permission/${id}`
        );
    }



    // /grouped-teacher-subject-by-department-head/{departmentHeadId}
    getGroupedTeacherSubjectByDepartmentHead(departmentHeadId: number): Observable<any> {
        return this.http.get(
            `${url}/faculty/grouped-teacher-subject-by-department-head/${departmentHeadId}`
        );
    }


    // teacher-subject-by-department-head
    getTeacherSubjectByDepartmentHead(departmentHeadId: number): Observable<any> {
        return this.http.get(
            `${url}/faculty/teacher-subject-by-department-head/${departmentHeadId}`
        );
    }



    // http://localhost:8080/api/v1/resource/hall-management-by-user/7269
    getHallManagementByUser(userId: number): Observable<any> {
        return this.http.get(
            `${url}/resource/hall-management-by-user/${userId}`
        );
    }

}
