import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url } from "../core/models/API";

@Injectable({
  providedIn: 'root'
})
export class ProvostService {


  constructor(private http: HttpClient) { }



  // Hall management

  getHallList(): Observable<any> {
    return this.http.get<any>(url + '/resource/student-hall-report');
  }

  createHall(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/building/add', data);
  }

  updateHall(data: any): Observable<any> {
    return this.http.put<any>(url + '/api/hall-management/halls', data);
  }


  deleteHall(data: any): Observable<any> {
    return this.http.delete<any>(url + '/api/hall-management/halls', data);
  }




  // hall-management

  // borders

  getBorderList(): Observable<any> {
    return this.http.get<any>(url + '/resource/hall-allotment');
  }


  createBorder(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/hall-allotment/add', data);
  }

  updateBorder(data: any, id: string): Observable<any> {
    return this.http.put<any>(url + `/resource/hall-allotment/update/${id}`, data);
  }
  // /resource/hall-allotment/2
  singleBorder(id: any): Observable<any> {
    return this.http.get<any>(url + `/resource/hall-allotment/${id}`);
  }

  deleteBorder(id: any): Observable<any> {
    return this.http.delete<any>(url + `/resource/hall-allotment/delete/${id}`, {});
  }


  // donation from university
  // donation from university
  getDonationList(): Observable<any> {
    return this.http.get<any>(url + '/resource/show-all-donations');
  }
  //http://localhost:8080/api/v1/resource/donation-add
  addDonation(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/donation-add', data);
  }

  deleteDonation(id: number): Observable<any> {
    return this.http.delete(`${url}/resource/donation-delete/${id}`);
  }

  //
  // addDonation(data: any): Observable<any> {
  //   return this.http.post<any>(url + '/resource/donation/add', data);
  // }

  // hall allocation
  getAllocationList(): Observable<any> {
    return this.http.get<any>(url + '/resource/hall-allotment');
  }

  deleteAllocation(id: number): Observable<any> {
    return this.http.delete(`${url}/resource/hall-allotment/delete/${id}`);
  }

  // resource/find-building-by-provost/6276
  findBuildingByProvost(id: number): Observable<any> {
    return this.http.get(`${url}/resource/find-building-by-provost/${id}`);
  }





  // canteen rent collection


  getCanteenList(): Observable<any> {
    return this.http.get<any>(url + '/resource/canteen-rent');
  }

  //   getDonationList(): Observable<any> {
  //     return this.http.get<any>(url + '/resource/donation');
  // }

  deleteCanteenRent(id: number): Observable<any> {
    return this.http.delete(`${url}/resource/canteen-rent-delete/${id}`);
  }


  // addDonation(data: any): Observable<any> {
  //     return this.http.post<any>(url + '/resource/donation/add', data);
  // }



  //hall clearance

  // resource/hall-clearance

  getHallClearanceList(): Observable<any> {
    return this.http.get<any>(url + '/resource/hall-clearance');
  }




  // resource/hall-clearance-delete/8

  deleteHallClearance(id: number): Observable<any> {
    return this.http.delete(`${url}/resource/hall-clearance-delete/${id}`);
  }



  // resource/daily-income

  getDailyIncomeList(): Observable<any> {
    return this.http.get<any>(url + '/resource/daily-income');
  }

  // resource/daily-income/delete/1

  deleteDailyIncome(id: number): Observable<any> {
    return this.http.delete(`${url}/resource/daily-income/delete/${id}`);
  }


  // resource/daily-expenses

  getDailyExpensesList(): Observable<any> {
    return this.http.get<any>(url + '/resource/daily-expenses');
  }

  // resource/daily-expenses/delete/1

  deleteDailyExpenses(id: number): Observable<any> {
    return this.http.delete(`${url}/resource/daily-expenses/delete/${id}`);
  }



  // resource//hall-management-by-provost/1

  getHallDetailsByProvost(id: number): Observable<any> {
    return this.http.get(`${url}/resource/hall-management-by-provost/${id}`);
  }




  // Weekdays
  // http://localhost:8080/api/v1/resource/weekdays/add

  addWeekdays(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/weekdays/add', data);
  }

  // http://localhost:8080/api/v1/resource/weekdays

  getWeekdays(): Observable<any> {
    return this.http.get<any>(url + '/resource/weekdays');
  }

  // http://localhost:8080/api/v1/resource/weekdays/update/4

