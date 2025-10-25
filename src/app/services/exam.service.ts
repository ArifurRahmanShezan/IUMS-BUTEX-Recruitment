import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url } from "../core/models/API";

@Injectable({
    providedIn: "root",
})
export class ExamService {
    constructor(private http: HttpClient) { }

    // exam session api
    getExamSessionList(): Observable<any> {
        return this.http.get(`${url}/exam/exam-session`);
    }

    getExamSessionsByCommittee(id: number): Observable<any> {
        return this.http.get(
            `${url}/exam/exam-session-by-exam-committee/${id}`
        );
    }
    getExamSessionsByCentralCommittee(): Observable<any> {
        return this.http.get(
            `${url}/exam/exam-session-for-central-exam-committee`
        );
    }

    getExamSessionsByProgramAndPlan(
        programId: string,
        planId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/exam-session-by-study-program-academic-plan/${programId}/${planId}`
        );
    }

    getAssessmentTypesByAssessmentId(id: any): Observable<any> {
        return this.http.get(
            `${url}/exam/assessment-type-by-assessment/${id}`
        );
    }



    getExamSessionsByProgramPlanAndSemester(
        programId: string,
        planId: string,
        semesterId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/exam-session-list-study-program-academic-plan-semester/${programId}/${planId}/${semesterId}`
        );
    }

    getActiveExamSessionList(): Observable<any> {
        return this.http.get(`${url}/exam/exam-session-status-true`);
    }

    getStudyProgramByExamSession(id: number): Observable<any> {
        return this.http.get(
            `${url}/exam/exam-session-program-by-exam-session/${id}`
        );
    }

    getPlanByProgramExam(
        examSessionId: number,
        programId: number
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/exam-session-program-by-study-program-exam-session/${programId}/${examSessionId}`
        );
    }

    getExamSession(id: string): Observable<any> {
        return this.http.get(`${url}/exam/exam-session/${id}`);
    }

    createExamSession(data: any): Observable<any> {
        return this.http.post(`${url}/exam/exam-session/add`, data);
    }

    updateExamSession(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/exam/exam-session/update/${id}`, data);
    }

    deleteExamSession(id: string): Observable<any> {
        return this.http.delete(`${url}/exam/exam-session/delete/${id}`);
    }

    // admit card
    getStudentAdmitCardInfo(
        studentId: string,
        examSession: string
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/student-admit-card/${studentId}/exam-session/${examSession}`
        );
    }

    studentAdmitCard(studentId: string, semesterId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/student-admit-card/${studentId}/semester/${semesterId}`
        );
    }

    // exam api end point
    getExamList(): Observable<any> {
        return this.http.get(`${url}/exam/exams`);
    }

    getExamListByTeacher(teacherId: string): Observable<any> {
        let userId = JSON.parse(localStorage.getItem("user") as string).userId;
        return this.http.get(
            `${url}/exam/exams-by-teacher/${teacherId}/${userId}`
        );
    }

    getOneExam(examId: string): Observable<any> {
        return this.http.get(`${url}/exam/exams/${examId}`);
    }

    getExamByTeacher(examId: number, teacherId: number): Observable<any> {
        let userId = JSON.parse(localStorage.getItem("user") as string).userId;
        return this.http.get(
            `${url}/exam/exams-by-exam-teacher/${examId}/${teacherId}/${userId}`
        );
    }

    createExamByTeacher(data: any): Observable<any> {
        return this.http.post(`${url}/exam/exam-create`, data);
    }

    deleteExam(examId: string): Observable<any> {
        return this.http.delete(`${url}/exam/exams/delete/${examId}`);
    }

    // assessment
    getAssessmentTypeByPlanAndSubject(
        planId: number,
        subjectId: number
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/assessment-with-assessment-type-by-academic-plan-subject/${planId}/${subjectId}`
        );
    }

    getAssessmentTypeByPlanAndSubjectWithoutFinal(
        planId: number,
        subjectId: number
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/assessment-with-assessment-type-by-academic-plan-subject-without-final/${planId}/${subjectId}`
        );
    }

    getAssessmentTypeByPlanAndSubjectOnlyFinal(
        planId: number,
        subjectId: number
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/assessment-with-assessment-type-by-academic-plan-subject-only-final/${planId}/${subjectId}`
        );
    }

    // assignment api end point
    getAssignmentList(): Observable<any> {
        return this.http.get(`${url}/exam/assignment`);
    }
    getAssignmentListByTeacher(teacherId: string): Observable<any> {
        return this.http.get(`${url}/exam/assignment-by-teacher/${teacherId}`);
    }
    getAssignmentListBySubject(subjectId: string): Observable<any> {
        return this.http.get(`${url}/exam/assignment-by-subject/${subjectId}`);
    }

    getStudentSubmittedAssignmentList(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/student-assignment-by-student/${studentId}`
        );
    }

    studentAssignmentSubmission(data: any): Observable<any> {
        return this.http.post(`${url}/exam/student-assignment/add`, data);
    }

    // examiner assign
    getAssignedExaminers(): Observable<any> {
        return this.http.get(`${url}/exam/examiner-assign-all`);
    }
    getAssignedExaminer(id: string): Observable<any> {
        return this.http.get(`${url}/exam/examiner-assign-by-id/${id}`);
    }
    getExaminerByCommittee(committeeId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/examiner-assign-by-exam-committee/${committeeId}`
        );
    }
    postExaminerAssign(data: any): Observable<any> {
        return this.http.post(`${url}/exam/examiner-assign`, data);
    }

    putExaminerAssign(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/exam/examiner-assign-update/${id}`, data);
    }

    getExaminerAssignReport(data: any): Observable<any> {
        return this.http.get(`${url}/exam/examiner-assign-by-exam-committee-academic-plan-semester/${data?.examCommitteeId}/${data?.academicPlanId}/${data?.semesterId}`);
    }

    getExaminerReAssign(id: string): Observable<any> {
        return this.http.get(`${url}/exam/examiner-re-assign-by-id/${id}`);
    }

    getExaminerReAssignsByCommittee(committeeId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/examiner-re-assign-by-committee/${committeeId}`
        );
    }

    getExaminerReAssigns(): Observable<any> {
        return this.http.get(`${url}/exam/examiner-re-assign-by-controller`);
    }

    approveExaminerReAssign(id: string): Observable<any> {
        return this.http.put(
            `${url}/exam/examiner-re-assign-approve/${id}`,
            {}
        );
    }

    rejectExaminerReAssign(id: string): Observable<any> {
        return this.http.put(`${url}/exam/examiner-re-assign-reject/${id}`, {});
    }

    reassignExaminer(data: any, examinerId: string): Observable<any> {
        return this.http.put(
            `${url}/auth/external-examiner-re-assign/${examinerId}`,
            data
        );
    }

    approveExaminerAssign(id: string): Observable<any> {
        return this.http.put(`${url}/exam/examiner-assign-approve/${id}`, {});
    }
    rejectExaminerAssign(id: string): Observable<any> {
        return this.http.put(`${url}/exam/examiner-assign-reject/${id}`, {});
    }

    getExaminersAndQuestionSetter(
        academicPlanId: string,
        semesterId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/question-setter-and-examiner-by-academic-plan-and-semester/${academicPlanId}/${semesterId}`
        );
    }

    getExamInvigilators(
        examCommitteeId: string,
        departmentId: string,
        academicPlanId: string,
        semesterId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/timetable/exam-invigilators-of-exams-by-exam-committee-department-academic-plan-semester/${examCommitteeId}/${departmentId}/${academicPlanId}/${semesterId}`
        );
    }

    getThirdExaminerStudents(
        examCommitteeId: string,
        academicPlanId: string,
        semesterId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/third-examiner-student-by-exam-committee-academic-plan-semester/${examCommitteeId}/${academicPlanId}/${semesterId}`
        );
    }

    getExaminationStatement(
        examSessionId: string,
        academicPlanId: string,
        semesterId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/examination-statement-by-academic-plan-semester-exam-session/${academicPlanId}/${semesterId}/${examSessionId}`
        );
    }

    // marks api
    teacherMarksSubmission(data: any): Observable<any> {
        return this.http.post(`${url}/exam/student-marks/add`, data);
    }

    teacherExamMarksSubmission(data: any): Observable<any> {
        return this.http.post(`${url}/exam/exam-marks-store`, data);
    }

    getStudentLiveResult(data: any): Observable<any> {
        return this.http.get(
            `${url}/exam/student-marks-by-student-teacher-academic-plan-subject/${data.studentId}/${data.teacherId}/${data.planId}/${data.subjectId}`
        );
    }

    getStudentBeforeFinalMarks(data: any): Observable<any> {
        return this.http.get(
            `${url}/exam/final-marks-by-student-academic-plan-subject-teacher/${data.studentId}/${data.planId}/${data.subjectId}/${data.teacherId}`
        );
    }

    // /student-attendance-by-academic-plan-semester-subject-teacher-student/{academicPlanId}/{semesterId}/{subjectId}/{teacherId}/{studentId}
    getStudentAttendanceMarksResult(academicPlanId: string, semesterId: string, subjectId: string, teacherId: string, studentId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/student-attendance-by-academic-plan-semester-subject-teacher-student/${academicPlanId}/${semesterId}/${subjectId}/${teacherId}/${studentId}`
        );
    }



    getBeforeFinalMarksSubmissionStatus(data: any): Observable<any> {
        return this.http.get(
            `${url}/exam/student-marks-by-academic-plan-semester/${data.academicPlanId}/${data.semesterId}`
        );
    }

    getNonTheoryOrLabMarks(data: any): Observable<any> {
        return this.http.get(
            `${url}/exam/detailed-final-marks-for-non-theory-by-academic-plan-subject-teacher/${data.academicPlanId}/${data.subjectId}/${data.teacherId}`
        );
    }

    getStudentsBeforeFinalMarkForExamController(
        academicPlanId: string,
        subjectId: string,
        teacherId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/before-final-marks-by-academic-plan-subject-teacher/${academicPlanId}/${subjectId}/${teacherId}`
        );
    }

    getExamMarks(
        examSessionId: number,
        studyProgramId: number,
        planId: number,
        semesterId: number,
        subjectId: number
    ): Observable<any> {
        return this.http.get(
            `${url}/exam/exam-marks-by-exam-session-study-program-academic-plan-semester-subject/${examSessionId}/${studyProgramId}/${planId}/${semesterId}/${subjectId}`
        );
    }

    approveExamMark(
        examSessionId: number,
        planId: number,
        subjectId: number,
        data: any
    ): Observable<any> {
        return this.http.put(
            `${url}/exam/exam-marks-approve/${examSessionId}/${planId}/${subjectId}`,
            data
        );
    }

    assignThirdExaminer(data: any): Observable<any> {
        return this.http.post(
            `${url}/exam/third-examiner-assign-of-student`,
            data
        );
    }

    // marks approval apis
    getGradeSheetResults(data: any): Observable<any> {
        return this.http.get(
            `${url}/exam/show-pending-final-marks-for-exam-committee-by-subject-academicPlan-teacher-study-program-semester-exam-session/${data.subjectId}/${data.academicPlanId}/${data.teacher}/${data.studyProgramId}/${data.semesterId}/${data.examSessionId}`
        );
    }
    getResultForApprove(data: any): Observable<any> {
        return this.http.get(
            `${url}/exam/show-pending-final-marks-for-exam-committee-by-subject-academicPlan-teacher-study-program-semester/${data.subjectId}/${data.academicPlanId}/${data.teacher}/${data.studyProgramId}/${data.semesterId}`
        );
    }

    getResultForApproveByDean(data: any): Observable<any> {
        return this.http.get(
            `${url}/exam/show-pending-final-marks-for-dean-by-subject-academicPlan-teacher/${data.subject}/${data.plan}/${data.teacher}`
        );
    }

    getResultForApprovalForRegister(data: any): Observable<any> {
        return this.http.get(
            `${url}/exam/show-pending-final-marks-for-registrar-by-subject-academicPlan-teacher/${data.subject}/${data.plan}/${data.teacher}`
        );
    }

    getResultForApprovalForExamController(data: any): Observable<any> {
        return this.http.get(
            `${url}/exam/show-pending-final-marks-for-exam-controller-by-subject-academicPlan-teacher/${data.subject}/${data.plan}/${data.teacher}`
        );
    }

    approveFinalMarksByHead(data: any): Observable<any> {
        return this.http.put(
            `${url}/exam/approve-student-final-marks-by-department-head`,
            data
        );
    }

    rejectFinalMarksByHead(data: any): Observable<any> {
        return this.http.put(
            `${url}/exam/reject-student-final-marks-by-department-head`,
            data
        );
    }

    approveFinalMarksByExamCommittee(data: any): Observable<any> {
        return this.http.put(
            `${url}/exam/approve-student-final-marks-by-exam-committee`,
            data
        );
    }

    rejectFinalMarksByExamCommittee(data: any): Observable<any> {
        return this.http.put(
            `${url}/exam/reject-student-final-marks-by-exam-committee`,
            data
        );
    }

    approveFinalMarksByDean(data: any): Observable<any> {
        return this.http.put(
            `${url}/exam/approve-student-final-marks-by-dean`,
            data
        );
    }
    rejectFinalMarksByDean(data: any): Observable<any> {
        return this.http.put(
            `${url}/exam/reject-student-final-marks-by-dean`,
            data
        );
    }

    approveFinalMarksByRegister(data: any): Observable<any> {
        return this.http.put(
            `${url}/exam/approve-student-final-marks-by-registrar`,
            data
        );
    }
    rejectFinalMarksByRegister(data: any): Observable<any> {
        return this.http.put(
            `${url}/exam/reject-student-final-marks-by-registrar`,
            data
        );
    }

    publishFinalResultByExamController(data: any): Observable<any> {
        return this.http.put(
            `${url}/exam/approve-student-final-marks-by-exam-controller`,
            data
        );
    }

    // challenge paper get/approval apis
    getChallengePaperByHead(data: any): Observable<any> {
        return this.http.get(
            `${url}/exam/show-challenged-paper-pending-final-marks-for-department-head-by-subject-academicPlan/${data.subject}/${data.plan}`
        );
    }
    approveChallengePaperByHead(data: any): Observable<any> {
        return this.http.put(
            `${url}/exam/approve-student-challenged-paper-final-marks-by-department-head`,
            data
        );
    }
    rejectChallengePaperByHead(data: any): Observable<any> {
        return this.http.put(
            `${url}/exam/reject-student-challenged-paper-final-marks-by-department-head`,
            data
        );
    }

    getChallengePaperByDean(data: any): Observable<any> {
        return this.http.get(
            `${url}/exam/show-challenged-paper-pending-final-marks-for-dean-by-subject-academicPlan/${data.subject}/${data.plan}`
        );
    }
    approveChallengePaperByDean(data: any): Observable<any> {
        return this.http.put(
            `${url}/exam/approve-student-challenged-paper-final-marks-by-dean`,
            data
        );
    }
    rejectChallengePaperByDean(data: any): Observable<any> {
        return this.http.put(
            `${url}/exam/reject-student-challenged-paper-final-marks-by-dean`,
            data
        );
    }

    getChallengePaperByRegister(data: any): Observable<any> {
        return this.http.get(
            `${url}/exam/show-challenged-paper-pending-final-marks-for-registrar-by-subject-academicPlan/${data.subject}/${data.plan}`
        );
    }
    approveChallengePaperByRegister(data: any): Observable<any> {
        return this.http.put(
            `${url}/exam/approve-student-challenged-paper-final-marks-by-registrar`,
            data
        );
    }
    rejectChallengePaperByRegister(data: any): Observable<any> {
        return this.http.put(
            `${url}/exam/reject-student-challenged-paper-final-marks-by-registrar`,
            data
        );
    }

    getChallengePaperByExamController(data: any): Observable<any> {
        return this.http.get(
            `${url}/exam/show-challenged-paper-pending-final-marks-for-exam-controller-by-subject-academicPlan\/${data.subject}/${data.plan}`
        );
    }
    publishChallengePaperByExamController(data: any): Observable<any> {
        return this.http.put(
            `${url}/exam/approve-student-challenged-paper-final-marks-by-exam-controller`,
            data
        );
    }

    // question rubrics api end point
    getQuestionRubrics(): Observable<any> {
        return this.http.get(`${url}/exam/question-set`);
    }
    getQuestionRubricsByTeacher(teacherId: number): Observable<any> {
        return this.http.get(
            `${url}/exam/question-set-by-teacher/${teacherId}`
        );
    }
    getQuestionRubricsByCommittee(id: string): Observable<any> {
        return this.http.get(
            `${url}/exam/question-set-by-exam-committee/${id}`
        );
    }
    getSingleQuestionRubric(id: number): Observable<any> {
        return this.http.get(`${url}/exam/question-set/${id}`);
    }
    postQuestionRubric(data: any): Observable<any> {
        return this.http.post(`${url}/exam/question-set-add`, data);
    }
    updateQuestionRubric(data: any, id: number): Observable<any> {
        return this.http.put(
            `${url}/exam//question-rubrics-update/${id}`,
            data
        );
    }
    deleteQuestionRubric(id: number): Observable<any> {
        return this.http.get(`${url}/exam/question-set-delete/${id}`);
    }

    approveQuestionRubric(id: string): Observable<any> {
        return this.http.put(`${url}/exam/question-set-approve/${id}`, {});
    }

    rejectQuestionRubric(id: string): Observable<any> {
        return this.http.put(`${url}/exam/question-set-reject/${id}`, {});
    }

    // examination tabulation sheet
    getExaminationTabulationSheet(data: any): Observable<any> {
        return this.http.get(
            `${url}/exam/final-tabulation-sheet-by-department-study-program-academic-plan-semester-exam-session-type-of-result/${data.departmentId}/${data.programId}/${data.planId}/${data.semesterId}/${data.examSessionId}/${data.typeOfResult}`
        );
    }

    getExaminationTabulations(): Observable<any> {
        return this.http.get(`${url}/exam/examination-result-tabulations`);
    }

    getExaminationTabulation(id: string): Observable<any> {
        return this.http.get(`${url}/exam/examination-result-tabulation/${id}`);
    }

    generateExaminationTabulationSheet(data: any): Observable<any> {
        return this.http.post(
            `${url}/exam/examination-result-tabulation-generate`,
            data
        );
    }

    // exam tracking apis
    getExams(): Observable<any> {
        return this.http.get(
            `${url}/exam/all-exam-info-list-by-exam-controller`
        );
    }
    getExamsByCommittee(committeeId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/all-exam-info-list-by-exam-committee/${committeeId}`
        );
    }
    getExamsInformationByExamSession(sessionId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/exam-info-by-exam-session/${sessionId}`
        );
    }
    sendPaperToSecondExaminer(examId: string): Observable<any> {
        return this.http.put(
            `${url}/exam/paper-send-to-second-examiner-by-exams/${examId}`,
            {}
        );
    }

    // spacial exam api end point
    getSpecialsExams(): Observable<any> {
        return this.http.get(`${url}/exam/special-exam`);
    }

    getSpecialsExamByCommittee(committeeId: string): Observable<any> {
        return this.http.get(
            `${url}/exam/special-exam-by-exam-committee/${committeeId}`
        );
    }

    getSpecialsExam(examId: string): Observable<any> {
        return this.http.get(`${url}/exam/special-exam/${examId}`);
    }

    approveSpecialExamByExamController(examId: string): Observable<any> {
        return this.http.put(`${url}/exam/special-exam-approve/${examId}`, {});
    }

    createSpecialExam(data: any): Observable<any> {
        return this.http.post(`${url}/exam/special-exam-create`, data);
    }

    // spacial exam application
    getSpecialExamApplications(): Observable<any> {
        return this.http.get(`${url}/auth/all-student-special-subject`);
    }
    getSpecialExamApplicationsByDepartmentHead(
        headId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/student-special-subject-by-department-head/${headId}`
        );
    }
    getSpecialExamApplicationsByCommittee(
        committeeId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/student-special-subject-by-committee/${committeeId}`
        );
    }

    approveSpecialExamApplicationByDepartment(id: string): Observable<any> {
        return this.http.put(
            `${url}/auth/approve-by-department-head-student-special-subject/${id}`,
            {}
        );
    }

    approveSpecialExamApplicationByExamController(id: string): Observable<any> {
        return this.http.put(
            `${url}/auth/approve-by-exam-controller-student-special-subject/${id}`,
            {}
        );
    }

    approveSpecialExamApplicationByExamCommittee(id: string): Observable<any> {
        return this.http.put(
            `${url}/auth/approve-by-exam-committee-student-special-subject/${id}`,
            {}
        );
    }

    rejectSpecialExamApplicationByDepartment(id: string): Observable<any> {
        return this.http.put(
            `${url}/auth/reject-by-department-head-student-special-subject/${id}`,
            {}
        );
    }

    rejectSpecialExamApplicationByExamController(id: string): Observable<any> {
        return this.http.put(
            `${url}/auth/reject-by-exam-controller-student-special-subject/${id}`,
            {}
        );
    }

    rejectSpecialExamApplicationByExamCommittee(id: string): Observable<any> {
        return this.http.put(
            `${url}/auth/reject-by-exam-committee-student-special-subject/${id}`,
            {}
        );
    }

    // exam evaluation
    getEvaluationsByTeacher(teacherId: string): Observable<any> {
        return this.http.get(`${url}/exam/evaluation-by-teacher/${teacherId}`);
    }
    getEvaluationsByID(id: string): Observable<any> {
        return this.http.get(`${url}/exam/evaluation/${id}`);
    }
    postEvaluation(data: any): Observable<any> {
        return this.http.post(`${url}/exam/evaluation-add`, data);
    }
    putEvaluation(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/exam/evaluation-update/${id}`, data);
    }
    deleteEvaluation(id: string): Observable<any> {
        return this.http.delete(`${url}/exam/evaluation-delete/${id}`);
    }




    // exams-by-academic-plan-semester/1/1
    getExamsByAcademicPlanAndSemesterForCommitteeScrutinizer(academicPlanId: string, semesterId: string): Observable<any> {
        return this.http.get(`${url}/exam/exams-by-academic-plan-semester/${academicPlanId}/${semesterId}`);
    }



    // committee scrutinizer get exam Details
    getCommitteeScrutinizerExamDetails(examId: string): Observable<any> {
        return this.http.get(`${url}/exam/exams-by-exam-id/${examId}`);
    }




    // gracing
    // {{baseUrl}}/exam/all-gracing-rules
    getAllGracingRules(): Observable<any> {
        return this.http.get(`${url}/exam/all-gracing-rules`);
    }

    // {{baseUrl}}/exam/gracing-rules-by-id/1
    getGracingRulesById(id: string): Observable<any> {
        return this.http.get(`${url}/exam/gracing-rules-by-id/${id}`);
    }

    // {{baseUrl}}/exam/store-gracing-rules
    storeGracingRules(data: any): Observable<any> {
        return this.http.post(`${url}/exam/store-gracing-rules`, data);
    }

    // {{baseUrl}}/exam/update-gracing-rules-status-by-id/1
    updateGracingRulesStatusById(id: string): Observable<any> {
        return this.http.put(`${url}/exam/update-gracing-rules-status-by-id/${id}`, {});
    }

    // {{baseUrl}}/exam/add-gracing-rules-cut-marks-by-gracing-rules/1
    addGracingRulesCutMarksByGracingRules(id: string, data: any): Observable<any> {
        return this.http.put(`${url}/exam/add-gracing-rules-cut-marks-by-gracing-rules/${id}`, data);
    }







    // /exam/grace-eligible-students-by-academic-plan-and-semester-and-exam-session/15/113/4
    getGraceEligibleStudentsByAcademicPlanAndSemesterAndExamSession(academicPlanId: string, semesterId: string, examSessionId: string): Observable<any> {
        return this.http.get(`${url}/exam/grace-eligible-students-by-academic-plan-and-semester-and-exam-session/${academicPlanId}/${semesterId}/${examSessionId}`);
    }

    // {{baseUrl}}/exam/grace-marks-store
    storeGraceMarks(data: any): Observable<any> {
        return this.http.put(`${url}/exam/grace-marks-store`, data);
    }



    ///exam/graced-students-by-academic-plan-and-semester-and-exam-session/15/113/4
    getGracedStudentsByAcademicPlanAndSemesterAndExamSession(academicPlanId: string, semesterId: string, examSessionId: string): Observable<any> {
        return this.http.get(`${url}/exam/graced-students-by-academic-plan-and-semester-and-exam-session/${academicPlanId}/${semesterId}/${examSessionId}`);
    }



    // /exam/examination-result-tabulation-by-exam-committee/11
    getExaminationResultTabulationByExamCommittee(examCommitteeId: string): Observable<any> {
        return this.http.get(`${url}/exam/examination-result-tabulation-by-exam-committee/${examCommitteeId}`);
    }

    // /exam/approve-examination-result-tabulation/3
    approveExaminationResultTabulation(id: string): Observable<any> {
        return this.http.put(`${url}/exam/approve-examination-result-tabulation/${id}`, {});
    }



    // /exam/approve-examination-result-tabulation/3
    approveExaminationResultTabulationByExamCommitteeChairman(id: string): Observable<any> {
        return this.http.put(`${url}/exam/approve-examination-result-tabulation/${id}`, {});
    }




    // /committee-member-by-committee-user/{committeeId}/{userId}
    getCommitteeMemberByCommitteeUser(committeeId: string, userId: string): Observable<any> {
        return this.http.get(`${url}/committee/committee-member-by-committee-user/${committeeId}/${userId}`);
    }



    // {{baseUrl}}/exam/committee-chairman-approve-examination-result-tabulation/3
    committeeChairmanApproveExaminationResultTabulation(id: string, data: any): Observable<any> {
        return this.http.put(`${url}/exam/committee-chairman-approve-examination-result-tabulation/${id}`, data);
    }

    // {{baseUrl}}/exam/committee-chairman-reject-examination-result-tabulation/3
    committeeChairmanRejectExaminationResultTabulation(id: string, data: any): Observable<any> {
        return this.http.put(`${url}/exam/committee-chairman-reject-examination-result-tabulation/${id}`, data);
    }

    // {{baseUrl}}/exam/committee-chairman-review-examination-result-tabulation/3
    committeeChairmanReviewExaminationResultTabulation(id: string, data: any): Observable<any> {
        return this.http.put(`${url}/exam/committee-chairman-review-examination-result-tabulation/${id}`, data);
    }

    // {{baseUrl}}/exam/exam-controller-comment-examination-result-tabulation/3
    examControllerCommentExaminationResultTabulation(id: string, data: any): Observable<any> {
        return this.http.put(`${url}/exam/exam-controller-comment-examination-result-tabulation/${id}`, data);
    }




    // {{baseUrl}}/exam/examination-result-tabulation-by-vice-chancellor/1
    getExaminationResultTabulationByViceChancellor(vcId: string): Observable<any> {
        return this.http.get(`${url}/exam/examination-result-tabulation-by-vice-chancellor/${vcId}`);
    }






    // {{baseurl}}/exam/vice-chancellor-approve-examination-result-tabulation/3
    viceChancellorApproveExaminationResultTabulation(id: string, data: any): Observable<any> {
        return this.http.put(`${url}/exam/vice-chancellor-approve-examination-result-tabulation/${id}`, data);
    }
    // {{baseurl}}/exam/vice-chancellor-reject-examination-result-tabulation/3
    viceChancellorRejectExaminationResultTabulation(id: string, data: any): Observable<any> {
        return this.http.put(`${url}/exam/vice-chancellor-reject-examination-result-tabulation/${id}`, data);
    }

    // {{baseurl}}/exam/vice-chancellor-review-examination-result-tabulation/3
    viceChancellorReviewExaminationResultTabulation(id: string, data: any): Observable<any> {
        return this.http.put(`${url}/exam/vice-chancellor-review-examination-result-tabulation/${id}`, data);
    }






    // /student-lab-experiment-by-student-academic-plan-semester-subject/{studentId}/{academicPlanId}/{semesterId}/{subjectId}
    getStudentLabExperimentByStudentAcademicPlanSemesterSubject(studentId: string, academicPlanId: string, semesterId: string, subjectId: string): Observable<any> {
        return this.http.get(`${url}/exam/student-lab-experiment-by-student-academic-plan-semester-subject/${studentId}/${academicPlanId}/${semesterId}/${subjectId}`);
    }

}