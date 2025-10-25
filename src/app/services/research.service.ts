import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url } from "../core/models/API";

@Injectable({
    providedIn: "root",
})
export class ResearchService {
    constructor(private http: HttpClient) { }

    //research opportunity
    getResearchOpportunities(): Observable<any> {
        return this.http.get(`${url}/research/research-opportunity`);
    }

    getResearchOpportunity(id: number): Observable<any> {
        return this.http.get(`${url}/research/research-opportunity/${id}`);
    }

    postResearchOpportunity(data: any): Observable<any> {
        return this.http.post(`${url}/research/research-opportunity/add`, data);
    }

    updateResearchOpportunity(data: any, id: number): Observable<any> {
        return this.http.put(
            `${url}/research/research-opportunity/update/${id}`,
            data
        );
    }

    deleteResearchOpportunity(id: number): Observable<any> {
        return this.http.delete(
            `${url}/research/research-opportunity/delete/${id}`
        );
    }

    //research application
    getResearchApplications(): Observable<any> {
        return this.http.get(`${url}/research/research-application`);
    }

    getResearchApplicationByUser(userId: string): Observable<any> {
        return this.http.get(
            `${url}/research/research-application-by-user/${userId}`
        );
    }

    getResearchApplication(id: number): Observable<any> {
        return this.http.get(`${url}/research/research-application/${id}`);
    }

    postResearchApplication(data: any): Observable<any> {
        return this.http.post(`${url}/research/research-application/add`, data);
    }

    updateResearchApplication(data: any, id: number): Observable<any> {
        return this.http.put(
            `${url}/research/research-application/update/${id}`,
            data
        );
    }

    deleteResearchApplication(id: number): Observable<any> {
        return this.http.delete(
            `${url}/research/research-application/delete/${id}`
        );
    }

    //research
    getResearches(): Observable<any> {
        return this.http.get(`${url}/research`);
    }

    getResearchesByUser(userId: string): Observable<any> {
        return this.http.get(`${url}/research/research-by-user/${userId}`);
    }

    getResearch(id: string): Observable<any> {
        return this.http.get(`${url}/research/${id}`);
    }

    postResearch(data: any): Observable<any> {
        return this.http.post(`${url}/research/research-add`, data);
    }

    updateResearch(data: any, id: number): Observable<any> {
        return this.http.put(`${url}/research/update/${id}`, data);
    }

    deleteResearch(id: string): Observable<any> {
        return this.http.delete(`${url}/research/delete/${id}`);
    }

    //http://localhost:8080/api/v1/research/research-proposal-application-for-ugc/add
    postResearchProposalApplicationForUGC(data: any): Observable<any> {
        return this.http.post(
            `${url}/research/research-proposal-application-for-ugc/add`,
            data
        );
    }


