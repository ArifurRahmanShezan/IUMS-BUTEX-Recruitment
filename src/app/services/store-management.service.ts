import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { url } from "../core/models/API";

@Injectable({
  providedIn: 'root'
})
export class StoreManagementService {

  constructor(private http: HttpClient) { }

  storeProfileSetup(data: any): Observable<any> {
    return this.http.post(url + "/resource/store-profile-add", data);
  }

  getOneStoreProfile(id: any): Observable<any> {
    return this.http.get(url + "/resource/store-profile/" + id);
  }

  getAllStoreProfile(): Observable<any> {
    return this.http.get(url + "/resource/store-profile");
  }

  getStoreProfileByProvost(id: any): Observable<any> {
    return this.http.get(url + "/resource/store-profile-by-provost/" + id);
  }

  updateStoreProfile(payload: any, id: any): Observable<any> {
    return this.http.put(url + "/resource/store-profile-update/" + id, payload);
  }

  deleteStoreProfile(id: any): Observable<any> {
    return this.http.delete<any>(url + "/resource/store-profile-delete/" + id);
  }

  // Issue Item
  storeIssueItem(data: any): Observable<any> {
    return this.http.post(url + "/resource/issue-item/add", data);
  }

  getAllStoreIssueItem(): Observable<any> {
    return this.http.get(url + "/resource/issue-item");
  }

  getOneStoreIssueItem(id: any): Observable<any> {
    return this.http.get(url + "/resource/issue-item/" + id);
  }

  updateStoreIssueItem(payload: any, id: any): Observable<any> {
    return this.http.put(url + "/resource/issue-item/update/" + id, payload);
  }

  deleteStoreIssueItem(id: any): Observable<any> {
    return this.http.delete<any>(url + "/resource/issue-item/delete/" + id);
  }

  // Store Item Category
  storeItemCategory(data: any): Observable<any> {
    return this.http.post(url + "/resource/item-category/add", data);
  }

  getAllStoreItemCategory(): Observable<any> {
    return this.http.get(url + "/resource/item-category");
  }

  getOneStoreItemCategory(id: any): Observable<any> {
    return this.http.get(url + "/resource/item-category/" + id);
  }

  updateStoreItemCategory(payload: any, id: any): Observable<any> {
    return this.http.put(url + "/resource/item-category/update/" + id, payload);
  }

  deleteStoreItemCategory(id: any): Observable<any> {
    return this.http.delete<any>(url + "/resource/item-category/delete/" + id);
  }

  // Store Item Type
  storeItemType(data: any): Observable<any> {
    return this.http.post(url + "/resource/item-type/add", data);
  }

  getAllStoreItemType(): Observable<any> {
    return this.http.get(url + "/resource/item-type");
  }

  getOneStoreItemType(id: any): Observable<any> {
    return this.http.get(url + "/resource/item-type/" + id);
  }

  updateStoreItemType(payload: any, id: any): Observable<any> {
    return this.http.put(url + "/resource/item-type/update/" + id, payload);
  }

  storeUpdateQuantity(payload: any, id: any): Observable<any> {
    return this.http.put(url + "/resource/update-quantity/" + id, payload);
  }

  deleteStoreItemType(id: any): Observable<any> {
    return this.http.delete<any>(url + "/resource/item-type/delete/" + id);
  }

  getItemCategory(id: any): Observable<any> {
    return this.http.get(`${url}/resource/item-category/${id}`);
  }

  calculateDepreciationByItemCategory(itemCategoryId: any, data: any): Observable<any> {
    return this.http.put(`${url}/resource/calculate-depreciation-by-item-category/${itemCategoryId}`, data);
  }

  // Store Items
  storeItems(data: any): Observable<any> {
    return this.http.post(url + "/resource/store-item/add", data);
  }

  getAllStoreItems(): Observable<any> {
    return this.http.get(url + "/resource/store-item");
  }

  getOneStoreItem(id: any): Observable<any> {
    return this.http.get(url + "/resource/store-item/" + id);
  }

  updateStoreItem(payload: any, id: any): Observable<any> {
    return this.http.put(url + "/resource/store-item/update/" + id, payload);
  }

  deleteStoreItem(id: any): Observable<any> {
    return this.http.delete<any>(url + "/resource/store-item/delete/" + id);
  }

  // Vouchers
  storeVouchers(data: any): Observable<any> {
    return this.http.post(url + "/resource/voucher/add", data);
  }

