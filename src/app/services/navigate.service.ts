import { Injectable } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class NavigateService {
    constructor(private router: Router, private location: Location) { }

    toDashboard(): void {
        const roles: any = JSON.parse(localStorage.getItem("user") as string).roles;
        if (roles) {
            if (roles.includes("EXAM_CONTROLLER")) {
                this.router.navigate(["/dashboard/exam-office"]);
            } else if (roles.includes("ADMIN")) {
                this.router.navigate(["/dashboard/admin"]);
            } else if (roles.includes("STUDENT")) {
                this.router.navigate(["/dashboard/student/dashboard"]);
            } else if (roles.includes("TEACHER")) {
                this.router.navigate(["/dashboard/teacher/dashboard"]);
            } else if (roles.includes("PARENTS")) {
                this.router.navigate(["/dashboard/parent"]);
            } else if (roles.includes("DEPARTMENT_HEAD")) {
                this.router.navigate(["/dashboard/department-head/quick-menu"]);
            } else if (roles.includes("DEAN")) {
                this.router.navigate(["/dashboard/dean/dashboard"]);
            } else if (roles.includes("REGISTRAR")) {
                this.router.navigate(["/dashboard/registrar/dashboard"]);
            } else if (roles.includes("COUNSELLOR")) {
                this.router.navigate(["/dashboard/counselor"]);
            } else if (roles.includes("ADMISSION_COUNSELOR")) {
                this.router.navigate(["/dashboard/counselor"]);
            } else if (roles.includes("ALUMNI")) {
                this.router.navigate(["/dashboard/alumni"]);
            } else if (roles.includes("EXTERNAL_EXAMINER")) {
                this.router.navigate(["/dashboard/external-examiner"]);
            } else if (roles.includes("VICE_CHANCELLOR")) {
                this.router.navigate(["/dashboard/vc"]);
            } else if (roles.includes("HUMAN_RESOURCE_OFFICER")) {
                this.router.navigate(["/dashboard/human-resource"]);
            }
            else if (roles.includes("ACCOUNTANT")) {
                this.router.navigate(["/dashboard/accounts"]);
            }
            else if (roles.includes("ACCOUNTS_ASSISTANT_DIRECTOR")) {
                this.router.navigate(["/dashboard/accounts"]);
            }
            else if (roles.includes("ACCOUNTS_DEPUTY_DIRECTOR")) {
                this.router.navigate(["/dashboard/accounts"]);
            }
            else if (roles.includes("ACCOUNTS_SECTION_OFFICER")) {
                this.router.navigate(["/dashboard/accounts"]);
            }
            else if (roles.includes("ACCOUNTS_DIRECTOR")) {
                this.router.navigate(["/dashboard/accounts"]);
            }
            else if (roles.includes("ACCOUNTS_SENIOR_SECTION_OFFICER")) {
                this.router.navigate(["/dashboard/accounts"]);
            }






            else if (roles.includes("ACCOUNTANT_PAYROLL")) {
                this.router.navigate(["/dashboard/accounts"]);
            } else if (roles.includes("ACCOUNTANT_FEES")) {
                this.router.navigate(["/dashboard/accounts"]);
            } else if (roles.includes("PROVOST")) {
                this.router.navigate(["/dashboard/hall-provost"]);
            } else if (roles.includes("STORE_ADMIN")) {
                this.router.navigate(["/dashboard/store"]);
            } else if (roles.includes("TRANSPORT_ADMIN")) {
                this.router.navigate(["/dashboard/transport"]);
            } else if (roles.includes("WARDEN")) {
                this.router.navigate(["/dashboard/warden"]);
            } else if (roles.includes("STAFF")) {
                this.router.navigate(["/dashboard/staff"]);
            } else if (roles.includes("PROCTOR")) {
                this.router.navigate(["/dashboard/proctor-office"]);
            } else if (roles.includes("RESEARCH_DIRECTOR")) {
                this.router.navigate(["/dashboard/research-director"]);
            }
            else if (roles.includes("ASSISTANT_PROVOST")) {
                this.router.navigate(["/dashboard/assistant-provost"]);
            }
            else if (roles.includes("ADMINISTRATIVE_EMPLOYEE_HALL")) {
                this.router.navigate(["/dashboard/hall-admin-employee"]);
            }
            else if (roles.includes("HOUSE_TUTOR")) {
                this.router.navigate(["/dashboard/house-tutor"]);
            }
            else if (roles.includes("PROCUREMENT_DIRECTOR")) {
                this.router.navigate(["/dashboard/pnd"]);
            }
            else if (roles.includes("PROCUREMENT_OFFICER")) {
                this.router.navigate(["/dashboard/pnd-officer"]);
            }
            // else if (roles.includes("PROCUREMENT_OFFICER")) {
            //     this.router.navigate(["/dashboard/accounts-officer"]);
            // }
            else if (roles.includes("AUDITOR")) {
                this.router.navigate(["/dashboard/auditor"]);
            }

        } else {
            this.router.navigate([""]);
            console.log('sdfsdf');

        }
    }

    goBack(): void {
        this.location.back();
    }
}
