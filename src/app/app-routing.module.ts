import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacancyRequestComponent } from './pages/recruitment/vacancy-request/vacancy-request.component';
import { JobPostFormComponent } from './pages/recruitment/job-post-form/job-post-form.component';
import { JobCircularComponent } from './pages/recruitment/job-circular/job-circular.component';
import { HrDirectorApprovalComponent } from './pages/recruitment/hr-director-approval/hr-director-approval.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
