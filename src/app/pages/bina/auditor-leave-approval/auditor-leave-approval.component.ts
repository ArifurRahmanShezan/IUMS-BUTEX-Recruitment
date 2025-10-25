import { Component } from '@angular/core';
interface Leave {
  id: number;
  leaveType: string;
  startDate: string;
  endDate: string;
  days: number;
  recommender: string;
  reason: string;
  auditor?: string;
  salaryAdjustment?: string;
  comments?: string;
  branch: string;
}

@Component({
  selector: 'app-auditor-leave-approval',
  templateUrl: './auditor-leave-approval.component.html',
  styleUrls: ['./auditor-leave-approval.component.css']
})
export class AuditorLeaveApprovalComponent {

  showPopup: boolean = false;
  searchTerm: string = '';
  isEditMode: boolean = false;

  leaves: Leave[] = [
    { id: 1, leaveType: 'Casual', startDate: '2025-09-01', endDate: '2025-09-02', days: 2, recommender: 'John Doe', reason: 'Demo reason 1', auditor: '-', salaryAdjustment: '-', comments: '-', branch: 'Gazipur Branch' },
    { id: 2, leaveType: 'Maternity', startDate: '2025-09-02', endDate: '2025-09-03', days: 2, recommender: 'John Doe', reason: 'Demo reason 2', auditor: '-', salaryAdjustment: '-', comments: '-', branch: 'Gazipur Branch' },
    { id: 3, leaveType: 'Sick', startDate: '2025-09-03', endDate: '2025-09-04', days: 2, recommender: 'John Doe', reason: 'Demo reason 3', auditor: '-', salaryAdjustment: '-', comments: '-', branch: 'Gazipur Branch' },
    { id: 4, leaveType: 'Earned', startDate: '2025-09-04', endDate: '2025-09-05', days: 2, recommender: 'John Doe', reason: 'Demo reason 4', auditor: 'Auditor A', salaryAdjustment: 'Full', comments: 'Approved', branch: 'Gazipur Branch' },
    // Add more demo data as needed
  ];

  filteredLeaves: Leave[] = [...this.leaves];
  leaveForm: Leave = { id: 0, leaveType: '', startDate: '', endDate: '', days: 0, recommender: '', reason: '', auditor: '', salaryAdjustment: '', comments: '', branch: '' };

  private nextId: number = this.leaves.length + 1;

  filterData(): void {
    const search = this.searchTerm.toLowerCase();
    this.filteredLeaves = this.leaves.filter(l =>
      l.leaveType.toLowerCase().includes(search) ||
      l.reason.toLowerCase().includes(search)
    );
  }

  openNewLeave(): void {
    this.isEditMode = false;
    this.leaveForm = { id: 0, leaveType: '', startDate: '', endDate: '', days: 0, recommender: '', reason: '', auditor: '', salaryAdjustment: '', comments: '', branch: '' };
    this.showPopup = true;
  }

  editLeave(leave: Leave): void {
    this.isEditMode = true;
    this.leaveForm = { ...leave };
    this.showPopup = true;
  }

  deleteLeave(leave: Leave): void {
    if (confirm('Are you sure to delete this leave?')) {
      this.leaves = this.leaves.filter(l => l.id !== leave.id);
      this.filterData();
    }
  }

  submitLeave(): void {
    if (this.isEditMode) {
      const index = this.leaves.findIndex(l => l.id === this.leaveForm.id);
      if (index > -1) this.leaves[index] = { ...this.leaveForm };
    } else {
      this.leaveForm.id = this.nextId++;
      this.leaves.push({ ...this.leaveForm });
    }
    this.filterData();
    this.showPopup = false;
  }
}


