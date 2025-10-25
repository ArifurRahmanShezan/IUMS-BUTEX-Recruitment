import { Component } from '@angular/core';
interface Leave {
  id: number; // added unique id
  leaveType: string;
  startDate: string;
  endDate: string;
  days: number;
  recommender: string;
  reason: string;
  branch: string;
}
@Component({
  selector: 'app-department-head-leave-approval',
  templateUrl: './department-head-leave-approval.component.html',
  styleUrls: ['./department-head-leave-approval.component.css']
})
export class DepartmentHeadLeaveApprovalComponent {
showPopup: boolean = false;
  searchTerm: string = '';

  leaves: Leave[] = [
    { id: 1, leaveType: 'Casual', startDate: '2025-09-01', endDate: '2025-09-03', days: 3, recommender: 'John', reason: 'Personal work', branch: 'Gazipur Branch' },
    { id: 2, leaveType: 'Earned', startDate: '2025-09-04', endDate: '2025-09-06', days: 3, recommender: 'Mary', reason: 'Vacation', branch: 'Gazipur Branch' },
    { id: 3, leaveType: 'Maternity', startDate: '2025-08-01', endDate: '2025-12-01', days: 123, recommender: 'Anna', reason: 'Child birth', branch: 'Gazipur Branch' },
    { id: 4, leaveType: 'Casual', startDate: '2025-07-20', endDate: '2025-07-22', days: 3, recommender: 'David', reason: 'Family event', branch: 'Gazipur Branch' }
  ];

  filteredLeaves: Leave[] = [...this.leaves];

  leaveForm: Leave = { id: 0, leaveType: '', startDate: '', endDate: '', days: 0, recommender: '', reason: '', branch: '' };
  isEditMode: boolean = false;

  private nextId: number = 5; // to assign ID for new leave

  filterData(): void {
    const search = this.searchTerm.toLowerCase();
    this.filteredLeaves = this.leaves.filter(l =>
      l.leaveType.toLowerCase().includes(search) ||
      l.reason.toLowerCase().includes(search)
    );
  }

  openNewLeave(): void {
    this.isEditMode = false;
    this.leaveForm = { id: 0, leaveType: '', startDate: '', endDate: '', days: 0, recommender: '', reason: '', branch: '' };
    this.showPopup = true;
  }

  editLeave(leave: Leave): void {
    this.isEditMode = true;
    this.leaveForm = { ...leave }; // copy selected leave
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
      // Update existing leave by id
      const index = this.leaves.findIndex(l => l.id === this.leaveForm.id);
      if (index > -1) this.leaves[index] = { ...this.leaveForm };
    } else {
      // Add new leave with unique id
      this.leaveForm.id = this.nextId++;
      this.leaves.push({ ...this.leaveForm });
    }
    this.filterData();
    this.showPopup = false;
  }
}
