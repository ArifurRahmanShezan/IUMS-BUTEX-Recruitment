import { HrService } from './../../../services/hr.service';
import { FacultyService } from './../../../services/faculty.service';
import { ToastrService } from 'ngx-toastr';
import { PdfService } from './../../../services/pdf-service.service';
import { Component } from '@angular/core';
import { RecruitmentService } from 'src/app/services/recruitment.service';

@Component({
  selector: 'app-vacancy-request',
  templateUrl: './vacancy-request.component.html',
  styleUrls: ['./vacancy-request.component.css']
})
export class VacancyRequestComponent {
  modalOpen = false;
  editIndex = -1;

  constructor(private PdfService: PdfService, private toast: ToastrService, private facultyService: FacultyService, private hrService: HrService, private recruitmentService: RecruitmentService) { 

  }


  ngOnInit() {
    this.getAllDepartment();
    
  }







  departmentOrgData: { [key: string]: { position: string; total: number; booked: number; }[] } = {
    "HR & Admin": [
      { position: "HR Officer", total: 3, booked: 2 },
      { position: "Recruiter", total: 2, booked: 1 }
    ],
    "Department of Yarn Engineering": [
      { position: "Professor", total: 5, booked: 4 },
      { position: "Lecturer", total: 6, booked: 4 }
    ]
  };

  deptKeys = Object.keys(this.departmentOrgData);
  positions: any[] = [];
  selectedDepartment = '';
  selectedPositionIndex: any = '';
  selectedOrg: any = null;
  numMembers = 0;
  remarks = '';
  requestedDate = '';
  vacancyData: any[] = [];
  jobType: any = '';

  attachment: any = '';
  selecteDesignation: any = '';




  //   payload = {
  //   reason: "Expansion of AI program",
  //   jobType: "full-time",
  //   numberOfPositions: 1,
  //   departmentId: 1,
  //   designationId: 1,
  //   attachment :"awshdh"
  // }









  openModal() {
    this.modalOpen = true;
    //this.PdfService.generatePdf('Ryan', 'Fakkeenya Seervisii PDF Angular 16');

  }
  closeModal() {
    this.modalOpen = false;
    this.editIndex = -1;
  }

  loadPositions() {
    this.positions = this.departmentOrgData[this.selectedDepartment] || [];
    this.selectedOrg = null;
  }

  showOrgChart() {
    if (this.selectedDepartment && this.selectedPositionIndex !== '') {
      this.selectedOrg = this.positions[this.selectedPositionIndex];
    }
  }

  submitVacancy() {
    // if (!this.selectedOrg) return;

    const newVacancy = {
      departmentId: this.selectedDepartment,
      reason: this.remarks,
      jobType: this.jobType,
      numberOfPositions: this.numMembers,
      designationId: this.selecteDesignation,
      attachment: this.attachment
    };
    this.recruitmentService.addVacancyRequest(newVacancy).subscribe(
    (res: any) => {
      if (res.errors) {
        this.toast.error(res.errors);
      } else {
        this.toast.success("Vacancy Request Submitted Successfully");
        this.vacancyData.push(res.payload); 
        this.closeModal();
      }
    },
    () => this.toast.error("Failed to submit vacancy")
  );

    // if (this.editIndex > -1) {

    //   this.vacancyData[this.editIndex] = newVacancy;
    //   this.editIndex = -1;
    // } else {

    //   this.vacancyData.push(newVacancy);
    // }



    console.log(newVacancy, 'payload');


    this.closeModal();
  }

  viewVacancy(v: any) {
    alert(
      `Department: ${v.department}\n` +
      `Position: ${v.position}\n` +
      `Members Requested: ${v.membersRequested}\n` +
      `Remarks: ${v.remarks}\n` +
      `Requested Date: ${v.requestedDate}\n` +
      `Status: ${v.status}`
    );
  }

  cancelEdit() {
    // Close modal without saving
    this.modalOpen = false;

    // Reset edit index
    this.editIndex = -1;

    // Optional: reset form fields
    this.selectedDepartment = '';
    this.selectedPositionIndex = '';
    this.selectedOrg = null;
    this.numMembers = 0;
    this.remarks = '';
    this.requestedDate = '';
  }


  editVacancy(i: number) {
    const v = this.vacancyData[i];
    this.editIndex = i;
    this.selectedDepartment = v.department;
    this.loadPositions();
    this.selectedPositionIndex = this.positions.findIndex(p => p.position === v.position);
    this.selectedOrg = this.positions[this.selectedPositionIndex];
    this.numMembers = v.membersRequested;
    this.remarks = v.remarks;
    this.requestedDate = v.requestedDate;
    this.openModal();
  }

  deleteVacancy(i: number) {
    if (confirm("Delete this request?")) {
      this.vacancyData.splice(i, 1);
    }
  }



  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        this.toast.warning("Only PNG or JPG files are allowed!");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("reportProgress", "true");

      this.facultyService.uploadFile(formData).subscribe(
        (response: any) => {
          this.attachment = response.payload;
        },
        (error) => {
          this.toast.warning("Select file again!");
        }
      );
    }
  }




  department: any[] = [];
  getAllDepartment() {
    this.facultyService.getAllDepartment().subscribe((res: any) => {
      if (res.errors != undefined) {
        this.toast.error(res.payload);
      } else {
        this.department = res.payload
        console.log(this.department, 'department');

      }
    })
  }


  allDesignations: any[] = [];

  getAllJobPositions() {
    this.hrService.getDesignations().subscribe((res: any) => {
      if (res.errors != undefined) {
        this.toast.error(res.payload);
      } else {
        this.allDesignations = res.payload
        console.log(this.allDesignations, 'allDesignations');

      }
    })
  }




}
