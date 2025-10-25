import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "./auth.service";
@Injectable({
    providedIn: "root",
})
export class ErrorService {
    constructor(
        private toast: ToastrService,
        private authService: AuthService
    ) {}

    // private errors: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(
    //     []
    // );

    // setErrors(errors: string[]): void {
    //     this.errors.next(errors);
    // }

    // getErrors(): Subject<string[]> {
    //     return this.errors;
    // }

    // clear() {
    //     this.errors.complete();
    // }

    private errors: string[] = [];

    getErrors(): string[] {
        return this.errors;
    }

    setErrors(errors: string[]) {
        this.errors = errors;
    }

    handleError(error: any, actionType: string, objectName: string): void {
        console.error(`Error ${actionType} ${objectName}: `, error);
        if (error.status === 401) {
            this.toast.error("Your session has expired. Please login again.");
            this.authService.logout();
        } else if (error.status === 500) {
            this.toast.error(
                `Oops! Something went wrong on the server while ${actionType} ${objectName}. Please try again later.`
            );
        } else if (error.status === 400) {
            this.toast.error(
                `Bad Request, Invalid parameters while ${actionType} ${objectName}. Please check the input and try again later.`
            );
        } else if (error.status === 409) {
            this.toast.error(
                `Conflict, ${objectName} already exists, please check the input and try again later.`
            );
        } else {
            this.toast.error(
                `Oops! Something went wrong while ${actionType} ${objectName}. Please try again later.`
            );
        }
    }
}