  getAllVouchers(): Observable<any> {
    return this.http.get(url + "/resource/voucher");
  }

  getOneVouchers(id: any): Observable<any> {
    return this.http.get(url + "/resource/voucher/" + id);
  }

  updateVouchers(payload: any, id: any): Observable<any> {
    return this.http.put(url + "/resource/voucher/update/" + id, payload);
  }

  deleteVouchers(id: any): Observable<any> {
    return this.http.delete<any>(url + "/resource/voucher/delete/" + id);
  }

  // Budget Validation
  storeBudgetValidation(data: any): Observable<any> {
    return this.http.post(url + "/resource/budget-validation/add", data);
  }

  getAllStoreBudgetValidation(): Observable<any> {
    return this.http.get(url + "/resource/budget-validation");
  }

  getOneStoreBudgetValidation(id: any): Observable<any> {
    return this.http.get(url + "/resource/budget-validation/" + id);
  }

  updateStoreBudgetValidation(payload: any, id: any): Observable<any> {
    return this.http.put(url + "/resource/budget-validation/update/" + id, payload);
  }

  deleteStoreBudgetValidation(id: any): Observable<any> {
    return this.http.delete<any>(url + "/resource/budget-validation/delete/" + id);
  }

  // Inter Store Transfer
  storeInterStoreTransfer(data: any): Observable<any> {
    return this.http.post(url + "/resource/inter-store-transfer/add", data);
  }

  getAllStoreInterStoreTransfer(): Observable<any> {
    return this.http.get(url + "/resource/inter-store-transfer");
  }

  getOneStoreInterStoreTransfer(id: any): Observable<any> {
    return this.http.get(url + "/resource/inter-store-transfer/" + id);
  }

  updateStoreInterStoreTransfer(payload: any, id: any): Observable<any> {
    return this.http.put(url + "/resource/inter-store-transfer/update/" + id, payload);
  }

  deleteStoreInterStoreTransfer(id: any): Observable<any> {
    return this.http.delete<any>(url + "/resource/inter-store-transfer/delete/" + id);
  }

  getStoreItemByDepartmentHead(id: any): Observable<any> {
    return this.http.get(url + "/resource/store-item/report/department-head/" + id);
  }

  getDepartmentHeadRequisitionListAndApproval(id: any): Observable<any> {
    return this.http.get(url + "/resource/department-head/" + id);
  }

  storeRequisitionRequestEmployee(data: any): Observable<any> {
    return this.http.post(url + "/resource/requisition-request/add", data);
  }

  employeeGetAllRequisitionRequestList(userId: any): Observable<any> {
    return this.http.get(url + "/resource/requisition/user/" + userId);
  }

  employeeFindDepartmentalStore(userId: any): Observable<any> {
    return this.http.get(url + "/resource/get-store-by-employee-user-id/" + userId);
  }

