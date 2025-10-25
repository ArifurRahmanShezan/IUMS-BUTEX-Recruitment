import { Component } from '@angular/core';
interface LeaveRequest {
  employeeName: string;
  leaveType: string;
  from: string;
  to: string;
  reason: string;
  status: 'Approved' | 'Pending' | 'Rejected';
}
@Component({
  selector: 'app-deparment-head-leave-management',
  templateUrl: './deparment-head-leave-management.component.html',
  styleUrls: ['./deparment-head-leave-management.component.css']
})
export class DeparmentHeadLeaveManagementComponent {

  leaveRequests: LeaveRequest[] = [
    { employeeName: 'Asif Mahmud', leaveType: 'Casual', from: '2025-09-21', to: '2025-09-25', reason: 'Family trip', status: 'Approved' },
    { employeeName: 'Jahid Hasan', leaveType: 'Earned', from: '2025-09-22', to: '2025-09-24', reason: 'Medical', status: 'Pending' },
    { employeeName: 'Rina Akter', leaveType: 'Maternity', from: '2025-09-20', to: '2026-03-20', reason: 'Maternity leave', status: 'Approved' },
    { employeeName: 'Tariq Khan', leaveType: 'Casual', from: '2025-09-23', to: '2025-09-24', reason: 'Personal', status: 'Rejected' },
    { employeeName: 'Sadia Rahman', leaveType: 'Earned', from: '2025-09-25', to: '2025-09-27', reason: 'Vacation', status: 'Pending' }
  ];

  searchTerm = '';
  selectedLeaveType = 'All';
  selectedStatus = 'All';

  showPopup = false;
  popupReason = '';
  popupEmployee = '';

  get filteredRequests() {
    return this.leaveRequests.filter(req => {
      const matchesSearch = req.employeeName.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesType = this.selectedLeaveType === 'All' || req.leaveType === this.selectedLeaveType;
      const matchesStatus = this.selectedStatus === 'All' || req.status === this.selectedStatus;
      return matchesSearch && matchesType && matchesStatus;
    });
  }

  approve(request: LeaveRequest) {
    request.status = 'Approved';
  }

  reject(request: LeaveRequest) {
    request.status = 'Rejected';
  }

  openReview(request: LeaveRequest) {
    this.popupEmployee = request.employeeName;
    this.popupReason = '';
    this.showPopup = true;
  }

  submitReview() {
    this.showPopup = false; // Do not change status
  }

  cancelReview() {
    this.showPopup = false;
  }
}

