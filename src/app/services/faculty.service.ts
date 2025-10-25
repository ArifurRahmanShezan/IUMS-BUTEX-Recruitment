import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url } from "../core/models/API";
import { Faculty } from "../core/models/Faculty";
import { GenericResponse } from "../core/models/GenericResponse";
import { StudyProgram } from "../core/models/StudyProgram";
import { StudyProgramsPaginated } from "../core/models/StudyProgramsPaginated";
import { Subject } from "../core/models/Subject";
import { TeachingMaterial } from "../core/models/TeachingMaterial";
import { YearOfStudy } from "../core/models/YearOfStudy";

@Injectable({
    providedIn: "root",
})
export class FacultyService {
    constructor(private http: HttpClient) { }

    // {{baseUrl}}/faculty/administrative-department
    getAdministrativeDepartments(): Observable<any> {
        return this.http.get(`${url}/faculty/administrative-department`);
    }

    getFaculties(): Observable<any> {
        return this.http.get(`${url}/faculty`);
    }

    getFaculty(slug: string): Observable<GenericResponse<Faculty>> {
        return this.http.get<GenericResponse<Faculty>>(
            `${url}/faculty/slug/${slug}`
        );
    }

    searchStudyProgram(
        searchParam: string,
        facultyId: number
    ): Observable<GenericResponse<StudyProgram[]>> {
        return this.http.get<GenericResponse<StudyProgram[]>>(
            `${url}/faculty/${facultyId}/study-program?search=${searchParam}`
        );
    }

    getDepartmentAllCoursesBySearch(departmentId: any, studyProgramId: any, academicPlanId: any): Observable<any> {

        let params = new HttpParams()
            .set('departmentId', departmentId.toString())
            .set('studyProgramId', studyProgramId.toString())
            .set('academicPlanId', academicPlanId.toString())


        return this.http.get(`${url}/faculty/subject-search`, { params: params });
    }


    // subject-search
    // Department head courses search
    departmentheadSearchCourses(searchData: any): Observable<any> {
        return this.http.post(`${url}/faculty/subject-search`, searchData);
    }

    // get all academic-plan
    getAcademicPlan(): Observable<any> {
        return this.http.get(`${url}/faculty/academic-plan`);
    }

    // {{baseUrl}}/faculty/academic-plan/19
    getSingleAcademicPlan(id: any): Observable<any> {
        return this.http.get(`${url}/faculty/academic-plan/${id}`);
    }



    // teacher-subject-by-department-or-study-program-or-academic-plan-or-semester
    // teacher assign courses ( HEAD) search

    teacherAssignCoursesSearch(searchData: any): Observable<any> {
        return this.http.post(`${url}/faculty/teacher-subject-by-department-or-study-program-or-academic-plan-or-semester`, searchData);
    }



    getStudyPrograms(
        id: number,
        size: number,
        page: number
    ): Observable<GenericResponse<StudyProgramsPaginated>> {
        return this.http.get<GenericResponse<StudyProgramsPaginated>>(
            `${url}/faculty/${id}/study-program?page=${page}&size=${size}`
        );
    }
    getAllStudyPrograms(): Observable<any> {
        return this.http.get(`${url}/faculty/study-program`);
    }

    getStudyProgram(id: number): Observable<any> {
        return this.http.get(`${url}/faculty/study-program/${id}`);
    }
    getAllDepartment(): Observable<any> {
        return this.http.get(`${url}/faculty/department`);
    }

    getYearsOfStudy(
        studyProgramId: number
    ): Observable<GenericResponse<YearOfStudy[]>> {
        return this.http.get<GenericResponse<YearOfStudy[]>>(
            `${url}/faculty/study-program/${studyProgramId}/year-of-study`
        );
    }

    // {{baseUrl}}/faculty/current-year-of-study
    getCurrentYearOfStudy(): Observable<any> {
        return this.http.get(`${url}/faculty/current-year-of-study`);
    }

