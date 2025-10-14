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

const routes: Routes = [
  {
    path:'vacancy-request',
    component:VacancyRequestComponent
  },
  {
    path:'job-post-form',
    component:JobPostFormComponent
  },
  {
    path:'job-circular',
    component:JobCircularComponent
  },
  {
    path:'hr-director-approval',
    component:HrDirectorApprovalComponent
  },
  {
    path:'hr-see-shortlisted',
    component:HRSeeShorlistedComponent
  },
  {
    path:'hr-interview-schedule',
    component:HRScheduleInterviewComponent
  },
  {
    path:'interview-approval',
    component: InterviewApprovalComponent
  },
  {
    path:'offer-management',
    component:OfferManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