    // /research/research-proposal-application-for-ugc/1
    getOneProposal(id: number): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-application-for-ugc/${id}`);
    }



















    //http://localhost:8080/api/v1/research/research-proposal-application-for-ugc
    getResearchProposalApplicationForUGC(id: number): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-application-for-ugc/${id}`);
    }

    // http://localhost:8080/api/v1/research/project-type
    getProjectTypes(): Observable<any> {
        return this.http.get(`${url}/research/project-type`);
    }


    getResearchCategory(): Observable<any> {
        return this.http.get(`${url}/research/research-category`);
    }

    //Department Program apis
    departmentGetAll(): Observable<any> {
        return this.http.get(`${url}/faculty/department`);
    }

    uploadFile(data: any): Observable<any> {
        return this.http.post(`${url}/faculty/file-for-post`, data);
    }


    //http://localhost:8080/api/v1/research/research-proposal-application-for-ugc-by-user/1
    getResearchProposalApplicationForUGCByUser(userId: string): Observable<any> {
        return this.http.get(
            `${url}/research/research-proposal-application-for-ugc-by-user/${userId}`
        );
    }


    // http://localhost:8080/api/v1/research/research-proposal-application-for-ugc/4
    getResearchProposalApplicationForUGCById(id: number): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-application-for-ugc/${id}`);
    }


    // http://localhost:8080/api/v1/research/researchDonationCircular
    getResearchDonationCircular(): Observable<any> {
        return this.http.get(`${url}/research/researchDonationCircular`);
    }



    // http://localhost:8080/api/v1/research/applyForPayment/add
    applyForPaymentTeacher(data: any): Observable<any> {
        return this.http.post(`${url}/research/applyForPayment/add`, data);
    }



    // http://localhost:8080/api/v1/research/research-proposal-ugc-list-by-department-head/11
    getResearchProposalUgcListByDepartmentHead(departmentHeadId: any): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-ugc-list-by-department-head/${departmentHeadId}`);
    }

    // http://localhost:8080/api/v1/research/approve-by-depthead/14
    approveByDepthead(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/research/approve-by-depthead/${id}`, data);
    }

    // reject-by-depthead/{id}
    rejectByDepthead(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/research/reject-by-department-head/${id}`, data);
    }


    // http://localhost:8080/api/v1/research/show-list-by-dean-id/2
    showListByDeanId(deanId: any): Observable<any> {
        return this.http.get(`${url}/research/show-list-by-dean-id/${deanId}`);
    }

    // http://localhost:8080/api/v1/research/approve-by-dean/21
    approveByDean(id: any): Observable<any> {
        return this.http.put(`${url}/research/approve-by-dean/${id}`, {});
    }

    // http://localhost:8080/api/v1/research/reject-by-dean/29
    rejectByDean(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/research/reject-by-dean/${id}`, data);
    }



    // /research-committees
    getAllReserchCommittee(): Observable<any> {
        return this.http.get(`${url}/committee/research-committees`);
    }


    // http://localhost:8080/api/v1/research/assign-committee-to-research-proposal/18
    assignCommitteeToResearchProposal(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/assign-committee-to-research-proposal/${id}`, data);
    }


    // http://localhost:8080/api/v1/research/research-proposal-application-for-ugc
    getAllResearchProposalApplicationForUGC(): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-application-for-ugc`);
    }

    // http://localhost:8080/api/v1/research/approve-by-final-committee/23
    approveByFinalCommittee(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/research/approve-by-final-committee/${id}`, data);
    }

    // /proposal-review-by-final-committee/{id}
    proposalReviewByFinalCommittee(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/research/proposal-review-by-final-committee/${id}`, data);
    }





    //research/researchFinalCircular
    getResearchFinalCircular(): Observable<any> {
        return this.http.get(`${url}/research/researchFinalCircular`);
    }

    //researchFinalCircular/{id}
    getResearchFinalCircularById(id: any): Observable<any> {
        return this.http.get(`${url}/research/researchFinalCircular/${id}`);
    }



    // new
    // /approve-research-application-by-research-director/{id}
    approveResearchApplicationByResearchDirector(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/research/approve-research-application-by-research-director/${id}`, data);
    }


    // /approve-research-application-by-research-director/{id}
    rejectResearchApplicationByResearchDirector(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/research/reject-research-application-by-research-director/${id}`, data);
    }








    //http://localhost:8080/api/v1/research/researchDonationCircular/add
    addResearchDonationCircular(data: any): Observable<any> {
        return this.http.post(`${url}/research/researchDonationCircular/add`, data);
    }
    //http://localhost:8080/api/v1/research/researchDonationCircular/1
    getResearchDonationCircularById(id: number): Observable<any> {
        return this.http.get(`${url}/research/researchDonationCircular/${id}`);
    }

    //http://localhost:8080/api/v1/research/researchDonationCircular
    getAllResearchDonationCircular(): Observable<any> {
        return this.http.get(`${url}/research/researchDonationCircular`);
    }
    //http://localhost:8080/api/v1/research/researchDonationCircular/delete/1
    deleteResearchDonationCircular(id: number): Observable<any> {
        return this.http.delete(`${url}/research/researchDonationCircular/delete/${id}`);
    }
    //http://localhost:8080/api/v1/research/researchDonationCircular/update/1
    updateResearchDonationCircular(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/research/researchDonationCircular/update/${id}`, data);
    }

    //http://localhost:8080/api/v1/research/payment-list-by-dean-id/7
    getPaymentListByDeanId(deanId: any): Observable<any> {
        return this.http.get(`${url}/research/payment-list-by-dean-id/${deanId}`);
    }

    //http://localhost:8080/api/v1/research/dean-approve/1
    deanPaymentApprove(id: any): Observable<any> {
        return this.http.put(`${url}/research/dean-approve/${id}`, {});
    }
    //http://localhost:8080/api/v1/research/payment-reject-by-dean/1
    deanPaymentReject(id: any): Observable<any> {
        return this.http.put(`${url}/research/payment-reject-by-dean/${id}`, {});
    }

    //http://localhost:8080/api/v1/research/payment-approve-by-research-director/4
    researchDirectorPaymentApprove(id: any): Observable<any> {
        return this.http.put(`${url}/research/payment-approve-by-research-director/${id}`, {});
    }

    //http://localhost:8080/api/v1/research/reject-by-research-director/3
    researchDirectorPaymentReject(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/research/reject-by-research-director/${id}`, data);
    }

    //http://localhost:8080/api/v1/research/applyForPayment
    getAllPaymentApplications(): Observable<any> {
        return this.http.get(`${url}/research/applyForPayment`);
    }




    // http://localhost:8080/api/v1/research/research-proposal-ugc-teacher/1
    getResearchProposalUgcTeacher(id: number): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-ugc-teacher/${id}`);
    }



    // /applied-payment-by-user/{userId}
    appliedPaymentByUser(userId: number): Observable<any> {
        return this.http.get(`${url}/research/applied-payment-by-user/${userId}`);
    }





    createCommittee(body: any) {
        return this.http.post(`${url}/research/research-dean-committee/add`, body);
    }
    updateCommittee(id: number, body: any) {
        return this.http.put(`${url}/research/research-dean-committee/update/${id}`, body);
    }
    deleteCommittee(id: number) {
        return this.http.delete(`${url}/research/research-dean-committee/delete/${id}`);
    }
    getCommitteeList() {
        return this.http.get(`${url}/research/research-dean-committees`);
    }


    // /find-donation-circular-by-research-final-circular/{researchFinalCircularId}
    findDonationCircularByResearchFinalCircular(researchFinalCircularId: number): Observable<any> {
        return this.http.get(`${url}/research/find-donation-circular-by-research-final-circular/${researchFinalCircularId}`);
    }




    // /research-dean-committee-by-dean/{deanId}
    getResearchProposalDeanCommitteeByDean(deanId: number): Observable<any> {
        return this.http.get(`${url}/research/research-dean-committee-by-dean/${deanId}`);
    }



    // /assign-dean-committee/{id}
    assignDeanCommittee(id: number): Observable<any> {
        return this.http.put(`${url}/research/assign-dean-committee/${id}`, {});
    }






    // http://localhost:8080/api/v1/research/approve-research-application-by-vice-chancellor/{id}
    approveResearchApplicationByViceChancellor(id: any): Observable<any> {
        return this.http.put(`${url}/research/approve-research-application-by-vice-chancellor/${id}`, {});
    }

    // http://localhost:8080/api/v1/research/reject-research-application-by-vice-chancellor/1
    rejectResearchApplicationByViceChancellor(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/research/reject-research-application-by-vice-chancellor/${id}`, data);
    }







    // research payment
    // http://localhost:8080/api/v1/research/advance-payment-applications
    getAdvancePaymentApplications(): Observable<any> {
        return this.http.get(`${url}/research/advance-payment-applications`);
    }
    // http://localhost:8080/api/v1/research/advance-payment-application/1
    getAdvancePaymentApplication(id: number): Observable<any> {
        return this.http.get(`${url}/research/advance-payment-application/${id}`);
    }

    // http://localhost:8080/api/v1/research/advance-payment-application-by-research-proposal/1
    getAdvancePaymentApplicationByResearchProposal(id: number): Observable<any> {
        return this.http.get(`${url}/research/advance-payment-application-by-research-proposal/${id}`);
    }
    // http://localhost:8080/api/v1/research/advance-payment-application/by-user/1
    getAdvancePaymentApplicationByUser(userId: number): Observable<any> {
        return this.http.get(`${url}/research/advance-payment-application/by-user/${userId}`);
    }
    // http://localhost:8080/api/v1/research/advance-payment-application-last-by-research-proposal/1
    getAdvancePaymentApplicationLastByResearchProposal(id: number): Observable<any> {
        return this.http.get(`${url}/research/advance-payment-application-last-by-research-proposal/${id}`);
    }

    // http://localhost:8080/api/v1/research/advance-payment-application/by-research-proposal/5/by-user/10
    getAdvancePaymentApplicationByResearchProposalByUser(researchProposalId: number, userId: number): Observable<any> {
        return this.http.get(`${url}/research/advance-payment-application/by-research-proposal/${researchProposalId}/by-user/${userId}`);
    }



    // http://localhost:8080/api/v1/research/advance-payment-application/add
    addAdvancePaymentApplication(data: any): Observable<any> {
        return this.http.post(`${url}/research/advance-payment-application/add`, data);
    }



    // http://localhost:8080/api/v1/research/advance-payment-application/update/1
    updateAdvancePaymentApplication(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/research/advance-payment-application/update/${id}`, data);
    }

    // http://localhost:8080/api/v1/research/advance-payment-application/approve/1
    approveAdvancePaymentApplication(id: number): Observable<any> {
        return this.http.put(`${url}/research/advance-payment-application/approve/${id}`, {});
    }

    // http://localhost:8080/api/v1/research/advance-payment-application/reject/1
    rejectAdvancePaymentApplication(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/research/advance-payment-application/reject/${id}`, data);
    }

    // http://localhost:8080/api/v1/research/advance-payment-application/review/1
    reviewAdvancePaymentApplication(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/research/advance-payment-application/review/${id}`, data);
    }






    // http://localhost:8080/api/v1/research/advance-payment-application/update-payment/1
    updateAdvancePaymentApplicationPayment(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/research/advance-payment-application/update-payment/${id}`, data);
    }



    // http://localhost:8080/api/v1/research/research-proposal-progress-report/add
    addResearchProposalProgressReport(data: any): Observable<any> {
        return this.http.post(`${url}/research/research-proposal-progress-report/add`, data);
    }


    // http://localhost:8080/api/v1/research/research-proposal-progress-report-last-by-research-proposal/5
    getResearchProposalProgressReportLastByResearchProposal(id: number): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-progress-report-last-by-research-proposal/${id}`);
    }

    // http://localhost:8080/api/v1/research/research-proposal-progress-report-by-research-proposal/5
    getResearchProposalProgressReportByResearchProposal(id: number): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-progress-report-by-research-proposal/${id}`);
    }



    // http://localhost:8080/api/v1/research/accountant-approve-advance-payment/1
    accountantApproveAdvancePayment(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/accountant-approve-advance-payment/${id}`, data);
    }

    // http://localhost:8080/api/v1/research/accountant-reject-advance-payment/1
    accountantRejectAdvancePayment(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/accountant-reject-advance-payment/${id}`, data);
    }
    // http://localhost:8080/api/v1/research/accountant-review-advance-payment/1
    accountantReviewAdvancePayment(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/accountant-review-advance-payment/${id}`, data);
    }



    // http://localhost:8080/api/v1/research/advance-payment-applications-by-accountant-id/1
    getAdvancePaymentApplicationsByAccountantId(id: any): Observable<any> {
        return this.http.get(`${url}/research/advance-payment-applications-by-accountant-id/${id}`);
    }





    // research-proposal-progress-reports
    getResearchProposalProgressReports(): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-progress-reports`);
    }

    // http://localhost:8080/api/v1/research/research-proposal-progress-report/1
    getResearchProposalProgressReport(id: number): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-progress-report/${id}`);
    }


    // http://localhost:8080/api/v1/research/research-proposal-progress-report-approve/1
    approveResearchProposalProgressReport(id: number): Observable<any> {
        return this.http.put(`${url}/research/research-proposal-progress-report-approve/${id}`, {});
    }


    // http://localhost:8080/api/v1/research/research-proposal-progress-report-reject/1
    rejectResearchProposalProgressReport(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/research/research-proposal-progress-report-reject/${id}`, data);
    }


    // http://localhost:8080/api/v1/research/research-proposal-progress-report-review/1
    reviewResearchProposalProgressReport(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/research/research-proposal-progress-report-review/${id}`, data);
    }



    // http://localhost:8080/api/v1/research/research-proposal-progress-report-update-payment/1
    updateResearchProposalProgressReportPayment(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/research/research-proposal-progress-report-update-payment/${id}`, data);
    }






    // research proposal config
    // http://localhost:8080/api/v1/research/research-proposal-configuration
    getResearchProposalConfiguration(): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-configuration`);
    }

    // http://localhost:8080/api/v1/research/research-proposal-configuration/1
    getResearchProposalConfigurationById(id: number): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-configuration/${id}`);
    }
    // http://localhost:8080/api/v1/research/research-proposal-configuration/add
    addResearchProposalConfiguration(data: any): Observable<any> {
        return this.http.post(`${url}/research/research-proposal-configuration/add`, data);
    }

    // http://localhost:8080/api/v1/research/research-proposal-configuration/update/1
    updateResearchProposalConfiguration(id: number, data: any): Observable<any> {
        return this.http.put(`${url}/research/research-proposal-configuration/update/${id}`, data);
    }
    // http://localhost:8080/api/v1/research/research-proposal-configuration/delete/1
    deleteResearchProposalConfiguration(id: number): Observable<any> {
        return this.http.delete(`${url}/research/research-proposal-configuration/delete/${id}`);
    }

    // /research-proposal-configuration-by-financial-year/{financialYearId}
    getResearchProposalConfigurationByFinancialYear(financialYearId: number): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-configuration-by-financial-year/${financialYearId}`);
    }





    // http://localhost:8080/api/v1/research//advance-payment-applications-by-vice-chancellor-id//1
    getAdvancePaymentApplicationsByViceChancellorId(id: any): Observable<any> {
        return this.http.get(`${url}/research/advance-payment-applications-by-vice-chancellor-id/${id}`);
    }

    // http://localhost:8080/api/v1/research/vice-chancellor-approve-advance-payment/1
    viceChancellorApproveAdvancePayment(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/vice-chancellor-approve-advance-payment/${id}`, data);
    }

    // http://localhost:8080/api/v1/research/vice-chancellor-reject-advance-payment/1
    viceChancellorRejectAdvancePayment(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/vice-chancellor-reject-advance-payment/${id}`, data);
    }

    // http://localhost:8080/api/v1/research/vice-chancellor-review-advance-payment/1
    viceChancellorReviewAdvancePayment(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/vice-chancellor-review-advance-payment/${id}`, data);
    }




    // http://localhost:8080/api/v1/research/inter-adjustment-research-budget/1
    getInterAdjustmentResearchBudget(id: any, data: any): Observable<any> {
        return this.http.put(`${url}/research/inter-adjustment-research-budget/${id}`, data);
    }




    // /inter-adjustment-research-budget-pending-applications
    getInterAdjustmentResearchBudgetPendingApplications(): Observable<any> {
        return this.http.get(`${url}/research/inter-adjustment-research-budget-pending-applications`);
    }



    // http://localhost:8080/api/v1/research/research-director-approve-inter-adjustment-research-budget-by-research-proposal-application/1
    researchDirectorApproveInterAdjustmentResearchBudgetByResearchProposalApplication(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/research-director-approve-inter-adjustment-research-budget-by-research-proposal-application/${id}`, data);
    }
    // http://localhost:8080/api/v1/research/research-director-reject-inter-adjustment-research-budget-by-research-proposal-application/1
    researchDirectorRejectInterAdjustmentResearchBudgetByResearchProposalApplication(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/research-director-reject-inter-adjustment-research-budget-by-research-proposal-application/${id}`, data);
    }
    // http://localhost:8080/api/v1/research/research-director-review-inter-adjustment-research-budget-by-research-proposal-application/1
    researchDirectorReviewInterAdjustmentResearchBudgetByResearchProposalApplication(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/research-director-review-inter-adjustment-research-budget-by-research-proposal-application/${id}`, data);
    }





    // http://localhost:8080/api/v1/research/accountant-approve-inter-adjustment-research-budget-by-research-proposal-application/1
    accountantApproveInterAdjustmentResearchBudgetByResearchProposalApplication(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/accountant-approve-inter-adjustment-research-budget-by-research-proposal-application/${id}`, data);
    }
    // http://localhost:8080/api/v1/research/accountant-reject-inter-adjustment-research-budget-by-research-proposal-application/1
    accountantRejectInterAdjustmentResearchBudgetByResearchProposalApplication(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/accountant-reject-inter-adjustment-research-budget-by-research-proposal-application/${id}`, data);
    }
    // http://localhost:8080/api/v1/research/accountant-review-inter-adjustment-research-budget-by-research-proposal-application/1
    accountantReviewInterAdjustmentResearchBudgetByResearchProposalApplication(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/accountant-review-inter-adjustment-research-budget-by-research-proposal-application/${id}`, data);
    }




    // http://localhost:8080/api/v1/research/vice-chancellor-approve-inter-adjustment-research-budget-by-research-proposal-application/1
    viceChancellorApproveInterAdjustmentResearchBudgetByResearchProposalApplication(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/vice-chancellor-approve-inter-adjustment-research-budget-by-research-proposal-application/${id}`, data);
    }
    // http://localhost:8080/api/v1/research/vice-chancellor-reject-inter-adjustment-research-budget-by-research-proposal-application/1
    viceChancellorRejectInterAdjustmentResearchBudgetByResearchProposalApplication(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/vice-chancellor-reject-inter-adjustment-research-budget-by-research-proposal-application/${id}`, data);
    }
    // http://localhost:8080/api/v1/research/vice-chancellor-review-inter-adjustment-research-budget-by-research-proposal-application/1
    viceChancellorReviewInterAdjustmentResearchBudgetByResearchProposalApplication(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/vice-chancellor-review-inter-adjustment-research-budget-by-research-proposal-application/${id}`, data);
    }



    // /research-proposal-bill/add
    addResearchProposalBill(data: any): Observable<any> {
        return this.http.post(`${url}/research/research-proposal-bill/add`, data);
    }

    // /research-proposal-bill-by-research-proposal/{researchProposalApplicationForUgcId}
    getResearchProposalBillByResearchProposal(researchProposalApplicationForUgcId: number): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-bill-by-research-proposal/${researchProposalApplicationForUgcId}`);
    }


    // /research-proposal-bills
    getResearchProposalBills(): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-bills`);
    }





    // /research-proposal-bill-by-research-proposal/{researchProposalId}
    getResearchProposalBillByResearchProposalId(researchProposalId: number): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-bill/by-research-director/${researchProposalId}`);
    }
    // /research-proposal-bill/research-director-approve/{id}
    researchDirectorApproveResearchProposalBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/approve-research-proposal-bill-by-research-director/${id}`, data);
    }
    // /research-proposal-bill/research-director-reject/{id}
    researchDirectorRejectResearchProposalBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/reject-research-proposal-bill-by-research-director/${id}`, data);
    }

    // /research-proposal-bill/research-director-review/{id}
    researchDirectorReviewResearchProposalBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/review-research-proposal-bill-by-research-director/${id}`, data);
    }





    // /research-proposal-bill-by-accountant/{accountantId}
    getResearchProposalBillByAccountantId(accountantId: number): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-bill-by-accountant/${accountantId}`);
    }

    // /research-proposal-bill/accountant-approve/{id}
    accountantApproveResearchProposalBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/approve-research-proposal-bill-by-accountant/${id}`, data);
    }
    // /research-proposal-bill/accountant-reject/{id}
    accountantRejectResearchProposalBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/reject-research-proposal-bill-by-accountant/${id}`, data);
    }

    // /research-proposal-bill/accountant-review/{id}
    accountantReviewResearchProposalBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/review-research-proposal-bill-by-accountant/${id}`, data);
    }




    // research-proposal-bill-by-vice-chancellor/{viceChancellorId}"
    getResearchProposalBillByViceChancellorId(viceChancellorId: number): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-bill-by-vice-chancellor/${viceChancellorId}`);
    }

    // /research-proposal-bill/vice-chancellor-approve/{id}
    viceChancellorApproveResearchProposalBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/approve-research-proposal-bill-by-vice-chancellor/${id}`, data);
    }
    // /research-proposal-bill/vice-chancellor-reject/{id}
    viceChancellorRejectResearchProposalBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/reject-research-proposal-bill-by-vice-chancellor/${id}`, data);
    }

    // /research-proposal-bill/vice-chancellor-review/{id}
    viceChancellorReviewResearchProposalBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/review-research-proposal-bill-by-vice-chancellor/${id}`, data);
    }




    // /research-proposal-bill-by-auditor/{auditorId}
    getResearchProposalBillByAuditorId(auditorId: number): Observable<any> {
        return this.http.get(`${url}/research/research-proposal-bill-by-auditor/${auditorId}`);
    }

    // /research-proposal-bill/auditor-approve/{id}
    auditorApproveResearchProposalBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/approve-research-proposal-bill-by-auditor/${id}`, data);
    }

    // /research-proposal-bill/auditor-reject/{id}
    auditorRejectResearchProposalBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/reject-research-proposal-bill-by-auditor/${id}`, data);
    }
    // /research-proposal-bill/auditor-review/{id}
    auditorReviewResearchProposalBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/research/review-research-proposal-bill-by-auditor/${id}`, data);
    }


}