  updateWeekdays(data: any, id: string): Observable<any> {
    return this.http.put<any>(url + `/resource/weekdays/update/${id}`, data);
  }
  // http://localhost:8080/api/v1/resource/weekdays/delete/9

  deleteWeekdays(id: number): Observable<any> {
    return this.http.delete(`${url}/resource/weekdays/delete/${id}`);
  }

  // http://localhost:8080/api/v1/resource/meal-type
  getMealType(): Observable<any> {
    return this.http.get<any>(url + '/resource/meal-type');
  }

  //http://localhost:8080/api/v1/resource/meal-type/add
  addMealType(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/meal-type/add', data);
  }
  //http://localhost:8080/api/v1/resource/meal-type/update/1
  updateMealType(data: any, id: string): Observable<any> {
    return this.http.put<any>(url + `/resource/meal-type/update/${id}`, data);
  }
  //http://localhost:8080/api/v1/resource/meal-type/delete/1
  deleteMealType(id: number): Observable<any> {
    return this.http.delete(`${url}/resource/meal-type/delete/${id}`);
  }

  //http://localhost:8080/api/v1/resource/food-menu
  getFoodMenu(): Observable<any> {
    return this.http.get<any>(url + '/resource/food-menu');
  }
  //http://localhost:8080/api/v1/resource/food-menu/add
  addFoodMenu(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/food-menu/add', data);
  }
  //http://localhost:8080/api/v1/resource/food-menu/update/1
  updateFoodMenu(data: any, id: string): Observable<any> {
    return this.http.put<any>(url + `/resource/food-menu/update/${id}`, data);
  }
  //http://localhost:8080/api/v1/resource/food-menu/delete/1
  deleteFoodMenu(id: number): Observable<any> {
    return this.http.delete(`${url}/resource/food-menu/delete/${id}`);
  }


  //http://localhost:8080/api/v1/resource/weekly-meal/add
  addWeeklyMeal(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/weekly-meal/add', data);
  }


  // http://localhost:8080/api/v1/resource/weekly-meal/update/1
  updateWeeklyMeal(data: any, id: any): Observable<any> {
    return this.http.put<any>(url + `/resource/weekly-meal/update/${id}`, data);
  }



  //http://localhost:8080/api/v1/resource/weekly-meal
  getWeeklyMeal(): Observable<any> {
    return this.http.get<any>(url + '/resource/weekly-meal');
  }


  // http://localhost:8080/api/v1/resource/weekly-meal/1
  singleWeeklyMeal(id: any): Observable<any> {
    return this.http.get(`${url}/resource/weekly-meal/${id}`);
  }





  //http://localhost:8080/api/v1/resource/complain-type
  getComplainType(): Observable<any> {
    return this.http.get<any>(url + '/resource/show-all-complain-type');
  }
  //http://localhost:8080/api/v1/resource/complain-type-add
  addComplainType(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/complain-type-add', data);
  }
  //http://localhost:8080/api/v1/resource/complain-type/update/1
  updateComplainType(data: any, id: string): Observable<any> {
    return this.http.put<any>(url + `/resource/complain-type-update/${id}`, data);
  }
  //http://localhost:8080/api/v1/resource/complain-type/delete/1
  deleteComplainType(id: number): Observable<any> {
    return this.http.delete(`${url}/resource/complain-type-delete/${id}`);
  }

  //http://localhost:8080/api/v1/resource/show-all-complain-form
  getComplainForm(): Observable<any> {
    return this.http.get<any>(url + '/resource/show-all-complain-form');
  }
  //http://localhost:8080/api/v1/resource/complain-form-list-by-provost/6126
  getComplainFormByProvost(id: number): Observable<any> {
    return this.http.get<any>(`${url}/resource/complain-form-list-by-provost/${id}`);
  }

