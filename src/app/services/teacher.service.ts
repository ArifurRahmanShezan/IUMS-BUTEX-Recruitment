import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url } from "../core/models/API";
import { ExamTerm } from "../core/models/ExamTerm";
import { ExamType } from "../core/models/ExamType";
import { GenericResponse } from "../core/models/GenericResponse";
import { StudentPointsCalculated } from "../core/models/StudentPointsCalculated";
import { Subject } from "../core/models/Subject";
import { SubjectNotificationType } from "../core/models/SubjectNotificationType";
import { TakingExam } from "../core/models/TakingExam";
import { TeacherExam } from "../core/models/TeacherExam";
import { TeacherStudent } from "../core/models/TeacherStudent";
import { TeachingTerm } from "../core/models/TeachingTerm";
import { TeachingType } from "../core/models/TeachingType";
import { AddExamRequest } from "../core/requests/AddExamRequest";
import { AddNotificationRequest } from "../core/requests/AddNotificationRequest";
import { AddTeachingTermRequest } from "../core/requests/AddTeachingTermRequest";
import { UpdateFinalGradeRequest } from "../core/requests/UpdateFinalGradeRequest";
import { UpdateStudentExamRequest } from "../core/requests/UpdateStudentExamRequest";
import { UpdateStudentPointsRequest } from "../core/requests/UpdateStudentPointsRequest";
import { UpdateSubjectSyllabusRequest } from "../core/requests/UpdateSubjectSyllabusRequest";

@Injectable({
    providedIn: "root",
})
export class TeacherService {
    constructor(private http: HttpClient) { }

