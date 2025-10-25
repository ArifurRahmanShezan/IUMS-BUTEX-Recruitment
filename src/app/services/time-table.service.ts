import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url } from "../core/models/API";

@Injectable({
    providedIn: "root",
})
export class TimeTableService {
    constructor(private http: HttpClient) { }

    //facility apis
    getFacilityList(): Observable<any> {
        return this.http.get(`${url}/timetable/facility`);
    }

    getFacility(id: string): Observable<any> {
        return this.http.get(`${url}/timetable/facility/${id}`);
    }

    createNewFacility(data: any): Observable<any> {
        return this.http.post(`${url}/timetable/facility/add`, data);
    }

    updateFacility(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/timetable/facility/update/${id}`, data);
    }

    deleteFacility(id: string): Observable<any> {
        return this.http.delete(`${url}/timetable/facility/delete/${id}`);
    }

    // academic plan
    getWeekendList(): Observable<any> {
        return this.http.get(`${url}/timetable/weekend`);
    }

    createNewWeekend(data: any): Observable<any> {
        return this.http.post(`${url}/timetable/weekend/add`, data);
    }

    deleteWeekend(id: string): Observable<any> {
        return this.http.delete(`${url}/timetable/weekend/delete/${id}`);
    }

    getHolidayList(): Observable<any> {
        return this.http.get(`${url}/timetable/holiday`);
    }

    createNewHoliday(data: any): Observable<any> {
        return this.http.post(`${url}/timetable/holiday/add`, data);
    }

    deleteHoliday(id: string): Observable<any> {
        return this.http.delete(`${url}/timetable/holiday/delete/${id}`);
    }

    // work day's
    getWorkDayList(): Observable<any> {
        return this.http.get(`${url}/timetable/working-days`);
    }
    getWorkDay(year: string): Observable<any> {
        return this.http.get(`${url}/timetable/working-days/${year}`);
    }
    generateWorkDays(data: any): Observable<any> {
        return this.http.post(`${url}/timetable/generate/working-days`, data);
    }

    // routine
    getAllRoutine(): Observable<any> {
        return this.http.get(`${url}/timetable/routine`);
    }

    getRoutinesByDepartmentHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/routine-by-department-head-id/${headId}`
        );
    }

    getSevenDaysRoutine(
        planId: string,
        subjectId: string,
        teacherId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/timetable/class-routine-by-student-academic-plan-subject-teacher/${planId}/${subjectId}/${teacherId}`
        );
    }

    getStudentRoutineList(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/class-routine-of-student/${studentId}`
        );
    }

    getClassRoutineByTeacher(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/class-routine-of-teacher/${teacherId}`
        );
    }

    getClassRoutineByPlanAndSemester(
        planId: string,
        semesterId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/timetable/class-routine-by-academic-plan-semester/${planId}/${semesterId}`
        );
    }

    getClassRoutineByDepartmentAndDate(
        departmentId: string,
        date: any
    ): Observable<any> {
        return this.http.get(
            `${url}/timetable/routine/find-by-department-date-range/${departmentId}/${date.from}/${date.to}`
        );
    }

    getClassRoutineByDepartmentHeadAndDate(
        departmentHeadId: string,
        date: any
    ): Observable<any> {
        return this.http.get(
            `${url}/timetable/weekly-routine-by-department-head-start-end-date/${departmentHeadId}/${date.from}/${date.to}`
        );
    }

    // routine slot
    getRoutineSlots(): Observable<any> {
        return this.http.get(`${url}/timetable/routine-slot`);
    }

    getRoutineSlotsByDepartmentHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/routine-slot-by-department-head-id/${headId}`
        );
    }

    getExamRoutineSlotsByCommittee(committeeId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/exam-slot-by-committee-id/${committeeId}`
        );
    }

    filterSlot(filterValues: any): Observable<any> {
        return this.http.get(
            `${url}/timetable/available-routine-slot-by-startDate-endDate-day-building-room-department/${filterValues.startDate}/${filterValues.endDate}/${filterValues.day}/${filterValues.buildingId}/${filterValues.roomId}/${filterValues.departmentId}`
        );
    }

    filterExamSlot(filterValues: any): Observable<any> {
        // return this.http.get(
        //     `${url}/timetable/available-routine-slot-for-exam-by-date-day-building-room-department/${filterValues.date}/${filterValues.day}/${filterValues.buildingId}/${filterValues.roomId}/${filterValues.departmentId}`
        // );
        return this.http.get(
            `${url}/timetable/available-exam-slot-for-exam-by-date-day-building-room/${filterValues.date}/${filterValues.day}/${filterValues.buildingId}/${filterValues.roomId}`
        );
    }




    getRoutineSlot(id: number): Observable<any> {
        return this.http.get(`${url}/timetable/routine-slot/${id}`);
    }




    createRoutineSlot(data: any): Observable<any> {
        return this.http.post(`${url}/timetable/routine-slot-add`, data);
    }
    createCommitteeExamSlot(data: any): Observable<any> {
        return this.http.post(`${url}/timetable/exam-slot-add`, data);
    }




    updateRoutineSlot(data: any, id: number): Observable<any> {
        return this.http.put(
            `${url}/timetable/routine-slot-update/${id}`,
            data
        );
    }
    updateCommitteeExamSlot(data: any, id: number): Observable<any> {
        return this.http.put(
            `${url}/timetable/exam-slot-update/${id}`,
            data
        );
    }


    deleteRoutineSlot(id: number): Observable<any> {
        return this.http.delete(`${url}/timetable/routine-slot-delete/${id}`);
    }
    deleteCommitteExamSlot(id: number): Observable<any> {
        return this.http.delete(`${url}/timetable/exam-slot-delete/${id}`);
    }




    // routine api end point
    getSingleRoutine(id: string): Observable<any> {
        return this.http.get(`${url}/timetable/routine/${id}`);
    }

    getRoutinesForCourseAuthoring(
        planId: number,
        semesterId: number,
        subjectId: number,
        teacherId: number
    ): Observable<any> {
        return this.http.get(
            `${url}/timetable/find-by-academic-plan-semester-subject-teacher/${planId}/${semesterId}/${subjectId}/${teacherId}`
        );
    }

    createNewRoutine(data: any): Observable<any> {
        return this.http.post(`${url}/timetable/routine/add`, data);
    }

    // /timetable/lab-routine/add
    createNewLabRoutine(data: any): Observable<any> {
        return this.http.post(`${url}/timetable/lab-routine/add`, data);
    }



    // /exam-routine-for-lab/add
    createNewLabExternalRoutine(data: any): Observable<any> {
        return this.http.post(`${url}/timetable/exam-routine-for-lab/add`, data);
    }

    // @PutMapping("/lab-final-declare/{id}")
    updateLabRoutineList(id: string): Observable<any> {
        return this.http.put(`${url}/timetable/lab-final-declare/${id}`, {});
    }



    // exam/student-lab-experiment-final-marks/{teacherId}/{academicPlanId}/{semesterId}/{subjectId}
    getStudentLabExperimentFinalMarks(teacherId: any, academicPlanId: any, semesterId: any, subjectId: any): Observable<any> {
        return this.http.get(`${url}/exam/student-lab-experiment-final-marks/${teacherId}/${academicPlanId}/${semesterId}/${subjectId}`);
    }



    updateRoutine(data: any): Observable<any> {
        return this.http.put(`${url}/timetable/routine/update`, data);
    }

    updateRoutineByTeacher(data: any): Observable<any> {
        return this.http.post(`${url}/timetable/cancel-class-by-teacher`, data);
    }

    // exam routine
    getAllExamRoutine(): Observable<any> {
        return this.http.get(`${url}/timetable/exam-routine`);
    }

    getExamRoutinesByUser(userId: string): Observable<any> {
        return this.http.get(`${url}/timetable/exam-routine-by-user/${userId}`);
    }

    // exam-routine-for-departmental-exam-committee-by-user
    getExamRoutinesForDepartmentalExamCommitteeByUser(userId: string): Observable<any> {
        return this.http.get(`${url}/timetable/exam-routine-for-departmental-exam-committee-by-user/${userId}`);
    }


    getSingleExamRoutine(id: string): Observable<any> {
        return this.http.get(`${url}/timetable/exam-routine/${id}`);
    }

    getRoutinesByDateRange(fromDate: string, toDate: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/exam-routine-by-date-range/${fromDate}/${toDate}`
        );
    }

    getExamRoutineByStudent(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/exam-routine-by-student/${studentId}`
        );
    }
    getExamRoutineByTeacher(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/invigilator-exam-routine/${teacherId}`
        );
    }

    getInvigilatorsByExamRoutine(id: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/exam-invigilator-by-exam-routine/${id}`
        );
    }

    getExamRoutineForApproval(
        programId: string,
        planId: string,
        sessionId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/timetable/controller-approval-exam-routine-list-by-study-program-academic-plan-exam-session/${programId}/${planId}/${sessionId}`
        );
    }

    getExamRoutineForPrint(
        programId: string,
        planId: string,
        sessionId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/timetable/controller-approved-exam-routine-list-by-study-program-academic-plan-exam-session/${programId}/${planId}/${sessionId}`
        );
    }

    approveExamRoutineByExamController(data: any): Observable<any> {
        return this.http.put(
            `${url}/timetable/exam-routine-approve-by-exam-controller`,
            data
        );
    }

    rejectExamRoutineByExamController(data: any): Observable<any> {
        return this.http.put(
            `${url}/timetable/exam-routine-approve-by-exam-controller`,
            data
        );
    }

    createNewExamRoutine(data: any): Observable<any> {
        return this.http.post(`${url}/timetable/exam-routine/add`, data);
    }

    getDraftedRoutineInformation(data: any): Observable<any> {
        return this.http.get(
            `${url}/timetable/routine-by-department-study-program-exam-session-academic-plan-semester-exam-committee/${data?.departmentId}/${data?.studyProgramId}/${data?.examSessionId}/${data?.academicPlanId}/${data?.semesterId}/${data?.examCommitteeId}`
        );
    }

    updateExamRoutine(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/timetable/exam-routine/update/${id}`,
            data
        );
    }

    getExamAttendanceByRoutine(routineId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/exam-attendance-by-exam-routine/${routineId}`
        );
    }

    examPostPonedReport(data: any): Observable<any> {
        return this.http.get(
            `${url}/timetable/postpone-routine-by-exam-committee-academic-plan-semester/${data?.examCommitteeId}/${data?.academicPlanId}/${data?.semesterId}`
        );
    }

    // exam students
    getStudentsFroExamAttendanceByRoutine(routineId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/student-of-exam-attendance-by-exam-routine/${routineId}`
        );
    }

    // reports
    takenClassReport(
        planId: string,
        semesterId: string,
        subjectId: string,
        teacherId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/timetable/taken-class-by-academic-plan-semester-subject-teacher/${planId}/${semesterId}/${subjectId}/${teacherId}`
        );
    }

    nonTakenClassReport(
        planId: string,
        semesterId: string,
        subjectId: string,
        teacherId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/timetable/non-taken-class-by-academic-plan-semester-subject-teacher//${planId}/${semesterId}/${subjectId}/${teacherId}`
        );
    }

    getSubjectWiseAttendanceReport(
        planId: string,
        semesterId: string,
        subjectId: string,
        teacherId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/timetable/student-attendance-by-academic-plan-semester-subject-teacher/${planId}/${semesterId}/${subjectId}/${teacherId}`
        );
    }

    getStudentsAttendanceReportByTeacher(
        planId: string,
        semesterId: string,
        subjectId: string,
        teacherId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/timetable/student-attendance-report-by-academic-plan-semester-subject-teacher/${planId}/${semesterId}/${subjectId}/${teacherId}`
        );
    }

    getClassRoutinesNumber(): Observable<any> {
        return this.http.get(
            `${url}/timetable/find-class-of-current-session-and-total`
        );
    }

    getExamInvigilatorDutyReport(routineId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/invigilator-duty-by-exam-routine/${routineId}`
        );
    }

    getExamTopSheetReport(routineId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/exam-top-sheet-by-exam-routine/${routineId}`
        );
    }

    getAdditionalAnswerScript(routineId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/additional-answer-script-by-exam-routine/${routineId}`
        );
    }

    examQuestionPaperOpen(data: any): Observable<any> {
        return this.http.post(
            `${url}/timetable/exam-question-paper-open`, data
        );
    }



    timeTableExamSlotAll(): Observable<any> {
        return this.http.get(
            `${url}/timetable/exam-slot`
        );
    }


    // /timetable/routine-slot-add
    createRoutineSlotByAdmin(data: any): Observable<any> {
        return this.http.post(`${url}/timetable/routine-slot-add`, data);
    }

    // /timetable/routine-slot
    getRoutineSlotByAdmin(): Observable<any> {
        return this.http.get(`${url}/timetable/routine-slot`);
    }


    // available-routine-slot-by-startDate-endDate/{startDate}/{endDate}
    getAvailableRoutineSlotByStartDateEndDate(startDate: any, endDate: any): Observable<any> {
        return this.http.get(`${url}/timetable/available-routine-slot-by-startDate-endDate/${startDate}/${endDate}`);
    }


    // /faculty/all-associated-information-to-create-routine
    getAllAssociatedInformationToCreateRoutine(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/all-associated-information-to-create-routine`, data);
    }


    // /timetable/all-teacher-preferred-routine-slot-and-room
    getAllTeacherPreferredRoutineSlotAndRoom(): Observable<any> {
        return this.http.get(`${url}/timetable/all-teacher-preferred-routine-slot-and-room`);
    }



    // /timetable/store-teacher-preferred-routine-slot-and-room
    storeTeacherPreferredRoutineSlotAndRoom(data: any): Observable<any> {
        return this.http.post(`${url}/timetable/store-teacher-preferred-routine-slot-and-room`, data);
    }


    ///timetable/teacher-preferred-routine-slot-and-room-by-teacher/10
    getTeacherPreferredRoutineSlotAndRoomByTeacher(teacherId: any): Observable<any> {
        return this.http.get(`${url}/timetable/teacher-preferred-routine-slot-and-room-by-teacher/${teacherId}`);
    }




    ///timetable/delete-teacher-preferred-routine-slot/2
    deleteTeacherPreferredRoutineSlot(id: any): Observable<any> {
        return this.http.delete(`${url}/timetable/delete-teacher-preferred-routine-slot/${id}`);
    }

    // /timetable/delete-teacher-preferred-room/1
    deleteTeacherPreferredRoom(id: any): Observable<any> {
        return this.http.delete(`${url}/timetable/delete-teacher-preferred-room/${id}`);
    }


    // /timetable/solve (OctalPlanner)
    octalPlannerSolve(data: any): Observable<any> {
        return this.http.post(`${url}/timetable/solve`, data);
    }

}
