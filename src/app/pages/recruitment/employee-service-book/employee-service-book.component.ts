import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-service-book',
  templateUrl: './employee-service-book.component.html',
  styleUrls: ['./employee-service-book.component.css']
})
export class EmployeeServiceBookComponent {

  employees = [
    {
      name: 'Md. Rafiqul Islam',
      id: 'EMP001',
      department: 'Accounts',
      designation: 'Deputy Director',
      joining: '1993-03-10',
      birth: '1965-05-15',
      retirement: '2025-12-31',
      status: 'Eligible'
    },
    {
      name: 'Nasima Akter',
      id: 'EMP002',
      department: 'Administration',
      designation: 'Assistant Registrar',
      joining: '1995-04-22',
      birth: '1966-01-20',
      retirement: '2026-03-31',
      status: 'Eligible'
    },
    {
      name: 'Shirin Sultana',
      id: 'EMP004',
      department: 'HR',
      designation: 'Senior Officer',
      joining: '1998-07-01',
      birth: '1970-06-05',
      retirement: '2030-06-30',
      status: 'Upcoming'
    },
    {
      name: 'Md. Mahfuz Alam',
      id: 'EMP007',
      department: 'Transport',
      designation: 'Driver',
      joining: '2001-08-20',
      birth: '1973-01-12',
      retirement: '2033-01-31',
      status: 'Upcoming'
    },
    {
      name: 'Fatema Begum',
      id: 'EMP006',
      department: 'Finance',
      designation: 'Accounts Officer',
      joining: '1997-06-05',
      birth: '1967-07-22',
      retirement: '2027-07-31',
      status: 'Eligible'
    },
    {
      name: 'Md. Aminul Islam',
      id: 'EMP011',
      department: 'Registrar',
      designation: 'Section Officer',
      joining: '1994-07-18',
      birth: '1965-11-10',
      retirement: '2025-11-30',
      status: 'Eligible'
    },
    {
      name: 'Taslima Akhter',
      id: 'EMP012',
      department: 'Student Affairs',
      designation: 'Admin Officer',
      joining: '1999-09-12',
      birth: '1971-08-22',
      retirement: '2031-08-31',
      status: 'Upcoming'
    },
    {
      name: 'Md. Kamrul Hasan',
      id: 'EMP013',
      department: 'Maintenance',
      designation: 'Technical Officer',
      joining: '1992-03-10',
      birth: '1964-02-28',
      retirement: '2025-03-31',
      status: 'Eligible'
    },
    {
      name: 'Md. Zahid Hasan',
      id: 'EMP015',
      department: 'Research',
      designation: 'Lab Assistant',
      joining: '1996-05-04',
      birth: '1968-06-16',
      retirement: '2028-06-30',
      status: 'Eligible'
    },
    {
      name: 'Abul Kalam',
      id: 'EMP017',
      department: 'Transport',
      designation: 'Driver',
      joining: '1993-04-01',
      birth: '1965-02-05',
      retirement: '2025-05-31',
      status: 'Eligible'
    },
  
  ];
  selectedEmployee: any = null;

    viewDetails(emp: any) {
    this.selectedEmployee = emp;
  }
   closeModal() {
    this.selectedEmployee = null;
  }
}