    // dashboard
    getTotalClasses(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/total-scheduled-taken-class-by-teacher/${teacherId}`
        );
    }

    getEnrolledStudent(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/enrolled-student-of-teacher/${teacherId}`
        );
    }

    getTotalAssessment(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/assessment-of-a-teacher/${teacherId}`
        );
    }

    getTotalAssignment(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/assignment-of-a-teacher/${teacherId}`
        );
    }

    getOnGoingCourses(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/assignment-of-a-teacher/${teacherId}`
        );
    }


    // /auth/add/teacher/personal/details
    addTeacherPersonalDetails(data: any): Observable<any> {
        return this.http.post(`${url}/auth/add/teacher/personal/details`, data);
    }

    // /auth/update/teacher/personal/details/128
    updateTeacherPersonalDetails(data: any, id: number): Observable<any> {
        return this.http.put(
            `${url}/auth/update/teacher/personal/details/${id}`,
            data
        );
    }



    // education
    getEducationList(): Observable<any> {
        return this.http.get(`${url}/auth/teacher/education/details`);
    }
    getEducation(id: number): Observable<any> {
        return this.http.get(`${url}/auth/teacher/education/details/${id}`);
    }

    getEducationByTeacherId(teacherId: number): Observable<any> {
        return this.http.get(
            `${url}/auth/teacher-education-details/${teacherId}`
        );
    }

    addEducation(data: any): Observable<any> {
        return this.http.post(
            `${url}/auth/add/teacher/education/details`,
            data
        );
    }

    updateEducation(data: any, id: number): Observable<any> {
        return this.http.put(
            `${url}/auth/update/teacher/education/details/${id}`,
            data
        );
    }

    deleteEducationById(Id: number): Observable<any> {
        return this.http.delete(
            `${url}/auth/delete/teacher/education/details/${Id}`
        );
    }

    // experience
    getExperienceList(): Observable<any> {
        return this.http.get(`${url}/auth/teacher/experience/details`);
    }
    getExperienceByTeacher(teacherId: number): Observable<any> {
        return this.http.get(`${url}/auth/teacher/experience/details`);
    }
    addExperience(data: any): Observable<any> {
        return this.http.post(
            `${url}/auth/add/teacher/experience/details`,
            data
        );
    }

    updateExperience(data: any, id: number): Observable<any> {
        return this.http.put(
            `${url}/auth/update/teacher/experience/details/${id}`,
            data
        );
    }

    deleteExperienceById(Id: number): Observable<any> {
        return this.http.delete(
            `${url}/auth/delete/teacher/experience/details/${Id}`
        );
    }










    // teacher by student and subject
    getTeacherByStudentAndSubject(
        studentId: string,
        subjectId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/teacher-subject-by-student-academic-plan-subject/${studentId}/${subjectId}`
        );
    }

    getTeacherByRetakeSubject(
        studentId: string,
        subjectId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/teacher-subject-teacher-by-student-academic-plan-subject/${studentId}/${subjectId}`
        );
    }

    getSubjectListByAcademicPlan(
        teacherId: string,
        planId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/teacher-subject-find-by-teacher-academic-plan/${teacherId}/${planId}`
        );
    }

    getClassDateOfSubject(
        teacherId: string,
        planId: string,
        subjectId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/timetable/class-routine-by-teacher-academicPlan-subject/${teacherId}/${planId}/${subjectId}`
        );
    }

    getStudentList(academicPlanId: string, subjectId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/student-by-academic-plan-subject/${academicPlanId}/${subjectId}`
        );
    }
    getStudentsForExamAttendance(
        examSessionId: string,
        academicPlanId: string,
        subjectId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/student-by-academic-plan-subject-for-exam-attendance/${examSessionId}/${academicPlanId}/${subjectId}`
        );
    }

    getStudentListByTeacher(
        academicPlanId: string,
        subjectId: string,
        teacherId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/student-by-academic-plan-subject-teacher/${academicPlanId}/${subjectId}/${teacherId}`
        );
    }

    getStudentsForAttendance(
        academicPlanId: string,
        subjectId: string,
        teacherId: string,
        date: string,
        slotId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/timetable/class-routine-attendance-by-teacher-academic-plan-subject-date-routine-slot/${teacherId}/${academicPlanId}/${subjectId}/${date}/${slotId}`
        );
    }

    getClassRoutineSlot(
        academicPlanId: string,
        subjectId: string,
        teacherId: string,
        date: string
    ): Observable<any> {
        return this.http.get(
            `${url}/timetable/class-routine-slots-by-teacher-academicPlan-subject-date/${teacherId}/${academicPlanId}/${subjectId}/${date}`
        );
    }

    // students
    getStudentListForMarks(data: any): Observable<any> {
        return this.http.post(
            `${url}/auth/student-by-academic-plan-subject-teacher-exam-session-examiner-type-for-exam-mark`,
            data
        );
    }

    getStudentsForMarkSubmission(data: any): Observable<any> {
        return this.http.post(
            `${url}/exam/student-with-rubrics-by-academic-plan-subject-teacher-exam-session-examiner-type-for-exam-mark`,
            data
        );
    }

    // attendance
    addStudentAttendance(data: any): Observable<any> {
        return this.http.post(`${url}/timetable/attendance/add`, data);
    }

    takeExamAttendance(data: any): Observable<any> {
        return this.http.post(`${url}/timetable/exam-attendance/add`, data);
    }

    invigilatorExamAttendance(data: any): Observable<any> {
        return this.http.post(
            `${url}/timetable/exam-invigilator-attendance`,
            data
        );
    }

    // assessment api end point
    getAssessmentTypeList(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/assessment-type-by-teacher/${teacherId}`
        );
    }
    getOneAssessmentType(typeId: string): Observable<any> {
        return this.http.get(`${url}/exam/assessment-type/${typeId}`);
    }
    createAssessmentType(data: any): Observable<any> {
        return this.http.post(`${url}/exam/assessment-type/add`, data);
    }
    updateAssessmentType(data: any, typeId: string): Observable<any> {
        return this.http.put(
            `${url}/exam/assessment-type/update/${typeId}`,
            data
        );
    }
    deleteAssessmentType(typeId: string): Observable<any> {
        return this.http.delete(`${url}/exam/assessment-type/delete/${typeId}`);
    }

    getAssessmentList(teacherId: string): Observable<any> {
        return this.http.get(`${url}/exam/assessment-by-teacher/${teacherId}`);
    }

    getAssessmentListByTeacherSubject(
        teacherId: string,
        subjectId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/assessment-by-teacher-subject/${teacherId}/${subjectId}`
        );
    }

    getAssessmentListByAcademicPlanSubject(
        academicPlanId: string,
        subjectId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/assessment-with-assessment-type-by-academic-plan-subject/${academicPlanId}/${subjectId}`
        );
    }

    getOnlyAssessment(
        teacherId: string,
        subjectId: string,
        academicPlanId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/only-assessment-type-by-teacher-academic-plan-subject/${teacherId}/${academicPlanId}/${subjectId}`
        );
    }

    createAssessment(data: any): Observable<any> {
        return this.http.post(`${url}/exam/assessment/add`, data);
    }

    deleteAssessment(assessmentId: string): Observable<any> {
        return this.http.delete(
            `${url}/exam/assessment/delete/${assessmentId}`
        );
    }

    // assignment api end point
    getAssignmentList(teacherId: any): Observable<any> {
        return this.http.get(`${url}/exam/assignment-by-teacher/${teacherId}`);
    }

    getSubmittedAssignments(filterData: any): Observable<any> {
        return this.http.get(
            `${url}/exam/student-assignment-by-academic-plan-subject-assignment/${filterData.academicPlanId}/${filterData.subjectId}/${filterData.assignmentId}`
        );
    }

    getOneAssignment(assignmentId: string): Observable<any> {
        return this.http.get(`${url}/exam/assignment/${assignmentId}`);
    }

    createAssignment(data: any): Observable<any> {
        return this.http.post(`${url}/exam/assignment/add`, data);
    }

    updateAssignment(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/exam/assignment/update/${id}`, data);
    }

    deleteAssignment(assignmentId: string): Observable<any> {
        return this.http.delete(
            `${url}/exam/assignment/delete/${assignmentId}`
        );
    }

    // quiz api end point
    getQuizList(teacherId: any): Observable<any> {
        return this.http.get(`${url}/exam/class-test-by-teacher/${teacherId}`);
    }

    getOneQuiz(quizId: string): Observable<any> {
        return this.http.get(`${url}/exam/class-test/${quizId}`);
    }

    createQuiz(data: any): Observable<any> {
        return this.http.post(`${url}/exam/class-test/add`, data);
    }

    updateQuiz(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/exam/class-test/update/${id}`, data);
    }

    deleteQuiz(assignmentId: string): Observable<any> {
        return this.http.delete(
            `${url}/exam/class-test/delete/${assignmentId}`
        );
    }

    // mid exam api end point
    getMidExamList(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/mid-term-examination-by-teacher/${teacherId}`
        );
    }

    getMidExamById(id: string): Observable<any> {
        return this.http.get(`${url}/exam/mid-term-examination/${id}`);
    }

    createMidExam(data: any): Observable<any> {
        return this.http.post(`${url}/exam/mid-term-examination/add`, data);
    }

    updateMidExam(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/exam/mid-term-examination/update/${id}`,
            data
        );
    }

    deleteMidExam(id: string): Observable<any> {
        return this.http.delete(
            `${url}/exam/mid-term-examination/delete/${id}`
        );
    }
    // subject api end point
    getSubjectList(teacherId: string): Observable<any> {
        return this.http.get<any>(
            `${url}/faculty/get-subject-by-teacher/${teacherId}`
        );
    }

    // mark submission api
    getStudentsMarksList(filterData: any): Observable<any> {
        return this.http.get<any>(
            `${url}/exam/students-all-marks-by-teacher-academic-plan-subject/${filterData.teacherId}/${filterData.planId}/${filterData.subjectId}`
        );
    }

    finalMarkSubmission(data: any): Observable<any> {
        return this.http.post(`${url}/exam/final-marks-submit`, data);
    }
    finalMarkSubmissionAutoSave(data: any): Observable<any> {
        return this.http.post(
            `${url}/exam/final-marks-submit`,
            data,
            {
                headers: { 'X-Skip-Interceptor': 'true' } // tell interceptor to skip
            }
        );
    }


    // /exam-session-program-by-semester/{semesterId}
    getExamSessionsBySemester(semesterId: string): Observable<any> {
        return this.http.get<any>(
            `${url}/exam/exam-session-program-by-semester/${semesterId}`
        );
    }


    getSubmittedExamMarksByExam(
        examId: number,
        teacherId: number
    ): Observable<any> {
        let userId = JSON.parse(localStorage.getItem("user") as string).userId;
        return this.http.get(
            `${url}/exam/exam-marks-exam-teacher/${examId}/${teacherId}/${userId}`
        );
    }

    getSubmittedMarksByTeacher(
        examId: number,
        evaluation: number,
        teacherId: number
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/evaluation-marks-by-evaluation-evaluation-type-teacher/${examId}/${evaluation}/${teacherId}`
        );
    }

    getSupervisionSubjectStudents(data: any): Observable<any> {
        return this.http.get(
            `${url}/auth/supervisor-by-teacher-study-program-academic-plan-semester-subject/${data.teacherId}/${data.studyProgramId}/${data.academicPlanId}/${data.semesterId}/${data.subjectId}`
        );
    }

    postSupervisionStudentsMark(data: any): Observable<any> {
        return this.http.post(
            `${url}/exam/non-theory-and-lab-marks-submit`,
            data
        );
    }

    // advising schedule
    getAdvisingScheduleList(teacherId: number): Observable<any> {
        return this.http.get<any>(
            `${url}/teacher/advising-schedule-by-teacher/${teacherId}`
        );
    }

    getAdvisingSchedule(id: number): Observable<any> {
        return this.http.get<any>(`${url}/teacher/advising-schedule/${id}`);
    }

    createAdvisingSchedule(data: any): Observable<any> {
        return this.http.post(`${url}/teacher/advising-schedule-add`, data);
    }

    updateAdvisingSchedule(data: any, id: number): Observable<any> {
        return this.http.put(
            `${url}/teacher/advising-schedule-update/${id}`,
            data
        );
    }

    deleteAdvisingSchedule(id: number): Observable<any> {
        return this.http.delete(
            `${url}/teacher/advising-schedule-delete/${id}`
        );
    }

    getStudentAppointments(teacherId: number): Observable<any> {
        return this.http.get<any>(
            `${url}/student/advisor-appointment-by-teacher/${teacherId}`
        );
    }

    updateStudentAppointment(
        data: any,
        appointmentId: number
    ): Observable<any> {
        return this.http.put<any>(
            `${url}/student/advisor-appointment-update/${appointmentId}`,
            data
        );
    }

    // teacher api end point
    getAllSubjects(): Observable<GenericResponse<Subject[]>> {
        return this.http.get<GenericResponse<Subject[]>>(
            `${url}/teacher/subject`
        );
    }
    getOneSubject(id: number): Observable<GenericResponse<Subject>> {
        return this.http.get<GenericResponse<Subject>>(
            `${url}/teacher/subject/${id}`
        );
    }

    getStudentsBySubject(
        subjectId: number,
        page: number,
        size: number
    ): Observable<GenericResponse<TeacherStudent[]>> {
        return this.http.get<GenericResponse<TeacherStudent[]>>(
            `${url}/teacher/subject/${subjectId}/student?page=${page}&size=${size}`
        );
    }
    getOneStudentBySubject(
        subjectId: number,
        studentId: number
    ): Observable<GenericResponse<TeacherStudent>> {
        return this.http.get<GenericResponse<TeacherStudent>>(
            `${url}/teacher/subject/${subjectId}/student/${studentId}`
        );
    }

    updateFinalGrade(
        subjectId: number,
        studentId: number,
        request: UpdateFinalGradeRequest
    ): Observable<GenericResponse<string>> {
        return this.http.put<GenericResponse<string>>(
            `${url}/teacher/subject/${subjectId}/student/${studentId}/final-grade`,
            request
        );
    }

    getNotifications(
        page: number,
        size: number
    ): Observable<GenericResponse<Notification[]>> {
        return this.http.get<GenericResponse<Notification[]>>(
            `${url}/teacher/notification?page=${page}&size=${size}`
        );
    }

    getNotificationTypes(): Observable<
        GenericResponse<SubjectNotificationType[]>
    > {
        return this.http.get<GenericResponse<SubjectNotificationType[]>>(
            `${url}/faculty/subject-notification-type`
        );
    }

    addNotification(
        request: AddNotificationRequest
    ): Observable<GenericResponse<string>> {
        return this.http.post<GenericResponse<string>>(
            `${url}/teacher/notification`,
            request
        );
    }
    deleteNotification(id: number): Observable<GenericResponse<string>> {
        return this.http.delete<GenericResponse<string>>(
            `${url}/teacher/notification/${id}`
        );
    }

    getTeachingTerm(
        subjectId: number,
        page: number,
        size: number
    ): Observable<GenericResponse<TeachingTerm[]>> {
        return this.http.get<GenericResponse<TeachingTerm[]>>(
            `${url}/teacher/teaching-term/subject/${subjectId}?page=${page}&size=${size}`
        );
    }

    getTeachingTermTypes(): Observable<GenericResponse<TeachingType[]>> {
        return this.http.get<GenericResponse<TeachingType[]>>(
            `${url}/faculty/teaching-type`
        );
    }

    addTeachingTerm(
        request: AddTeachingTermRequest
    ): Observable<GenericResponse<string>> {
        return this.http.post<GenericResponse<string>>(
            `${url}/teacher/teaching-term`,
            request
        );
    }
    updateSubjectSyllabus(
        subjectId: number,
        request: UpdateSubjectSyllabusRequest
    ): Observable<GenericResponse<string>> {
        return this.http.put<GenericResponse<string>>(
            `${url}/teacher/subject/${subjectId}/syllabus`,
            request
        );
    }

    addExam(
        subjectId: number,
        request: AddExamRequest
    ): Observable<GenericResponse<string>> {
        return this.http.post<GenericResponse<string>>(
            `${url}/teacher/subject/${subjectId}/exam`,
            request
        );
    }

    getAllStudentExam(
        subjectId: number,
        studentId: number
    ): Observable<GenericResponse<TakingExam>> {
        return this.http.get<GenericResponse<TakingExam>>(
            `${url}/teacher/subject/${subjectId}/student/${studentId}/taking-exam`
        );
    }

    getStudentPointsCalculated(
        subjectId: number,
        studentId: number
    ): Observable<GenericResponse<StudentPointsCalculated>> {
        return this.http.get<GenericResponse<StudentPointsCalculated>>(
            `${url}/teacher/subject/${subjectId}/student/${studentId}/taking-exam/point`
        );
    }
    updateStudentPoints(
        subjectId: number,
        studentId: number,
        request: UpdateStudentPointsRequest
    ): Observable<GenericResponse<string>> {
        return this.http.put<GenericResponse<string>>(
            `${url}/teacher/subject/${subjectId}/student/${studentId}/taking-exam`,
            request
        );
    }

    getOneStudentExam(
        subjectId: number,
        studentId: number,
        examId: number
    ): Observable<GenericResponse<TeacherExam>> {
        return this.http.get<GenericResponse<TeacherExam>>(
            `${url}/teacher/subject/${subjectId}/student/${studentId}/taking-exam/exam/${examId}`
        );
    }

    updateStudentExam(
        subjectId: number,
        studentId: number,
        examId: number,
        request: UpdateStudentExamRequest
    ): Observable<GenericResponse<string>> {
        return this.http.put<GenericResponse<string>>(
            `${url}/teacher/subject/${subjectId}/student/${studentId}/taking-exam/exam/${examId}`,
            request
        );
    }

    getAllStudents(
        page: number,
        size: number
    ): Observable<GenericResponse<TeacherStudent[]>> {
        return this.http.get<GenericResponse<TeacherStudent[]>>(
            `${url}/teacher/student?page=${page}&size=${size}`
        );
    }
    getOneStudent(
        studentId: number
    ): Observable<GenericResponse<TeacherStudent>> {
        return this.http.get<GenericResponse<TeacherStudent>>(
            `${url}/teacher/student/${studentId}`
        );
    }
    searchStudentsByFirstNameOrLastNameOrTranscriptIdentifierOrYearOfEnrollment(
        searchParam: string
    ): Observable<GenericResponse<TeacherStudent[]>> {
        return this.http.get<GenericResponse<TeacherStudent[]>>(
            `${url}/teacher/student?search=${searchParam}`
        );
    }

    getExamTerms(): Observable<GenericResponse<ExamTerm[]>> {
        return this.http.get<GenericResponse<ExamTerm[]>>(`${url}/exam/term`);
    }

    getExamTypes(): Observable<GenericResponse<ExamType[]>> {
        return this.http.get<GenericResponse<ExamType[]>>(
            `${url}/exam/exam-type`
        );
    }

    getAcademicPlanList(): Observable<any> {
        return this.http.get(`${url}/faculty/academic-plan`);
    }

    // challenge papers
    getChallengedPapers(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/student-challenge-paper-by-assigned-teacher/${teacherId}`
        );
    }
    getOneChallengePaper(paperId: string): Observable<any> {
        return this.http.get(`${url}/auth/student-challenge-paper/${paperId}`);
    }







    // teacher Dashboard
    // /timetable/teachers-current-session-class-counter-by-teacher/128
    getCurrentSessionClassCounter(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/teachers-current-session-class-counter-by-teacher/${teacherId}`
        );
    }

    // {{baseUrl}}/timetable/teachers-current-session-class-routine-by-teacher/128

    getCurrentSessionClassRoutine(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/teachers-current-session-class-routine-by-teacher/${teacherId}`
        );
    }
    // {{baseUrl}}/faculty/teacher-subject-of-current-session-by-teacher-id/128

    getCurrentSessionSubjects(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/teacher-subject-of-current-session-by-teacher-id/${teacherId}`
        );
    }

    // {{baseUrl}}/faculty/teacher-subject-enrolled-student-by-teacher-id/1

    getEnrolledStudents(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/teacher-subject-enrolled-student-by-teacher-id/${teacherId}`
        );
    }


    // {{baseUrl}}/exam/teacher-evaluation-of-current-session-by-teacher-id/128

    getCurrentSessionEvaluations(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/teacher-evaluation-of-current-session-by-teacher-id/${teacherId}`
        );
    }

    // {{baseUrl}}/exam/assignment-of-current-session-by-teacher/128

    getCurrentSessionAssignments(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/assignment-of-current-session-by-teacher/${teacherId}`
        );
    }
    // {{baseUrl}}/faculty/teacher-subject-final-marks-overview-of-current-session-by-teacher-id/1

    getCurrentSessionFinalMarks(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/teacher-subject-final-marks-overview-of-current-session-by-teacher-id/${teacherId}`
        );
    }










    getFinalExamMarksOverview(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/teacher-subject-final-marks-overview-of-current-session-by-teacher-id/${teacherId}`
        );
    }

    // /exam/assignment-by-teacher-and-academic-plan-and-subject/128/19/77

    getAssignmentByTeacherAndAcademicPlanAndSubject(teacherId: string, academicPlanId: string, subjectId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/assignment-by-teacher-and-academic-plan-and-subject/${teacherId}/${academicPlanId}/${subjectId}`
        );
    }


    // CIE
    // /exam/evaluation-by-teacher-academic-plan-subject/128/19/77

    getEvaluationByTeacherAcademicPlanSubject(teacherId: string, academicPlanId: string, subjectId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/evaluation-by-teacher-academic-plan-subject/${teacherId}/${academicPlanId}/${subjectId}`
        );
    }

    // /faculty/teacher-subject-by-teacher-id-and-academic-plan-id/128/19

    getTeacherSubjectByTeacherIdAndAcademicPlanId(teacherId: string, academicPlanId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/teacher-subject-by-teacher-id-and-academic-plan-id/${teacherId}/${academicPlanId}`
        );
    }




    // timetable/student-attendance-by-academic-plan-semester-subject-teacher/{academicPlanId}/{semesterId}/{subjectId}/{teacherId}
    getStudentAttendanceMarksResult(academicPlanId: string, semesterId: string, subjectId: string, teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/student-attendance-by-academic-plan-semester-subject-teacher/${academicPlanId}/${semesterId}/${subjectId}/${teacherId}`
        );
    }




    // {{baseurl}}auth/store-lab-external-examiner
    storeLabExternalExaminer(data: any): Observable<any> {
        return this.http.post(`${url}/auth/store-lab-external-examiner`, data);
    }

    // {{baseurl}}auth/lab-external-examiner-by-teacher/1
    getLabExternalExaminerByTeacher(teacherId: string): Observable<any> {
        return this.http.get(`${url}/auth/lab-external-examiner-by-teacher/${teacherId}`);
    }


    // {{baseUrl}}/university/external-universities
    getExternalUniversities(): Observable<any> {
        return this.http.get(`${url}/university/external-universities`);
    }


    // {{baseUrl}}/exam/students-all-combine-marks-by-teacher-academic-plan-subject/42/2/129
    getStudentsAllCombineMarksByTeacherAcademicPlanSubject(teacherId: string, academicPlanId: string, subjectId: string): Observable<any> {
        return this.http.get(`${url}/exam/students-all-combine-marks-by-teacher-academic-plan-subject/${teacherId}/${academicPlanId}/${subjectId}`);
    }

    // //employee-promotion-application
    // getEmployeePromotionApplication(teacherId: string): Observable<any> {
    //     return this.http.get(`${url}/auth/employee-promotion-application/${teacherId}`);

    // }
    getSinglePromotionApplication(id: number): Observable<any> {
        return this.http.get(`${url}/auth/single-promotion-application/${id}`);
    }
    ///employee-promotion-application (for post)
    storeEmployeePromotionApplication(data: any): Observable<any> {
        return this.http.post(`${url}/auth/employee-promotion-application`, data);
    }

    //employee-promotion-application-by-employee/{employeeId}
    getEmployeePromotionApplicationByEmployeeId(employeeId: number): Observable<any> {
        return this.http.get(`${url}/auth/employee-promotion-application-by-employee/${employeeId}`);
    }

    //employee-rrp-application-by-employee/{employeeId}
    getEmployeeRrpApplicationByEmployeeId(employeeId: number): Observable<any> {
        return this.http.get(`${url}/auth/employee-rrp-application-by-employee/${employeeId}`);
    }

    //employee-promotion-application
    // storeEmployeePromotionApplication(teacherId: string, data: any): Observable<any> {
    //     return this.http.post(`${url}/faculty/employee-promotion-application/${teacherId}`, data);
    // }

    // {{baseUrl}}/auth/teacher/1
    // getTeacherByUserId(userId: string): Observable<any> {
    //     return this.http.get(`${url}/auth/teacher/${userId}`);
    // }

    ///auth/teacher-by-user-id/{userId}
    getTeacherByUserId(userId: string): Observable<any> {
        return this.http.get(`${url}/auth/teacher-by-user-id/${userId}`);
    }

    ///all-promotion-application
    getAllPromotionApplications(): Observable<any> {
        return this.http.get(`${url}/auth/all-promotion-application`);
    }

    //employee-by-employee-id
    getEmployeeByEmployeeId(employeeId: string): Observable<any> {
        return this.http.get(`${url}/faculty/employee-by-employee-id/${employeeId}`);
    }

    ///employee-rrp-application for store
    storeEmployeeRrpApplication(data: any): Observable<any> {
        return this.http.post(`${url}/auth/employee-rrp-application`, data);
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

}
