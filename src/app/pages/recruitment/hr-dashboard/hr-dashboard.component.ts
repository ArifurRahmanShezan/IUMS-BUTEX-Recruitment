import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrDashboardComponent {

  employee = {
    name: 'Asif Mahmud Akash',
    id: 'BUTEX-HR-001',
    department: 'Human Resources',
    designation: 'Assistant Manager (Grade 9)',
    joiningDate: '2015-01-05',
    retirementDate: '2030-12-31',
    status: 'Confirmed',
    scale: 'BPS-17 (Senior Officer)'
  };

  events = [
    {
      type: 'Appointment',
      startDate: '2015-01-05',
      endDate: '2015-01-05',
      department: 'HR',
      grade: 'Officer (BPS-16)',
      remarks: 'Initial appointment as Officer',
      status: 'Verified'
    },
    {
      type: 'Confirmation',
      startDate: '2016-01-05',
      endDate: '2016-01-05',
      department: 'HR',
      grade: 'Officer (BPS-16)',
      remarks: 'Confirmed after probation',
      status: 'Verified'
    },
    {
      type: 'Promotion',
      startDate: '2017-03-01',
      endDate: '2017-03-01',
      department: 'HR',
      grade: 'Senior Officer (BPS-17)',
      remarks: 'Promoted to Senior Officer',
      status: 'Pending'
    },
    {
      type: 'Training',
      startDate: '2018-08-15',
      endDate: '2018-08-30',
      department: 'HR',
      grade: 'Senior Officer (BPS-17)',
      remarks: 'HR Policy & Management Training, Dhaka',
      status: 'Verified'
    },
    {
      type: 'Leave',
      startDate: '2019-12-01',
      endDate: '2019-12-15',
      department: 'HR',
      grade: 'Senior Officer (BPS-17)',
      remarks: 'Casual leave for family reasons',
      status: 'Verified'
    },
    {
      type: 'Penalty',
      startDate: '2020-06-10',
      endDate: '2020-06-10',
      department: 'HR',
      grade: 'Senior Officer (BPS-17)',
      remarks: 'Late submission of HR report',
      status: 'Flagged'
    },
    {
      type: 'Promotion',
      startDate: '2022-02-01',
      endDate: '2022-02-01',
      department: 'HR',
      grade: 'Assistant Manager (BPS-18)',
      remarks: 'Promoted to Assistant Manager',
      status: 'Verified'
    },
    {
      type: 'Leave',
      startDate: '2023-01-10',
      endDate: '2023-02-10',
      department: 'HR',
      grade: 'Assistant Manager (BPS-18)',
      remarks: 'Maternity leave',
      status: 'Verified'
    },
    {
      type: 'Transfer',
      startDate: '2024-03-01',
      endDate: '2024-03-01',
      department: 'Administration',
      grade: 'Assistant Manager (BPS-18)',
      remarks: 'Transferred to Administration Section, BUTEX',
      status: 'Pending'
    }
  ];
  
}
