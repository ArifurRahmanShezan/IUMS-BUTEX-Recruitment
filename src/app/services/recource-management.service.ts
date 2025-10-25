import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url } from "../core/models/API";

@Injectable({
    providedIn: "root",
})
export class RecourceManagementService {
    constructor(private http: HttpClient) { }

    // asset category
    assetCategoryGetAll(): Observable<any> {
        return this.http.get(`${url}/resource/asset-category`);
    }
    assetCategoryGetOne(id: string): Observable<any> {
        return this.http.get(`${url}/resource/asset-category/${id}`);
    }
    createAssetCategory(data: any): Observable<any> {
        return this.http.post(`${url}/resource/asset-category/add`, data);
    }
    assetCategoryUpdate(data: any, id: string): Observable<any> {
        return this.http.post(
            `${url}/resource/asset-category/update/${id}`,
            data
        );
    }
    deleteAssetCategory(id: string): Observable<any> {
        return this.http.delete(`${url}/resource/asset-category/delete/${id}`);
    }
    // building
    getBuildingList(): Observable<any> {
        return this.http.get(`${url}/resource/building`);
    }
    // get-all-buildings-except-student-hall
    getAllBuildingsExceptStudentHall(): Observable<any> {
        return this.http.get(`${url}/resource/get-all-buildings-except-student-hall`);
    }
    getBuildingByType(data: any): Observable<any> {
        return this.http.post(`${url}/resource/get-building-by-type`, data);
    }
    createNewBuilding(data: any): Observable<any> {
        return this.http.post(`${url}/resource/building/add`, data);
    }
    deleteBuilding(buildingId: any): Observable<any> {
        return this.http.delete(
            `${url}/resource/building/delete/${buildingId}`
        );
    }
    // floor
    getFloorList(): Observable<any> {
        return this.http.get(`${url}/resource/floor`);
    }
    getFloorListByBuildingId(id: string): Observable<any> {
        return this.http.get(`${url}/resource/floor/by/building/${id}`);
    }
    createNewFloor(data: any): Observable<any> {
        return this.http.post(`${url}/resource/floor/add`, data);
    }
    deleteFloor(floorId: string): Observable<any> {
        return this.http.delete(`${url}/resource/floor/delete/${floorId}`);
    }
    // block
    getBlockList(): Observable<any> {
        return this.http.get(`${url}/resource/block`);
    }
    getBlockListByFloorId(id: string): Observable<any> {
        return this.http.get(`${url}/resource/block/by/floor/${id}`);
    }
    createNewBlock(data: any): Observable<any> {
        return this.http.post(`${url}/resource/block/add`, data);
    }
    deleteBlock(id: string): Observable<any> {
        return this.http.delete(`${url}/resource/block/delete/${id}`);
    }
    // asset
    getAssetList(): Observable<any> {
        return this.http.get(`${url}/resource/assets`);
    }
    getAssetsByCategory(categoryId: string): Observable<any> {
        return this.http.get(
            `${url}/resource/asset-by-asset-category/${categoryId}`
        );
    }
    getAsset(id: string): Observable<any> {
        return this.http.get(`${url}/resource/asset/${id}`);
    }
    createNewAsset(data: any): Observable<any> {
        return this.http.post(`${url}/resource/asset/add`, data);
    }
    updateAsset(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/resource/asset/update/${id}`, data);
    }
    deleteAsset(id: string): Observable<any> {
        return this.http.delete(`${url}/resource/asset/delete/${id}`);
    }

    // room types
    getRoomTypeList(): Observable<any> {
        return this.http.get(`${url}/resource/room-type`);
    }

    getRoomType(id: string): Observable<any> {
        return this.http.get(`${url}/resource/room-type/${id}`);
    }

    createNewRoomType(data: any): Observable<any> {
        return this.http.post(`${url}/resource/room-type/add`, data);
    }

    updateRoomType(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/resource/room-type/update/${id}`, data);
    }

    deleteRoomType(id: string): Observable<any> {
        return this.http.delete(`${url}/resource/room-type/delete/${id}`);
    }

    // room apis
    getRoomList(): Observable<any> {
        return this.http.get(`${url}/resource/room`);
    }

    getRoom(id: string): Observable<any> {
        return this.http.get(`${url}/resource/room/${id}`);
    }

    getRoomByBuilding(id: string): Observable<any> {
        return this.http.get(`${url}/resource/room/by/building/${id}`);
    }

    createNewRoom(data: any): Observable<any> {
        return this.http.post(`${url}/resource/room/add`, data);
    }

    updateRoom(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/resource/room/update/${id}`, data);
    }

    deleteRoom(id: string): Observable<any> {
        return this.http.delete(`${url}/resource/room/delete/${id}`);
    }

    //facility apis
    getFacilityList(): Observable<any> {
        return this.http.get(`${url}/resource/facility`);
    }

    getFacility(id: string): Observable<any> {
        return this.http.get(`${url}/resource/facility/${id}`);
    }

    createNewFacility(data: any): Observable<any> {
        return this.http.post(`${url}/resource/facility/add`, data);
    }

    updateFacility(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/resource/facility/update/${id}`, data);
    }

    deleteFacility(id: string): Observable<any> {
        return this.http.delete(`${url}/resource/facility/delete/${id}`);
    }

    //hall complain apis
    getHallComplainTypes(): Observable<any> {
        return this.http.get(`${url}/resource/hall-complain-type`);
    }

    getHallComplainType(id: string): Observable<any> {
        return this.http.get(`${url}/resource/hall-complain-type/${id}`);
    }

    postHallComplainType(data: any): Observable<any> {
        return this.http.post(`${url}/resource/hall-complain-type/add`, data);
    }

    putHallComplainType(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/resource/hall-complain-type/update/${id}`,
            data
        );
    }

    deleteHallComplainType(id: number): Observable<any> {
        return this.http.delete(
            `${url}/resource/hall-complain-type/delete/${id}`
        );
    }

    //hall management api
    getHallManagements(): Observable<any> {
        return this.http.get(`${url}/resource/hall-management`);
    }

    getHallManagement(id: string): Observable<any> {
        return this.http.get(`${url}/resource/hall-management/${id}`);
    }

    //http://localhost:8080/api/v1/resource/hall-employee-list-by-building-id/1
    getHallEmployeeListByBuildingId(id: string): Observable<any> {
        return this.http.get(
            `${url}/resource/hall-employee-list-by-building-id/${id}`
        );
    }

    getProvostHall(id: string): Observable<any> {
        return this.http.get(
            `${url}/resource/hall-management-by-provost/${id}`
        );
    }

    getStudentsByHall(id: string): Observable<any> {
        return this.http.get(`${url}/auth/student-by-hall-building/${id}`);
    }

    assignStudentToRoom(data: any): Observable<any> {
        return this.http.put(
            `${url}/auth/student-hall-room-assign-by-provost`,
            data
        );
    }

    removeStudentFromHall(studentId: any): Observable<any> {
        return this.http.put(
            `${url}/auth/student-remove-from-hall-by-student/${studentId}`,
            {}
        );
    }

    postHallManagement(data: any): Observable<any> {
        return this.http.post(`${url}/resource/hall-management-add`, data);
    }

    ///hall-management-add-by-provost
    postHallManagementByProvost(data: any): Observable<any> {
        return this.http.post(`${url}/resource/hall-management-add-by-provost`, data);
    }

    putHallManagement(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/resource/hall-management-update/${id}`,
            data
        );
    }

    deleteHallManagement(id: number): Observable<any> {
        return this.http.delete(`${url}/resource/hall-management-delete/${id}`);
    }

    //requisition-application
    getRequisitionApplications(): Observable<any> {
        return this.http.get(`${url}/resource/requisition-application`);
    }

    getRequisitionApplicationsByHead(headId: string): Observable<any> {
        return this.http.get(
            `${url}/resource/requisition-application-by-department-head/${headId}`
        );
    }

    getRequisitionApplicationsByUser(userId: string): Observable<any> {
        return this.http.get(
            `${url}/resource/requisition-application-by-user/${userId}`
        );
    }

    getRequisitionApplication(id: string): Observable<any> {
        return this.http.get(`${url}/resource/requisition-application/${id}`);
    }

    postRequisitionApplication(data: any): Observable<any> {
        return this.http.post(
            `${url}/resource/requisition-application/add`,
            data
        );
    }

    approveRequisitionApplication(id: string): Observable<any> {
        return this.http.put(`${url}/resource/approve-requisition/${id}`, {});
    }

    rejectRequisitionApplication(id: string): Observable<any> {
        return this.http.put(`${url}/resource/reject-requisition/${id}`, {});
    }

    // transport
    getTransports(): Observable<any> {
        return this.http.get(`${url}/resource/transports`);
    }

    getTransport(id: string): Observable<any> {
        return this.http.get(`${url}/resource/transport/${id}`);
    }

    createTransport(data: any): Observable<any> {
        return this.http.post(`${url}/resource/transport-add`, data);
    }

    updateTransport(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/resource/transport-update/${id}`, data);
    }

    deleteTransport(id: string): Observable<any> {
        return this.http.delete(`${url}/resource/transport-delete/${id}`);
    }

    // transport route
    getTransportRoutes(): Observable<any> {
        return this.http.get(`${url}/resource/transport-route`);
    }

    getTransportRoute(id: string): Observable<any> {
        return this.http.get(`${url}/resource/transport-route/${id}`);
    }

    getTransportRouteByTransport(id: string): Observable<any> {
        return this.http.get(
            `${url}/resource/transport-route-by-transport/${id}`
        );
    }

    createTransportRoute(data: any): Observable<any> {
        return this.http.post(`${url}/resource/transport-route-add`, data);
    }

    updateTransportRoute(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/resource/transport-route-update/${id}`,
            data
        );
    }

    deleteTransportRoute(id: string): Observable<any> {
        return this.http.delete(`${url}/resource/transport-route-delete/${id}`);
    }

    // transport schedule
    getTransportSchedules(): Observable<any> {
        return this.http.get(`${url}/resource/transport-schedule`);
    }

    getTransportSchedule(id: string): Observable<any> {
        return this.http.get(`${url}/resource/transport-schedule/${id}`);
    }

    createTransportSchedule(data: any): Observable<any> {
        return this.http.post(`${url}/resource/transport-schedule-add`, data);
    }

    updateTransportSchedule(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/resource/transport-schedule-update/${id}`,
            data
        );
    }

    deleteTransportSchedule(id: string): Observable<any> {
        return this.http.delete(
            `${url}/resource/transport-schedule-delete/${id}`
        );
    }

    // transport
    getTransportRequests(): Observable<any> {
        return this.http.get(`${url}/resource/transport-request`);
    }

    getTransportRequest(id: string): Observable<any> {
        return this.http.get(`${url}/resource/transport/${id}`);
    }

    getTransportRequestByUser(id: string): Observable<any> {
        return this.http.get(`${url}/resource/transport-request-by-user/${id}`);
    }

    createTransportRequest(data: any): Observable<any> {
        return this.http.post(`${url}/resource/transport-request-add`, data);
    }

    updateTransportRequest(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/resource/transport-request-update/${id}`,
            data
        );
    }

    deleteTransportRequest(id: string): Observable<any> {
        return this.http.get(`${url}/resource/transport-request-delete/${id}`);
    }

    assignTransportToRequest(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/resource/transport-assign-of-transport-request/${id}`,
            data
        );
    }


    // hall management

    getAllHalls(): Observable<any> {
        return this.http.get(`${url}/resource/student-hall-report`);
    }

    getAllStudentsHalls(): Observable<any> {
        return this.http.get(`${url}/resource/get-all-student-hall`);
    }



    // /resource/find-building-by-provost/6433
    getBuildingByProvost(provostId: any): Observable<any> {
        return this.http.get(`${url}/resource/find-building-by-provost/${provostId}`);
    }
    // block/by/building
    getBlockByBuilding(buildingId: any): Observable<any> {
        return this.http.get(`${url}/resource/block/by/building/${buildingId}`);
    }

    // /room/by/floor
    getRoomByFloor(floorId: any): Observable<any> {
        return this.http.get(`${url}/resource/room/by/floor/${floorId}`);
    }

    // /resource/hall-clearance-store-for-multiple-student
    getHallClearanceStoreForMultipleStudent(data: any): Observable<any> {
        return this.http.post(`${url}/resource/hall-clearance-store-for-multiple-student`, data);
    }
    ///hall-clearance-add
    addHallClearance(data: any): Observable<any> {
        return this.http.post(`${url}/resource/hall-clearance-add`, data);
    }

    // /resource/get-all-class-and-lab-room
    getAllClassAndLabRoom(): Observable<any> {
        return this.http.get(`${url}/resource/get-all-class-and-lab-room`);
    }



    // {{baseUrl}}/timetable/available-routine-slot-by-startDate-endDate-day-building-room-department/2023-05-01/2024-12-31/Sun/1/6/11
    getAvailableRoutineSlotByStartDateEndDateDayBuildingRoomDepartment(startDate: any, endDate: any, day: any, buildingId: any, roomId: any, departmentId: any): Observable<any> {
        return this.http.get(`${url}/timetable/available-routine-slot-by-startDate-endDate-day-building-room-department/${startDate}/${endDate}/${day}/${buildingId}/${roomId}/${departmentId}`);
    }




    getRoomByBlock(id: any): Observable<any> {
        return this.http.get(`${url}/resource/room/by/block/${id}`);
    }


    getHallManagementByProvost(id: any): Observable<any> {
        return this.http.get(`${url}/resource/hall-management-by-provost/${id}`);
    }



    // cancellation-list-by-provost-id
    getCancellationListByProvostId(id: any): Observable<any> {
        return this.http.get(`${url}/resource/cancellation-list-by-provost-id/${id}`);
    }


    // http://localhost:8080/api/v1/resource/hall-allotments/cancel-approved/6
    cancelApproved(id: any): Observable<any> {
        return this.http.put(`${url}/resource/hall-allotments/cancel-approved/${id}`, {});
    }


    // http://localhost:8080/api/v1/resource/hall-management-permission-delete/1
    deleteHallManagementPermission(id: any): Observable<any> {
        return this.http.delete(`${url}/resource/hall-management-permission-delete/${id}`);
    }

    // http://localhost:8080/api/v1/resource/add-hall-management-permission
    addHallManagementPermission(data: any): Observable<any> {
        return this.http.put(`${url}/resource/add-hall-management-permission`, data);
    }








    // {{baseUrl}}/resource/store-hall-master-role-employee
    storeHallMasterRoleEmployee(data: any): Observable<any> {
        return this.http.post(`${url}/resource/store-hall-master-role-employee`, data);
    }

    // {{baseUrl}}/resource/hall-master-role-employees
    getHallMasterRoleEmployees(): Observable<any> {
        return this.http.get(`${url}/resource/hall-master-role-employees`);
    }

    // {{baseUrl}}/resource/hall-master-role-employee-by-building/1
    getHallMasterRoleEmployeeByBuilding(buildingId: any): Observable<any> {
        return this.http.get(`${url}/resource/hall-master-role-employee-by-building/${buildingId}`);
    }

    // {{baseUrl}}/resource/hall-master-role-employee-by-provost/1
    getHallMasterRoleEmployeeByProvost(provostId: any): Observable<any> {
        return this.http.get(`${url}/resource/hall-master-role-employee-by-provost/${provostId}`);
    }

    // {{baseUrl}}/resource/delete-hall-master-role-employee/1
    deleteHallMasterRoleEmployee(id: any): Observable<any> {
        return this.http.delete(`${url}/resource/delete-hall-master-role-employee/${id}`);
    }



    // /find-store-admins
    findStoreAdmins(): Observable<any> {
        return this.http.get(`${url}/auth/find-store-admins`);
    }




    // /weekly-meal-by-building/{buildingId}
    getWeeklyMealByBuilding(buildingId: any): Observable<any> {
        return this.http.get(`${url}/resource/weekly-meal-by-building/${buildingId}`);
    }




    // http://localhost:8080/api/v1/resource/item-add-requests
    getItemAddRequests(): Observable<any> {
        return this.http.get(`${url}/resource/item-add-requests`);
    }

    // http://localhost:8080/api/v1/resource/item-add-request-add
    addItemAddRequest(data: any): Observable<any> {
        return this.http.post(`${url}/resource/item-add-request-add`, data);
    }
    // http://localhost:8080/api/v1/resource/item-add-request-update/1
    updateItemAddRequest(data: any, id: any): Observable<any> {
        return this.http.put(`${url}/resource/item-add-request-update/${id}`, data);
    }
    // http://localhost:8080/api/v1/resource/item-add-request-delete/1
    deleteItemAddRequest(id: any): Observable<any> {
        return this.http.delete(`${url}/resource/item-add-request-delete/${id}`);
    }
}
