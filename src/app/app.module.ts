import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacancyRequestComponent } from './pages/recruitment/vacancy-request/vacancy-request.component';
import { JobPostFormComponent } from './pages/recruitment/job-post-form/job-post-form.component';
import { JobCircularComponent } from './pages/recruitment/job-circular/job-circular.component';
import { HrDirectorApprovalComponent } from './pages/recruitment/hr-director-approval/hr-director-approval.component';
import { HRSeeShorlistedComponent } from './pages/recruitment/hr-see-shorlisted/hr-see-shorlisted.component';
import { HRScheduleInterviewComponent } from './pages/recruitment/hr-schedule-interview/hr-schedule-interview.component';
import { } from './pages/recruitment/hr-schedule-interview/hr-schedule-interview.component';
import { InterviewApprovalComponent } from './pages/recruitment/interview-approval/interview-approval.component';
import { OfferManagementComponent } from './pages/recruitment/offer-management/offer-management.component';
import { ExperienceCertificateApplyComponent } from './pages/recruitment/experience-certificate-apply/experience-certificate-apply.component';
import { PendingApplicationComponent } from './pages/recruitment/pending-application/pending-application.component';
import { HRAttendenceExcelComponent } from './pages/recruitment/hr-attendence-excel/hr-attendence-excel.component';
import { DhEmployeeAttendenceComponent } from './pages/recruitment/dh-employee-attendence/dh-employee-attendence.component';
import { EmployeeServiceBookComponent } from './pages/recruitment/employee-service-book/employee-service-book.component';
import { HrDashboardComponent } from './pages/recruitment/hr-dashboard/hr-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    VacancyRequestComponent,
    JobPostFormComponent,
    JobCircularComponent,
    HrDirectorApprovalComponent,
    HRSeeShorlistedComponent,
    HRScheduleInterviewComponent,
    InterviewApprovalComponent,
    OfferManagementComponent,
    ExperienceCertificateApplyComponent,
    PendingApplicationComponent,
    HRAttendenceExcelComponent,
    DhEmployeeAttendenceComponent,
    EmployeeServiceBookComponent,
    HrDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
