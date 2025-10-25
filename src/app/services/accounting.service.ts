import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { url } from "../core/models/API";

@Injectable({
    providedIn: "root",
})
export class AccountingService {
    constructor(private http: HttpClient) { }

    getStudentFeesList(): Observable<any> {
        return this.http.get(`${url}/accounting/all-student-fees`);
    }

    getStudentPaymentDetails(studentUniqueId: string): Observable<any> {
        return this.http.get(
            `${url}/accounting/student-fees-by-student-unique-id/${studentUniqueId}`
        );
    }

    studentFeesPayment(data: any): Observable<any> {
        return this.http.put(`${url}/accounting/student-fees-payment`, data);
    }

    // teacher payment list
    getTeacherPaymentList(): Observable<any> {
        return this.http.get(`${url}/accounting/teacher-all-total-fees`);
    }

    paidTeacherPayment(data: any): Observable<any> {
        return this.http.put(`${url}/accounting/teacher-payment`, data);
    }

    //examination-remuneration
    getExaminationRemunerations(): Observable<any> {
        return this.http.get(`${url}/accounting/examination-remuneration`);
    }
    getExaminationRemuneration(id: number): Observable<any> {
        return this.http.get(
            `${url}/accounting/examination-remuneration/${id}`
        );
    }
    postExaminationRemuneration(data: any): Observable<any> {
        return this.http.post(
            `${url}/accounting/examination-remuneration-add`,
            data
        );
    }
    updateExaminationRemuneration(data: any, id: number): Observable<any> {
        return this.http.put(
            `${url}/accounting/examination-remuneration-update/${id}`,
            data
        );
    }

