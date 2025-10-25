import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacancyRequestComponent } from './pages/recruitment/vacancy-request/vacancy-request.component';
import { JobPostFormComponent } from './pages/recruitment/job-post-form/job-post-form.component';
import { JobCircularComponent } from './pages/recruitment/job-circular/job-circular.component';
import { HrDirectorApprovalComponent } from './pages/recruitment/hr-director-approval/hr-director-approval.component';
import { HRSeeShorlistedComponent } from './pages/recruitment/hr-see-shorlisted/hr-see-shorlisted.component';
import { HRScheduleInterviewComponent } from './pages/recruitment/hr-schedule-interview/hr-schedule-interview.component';
import { InterviewApprovalComponent } from './pages/recruitment/interview-approval/interview-approval.component';
import { OfferManagementComponent } from './pages/recruitment/offer-management/offer-management.component';
import { ExperienceCertificateApplyComponent } from './pages/recruitment/experience-certificate-apply/experience-certificate-apply.component';
import { PendingApplicationComponent } from './pages/recruitment/pending-application/pending-application.component';
import { HRAttendenceExcelComponent } from './pages/recruitment/hr-attendence-excel/hr-attendence-excel.component';
import { DhEmployeeAttendenceComponent } from './pages/recruitment/dh-employee-attendence/dh-employee-attendence.component';
import { EmployeeServiceBookComponent } from './pages/recruitment/employee-service-book/employee-service-book.component';
import { HrDashboardComponent } from './pages/recruitment/hr-dashboard/hr-dashboard.component';
import { PdfTrialComponent } from './pages/recruitment/pdf-trial/pdf-trial.component';
import { LeaveApprovalComponent } from './pages/bina/leave-approval/leave-approval.component';
import { AuditorLeaveApprovalComponent } from './pages/bina/auditor-leave-approval/auditor-leave-approval.component';
import { DepartmentHeadLeaveApprovalComponent } from './pages/bina/department-head-leave-approval/department-head-leave-approval.component';
import { DeparmentHeadLeaveManagementComponent } from './pages/bina/deparment-head-leave-management/deparment-head-leave-management.component';
import { DepartmentHeadTourApprovalComponent } from './pages/bina/department-head-tour-approval/department-head-tour-approval.component';
// import { LeaveApprovalComponent } from './pages/bina/leave-approval/leave-approval.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'vacancy-request',
    pathMatch: 'full'

  },

  {
    path: 'pdf-trial',
    component: PdfTrialComponent
  },
  {
    path: 'vacancy-request',
    component: VacancyRequestComponent
  },
  {
    path: 'job-post-form',
    component: JobPostFormComponent
  },
  {
    path: 'job-circular',
    component: JobCircularComponent
  },
  {
    path: 'hr-director-approval',
    component: HrDirectorApprovalComponent
  },
  {
    path: 'hr-see-shortlisted',
    component: HRSeeShorlistedComponent
  },
  {
    path: 'hr-interview-schedule',
    component: HRScheduleInterviewComponent
  },
  {
    path: 'interview-approval',
    component: InterviewApprovalComponent
  },
  {
    path: 'offer-management',
    component: OfferManagementComponent
  },
  {
    path: 'experience-certificate-apply',
    component: ExperienceCertificateApplyComponent
  },
  {
    path: 'pending-application',
    component: PendingApplicationComponent
  },
  {
    path: 'hr-attendence-excel',
    component: HRAttendenceExcelComponent
  },
  {
    path: 'dh-employee-attendence',
    component: DhEmployeeAttendenceComponent
  },
  {
    path: 'employee-service-book',
    component: EmployeeServiceBookComponent
  },
  {
    path: 'hr-dashboard',
    component: HrDashboardComponent
  },

  {
    path:'bina',
    children:[
      {
    path: 'leave-approval',
    component:LeaveApprovalComponent
  },
  {
    path: 'auditor-leave-approval',
    component:AuditorLeaveApprovalComponent
  },
  {
    path: 'department-head-leave-approval',
    component:DepartmentHeadLeaveApprovalComponent
  },
  {
    path: 'deparment-head-leave-management',
    component:DeparmentHeadLeaveManagementComponent
  },
  {
    path:'depatment-head-tour-approval',
    component:DepartmentHeadTourApprovalComponent
  }
    ]
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
