import { PdfService } from './../../../services/pdf-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vacancy-request',
  templateUrl: './vacancy-request.component.html',
  styleUrls: ['./vacancy-request.component.css']
})
export class VacancyRequestComponent {
  modalOpen = false;
  editIndex = -1;

  constructor(private PdfService: PdfService) {

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

  openModal() {
    //  this.modalOpen = true; 
    this.PdfService.generatePdf('Ryan', 'Fakkeenya Seervisii PDF Angular 16');

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
    if (!this.selectedOrg) return;

    const newVacancy = {
      department: this.selectedDepartment,
      position: this.selectedOrg.position,
      total: this.selectedOrg.total,
      booked: this.selectedOrg.booked,
      vacancy: this.selectedOrg.total - this.selectedOrg.booked,
      membersRequested: this.numMembers,
      remarks: this.remarks,
      requestedDate: this.requestedDate,
      status: 'Submitted'
    };

    if (this.editIndex > -1) {

      this.vacancyData[this.editIndex] = newVacancy;
      this.editIndex = -1;
    } else {

      this.vacancyData.push(newVacancy);
    }

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
}