  confirmAndDeliveredByDepartmentHead(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + "/resource/requisition-request/first-approval/" + id, payload);
  }

  recommendByDepartmentHead(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + "/resource/requisition-request/recommendation/" + id, payload);
  }

  getVoucherByDepartmentHead(id: any): Observable<any> {
    return this.http.get(url + "/resource/voucher/department-head/" + id);
  }

  addVoucherByDepartmentHead(payload: any): Observable<any> {
    return this.http.post<any>(url + "/resource/voucher/add", payload);
  }

  finalApprovedByCentralStore(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + "/resource/requisition-request/final-approval/" + id, payload);
  }

  getCentralStoreRequisitionRequest(): Observable<any> {
    return this.http.get(url + "/resource/requisition-request");
  }

  getHall(): Observable<any> {
    return this.http.get(url + "/resource/building");
  }

  getStoreItemByProvost(id: any): Observable<any> {
    return this.http.get(url + "/resource/store-item-by-provost/" + id);
  }

  getStoreProfileByBuilding(buildingId: any): Observable<any> {
    return this.http.get<any>(url + `/resource/store-profile-by-building/${buildingId}`);
  }

  getRequisitionListByProvost(id: any): Observable<any> {
    return this.http.get<any>(url + `/resource/requisition-list-by-provost/${id}`);
  }

  storeItemBulkUploadWithUserAndStore(userId: any, storeId: any, data: any): Observable<any> {
    return this.http.post<any>(url + `/resource/store-item-bulk-upload-with-user-and-store/${userId}/${storeId}`, data);
  }

  getRequisitionByDepartmentHead(id: any): Observable<any> {
    return this.http.get<any>(url + `/resource/requisition-by-department-head/${id}`);
  }

  departmentHeadApproveRequisition(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/department-head-approve-requisition/${id}`, payload);
  }

  departmentHeadRejectRequisition(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/department-head-reject-requisition/${id}`, payload);
  }

  departmentHeadReviewRequisition(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/department-head-review-requisition/${id}`, payload);
  }

  getRequisitionByProcurementDirector(): Observable<any> {
    return this.http.get<any>(url + `/resource/requisition-by-procurement-director`);
  }

  procurementDirectorApproveRequisition(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/procurement-director-approve-requisition/${id}`, payload);
  }

  procurementDirectorRejectRequisition(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/procurement-director-reject-requisition/${id}`, payload);
  }

  procurementDirectorReviewRequisition(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/procurement-director-review-requisition/${id}`, payload);
  }

  getRequisitionByStoreAdmin(): Observable<any> {
    return this.http.get<any>(url + `/resource/requisition-by-store-admin`);
  }

  storeAdminApproveRequisition(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/store-admin-approve-requisition/${id}`, payload);
  }

  storeAdminRejectRequisition(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/store-admin-reject-requisition/${id}`, payload);
  }

  storeAdminReviewRequisition(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/store-admin-review-requisition/${id}`, payload);
  }

  getRequisitionByRegistrar(): Observable<any> {
    return this.http.get<any>(url + `/resource/requisition-by-registrar`);
  }

  registrarApproveRequisition(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/registrar-approve-requisition/${id}`, payload);
  }

  registrarRejectRequisition(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/registrar-reject-requisition/${id}`, payload);
  }

  registrarReviewRequisition(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/registrar-review-requisition/${id}`, payload);
  }

  storeAdminDeliverRequisition(id: any): Observable<any> {
    return this.http.put<any>(url + `/resource/store-admin-deliver-requisition/${id}`, {});
  }

  getStoreItemReceiveRequestsByStoreAdmin(): Observable<any> {
    return this.http.get<any>(url + `/resource/store-item-receive-requests-by-store-admin`);
  }

  storeAdminApproveStoreItem(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/store-admin-approve-store-item/${id}`, payload);
  }

  storeAdminRejectStoreItem(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/store-admin-reject-store-item/${id}`, payload);
  }

  storeAdminReviewStoreItem(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/store-admin-review-store-item/${id}`, payload);
  }

  getStoreItemReceiveRequestsByRegistrar(): Observable<any> {
    return this.http.get<any>(url + `/resource/store-item-receive-requests-by-registrar`);
  }

  registrarApproveStoreItem(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/registrar-approve-store-item/${id}`, payload);
  }

  registrarRejectStoreItem(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/registrar-reject-store-item/${id}`, payload);
  }

  registrarReviewStoreItem(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/registrar-review-store-item/${id}`, payload);
  }

  getDepartmentForecasts(): Observable<any> {
    return this.http.get<any>(url + `/resource/department-forecasts`);
  }

  getDepartmentForecast(id: any): Observable<any> {
    return this.http.get<any>(url + `/resource/department-forecast/${id}`);
  }

  getDepartmentForecastByDepartment(id: any): Observable<any> {
    return this.http.get<any>(url + `/resource/department-forecast-by-department/${id}`);
  }

  addDepartmentForecast(payload: any): Observable<any> {
    return this.http.post<any>(url + `/resource/department-forecast-add`, payload);
  }

  deleteDepartmentForecast(id: any): Observable<any> {
    return this.http.delete<any>(url + `/resource/department-forecast-delete/${id}`);
  }

  procurementDirectorApproveDepartmentForecast(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/procurement-director-approve-department-forecast/${id}`, payload);
  }

  procurementDirectorRejectDepartmentForecast(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/procurement-director-reject-department-forecast/${id}`, payload);
  }

  procurementDirectorReviewDepartmentForecast(id: any, payload: any): Observable<any> {
    return this.http.put<any>(url + `/resource/procurement-director-review-department-forecast/${id}`, payload);
  }

  getDepartmentForecastItemByDepartmentAndItem(departmentId: any, itemId: any): Observable<any> {
    return this.http.get<any>(url + `/resource/department-forecast-item-by-department-and-item/${departmentId}/${itemId}`);
  }

  getStoreItemById(id: any): Observable<any> {
    return this.http.get<any>(url + `/resource/store-item-by-id/${id}`);
  }

}
