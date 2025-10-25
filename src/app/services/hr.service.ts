import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url } from "../core/models/API";
@Injectable({
    providedIn: "root",
})
export class HrService {
    constructor(private http: HttpClient) { }

    //Designation
    getDesignations(): Observable<any> {
        return this.http.get(`${url}/hr/designation`);
    }

    getDesignation(id: number): Observable<any> {
        return this.http.get(`${url}/hr/designation/${id}`);
    }

    addDesignation(data: any): Observable<any> {
        return this.http.post(`${url}/hr/designation/add`, data);
    }

    updateDesignation(data: any, id: number): Observable<any> {
        return this.http.put(`${url}/hr/designation/update/${id}`, data);
    }

    deleteDesignation(id: string): Observable<any> {
        return this.http.delete(`${url}/hr/designation/delete/${id}`);
    }

    // salary rule
    getSalaryRules(): Observable<any> {
        return this.http.get(`${url}/hr/salary-rule`);
    }

    getSalaryRule(id: number): Observable<any> {
        return this.http.get(`${url}/hr/salary-rule/${id}`);
    }

    addSalaryRule(data: any): Observable<any> {
        return this.http.post(`${url}/hr/salary-rule-add`, data);
    }

    updateSalaryRule(data: any, id: number): Observable<any> {
        return this.http.put(`${url}/hr/salary-rule-update/${id}`, data);
    }

    deleteSalaryRule(id: string): Observable<any> {
        return this.http.delete(`${url}/hr/salary-rule-delete/${id}`);
    }

    getAllowanceSalaryRules(): Observable<any> {
        return this.http.get(`${url}/hr/all-allowance-salary-rules`);
    }

    getDeductionSalaryRules(): Observable<any> {
        return this.http.get(`${url}/hr/all-deduction-salary-rules`);
    }

    getContributionSalaryRules(): Observable<any> {
        return this.http.get(`${url}/hr/all-contribution-salary-rules`);
    }

    // salary structure
    getSalaryStructures(): Observable<any> {
        return this.http.get(`${url}/hr/salary-structure`);
    }

    getSalaryStructure(id: number): Observable<any> {
        return this.http.get(`${url}/hr/salary-structure/${id}`);
    }

    addSalaryStructure(data: any): Observable<any> {
        return this.http.post(`${url}/hr/salary-structure/add`, data);
    }

    updateSalaryStructure(data: any, id: number): Observable<any> {
        return this.http.put(`${url}/hr/salary-structure/update/${id}`, data);
    }

    deleteSalaryStructure(id: string): Observable<any> {
        return this.http.delete(`${url}/hr/salary-rule-delete/${id}`);
    }

    // job-grade
    getJobGrades(): Observable<any> {
        return this.http.get(`${url}/hr/job-grade`);
    }

    getJobGrade(id: number): Observable<any> {
        return this.http.get(`${url}/hr/job-grade/${id}`);
    }

    getJobGradeByDesignation(id: string): Observable<any> {
        return this.http.get(`${url}/hr/designation-by-id/${id}`);
    }

    getJobGradeBasicPayByJobGrad(id: string): Observable<any> {
        return this.http.get(`${url}/hr/job-grade-basic-pay-by-id/${id}`);
    }

    addJobGrade(data: any): Observable<any> {
        return this.http.post(`${url}/hr/job-grade/add`, data);
    }

    updateJobGrade(data: any, id: number): Observable<any> {
        return this.http.put(`${url}/hr/job-grade/update/${id}`, data);
    }

    deleteJobGrade(id: string): Observable<any> {
        return this.http.delete(`${url}/hr/job-grade/delete/${id}`);
    }

    //job position
    getJobPositions(): Observable<any> {
        return this.http.get(`${url}/hr/job-position`);
    }

    getJobPosition(id: number): Observable<any> {
        return this.http.get(`${url}/hr/job-position/${id}`);
    }

    addJobPosition(data: any): Observable<any> {
        return this.http.post(`${url}/hr/job-position/add`, data);
    }

    updateJobPosition(data: any, id: number): Observable<any> {
        return this.http.put(`${url}/hr/job-position/update/${id}`, data);
    }

    deleteJobPosition(id: string): Observable<any> {
        return this.http.delete(`${url}/hr/job-position/delete/${id}`);
    }

    // leave type
    getLeaveTypes(): Observable<any> {
        return this.http.get(`${url}/hr/leave-type`);
    }

    getLeaveType(id: number): Observable<any> {
        return this.http.get(`${url}/hr/leave-type/${id}`);
    }

    postLeaveType(data: any): Observable<any> {
        return this.http.post(`${url}/hr/leave-type-add`, data);
    }

    putLeaveType(data: any, id: number): Observable<any> {
        return this.http.put(`${url}/hr/leave-type-update/${id}`, data);
    }

    deleteLeaveType(id: number): Observable<any> {
        return this.http.delete(`${url}/hr/leave-type-delete/${id}`);
    }

    // leave allocation
    getLeaveAllocations(): Observable<any> {
        return this.http.get(`${url}/hr/leave-allocation`);
    }

    getLeaveAllocation(id: number): Observable<any> {
        return this.http.get(`${url}/hr/leave-allocation/${id}`);
    }

    getLeaveAllocationByUser(id: number): Observable<any> {
        return this.http.get(`${url}/hr/find-employee-leave-by-user-id/${id}`);
    }

