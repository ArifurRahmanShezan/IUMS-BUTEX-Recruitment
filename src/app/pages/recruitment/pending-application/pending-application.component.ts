import { Component } from '@angular/core';
interface Application {
  name: string;
  employeeId: string;
  department: string;
  designation: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  email: string;
  phone: string;
  joinDate: string;
}
@Component({
  selector: 'app-pending-application',
  templateUrl: './pending-application.component.html',
  styleUrls: ['./pending-application.component.css']
})
export class PendingApplicationComponent {
applications: Application[] = [
    {
      name: 'John Doe',
      employeeId: 'EMP001',
      department: 'IT',
      designation: 'Software Engineer',
      status: 'Pending',
      email: 'john.doe@example.com',
      phone: '01712345678',
      joinDate: '2020-01-15'
    },
    {
      name: 'Jane Smith',
      employeeId: 'EMP002',
      department: 'HR',
      designation: 'HR Officer',
      status: 'Pending',
      email: 'jane.smith@example.com',
      phone: '01798765432',
      joinDate: '2021-03-10'
    },
    {
      name: 'Mike Johnson',
      employeeId: 'EMP003',
      department: 'Finance',
      designation: 'Accountant',
      status: 'Pending',
      email: 'mike.johnson@example.com',
      phone: '01699887766',
      joinDate: '2019-09-01'
    }
  ];

  selectedApplication: Application | null = null;
  modalOpen = false;

  viewApplication(app: Application) {
    this.selectedApplication = app;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  approveApplication(index: number) {
    this.applications[index].status = 'Approved';
  }

  rejectApplication(index: number) {
    this.applications[index].status = 'Rejected';
  }
}
