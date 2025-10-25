import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url } from "../core/models/API";
import { GenericResponse } from "../core/models/GenericResponse";
import {
    Contact,
    Information,
    President,
    Publishing,
    TeachingStaff,
} from "../core/models/UniversityInformation";

@Injectable({
    providedIn: "root",
})
export class UniversityService {
    constructor(private http: HttpClient) {}

    getUniversity(): Observable<any> {
        return this.http.get(`${url}/university`);
    }

    getAbout(): Observable<GenericResponse<Information>> {
        return this.http.get<GenericResponse<Information>>(
            `${url}/university/information/about`
        );
    }

    getHistory(): Observable<GenericResponse<History>> {
        return this.http.get<GenericResponse<History>>(
            `${url}/university/information/history`
        );
    }

    getPresident(): Observable<GenericResponse<President>> {
        return this.http.get<GenericResponse<President>>(
            `${url}/university/information/president`
        );
    }
    getTeachingStaff(): Observable<GenericResponse<TeachingStaff>> {
        return this.http.get<GenericResponse<TeachingStaff>>(
            `${url}/university/information/teaching-staff`
        );
    }

    getPublishing(): Observable<GenericResponse<Publishing>> {
        return this.http.get<GenericResponse<Publishing>>(
            `${url}/university/information/publishing`
        );
    }

    getContact(): Observable<GenericResponse<Contact>> {
        return this.http.get<GenericResponse<Contact>>(
            `${url}/university/contact`
        );
    }

    getOnePhoneNumber(id: string): Observable<any> {
        return this.http.get(`${url}/university/contact/phone-number/${id}`);
    }

    createPhoneNumber(data: any): Observable<any> {
        return this.http.post(`${url}/university/contact/phone-number`, data);
    }

    updatePhoneNumber(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/university/contact/phone-number/${id}`,
            data
        );
    }

    deletePhoneNumber(phoneNumberId: string): Observable<any> {
        return this.http.delete(
            `${url}/university/contact/phone-number/${phoneNumberId}`
        );
    }

    // country api's
    getCountryList(): Observable<any> {
        return this.http.get(`${url}/university/country`);
    }
    getOneCountry(countryId: string): Observable<any> {
        return this.http.get(`${url}/university/country/${countryId}`);
    }
    createCountry(data: any): Observable<any> {
        return this.http.post(`${url}/university/country/add`, data);
    }
    updateCountry(data: any, countryId: string): Observable<any> {
        return this.http.put(
            `${url}/university/country/update/${countryId}`,
            data
        );
    }
    deleteCountry(countryId: string): Observable<any> {
        return this.http.delete(
            `${url}/university/country/delete/${countryId}`
        );
    }

    // city api's
    getCityList(): Observable<any> {
        return this.http.get(`${url}/university/city`);
    }
    getOneCity(cityId: string): Observable<any> {
        return this.http.get(`${url}/university/city/${cityId}`);
    }
    createCity(data: any): Observable<any> {
        return this.http.post(`${url}/university/city/add`, data);
    }
    updateCity(data: any, cityId: string): Observable<any> {
        return this.http.put(`${url}/university/city/update/${cityId}`, data);
    }
    deleteCity(cityId: string): Observable<any> {
        return this.http.delete(`${url}/university/city/delete/${cityId}`);
    }

    //University address
    getAddressList(): Observable<any> {
        return this.http.get(`${url}/university/contact/address`);
    }
    getOneAddress(addressId: string): Observable<any> {
        return this.http.get(`${url}/university/contact/address/${addressId}`);
    }
    createAddress(data: any): Observable<any> {
        return this.http.post(`${url}/university/contact/address`, data);
    }
    updateAddress(id: string, data: any): Observable<any> {
        return this.http.put(`${url}/university/contact/address/${id}`, data);
    }
    deleteAddress(id: string): Observable<any> {
        return this.http.delete(`${url}/university/contact/address/${id}`);
    }

    // location
    getLocationList(): Observable<any> {
        return this.http.get(`${url}/university/location`);
    }
    getOneLocation(locationId: string): Observable<any> {
        return this.http.get(`${url}/university/location/${locationId}`);
    }
    createLocation(data: any): Observable<any> {
        return this.http.post(`${url}/university/location/add`, data);
    }
    updateLocation(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/university/location/update/${id}`, data);
    }
    deleteLocation(id: string): Observable<any> {
        return this.http.delete(`${url}/university/location/delete/${id}`);
    }

    // Campus
    getCampusList(): Observable<any> {
        return this.http.get(`${url}/university/campus`);
    }
    getOneCampus(campusId: string): Observable<any> {
        return this.http.get(`${url}/university/campus/${campusId}`);
    }
    createCampus(data: any): Observable<any> {
        return this.http.post(`${url}/university/campus/add`, data);
    }
    updateCampus(data: any, id: string): Observable<any> {
        return this.http.put(`${url}/university/campus/update/${id}`, data);
    }
    deleteLCampus(id: string): Observable<any> {
        return this.http.delete(`${url}/university/campus/delete/${id}`);
    }

    // faq api endpoint
    getFAQList(): Observable<any> {
        return this.http.get(`${url}/university/faq`);
    }
    getOneFAQ(faqId: string): Observable<any> {
        return this.http.get(`${url}/university/faq/${faqId}`);
    }
    createFAQ(data: any): Observable<any> {
        return this.http.post(`${url}/university/faq-add`, data);
    }
    updateFAQ(data: any, faqId: string): Observable<any> {
        return this.http.put(`${url}/university/faq-update/${faqId}`, data);
    }
    deleteFAQ(faqId: string): Observable<any> {
        return this.http.delete(`${url}/university/faq-delete/${faqId}`);
    }

    // mission & vision
    postMissionAndVision(data: any): Observable<any> {
        return this.http.post(
            `${url}/university/university-mission-and-vision-add`,
            data
        );
    }

    getMissions(): Observable<any> {
        return this.http.get(`${url}/university/university-mission`);
    }

    getVisions(): Observable<any> {
        return this.http.get(`${url}/university/university-vision`);
    }

    updateMission(data: any, missionId: number): Observable<any> {
        return this.http.put(
            `${url}/university/university-mission-update/${missionId}`,
            data
        );
    }

    updateVision(data: any, missionId: number): Observable<any> {
        return this.http.put(
            `${url}/university/university-vision-update/${missionId}`,
            data
        );
    }

    deleteMission(missionId: number): Observable<any> {
        return this.http.delete(
            `${url}/university/university-mission-delete/${missionId}`
        );
    }

    deleteVision(visionId: number): Observable<any> {
        return this.http.delete(
            `${url}/university/university-vision-delete/${visionId}`
        );
    }

    // external university
    getExternalUniversities(): Observable<any> {
        return this.http.get(`${url}/university/external-universities`);
    }
    getSingleExternalUniversity(id: string): Observable<any> {
        return this.http.get(`${url}/university/external-university/${id}`);
    }
    createExternalUniversity(data: any): Observable<any> {
        return this.http.post(
            `${url}/university/external-university-add`,
            data
        );
    }
    updateExternalUniversity(data: any, id: string): Observable<any> {
        return this.http.put(
            `${url}/university/external-university-update/${id}`,
            data
        );
    }
}