    postLeaveAllocation(data: any): Observable<any> {
        return this.http.post(`${url}/hr/leave-allocation-add`, data);
    }

    putLeaveAllocation(data: any, id: number): Observable<any> {
        return this.http.put(`${url}/hr/leave-type-update/${id}`, data);
    }

    deleteLeaveAllocation(id: number): Observable<any> {
        return this.http.delete(`${url}/hr/leave-allocation-delete/${id}`);
    }

    // leave allocation
    getEmployeeLeaveRequests(): Observable<any> {
        return this.http.get(`${url}/hr/employee-leave`);
    }

    getEmployeeLeaveRequest(id: number): Observable<any> {
        return this.http.get(`${url}/hr/employee-leave/${id}`);
    }

    getEmployeeLeaveRequestByEmployee(id: number): Observable<any> {
        return this.http.get(
            `${url}/hr/employee-leave-request-by-user-id/${id}`
        );
    }

    getEmployeeLeaveApprovalByHR(): Observable<any> {
        return this.http.get(
            `${url}/hr/hr-officer-employee-approve-able-leave-list`
        );
    }

    approveEmployeeLeaveApprovalByHR(id: number): Observable<any> {
        return this.http.put(`${url}/hr/hr-employee-leave-approve/${id}`, {});
    }

    postEmployeeLeaveRequest(data: any): Observable<any> {
        return this.http.post(`${url}/hr/employee-leave-add`, data);
    }

    deleteEmployeeLeaveRequest(id: number): Observable<any> {
        return this.http.delete(`${url}/hr/employee-leave/delete/${id}`);
    }



    // arrear

    // accounting/arrears-type
    getArrearsTypes(): Observable<any> {
        return this.http.get(`${url}/accounting/arrears-type`);
    }
    // accounting/arrears-type-store
    storeArrearsType(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/arrears-type-store`, data);
    }
    // /accounting/arrears-type-update/1
    updateArrearsType(data: any, id: number): Observable<any> {
        return this.http.put(`${url}/accounting/arrears-type-update/${id}`, data);
    }

    // /accounting/arrears-type-delete/1
    deleteArrearsType(id: number): Observable<any> {
        return this.http.delete(`${url}/accounting/arrears-type-delete/${id}`);
    }






    // /accounting/arrears-rules
    getArrearsRules(): Observable<any> {
        return this.http.get(`${url}/accounting/arrears-rules`);
    }

    // accounting/arrears-rules-store
    storeArrearsRule(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/arrears-rules-store`, data);
    }

    //{{baseurl}}/hr/store-leave-policy
    storeLeavePolicy(data: any): Observable<any> {
        return this.http.post(`${url}/hr/store-leave-policy`, data);
    }
    //{{baseurl}}/hr/leave-policies
    getLeavePolicies(): Observable<any> {
        return this.http.get(`${url}/hr/leave-policies`);
    }

    //{{baseurl}}/hr/update-leave-policy/1
    updateLeavePolicy(data: any, id: number): Observable<any> {
        return this.http.put(`${url}/hr/update-leave-policy/${id}`, data);
    }

    //{{baseurl}}/hr/delete-leave-policy/1
    deleteLeavePolicy(id: number): Observable<any> {
        return this.http.delete(`${url}/hr/delete-leave-policy/${id}`);
    }

    //{{baseurl}}/hr/store-earned-leave-policy
    storeEarnedLeavePolicy(data: any): Observable<any> {
        return this.http.post(`${url}/hr/store-earned-leave-policy`, data);
    }

    //{{baseurl}}/hr/earned-leave-policies
    getEarnedLeavePolicies(): Observable<any> {
        return this.http.get(`${url}/hr/earned-leave-policies`);
    }

    //{{baseurl}}/hr/update-earned-leave-policy/1
    updateEarnedLeavePolicy(data: any, id: number): Observable<any> {
        return this.http.put(`${url}/hr/update-earned-leave-policy/${id}`, data);
    }

    //{{baseurl}}/hr/delete-earned-leave-policy/1
    deleteEarnedLeavePolicy(id: number): Observable<any> {
        return this.http.delete(`${url}/hr/delete-earned-leave-policy/${id}`);
    }

    // /store-employee-earned-leave
    storeEmployeeEarnedLeave(data: any): Observable<any> {
        return this.http.post(`${url}/hr/store-employee-earned-leave`, data);
    }

    //promotion-policies
    getPromotionPolicies(): Observable<any> {
        return this.http.get(`${url}/hr/promotion-policies`);
    }

    //{{baseurl}}/hr/store-promotion-policy
    storePromotionPolicy(data: any): Observable<any> {
        return this.http.post(`${url}/hr/store-promotion-policy`, data);
    }

    //{{baseurl}}/hr/update-promotion-policy/1
    updatePromotionPolicy(data: any, id: number): Observable<any> {
        return this.http.put(`${url}/hr/update-promotion-policy/${id}`, data);
    }

    //{{baseurl}}/hr/delete-promotion-policy/1
    deletePromotionPolicy(id: number): Observable<any> {
        return this.http.delete(`${url}/hr/delete-promotion-policy/${id}`);
    }

    ///promotion-policy-by-current-designation/{currentDesignationId}
    getPromotionPolicyByCurrentDesignation(currentDesignationId: number): Observable<any> {
        return this.http.get(`${url}/hr/promotion-policy-by-current-designation/${currentDesignationId}`);
    }

}
