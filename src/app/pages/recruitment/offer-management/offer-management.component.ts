import { Component } from '@angular/core';

@Component({
  selector: 'app-offer-management',
  templateUrl: './offer-management.component.html',
  styleUrls: ['./offer-management.component.css']
})
export class OfferManagementComponent {
     candidates = [
    { name: 'John Doe', position: 'Software Engineer', status: 'Pending' },
    { name: 'Jane Smith', position: 'UI/UX Designer', status: 'Sent' },
    { name: 'Michael Lee', position: 'Backend Developer', status: 'Accepted' },
    { name: 'Sara Khan', position: 'Project Manager', status: 'Pending' },
    { name: 'David Brown', position: 'QA Engineer', status: 'Rejected' }
  ];

  selectedCandidate: any = null;
  viewingCandidate: any = null;

  offer = {
    candidateName: '',
    positionTitle: '',
    salary: '',
    joiningDate: '',
    preview: '',
    status: 'Pending'
  };

  editCandidate(candidate: any) {
    this.selectedCandidate = candidate;
    this.offer.candidateName = candidate.name;
    this.offer.positionTitle = candidate.position;
    this.offer.salary = candidate.salary || '';
    this.offer.joiningDate = candidate.joiningDate || '';
    this.offer.preview = candidate.preview || '';
    this.offer.status = candidate.status || 'Pending';
  }

  sendOffer() {
    if (this.selectedCandidate) {
      this.selectedCandidate.salary = this.offer.salary;
      this.selectedCandidate.joiningDate = this.offer.joiningDate;
      this.selectedCandidate.preview = this.offer.preview;
      this.selectedCandidate.status = this.offer.status;

      alert(`Offer for ${this.selectedCandidate.name} updated successfully!`);
      this.resetForm();
    }
  }

  viewCandidate(candidate: any) {
    this.viewingCandidate = candidate;
  }

  closeModal() {
    this.viewingCandidate = null;
  }

  resetForm() {
    this.offer = {
      candidateName: '',
      positionTitle: '',
      salary: '',
      joiningDate: '',
      preview: '',
      status: 'Pending'
    };
    this.selectedCandidate = null;
  }

  getStatusClass(status: string) {
    return {
      'status-pending': status === 'Pending',
      'status-sent': status === 'Sent',
      'status-accepted': status === 'Accepted',
      'status-rejected': status === 'Rejected'
    };
  }
}
