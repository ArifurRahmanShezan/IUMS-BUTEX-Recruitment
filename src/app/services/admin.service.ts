import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Admin } from "../core/models/Admin";
import { url } from "../core/models/API";
import { GenericResponse } from "../core/models/GenericResponse";
import { Student } from "../core/models/Student";
import { Teacher } from "../core/models/Teacher";
import { User } from "../core/models/User";
import { AddAdminRequest } from "../core/requests/AddAdminRequst";
import { AddStudentOnYearRequest } from "../core/requests/AddStudentOnYearRequest";
import { AddStudentRequest } from "../core/requests/AddStudentRequest";
import { AddTeacherRequest } from "../core/requests/AddTeacherRequest";

@Injectable({
    providedIn: "root",
})
export class AdminService {
    constructor(private http: HttpClient) { }

    // getAllUsers(): Observable<GenericResponse<User[]>> {
    //     return this.http.get<GenericResponse<User[]>>(`${url}/auth/user`);
    // }

    userGetAll(): Observable<any> {
        return this.http.get(`${url}/auth/user`);
    }

    getAdministrativeUserList(): Observable<any> {
        return this.http.get(`${url}/auth/only-administrative-user`);
    }

    userGetForResource(): Observable<any> {
        return this.http.get(`${url}/auth/user-for-resource`);
    }

    getOne(id: number): Observable<GenericResponse<User>> {
        return this.http.get<GenericResponse<User>>(`${url}/auth/user/${id}`);
    }

    getAllAdmins(): Observable<GenericResponse<Admin[]>> {
        return this.http.get<GenericResponse<Admin[]>>(`${url}/auth/admin`);
    }
    getOneAdmin(id: number): Observable<GenericResponse<Admin>> {
        return this.http.get<GenericResponse<Admin>>(`${url}/auth/admin/${id}`);
    }

    addAdmin(request: AddAdminRequest): Observable<GenericResponse<string>> {
        return this.http.post<GenericResponse<string>>(
            `${url}/auth/admin`,
            request
        );
    }

    deleteAdmin(id: number): Observable<GenericResponse<string>> {
        return this.http.delete<GenericResponse<string>>(
            `${url}/auth/admin/${id}`
        );
    }

    assignUserPermission(data: any): Observable<GenericResponse<string>> {
        return this.http.post<GenericResponse<string>>(
            `${url}/auth/assign-user`,
            data
        );
    }

    // provost
    getProvosts(): Observable<any> {
        return this.http.get<any>(`${url}/auth/provost`);
    }

    // /assistant-provost
    getAssistantProvosts(): Observable<any> {
        return this.http.get<any>(`${url}/auth/assistant-provost`);
    }


    // hall administrative employee
    getAdministrativeHallEmployees(hallId: any): Observable<any> {
        return this.http.get<any>(`${url}/auth/find-administrative-employee-hall-by-hall-id/${hallId}`);
    }




    getWardens(): Observable<any> {
        return this.http.get<any>(`${url}/auth/warden`);
    }
    getHouseTutors(): Observable<any> {
        return this.http.get<any>(`${url}/auth/house-tutor`);
    }
    getAssistantHouseTutors(): Observable<any> {
        return this.http.get<any>(`${url}/auth/assistant-house-tutor`);
    }
    // employee
    getEmployeeList(): Observable<any> {
        return this.http.get<any>(`${url}/auth/employee`);
    }
    getSingleEmployee(id: number): Observable<any> {
        return this.http.get<any>(`${url}/auth/employee/${id}`);
    }
    getEmployeeByDepartmentAndType(data: any): Observable<any> {
        return this.http.post<any>(
            `${url}/auth/employee-by-department-id-and-type`,
            data
        );
    }
    getEmployeeByDepartmentAndTypeForCommittee(data: any): Observable<any> {
        return this.http.post<any>(
            `${url}/auth/employee-by-department-id-and-type-for-committee`,
            data
        );
    }

    addEmployee(employee: any): Observable<any> {
        return this.http.post<any>(`${url}/auth/employee-add`, employee);
    }
    updateEmployee(employee: any, id: number): Observable<any> {
        return this.http.put<any>(
            `${url}/auth/employee-update/${id}`,
            employee
        );
    }

    // student
    getStudentAcademicInfo(data: any): Observable<any> {
        return this.http.post<any>(
            `${url}/auth/student-academic-info-by-board-info`,
            data
        );
    }
    studentRegistration(data: any): Observable<any> {
        return this.http.post<any>(
            `${url}/auth/register-user-for-student`,
            data
        );
    }
    addStudentInformation(data: any): Observable<any> {
        return this.http.post<any>(`${url}/auth/student`, data);
    }

