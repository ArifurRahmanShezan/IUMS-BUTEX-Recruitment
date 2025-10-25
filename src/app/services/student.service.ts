import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url } from "../core/models/API";
import { Exam } from "../core/models/Exam";
import { GenericResponse } from "../core/models/GenericResponse";
import { Student } from "../core/models/Student";
import { StudentSubject } from "../core/models/StudentSubject";
import { TakingExam } from "../core/models/TakingExam";
import { YearOfStudy } from "../core/models/YearOfStudy";
import { ExamEntryRequest } from "../core/requests/ExamEntryRequest";

@Injectable({
    providedIn: "root",
})
export class StudentService {
    constructor(private http: HttpClient) { }

    getStudent(): Observable<GenericResponse<Student>> {
        return this.http.get<GenericResponse<Student>>(`${url}/student/me`);
    }

    getOneStudentByStudentId(id: string): Observable<any> {
        return this.http.get<GenericResponse<Student>>(
            `${url}/auth/student-by-student-id/${id}`
        );
    }

    // dashboard apis
    getRunningSemester(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/student-running-semester-by-student/${studentId}`
        );
    }

    getTotalAttemptedQuiz(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/attempt-quiz-by-student/${studentId}`
        );
    }

    getRunningCourses(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/student-running-courses/${studentId}`
        );
    }

    getTotalAttendance(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/student-total-attendance/${studentId}`
        );
    }

    getTotalPendingAssignment(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/student-pending-assignment/${studentId}`
        );
    }

    getTodaysClassList(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/students-todays-class/${studentId}`
        );
    }

    getSubjectWiseAttendance(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/student-subject-attendance/${studentId}`
        );
    }

    getLastSemesterCgpa(id: string): Observable<any> {
        return this.http.get(`${url}/auth/student-last-semester-result/${id}`);
    }

    // result apis
    getAllSemesterResult(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/student-semester-result/${studentId}`
        );
    }
    getFinalResultBySemester(
        studentId: string,
        semesterId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/semester-wise-subject-result/${studentId}/${semesterId}`
        );
    }

    // major list
    getMajorsBySemester(semesterId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/find-major-by-semester/${semesterId}`
        );
    }

    getMajorSubjects(majorId: string, studentId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/find-subject-by-student-and-major/${studentId}/${majorId}`
        );
    }

    //subject for registration
    getCurrentSemesterSubjectList(studentId: string): Observable<any> {
        return this.http.get(`${url}/faculty/subjects-by-student/${studentId}`);
    }

    //Student subject registration List of current semester
    getCurrentSemesterRegisteredSubjectList(
        studentId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/student-running-subject/${studentId}`
        );
    }

    // subject registration
    getRegisteredSubjectsBySemester(
        studentId: string,
        semesterId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/parent-student-subject-by-student-semester/${studentId}/${semesterId}`
        );
    }
    getRegisteredSubjectsBySemesterChildSubjects(
        semesterId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/semester-child-subject-find-by-semester-id/${semesterId}`
        );
    }

    subjectRegistration(data: any): Observable<any> {
        return this.http.post(`${url}/auth/student-subject`, data);
    }

    getSpecialExamsSubjects(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/special-exam-subject-by-student//${studentId}`
        );
    }

    // retake registration
    getRetakeCourseList(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/show-student-retake-subject/${studentId}`
        );
    }
    retakeCourseRegistration(data: any): Observable<any> {
        return this.http.post(`${url}/auth/student-retake-subject`, data);
    }
    applyForSpecialExam(data: any): Observable<any> {
        return this.http.post(
            `${url}/auth/student-special-retake-subject`,
            data
        );
    }
    // semester
    getStudentSemesters(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/student-all-semester-by-student-id/${studentId}`
        );
    }

    getStudentCompletedSemesters(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/all-completed-semester-course-of-student/${studentId}`
        );
    }

    // attendance
    getAttendanceBySubject(
        studentId: string,
        subjectId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/timetable/attendance-by-student-subject/${studentId}/${subjectId}`
        );
    }

    // student application
    getApplicationList(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/student-application-by-student-unique-id/${studentId}`
        );
    }
    createApplication(data: any): Observable<any> {
        return this.http.post(`${url}/auth/student-application/add`, data);
    }

    // partial-transcript
    getPartialTranscriptsForExamController(): Observable<any> {
        return this.http.get(`${url}/student/partial-transcripts`);
    }

    getPartialTranscripts(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/student/partial-transcript-by-student/${studentId}`
        );
    }

    getPartialTranscriptPrintDataById(id: number): Observable<any> {
        return this.http.get(
            `${url}/student/student-partial-transcript-by-partial-transcript-id/${id}`
        );
    }

    applyPartialTranscript(data: any): Observable<any> {
        return this.http.post(`${url}/student/partial-transcript-store`, data);
    }

    updatePartialTranscript(data: any, id: number): Observable<any> {
        return this.http.put(
            `${url}/student/partial-transcript-update/${id}`,
            data
        );
    }

    // challenge course
    getChallengedSubjectList(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/student-challenged-paper-show/${studentId}`
        );
    }
    getChallengeAbleSubjectList(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/student-challenge-able-paper-show/${studentId}`
        );
    }
    challengeCourse(data: any): Observable<any> {
        return this.http.post(`${url}/auth/Student-paper-challenge`, data);
    }

    // teacher feedback
    getFeedbackSemesters(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/registered-and-result-publish-semester-by-student/${studentId}`
        );
    }
    getFeedbackSubjectBySemester(
        sId: string,
        semesterId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/student-subject-by-student-semester/${sId}/${semesterId}`
        );
    }
    getFeedbackQuestionList(data: any): Observable<any> {
        return this.http.get(
            `${url}/faculty/find-all-feedback-question-to-show-by-student-academic-plan-subject-teacher/${data.sId}/${data.planId}/${data.subjectId}/${data.teacherId}`
        );
    }
    storeCourseFeedback(data: any): Observable<any> {
        return this.http.post(
            `${url}/exam/store-student-course-feedback`,
            data
        );
    }

    // payment apis
    getPaymentSchemeBySemester(semesterId: any): Observable<any> {
        return this.http.get(
            `${url}/faculty/payment-scheme-academic-plan-by-semester/${semesterId}`
        );
    }
    getPaymentLedger(studentId: any, semesterId: any): Observable<any> {
        if (semesterId) {
            return this.http.get(
                `${url}/accounting/student-fees-by-semester-student-unique-id/${studentId}?semesterId=${semesterId}`
            );
        } else {
            return this.http.get(
                `${url}/accounting/student-fees-by-semester-student-unique-id/${studentId}`
            );
        }
    }

    getPaymentLedgerSummery(semesterId: any): Observable<any> {
        return this.http.get(
            `${url}/accounting/student-fees-by-student-unique-id/${semesterId}`
        );
    }

    getAllPaymentSlips(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/accounting/student-all-fees-by-unique-id/${studentId}`
        );
    }

    getSinglePaymentSlips(id: string): Observable<any> {
        return this.http.get(`${url}/accounting/student-fees-by-id/${id}`);
    }

    // student advisor
    getMyAdvisor(studentId: any): Observable<any> {
        return this.http.get(
            `${url}/auth/find-teacher-advisor-assign-by-student/${studentId}`
        );
    }

    takeAdvisorAppointment(data: any): Observable<any> {
        return this.http.post(`${url}/student/advisor-appointment-store`, data);
    }

    getTakeAppointment(studentId: number): Observable<any> {
        return this.http.get(
            `${url}/student/advisor-appointment-by-student/${studentId}`
        );
    }

    //enroll able student
    getEnrollAbleStudents(): Observable<any> {
        return this.http.get(`${url}/student/all-enroll-able-student`);
    }

    postEnrollAbleStudent(data: any): Observable<any> {
        return this.http.post(`${url}/student/enroll-able-student-add`, data);
    }

    findEnrollAbleStudent(data: any): Observable<any> {
        return this.http.post(`${url}/student/find-enroll-able-student`, data);
    }

    uploadEnrollAbleStudentFile(data: any): Observable<any> {
        return this.http.post(
            `${url}/student/upload-enroll-able-student`,
            data
        );
    }

    deleteEnrollAbleStudent(studentId: any): Observable<any> {
        return this.http.delete(
            `${url}/student/enroll-able-student-delete/${studentId}`
        );
    }

    //student hall complain api
    getStudentHallComplainsByStudent(id: number): Observable<any> {
        return this.http.get(`${url}/student/hall-complain-of-student/${id}`);
    }

    getStudentHallComplainList(id: string): Observable<any> {
        return this.http.get(`${url}/student/student-hall-complain/${id}`);
    }

    //http://localhost:8080/api/v1/resource/show-all-complain-form
    getAllStudentHallComplain(): Observable<any> {
        return this.http.get(`${url}/student/show-all-complain-form`);
    }

    getStudentHallComplain(id: string): Observable<any> {
        return this.http.get(`${url}/student/student-hall-complain/${id}`);
    }

    //http://localhost:8080/api/v1/resource/hall-allotments/user/1
    getStudentHallAllotmentsByUserId(userId: string): Observable<any> {
        return this.http.get(`${url}/resource/hall-allotments/user/${userId}`);
    }

    // postStudentHallComplain(data: any): Observable<any> {
    //     return this.http.post(`${url}/student/student-hall-complain/add`, data);
    // }
    //http://localhost:8080/api/v1/resource/complain-form-add
    // postStudentHallComplain(data: any): Observable<any> {
    //     return this.http.post(`${url}/student/student-hall-complain/add`, data);
    // } 
    //http://localhost:8080/api/v1/resource/complain-form-add
    postStudentHallComplain(data: any): Observable<any> {
        return this.http.post(`${url}/resource/complain-form-add`, data);
    }

    //http://localhost:8080/api/v1/resource/show-all-complain-form
    getComplainList(): Observable<any> {
        return this.http.get(`${url}/resource/show-all-complain-form`);
    }
    //http://localhost:8080/api/v1/resource/single-complain-form-show/1
    getSingleComplainForm(id: string): Observable<any> {
        return this.http.get(`${url}/resource/single-complain-form-show/${id}`);
    }

    putStudentHallComplain(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/student/student-hall-complain/update/${id}`,
            data
        );
    }
    //http://localhost:8080/api/v1/resource/complain-form-delete/1
    deleteStudentHallComplain(id: string): Observable<any> {
        return this.http.delete(`${url}/resource/complain-form-delete/${id}`);
    }

    //student form by department head
    getStudentFormsByDepartmentHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/student/form-fill-up-info-by-department-head/${headId}`
        );
    }

    postStudentFormDepartmentHead(data: any): Observable<any> {
        return this.http.post(`${url}/student/form-fill-up-info-add`, data);
    }

    putStudentFormDepartmentHead(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/student/form-fill-up-info-update/${id}`,
            data
        );
    }

    deleteStudentFormDepartmentHead(id: string): Observable<any> {
        return this.http.delete(
            `${url}/student/form-fill-up-info-delete/${id}`
        );
    }

    getStudentFormsByProvost(provostId: string): Observable<any> {
        return this.http.get(
            `${url}/student/form-fill-up-by-provost/${provostId}`
        );
    }

    approveStudentFormByProvost(formid: string): Observable<any> {
        return this.http.put(
            `${url}/student/form-fill-up-approve-by-provost/${formid}`,
            {}
        );
    }
    rejectStudentFormByProvost(formid: string): Observable<any> {
        return this.http.put(
            `${url}/student/form-fill-up-reject-by-provost/${formid}`,
            {}
        );
    }

    getStudentApprovalFormsByDepartmentHad(
        departmentHad: string
    ): Observable<any> {
        return this.http.get(
            `${url}/student/form-fill-up-by-department-head/${departmentHad}`
        );
    }

    approveStudentFormByHade(formid: string): Observable<any> {
        return this.http.put(
            `${url}/student/form-fill-up-approve-by-department-head/${formid}`,
            {}
        );
    }
    rejectStudentFormByHade(formid: string): Observable<any> {
        return this.http.put(
            `${url}/student/form-fill-up-reject-by-department-head/${formid}`,
            {}
        );
    }

    //student form registration
    getStudentForms(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/student/form-fill-up-by-student/${studentId}`
        );
    }

    postStudentForm(data: any): Observable<any> {
        return this.http.post(`${url}/student/form-fill-up-add`, data);
    }

    putStudentForm(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/student/form-fill-up-info-update/${id}`,
            data
        );
    }

    getRegistrationFormBySemester(semesterId: string): Observable<any> {
        return this.http.get(
            `${url}/student/form-fill-up-info-by-semester/${semesterId}`
        );
    }

    getRegisteredStudentsForExamController(): Observable<any> {
        return this.http.get(`${url}/student/form-fill-up-list-by-paid-status`);
    }

    // re admission apis
    postStudentReAdmission(data: any): Observable<any> {
        return this.http.post(
            `${url}/student/student-re-admission-application`,
            data
        );
    }

    getStudentReadmissionApplicationsByDHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/student/student-re-admission-list-by-department-head/${headId}`
        );
    }

    // student-re-admission-list-all
    getReadmissionApplications(): Observable<any> {
        return this.http.get(`${url}/student/student-re-admission-list-all`);
    }

    getReadmissionApplicationsByStudent(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/student/student-re-admission-list-by-student/${studentId}`
        );
    }

    approveStudentReadmissionApplication(id: string): Observable<any> {
        return this.http.put(
            `${url}/student/student-re-admission-approve/${id}`,
            {}
        );
    }
    rejectStudentReadmissionApplication(id: string): Observable<any> {
        return this.http.put(
            `${url}/student/student-re-admission-reject/${id}`,
            {}
        );
    }

    // masters program
    mastersProgramApplication(
        studentUniqueId: string,
        mastersProgramId: string
    ): Observable<any> {
        return this.http.post(
            `${url}/auth/student-apply-for-masters-with-student-unique-id-and-study-program/${studentUniqueId}/${mastersProgramId}`,
            {}
        );
    }

    getMastersStudentsByDepartmentHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/masters-student-by-department-head/${headId}`
        );
    }

    approveMastersStudent(studentId: string): Observable<any> {
        return this.http.put(
            `${url}/auth/approve-masters-student/${studentId}`,
            {}
        );
    }

    // end,
    getNotifications(
        page: number,
        size: number
    ): Observable<GenericResponse<Notification[]>> {
        return this.http.get<GenericResponse<Notification[]>>(
            `${url}/student/notification?page=${page}&size=${size}`
        );
    }

    getBasedOnSubject(
        subjectId: number,
        page: number,
        size: number
    ): Observable<GenericResponse<Notification[]>> {
        return this.http.get<GenericResponse<Notification[]>>(
            `${url}/student/subject/${subjectId}/notification?page=${page}&size=${size}`
        );
    }

    getYearOfStudies(): Observable<GenericResponse<YearOfStudy[]>> {
        return this.http.get<GenericResponse<YearOfStudy[]>>(
            `${url}/student/year-of-study`
        );
    }
    getOneYearOfStudy(id: number): Observable<GenericResponse<YearOfStudy>> {
        return this.http.get<GenericResponse<YearOfStudy>>(
            `${url}/student/year-of-study/${id}`
        );
    }
    getOneSubject(id: number): Observable<GenericResponse<StudentSubject>> {
        return this.http.get<GenericResponse<StudentSubject>>(
            `${url}/student/subject/${id}`
        );
    }
    getTakingExam(subjectId: number): Observable<GenericResponse<TakingExam>> {
        return this.http.get<GenericResponse<TakingExam>>(
            `${url}/student/subject/${subjectId}/exam`
        );
    }
    getExam(
        subjectId: number,
        examId: number
    ): Observable<GenericResponse<Exam>> {
        return this.http.get<GenericResponse<Exam>>(
            `${url}/student/subject/${subjectId}/exam/${examId}`
        );
    }
    addExamEntry(
        subjectId: number,
        examId: number,
        entry: ExamEntryRequest
    ): Observable<GenericResponse<string>> {
        return this.http.post<GenericResponse<string>>(
            `${url}/student/subject/${subjectId}/exam/${examId}`,
            entry
        );
    }
    getAllNotPassedSubjects(): Observable<GenericResponse<StudentSubject[]>> {
        return this.http.get<GenericResponse<StudentSubject[]>>(
            `${url}/student/subject?fetch=not-passed`
        );
    }
    getAllPassedSubjects(): Observable<GenericResponse<StudentSubject[]>> {
        return this.http.get<GenericResponse<StudentSubject[]>>(
            `${url}/student/subject?fetch=passed`
        );
    }





    //apply for room allocation
    getAplicationList(data: any): Observable<any> {
        return this.http.get<any>(`${url}/resource/hall-allotment`);
    }




    // resource/hall-allotment/add
    postHallAllotmentByStudentApplication(data: any): Observable<any> {
        return this.http.post(`${url}/resource/hall-allotment/add`, data);
    }
    // resource/hall-allotment 
    getHallAllotment(): Observable<any> {
        return this.http.get(`${url}/resource/hall-allotment`);
    }



    // resource/hall-allotment/allotmentByProvost/1
    postAllotmentByProvost(provostId: any, data: any): Observable<any> {
        return this.http.put(`${url}/resource/hall-allotment/allotmentByProvost/${provostId}`, data);
    }



    // /auth/student-term-withdraw-by-student/665
    getAllTermWithdrawByStudent(studentId: any): Observable<any> {
        return this.http.get(`${url}/auth/student-term-withdraw-by-student/${studentId}`);
    }

    // /auth/store-student-term-withdraw
    postStudentTermWithdraw(data: any): Observable<any> {
        return this.http.post(`${url}/auth/store-student-term-withdraw`, data);
    }


    // /auth/student-term-withdraw-by-department-head-id/1
    getStudentTermWithdrawByDepartmentHeadId(departmentHeadId: any): Observable<any> {
        return this.http.get(`${url}/auth/student-term-withdraw-by-department-head-id/${departmentHeadId}`);
    }

    // /auth/student-term-withdraw-approve-by-department-head/1
    putStudentTermWithdrawApproveByDepartmentHead(id: any): Observable<any> {
        return this.http.put(`${url}/auth/student-term-withdraw-approve-by-department-head/${id}`, {});
    }





    // /auth/student-term-withdraw-by-dean-id/1
    getStudentTermWithdrawByDeanId(deanId: any): Observable<any> {
        return this.http.get(`${url}/auth/student-term-withdraw-by-dean-id/${deanId}`);
    }
    // /auth/student-term-withdraw-approve-by-dean/1
    putStudentTermWithdrawApproveByDean(id: any): Observable<any> {
        return this.http.put(`${url}/auth/student-term-withdraw-approve-by-dean/${id}`, {});
    }



    // /auth/student-term-withdraw-by-registrar-id/1
    getStudentTermWithdrawByRegistrarId(registrarId: any): Observable<any> {
        return this.http.get(`${url}/auth/student-term-withdraw-by-registrar-id/${registrarId}`);
    }
    // /auth/student-term-withdraw-approve-by-registrar/1
    putStudentTermWithdrawApproveByRegistrar(id: any): Observable<any> {
        return this.http.put(`${url}/auth/student-term-withdraw-approve-by-registrar/${id}`, {});
    }




    // /auth/parent-student-subject-of-current-session-by-student/871
    getParentStudentSubjectOfCurrentSessionByStudent(studentId: any): Observable<any> {
        return this.http.get(`${url}/auth/parent-student-subject-of-current-session-by-student/${studentId}`);
    }


    // {{baseUrl}}/timetable/students-current-session-class-routine-by-student/1498
    getStudentsCurrentSessionClassRoutineByStudent(studentId: any): Observable<any> {
        return this.http.get(`${url}/timetable/students-current-session-class-routine-by-student/${studentId}`);
    }

    // {{baseUrl}}/timetable/student-attendance-of-current-session-registered-child-subject-by-student/1498
    getStudentAttendanceOfCurrentSessionRegisteredChildSubjectByStudent(studentId: any): Observable<any> {
        return this.http.get(`${url}/timetable/student-attendance-of-current-session-registered-child-subject-by-student/${studentId}`);
    }



    // /auth/student-hall-by-student/1498
    getStudentHallByStudent(studentId: any): Observable<any> {
        return this.http.get(`${url}/auth/student-hall-by-student/${studentId}`);
    }

    //http://localhost:8080/api/v1/resource/hall-allotment-list-active-by-provost/6126
    getHallAllotmentListActiveByProvost(provostId: any): Observable<any> {
        return this.http.get(`${url}/resource/hall-allotment-list-active-by-provost/${provostId}`);
    }
    //http://localhost:8080/api/v1/resource/hall-allotment/pending/provost/6126
    getHallAllotmentPendingByProvost(provostId: any): Observable<any> {
        return this.http.get(`${url}/resource/hall-allotment/pending/provost/${provostId}`);
    }




    studentAddHallAllotment(hallAllotment: any): Observable<any> {
        return this.http.post(`${url}/resource/hall-allotment/add`, hallAllotment);
    }

    getHallAllotmentsByUser(userId: any): Observable<any> {
        return this.http.get(`${url}/resource/hall-allotments/user/${userId}`);
    }
    studentRequestForHallRelocation(id: any, payload: any): Observable<any> {
        return this.http.put(`${url}/resource/hall-allotment/relocation-application/${id}`, payload);
    }
    cancelHallAllotmentRequest(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/resource/hall-allotments/cancel-request/${id}`, data);
    }







    // /resource/hall-allotment/allotmentByProvost/1
    allotmentApprovedByProvost(provostId: any, data: any): Observable<any> {
        return this.http.put(`${url}/resource/hall-allotment/allotmentByProvost/${provostId}`, data);
    }



    allotmentApproveByProvost(id: any, payload: any): Observable<any> {
        return this.http.put(`${url}/resource/hall-allotment/allotmentByProvost/${id}`, payload);
    }
    // http://localhost:8080/api/v1/resource/hall-allotment-reject-by-provost/1
    allotmentRejectByProvost(body: any, id: any): Observable<any> {
        return this.http.put(`${url}/resource/hall-allotment-reject-by-provost/${id}`, body);
    }




    getHallAllotments(): Observable<any> {
        return this.http.get(`${url}/resource/hall-allotment`);
    }


    relocationApprovalByProvost(provostId: any, payload: any): Observable<any> {
        return this.http.put(`${url}/resource/hall-allotment/relocationByProvost/${provostId}`, payload);
    }

    //http://localhost:8080/api/v1/resource/relocation-cancel/4
    cancelRelocationRequest(id: any, payload: any): Observable<any> {
        return this.http.put(`${url}/resource/relocation-cancel/${id}`, payload);
    }





    // hall-allotment-list-by-provost/{provostId}
    getHallAllotmentListByProvostNew(provostId: any): Observable<any> {
        return this.http.get(`${url}/resource/hall-allotment-list-by-provost/${provostId}`);
    }

    // relocation-list-by-provost-id/{provostId}
    getRelocationListByProvostId(provostId: any): Observable<any> {
        return this.http.get(`${url}/resource/relocation-list-by-provost-id/${provostId}`);
    }


    // http://localhost:8080/api/v1/resource/hall-allotment-circular-by-student-id/5
    getHallAllotmentCircularByStudentId(studentId: any): Observable<any> {
        return this.http.get(`${url}/resource/hall-allotment-circular-by-student-id/${studentId}`);
    }




    // http://localhost:8080/api/v1/resource/hall-allotments/cancel-request/1
    cancelHallAllotmentRequestNew(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/resource/hall-allotments/cancel-request/${id}`, data);
    }




    addFeesGeneration(data: any) {
        return this.http.post(`${url}/resource/fees-generation-add-multiple`, data);
    }
    //http://localhost:8080/api/v1/resource/fees-generation-delete/10
    deleteFeesGeneration(id: number) {
        return this.http.delete(`${url}/resource/fees-generation-delete/${id}`);
    }

    getFeeTypes() {
        return this.http.get(`${url}/resource/fees-type`);
    }
    deleteFeeType(id: number) {
        return this.http.delete(`${url}/api/fee-types/${id}`);
    }
    addFeeType(data: any) {
        return this.http.post(`${url}/resource/fees-type/add`, data);
    }

    provostGetAllotments(): Observable<any> {
        return this.http.get(`${url}/resource/hall-allotment`);
    }


    updateFeeType(id: number, data: any) {
        return this.http.put(`${url}/resource/fees-type/update/${id}`, data);
    }

    getFeesGeneration(): Observable<any> {
        return this.http.get(`${url}/resource/fees-generation`);
    }

    approveFeePayment(data: any): Observable<any> {
        return this.http.put(`${url}/resource/fees-generation-approve-payment-info-update-by-provost/${data}`, {});
    }

    //http://localhost:8080/api/v1/resource/fees-generation-reject-payment-by-provost/10
    rejectFeePayment(id: number): Observable<any> {
        return this.http.put(`${url}/resource/fees-generation-reject-payment-by-provost/${id}`, {});
    }
    getFeesGenerationByStudent(studentId: any): Observable<any> {
        return this.http.get(`${url}/resource/fees-generation-show-by-student/${studentId}`);
    }
    updatePayFeesByStudent(studentId: any, data: any): Observable<any> {
        return this.http.put(`${url}/resource/fees-generation-payment-info-update-by-student/${studentId}`, data);
    }


    getStudentsMeritInfo(): Observable<any> {
        return this.http.get(`${url}/student/merit-student-board-information`);
    }

    uploadStudentMeritInfo(formData: any, id: any): Observable<any> {
        return this.http.post(
            `${url}/student/upload-merit-student-board_information-with-admission-circular/${id}`,
            formData
        );
    }

    getStudentMeritInfo(id: string): Observable<any> {
        return this.http.get(
            `${url}/student/merit-student-board-information/${id}`
        );
    }



    // student cancellation
    // {{baseUrl}}/auth/apply-to-cancel-studentship
    applyToCancelStudentship(payload: any): Observable<any> {
        return this.http.post(`${url}/auth/apply-to-cancel-studentship`, payload);
    }


    // {{baseUrl}}/auth/cancel-studentship-application-by-student/1466
    cancelStudentshipApplicationByStudent(id: any): Observable<any> {
        return this.http.get(`${url}/auth/cancel-studentship-application-by-student/${id}`);
    }


    // {{baseUrl}}/auth/cancel-studentship-application-by-department-head/1
    cancelStudentshipApplicationByDepartmentHead(id: any): Observable<any> {
        return this.http.get(`${url}/auth/cancel-studentship-application-by-department-head/${id}`);
    }


    // {{baseurl}}auth/lab-external-examiner-by-department-head/1
    getLabExternalExaminerByDepartmentHead(id: any): Observable<any> {
        return this.http.get(`${url}/auth/lab-external-examiner-by-department-head/${id}`);
    }

    // {{baseurl}}auth/approve-lab-external-examiner/1
    approveLabExternalExaminer(id: any): Observable<any> {
        return this.http.get(`${url}/auth/approve-lab-external-examiner/${id}`);
    }

    // {{baseurl}}auth/reject-lab-external-examiner/1
    rejectLabExternalExaminer(id: any): Observable<any> {
        return this.http.get(`${url}/auth/reject-lab-external-examiner/${id}`);
    }





    // {{baseUrl}}/auth/cancel-studentship-application-by-dean/1
    cancelStudentshipApplicationByDean(id: any): Observable<any> {
        return this.http.get(`${url}/auth/cancel-studentship-application-by-dean/${id}`);
    }
    // {{baseUrl}}/auth/cancel-studentship-application-by-registrar/1
    cancelStudentshipApplicationByRegistrar(id: any): Observable<any> {
        return this.http.get(`${url}/auth/cancel-studentship-application-by-registrar/${id}`);
    }




    // {{baseUrl}}/auth/cancel-studentship-application-department-head-approve/1
    cancelStudentshipApplicationDepartmentHeadApprove(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/auth/cancel-studentship-application-department-head-approve/${id}`, data);
    }

    // {{baseUrl}}/auth/cancel-studentship-application-department-head-reject/1
    cancelStudentshipApplicationDepartmentHeadReject(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/auth/cancel-studentship-application-department-head-reject/${id}`, data);
    }






    // {{baseUrl}}/auth/cancel-studentship-application-dean-approve/1
    cancelStudentshipApplicationDeanApprove(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/auth/cancel-studentship-application-dean-approve/${id}`, data);
    }
    // {{baseUrl}}/auth/cancel-studentship-application-dean-reject/1
    cancelStudentshipApplicationDeanReject(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/auth/cancel-studentship-application-dean-reject/${id}`, data);
    }
    // {{baseUrl}}/auth/cancel-studentship-application-dean-reject/1






    cancelStudentshipApplicationRegistrarApprove(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/auth/cancel-studentship-application-registrar-approve/${id}`, data);
    }

    // {{baseUrl}}/auth/cancel-studentship-application-registrar-reject/1
    cancelStudentshipApplicationRegistrarReject(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/auth/cancel-studentship-application-registrar-reject/${id}`, data);
    }






    // {{baseurl}}/auth/studentship-update-by-student/1
    updateStudentshipByStudent(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/auth/studentship-update-by-student/${id}`, data);
    }


    // {{baseurl}}/timetable/student-attendance-percentage-by-academic-plan-semester-and-date-range/19/137
    getStudentAttendancePercentageByAcademicPlanSemesterAndDateRange(academicPlanId: any, semesterId: any, data: any): Observable<any> {
        return this.http.post(`${url}/timetable/student-attendance-percentage-by-academic-plan-semester-and-date-range/${academicPlanId}/${semesterId}`, data);
    }




    // {{baseUrl}}/auth/cancel-studentship-direct-by-registrar-of-student/1
    cancelStudentshipDirectByRegistrarOfStudent(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/auth/cancel-studentship-direct-by-registrar-of-student/${id}`, data);
    }



    // {{baseurl}}/student/form-fill-ups
    getStudentFormFillUps(): Observable<any> {
        return this.http.get(`${url}/student/form-fill-ups`);
    }


    // {{baseurl}}/student/form-fill-up-approve-by-registrar/1
    approveStudentFormFillUpByRegistrar(id: any): Observable<any> {
        return this.http.get(`${url}/student/form-fill-up-approve-by-registrar/${id}`);
    }

    // {{baseurl}}/student/form-fill-up-reject-by-registrar/1
    rejectStudentFormFillUpByRegistrar(id: any): Observable<any> {
        return this.http.get(`${url}/student/form-fill-up-reject-by-registrar/${id}`);
    }




    // /cancel-studentship-applications
    getCancelStudentshipApplications(): Observable<any> {
        return this.http.get(`${url}/auth/cancel-studentship-applications`);
    }




    // {{baseurl}}auth/approve-lab-external-examiner/1
    approveLabExternalExaminerLab(id: any): Observable<any> {
        return this.http.put(`${url}/auth/approve-lab-external-examiner/${id}`, {});
    }
    // {{baseurl}}auth/reject-lab-external-examiner/1
    rejectLabExternalExaminerLab(id: any): Observable<any> {
        return this.http.put(`${url}/auth/reject-lab-external-examiner/${id}`, {});
    }

    ///hall-clearance get
    getHallClearance(): Observable<any> {
        return this.http.get(`${url}/resource/hall-clearance`);
    }

}
