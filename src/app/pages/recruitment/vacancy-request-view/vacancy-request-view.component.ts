import { Component } from '@angular/core';

@Component({
  selector: 'app-vacancy-request-view',
  templateUrl: './vacancy-request-view.component.html',
  styleUrls: ['./vacancy-request-view.component.css']
})
export class VacancyRequestViewComponent {

  searchText: string = "";

  department = "Department of Yarn Engineering";

  justification =
    "“Justification” explains the rationale for a decision or study, while “remarks” provide brief supportive comments.";

  date = "12/02/2025";

  showReasonModal = false;
  reasonText = "";
  selectedRow: any = null;

  vacancyRequests = [
    {
      designation: 'Professor',
      proposed: '05',
      current: '04',
      ugcApproved: '01',
      required: '01',
      hrDirectorStatus: 'Pending',
      registrarStatus: 'Pending',
      vcStatus: 'Pending'
    },
    {
      designation: 'Associate Professor',
      proposed: '05',
      current: '04',
      ugcApproved: '01',
      required: '01',
      hrDirectorStatus: 'Pending',
      registrarStatus: 'Pending',
      vcStatus: 'Pending'
    },
    {
      designation: 'Lecturer',
      proposed: '05',
      current: '04',
      ugcApproved: '01',
      required: '01',
      hrDirectorStatus: 'Pending',
      registrarStatus: 'Pending',
      vcStatus: 'Pending'
    },
    {
      designation: 'Professor',
      proposed: '05',
      current: '04',
      ugcApproved: '01',
      required: '01',
      hrDirectorStatus: 'Pending',
      registrarStatus: 'Pending',
      vcStatus: 'Pending'
    }
  ];

  filteredRequests = [...this.vacancyRequests];

  filterTable() {
    const text = this.searchText.toLowerCase();
    this.filteredRequests = this.vacancyRequests.filter(item =>
      item.designation.toLowerCase().includes(text)
    );
  }

  approve(row: any) {
    // row.hrDirectorStatus = 'Approved';
    // row.registrarStatus = 'Approved';
    // row.vcStatus = 'Approved';
  }

  // Open modal on reject
  reject(row: any) {
    this.selectedRow = row;
    this.showReasonModal = true;
  }

  // Close modal
  closeReasonModal() {
    this.showReasonModal = false;
    this.reasonText = "";
  }

  // Submit Reason
  submitReason() {
    if (!this.reasonText.trim()) return;

    // this.selectedRow.hrDirectorStatus = 'Rejected';
    // this.selectedRow.registrarStatus = 'Rejected';
    // this.selectedRow.vcStatus = 'Rejected';
    this.selectedRow.reason = this.reasonText;

    this.closeReasonModal();
  }

}