    // academic plan
    getAcademicPlanByProgram(programId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/find-academic-plan-by-study-program/${programId}`
        );
    }

    getAcademicPlanByPrograms(data: any): Observable<any> {
        return this.http.post(
            `${url}/faculty/academic-plans-by-study-programs`,
            data
        );
    }

    getAcademicsByStudent(studentId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/academic-plan-for-re-admission-by-student/${studentId}`
        );
    }

    getAcademicPlanSemester(semesterId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/find-semester-all-subjects-by-semester/${semesterId}`
        );
    }
    updateAcademicPlanSemester(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/semester-subject/update`, data);
    }
    // subjects apis

    getSubjectByStudyProgram(programId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/open-curriculum-subject/by/study-program/${programId}`
        );
    }

    getSubjectBySemester(semesterId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/subject-by-semester-offer/${semesterId}`
        );
    }

    // find-by-academic-plan
    // Semester-All By Academic Plan
    getAllSemesterByAcademicPlan(academicPlanId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/semester/find-by-academic-plan/${academicPlanId}`
        );
    }

    getChildSubjectBySemester(semesterId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/child-subject-by-semester-offer/${semesterId}`
        );
    }

    getChildSubjectBySemesterWithoutOffer(semesterId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/semester-child-subject-find-by-semester-id/${semesterId}`
        );
    }


    // Academic plan - By Teacher and Study Program
    // academic-plan-by-teacher-and-study-program
    getAcademicPlanByTeacherAndStudyProgram(teacherId: string, studyProgramId: string): Observable<any> {
        return this.http.get(`${url}/faculty/academic-plan-by-teacher-and-study-program/${teacherId}/${studyProgramId}`);
    }
    // teacher-assigned-subject-by-teacher-academic-plan-semester
    getTeacherAssignedSubjectByTeacherAcademicPlanSemester(teacherId: string, academicPlanId: string, semesterId: string): Observable<any> {
        return this.http.get(`${url}/faculty/teacher-assigned-subject-by-teacher-academic-plan-semester/${teacherId}/${academicPlanId}/${semesterId}`);
    }



    getSubjectBySemesterAndExamSession(
        semesterId: string,
        examSessionId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/subject-by-semester-offer-and-exam-session/${semesterId}/${examSessionId}`
        );
    }

    getChildSubjectBySemesterAndExamSession(
        semesterId: string,
        examSessionId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/child-subject-by-semester-offer-and-exam-session/${semesterId}/${examSessionId}`
        );
    }

    getNonTheoryAndLabSubjectsBySemester(semesterId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/non-theory-and-lab-subject-by-semester/${semesterId}`
        );
    }

    getSubjectByTeacherAndPlan(
        teacherId: number,
        planId: number
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/subject-by-teacher-and-academic-plan/${teacherId}/${planId}`
        );
    }

    getSubjectByTeacherPlanAndSemester(
        teacherId: number,
        planId: number,
        semesterId: number
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/subject-by-teacher-and-academic-plan-semester/${teacherId}/${planId}/${semesterId}`
        );
    }

    getSubjects(yearOfStudyId: number): Observable<GenericResponse<Subject[]>> {
        return this.http.get<GenericResponse<Subject[]>>(
            `${url}/faculty/year-of-study/${yearOfStudyId}/subjects`
        );
    }

    getAllSubjects(): Observable<GenericResponse<Subject[]>> {
        return this.http.get<GenericResponse<Subject[]>>(
            `${url}/faculty/subject`
        );
    }

    getSubjectsByDepartment(
        departmentId: string
    ): Observable<GenericResponse<Subject[]>> {
        return this.http.get<GenericResponse<Subject[]>>(
            `${url}/faculty/subject-by-department/${departmentId}`
        );
    }

    getAllMajorSubjects(): Observable<GenericResponse<Subject[]>> {
        return this.http.get<GenericResponse<Subject[]>>(
            `${url}/faculty/subject-major`
        );
    }

    getAllElectiveSubjects(): Observable<GenericResponse<Subject[]>> {
        return this.http.get<GenericResponse<Subject[]>>(
            `${url}/faculty/subject-major`
        );
    }

    getSubjectByAcademicPlan(planId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/find-semester-subject-by-academic-plan/${planId}`
        );
    }
    getAllSubjectByAcademicPlan(planId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/find-semester-all-subject-by-academic-plan/${planId}`
        );
    }

    getSubjectsByPlanAndSemester(
        planId: string,
        semesterId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/subject-by-academic-plan-and-semester/${planId}/${semesterId}`
        );
    }

    getSubjectsBySemester(semesterId: number): Observable<any> {
        return this.http.get(
            `${url}/faculty/semester-subject-find-by-semester-id/${semesterId}`
        );
    }
    getChildSubjectsBySemester(semesterId: number): Observable<any> {
        return this.http.get(
            `${url}/faculty/semester-child-subject-find-by-semester-id/${semesterId}`
        );
    }

    // getChildSubjectsBySemesterAndDepartment(semesterId: number, departmentId: string): Observable<any> {
    //     return this.http.get(
    //         `${url}/faculty/semester-child-subject-find-by-semester-id-department-id/${semesterId}/${departmentId}`
    //     );
    // }

    // semester-child-subject-find-by-semester-id-department-id-academic-plan-id

    getChildSubjectsBySemesterAndDepartmentAndAcademicPlan(semesterId: number, departmentId: string, academicPlanId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/semester-child-subject-find-by-semester-id-department-id-academic-plan-id/${semesterId}/${departmentId}/${academicPlanId}`
        );
    }

    // semester-child-subject-find-by-semester-id/{semesterId}

    getSemesterChildSubjects(semesterId: any): Observable<any> {
        return this.http.get(
            `${url}/faculty/semester-child-subject-find-by-semester-id/${semesterId}`
        );
    }



    getSubjectsByTeacher(teacherId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/teacher-subject-find-by-teacher-id/${teacherId}`
        );
    }

    getTeacherSubjectsByPlanAndSemester(
        planId: string,
        semesterId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/teacher-subject-by-academic-plan-and-semester/${planId}/${semesterId}`
        );
    }

    getOneSubject(subjectId: string): Observable<any> {
        return this.http.get(`${url}/faculty/subject/${subjectId}`);
    }
    getOneChildSubject(subjectId: string): Observable<any> {
        return this.http.get(`${url}/faculty/child-subject/${subjectId}`);
    }
    // child-subject-by-child-subject-id
    getChildSubjectByChildSubjectId(subjectId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/child-subject-by-child-subject-id/${subjectId}`
        );
    }

    createSubject(subject: any): any {
        return this.http.post(`${url}/faculty/subject`, subject);
    }

    setSubjectContent(subjectContent: any): Observable<any> {
        return this.http.post(
            `${url}/faculty/subject-content-add`,
            subjectContent
        );
    }

    updateSubjectContent(subjectContent: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/faculty/subject-content-update/${id}`,
            subjectContent
        );
    }

    getSubjectContentById(id: number): Observable<any> {
        return this.http.get(`${url}/faculty/subject-content/${id}`);
    }

    getSubjectContentForUpdate(id: number): Observable<any> {
        return this.http.get(`${url}/faculty/subject-content-for-update/${id}`);
    }

    getSubjectContentsByTeacher(teacherId: number): Observable<any> {
        return this.http.get(
            `${url}/faculty/subject-content-by-teacher/${teacherId}`
        );
    }

    getSubjectContentsByTeacherPlanAndSubject(
        teacherId: number,
        planId: number,
        subjectId: number
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/subject-content-by-teacher-academic-plan-subject/${teacherId}/${planId}/${subjectId}`
        );
    }

    getSubjectContentsForStudent(
        teacherId: number,
        planId: number,
        subjectId: number
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/subject-content-by-teacher-academic-plan-subject-for-student/${teacherId}/${planId}/${subjectId}`
        );
    }

    updateSubject(subject: object, id: string): Observable<any> {
        return this.http.put(`${url}/faculty/subject/${id}`, subject);
    }

    deleteSubject(subjectId: string): Observable<GenericResponse<any>> {
        return this.http.delete<GenericResponse<any>>(
            `${url}/faculty/subject/${subjectId}/`
        );
    }

    // subject marks apis
    createSubjectMarks(subjectMarks: any): Observable<any> {
        return this.http.post(
            `${url}/faculty/subject-marks-distribution/add`,
            subjectMarks
        );
    }
    // /lab-subject-by-department

    getLabSubjectByDepartment(departmentId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/lab-subject-by-department/${departmentId}`
        );
    }

    getAllSubjectsMarks(): Observable<any> {
        return this.http.get<any>(`${url}/faculty/subject-marks-distribution`);
    }

    getOneSubjectsMarks(id: string | number): Observable<any> {
        return this.http.get<any>(
            `${url}/faculty/subject-marks-distribution/${id}`
        );
    }

    updateSubjectMarks(subjectMarks: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/faculty/subject-marks-distribution/${id}`,
            subjectMarks
        );
    }

    deleteSubjectsMarks(id: string | number): Observable<any> {
        return this.http.delete(
            `${url}/faculty/subject-marks-distribution/${id}`
        );
    }

    // subject equivalence
    deleteSubjectEquivalence(subjectId: any): Observable<GenericResponse<any>> {
        return this.http.delete<GenericResponse<any>>(
            `${url}/faculty/subject-prerequisite/delete/${subjectId}`
        );
    }

    // subject prerequisite apis
    deleteSubjectPrerequisites(
        subjectId: number
    ): Observable<GenericResponse<any>> {
        return this.http.delete<GenericResponse<any>>(
            `${url}/faculty/subject-prerequisite/delete/${subjectId}`
        );
    }

    // subject co-requisite apis
    deleteSubjectCoRequisite(
        subjectId: number
    ): Observable<GenericResponse<any>> {
        return this.http.delete<GenericResponse<any>>(
            `${url}/faculty/subject-co-requisite/delete/${subjectId}`
        );
    }

    // teacher subject
    getTeacherSubjectList(): Observable<any> {
        return this.http.get(`${url}/faculty/teacher-subject`);
    }

    getTeacherSubjectsByDepartmentHead(
        departmentHead: string
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/teacher-subject-by-department-head/${departmentHead}`
        );
    }

    getSubjectListByTeacher(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/get-subject-by-teacher/${id}`);
    }

    getTeacherListBySubject(subjectId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/teacher-subject-find-by-subject-id/${subjectId}`
        );
    }

    getTeacherListBySubjectAndPlan(
        subjectId: string,
        planId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/teacher-subject-find-by-subject-and-academic-plan/${subjectId}/${planId}`
        );
    }

    getTeacherByPlanAndSubject(
        planId: string,
        subjectId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/faculty/teacher-subject-find-by-subject-and-academic-plan/${subjectId}/${planId}`
        );
    }

    getSupervisorsBySubject(
        planId: string,
        semesterId: string,
        subjectId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/auth/supervisor-by-academic-plan-semester-subject/${planId}/${semesterId}/${subjectId}`
        );
    }

    getTeacherSubject(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/teacher-subject/${id}`);
    }

    assignSubjectIntoTeacher(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/teacher-subject/add`, data);
    }
    // update-teacher-edit-access/1
    editAccessAssignSubjectIntoTeacher(data: any): Observable<any> {
        return this.http.put(`${url}/faculty/update-teacher-edit-access/${data.id}`, data);
    }

    multipleTeacherSubjectAssign(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/multiple-teacher-subject/add`, data);
    }

    updateTeacherSubject(id: string, data: any): Observable<any> {
        return this.http.put(
            `${url}/faculty/teacher-subject-update/${id}`,
            data
        );
    }
    deleteTeacherSubject(id: string): Observable<any> {
        return this.http.delete(`${url}/faculty/teacher-subject/delete/${id}`);
    }

    // curriculum
    getAllCurriculum(): Observable<GenericResponse<any>> {
        return this.http.get<GenericResponse<any>>(`${url}/faculty/curriculum`);
    }

    getOneCurriculum(id: string | number): Observable<GenericResponse<any>> {
        return this.http.get<GenericResponse<any>>(
            `${url}/faculty/curriculum/${id}`
        );
    }

    getCurriculumByAcademicPlan(id: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/curriculum-by-academic-plan-id/${id}`
        );
    }

    getCurriculumByDepartmentHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/show-curriculum-by-department-head/${headId}`
        );
    }

    getCurriculumSubject(curriculumId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/subject/by/curriculum/${curriculumId}`
        );
    }

    createCurriculum(
        curriculum: object | any
    ): Observable<GenericResponse<any>> {
        return this.http.post<GenericResponse<any>>(
            `${url}/faculty/curriculum/add`,
            curriculum
        );
    }

    updateCurriculum(
        curriculum: object | any,
        id: string | number
    ): Observable<GenericResponse<any>> {
        return this.http.put<GenericResponse<any>>(
            `${url}/faculty/curriculum/update/${id}`,
            curriculum
        );
    }

    updateCurriculumSubject(
        curriculum: object | any,
        id: string | number
    ): Observable<any> {
        return this.http.put<any>(
            `${url}/faculty/subject-update-of-curriculum/${id}`,
            curriculum
        );
    }

    deleteCurriculum(id: string | number): Observable<any> {
        return this.http.delete(`${url}/faculty/curriculum/delete/${id}`);
    }

    getTeachingMaterial(
        subjectId: number
    ): Observable<GenericResponse<TeachingMaterial[]>> {
        return this.http.get<GenericResponse<TeachingMaterial[]>>(
            `${url}/faculty/subject/${subjectId}/teaching-material`
        );
    }

    // batch create
    createBatch(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/batch/add`, data);
    }

    getAllBatch(): Observable<any> {
        return this.http.get(`${url}/faculty/batch`);
    }

    getBatchByYearDegreeFacultyProgram(data: any): Observable<any> {
        return this.http.get(
            `${url}/faculty/batch/by/year-of-study/study-program-degree/faculty/study-program/${data.yearOfStudyId}/${data.studyProgramDegreeId}/${data.facultyId}/${data.studyProgramId}`
        );
    }

    getBatchByStudyProgram(studyProgramId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/show-batch-by-study-program/${studyProgramId}`
        );
    }

    getOneBatch(id: any): Observable<any> {
        return this.http.get(`${url}/faculty/batch/${id}`);
    }

    updateBatch(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/faculty/batch/update/${id}`, data);
    }

    deleteBatch(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/batch/delete/${id}`);
    }

    // gradeBook api end point
    getGradeBookList(): Observable<any> {
        return this.http.get(`${url}/faculty/grade-book`);
    }


    // /faculty/grade-book-from-grade-book-parent-by-degree/1
    getGradeBookByDegree(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/grade-book-from-grade-book-parent-by-degree/${id}`);
    }


    getOneGradeBook(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/grade-book/${id}`);
    }
    createGradeBook(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/grade-book/add`, data);
    }
    updateGradeBook(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/faculty/grade-book/update/${id}`, data);
    }
    deleteGradeBook(id: string): Observable<any> {
        return this.http.delete(`${url}/faculty/grade-book/delete/${id}`);
    }

    //Student application apis
    getStudentApplicationTypeList(): Observable<any> {
        return this.http.get(`${url}/faculty/student-application-type`);
    }
    getOneStudentApplicationType(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/student-application-type/${id}`);
    }
    createStudentApplicationType(data: any): Observable<any> {
        return this.http.post(
            `${url}/faculty/student-application-type/add`,
            data
        );
    }
    updateStudentApplicationType(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/faculty/student-application-type/update/${id}`,
            data
        );
    }
    deleteStudentApplicationType(id: string): Observable<any> {
        return this.http.delete(
            `${url}/faculty/student-application-type/delete/${id}`
        );
    }

    getStudentApplicationList(): Observable<any> {
        return this.http.get(`${url}/auth/student-application`);
    }

    getOneStudentApplication(id: string): Observable<any> {
        return this.http.get(`${url}/auth/student-application/${id}`);
    }

    updateStudentApplication(
        data: any,
        applicationId: string
    ): Observable<any> {
        return this.http.put(
            `${url}/auth/student-application-update-status/${applicationId}`,
            data
        );
    }
    // file upload
    uploadFile(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/file-for-post`, data);
    }

    //Specialization's Tag
    getSpecializationTags(): Observable<any> {
        return this.http.get(`${url}/faculty/specialization-tags`);
    }

    getSpecializationTag(id: number): Observable<any> {
        return this.http.get(`${url}/faculty/specialization-tags/${id}`);
    }

    postSpecializationTag(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/specialization-tags-add`, data);
    }

    updateSpecializationTag(id: number, data: any): Observable<any> {
        return this.http.put(
            `${url}/faculty/specialization-tags-update/${id}`,
            data
        );
    }

    deleteSpecializationTag(id: number): Observable<any> {
        return this.http.delete(
            `${url}/faculty/specialization-tags-delete/${id}`
        );
    }

    // obe management
    getTaxonomies(): Observable<any> {
        return this.http.get(`${url}/faculty/taxonomies`);
    }

    getTaxonomy(id: number): Observable<any> {
        return this.http.get(`${url}/faculty/taxonomy/${id}`);
    }

    postTaxonomy(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/taxonomy-add`, data);
    }

    updateTaxonomy(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/faculty/taxonomy-update/${id}`, data);
    }

    // complain-form
    getComplainTypes(): Observable<any> {
        return this.http.get(`${url}/studentaffairs/complain-type`);
    }
    getComplainType(id: string): Observable<any> {
        return this.http.get(`${url}/studentaffairs/complain-type/${id}`);
    }

    postComplainType(data: any): Observable<any> {
        return this.http.post(`${url}/studentaffairs/complain-type/add`, data);
    }

    putComplainType(id: string, data: any): Observable<any> {
        return this.http.put(
            `${url}/studentaffairs/complain-type/update/${id}`,
            data
        );
    }

    getComplainForms(): Observable<any> {
        return this.http.get(`${url}/studentaffairs/complain-form`);
    }

    getComplainFormsByHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/studentaffairs/complain-form-by-department-head/${headId}`
        );
    }

    getComplainFormsByDean(deanId: string): Observable<any> {
        return this.http.get(
            `${url}/studentaffairs/complain-form-by-dean/${deanId}`
        );
    }

    getComplainForm(id: string): Observable<any> {
        return this.http.get(`${url}/studentaffairs/complain-form/${id}`);
    }

    postComplainFormByStudent(data: any): Observable<any> {
        return this.http.post(`${url}/studentaffairs/complain-form/add`, data);
    }

    putComplainFormStatus(data: any, id: string): Observable<any> {
        return this.http.post(
            `${url}/studentaffairs/complain-status-update/${id}`,
            data
        );
    }
    // complain-form end

    // course feedback answer template
    getCourseFeedbackAnswers(): Observable<any> {
        return this.http.get(`${url}/faculty/course-feedback-answer-templates`);
    }

    getCourseFeedbackAnswer(id: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/course-feedback-answer-template/${id}`
        );
    }

    postCourseFeedbackAnswer(data: any): Observable<any> {
        return this.http.post(
            `${url}/faculty/course-feedback-answer-template-add`,
            data
        );
    }

    putCourseFeedbackAnswer(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/faculty/course-feedback-answer-template-update/${id}`,
            data
        );
    }

    deleteCourseFeedbackAnswer(id: string): Observable<any> {
        return this.http.delete(
            `${url}/faculty/course-feedback-answer-template-delete/${id}`
        );
    }

    // course feedback answer template end
    getTotalEmployeeNumber(): Observable<any> {
        return this.http.get(`${url}/auth/total-employees`);
    }

    getStudentFacultyRatio(): Observable<any> {
        return this.http.get(`${url}/auth/student-teacher-ratio`);
    }

    getRunningSessionOfferedCourses(): Observable<any> {
        return this.http.get(`${url}/faculty/current-session-offered-subjects`);
    }

    getOfferedCoursesNumberByHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/current-session-offered-subjects-by-department-head/${headId}`
        );
    }

    getOfferedCoursesNumberByDean(deanId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/current-session-offered-subjects-dean/${deanId}`
        );
    }

    getTotalDue(): Observable<any> {
        return this.http.get(`${url}/faculty/taxonomy-update`);
    }

    getTotalPaymentReceived(): Observable<any> {
        return this.http.get(`${url}/faculty/taxonomy-update`);
    }

    getTotalWaiver(): Observable<any> {
        return this.http.get(`${url}/faculty/taxonomy-update`);
    }

    getTotalExpenses(): Observable<any> {
        return this.http.get(`${url}/faculty/taxonomy-update`);
    }

    getStudentRegistrationStats(): Observable<any> {
        return this.http.get(
            `${url}/auth/registered-and-unregistered-student-of-current-session`
        );
    }

    getStudentsNumberByHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/find-number-of-student-by-department-head/${headId}`
        );
    }

    getStudentsNumberByDean(deanId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/find-number-of-student-by-dean/${deanId}`
        );
    }

    getStudentsNumber(): Observable<any> {
        return this.http.get(`${url}/auth/find-number-of-student`);
    }

    getTotalCollection(): Observable<any> {
        return this.http.get(`${url}/faculty/taxonomy-update`);
    }

    getTotalClassScheduled(): Observable<any> {
        return this.http.get(`${url}/faculty/taxonomy-update`);
    }

    getTotalClassScheduledByHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/find-class-of-current-session-and-total-by-department-head/${headId}`
        );
    }

    getTotalClassScheduledByDean(deanId: string): Observable<any> {
        return this.http.get(
            `${url}/timetable/find-class-of-current-session-and-total-by-dean/${deanId}`
        );
    }

    getProgramWiseStudentAttendance(): Observable<any> {
        return this.http.get(`${url}/faculty/program-wise-attendance`);
    }

    getProgramWiseStudentAttendanceByHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/program-wise-attendance-by-department-head/${headId}`
        );
    }

    getProgramWiseStudentAttendanceByDean(deanId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/program-wise-attendance-by-dean/${deanId}`
        );
    }

    getStudentsRegistrationStats(): Observable<any> {
        return this.http.get(
            `${url}/auth/registered-and-unregistered-student-of-current-session`
        );
    }

    getStudentsRegistrationStatsByHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/registered-and-unregistered-student-of-current-session-by-department-head/${headId}`
        );
    }

    getStudentsRegistrationStatsByDean(deanId: string): Observable<any> {
        return this.http.get(
            `${url}/auth/registered-and-unregistered-student-of-current-session-by-dean/${deanId}`
        );
    }

    // PEO---

    // Program MIssion Template
    getAllPM(): Observable<any> {
        return this.http.get(`${url}/faculty/program-mission-templates`);
    }
    getOnePm(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/program-mission-template-by-id/${id}`);
    }
    createPm(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-program-mission-template`, data);
    }
    updatePm(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/faculty/update-program-mission-template/${id}`, data);
    }
    deletePm(id: string): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-program-mission-template/${id}`);
    }
    approvePm(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/approve-program-mission-template/${id}`, {});
    }
    rejectPm(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/reject-program-mission-template/${id}`, {});
    }

    getApprovedPmBydepartmentHead(id: any): Observable<any> {
        return this.http.get(`${url}/faculty/approved-program-mission-template-by-department-head/${id}`);
    }
    getAllProgramMissionTemplateByDean(deanId: string): Observable<any> {
        return this.http.get(`${url}/faculty/program-mission-template-by-dean/${deanId}`);
    }

    getMappedPM(studyProgramID: any, academicPlanID: any): Observable<any> {
        return this.http.get(`${url}/faculty/mapped-program-mission-template-study-program-academic-plan/${studyProgramID}/${academicPlanID}`);
    }




    // PEO
    getAllPEO(): Observable<any> {
        return this.http.get(`${url}/faculty/program-education-outcome-templates`);
    }
    getOnePEO(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/program-education-outcome-template-by-id/${id}`);
    }
    createPEO(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-program-education-outcome-template`, data);
    }
    updatePEO(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/faculty/update-program-education-outcome-template/${id}`, data);
    }
    deletePEO(id: string): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-program-education-outcome-template/${id}`);
    }
    approvePEO(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/approve-program-education-outcome-template/${id}`, {});
    }
    rejectPEO(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/reject-program-education-outcome-template/${id}`, {});
    }

    getPEOByDean(deanId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/program-education-outcome-template-by-dean/${deanId}`
        );
    }
    getAllApprovedPEOByDepartmentHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/approved-program-education-outcome-template-by-department-head/${headId}`
        );
    }

    // PO

    getAllPO(): Observable<any> {
        return this.http.get(`${url}/faculty/program-outcome-templates`);
    }
    getOnePO(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/program-outcome-template-by-id/${id}`);
    }
    createPO(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-program-outcome-template`, data);
    }
    updatePO(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/faculty/update-program-outcome-template/${id}`, data);
    }
    deletePO(id: string): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-program-outcome-template/${id}`);
    }
    approvePO(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/approve-program-outcome-template/${id}`, {});
    }
    rejectPO(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/reject-program-outcome-template/${id}`, {});
    }

    getPOByDean(deanId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/program-outcome-template-by-dean/${deanId}`
        );
    }

    getAllApprovedPOByDepartmentHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/approved-program-outcome-template-by-department-head/${headId}`
        );
    }

    // Knowledge Profile

    getAllKnowledgeProfile(): Observable<any> {
        return this.http.get(`${url}/faculty/knowledge-profile`);
    }
    getOneKnowledgeProfile(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/knowledge-profile-by-id/${id}`);
    }
    createKnowledgeProfile(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-knowledge-profile`, data);
    }
    updateKnowledgeProfile(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/faculty/update-knowledge-profile/${id}`, data);
    }
    deleteKnowledgeProfile(id: string): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-knowledge-profile/${id}`);
    }
    approveKnowledgeProfile(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/approve-knowledge-profile/${id}`, {});
    }
    allApprovedKnowledgeProfile(): Observable<any> {
        return this.http.get(`${url}/faculty/approved-knowledge-profile`);
    }
    rejectKnowledgeProfile(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/reject-knowledge-profile/${id}`, {});
    }
    getKnowledgeProfileByDean(deanId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/knowledge-profile-by-dean/${deanId}`
        );
    }

    // approved-knowledge-profile-by-department-head
    getAllApprovedKnowledgeProfileByDepartmentHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/faculty/approved-knowledge-profile-by-department-head/${headId}`
        );
    }



    getStudyProgramByDepartment(departmentId: string): Observable<any> {
        return this.http.get(`${url}/faculty/study-program-by-department/${departmentId}`);
    }
    getStudyProgramByByDepartmentHead(departmentHeadId: string): Observable<any> {
        return this.http.get(`${url}/faculty/study-program-by-department-head/${departmentHeadId}`);
    }
    getStudyProgramByTeacher(teacherId: string): Observable<any> {
        return this.http.get(`${url}/faculty/study-program-by-teacher/${teacherId}`);
    }


    // curriculum

    getCurriculumByStudyProgram(studyProgramId: string): Observable<any> {
        return this.http.get(`${url}/faculty/curriculum-by-study-program/${studyProgramId}`);
    }

    // academic-plan by study-program and curriculum

    getAcademicPlanByStudyProgramAndCurriculum(studyProgramId: string, curriculumId: string): Observable<any> {
        return this.http.get(`${url}/faculty/academic-plan-by-study-program-and-curriculum/${studyProgramId}/${curriculumId}`);
    }











    // program-mission-information-by-study-program

    getProgramMissionInformationByStudyProgram(studyProgramId: string): Observable<any> {
        return this.http.get(`${url}/faculty/program-mission-information-by-study-program/${studyProgramId}`);
    }



    // Taxonomy's
    getAllTaxonomy(): Observable<any> {
        return this.http.get(`${url}/faculty/taxonomies`);
    }
    getOneTaxonomy(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/taxonomy/${id}`);
    }
    createTaxonomy(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/taxonomy-add`, data);
    }
    updateTaxonomyOBE(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/faculty/taxonomy-update/${id}`, data);
    }
    deleteTaxonomy(id: string): Observable<any> {
        return this.http.delete(`${url}/faculty/taxonomy-delete/${id}`);
    }
    approveTaxonomy(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/taxonomy-approve/${id}`, {});
    }
    rejectTaxonomy(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/taxonomy-reject/${id}`, {});
    }

    // approved-sub-domain-taxonomy-by-department-head

    approvedSubDomainTaxonomyByDepartmenthead(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/approved-sub-domain-taxonomy-by-department-head/${id}`);
    }
    allApprovedSubDomainTaxonomy(): Observable<any> {
        return this.http.get(`${url}/faculty/approved-sub-domain-taxonomy`);
    }





    // Approved course outcome template
    approvedCourseOutcomeTemplate(): Observable<any> {
        return this.http.get(`${url}/faculty/approved-course-outcome-template`);
    }
    approvedCourseOutcomeTemplateByDepartmenthead(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/approved-course-outcome-template-by-department-head/${id}`);
    }
    getApprovedTaxonomyByDepartmenthead(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/approved-taxonomy-by-department-head/${id}`);
    }
    getAllApprovedTaxonomy(): Observable<any> {
        return this.http.get(`${url}/faculty/approved-taxonomy`);
    }

    getCourseOutcomeTaxonomyByDean(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/taxonomy-by-dean/${id}`);
    }





    // subdomain taxonomy

    getAllSubdomainTaxonomy(): Observable<any> {
        return this.http.get(`${url}/faculty/sub-domain-taxonomies`);
    }
    getOneSubdomainTaxonomy(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/sub-domain-taxonomy-by-id/${id}`);
    }
    createSubdomainTaxonomy(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-sub-domain-taxonomy`, data);
    }
    updateSubdomainTaxonomyOBE(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/faculty/update-sub-domain-taxonomy/${id}`, data);
    }
    deleteSubdomainTaxonomy(id: string): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-sub-domain-taxonomy/${id}`);
    }
    approveSubdomainTaxonomy(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/approve-sub-domain-taxonomy/${id}`, {});
    }
    rejectSubdomainTaxonomy(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/reject-sub-domain-taxonomy/${id}`, {});
    }
    getAllSubdomainTaxonomyByDean(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/sub-domain-taxonomy-by-dean/${id}`);
    }



    // CO Template

    getAllCourseOutcome(): Observable<any> {
        return this.http.get(`${url}/faculty/course-outcome-templates`);
    }
    getOneCourseOutcome(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/course-outcome-template-by-id/${id}`);
    }
    createCourseOutcome(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-course-outcome-template`, data);
    }
    updateCourseOutcomeOBE(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/faculty/update-course-outcome-template/${id}`, data);
    }
    deleteCourseOutcome(id: string): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-course-outcome-template/${id}`);
    }
    approveCourseOutcome(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/approve-course-outcome-template/${id}`, {});
    }
    rejectCourseOutcome(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/reject-course-outcome-template/${id}`, {});
    }

    approvedCourseOutcome(): Observable<any> {
        return this.http.get(`${url}/faculty/approved-course-outcome-template`);
    }

    approvedCourseOutcomeByDepartmentHead(departmentHeadId: string): Observable<any> {
        return this.http.get(`${url}/faculty/approved-course-outcome-template-by-department-head/${departmentHeadId}`);
    }

    getAllCourseOutcomeByDean(deanID: string): Observable<any> {
        return this.http.get(`${url}/faculty/course-outcome-template-by-dean/${deanID}`);
    }
    // http://localhost:8080/api/v1/faculty/approved-sub-domain-taxonomy
    getApprovedSubDomainTaxonomy(): Observable<any> {
        return this.http.get(`${url}/faculty/approved-sub-domain-taxonomy`);
    }





    // Complex Engineering Problem

    getAllComplexEngineeringProblem(): Observable<any> {
        return this.http.get(`${url}/faculty/complex-engineering-problem`);
    }
    getOneComplexEngineeringProblem(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/complex-engineering-problem-by-id/${id}`);
    }
    createComplexEngineeringProblem(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-complex-engineering-problem`, data);
    }
    updateComplexEngineeringProblem(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/faculty/update-complex-engineering-problem/${id}`, data);
    }
    deleteComplexEngineeringProblem(id: string): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-complex-engineering-problem/${id}`);
    }
    approveComplexEngineeringProblem(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/approve-complex-engineering-problem/${id}`, {});
    }
    rejectComplexEngineeringProblem(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/reject-complex-engineering-problem/${id}`, {});
    }

    getComplexEngineeringProblemByDepartmentHead(departmentHeadId: string): Observable<any> {
        return this.http.get(`${url}/faculty/approved-complex-engineering-problem-by-department-head/${departmentHeadId}`);
    }
    getAllApprovedComplexEngineeringProblem(): Observable<any> {
        return this.http.get(`${url}/faculty/approved-complex-engineering-problem`);
    }

    // Complex Engineering Activity

    getAllComplexEngineeringActivity(): Observable<any> {
        return this.http.get(`${url}/faculty/complex-engineering-activity`);
    }
    getOneComplexEngineeringActivity(id: string): Observable<any> {
        return this.http.get(`${url}/faculty/complex-engineering-activity-by-id/${id}`);
    }
    createComplexEngineeringActivity(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-complex-engineering-activity`, data);
    }
    updateComplexEngineeringActivity(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/faculty/update-complex-engineering-activity/${id}`, data);
    }
    deleteComplexEngineeringActivity(id: string): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-complex-engineering-activity/${id}`);
    }
    approveComplexEngineeringActivity(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/approve-complex-engineering-activity/${id}`, {});
    }
    rejectComplexEngineeringActivity(id: string): Observable<any> {
        return this.http.put(`${url}/faculty/reject-complex-engineering-activity/${id}`, {});
    }

    // approved-complex-engineering-activity-by-department-head

    getComplexEngineeringActivityByDepartmentHead(departmentHeadId: string): Observable<any> {
        return this.http.get(`${url}/faculty/approved-complex-engineering-activity-by-department-head/${departmentHeadId}`);
    }
    getAllApprovedComplexEngineeringActivity(): Observable<any> {
        return this.http.get(`${url}/faculty/approved-complex-engineering-activity`);
    }



    // University mission and program mission mapping
    getUniversityMission(): Observable<any> {
        return this.http.get(`${url}/university/university-mission`);
    }
    getAllUniversityMissionsAndProgramMissions(): Observable<any> {
        return this.http.get(`${url}/faculty/university-mission-and-program-mission`);
    }
    // store
    storeUniversityMissionsAndProgramMissions(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-university-mission-and-program-mission`, data);
    }


    // Program mission and program education outcome mapping
    // program-mission-and-program-education-outcome

    getAllProgramMissionsAndProgramEducationOutcomes(): Observable<any> {
        return this.http.get(`${url}/faculty/program-mission-and-program-education-outcome`);
    }

    // store
    storeProgramMissionsAndProgramEducationOutcomes(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-program-mission-and-program-education-outcome`, data);
    }



    // Program education outcome and program outcome mapping

    getAllProgramEducationOutcomesAndProgramOutcomes(): Observable<any> {
        return this.http.get(`${url}/faculty/program-education-outcome-and-program-outcome`);
    }

    // store
    storeProgramEducationOutcomesAndProgramOutcomes(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-program-education-outcome-and-program-outcome`, data);
    }













    // -------------------------
    // mapped-program-education-outcome-template-study-program-academic-plan

    getMappedPEO(studyProgramID: any, academicPlanID: any): Observable<any> {
        return this.http.get(`${url}/faculty/mapped-program-education-outcome-template-study-program-academic-plan/${studyProgramID}/${academicPlanID}`);
    }
















    // Mapping university mission and PEO
    postMappedUniversityAndPEO(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-university-mission-and-program-education-outcome`, data);
    }

    getAllUniversityMissionsAndProgramEducationOutcomes(): Observable<any> {
        return this.http.get(`${url}/faculty/university-mission-and-program-education-outcome`);
    }
    // final
    getAllMappedPEO(studyProgramID: any, academicPlanID: any): Observable<any> {
        return this.http.get(`${url}/faculty/mapped-program-education-template-study-program-academic-plan/${studyProgramID}/${academicPlanID}`);
    }

    // mapped PEO and PO
    postMappedPEOAndPO(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-program-education-outcome-and-program-outcome`, data);
    }


    // mapped PO and CO

    getMappedPO(studyProgramId: any, academicPlanId: any): Observable<any> {
        return this.http.get(`${url}/faculty/mapped-program-outcome-template-study-program-academic-plan/${studyProgramId}/${academicPlanId}`);
    }
    getAllPOandCO(): Observable<any> {
        return this.http.get(`${url}/faculty/program-outcome-and-course-outcome`);
    }

    // get CO Template
    // course-outcome-template-by-code

    getCourseOutcomeTemplateByCode(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/course-outcome-template-by-code`, data);
    }

    storePOPlusCO(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-program-outcome-and-course-outcome`, data);
    }
    // program-outcome-and-course-outcome
    getALLMappedPOandCO(): Observable<any> {
        return this.http.get(`${url}/faculty/program-outcome-and-course-outcome`);
    }



    // faculty/store-course-outcome-and-program-outcome
    storeCOPlusPO(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-course-outcome-and-program-outcome`, data);
    }
    // http://localhost:8080/api/v1/faculty/course-outcome-and-program-outcome-by-department-head/1
    getMappedCOandPO(departmentHeadId: any): Observable<any> {
        return this.http.get(`${url}/faculty/course-outcome-and-program-outcome-by-department-head/${departmentHeadId}`);
    }










    // CHild Subject by department

    getChildSubjectByDepartment(departmentId: any): Observable<any> {
        return this.http.get(`${url}/faculty/child-subject-by-department/${departmentId}`);
    }



    // Mapped course outcome from Program outcome and course outcome - by study program and academic plan and subject
    // CO
    getMappedCourseOutcomeByStudyProgramAndAcademicPlanAndSubject(studyProgramId: any, academicPlanId: any, subjectId: any): Observable<any> {
        return this.http.get(`${url}/faculty/mapped-course-outcome-from-POCO-by-study-program-academic-plan-child-subject/${studyProgramId}/${academicPlanId}/${subjectId}`);
    }



    // Mapped program outcome from Program outcome and course outcome - by study program and academic plan and subject
    // PO
    getMappedProgramOutcomeByStudyProgramAndAcademicPlanAndSubject(studyProgramId: any, academicPlanId: any, subjectId: any): Observable<any> {
        return this.http.get(`${url}/faculty/mapped-program-outcome-from-POCO-by-study-program-academic-plan-child-subject/${studyProgramId}/${academicPlanId}/${subjectId}`);
    }




    // store Final mapping
    // object-based-education-final-mapping

    storeFinalMapping(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/object-based-education-final-mapping`, data);
    }
    // object-based-education-final-mapping
    getAllFinalMapping(): Observable<any> {
        return this.http.get(`${url}/faculty/object-based-education-final-mapping`);
    }
    getAllFinalMappingByTeacher(teacherId: any): Observable<any> {
        return this.http.get(`${url}/faculty/object-based-education-final-mapping-by-teacher/${teacherId}`);
    }














    // Dean Mapping approval

    // University Mission & PEO Mapping
    getAllMappedUniversityMissionAndPEOByDean(deanId: any): Observable<any> {
        return this.http.get(`${url}/faculty/university-mission-and-program-education-outcome-by-dean/${deanId}`);
    }

    approveMappedUniversityMissionAndPEOByDean(id: any): Observable<any> {
        return this.http.put(`${url}/faculty/dean-approve-university-mission-and-program-education-outcome/${id}`, {});
    }

    rejectMappedUniversityMissionAndPEOByDean(id: any): Observable<any> {
        return this.http.put(`${url}/faculty/dean-reject-university-mission-and-program-education-outcome/${id}`, {});
    }






    // PEO & PO Mapping
    getAllMappedPEOAndPOByDean(deanId: any): Observable<any> {
        return this.http.get(`${url}/faculty/program-education-outcome-and-program-outcome-by-dean/${deanId}`);
    }

    approveMappedPEOAndPOByDean(id: any): Observable<any> {
        return this.http.put(`${url}/faculty/dean-approve-program-education-outcome-and-program-outcome/${id}`, {});
    }

    rejectMappedPEOAndPOByDean(id: any): Observable<any> {
        return this.http.put(`${url}/faculty/dean-reject-program-education-outcome-and-program-outcome/${id}`, {});
    }












    // PO + CO Map
    getAllMappedPOAndCOByDean(deanId: any): Observable<any> {
        return this.http.get(`${url}/faculty/program-outcome-and-course-outcome-by-dean/${deanId}`);
    }

    // course-outcome-and-program-outcome-by-dean/8
    getMappedPOandCOByDean(deanId: any): Observable<any> {
        return this.http.get(`${url}/faculty/course-outcome-and-program-outcome-by-dean/${deanId}`);
    }


    approveMappedPOAndCOByDean(id: any): Observable<any> {
        return this.http.put(`${url}/faculty/dean-approve-program-outcome-and-course-outcome/${id}`, {});
    }

    // http://localhost:8080/api/v1/faculty/dean-approve-course-outcome-and-program-outcome/2
    approveMappedCOAndPOByDean(id: any): Observable<any> {
        return this.http.put(`${url}/faculty/dean-approve-course-outcome-and-program-outcome/${id}`, {});
    }

    rejectMappedPOAndCOByByDean(id: any): Observable<any> {
        return this.http.put(`${url}/faculty/dean-reject-program-outcome-and-course-outcome/${id}`, {});
    }

    // http://localhost:8080/api/v1/faculty/dean-reject-course-outcome-and-program-outcome/1
    rejectMappedCOAndPOByDean(id: any): Observable<any> {
        return this.http.put(`${url}/faculty/dean-reject-course-outcome-and-program-outcome/${id}`, {});
    }




    // Final Mapping
    getAllFinalMappingByDean(deanId: any): Observable<any> {
        return this.http.get(`${url}/faculty/object-based-education-final-mapping-by-dean/${deanId}`);
    }
    getAllFinalMappingByDepartmentHead(departmentHeadId: any): Observable<any> {
        return this.http.get(`${url}/faculty/object-based-education-final-mapping-by-department-head/${departmentHeadId}`);
    }

    approvedMappedFinalByDepartmentHead(id: any): Observable<any> {
        return this.http.put(`${url}/faculty/department-head-approve-object-based-education-final-mapping/${id}`, {});
    }
    rejectMappedFinalByDepartmentHead(id: any): Observable<any> {
        return this.http.put(`${url}/faculty/department-head-reject-object-based-education-final-mapping/${id}`, {});
    }

    approveMappedFinalByDean(id: any): Observable<any> {
        return this.http.put(`${url}/faculty/dean-approve-object-based-education-final-mapping/${id}`, {});
    }

    rejectMappedFinalByDean(id: any): Observable<any> {
        return this.http.put(`${url}/faculty/dean-reject-object-based-education-final-mapping/${id}`, {});
    }


    // Mapping Delete



    // University Mission & PEO Mapping
    universityMissionAndPEOMappingDeleteALL(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-university-mission-and-program-education-outcome/${id}`);
    }
    // only university mission delete
    universityMissionDelete(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-university-mission-of-university-mission-and-program-education-outcome/${id}`);
    }
    // Mapping PEO Delete
    peoMappingDelete(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-program-education-outcome-of-university-mission-and-program-education-outcome/${id}`);
    }




    // PEO & PO Mapping
    peoAndpoMappingDeleteAll(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-program-education-outcome-and-program-outcome/${id}`);
    }
    mappedPEODelete(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-program-education-outcome-of-program-education-outcome-and-program-outcome/${id}`);
    }
    mappedPODelete(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-program-outcome-of-program-education-outcome-and-program-outcome/${id}`);
    }




    // PO + CO Map
    poAndcoMappingDeleteAll(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-program-outcome-and-course-outcome/${id}`);
    }
    mappedPoDelete(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-program-outcome-of-program-outcome-and-course-outcome/${id}`);
    }
    mappedCODelete(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-course-outcome-of-program-outcome-and-course-outcome/${id}`);
    }
    deparmentHeadGetPoCoByDepartmentHead(id: any): Observable<any> {
        return this.http.get(`${url}/faculty/program-outcome-and-course-outcome-by-department-head/${id}`);
    }

    teacherPoCoMappingApproveByDepartmentHead(id: any): Observable<any> {
        return this.http.put(`${url}/faculty/department-head-approve-program-outcome-and-course-outcome/${id}`, {});
    }
    // http://localhost:8080/api/v1/faculty/department-head-approve-course-outcome-and-program-outcome/1
    teacherCoPoMappingApproveByDepartmentHead(id: any): Observable<any> {
        return this.http.put(`${url}/faculty/department-head-approve-course-outcome-and-program-outcome/${id}`, {});
    }

    teacherPoCoMappingRejectByDepartmentHead(id: any): Observable<any> {
        return this.http.put(`${url}/faculty/department-head-reject-program-outcome-and-course-outcome/${id}`, {});
    }

    // http://localhost:8080/api/v1/faculty/department-head-reject-course-outcome-and-program-outcome/2
    teacherCoPoMappingRejectByDepartmentHead(id: any): Observable<any> {
        return this.http.put(`${url}/faculty/department-head-reject-course-outcome-and-program-outcome/${id}`, {});
    }





    // Final Mapping
    finalMappingAllDelete(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-object-based-education-final-mapping/${id}`);
    }

    deleteFinalMapping(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-mapping-of-object-based-education-final-mapping/${id}`);
    }








    // Update OBE Mapping
    universityMissionUpdate(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/faculty/update-university-mission-and-program-education-outcome/${id}`, data);
    }


    // update-program-education-outcome-and-program-outcome
    peoAndPoMappedUpdate(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/faculty/update-program-education-outcome-and-program-outcome/${id}`, data);
    }



    // Update Final mapping
    updateObjectBasedEducationFinalMapping(id: any, data: any): Observable<any> {
        return this.http.post(`${url}/faculty/update-object-based-education-final-mapping/${id}`, data);
    }

    // update-program-outcome-and-course-outcome
    // Update po co mapping
    poAndCoMappedUpdate(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/faculty/update-program-outcome-and-course-outcome/${id}`, data);
    }

    // http://localhost:8080/api/v1/faculty/update-course-outcome-and-program-outcome
    coAndPoMappedUpdate(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/faculty/update-course-outcome-and-program-outcome/${id}`, data);
    }


    // delete-program-outcome-and-course-outcome/2
    deleteMappedProgramOutcomeAndCourseOutcome(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-program-outcome-and-course-outcome/${id}`);
    }


    // http://localhost:8080/api/v1/faculty/delete-course-outcome-and-program-outcome/2
    deleteMappedCourseOutcomeAndProgramOutcome(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-course-outcome-and-program-outcome/${id}`);
    }


    teacherSearchForObeMapping(teacherId: any, academicId: any, semesterId: any, subjectId: any): Observable<any> {
        return this.http.get(`${url}/faculty/teacher-assigned-subject-by-teacher-academic-plan-semester-subject/${teacherId}/${academicId}/${semesterId}/${subjectId}`);
    }

    // Teacher po co (OBE)
    teacherGetAllPoCOByTeacherId(teacherId: any): Observable<any> {
        return this.http.get(`${url}/faculty/program-outcome-and-course-outcome-by-teacher/${teacherId}`);
    }

    // course-outcome-and-program-outcome-by-teacher
    teacherGetAllCoPoByTeacherId(teacherId: any): Observable<any> {
        return this.http.get(`${url}/faculty/course-outcome-and-program-outcome-by-teacher/${teacherId}`);
    }

    // Approved UMPEO - by study program and academic plan and department head
    approvedUMPEOByStudyProgramAndAcademicPlanAndDepartmentHead(studyProgramId: any, academicPlanId: any, departmentHeadId: any): Observable<any> {
        return this.http.get(`${url}/faculty/approved-UMPEO-by-study-program-and-academic-plan-and-department-head/${studyProgramId}/${academicPlanId}/${departmentHeadId}`);
    }
    // Approved PEOPO - by study program and academic plan and department head
    approvedPEOPOByStudyProgramAndAcademicPlanAndDepartmentHead(studyProgramId: any, academicPlanId: any, departmentHeadId: any): Observable<any> {
        return this.http.get(`${url}/faculty/approved-PEOPO-by-study-program-and-academic-plan-and-department-head/${studyProgramId}/${academicPlanId}/${departmentHeadId}`);
    }


    // Semester child subject with POCO and OBE final mapping - by academic plan and department
    getSemesterChildSubjectByAcademicPlanAndDepartment(academicPlanId: any, departmentId: any): Observable<any> {
        return this.http.get(`${url}/faculty/semester-child-subject-with-POCO-OBE-final-mapping-by-academic-plan-and-department-head/${academicPlanId}/${departmentId}`);
    }


    getStudyProgramDegrees(): Observable<any> {
        return this.http.get(`${url}/faculty/study-program/degree`);
    }




    // /auth/show-roles-of-employees
    getAllEmployeesWithRoles(): Observable<any> {
        return this.http.get(`${url}/auth/show-roles-of-employees`);
    }


    // update
    // /auth/role-update-by-role-management-id/4
    updateRoleManagement(id: any): Observable<any> {
        return this.http.put(`${url}/auth/role-update-by-role-management-id/${id}`, {});
    }




    // subjects-by-degree/1
    getSubjectsByDegree(degreeId: any): Observable<any> {
        return this.http.get(`${url}/faculty/subjects-by-degree/${degreeId}`);
    }

    // /auth/academic-plan-by-student/892
    getAcademicPlanByStudent(studentId: any): Observable<any> {
        return this.http.get(`${url}/auth/academic-plan-by-student/${studentId}`);
    }


    // /auth/teacher-according-to-subject-teaching-department-by-subject/1
    getTeacherAccordingToSubjectTeachingDepartmentBySubject(subjectId: any): Observable<any> {
        return this.http.get(`${url}/auth/teacher-according-to-subject-teaching-department-by-subject/${subjectId}`);
    }


    // /auth/teacher-experience-details/138
    getTeacherProfessionalExperienceDetails(teacherId: any): Observable<any> {
        return this.http.get(`${url}/auth/teacher-experience-details/${teacherId}`);
    }

    // /auth/teacher-education-details/138
    getTeacherEducationDetails(teacherId: any): Observable<any> {
        return this.http.get(`${url}/auth/teacher-education-details/${teacherId}`);
    }

    // api/v1/auth/teacher-awards-details/2
    getTeacherAwardsDetails(teacherId: any): Observable<any> {
        return this.http.get(`${url}/auth/teacher-awards-details/${teacherId}`);
    }






    // auth/projects/2
    getTeacherProjects(teacherId: any): Observable<any> {
        return this.http.get(`${url}/auth/projects/${teacherId}`);
    }
    // /api/v1/auth/add/teacher/projects/details
    addTeacherProjects(data: any): Observable<any> {
        return this.http.post(`${url}/auth/add/teacher/projects/details`, data);
    }

    // auth/update/teacher/projects/details/1
    updateTeacherProjects(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/auth/update/teacher/projects/details/${id}`, data);
    }


    // /api/v1/auth/delete/teacher/projects/details/1
    deleteTeacherProject(id: any): Observable<any> {
        return this.http.delete(`${url}/auth/delete/teacher/projects/details/${id}`);
    }




    // research
    // /auth/add/teacher/research/details
    addTeacherResearch(data: any): Observable<any> {
        return this.http.post(`${url}/auth/add/teacher/research/details`, data);
    }
    // /auth/teacher-research-details/138
    getTeacherResearchDetails(teacherId: any): Observable<any> {
        return this.http.get(`${url}/auth/teacher-research-details/${teacherId}`);
    }


    // /auth/update/teacher/research/details/2
    updateTeacherResearch(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/auth/update/teacher/research/details/${id}`, data);
    }

    // /auth/delete/teacher/research/details/1
    deleteTeacherResearch(id: any): Observable<any> {
        return this.http.delete(`${url}/auth/delete/teacher/research/details/${id}`);
    }







    // Skills
    // /api/v1/auth/Skills/170
    getTeacherSkills(teacherId: any): Observable<any> {
        return this.http.get(`${url}/auth/Skills/${teacherId}`);
    }

    // /api/v1/auth/add/teacher/Skills/details
    addTeacherSkills(data: any): Observable<any> {
        return this.http.post(`${url}/auth/add/teacher/Skills/details`, data);
    }
    // auth/update/teacher/Skills/details/1
    updateTeacherSkill(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/auth/update/teacher/Skills/details/${id}`, data);
    }

    // api/v1/auth/delete/teacher/Skills/details/1
    deleteTeacherSkill(id: any): Observable<any> {
        return this.http.delete(`${url}/auth/delete/teacher/Skills/details/${id}`);
    }




    // /auth/student/Skills/2
    getStudentSkills(studentId: any): Observable<any> {
        return this.http.get(`${url}/auth/student/Skills/${studentId}`);
    }

    // /api/v1/auth/add/student/Skills/details
    addStudentSkills(data: any): Observable<any> {
        return this.http.post(`${url}/auth/add/student/Skills/details`, data);
    }

    // /auth/update/student/Skills/details/1
    updateStudentSkill(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/auth/update/student/Skills/details/${id}`, data);
    }
    // /auth/delete/student/Skills/details/1
    deleteStudentSkill(id: any): Observable<any> {
        return this.http.delete(`${url}/auth/delete/student/Skills/details/${id}`);
    }




    // auth/profile-image-update-by-user/{userId}
    updateProfileImage(userId: any, payload: any): Observable<any> {
        return this.http.put(`${url}/auth/profile-image-update-by-user/${userId}`, payload);
    }


    // /auth/teacher-awards-details/2
    getTeacherAwards(teacherId: any): Observable<any> {
        return this.http.get(`${url}/auth/teacher-awards-details/${teacherId}`);
    }

    // /api/v1/auth/add/teacher/awards/details
    addTeacherAwards(data: any): Observable<any> {
        return this.http.post(`${url}/auth/add/teacher/awards/details`, data);
    }
    // /auth/update/teacher/awards/details/2
    updateTeacherAwards(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/auth/update/teacher/awards/details/${id}`, data);
    }

    // /auth/delete/teacher/awards/details/1
    deleteTeacherAwards(id: any): Observable<any> {
        return this.http.delete(`${url}/auth/delete/teacher/awards/details/${id}`);
    }






    // register

    // /auth/student
    getAllStudents(): Observable<any> {
        return this.http.get(`${url}/auth/student`);
    }

    // /auth/all-active-employee
    getAllActiveEmployee(): Observable<any> {
        return this.http.get(`${url}/auth/all-active-employee`);
    }
    // /auth/all-retired-employee
    getAllRetiredEmployee(): Observable<any> {
        return this.http.get(`${url}/auth/all-retired-employee`);
    }

    // /auth/total-new-enrollments-of-current-session
    getTotalNewEnrollmentsOfCurrentSession(): Observable<any> {
        return this.http.get(`${url}/auth/total-new-enrollments-of-current-session`);
    }


    // /academic-plan-by-department-head-id
    getAcademicPlanByDepartmentHeadId(headId: any): Observable<any> {
        return this.http.get(`${url}/faculty/academic-plan-by-department-head-id/${headId}`);
    }
    getMastersAcademicPlanByDepartmentHeadId(headId: any): Observable<any> {
        return this.http.get(`${url}/faculty/masters-academic-plan-by-department-head-id/${headId}`);
    }


    // auth/students-by-academic-plan/{academicPlanId}
    getStudentsByAcademicPlan(academicPlanId: any): Observable<any> {
        return this.http.get(`${url}/auth/students-by-academic-plan/${academicPlanId}`);
    }






    // payment for form fillup
    validateOnlinePayment(token: any, mode: any): Observable<any> {
        return this.http.get(`${url}/accounting/response/?Token=${token}&Mode=${mode}`);
    }






    // {{baseurl}}/student/store-semester-admit-card-info
    storeDepartmentHeadSemesterAdmitCardInfo(data: any): Observable<any> {
        return this.http.post(`${url}/student/store-semester-admit-card-info`, data);
    }
    // {{baseurl}}/student/semester-admit-card-info
    getDepartmentHeadSemesterAdmitCardInfo(): Observable<any> {
        return this.http.get(`${url}/student/semester-admit-card-info`);
    }

    // {{baseurl}}/student/semester-admit-card-info-by-department-head/1
    getSemesterAdmitCardInfoByDepartmentHead(departmentHeadId: any): Observable<any> {
        return this.http.get(`${url}/student/semester-admit-card-info-by-department-head/${departmentHeadId}`);
    }


    // {{baseurl}}/student/update-semester-admit-card-info/1
    updateSemesterAdmitCardInfo(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/student/update-semester-admit-card-info/${id}`, data);
    }
    // {{baseurl}}/student/delete-semester-admit-card-info/1
    deleteSemesterAdmitCardInfo(id: any): Observable<any> {
        return this.http.delete(`${url}/student/delete-semester-admit-card-info/${id}`);
    }
    // {{baseurl}}/student/semester-admit-card-inf-by-id/1
    getSemesterAdmitCardInfoById(id: any): Observable<any> {
        return this.http.get(`${url}/student/semester-admit-card-inf-by-id/${id}`);
    }



    // student master


    // {{baseurl}}/student/semester-admit-card-by-student-and-semester/1/1
    getSemesterAdmitCardByStudentAndSemesterMasterPrint(studentId: any, semesterId: any): Observable<any> {
        return this.http.get(`${url}/student/semester-admit-card-by-student-and-semester/${studentId}/${semesterId}`);
    }





    // /faculty/find-semester-subject-multiple-semester
    findSemesterSubjectMultiple(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/find-semester-subject-multiple-semester`, data);
    }

    ///committee-members-subject-delete/{id}
    deleteCommitteeMembersSubject(id: any): Observable<any> {
        return this.http.delete(`${url}/committee/committee-members-subject-delete/${id}`);
    }


    // show-faculty-by-department/
    showFacultyByDepartment(departmentId: any): Observable<any> {
        return this.http.get(`${url}/faculty/show-faculty-by-department/${departmentId}`);
    }


    // /dean-by-faculty/{facultyId}
    getDeanByFaculty(facultyId: any): Observable<any> {
        return this.http.get(`${url}/auth/dean-by-faculty/${facultyId}`);
    }

    // /show-department-head-by-department-id/{departmentId}
    getDepartmentHeadByDepartmentId(departmentId: any): Observable<any> {
        return this.http.get(`${url}/auth/show-department-head-by-department-id/${departmentId}`);
    }




    // getAllDean
    getAllDean(): Observable<any> {
        return this.http.get(`${url}/auth/dean`);
    }
    // /department-head
    getDepartmentHead(): Observable<any> {
        return this.http.get(`${url}/auth/department-head`);
    }




    getSessionWiseResultByDepartmentHead(departmentHeadId: any): Observable<any> {
        return this.http.get(`${url}/auth/batch-wise-result-by-department-head/${departmentHeadId}`);
    }

    // faculty/running-academic-plan-by-department-head-id/{departmentHeadId}

    getRunningAcademicPlanByDepartmentHeadId(departmentHeadId: any): Observable<any> {
        return this.http.get(`${url}/faculty/running-academic-plan-by-department-head-id/${departmentHeadId}`);
    }

    // faculty/semester-offer/find-by-department-head/{departmentHeadId}

    getSemesterOfferByDepartmentHead(departmentHeadId: any): Observable<any> {
        return this.http.get(`${url}/faculty/semester-offer/find-by-department-head/${departmentHeadId}`);
    }








    // PEO Template
    // http://localhost:8080/api/v1/faculty/store-program-education-outcome-template

    storeProgramEducationOutcomeTemplate(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-program-education-outcome-template`, data);
    }
    // http://localhost:8080/api/v1/faculty/program-education-outcome-templates
    getProgramEducationOutcomeTemplates(): Observable<any> {
        return this.http.get(`${url}/faculty/program-education-outcome-templates`);
    }

    // http://localhost:8080/api/v1/faculty/program-education-outcome-template-by-department-head/1
    getProgramEducationOutcomeTemplateByDepartmentHead(departmentHeadId: any): Observable<any> {
        return this.http.get(`${url}/faculty/program-education-outcome-template-by-department-head/${departmentHeadId}`);
    }

    // http://localhost:8080/api/v1/faculty/update-program-education-outcome-template/3
    updateProgramEducationOutcomeTemplate(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/faculty/update-program-education-outcome-template/${id}`, data);
    }

    // http://localhost:8080/api/v1/faculty/delete-program-education-outcome-template/3
    deleteProgramEducationOutcomeTemplate(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-program-education-outcome-template/${id}`);
    }




    // PO Template
    // http://localhost:8080/api/v1/faculty/store-program-outcome-template
    storeProgramOutcomeTemplate(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-program-outcome-template`, data);
    }
    // http://localhost:8080/api/v1/faculty/program-outcome-templates
    getProgramOutcomeTemplates(): Observable<any> {
        return this.http.get(`${url}/faculty/program-outcome-templates`);
    }

    // http://localhost:8080/api/v1/faculty/update-program-outcome-template/4
    updateProgramOutcomeTemplate(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/faculty/update-program-outcome-template/${id}`, data);
    }

    // http://localhost:8080/api/v1/faculty/delete-program-outcome-template/1
    deleteProgramOutcomeTemplate(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-program-outcome-template/${id}`);
    }



    // http://localhost:8080/api/v1/faculty/approved-program-education-outcome-template-by-department-head-study-program/1/1
    getApprovedProgramEducationOutcomeTemplateByDepartmentHeadStudyProgram(departmentHeadId: any, studyProgramId: any): Observable<any> {
        return this.http.get(`${url}/faculty/approved-program-education-outcome-template-by-department-head-study-program/${departmentHeadId}/${studyProgramId}`);
    }

    // http://localhost:8080/api/v1/faculty/approved-program-outcome-template-by-department-head-and-study-program/1/1
    getApprovedProgramOutcomeTemplateByDepartmentHeadAndStudyProgram(departmentHeadId: any, studyProgramId: any): Observable<any> {
        return this.http.get(`${url}/faculty/approved-program-outcome-template-by-department-head-and-study-program/${departmentHeadId}/${studyProgramId}`);
    }





    // /department-by-faculty/{facultyId}
    getDepartmentByFaculty(facultyId: any): Observable<any> {
        return this.http.get(`${url}/faculty/department-by-faculty/${facultyId}`);
    }



    // faculty/child-subject-module-and-lecture-update/{childSubjectId}
    updateChildSubjectModuleAndLecture(childSubjectId: any, data: any): Observable<any> {
        return this.http.put(`${url}/faculty/child-subject-module-and-lecture-update/${childSubjectId}`, data);
    }






    // obe Report
    // {{baseurl}}/faculty/get-course-compliance-with-program-outcome-by-subject-and-academic-plan/1/1
    getCourseComplianceWithProgramOutcomeBySubjectAndAcademicPlan(subjectId: any, academicPlanId: any): Observable<any> {
        return this.http.get(`${url}/faculty/get-course-compliance-with-program-outcome-by-subject-and-academic-plan/${subjectId}/${academicPlanId}`);
    }



    // {{baseurl}}/faculty/get-course-compliance-with-knowledge-profile-by-subject-and-academic-plan/13/27
    getCourseComplianceWithKnowledgeProfileBySubjectAndAcademicPlan(subjectId: any, academicPlanId: any): Observable<any> {
        return this.http.get(`${url}/faculty/get-course-compliance-with-knowledge-profile-by-subject-and-academic-plan/${subjectId}/${academicPlanId}`);
    }

    // {{baseurl}}/faculty/get-course-compliance-with-complex-engineering-problem-by-subject-and-academic-plan/13/27
    getCourseComplianceWithComplexEngineeringProblemBySubjectAndAcademicPlan(subjectId: any, academicPlanId: any): Observable<any> {
        return this.http.get(`${url}/faculty/get-course-compliance-with-complex-engineering-problem-by-subject-and-academic-plan/${subjectId}/${academicPlanId}`);
    }

    // {{baseurl}}/faculty/get-course-compliance-with-complex-engineering-activity-by-subject-and-academic-plan/13/27
    getCourseComplianceWithComplexEngineeringActivityBySubjectAndAcademicPlan(subjectId: any, academicPlanId: any): Observable<any> {
        return this.http.get(`${url}/faculty/get-course-compliance-with-complex-engineering-activity-by-subject-and-academic-plan/${subjectId}/${academicPlanId}`);
    }

    // {{baseurl}}/faculty/get-evaluation-compliance-against-taxonomy-by-subject-and-academic-plan/13/27
    getEvaluationComplianceAgainstTaxonomyBySubjectAndAcademicPlan(subjectId: any, academicPlanId: any): Observable<any> {
        return this.http.get(`${url}/faculty/get-evaluation-compliance-against-taxonomy-by-subject-and-academic-plan/${subjectId}/${academicPlanId}`);
    }





    // {{baseUrl}}/faculty/subject-by-teacher-and-academic-plan-semester/27/18/1
    getSubjectByTeacherAndAcademicPlanSemester(teacherId: any, academicPlanId: any, semesterId: any): Observable<any> {
        return this.http.get(`${url}/faculty/subject-by-teacher-and-academic-plan-semester/${teacherId}/${academicPlanId}/${semesterId}`);
    }





    //{{baseurl}}/auth/student-lab-group-assign
    assignStudentsToLabGroup(data: any): Observable<any> {
        return this.http.put(`${url}/auth/student-lab-group-assign`, data);
    }

    // {{baseurl}}/auth/lab-group-assign-able-student-by-semester-subject-teacher/1/1/1
    getAssignAbleStudentsBySemesterSubjectTeacher(semesterId: any, subjectId: any, teacherId: any): Observable<any> {
        return this.http.get(`${url}/auth/lab-group-assign-able-student-by-semester-subject-teacher/${semesterId}/${subjectId}/${teacherId}`);
    }



    // {{baseurl}}/auth/lab-group-student-by-semester-subject-teacher-group/1/1/1/A
    getStudentBySemesterSubjectTeacherGroup(semesterId: any, subjectId: any, teacherId: any, group: any): Observable<any> {
        return this.http.get(`${url}/auth/lab-group-student-by-semester-subject-teacher-group/${semesterId}/${subjectId}/${teacherId}/${group}`);
    }

    // {{baseUrl}}/auth/store-student-lab-experiment
    storeStudentLabExperiment(data: any, isAutoSave: boolean = false): Observable<any> {
        const options: any = {};

        if (isAutoSave) {
            options.headers = { 'X-Skip-Interceptor': 'true' };
        }

        return this.http.post(`${url}/exam/store-student-lab-experiment`, data, options);
    }



    // {{baseurl}}/exam/student-lab-experiment-by-teacher-academic-plan-semester-subject/67/4/26/19
    getStudentLabExperimentByTeacherAcademicPlanSemesterSubject(teacherId: any, academicPlanId: any, semesterId: any, subjectId: any): Observable<any> {
        return this.http.get(`${url}/exam/student-lab-experiment-by-teacher-academic-plan-semester-subject/${teacherId}/${academicPlanId}/${semesterId}/${subjectId}`);
    }


    // {{baseurl}}/exam/student-lab-experiment-by-date-and-group
    getStudentLabExperimentByDateAndGroup(data: any): Observable<any> {
        return this.http.post(`${url}/exam/student-lab-experiment-by-date-and-group`, data);
    }


    // {{baseurl}}/auth/lab-group-student-by-semester-subject-teacher-group/1/1/1/A
    getStudentBySemesterSubjectTeacherByLabGroup(semesterId: any, subjectId: any, teacherId: any, group: any): Observable<any> {
        return this.http.get(`${url}/auth/lab-group-student-by-semester-subject-teacher-group/${semesterId}/${subjectId}/${teacherId}/${group}`);
    }





    // teacher obe 


    // /faculty/approved-program-outcome-template
    getApprovedProgramOutcomeTemplate(): Observable<any> {
        return this.http.get(`${url}/faculty/approved-program-outcome-template`);
    }

    // /teacher-subject-find-by-teacher-subject-academic-plan/{teacherId}/{subjectId}/{academicPlanId}
    getTeacherSubjectByTeacherSubjectAcademicPlan(teacherId: any, subjectId: any, academicPlanId: any): Observable<any> {
        return this.http.get(`${url}/faculty/teacher-subject-find-by-teacher-subject-academic-plan/${teacherId}/${subjectId}/${academicPlanId}`);
    }



    // scrutinizer-report-by-academic-plan-semester-subject/{academicPlanId}/{semesterId}/{subjectId}
    getScrutinizerReportByAcademicPlanSemesterSubject(academicPlanId: any, semesterId: any, subjectId: any): Observable<any> {
        return this.http.get(`${url}/exam/scrutinizer-report-by-academic-plan-semester-subject/${academicPlanId}/${semesterId}/${subjectId}`);
    }



    // {{baseUrl}}/student/form-fill-up-by-department-and-study-program-and-academic-plan-and-semester/1/1/1/1
    getStudentFormFillUpByDepartmentAndStudyProgramAndAcademicPlanAndSemester(departmentId: any, studyProgramId: any, academicPlanId: any, semesterId: any): Observable<any> {
        return this.http.get(`${url}/student/form-fill-up-by-department-and-study-program-and-academic-plan-and-semester/${departmentId}/${studyProgramId}/${academicPlanId}/${semesterId}`);
    }







    // /find-attached-student-by-department-and-building/{departmentId}/{buildingId}
    findAttachedStudentByDepartmentAndBuilding(departmentId: any, buildingId: any): Observable<any> {
        return this.http.get(`${url}/auth/find-attached-student-by-department-and-building/${departmentId}/${buildingId}`);
    }


    // /find-attached-student-by-academic-plan-and-building/{academicPlanId}/{buildingId}
    findAttachedStudentByAcademicPlanAndBuilding(academicPlanId: any, buildingId: any): Observable<any> {
        return this.http.get(`${url}/auth/find-attached-student-by-academic-plan-and-building/${academicPlanId}/${buildingId}`);
    }



    // /find-alloted-student-by-department-and-building/{departmentId}/{buildingId}
    findAllottedStudentByDepartmentAndBuilding(departmentId: any, buildingId: any): Observable<any> {
        return this.http.get(`${url}/auth/find-allotted-student-by-department-and-building/${departmentId}/${buildingId}`);
    }

    // /find-alloted-student-by-academic-plan-and-building/{academicPlanId}/{buildingId}
    findAllottedStudentByAcademicPlanAndBuilding(academicPlanId: any, buildingId: any): Observable<any> {
        return this.http.get(`${url}/auth/find-allotted-student-by-academic-plan-and-building/${academicPlanId}/${buildingId}`);
    }





    // /find-student-by-student-unique-id/{studentId}
    findStudentByStudentUniqueId(studentId: any): Observable<any> {
        return this.http.get(`${url}/auth/find-student-by-student-unique-id/${studentId}`);
    }



    // /research-dean-committee-by-dean/{deanId}
    getResearchDeanCommitteeByDean(deanId: any): Observable<any> {
        return this.http.get(`${url}/research/research-dean-committee-by-dean/${deanId}`);
    }




    // /find-residential-student-by-building-and-academic-plan/
    findResidentialStudentByBuildingAndAcademicPlan(buildingId: any, academicPlanId: any): Observable<any> {
        return this.http.get(`${url}/auth/find-residential-student-by-building-and-academic-plan/${buildingId}/${academicPlanId}`);
    }


    // /find-residential-student-by-building/{buildingId}
    findResidentialStudentByBuilding(buildingId: any): Observable<any> {
        return this.http.get(`${url}/auth/find-residential-student-by-building/${buildingId}`);
    }


    // /student-hall-notice-store
    storeStudentHallNotice(data: any): Observable<any> {
        return this.http.post(`${url}/notification/student-hall-notice-store`, data);
    }




    // {{baseUrl}}/faculty/group-batches
    getGroupBatches(): Observable<any> {
        return this.http.get(`${url}/faculty/group-batches`);
    }
    // {{baseUrl}}/faculty/group-batch/1
    getGroupBatch(id: any): Observable<any> {
        return this.http.get(`${url}/faculty/group-batch/${id}`);
    }

    //   http://localhost:8080/api/v1/faculty/store-group-batch
    storeGroupBatch(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/store-group-batch`, data);
    }


    // http://localhost:8080/api/v1/faculty/delete-group-batch/1
    deleteGroupBatch(id: any): Observable<any> {
        return this.http.delete(`${url}/faculty/delete-group-batch/${id}`);
    }


    // student-by-student-id
    getStudentByStudentId(studentId: any): Observable<any> {
        return this.http.get(`${url}/auth/student-by-student-id/${studentId}`);
    }
    // /find-student-by-student-id/{studentId}
    findStudentByStudentId(studentId: any): Observable<any> {
        return this.http.get(`${url}/auth/find-student-by-student-id/${studentId}`);
    }

    // /student-manual-re-admission
    studentManualReAdmission(data: any): Observable<any> {
        return this.http.post(`${url}/student/student-manual-re-admission`, data);
    }

}