    // salary sheet apis
    generateEmployeeSalarySheet(year: string, month: string, employeeType: any): Observable<any> {
        return this.http.get(
            `${url}/hr/generate-salary-sheet-by-year-month-employee-type/${year}/${month}/${employeeType}`
        );
    }
    generateSingleSalarySheet(
        year: string,
        month: string,
        employeeId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/hr/generate-single-employee-salary-sheet-by-year-month-employee/${year}/${month}/${employeeId}`
        );
    }
    draftEmployeeSalarySheet(data: any): Observable<any> {
        return this.http.post(`${url}/hr/salary-sheet-add`, data);
    }

    getDraftedSalarySheet(month: string, year: string, employeeType: string): Observable<any> {
        return this.http.get(
            `${url}/hr/drafted-salary-sheet-by-month-year-employee-type/${month}/${year}/${employeeType}`
        );
    }

    getPostedSalarySheet(month: string, year: string, employeeType: string): Observable<any> {
        return this.http.get(
            `${url}/hr/posted-salary-sheet-by-month-year-employee-type/${month}/${year}/${employeeType}`
        );
    }

    getPaidSalarySheet(
        month: string,
        year: string,
        jobGrad: string
    ): Observable<any> {
        return this.http.get(
            `${url}/hr/paid-salary-sheet-by-month-year-job-grade/${month}/${year}/${jobGrad}`
        );
    }

    getEmployeeSalarySheet(
        month: string,
        year: string,
        employeeId: string
    ): Observable<any> {
        return this.http.get(
            `${url}/hr/employee-salary-sheet-by-month-year-employee/${month}/${year}/${employeeId}`
        );
    }

    updateEmployeeSalarySheet(data: any): Observable<any> {
        return this.http.put(`${url}/hr/salary-sheet-update`, data);
    }

    downloadEmployeesSalarySheetAsExcel(
        financialYear: string,
        month: string
    ): Observable<Blob> {
        return this.http.get(
            `${url}/hr/salary-sheet-excel-year-month/${financialYear}/${month}`,
            { responseType: "blob" }
        );
    }

    getSalarySummary(month: string, year: string, employeeType: string): Observable<any> {
        return this.http.get(
            `${url}/hr/salary-summary-by-month-year-employee-type/${month}/${year}/${employeeType}`
        );
    }

    getEmployeeSalaryStatement(
        employeeId: string,
        year: string
    ): Observable<any> {
        return this.http.get(
            `${url}/hr/salary-statement-by-employee-year/${employeeId}/${year}`
        );
    }

    // student fees
    getStudentFeesByStudentIdAndSemester(
        studentId: string,
        semester: string
    ): Observable<any> {
        return this.http.get(
            `${url}/accounting/student-fees-by-semester-student-unique-id/${semester}/${studentId}`
        );
    }

    // financial-year
    getFinancialYears(): Observable<any> {
        return this.http.get(`${url}/hr/financial-years`);
    }
    getFinancialYear(id: string): Observable<any> {
        return this.http.get(`${url}/hr/financial-year/${id}`);
    }
    postFinancialYear(data: any): Observable<any> {
        return this.http.post(`${url}/hr/financial-year-add`, data);
    }
    updateFinancialYear(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/hr/financial-year-update/${id}`, data);
    }
    deleteFinancialYear(id: string): Observable<any> {
        return this.http.delete(`${url}/hr/financial-year-delete/${id}`);
    }

    getFinancialYearMonths(year: string): Observable<any> {
        return this.http.get(`${url}/hr/financial-year-by-year/${year}`);
    }

    // bank advice api
    getBankAdvices(): Observable<any> {
        return this.http.get(`${url}/hr/get-all-bank-advice`);
    }

    getBankAdvice(id: string): Observable<any> {
        return this.http.get(`${url}/hr/get-bank-advice/${id}`);
    }

    getEmployeeDeductedSalary(
        employeeId: string,
        salaryRule: string
    ): Observable<any> {
        return this.http.get(
            `${url}/hr/deducted-salary-of-employee-by-employee-and-salary-rule/${employeeId}/${salaryRule}`
        );
    }

    getEmployeeGPF(employeeId: string): Observable<any> {
        return this.http.get(
            `${url}/hr/general-provident-fund-by-employee/${employeeId}`
        );
    }

    getEmployeeGPFByFinancialYear(
        employeeId: string,
        year: string
    ): Observable<any> {
        return this.http.get(
            `${url}/hr/general-provident-fund-by-employee-and-financial-year/${employeeId}/${year}`
        );
    }

    // loans
    getLoans(): Observable<any> {
        return this.http.get(`${url}/hr/loans`);
    }
    getLoan(id: string): Observable<any> {
        return this.http.get(`${url}/hr/loan/${id}`);
    }
    postLoan(data: any): Observable<any> {
        return this.http.post(`${url}/hr/loan-provide`, data);
    }

    getTotalCollectionAmount(): Observable<any> {
        return this.http.get(`${url}/accounting/total-collection`);
    }


    // account and fund
    getAllAccountAndFunds(): Observable<any> {
        return this.http.get(`${url}/accounting/account-funds`);
    }

    getAccountAndFund(id: string): Observable<any> {
        return this.http.get(`${url}/accounting/account-fund/${id}`);
    }

    postAccountAndFund(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/accounts-fund-add`, data);
    }

    updateAccountAndFund(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/accounting/accounts-fund-update/${id}`, data);
    }

    deleteAccountAndFund(id: string): Observable<any> {
        return this.http.delete(`${url}/accounting/accounts-fund-delete/${id}`);
    }

    // /accounting/delete-bank-account/1
    deleteBankAcc(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/delete-bank-account/${id}`);
    }









    // createPaymentRequestOfFormFillUpPaymentGateway
    createPaymentRequestOfFormFillUpPaymentGateway(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/createPaymentRequestOfFormFillUpPaymentGateway`, data);
    }

    //http://localhost:8080/api/v1/accounting/funds
    getFunds(): Observable<any> {
        return this.http.get(`${url}/accounting/funds`);
    }
    //http://localhost:8080/api/v1/accounting/fund-add
    addFund(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/fund-add`, data);
    }

    // /accounting/chart-account-tree
    getChartOfAccountsTree(): Observable<any> {
        return this.http.get(`${url}/accounting/chart-account-tree`);
    }

    // /accounting/chart-accounts-root
    getChartOfAccountsRoot(): Observable<any> {
        return this.http.get(`${url}/accounting/chart-accounts-root`);
    }


    // accounting/chart-accounts/parents-up-to-level3/root-account-id/1
    getChartOfAccountsParentsUpToLevel3(rootAccountId: any): Observable<any> {
        return this.http.get(`${url}/accounting/chart-accounts/parents-up-to-level3/root-account-id/${rootAccountId}`);
    }

    // http://localhost:8080/api/v1/accounting/chart-account-add
    postChartOfAccounts(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/chart-account-add`, data);
    }



    // http://localhost:8080/api/v1/accounting//chart-account/levels-by-root/1
    getChartOfAccountsLevelsByRoot(rootAccountId: any): Observable<any> {
        return this.http.get(`${url}/accounting/chart-account/levels-by-root/${rootAccountId}`);
    }


    // /api/v1/accounting/chart-account-delete/1
    deleteChartOfAccounts(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/chart-account-delete/${id}`);
    }



    // getLevelByRoot
    // /accounting//chart-account/levels-by-root/1
    getLevelByRoot(rootAccountId: any): Observable<any> {
        return this.http.get(`${url}/accounting/chart-account/levels-by-root/${rootAccountId}`);
    }


    // 1/accounting/chart-account-list-by-root-and-level/2/1
    getChartOfAccountsListByRootAndLevel(rootAccountId: any, level: any): Observable<any> {
        return this.http.get(`${url}/accounting/chart-account-list-by-root-and-level/${rootAccountId}/${level}`);
    }
    // http://localhost:8080/api/v1/accounting/chart-account-update/25
    updateChartOfAccounts(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/chart-account-update/${id}`, data);
    }



    // http://localhost:8080/api/v1/accounting/journal-entry-add
    addJournalEntry(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/journal-entry-add`, data);
    }


    // accounting/chart-accounts
    getChartOfAccounts(): Observable<any> {
        return this.http.get(`${url}/accounting/chart-accounts`);
    }

    // v1/accounting/journal-entries
    getJournalEntries(): Observable<any> {
        return this.http.get(`${url}/accounting/journal-entries`);
    }
    // http://localhost:8080/api/v1/accounting/journal-entry-delete/2
    deleteJournalEntry(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/journal-entry-delete/${id}`);
    }

    // 1/accounting/journal-entry-by-id/1
    getJournalEntryById(id: any): Observable<any> {
        return this.http.get(`${url}/accounting/journal-entry-by-id/${id}`);
    }


    // budget
    // /accounting/store-budget
    storeBudget(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/store-budget`, data);
    }

    // http://localhost:8080/api/v1/accounting/store-only-budget-info
    storeOnlyBudgetInfo(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/store-only-budget-info`, data);
    }






    // http://localhost:8080/api/v1/accounting/budgets
    getBudgets(): Observable<any> {
        return this.http.get(`${url}/accounting/budgets`);
    }
    // /budget/{id}
    getOneBudget(id: any): Observable<any> {
        return this.http.get(`${url}/accounting/budget/${id}`);
    }







    // http://localhost:8080/api/v1/accounting/budgets-by-accountant-id/1
    getBudgetsByAccountantId(accountantId: any): Observable<any> {
        return this.http.get(`${url}/accounting/budgets-by-accountant-id/${accountantId}`);
    }

    // http://localhost:8080/api/v1/accounting/accountant-approve-budget/1
    accountantApproveBudget(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/accountant-approve-budget/${id}`, data);
    }

    // http://localhost:8080/api/v1/accounting/accountant-review-budget/1
    accountantReviewBudget(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/accountant-review-budget/${id}`, data);
    }

    // http://localhost:8080/api/v1/accounting/accountant-reject-budget/1
    accountantRejectBudget(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/accountant-reject-budget/${id}`, data);
    }



    // http://localhost:8080/api/v1/accounting/budgets-by-auditor-id/1
    getBudgetsByAuditorId(auditorId: any): Observable<any> {
        return this.http.get(`${url}/accounting/budgets-by-auditor-id/${auditorId}`);
    }

    // http://localhost:8080/api/v1/accounting/auditor-approve-budget/1
    auditorApproveBudget(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/auditor-approve-budget/${id}`, data);
    }

    // http://localhost:8080/api/v1/accounting/auditor-reject-budget/1
    auditorRejectBudget(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/auditor-reject-budget/${id}`, data);
    }

    // http://localhost:8080/api/v1/accounting/auditor-review-budget/1
    auditorReviewBudget(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/auditor-review-budget/${id}`, data);
    }




    // http://localhost:8080/api/v1/accounting/budgets-by-vice-chancellor-id/1
    getBudgetsByViceChancellorId(viceChancellorId: any): Observable<any> {
        return this.http.get(`${url}/accounting/budgets-by-vice-chancellor-id/${viceChancellorId}`);
    }

    // http://localhost:8080/api/v1/accounting/vice-chancellor-approve-budget/1
    viceChancellorApproveBudget(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/vice-chancellor-approve-budget/${id}`, data);
    }

    // http://localhost:8080/api/v1/accounting/vice-chancellor-reject-budget/1
    viceChancellorRejectBudget(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/vice-chancellor-reject-budget/${id}`, data);
    }

    // http://localhost:8080/api/v1/accounting/vice-chancellor-review-budget/1
    viceChancellorReviewBudget(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/vice-chancellor-review-budget/${id}`, data);
    }






















    // http://localhost:8080/api/v1/accounting/account-types
    getChartOfAccountTypes(): Observable<any> {
        return this.http.get(`${url}/accounting/account-types`);
    }


    // http://localhost:8080/api/v1/accounting/chart-accounts
    getChartAccounts(): Observable<any> {
        return this.http.get(`${url}/accounting/chart-accounts`);
    }




    // http://localhost:8080/api/v1/accounting/account-levels
    getChartOfAccountLevels(): Observable<any> {
        return this.http.get(`${url}/accounting/account-levels`);
    }
    // /chart-account-parent-by-account-type-and-level/{accountTypeId}/{accountLevelId}
    getChartOfAccountParentByAccountTypeAndLevel(accountTypeId: any, accountLevelId: any): Observable<any> {
        return this.http.get(`${url}/accounting/chart-account-parent-by-account-type-and-level/${accountTypeId}/${accountLevelId}`);
    }

    // http://localhost:8080/api/v1/accounting/vendor-add
    addVendor(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/vendor-add`, data);
    }
    // http://localhost:8080/api/v1/accounting/vendor-delete/2
    deleteVendor(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/vendor-delete/${id}`);
    }
    // http://localhost:8080/api/v1/accounting/vendors
    getVendors(): Observable<any> {
        return this.http.get(`${url}/accounting/vendors`);
    }

    // /vendors-whose-have-bills
    getVendorsWhoseHaveBills(): Observable<any> {
        return this.http.get(`${url}/accounting/vendors-whose-have-bills`);
    }
    // employees-whose-have-bills
    getEmployeesWhoseHaveBills(): Observable<any> {
        return this.http.get(`${url}/accounting/employees-whose-have-bills`);
    }


    // /manual-whose-have-bills
    getManualWhoseHaveBills(): Observable<any> {
        return this.http.get(`${url}/accounting/manual-whose-have-bills`);
    }



    // http://localhost:8080/api/v1/accounting/vendor-update/1
    updateVendor(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/vendor-update/${id}`, data);
    }


    // bill payable
    // http://localhost:8080/api/v1/accounting/store-bill
    storeBill(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/store-bill`, data);
    }
    // http://localhost:8080/api/v1/accounting/bills
    getBills(): Observable<any> {
        return this.http.get(`${url}/accounting/bills`);
    }

    // http://localhost:8080/api/v1/accounting/bill/1
    getOneBill(id: any): Observable<any> {
        return this.http.get(`${url}/accounting/bill/${id}`);
    }

    // http://localhost:8080/api/v1/accounting/delete-bill/1
    deleteBill(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/delete-bill/${id}`);
    }


    // customer

    // http://localhost:8080/api/v1/accounting/customer-add
    addCustomer(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/customer-add`, data);
    }
    // http://localhost:8080/api/v1/accounting/customer-delete/2
    deleteCustomer(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/customer-delete/${id}`);
    }
    // http://localhost:8080/api/v1/accounting/customers
    getCustomers(): Observable<any> {
        return this.http.get(`${url}/accounting/customers`);
    }
    // http://localhost:8080/api/v1/accounting/customer-update/1
    updateCustomer(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/customer-update/${id}`, data);
    }




    // accounting/chart-account-accounts-receivable
    getChartAccountsReceivable(): Observable<any> {
        return this.http.get(`${url}/accounting/chart-account-accounts-receivable`);
    }
    // http://localhost:8080/api/v1/accounting/chart-account-accounts-payable
    getChartAccountsPayable(): Observable<any> {
        return this.http.get(`${url}/accounting/chart-account-accounts-payable`);
    }



    // http://localhost:8080/api/v1/accounting/store-invoice
    storeInvoice(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/store-invoice`, data);
    }
    // http://localhost:8080/api/v1/accounting/invoices
    getInvoices(): Observable<any> {
        return this.http.get(`${url}/accounting/invoices`);
    }
    // http://localhost:8080/api/v1/accounting/delete-invoice/1
    deleteInvoice(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/delete-invoice/${id}`);
    }



    // chart-account-list-by-registered
    getChartOfAccountsListByRegistered(): Observable<any> {
        return this.http.get(`${url}/accounting/chart-account-list-by-registered`);
    }


    // http://localhost:8080/api/v1/accounting/store-bill-register-payment-by-bill/3
    storeBillRegisterPaymentByBill(data: any, id: any): Observable<any> {
        return this.http.post(`${url}/accounting/store-bill-register-payment-by-bill/${id}`, data);
    }

    // http://localhost:8080/api/v1/accounting/store-invoice-register-payment-by-invoice/2
    storeInvoiceRegisterPaymentByInvoice(data: any, id: any): Observable<any> {
        return this.http.post(`${url}/accounting/store-invoice-register-payment-by-invoice/${id}`, data);
    }

    // store-register-payment
    storeRegisterPayment(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/store-register-payment`, data);
    }

    // http://localhost:8080/api/v1/accounting/register-payments
    getRegisterPayments(): Observable<any> {
        return this.http.get(`${url}/accounting/register-payments`);
    }

    // http://localhost:8080/api/v1/accounting/delete-register-payment/2
    deleteRegisterPayment(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/delete-register-payment/${id}`);
    }





    // fund type

    // http://localhost:8080/api/v1/accounting/fund-types
    getFundType(): Observable<any> {
        return this.http.get(`${url}/accounting/fund-types`);
    }

    // http://localhost:8080/api/v1/accounting/fund-type-add
    addFundType(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/fund-type-add`, data);
    }
    // http://localhost:8080/api/v1/accounting/fund-types
    getFundTypes(): Observable<any> {
        return this.http.get(`${url}/accounting/fund-types`);
    }
    // http://localhost:8080/api/v1/accounting/fund-type-update/1
    updateFundType(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/fund-type-update/${id}`, data);
    }
    // http://localhost:8080/api/v1/accounting/fund-type-delete/1
    deleteFundType(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/fund-type-delete/${id}`);
    }



    // fund create

    // http://localhost:8080/api/v1/accounting/fund-add
    addNewFund(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/fund-add`, data);
    }
    // http://localhost:8080/api/v1/accounting/funds
    getNewFunds(): Observable<any> {
        return this.http.get(`${url}/accounting/funds`);
    }
    // http://localhost:8080/api/v1/accounting/fund-update/1
    updateFund(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/fund-update/${id}`, data);
    }
    // http://localhost:8080/api/v1/accounting/fund-delete/1
    deleteFund(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/fund-delete/${id}`);
    }




    // /accounting/chart-account-and-fund-by-chart-account
    getChartAccountAndFundByChartAccount(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/chart-account-and-fund-by-chart-account`, data);
    }


    // http://localhost:8080/api/v1/accounting/store-budget-with-fund
    storeBudgetWithFund(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/store-budget-with-fund`, data);
    }





    // hr/employee-refunds
    getEmployeeRefunds(): Observable<any> {
        return this.http.get(`${url}/hr/employee-refunds`);
    }



    // {{baseurl}}/hr/employee-refund-calculate-salary-by-employee-id
    // all
    getEmployeeRefundCalculateSalary(data: any): Observable<any> {
        return this.http.post(
            `${url}/hr/employee-refund-calculate-salary-by-employee-id`, data
        );
    }


    // {{baseurl}}/hr/employee-refund-calculate-salary-by-employee-id-and-date-range
    getEmployeeRefundCalculateSalaryByDateRange(data: any): Observable<any> {
        return this.http.post(
            `${url}/hr/employee-refund-calculate-salary-by-employee-id-and-date-range`, data
        );
    }



    // {{baseurl}}/hr/employee-refund-store
    getEmployeeRefundStore(data: any): Observable<any> {
        return this.http.post(
            `${url}/hr/employee-refund-store`, data
        );
    }


    // {{baseurl}}/hr/employee-refund/1
    getEmployeeRefund(id: any): Observable<any> {
        return this.http.get(
            `${url}/hr/employee-refund/${id}`
        );
    }

    // {{baseurl}}/hr/employee-refund-status-update/1
    getEmployeeRefundStatusUpdate(id: any, data: any): Observable<any> {
        return this.http.put(
            `${url}/hr/employee-refund-status-update/${id}`, data
        );
    }


    // {{baseurl}}/hr/employee-refund-approve/1
    getEmployeeRefundApprove(id: any): Observable<any> {
        return this.http.put(
            `${url}/hr/employee-refund-approve/${id}`, {}
        );
    }

    // {{baseurl}}/hr/employee-arrear-approve/1
    getEmployeeArrearApprove(id: any): Observable<any> {
        return this.http.put(
            `${url}/hr/employee-arrear-approve/${id}`, {}
        );
    }

    // {{baseurl}}/hr/employee-refund-reject/1
    employeeRefundReject(id: any, data: any): Observable<any> {
        return this.http.put(
            `${url}/hr/employee-refund-reject/${id}`, data
        );
    }

    // {{baseurl}}/hr/employee-arrear-reject/1
    employeeArrearReject(id: any, data: any): Observable<any> {
        return this.http.put(
            `${url}/hr/employee-arrear-reject/${id}`, data
        );
    }



    // {{baseurl}}/hr/employee-arrear-calculate-salary-by-employee-id-and-date-range
    getEmployeeArrearCalculateSalaryByDateRange(data: any): Observable<any> {
        return this.http.post(
            `${url}/hr/employee-arrear-calculate-salary-by-employee-id-and-date-range`, data
        );
    }

    // {{baseurl}}/hr/employee-arrear-store
    getEmployeeArrearStore(data: any): Observable<any> {
        return this.http.post(
            `${url}/hr/employee-arrear-store`, data
        );
    }


    // {{baseurl}}/hr/employee-arrears
    getEmployeeArrears(): Observable<any> {
        return this.http.get(
            `${url}/hr/employee-arrears`
        );
    }


    // {{baseurl}}/hr/employee-arrear/1
    getEmployeeArrear(id: any): Observable<any> {
        return this.http.get(
            `${url}/hr/employee-arrear/${id}`
        );
    }

    // /hr/employee-arrear-status-update/1
    getEmployeeArrearStatusUpdate(id: any, data: any): Observable<any> {
        return this.http.put(
            `${url}/hr/employee-arrear-status-update/${id}`, data
        );
    }





    // http://localhost:8080/api/v1/hr/quarters
    getQuarters(): Observable<any> {
        return this.http.get(`${url}/hr/quarters`);
    }

    // http://localhost:8080/api/v1/hr/quarter/1
    getOneQuarter(id: any): Observable<any> {
        return this.http.get(`${url}/hr/quarter/${id}`);
    }
    // http://localhost:8080/api/v1/hr/store-quarter
    storeQuarter(data: any): Observable<any> {
        return this.http.post(`${url}/hr/store-quarter`, data);
    }
    // http://localhost:8080/api/v1/hr/update-quarter/1
    updateQuarter(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/hr/update-quarter/${id}`, data);
    }

    // http://localhost:8080/api/v1/hr/delete-quarter/1
    deleteQuarter(id: any): Observable<any> {
        return this.http.delete(`${url}/hr/delete-quarter/${id}`);
    }







    // http://localhost:8080/api/v1/hr/vehicles
    getVehicles(): Observable<any> {
        return this.http.get(`${url}/hr/vehicles`);
    }

    // http://localhost:8080/api/v1/hr/vehicle/1
    getOneVehicle(id: any): Observable<any> {
        return this.http.get(`${url}/hr/vehicle/${id}`);
    }

    // http://localhost:8080/api/v1/hr/store-vehicle
    storeVehicle(data: any): Observable<any> {
        return this.http.post(`${url}/hr/store-vehicle`, data);
    }

    // http://localhost:8080/api/v1/hr/update-vehicles/1
    updateVehicle(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/hr/update-vehicle/${id}`, data);
    }

    // http://localhost:8080/api/v1/hr/delete-vehicle/1
    deleteVehicle(id: any): Observable<any> {
        return this.http.delete(`${url}/hr/delete-vehicle/${id}`);
    }




    // /chart-account-by-account-level/{accountLevelId}
    getChartAccountByAccountLevel(accountLevelId: any): Observable<any> {
        return this.http.get(`${url}/accounting/chart-account-by-account-level/${accountLevelId}`);
    }


    // http://localhost:8080/api/v1/hr/generate-top-sheet-by-year-month-employee-type/2024-2025/July/Teacher
    generateTopSheetByYearMonthEmployeeType(year: any, month: any, employeeType: any): Observable<any> {
        return this.http.get(`${url}/hr/generate-top-sheet-by-year-month-employee-type/${year}/${month}/${employeeType}`);
    }


    // /generate-tax-office-letter-by-year-month/{year}/{month}
    generateTaxOfficeLetterByYearMonth(year: any, month: any): Observable<any> {
        return this.http.get(`${url}/hr/generate-tax-office-letter-by-year-month/${year}/${month}`);
    }


    // /chart-account-and-fund
    getChartAccountAndFund(): Observable<any> {
        return this.http.get(`${url}/accounting/chart-account-and-fund`);
    }

    // /chart-account-and-fund-store
    getChartAccountAndFundStore(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/chart-account-and-fund-store`, data);
    }













    // bank details api 
    // {{baseUrl}}/accounting/all-bank-details
    getAllBankDetails(): Observable<any> {
        return this.http.get(`${url}/accounting/all-bank-details`);
    }

    // {{baseUrl}}/accounting/one-bank-details/1
    getOneBankDetails(id: any): Observable<any> {
        return this.http.get(`${url}/accounting/one-bank-details/${id}`);
    }

    // {{baseUrl}}/accounting/store-bank-details
    storeBankDetails(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/store-bank-details`, data);
    }

    // {{baseUrl}}/accounting/update-bank-details/3
    updateBankDetails(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/update-bank-details/${id}`, data);
    }


    // {{baseUrl}}/accounting/delete-bank-details/2
    deleteBankDetails(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/delete-bank-details/${id}`);
    }

    // /accounting/chart-account-by-id/44
    getChartAccountById(id: any): Observable<any> {
        return this.http.get(`${url}/accounting/chart-account-by-id/${id}`);
    }







    // {{baseUrl}}/accounting/find-day-book-by-date
    findDayBookByDate(date: any): Observable<any> {
        return this.http.post(`${url}/accounting/find-day-book-by-date`, date);
    }
    // {{baseUrl}}/accounting/find-cash-book-by-date
    findCashBookByDate(date: any): Observable<any> {
        return this.http.post(`${url}/accounting/find-cash-book-by-date`, date);
    }

    // {{baseUrl}}/accounting/find-bank-book-by-date
    findBankBookByDate(date: any): Observable<any> {
        return this.http.post(`${url}/accounting/find-bank-book-by-date`, date);
    }

    // {{baseUrl}}/accounting/find-journal-entry-ledger
    findJournalEntryLedger(date: any): Observable<any> {
        return this.http.post(`${url}/accounting/find-journal-entry-ledger`, date);
    }


    // tax type
    // http://localhost:8080/api/v1/accounting/tax-types
    getTaxTypes(): Observable<any> {
        return this.http.get(`${url}/accounting/tax-types`);
    }
    // http://localhost:8080/api/v1/accounting/tax-type-by-id/1
    getTaxTypeById(id: any): Observable<any> {
        return this.http.get(`${url}/accounting/tax-type-by-id/${id}`);
    }
    // http://localhost:8080/api/v1/accounting/tax-type-add
    addTaxType(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/tax-type-add`, data);
    }
    // http://localhost:8080/api/v1/accounting/tax-type-update/1
    updateTaxType(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/tax-type-update/${id}`, data);
    }
    // http://localhost:8080/api/v1/accounting/tax-type-delete/1
    deleteTaxType(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/tax-type-delete/${id}`);
    }





    // tax

    // http://localhost:8080/api/v1/accounting/taxes
    getTaxes(): Observable<any> {
        return this.http.get(`${url}/accounting/taxes`);
    }
    // http://localhost:8080/api/v1/accounting/tax-by-id/1
    getTaxById(id: any): Observable<any> {
        return this.http.get(`${url}/accounting/tax-by-id/${id}`);
    }
    // http://localhost:8080/api/v1/accounting/tax-add
    addTax(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/tax-add`, data);
    }
    // http://localhost:8080/api/v1/accounting/tax-update/1
    updateTax(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/tax-update/${id}`, data);
    }
    // http://localhost:8080/api/v1/accounting/tax-delete/1
    deleteTax(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/tax-delete/${id}`);
    }

    // http://localhost:8080/api/v1/accounting/chart-account-tax-delete/1
    deleteChartAccountTax(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/chart-account-tax-delete/${id}`);
    }




    // /tax-rates-by-tax/{taxId}
    getTaxRatesByTax(taxId: any): Observable<any> {
        return this.http.get(`${url}/accounting/tax-rates-by-tax/${taxId}`);
    }







    // {{baseUrl}}/accounting/chart-account-groups

    getChartAccountGroups(): Observable<any> {
        return this.http.get(`${url}/accounting/chart-account-groups`);
    }

    // {{baseUrl}}/accounting/chart-account-group/1
    getChartAccountGroupById(id: any): Observable<any> {
        return this.http.get(`${url}/accounting/chart-account-group/${id}`);
    }


    // {{baseUrl}}/accounting/store-store-account-group
    storeChartAccountGroup(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/store-store-account-group`, data);
    }


    // {{baseUrl}}/accounting/update-chart-account-group/1
    updateChartAccountGroup(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/update-chart-account-group/${id}`, data);
    }

    // {{baseUrl}}/accounting/delete-chart-account-group/1
    deleteChartAccountGroup(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/delete-chart-account-group/${id}`);
    }




    // /remain-fund-store
    getRemainFundStore(data: any): Observable<any> {
        return this.http.put(`${url}/accounting/remain-fund-store`, data);
    }








    // http://localhost:8080/api/v1/resource/item-units
    getItemUnits(): Observable<any> {
        return this.http.get(`${url}/resource/item-units`);
    }

    // http://localhost:8080/api/v1/resource/item-unit/1
    getItemUnitById(id: any): Observable<any> {
        return this.http.get(`${url}/resource/item-unit/${id}`);
    }

    // http://localhost:8080/api/v1/resource/store-item-unit
    addStoreItemUnit(data: any): Observable<any> {
        return this.http.post(`${url}/resource/store-item-unit`, data);
    }

    // http://localhost:8080/api/v1/resource/update-item-unit/1
    updateItemUnit(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/resource/update-item-unit/${id}`, data);
    }

    // http://localhost:8080/api/v1/resource/delete-item-unit/1
    deleteItemUnit(id: any): Observable<any> {
        return this.http.delete(`${url}/resource/delete-item-unit/${id}`);
    }





    // price estimate

    // http://localhost:8080/api/v1/resource/price-estimations
    getPriceEstimations(): Observable<any> {
        return this.http.get(`${url}/resource/price-estimations`);
    }

    // http://localhost:8080/api/v1/resource/price-estimation/by-store-item-and-financial-year/1/1
    getPriceEstimationByStoreItemAndFinancialYear(storeItemId: any, financialYearId: any): Observable<any> {
        return this.http.get(`${url}/resource/price-estimation/by-store-item-and-financial-year/${storeItemId}/${financialYearId}`);
    }

    // http://localhost:8080/api/v1/resource/price-estimation/1
    getPriceEstimationById(id: any): Observable<any> {
        return this.http.get(`${url}/resource/price-estimation/${id}`);
    }
    // http://localhost:8080/api/v1/resource/price-estimation-store
    addPriceEstimation(data: any): Observable<any> {
        return this.http.post(`${url}/resource/price-estimation-store`, data);
    }

    // http://localhost:8080/api/v1/resource/price-estimation-update/1
    updatePriceEstimation(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/resource/price-estimation-update/${id}`, data);
    }

    // http://localhost:8080/api/v1/resource/price-estimation-delete/1
    deletePriceEstimation(id: any): Observable<any> {
        return this.http.delete(`${url}/resource/price-estimation-delete/${id}`);
    }



    // /bills-by-vendor/{vendorId}
    getBillsByVendor(vendorId: any): Observable<any> {
        return this.http.get(`${url}/accounting/bills-by-vendor/${vendorId}`);
    }





    // /request-for-quotatio-store
    storeRequestForQuotation(data: any): Observable<any> {
        return this.http.post(`${url}/resource/request-for-quotatio-store`, data);
    }

    // /request-for-quotations
    getRequestForQuotations(): Observable<any> {
        return this.http.get(`${url}/resource/request-for-quotations`);
    }






    // http://localhost:8080/api/v1/accounting/purchase-orders
    getPurchaseOrders(): Observable<any> {
        return this.http.get(`${url}/accounting/purchase-orders`);
    }
    // http://localhost:8080/api/v1/accounting/purchase-order-by-order-no/1
    getPurchaseOrderByOrderNo(orderNo: any): Observable<any> {
        return this.http.get(`${url}/accounting/purchase-order-by-order-no/${orderNo}`);
    }

    // http://localhost:8080/api/v1/accounting/purchase-order-generate
    generatePurchaseOrder(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/purchase-order-generate`, data);
    }

    // http://localhost:8080/api/v1/accounting/purchase-order-update/1
    updatePurchaseOrder(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/purchase-order-update/${id}`, data);
    }

    // http://localhost:8080/api/v1/accounting/purchase-order-delete/1
    deletePurchaseOrder(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/purchase-order-delete/${id}`);
    }





    // http://localhost:8080/api/v1/accounting/purchase-contracts
    getPurchaseContracts(): Observable<any> {
        return this.http.get(`${url}/accounting/purchase-contracts`);
    }

    // http://localhost:8080/api/v1/accounting/purchase-contract/1
    getPurchaseContractById(id: any): Observable<any> {
        return this.http.get(`${url}/accounting/purchase-contract/${id}`);
    }

    // http://localhost:8080/api/v1/accounting/purchase-contract-store
    addPurchaseContract(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/purchase-contract-store`, data);
    }

    // http://localhost:8080/api/v1/accounting/purchase-contract-update/1
    updatePurchaseContract(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/purchase-contract-update/${id}`, data);
    }


    // http://localhost:8080/api/v1/accounting/purchase-contract-delete/1
    deletePurchaseContract(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/purchase-contract-delete/${id}`);
    }




    // bill approval

    // http://localhost:8080/api/v1/accounting/bills-by-accountant/1
    getBillsByAccountant(accountantId: any): Observable<any> {
        return this.http.get(`${url}/accounting/bills-by-accountant-id/${accountantId}`);
    }

    // http://localhost:8080/api/v1/accounting/accountant-approve-bill/1
    accountantApproveBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/accountant-approve-bill/${id}`, data);
    }
    // http://localhost:8080/api/v1/accounting/accountant-review-bill/1
    accountantReviewBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/accountant-review-bill/${id}`, data);
    }
    // http://localhost:8080/api/v1/accounting/accountant-reject-bill/1
    accountantRejectBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/accountant-reject-bill/${id}`, data);
    }






    // http://localhost:8080/api/v1/accounting/bills-by-auditor-id/1
    getBillsByAuditorId(auditorId: any): Observable<any> {
        return this.http.get(`${url}/accounting/bills-by-auditor-id/${auditorId}`);
    }

    // http://localhost:8080/api/v1/accounting/auditor-approve-bill/1
    auditorApproveBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/auditor-approve-bill/${id}`, data);
    }
    // http://localhost:8080/api/v1/accounting/auditor-review-bill/1
    auditorReviewBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/auditor-review-bill/${id}`, data);
    }
    // http://localhost:8080/api/v1/accounting/auditor-reject-bill/1
    auditorRejectBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/auditor-reject-bill/${id}`, data);
    }




    // http://localhost:8080/api/v1/accounting/bills-by-vice-chancellor-id/1
    getBillsByViceChancellorId(viceChancellorId: any): Observable<any> {
        return this.http.get(`${url}/accounting/bills-by-vice-chancellor-id/${viceChancellorId}`);
    }

    // http://localhost:8080/api/v1/accounting/vice-chancellor-approve-bill/1
    viceChancellorApproveBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/vice-chancellor-approve-bill/${id}`, data);
    }
    // http://localhost:8080/api/v1/accounting/vice-chancellor-review-bill/1
    viceChancellorReviewBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/vice-chancellor-review-bill/${id}`, data);
    }
    // http://localhost:8080/api/v1/accounting/vice-chancellor-reject-bill/1
    viceChancellorRejectBill(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/vice-chancellor-reject-bill/${id}`, data);
    }



    // salarySheet
    // http://localhost:8080/api/v1/hr/salary-sheet-by-accountant-id/1
    getSalarySheetByAccountantId(accountantId: any): Observable<any> {
        return this.http.get(`${url}/hr/salary-sheet-by-accountant-id/${accountantId}`);
    }

    // http://localhost:8080/api/v1/hr/accountant-approve-salary-sheet/1
    accountantApproveSalarySheet(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/hr/accountant-approve-salary-sheet/${id}`, data);
    }
    // http://localhost:8080/api/v1/hr/accountant-review-salary-sheet/1
    accountantReviewSalarySheet(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/hr/accountant-review-salary-sheet/${id}`, data);
    }
    // http://localhost:8080/api/v1/hr/accountant-reject-salary-sheet/1
    accountantRejectSalarySheet(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/hr/accountant-reject-salary-sheet/${id}`, data);
    }




    // http://localhost:8080/api/v1/hr/salary-sheet-by-auditor-id/1
    getSalarySheetByAuditorId(auditorId: any): Observable<any> {
        return this.http.get(`${url}/hr/salary-sheet-by-auditor-id/${auditorId}`);
    }
    // http://localhost:8080/api/v1/hr/auditor-approve-salary-sheet/1
    auditorApproveSalarySheet(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/hr/auditor-approve-salary-sheet/${id}`, data);
    }
    // http://localhost:8080/api/v1/hr/auditor-review-salary-sheet/1
    auditorReviewSalarySheet(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/hr/auditor-review-salary-sheet/${id}`, data);
    }
    // http://localhost:8080/api/v1/hr/auditor-reject-salary-sheet/1
    auditorRejectSalarySheet(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/hr/auditor-reject-salary-sheet/${id}`, data);
    }



    // http://localhost:8080/api/v1/hr/salary-sheet-by-vice-chancellor-id/1
    getSalarySheetByViceChancellorId(viceChancellorId: any): Observable<any> {
        return this.http.get(`${url}/hr/salary-sheet-by-vice-chancellor-id/${viceChancellorId}`);
    }
    // http://localhost:8080/api/v1/hr/vice-chancellor-approve-salary-sheet/1
    viceChancellorApproveSalarySheet(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/hr/vice-chancellor-approve-salary-sheet/${id}`, data);
    }
    // http://localhost:8080/api/v1/hr/vice-chancellor-review-salary-sheet/1
    viceChancellorReviewSalarySheet(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/hr/vice-chancellor-review-salary-sheet/${id}`, data);
    }
    // http://localhost:8080/api/v1/hr/vice-chancellor-reject-salary-sheet/1
    viceChancellorRejectSalarySheet(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/hr/vice-chancellor-reject-salary-sheet/${id}`, data);
    }




    // {{baseurl}}/auth/account-office-officer-by-accountant/1
    getAccountOfficeOfficerByAccountant(accountantId: any): Observable<any> {
        return this.http.get(`${url}/auth/account-office-officer-by-accountant/${accountantId}`);
    }
    // {{baseurl}}/auth/account-office-officers
    getAccountOfficeOfficers(): Observable<any> {
        return this.http.get(`${url}/auth/account-office-officers`);
    }
    // {{baseurl}}/auth/account-office-officer-by-user/1
    getAccountOfficeOfficerByUser(userId: any): Observable<any> {
        return this.http.get(`${url}/auth/account-office-officer-by-user/${userId}`);
    }
    // {{baseurl}}/auth/account-office-officer/1
    getAccountOfficeOfficer(id: any): Observable<any> {
        return this.http.get(`${url}/auth/account-office-officer/${id}`);
    }
    // {{baseurl}}/auth/permissions-by-account-office-officer/1
    getPermissionsByAccountOfficeOfficer(id: any): Observable<any> {
        return this.http.get(`${url}/auth/permissions-by-account-office-officer/${id}`);
    }
    // {{baseurl}}/auth/assign-account-office-officer
    assignAccountOfficeOfficer(data: any): Observable<any> {
        return this.http.post(`${url}/auth/assign-account-office-officer`, data);
    }
    // {{baseurl}}/auth/account-office-officer-status-update/1
    accountOfficeOfficerStatusUpdate(id: any): Observable<any> {
        return this.http.put(`${url}/auth/account-office-officer-status-update/${id}`, {});
    }

    // {{baseurl}}/auth/account-office-officer-status-update/1
    accountOfficeOfficerPermissionUpdate(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/auth/add-account-office-officer-permission/${id}`, data);
    }
    // {{baseurl}}/auth/delete-account-office-officer-permission/1
    deleteAccountOfficeOfficerPermission(id: any): Observable<any> {
        return this.http.delete(`${url}/auth/delete-account-office-officer-permission/${id}`);
    }




    // http://localhost:8080/api/v1/resource/tender-thresholds
    getTenderThresholds(): Observable<any> {
        return this.http.get(`${url}/resource/tender-thresholds`);
    }
    // http://localhost:8080/api/v1/resource/tender-threshold/1
    getTenderThresholdById(id: any): Observable<any> {
        return this.http.get(`${url}/resource/tender-threshold/${id}`);
    }

    // http://localhost:8080/api/v1/resource/tender-threshold-add
    addTenderThreshold(data: any): Observable<any> {
        return this.http.post(`${url}/resource/tender-threshold-add`, data);
    }

    // http://localhost:8080/api/v1/resource/tender-threshold-update/1
    updateTenderThreshold(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/resource/tender-threshold-update/${id}`, data);
    }

    // http://localhost:8080/api/v1/resource/tender-threshold-delete/1
    deleteTenderThreshold(id: any): Observable<any> {
        return this.http.delete(`${url}/resource/tender-threshold-delete/${id}`);
    }




    // tender-threshold-by-financial-year-id-and-type
    getTenderThresholdByFinancialYearIdAndType(financialYearId: any, tenderType: any): Observable<any> {
        return this.http.get(`${url}/resource/tender-threshold-by-financial-year-id-and-type/${financialYearId}/${tenderType}`);
    }





    // http://localhost:8080/api/v1/resource/procurement-annual-plans
    getProcurementAnnualPlans(): Observable<any> {
        return this.http.get(`${url}/resource/procurement-annual-plans`);
    }

    // http://localhost:8080/api/v1/resource/procurement-annual-plan/1
    getProcurementAnnualPlanById(id: any): Observable<any> {
        return this.http.get(`${url}/resource/procurement-annual-plan/${id}`);
    }

    // http://localhost:8080/api/v1/resource/procurement-annual-plan-add
    addProcurementAnnualPlan(data: any): Observable<any> {
        return this.http.post(`${url}/resource/procurement-annual-plan-add`, data);
    }
    // http://localhost:8080/api/v1/resource/procurement-annual-plan-update/1
    updateProcurementAnnualPlan(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/resource/procurement-annual-plan-update/${id}`, data);
    }
    // http://localhost:8080/api/v1/resource/procurement-annual-plan-delete/1
    deleteProcurementAnnualPlan(id: any): Observable<any> {
        return this.http.delete(`${url}/resource/procurement-annual-plan-delete/${id}`);
    }



    // http://localhost:8080/api/v1/accounting/purchase-order-receive-request/{purchaseOrderId}
    purchaseOrderReceiveRequest(purchaseOrderId: any): Observable<any> {
        return this.http.put(`${url}/accounting/purchase-order-receive-request/${purchaseOrderId}`, {});
    }

    // http://localhost:8080/api/v1/accounting/purchase-order-receive-update/{purchaseOrderId}
    purchaseOrderReceiveUpdate(data: any, purchaseOrderId: any): Observable<any> {
        return this.http.put(`${url}/accounting/purchase-order-receive-update/${purchaseOrderId}`, data);
    }

    // http://localhost:8080/api/v1/accounting/purchase-order-receive-request-list
    purchaseOrderReceiveRequestList(): Observable<any> {
        return this.http.get(`${url}/accounting/purchase-order-receive-request-list`);
    }





    // http://localhost:8080/api/v1/accounting/contract-templates
    getContractTemplates(): Observable<any> {
        return this.http.get(`${url}/accounting/contract-templates`);
    }
    // http://localhost:8080/api/v1/accounting/contract-templates/1
    getContractTemplateById(id: any): Observable<any> {
        return this.http.get(`${url}/accounting/contract-templates/${id}`);
    }
    // http://localhost:8080/api/v1/accounting/contract-template-add
    addContractTemplate(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/contract-template-add`, data);
    }
    // http://localhost:8080/api/v1/accounting/contract-template-update/1
    updateContractTemplate(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/contract-template-update/${id}`, data);
    }
    // http://localhost:8080/api/v1/accounting/contract-template-delete/1
    deleteContractTemplate(id: any): Observable<any> {
        return this.http.delete(`${url}/accounting/contract-template-delete/${id}`);
    }



    // department-forecast-item-by-financial-year-and-item/{financialYearId}/{itemId}
    getDepartmentForecastItemByFinancialYearAndItem(financialYearId: any, itemId: any): Observable<any> {
        return this.http.get(`${url}/resource/department-forecast-item-by-financial-year-and-item/${financialYearId}/${itemId}`);
    }
    // /find-level-three-budget-by-financial-year-and-level-four-chart-account/{financialYearId}/{chartAccountId}
    findLevelThreeBudgetByFinancialYearAndLevelFourChartAccount(financialYearId: any, chartAccountId: any): Observable<any> {
        return this.http.get(`${url}/accounting/find-level-three-budget-by-financial-year-and-level-four-chart-account/${financialYearId}/${chartAccountId}`);
    }



    // /procurement-annual-plan-by-financial-year-and-store-item/{financialYearId}/{storeItemId}
    procurementAnnualPlanByFinancialYearAndStoreItem(financialYearId: any, storeItemId: any): Observable<any> {
        return this.http.get(`${url}/resource/procurement-annual-plan-by-financial-year-and-store-item/${financialYearId}/${storeItemId}`);
    }




    // request-for-quotation-by-request-no
    getRequestForQuotationByRequestNo(requestNo: any): Observable<any> {
        return this.http.get(`${url}/resource/request-for-quotation-by-request-no/${requestNo}`);
    }



    // http://localhost:8080/api/v1/accounting/store-purchase-order-receive
    storePurchaseOrderReceive(data: any): Observable<any> {
        return this.http.post(`${url}/accounting/store-purchase-order-receive`, data);
    }


    // http://localhost:8080/api/v1/accounting/purchase-order-receives
    getPurchaseOrderReceives(): Observable<any> {
        return this.http.get(`${url}/accounting/purchase-order-receives`);
    }




    // http://localhost:8080/api/v1/accounting/update-purchase-order-receive/1
    updatePurchaseOrderReceive(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/accounting/update-purchase-order-receive/${id}`, data);
    }



    // /bill-initiate-by-purchase-order-receive/{id}
    billInitiateByPurchaseOrderReceive(id: any): Observable<any> {
        return this.http.put(`${url}/accounting/bill-initiate-by-purchase-order-receive/${id}`, {});
    }




    // bill-initiated-recevied-purchase-order-list
    findBillInitiatedPurchaseOrderReceiveList(): Observable<any> {
        return this.http.get(`${url}/accounting/bill-initiated-recevied-purchase-order-list`);
    }

}