  //http://localhost:8080/api/v1/resource/complain-form-solve-by-provost/1
  solveComplainFormByProvost(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${url}/resource/complain-form-solve-by-provost/${id}`, body);
  }
  //http://localhost:8080/api/v1/resource/complain-form-action-by-provost/8
  complainFormActionByProvost(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${url}/resource/complain-form-action-by-provost/${id}`, body);
  }

  //http://localhost:8080/api/v1/resource/disciplinary-violation
  // getDisciplinaryViolation(): Observable<any> {
  //     return this.http.get<any>(url + '/resource/disciplinary-violation');
  // }
  //http://localhost:8080/api/v1/resource/disciplinary-violation-add
  // addDisciplinaryViolation(data: any): Observable<any> {
  //     return this.http.post<any>(url + '/resource/disciplinary-violation-add', data);
  // }
  //http://localhost:8080/api/v1/resource/disciplinary-violation/update/1
  // updateDisciplinaryViolation(data: any, id: string): Observable<any> {
  //     return this.http.put<any>(url + `/resource/disciplinary-violation/update/${id}`, data);
  // }
  //http://localhost:8080/api/v1/resource/disciplinary-violation/delete/6126
  // deleteDisciplinaryViolation(id: number): Observable<any> {
  //     return this.http.delete(`${url}/resource/disciplinary-violation/delete/${id}`);
  // }

  //http://localhost:8080/api/v1/resource/discplanary-violation-type
  getDisciplinaryViolationType(): Observable<any> {
    return this.http.get<any>(url + '/resource/discplanary-violation-type');
  }
  //http://localhost:8080/api/v1/resource/discplanary-violation-type-add
  addDisciplinaryViolationType(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/discplanary-violation-type-add', data);
  }

  //http://localhost:8080/api/v1/resource/penalty-type
  getPenaltyType(): Observable<any> {
    return this.http.get<any>(url + '/resource/penalty-type');
  }

  //http://localhost:8080/api/v1/resource/penalty-type-add
  addPenaltyType(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/penalty-type-add', data);
  }


  //http://localhost:8080/api/v1/resource/show-all-canteen
  getAllCanteen(): Observable<any> {
    return this.http.get<any>(url + '/resource/show-all-canteen');
  }

  //http://localhost:8080/api/v1/resource/canteen-add
  addCanteen(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/canteen-add', data);
  }

  //http://localhost:8080/api/v1/resource/canteen-delete/1
  deleteCanteen(id: number): Observable<any> {
    return this.http.delete(`${url}/resource/canteen-delete/${id}`);
  }

  //http://localhost:8080/api/v1/resource/show-all-canteen-rent-config
  getAllCanteenRentConfig(): Observable<any> {
    return this.http.get<any>(url + '/resource/show-all-canteen-rent-config');
  }

  //http://localhost:8080/api/v1/resource/canteen-rent-config-add
  addCanteenRentConfig(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/canteen-rent-config-add', data);
  }

  //http://localhost:8080/api/v1/resource/canteen-rent-config-delete/1
  deleteCanteenRentConfig(id: number): Observable<any> {
    return this.http.delete(`${url}/resource/canteen-rent-config-delete/${id}`);
  }

  // http://localhost:8080/api/v1/resource/show-all-canteen-rent
  getAllCanteenRent(): Observable<any> {
    return this.http.get<any>(url + '/resource/show-all-canteen-rent');
  }

  // http://localhost:8080/api/v1/resource/canteen-rent-add
  addCanteenRent(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/canteen-rent-add', data);
  }


  //http://localhost:8080/api/v1/resource/show-all-daily-income-expenses
  getAllIncomeExpenses(): Observable<any> {
    return this.http.get<any>(url + '/resource/show-all-daily-income-expenses');
  }
  //http://localhost:8080/api/v1/resource/daily-income-expenses-add
  addIncomeExpenses(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/daily-income-expenses-add', data);
  }

  //http://localhost:8080/api/v1/resource/daily-income-expenses-delete/1
  deleteIncomeExpenses(id: number): Observable<any> {
    return this.http.delete(`${url}/resource/daily-income-expenses-delete/${id}`);
  }




  //http://localhost:8080/api/v1/resource/find-application-house-tutor-by-provost/6126
  findApplicationHouseTutorByProvost(id: number): Observable<any> {
    return this.http.get<any>(url + `/resource/find-application-house-tutor-by-provost/${id}`);
  }

  //http://localhost:8080/api/v1/resource/application-house-tutor-status-update/11
  updateApplicationHouseTutorStatus(data: any, id: string): Observable<any> {
    return this.http.put<any>(url + `/resource/application-house-tutor-status-update/${id}`, data);
  }

  //http://localhost:8080/api/v1/resource/tasks-add
  addTask(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/tasks-add', data);
  }
  //http://localhost:8080/api/v1/resource/tasks
  getTask(): Observable<any> {
    return this.http.get<any>(url + '/resource/tasks');
  }
  //http://localhost:8080/api/v1/resource/tasks-update/1
  updateTask(data: any, id: string): Observable<any> {
    return this.http.put<any>(url + `/resource/tasks-update/${id}`, data);
  }
  //http://localhost:8080/api/v1/resource/tasks-delete/1
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${url}/resource/tasks-delete/${id}`);
  }

  //http://localhost:8080/api/v1/resource/provost-tasks-add
  addProvostTask(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/provost-tasks-add', data);
  }
  // http://localhost:8080/api/v1/resource/provost-tasks
  getProvostTask(): Observable<any> {
    return this.http.get<any>(url + '/resource/provost-tasks');
  }

  //http://localhost:8080/api/v1/resource/provost-tasks-delete/1
  deleteProvostTask(id: number): Observable<any> {
    return this.http.delete(`${url}/resource/provost-tasks-delete/${id}`);
  }

  //http://localhost:8080/api/v1/resource/provost-tasks-update/1
  updateProvostTask(data: any, id: string): Observable<any> {
    return this.http.put<any>(url + `/resource/provost-tasks-update/${id}`, data);
  }

  //http://localhost:8080/api/v1/resource/room-status-summary-by-provost/6126
  getRoomStatusSummaryByProvost(id: number): Observable<any> {
    return this.http.get<any>(url + `/resource/room-status-summary-by-provost/${id}`);
  }

  //http://localhost:8080/api/v1/resource/hall-allotment-status-summary-by-provost/6126
  getHallAllotmentStatusSummaryByProvost(id: number): Observable<any> {
    return this.http.get<any>(url + `/resource/hall-allotment-status-summary-by-provost/${id}`);
  }
  ////http://localhost:8080/api/v1/resource/summary-of-total-income-and-expanse-by-user-id/6126
  getSummaryOfTotalIncomeAndExpanseByUserId(id: number): Observable<any> {
    return this.http.get<any>(url + `/resource/summary-of-total-income-and-expanse-by-user-id/${id}`);
  }

  //http://localhost:8080/api/v1/auth/students-residential-summary-by-building/1
  getStudentsResidentialSummaryByBuilding(id: number): Observable<any> {
    return this.http.get<any>(url + `/auth/students-residential-summary-by-building/${id}`);
  }

  //http://localhost:8080/api/v1/resource/find-donations-by-user/6126
  findDonationsByUser(id: number): Observable<any> {
    return this.http.get<any>(url + `/resource/find-donations-by-user/${id}`);
  }

  //http://localhost:8080/api/v1/resource/canteen-rent-summary/by-building/1
  getCanteenRentSummaryByBuilding(id: number): Observable<any> {
    return this.http.get<any>(url + `/resource/canteen-rent-summary/by-building/${id}`);
  }





  // allotment circular
  // http://localhost:8080/api/v1/resource/hall-allotment-circular-add
  addAllotmentCircular(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/hall-allotment-circular-add', data);
  }

  // http://localhost:8080/api/v1/resource/hall-allotment-circulars
  getAllotmentCircular(): Observable<any> {
    return this.http.get<any>(url + '/resource/hall-allotment-circulars');
  }

  // hall-allotment-circular-by-provost-id/1
  getAllotmentCircularByProvostId(id: any): Observable<any> {
    return this.http.get<any>(url + `/resource/hall-allotment-circular-by-provost-id/${id}`);
  }

  // http://localhost:8080/api/v1/resource/hall-allotment-circular-update/1
  updateAllotmentCircular(data: any, id: any): Observable<any> {
    return this.http.put<any>(url + `/resource/hall-allotment-circular-update/${id}`, data);
  }
  // http://localhost:8080/api/v1/resource/hall-allotment-circular-delete/1
  deleteAllotmentCircular(id: any): Observable<any> {
    return this.http.delete(`${url}/resource/hall-allotment-circular-delete/${id}`);
  }



  // find-attached-student-by-building/{buildingId}
  findAttachedStudentByBuilding(buildingId: any): Observable<any> {
    return this.http.get<any>(url + `/auth/find-attached-student-by-building/${buildingId}`);
  }

  // /find-residential-student-by-building/{buildingId}
  findResidentialStudentByBuilding(buildingId: any): Observable<any> {
    return this.http.get<any>(url + `/auth/find-residential-student-by-building/${buildingId}`);
  }


  // /find-non-residential-student-by-building/{buildingId}
  findNonResidentialStudentByBuilding(buildingId: any): Observable<any> {
    return this.http.get<any>(url + `/auth/find-non-residential-student-by-building/${buildingId}`);
  }






  // http://localhost:8080/api/v1/resource/rooms-details-by-provost-id/2
  getRoomsDetailsByProvostId(provostId: any): Observable<any> {
    return this.http.get<any>(url + `/resource/rooms-details-by-provost-id/${provostId}`);
  }
  // http://localhost:8080/api/v1/resource/room-allotment-and-capacity-details-by-room-id/1
  getRoomAllotmentAndCapacityDetailsByRoomId(roomId: any): Observable<any> {
    return this.http.get<any>(url + `/resource/room-allotment-and-capacity-details-by-room-id/${roomId}`);
  }

  //http://localhost:8080/api/v1/resource/room/update-capacity/3
  updateRoomCapacity(data: any, roomId: any): Observable<any> {
    return this.http.put<any>(url + `/resource/room/update-capacity/${roomId}`, data);
  }

  //http://localhost:8080/api/v1/resource/expenses-type/add
  addExpenseType(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/expenses-type/add', data);
  }

  //http://localhost:8080/api/v1/resource/expenses-type
  getExpenseType(): Observable<any> {
    return this.http.get<any>(url + '/resource/expenses-type');
  }
  //http://localhost:8080/api/v1/resource/expenses-type/update/1
  updateExpenseType(id: any, data: any): Observable<any> {
    return this.http.put<any>(url + `/resource/expenses-type/update/${id}`, data);
  }
  //http://localhost:8080/api/v1/resource/expenses-type/delete/2
  deleteExpenseType(id: any): Observable<any> {
    return this.http.delete(`${url}/resource/expenses-type/delete/${id}`);
  }




  // /hall-notice-by-building/{buildingId}
  getHallNoticeByBuilding(buildingId: any): Observable<any> {
    return this.http.get<any>(url + `/notification/hall-notice-by-building/${buildingId}`);
  }






  // http://localhost:8080/api/v1/resource/hall-clearance-circular
  storeHallClearanceCircular(data: any): Observable<any> {
    return this.http.post(url + '/resource/hall-clearance-circular', data);
  }



  // http://localhost:8080/api/v1/resource/hall-clearance-Circular-delete/1
  deleteHallClearanceCircular(id: any): Observable<any> {
    return this.http.delete(`${url}/resource/hall-clearance-Circular-delete/${id}`);
  }

  // http://localhost:8080/api/v1/resource/hall-clearance-circular-by-user/111111
  getHallClearanceCircularByUserId(userId: any): Observable<any> {
    return this.http.get<any>(url + `/resource/hall-clearance-circular-by-user/${userId}`);
  }

  // http://localhost:8080/api/v1/resource/hall-clearance-circular-by-hall/1
  getHallClearanceCircularByHallId(hallId: any): Observable<any> {
    return this.http.get<any>(url + `/resource/hall-clearance-circular-by-hall/${hallId}`);
  }







  // http://localhost:8080/api/v1/resource/hall-meal-payment-tokens-by-student/24010101004
  getHallMealPaymentTokensByStudent(studentId: any): Observable<any> {
    return this.http.get<any>(url + `/resource/hall-meal-payment-tokens-by-student/${studentId}`);
  }





  // http://localhost:8080/api/v1/resource/hall-meal-payments
  storeHallMealPayment(data: any): Observable<any> {
    return this.http.post(url + '/resource/hall-meal-payments', data);
  }



  // http://localhost:8080/api/v1/resource/hall-meal-payments
  getHallMealPayments(): Observable<any> {
    return this.http.get<any>(url + '/resource/hall-meal-payments');
  }


  // http://localhost:8080/api/v1/resource/hall-meal-payment/1
  getHallMealPayment(id: any): Observable<any> {
    return this.http.get<any>(url + `/resource/hall-meal-payment/${id}`);
  }

  // http://localhost:8080/api/v1/resource/hall-meal-payment/add
  addHallMealPayment(data: any): Observable<any> {
    return this.http.post<any>(url + '/resource/hall-meal-payment/add', data);
  }
  // http://localhost:8080/api/v1/resource/hall-meal-payment/update/1
  updateHallMealPayment(id: any, data: any): Observable<any> {
    return this.http.put<any>(url + `/resource/hall-meal-payment/update/${id}`, data);
  }
  // http://localhost:8080/api/v1/resource/hall-meal-payment-delete/1
  deleteHallMealPayment(id: any): Observable<any> {
    return this.http.delete(`${url}/resource/hall-meal-payment-delete/${id}`);
  }



  // http://localhost:8080/api/v1/resource/weekly-meal
  getWeeklyMeals(): Observable<any> {
    return this.http.get<any>(url + '/resource/weekly-meal');
  }
}