    getNumberOffStudentsForExamRoutine(
        examSessionId: number,
        academicPlanId: number,
        subjectId: number
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/number-of-registered-student-by-academic-plan-subject/${examSessionId}/${academicPlanId}/${subjectId}`
        );
    }

    // teacher list

    getAllTeachers(): Observable<GenericResponse<Teacher[]>> {
        return this.http.get<GenericResponse<Teacher[]>>(`${url}/auth/teacher`);
    }

    getTeacherList(): Observable<any> {
        return this.http.get(`${url}/auth/teacher`);
    }





    employeeForCommitteeInternalMember(): Observable<any> {
        return this.http.get(`${url}/auth/employee-for-committee-internal-member`);
    }

    // /auth/teacher-by-user-id
    getTeacherByUserId(userId: string): Observable<any> {
        return this.http.get(`${url}/auth/teacher-by-user-id/${userId}`);
    }

    getOneTeacher(id: string): Observable<GenericResponse<any>> {
        return this.http.get<GenericResponse<any>>(`${url}/auth/teacher/${id}`);
    }

    getTeachersByDepartmentHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/teacher-by-department-head/${headId}`
        );
    }

    getTeachersByDepartment(departmentId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/teacher-by-department/${departmentId}`
        );
    }

    getExamRoutineInvigilators(data: any): Observable<any> {
        return this.http.get(
            `${url}/auth/find-invigilator-by-department-academic-plan-semester/${data.departmentId}/${data.academicPlanId}/${data.semesterId}`
        );
    }

    getSpecialistTeacherBySubject(
        subjectId: number
    ): Observable<GenericResponse<any>> {
        return this.http.get<GenericResponse<any>>(
            `${url}/auth/subject-specialist-teacher-by-subject/${subjectId}`
        );
    }

    getThirdExaminersByExamCommitteeAndSubject(
        committeeId: string,
        subjectId: string
    ): Observable<any> {
        return this.http.get<any>(
            `${url}/auth/get-third-examiner-by-exam-committee-and-subject/${committeeId}/${subjectId}`
        );
    }

    getThirdExaminersByCommittee(committeeId: string): Observable<any> {
        return this.http.get<any>(
            `${url}/exam/third-examiner-by-exam-committee/${committeeId}`
        );
    }

    getThirdExaminersForController(): Observable<any> {
        return this.http.get<any>(
            `${url}/exam/third-examiner-student-for-exam-controller`
        );
    }

    getThirdExaminerStudents(data: any): Observable<any> {
        return this.http.get<any>(
            `${url}/exam/third-examiner-student-by-exam-committee-teacher-academic-plan-subject-evaluation/${data.examCommitteeId}/${data.thirdExaminerId}/${data.academicPlanId}/${data.subjectId}/${data.evaluationId}`
        );
    }

    approveThirdExaminer(data: any): Observable<any> {
        return this.http.put<any>(
            `${url}/exam/third-examiner-approve-by-exam-committee-teacher-academic-plan-subject-evaluation/${data.examCommitteeId}/${data.thirdExaminerId}/${data.academicPlanId}/${data.subjectId}/${data.evaluationId}`,
            {}
        );
    }

    rejectThirdExaminer(data: any): Observable<any> {
        return this.http.put<any>(
            `${url}/exam/third-examiner-reject-by-exam-committee-teacher-academic-plan-subject-evaluation/${data.examCommitteeId}/${data.thirdExaminerId}/${data.academicPlanId}/${data.subjectId}/${data.evaluationId}`,
            {}
        );
    }

    getTeacherBySubjectAndPlan(
        subjectId: number,
        planId: number
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/teacher-subject-find-by-subject-and-academic-plan/${subjectId}/${planId}`
        );
    }

    updateTeacher(data: any, id: number): Observable<any> {
        return this.http.put(`${url}/auth/teacher-update/${id}`, data);
    }

    addTeacher(
        request: AddTeacherRequest
    ): Observable<GenericResponse<string>> {
        return this.http.post<GenericResponse<string>>(
            `${url}/auth/teacher`,
            request
        );
    }

    deleteTeacher(id: number): Observable<GenericResponse<string>> {
        return this.http.delete<GenericResponse<string>>(
            `${url}/auth/teacher/${id}`
        );
    }

    // staff api end point

    getAllStaff(): Observable<GenericResponse<any>> {
        return this.http.get<GenericResponse<any>>(`${url}/auth/staff`);
    }

    getAllStaffByDepartment(
        departmentId: string
    ): Observable<GenericResponse<any>> {
        return this.http.get<GenericResponse<any>>(`${url}/auth/staff-by-department/${departmentId}`);
    }

    getOneStaff(id: string): Observable<GenericResponse<any>> {
        return this.http.get<GenericResponse<any>>(`${url}/auth/staff/${id}`);
    }

    updateStaff(data: any, staffId: string): Observable<any> {
        return this.http.put(`${url}/auth/staff/update/${staffId}`, data);
    }

    addStaff(data: any): Observable<GenericResponse<any>> {
        return this.http.post<GenericResponse<any>>(`${url}/auth/staff`, data);
    }

    deleteStaff(id: string): Observable<GenericResponse<any>> {
        return this.http.delete<GenericResponse<any>>(
            `${url}/auth/staff/${id}`
        );
    }

    getStaffIdCard(staffId: string): Observable<any> {
        return this.http.get(`${url}/auth/staff/id-card/${staffId}`);
    }

    // student api's
    getAllStudents(): Observable<any> {
        return this.http.get(`${url}/auth/student`);
    }

    getStudentsForRegister(): Observable<any> {
        return this.http.get(
            `${url}/auth/student-list-with-payment-for-registrar`
        );
    }

    getStudentsByAcademicPlan(planId: number): Observable<any> {
        return this.http.get(`${url}/auth/students-by-academic-plan/${planId}`);
    }

    getStudentsByProgramAndBatch(
        programId: string,
        batchId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/students-by-study-program-and-year-of-study/${programId}/${batchId}`
        );
    }

    getStudentsBySemester(semesterId: string): Observable<any> {
        return this.http.get(`${url}/auth/student-by-semester/${semesterId}`);
    }

    getOneStudent(id: string): Observable<any> {
        return this.http.get<GenericResponse<Student>>(
            `${url}/auth/student/${id}`
        );
    }

    getStudentsByPlanSemesterAndSubject(
        planId: string,
        semesterId: string,
        subjectId: String
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/student-subject-by-academic-plan-semester-subject/${planId}/${semesterId}/${subjectId}`
        );
    }

    // parent-student-subject-by-academic-plan-semester-subject
    getStudentsByPlanSemesterAndParentSubject(
        planId: string,
        semesterId: string,
        subjectId: String
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/parent-student-subject-by-academic-plan-semester-subject/${planId}/${semesterId}/${subjectId}`
        );
    }



    getOneStudentByStudentId(id: string): Observable<any> {
        return this.http.get<GenericResponse<Student>>(
            `${url}/auth/student-by-student-id/${id}`
        );
    }

    addStudent(student: any): Observable<any> {
        return this.http.post(`${url}/auth/student`, student);
    }

    addStudentAcademicInfo(formData: any): Observable<any> {
        return this.http.post(
            `${url}/auth/add/student/academic/info`,
            formData
        );
    }

    studentProfileUpload(formData: any, id: string): Observable<any> {
        const requestOptions = {
            headers: new HttpHeaders(),
            reportProgress: true,
        };
        return this.http.post(
            `${url}/auth/student-image/${id}`,
            formData,
            requestOptions
        );
    }
    studentSignUpload(formData: any, id: string): Observable<any> {
        const requestOptions = {
            headers: new HttpHeaders(),
            reportProgress: true,
        };
        return this.http.post(
            `${url}/auth/student-signature-image/${id}`,
            formData,
            requestOptions
        );
    }
    studentPrivilegeUpload(formData: any, id: string): Observable<any> {
        const requestOptions = {
            headers: new HttpHeaders(),
            reportProgress: true,
        };
        return this.http.post(
            `${url}/auth/student-privilege-document-image/${id}`,
            formData,
            requestOptions
        );
    }

    updateStudentId(studentId: string, data: any): Observable<any> {
        return this.http.put(
            `${url}/auth/student-id-update/${studentId}`,
            data
        );
    }

    updateStudentById(studentId: string, data: any): Observable<any> {
        return this.http.put(`${url}/auth/student/${studentId}`, data);
    }

    studentHallAssign(data: any): Observable<any> {
        return this.http.put(`${url}/auth/student-hall-assign`, data);
    }

    deleteStudent(id: number): Observable<GenericResponse<string>> {
        return this.http.delete<GenericResponse<string>>(
            `${url}/auth/student/${id}`
        );
    }

    addStudentOnYear(
        request: AddStudentOnYearRequest
    ): Observable<GenericResponse<string>> {
        return this.http.post<GenericResponse<string>>(
            `${url}/faculty/student-on-year`,
            request
        );
    }

    getRegisteredStudentsBySemester(semesterId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/registered-student-for-exam-by-semester/${semesterId}`
        );
    }

    getNonRegisteredStudentsBySemester(semesterId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/non-registered-student-for-exam-by-semester/${semesterId}`
        );
    }

    putDropOutStudents(data: any): Observable<any> {
        return this.http.put(
            `${url}/auth/update-student-drop-out-for-semester`,
            data
        );
    }

    getDropOutStudentsBySemester(semesterId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/drop-out-student-by-semester/${semesterId}`
        );
    }

    getDropOutStudentsByDepartment(departmentId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/drop-out-student-by-department/${departmentId}`
        );
    }

    getHallAttachmentStudents(
        hallId: string,
        batchId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/hall-attachment-of-student-by-building-batch/${hallId}/${batchId}`
        );
    }

    // roles api
    getAllPermission(): Observable<any> {
        return this.http.get(`${url}/auth/all/permission`);
    }

    getAllRoles(): Observable<any> {
        return this.http.get(`${url}/auth/all-permission`);
    }

    //Faculty apis

    facultyGetAll(): Observable<any> {
        return this.http.get(`${url}/faculty`);
    }

    facultyCreate(faculty: Object): Observable<any> {
        // console.log(faculty);
        return this.http.post(`${url}/faculty`, faculty);
    }

    facultyGetOne(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/${id}`);
    }

    getFacultyByDepartmentHead(id: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/show-faculty-by-department-head/${id}`
        );
    }

    facultyUpdate(id: string, faculty: Object): Observable<any> {
        return this.http.put(`${url}/faculty/${id}`, faculty);
    }

    facultyIconUpload(formData: any, id: string): Observable<any> {
        return this.http.post(`${url}/faculty/faculty-icon/${id}`, formData);
    }

    facultyDeanSignUpload(formData: any, id: string): Observable<any> {
        return this.http.post(
            `${url}/faculty/faculty-dean-signature/${id}`,
            formData
        );
    }

    //Faculty Information apis
    facultyInformationCreate(faculty: Object): Observable<any> {
        return this.http.post(`${url}/auth/faculty`, faculty);
    }

    facultyInformationGetAll(): Observable<any> {
        return this.http.get(`${url}/auth/faculty`);
    }

    facultyInformationGetOne(id: number): Observable<any> {
        return this.http.get(`${url}/auth/faculty/${id}`);
    }

    facultyInformationUpdate(id: number, faculty: Object): Observable<any> {
        return this.http.post(`${url}/auth/faculty/${id}`, faculty);
    }

    //Study Program degree apis
    studyProgramDegreeGetAll(): Observable<any> {
        return this.http.get(`${url}/faculty/study-program/degree`);
    }
    studyProgramDegreeGetOne(id: number): Observable<any> {
        return this.http.get(`${url}/faculty/study-program/degree/${id}`);
    }

    studyProgramDegreeCreate(program: any, token: string): Observable<any> {
        return this.http.post(
            `${url}/faculty/study-program/degree/add`,
            program,
            {
                headers: new HttpHeaders({
                    authorization: `${token}`,
                    "content-Type": "application/json",
                }),
            }
        );
    }

    studyProgramDegreeUpdate(id: number, program: object): Observable<any> {
        console.log(program);
        return this.http.put(
            `${url}/faculty/study-program/degree/update/${id}`,
            program
        );
    }

    // {{baseUrl}}/faculty/study-program-degree-condition/update/1
    studyProgramDegreeConditionUpdate(id: number, program: object): Observable<any> {
        console.log(program);
        return this.http.put(
            `${url}/faculty/study-program-degree-condition/update/${id}`,
            program
        );
    }

    // {{baseUrl}}/faculty/study-program-degree-condition/delete/1
    studyProgramDegreeConditionDelete(id: number): Observable<any> {
        return this.http.delete(
            `${url}/faculty/study-program-degree-condition/delete/${id}`
        );
    }

    studyProgramDegreeDelete(id: number): Observable<any> {
        return this.http.delete(
            `${url}/faculty/study-program/degree/delete/${id}`
        );
    }

    //Study Program Location apis
    studyProgramLocationGetAll(): Observable<any> {
        return this.http.get(`${url}/faculty/study-program/location`);
    }
    studyProgramLocationGetOne(id: number): Observable<any> {
        return this.http.get(`${url}/faculty/study-program/location/${id}`);
    }

    studyProgramLocationCreate(location: any): Observable<any> {
        return this.http.post(
            `${url}/faculty/study-program/location/add`,
            location
        );
    }

    studyProgramLocationUpdate(id: number, location: object): Observable<any> {
        return this.http.put(
            `${url}/faculty/study-program/location/update/${id}`,
            location
        );
    }

    studyProgramLocationDelete(id: number): Observable<any> {
        return this.http.delete(
            `${url}/faculty/study-program/location/delete/${id}`
        );
    }

    //Department Program apis
    departmentGetAll(): Observable<any> {
        return this.http.get(`${url}/faculty/department`);
    }
    departmentGetOne(id: string | number): Observable<any> {
        return this.http.get(`${url}/faculty/department/${id}`);
    }
    getDepartmentByDepartmentHead(id: string | number): Observable<any> {
        return this.http.get(
            `${url}/auth/show-department-by-department-head/${id}`
        );
    }
    getDepartmentByFaculty(facultyId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/department-by-faculty/${facultyId}`
        );
    }
    departmentCreate(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/department/add`, data);
    }
    departmentUpdate(data: any, id: string | number): Observable<any> {
        return this.http.put(`${url}/faculty/department/update/${id}`, data);
    }
    departmentDelete(id: string | number): Observable<any> {
        return this.http.delete(`${url}/faculty/department/delete/${id}`);
    }

    administrativeDepartmentGetAll(): Observable<any> {
        return this.http.get(`${url}/faculty/administrative-department`);
    }
    administrativeDepartmentGetOne(id: string | number): Observable<any> {
        return this.http.get(`${url}/faculty/administrative-department/${id}`);
    }
    administrativeDepartmentCreate(data: any): Observable<any> {
        return this.http.post(
            `${url}/faculty/administrative-department/add`,
            data
        );
    }
    administrativeDepartmentUpdate(data: any, id: number): Observable<any> {
        return this.http.put(
            `${url}/faculty/administrative-department/update/${id}`,
            data
        );
    }
    administrativeDepartmentDelete(id: string | number): Observable<any> {
        return this.http.delete(
            `${url}/faculty/administrative-department/delete/${id}`
        );
    }

    academicAndAdministrativeDepartmentGetAll(): Observable<any> {
        return this.http.get(
            `${url}/faculty/academic-administrative-department`
        );
    }
    academicAndAdministrativeDepartmentGetOne(
        id: string | number
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/academic-administrative-department/${id}`
        );
    }
    academicAndAdministrativeDepartmentCreate(data: any): Observable<any> {
        return this.http.post(
            `${url}/faculty/academic-administrative-department/add`,
            data
        );
    }
    academicAndAdministrativeDepartmentUpdate(
        data: any,
        id: number
    ): Observable<any> {
        return this.http.put(
            `${url}/faculty/academic-administrative-department/update/${id}`,
            data
        );
    }
    academicAndAdministrativeDepartmentDelete(
        id: string | number
    ): Observable<any> {
        return this.http.delete(
            `${url}/faculty/academic-administrative-department/delete/${id}`
        );
    }

    //Study Program apis
    studyProgramGetAll(): Observable<any> {
        return this.http.get(`${url}/faculty/study-program`);
    }

    studyProgramGetOne(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/study-program/${id}`);
    }
    studyProgramByFaculty(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/study-program-by-faculty/${id}`);
    }

    getUndergraduateProgramsByHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/all-undergraduate-study-program-by-department-head/${headId}`
        );
    }

    getMastersProgramsByStudyProgram(id: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/postgraduate-program-by-undergraduate-program/${id}`
        );
    }

    getStudyProgramByTeacher(id: number): Observable<any> {
        return this.http.get(`${url}/faculty/study-program-by-teacher/${id}`);
    }

    getStudyProgramByDepartmentHead(departmentHeadId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/study-program-by-department-head/${departmentHeadId}`
        );
    }

    getStudyProgramByDepartment(departmentId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/study-program-by-department/${departmentId}`
        );
    }

    // /undergraduate-study-programs-by-department/{departmentId}
    getUndergraduateProgramsByDepartment(departmentId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/undergraduate-study-programs-by-department/${departmentId}`
        );
    }

    studyProgramGetByFacultyId(id: number): Observable<any> {
        return this.http.get(`${url}/faculty/${id}/study-program`);
    }

    getStudyProgramMissions(programId: number): Observable<any> {
        return this.http.get(
            `${url}/faculty/program-mission-information-by-study-program/${programId}`
        );
    }

    getStudyProgramOutcomes(programId: number): Observable<any> {
        return this.http.get(
            `${url}/faculty/program-outcome-by-study-program/${programId}`
        );
    }

    getStudyProgramPMIAndPEO(programId: number): Observable<any> {
        return this.http.get(
            `${url}/faculty/pmi-peo-mapping-by-study-program/${programId}`
        );
    }

    studyProgramGetByFacultyAndDegree(
        facultyId: string,
        degreeId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/curriculum/by/faculty/degree/${facultyId}/${degreeId}`
        );
    }

    studyProgramGetByDegreeAndFaculty(
        degreeId: string,
        facultyId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/study-program/by/degree/faculty/${degreeId}/${facultyId}`
        );
    }

    studyProgramCreate(program: any): Observable<any> {
        return this.http.post(`${url}/faculty/study-program`, program);
    }

    studyProgramUpdate(id: string, program: object): Observable<any> {
        return this.http.put(`${url}/faculty/study-program/${id}`, program);
    }

    studyProgramDelete(id: string): Observable<any> {
        return this.http.delete(`${url}/faculty/study-program/${id}`);
    }

    //Committee apis
    committeeGetAll(): Observable<any> {
        return this.http.get(`${url}/auth/committee`);
    }
    committeeGetOne(id: number): Observable<any> {
        return this.http.get(`${url}/auth/committee/${id}`);
    }

    committeeCreate(committee: any): Observable<any> {
        // console.log(committee)
        return this.http.post(`${url}/auth/committee/add`, committee);
    }

    committeeUpdate(id: number, committee: object): Observable<any> {
        return this.http.put(`${url}/auth/committee/update/${id}`, committee);
    }

    committeeDelete(id: string): Observable<any> {
        return this.http.delete(`${url}/auth/committee/delete/${id}`);
    }

    //committee user apis
    committeeUserGetByCommittee(id: string): Observable<any> {
        return this.http.get(`${url}/auth/committee/user/by/committee/${id}`);
    }
    committeeUsersCreate(committeeUser: any): Observable<any> {
        return this.http.post(`${url}/auth/committee/user/add`, committeeUser);
    }

    committeeUsersDelete(id: any): Observable<any> {
        return this.http.delete(
            `${url}/auth/committee/user/delete/single/${id}`
        );
    }

    // committee notification
    committeeNotificationTypeGetAll(): Observable<any> {
        return this.http.get(`${url}/auth/committee-notification-type`);
    }
    committeeNotificationTypeGetOne(id: number | string): Observable<any> {
        return this.http.get(`${url}/auth/committee-notification-type/${id}`);
    }

    committeeNotificationTypeCreate(notificationType: any): Observable<any> {
        return this.http.post(
            `${url}/auth/committee-notification-type/add`,
            notificationType
        );
    }

    committeeNotificationTypeUpdate(
        id: number | string,
        notificationType: object
    ): Observable<any> {
        return this.http.put(
            `${url}/auth/committee-notification-type/update/${id}`,
            notificationType
        );
    }

    committeeNotificationTypeDelete(id: string): Observable<any> {
        return this.http.delete(
            `${url}/auth/committee-notification-type/delete/${id}`
        );
    }

    committeeNotificationGetAll(): Observable<any> {
        return this.http.get(`${url}/auth/committee-notification`);
    }
    committeeNotificationGetOne(id: string): Observable<any> {
        return this.http.get(`${url}/auth/committee-notification/${id}`);
    }

    committeeNotificationCreate(notification: any): Observable<any> {
        return this.http.post(
            `${url}/auth/committee-notification/add`,
            notification
        );
    }

    committeeNotificationUpdate(
        id: string,
        notification: object
    ): Observable<any> {
        return this.http.put(
            `${url}/auth/committee-notification/update/${id}`,
            notification
        );
    }

    committeeNotificationDelete(id: string): Observable<any> {
        return this.http.delete(
            `${url}/auth/committee-notification/delete/${id}`
        );
    }

    //year of study apis

    yearOfStudyGetAll(): Observable<any> {
        return this.http.get(`${url}/faculty/year-of-study`);
    }
    // yearOfStudyGetAllByDepartmentId(id): Observable<any> {
    //     return this.http.get(`${url}/faculty/year-of-study-by-department/${id}`);
    // }

    getYearOfStudyByDepartment(departmentId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/year-of-study-by-department/${departmentId}`
        );
    }













    yearOfStudyGetOne(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/year-of-study/${id}`);
    }

    getCurrentYearOfStudy(): Observable<any> {
        return this.http.get(`${url}/faculty/current-year-of-study`);
    }

    yearOfStudyCreate(yearOfStudy: any): Observable<any> {
        // console.log(yearOfStudy);
        return this.http.post(`${url}/faculty/year-of-study/add`, yearOfStudy);
    }

    yearOfStudyUpdate(id: string, yearOfStudy: any): Observable<any> {
        return this.http.put(
            `${url}/faculty/year-of-study/update/${id}`,
            yearOfStudy
        );
    }

    yearOfStudyDelete(id: string): Observable<any> {
        return this.http.delete(`${url}/faculty/year-of-study/delete/${id}`);
    }

    // study program offer apis
    studyProgramOfferGetAll(): Observable<any> {
        return this.http.get(`${url}/faculty/study-program-offer`);
    }
    studyProgramOfferCreate(studyProgramOffer: any): Observable<any> {
        return this.http.post(
            `${url}/faculty/study-program/offer/add`,
            studyProgramOffer
        );
    }

    studyProgramOfferUpdate(
        status: object,
        yearOfStudy: string,
        degree: string
    ): Observable<any> {
        console.log(status);
        return this.http.put(
            `${url}/faculty/study-program/offer/update/by/year-of-study/study-program-degree/${yearOfStudy}/${degree}`,
            status
        );
    }

    studyProgramOfferDelete(id: string): Observable<any> {
        return this.http.delete(
            `${url}/faculty/study-program/offer/delete/single/${id}`
        );
    }

    studyProgramOfferGetByFacultyAndDegree(
        faculty: string,
        degree: string
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/study-program/offer/by/faculty-and-study-program-degree-and-opened/${faculty}/${degree}`
        );
    }

    // academic plan apis
    academicPlanCreate(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/academicplan/add`, data);
    }

    getAllAcademicPlan(): Observable<any> {
        return this.http.get(`${url}/faculty/academic-plan`);
    }

    getSingleAcademicPlan(id: number): Observable<any> {
        return this.http.get(`${url}/faculty/academic-plan/${id}`);
    }

    getAcademicPlansByDepartmentHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/academic-plan-by-department-head-id/${headId}`
        );
    }
    getAcademicPlansByDepartmentID(depId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/academic-plan-by-department-id/${depId}`
        );
    }

    getAcademicPlanByProgram(programId: number): Observable<any> {
        return this.http.get(
            `${url}/faculty/find-academic-plan-by-study-program/${programId}`
        );
    }

    getAcademicPlanPLO(id: number): Observable<any> {
        return this.http.get(
            `${url}/faculty/program-learning-outcome-with-program-outcome-by-academic-plan/${id}`
        );
    }

    updateAcademicPlanPLO(data: any, planId: string): Observable<any> {
        return this.http.put(
            `${url}/faculty/program-learning-outcome-with-program-outcome-update-by-academic-plan/${planId}`,
            data
        );
    }


    updateAcademicPlan(data: any, planId: string): Observable<any> {
        return this.http.put(
            `${url}/faculty/update-academic-plan-and-batch-by-academic-plan/${planId}`,
            data
        );
    }

    getAcademicPlanByYearDegreeFacultyProgram(data: any): Observable<any> {
        return this.http.get(
            `${url}/faculty/academic-plan/find-by-yearOfStudy-studyProgramDegree-faculty-studyProgram/${data.yearOfStudyId}/${data.degreeId}/${data.facultyId}/${data.programId}`
        );
    }

    createPaymentScheme(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/payment-scheme/add`, data);
    }

    getAllPaymentScheme(): Observable<any> {
        return this.http.get(`${url}/faculty/payment-scheme`);
    }

    getOnePaymentScheme(id: number | string): Observable<any> {
        return this.http.get(`${url}/faculty/payment-scheme/${id}`);
    }

    paymentSchemeDelete(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/payment-scheme/delete/${id}`);
    }

    semesterOffer(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/semester-offer/add`, data);
    }

    getAllSemesterOfferedByAcademicPlan(id: string | number): Observable<any> {
        return this.http.get(
            `${url}/faculty/semester-offer/find-by-academic-plan/${id}`
        );
    }

    updateSemesterOffer(id: string, data: any): Observable<any> {
        return this.http.put(
            `${url}/faculty/semester-offer/update/${id}`,
            data
        );
    }

    getSingleSemesterOfferedListByPlan(planId: number): Observable<any> {
        return this.http.get(
            `${url}/faculty/single-semester-offer-list-by-academic-plan/${planId}`
        );
    }
    // not-offered-semester-find-by-academic-plan/{academicPlanId}
    getNotOfferedSemesterByPlan(planId: number): Observable<any> {
        return this.http.get(
            `${url}/faculty/not-offered-semester-find-by-academic-plan/${planId}`
        );
    }

    postSemesterOfferSubjects(data: any): Observable<any> {
        return this.http.post(
            `${url}/faculty/semester-single-subject-offer`,
            data
        );
    }

    getSemestersOfferedSubjects(): Observable<any> {
        return this.http.get(`${url}/faculty/offered-single-semester-subjects`);
    }

    getOfferedSubjectsBySemester(semId: number): Observable<any> {
        return this.http.get(
            `${url}/faculty/offered-single-semester-subjects-by-semester-offer/${semId}`
        );
    }

    updateSemesterOfferSubjects(data: any): Observable<any> {
        return this.http.put(
            `${url}/faculty/semester-single-subject-offer-update`,
            data
        );
    }

    // semester apis
    getAllSemesterByAcademicPlan(id: string | number): Observable<any> {
        return this.http.get(
            `${url}/faculty/semester/find-by-academic-plan/${id}`
        );
    }

    getAllSemester(data: any): Observable<any> {
        // console.log("semester", data);
        return this.http.get(
            `${url}/faculty/semester/yearOfStudy/studyProgramDegree/faculty/studyProgram/curriculum/${data.yearOfStudyId}/${data.studyProgramDegreeId}/${data.facultyId}/${data.studyProgramId}/${data.curriculumId}`
        );
    }

    getSemesterListByAcademicPlanAndCurriculum(
        planId: string,
        cId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/semester-by-academic-plan-curriculum/${planId}/${cId}`
        );
    }

    getSemesterByAcademicPlan(id: number | string): Observable<any> {
        return this.http.get(
            `${url}/faculty/semester/find-by-academic-plan/${id}`
        );
    }

    getSemesterByTeacherAndPlan(
        teacherId: number,
        planId: number
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/find-semester-by-teacher-academic-plan/${teacherId}/${planId}`
        );
    }

    getSemesterByBatch(batchId: string): Observable<any> {
        return this.http.get(`${url}/auth/semester-by-batch/${batchId}`);
    }

    createSemesterSubject(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/semester-subject/add`, data);
    }

    // curriculum apis
    getSubjectByCurriculum(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/subject/by/curriculum/${id}`);
    }

    // assign student
    assignStudentToBatch(data: any): Observable<any> {
        return this.http.post(`${url}/auth/student-assign-to-batch`, data);
    }

    getStudentsByBatch(id: string | number): Observable<any> {
        return this.http.get(`${url}/auth/find-student-by-batch/${id}`);
    }

    getStudentsByBatchId(id: string | number): Observable<any> {
        return this.http.get(
            `${url}/auth//student/id-card/student-assign-to-batch/${id}`
        );
    }

    // register
    getRegister(): Observable<any> {
        return this.http.get(`${url}/auth/registrar-by-status-true`);
    }

    uploadRegisterImage(data: any, id: string): Observable<any> {
        return this.http.post(`${url}/auth/registrar-signature/${id}`, data);
    }

    //Admin Dashboard
    getTotalAdmission(): Observable<any> {
        return this.http.get(`${url}/admission/total-admission`);
    }
    getTotalApplicant(): Observable<any> {
        return this.http.get(`${url}/auth/total-applicant`);
    }
    getTotalStudent(): Observable<any> {
        return this.http.get(`${url}/auth/total-student`);
    }
    getScheduledClass(): Observable<any> {
        return this.http.get(`${url}/timetable/total-scheduled-class`);
    }
    getTotalAttendance(): Observable<any> {
        return this.http.get(
            `${url}/timetable/total-present-absent-attendance`
        );
    }
    getTotalPayment(): Observable<any> {
        return this.http.get(`${url}/accounting/find-all-paid-amount`);
    }
    getTotalReceivable(): Observable<any> {
        return this.http.get(`${url}/accounting/find-all-receivable-amount`);
    }
    getTotalWaiver(): Observable<any> {
        return this.http.get(`${url}/accounting/find-all-waiver-amount`);
    }

    getTotalApplicationAndAdmission(): Observable<any> {
        return this.http.get(`${url}/admission/total-application-admission`);
    }

    getTotalPayable(): Observable<any> {
        return this.http.get(
            `${url}/accounting/teacher-total-payment-for-admin`
        );
    }

    // assign role

    // department head
    getDepartmentHeadList(): Observable<any> {
        return this.http.get(
            `${url}/auth/show-department-head-without-assign-department`
        );
    }

    getAssignedHeadList(): Observable<any> {
        return this.http.get(`${url}/auth/department-head`);
    }

    getOneDepartmentHead(id: string): Observable<any> {
        return this.http.get(`${url}/auth/department-head/${id}`);
    }

    getDepartmentHeadByDepartment(departmentId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/show-department-head-by-department-id/${departmentId}`
        );
    }

    createDepartmentHead(data: any): Observable<any> {
        return this.http.post(`${url}/auth/department-head`, data);
    }

    updateDepartmentHead(data: any, departmentHeadId: string): Observable<any> {
        return this.http.put(
            `${url}/auth/department-head/${departmentHeadId}`,
            data
        );
    }

    // vice chancellor
    getViceChancellorList(): Observable<any> {
        return this.http.get(`${url}/auth/vice-chancellor`);
    }

    getOneViceChancellor(id: string): Observable<any> {
        return this.http.get(`${url}/auth/vice-chancellor/${id}`);
    }

    assignViceChancellor(data: any): Observable<any> {
        return this.http.post(`${url}/auth/vice-chancellor`, data);
    }

    updateViceChancellor(data: any, viceChancellorId: string): Observable<any> {
        return this.http.put(
            `${url}/auth/vice-chancellor/${viceChancellorId}`,
            data
        );
    }

    // register
    getRegisterList(): Observable<any> {
        return this.http.get(`${url}/auth/registrar`);
    }

    getOneRegister(id: string): Observable<any> {
        return this.http.get(`${url}/auth/registrar/${id}`);
    }

    assignRegister(data: any): Observable<any> {
        return this.http.post(`${url}/auth/registrar`, data);
    }

    updateRegister(data: any, registerId: string): Observable<any> {
        return this.http.put(
            `${url}/auth/registrar-update/${registerId}`,
            data
        );
    }

    // pro vice chancellor
    getProViceChancellorList(): Observable<any> {
        return this.http.get(`${url}/auth/pro-vice-chancellor`);
    }

    getProViceChancellor(id: string): Observable<any> {
        return this.http.get(`${url}/auth/pro-vice-chancellor/${id}`);
    }

    assignProViceChancellor(data: any): Observable<any> {
        return this.http.post(`${url}/auth/pro-vice-chancellor`, data);
    }

    updateProViceChancellor(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/auth/pro-vice-chancellor/${id}`, data);
    }

    // dean
    getDeanList(): Observable<any> {
        return this.http.get(`${url}/auth/dean`);
    }

    getDean(id: string): Observable<any> {
        return this.http.get(`${url}/auth/dean/${id}`);
    }

    assignDean(data: any): Observable<any> {
        return this.http.post(`${url}/auth/dean`, data);
    }

    updateDean(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/auth/dean/${id}`, data);
    }

    // counsellor
    getCounsellorList(): Observable<any> {
        return this.http.get(`${url}/auth/counsellor`);
    }

    // admission counsellor
    getAdmissionCounsellorList(): Observable<any> {
        return this.http.get(`${url}/auth/admission-counselor`);
    }

    // course feedback
    getFeedbackQuestionList(): Observable<any> {
        return this.http.get(`${url}/faculty/course-feedback-question`);
    }
    getFeedbackQuestion(questionId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/course-feedback-question/${questionId}`
        );
    }
    addFeedbackQuestion(data: any): Observable<any> {
        return this.http.post(
            `${url}/faculty/course-feedback-question-add`,
            data
        );
    }
    updateFeedbackQuestion(data: any, questionId: string): Observable<any> {
        return this.http.post(
            `${url}/faculty/course-feedback-question-update/${questionId}`,
            data
        );
    }
    deleteFeedbackQuestion(questionId: string): Observable<any> {
        return this.http.delete(
            `${url}/faculty/course-feedback-question-delete/${questionId}`
        );
    }

    // advisor api end-point
    getAssignedAdvisors(): Observable<any> {
        return this.http.get(`${url}/auth/teacher-advisor-assign`);
    }

    assignAdvisorsToStudent(data: any): Observable<any> {
        return this.http.post(`${url}/auth/teacher-advisor-assign/add`, data);
    }

    assignAdvisorsByDepartmentHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/find-teacher-advisor-assign-by-department-head/${headId}`
        );
    }

    deleteAssignedAdvisor(id: number): Observable<any> {
        return this.http.delete(
            `${url}/auth/teacher-advisor-assign/delete/${id}`
        );
    }

    // supervisor api end-point
    getAssignedSupervisorsByDepartmentHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/supervisor-by-department-head/${headId}`
        );
    }

    getAssignedSupervisorsByCommittee(committeeId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/supervisor-by-exam-committee/${committeeId}`
        );
    }

    assignSupervisors(data: any): Observable<any> {
        return this.http.post(`${url}/auth/supervisor-assign`, data);
    }

    updateAssignedSupervisor(id: string, data: any): Observable<any> {
        return this.http.put(
            `${url}/auth/supervisor-assign-update/${id}`,
            data
        );
    }


    // /auth/supervisor/1
    getAssignedSupervisor(id: string): Observable<any> {
        return this.http.get(`${url}/auth/supervisor/${id}`);
    }



    // external-examiner api end-point
    getExternalExaminers(): Observable<any> {
        return this.http.get(`${url}/auth/external-examiner`);
    }

    getExternalExaminersByCommittee(committeeId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/external-examiner-by-exam-committee/${committeeId}`
        );
    }

    getApprovedExternalExaminersByCommittee(
        committeeId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/approved-external-examiner-by-exam-committee/${committeeId}`
        );
    }

    getExternalExaminersBySubject(subjectId: number): Observable<any> {
        return this.http.get(
            `${url}/auth/external-examiner-by-subject/${subjectId}`
        );
    }

    getExternalExaminer(id: number): Observable<any> {
        return this.http.get(`${url}/auth/external-examiner/${id}`);
    }

    getExternalExaminerBySubject(id: number): Observable<any> {
        return this.http.delete(
            `${url}/auth/external-examiner-by-subject/${id}`
        );
    }

    getApprovalExternalExaminers(): Observable<any> {
        return this.http.get(`${url}/auth/external-examiner-approve-able-list`);
    }

    approveExternalExaminer(id: string): Observable<any> {
        return this.http.put(`${url}/auth/external-examiner-approve/${id}`, {});
    }

    rejectExternalExaminer(id: string): Observable<any> {
        return this.http.put(`${url}/auth/external-examiner-reject/${id}`, {});
    }

    postExternalExaminer(data: any): Observable<any> {
        return this.http.post(`${url}/auth/external-examiner-add`, data);
    }

    putExternalExaminer(data: any, id: number): Observable<any> {
        return this.http.put(
            `${url}/auth/external-examiner-update/${id}`,
            data
        );
    }

    deleteExternalExaminer(id: number): Observable<any> {
        return this.http.delete(`${url}/auth/external-examiner/${id}`);
    }

    // external member api end-point

    getExternalMembersByCommittee(committeeId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/external-committee-member-by-committee/${committeeId}`
        );
    }


    getExternalMember(id: string): Observable<any> {
        return this.http.get(`${url}/auth/external-committee-member/${id}`);
    }

    postExternalMember(data: any): Observable<any> {
        return this.http.post(
            `${url}/auth/external-committee-member-add`,
            data
        );
    }

    putExternalMember(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/auth/external-committee-member-update/${id}`,
            data
        );
    }

    deleteExternalMember(data: any): Observable<any> {
        return this.http.delete(
            `${url}/auth/external-committee-member-delete-by-id-committee-user/${data.id}/${data.committeeId}/${data.userId}`
        );
    }




    // /auth/provide-role-to-employee

    provideRoleToEmployee(data: any): Observable<any> {
        return this.http.post(`${url}/auth/provide-role-to-employee`, data);
    }


    getAllAdmissionCircularByDegree(degreeId: string): Observable<any> {
        return this.http.get(`${url}/admission/get-all-admission-circular-by-degree/${degreeId}`);
    }
    // getAttendanceTags
    getAttendanceTags(): Observable<any> {
        return this.http.get(`${url}/timetable/attendance-tags`);
    }
    updateAttendanceTag(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/timetable/attendance-tag-update/${id}`, data);
    }
    addAttendanceTag(data: any): Observable<any> {
        return this.http.post(`${url}/timetable/attendance-tag-add`, data);
    }



    // /faculty/academic-plans-by-teacher/81
    getAcademicPlanByTeacher(id: any): Observable<any> {
        return this.http.get(`${url}/faculty/academic-plans-by-teacher/${id}`);
    }

    // /dean-by-faculty/
    getDeanByFaculty(id: any): Observable<any> {
        return this.http.get(`${url}/auth/dean-by-faculty/${id}`);
    }

    // /student-final-result/
    getStudentFinalResult(id: any): Observable<any> {
        return this.http.get(`${url}/auth/student-final-result/${id}`);
    }
    // /student-running-semester-by-student/{studentId}
    getStudentRunningSemesterByStudent(id: any): Observable<any> {
        return this.http.get(`${url}/auth/student-running-semester-by-student/${id}`);
    }


    // {{baseurl}}/auth/update-department-head-signature/1


    storeDepartmentHeadSignature(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/auth/update-department-head-signature/${id}`, data);
    }


    getAdmissionCircular(): Observable<any> {
        return this.http.get(`${url}/admission/admission-circular`);
    }


    // /admission/admission-circular-opened-by-degree/1
    getAdmissionCircularOpenedByDegree(degreeId: any): Observable<any> {
        return this.http.get(`${url}/admission/admission-circular-opened-by-degree/${degreeId}`);
    }

    // {{baseUrl}}/admission/running-migration-rule-book-by-admission-circular/1
    getRunningMigrationRuleBookByAdmissionCircular(admissionCircularId: any): Observable<any> {
        return this.http.get(`${url}/admission/running-migration-rule-book-by-admission-circular/${admissionCircularId}`);
    }

    // /student/student-migration-application-by-student/1
    getStudentMigrationApplicationByStudent(studentId: any): Observable<any> {
        return this.http.get(`${url}/student/student-migration-application-by-student/${studentId}`);
    }



    // /student/store-student-migration-application
    storeStudentMigrationApplication(data: any): Observable<any> {
        return this.http.post(`${url}/student/store-student-migration-application`, data);
    }


    // find-building-by-provost
    findBuildingByProvost(provostId: string): Observable<any> {
        return this.http.get(`${url}/resource/find-building-by-provost/${provostId}`);
    }






    // student profile update request

    // {{baseurl}}auth/student-information-update-request-store

    storeStudentInformationUpdateRequest(data: any): Observable<any> {
        return this.http.post(`${url}/auth/student-information-update-request-store`, data);
    }
    // {{baseurl}}auth/student-information-update-request-by-department-head/1

    getStudentInformationUpdateRequestByDepartmentHead(departmentHeadId: any): Observable<any> {
        return this.http.get(`${url}/auth/student-information-update-request-by-department-head/${departmentHeadId}`);
    }

    // {{baseurl}}/auth/approve-student-information-update-request/1

    approveStudentInformationUpdateRequest(id: any): Observable<any> {
        return this.http.put(`${url}/auth/approve-student-information-update-request/${id}`, {});
    }
    // {{baseurl}}/auth/reject-student-information-update-request/1

    rejectStudentInformationUpdateRequest(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/auth/reject-student-information-update-request/${id}`, data);
    }


    // {{baseurl}}/auth/student-information-update-requests

    getStudentInformationUpdateRequests(): Observable<any> {
        return this.http.get(`${url}/auth/student-information-update-requests`);
    }

    // {{baseurl}}/auth/final-approve-student-information-update-request/1

    finalApproveStudentInformationUpdateRequest(id: any): Observable<any> {
        return this.http.put(`${url}/auth/final-approve-student-information-update-request/${id}`, {});
    }


    // {{baseurl}}/auth/reject-student-information-update-request/1

    finalRejectStudentInformationUpdateRequest(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/auth/reject-student-information-update-request/${id}`, data);
    }


    // {{baseurl}}/auth/find-vice-chancellor

    findViceChancellor(): Observable<any> {
        return this.http.get(`${url}/auth/find-vice-chancellor`);
    }






    // /auth/lab-external-examiner-by-subject/132
    getLabExternalExaminerBySubject(subjectId: any): Observable<any> {
        return this.http.get(`${url}/auth/lab-external-examiner-by-subject/${subjectId}`);
    }

    // /auth/teacher
    getTeachers(): Observable<any> {
        return this.http.get(`${url}/auth/teacher`);
    }


    // show-employee-by-user-id
    showEmployeeByUserId(userId: any): Observable<any> {
        return this.http.get(`${url}/auth/show-employee-by-user-id/${userId}`);
    }



    getResearchCategory(): Observable<any> {
        return this.http.get(`${url}/research/research-category`);
    }
    //http://localhost:8080/api/v1/research/research-category/add
    addResearchCategory(data: any): Observable<any> {
        return this.http.post(`${url}/research/research-category/add`, data);
    }


    // http://localhost:8080/api/v1/research/project-type
    getProjectTypes(): Observable<any> {
        return this.http.get(`${url}/research/project-type`);
    }

    // http://localhost:8080/api/v1/research/project-type/add
    addProjectType(data: any): Observable<any> {
        return this.http.post(`${url}/research/project-type/add`, data);
    }

    //http://localhost:8080/api/v1/research/researchFinalCircular
    getResearchFinalCircular(): Observable<any> {
        return this.http.get(`${url}/research/researchFinalCircular`);
    }

    // http://localhost:8080/api/v1/research/research-category/add
    addAdminResearchCategory(data: any): Observable<any> {
        return this.http.post(`${url}/research/research-category/add`, data);
    }
    // http://localhost:8080/api/v1/research/research-category
    getAdminResearchCategory(): Observable<any> {
        return this.http.get(`${url}/research/research-category`);
    }

    // http://localhost:8080/api/v1/research/research-category/delete/1
    deleteAdminResearchCategory(id: any): Observable<any> {
        return this.http.delete(`${url}/research/research-category/delete/${id}`);
    }

    // http://localhost:8080/api/v1/research/research-category/update/1
    updateAdminResearchCategory(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/research-category/update/${id}`, data);
    }

    // http://localhost:8080/api/v1/research/research-category/update/1
    updateAdminProjectType(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/research-category/update/${id}`, data);
    }

    // http://localhost:8080/api/v1/research/research-category/delete/1
    deleteAdminProjectType(id: any): Observable<any> {
        return this.http.delete(`${url}/research/research-category/delete/${id}`);
    }


    addResearchFinalCircular(data: any): Observable<any> {
        return this.http.post(`${url}/research/researchFinalCircular/add`, data);
    }

    //http://localhost:8080/api/v1/research/researchFinalCircular/update/8
    updateResearchFinalCircular(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/researchFinalCircular/update/${id}`, data);
    }

    //http://localhost:8080/api/v1/research/researchFinalCircular/delete/1
    deleteResearchFinalCircular(id: any): Observable<any> {
        return this.http.delete(`${url}/research/researchFinalCircular/delete/${id}`);
    }

    //http://localhost:8080/api/v1/research/project-type/update/1
    updateProjectType(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/research/project-type/update/${id}`, data);
    }

    //http://localhost:8080/api/v1/research/project-type/delete/2
    deleteProjectType(id: any): Observable<any> {
        return this.http.delete(`${url}/research/project-type/delete/${id}`);
    }


    // http://localhost:8080/api/v1/research/researchFinalCircular/11
    getResearchFinalCircularById(id: any): Observable<any> {
        return this.http.get(`${url}/research/researchFinalCircular/${id}`);
    }



    // {{baseUrl}}/hr/organograms
    getOrganograms(): Observable<any> {
        return this.http.get(`${url}/hr/organograms`);
    }
    // {{baseUrl}}/hr/store-organogram
    getStoreOrganogram(data: any): Observable<any> {
        return this.http.post(`${url}/hr/store-organogram`, data);
    }

    // {{baseUrl}}/hr/delete-organogram/1
    deleteOrganogram(id: any): Observable<any> {
        return this.http.delete(`${url}/hr/delete-organogram/${id}`);
    }

    // {{baseUrl}}/hr/organogram-by-year/2015
    getOrganogramByYear(year: any): Observable<any> {
        return this.http.get(`${url}/hr/organogram-by-year/${year}`);
    }

    // {{baseUrl}}/hr/vice-chancellor-approve-organogram/1
    approveOrganogram(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/hr/vice-chancellor-approve-organogram/${id}`, data);
    }
    // {{baseUrl}}/hr/vice-chancellor-reject-organogram/1
    rejectOrganogram(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/hr/vice-chancellor-reject-organogram/${id}`, data);
    }
    // {{baseUrl}}/hr/vice-chancellor-review-organogram/1
    reviewOrganogram(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/hr/vice-chancellor-review-organogram/${id}`, data);
    }


    // faculty/get-office-and-department-wise-organogram
    getOfficeAndDepartmentWiseOrganogram(): Observable<any> {
        return this.http.get(`${url}/faculty/get-office-and-department-wise-organogram`);
    }




    // /find-research-proposal-to-check-apply-or-not-by-teacher-and-research-circular/{teacherId}/{researchCircularId}
    findResearchProposalToCheckApplyOrNotByTeacherAndResearchCircular(teacherId: any, researchCircularId: any): Observable<any> {
        return this.http.get(`${url}/research/find-research-proposal-to-check-apply-or-not-by-teacher-and-research-circular/${teacherId}/${researchCircularId}`);
    }




    // http://localhost:8080/api/v1/auth/students-by-gender/female
    getStudentsByGender(gender: any): Observable<any> {
        return this.http.get(`${url}/auth/students-by-gender/${gender}`);
    }




    // /find-student-by-batch-and-gender/{batchId}/{gender}
    findStudentByBatchAndGender(batchId: any, gender: any): Observable<any> {
        return this.http.get(`${url}/auth/find-student-by-batch-and-gender/${batchId}/${gender}`);
    }

}
