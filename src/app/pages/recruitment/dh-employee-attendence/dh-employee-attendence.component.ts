import { Component } from '@angular/core';

@Component({
  selector: 'app-dh-employee-attendence',
  templateUrl: './dh-employee-attendence.component.html',
  styleUrls: ['./dh-employee-attendence.component.css']
})
export class DhEmployeeAttendenceComponent {
  selectedMonth = 'March';
  selectedYear = 2025;
  searchTerm = '';

  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  years = [2023, 2024, 2025, 2026];

  employees = [
    { id: 'T001', name: 'Dr. Rahim Uddin', role: 'Teacher', department: 'Physics', present: 25, absent: 2, late: 1, leave: 2, attendance: '89%', status: 'Present' },
    { id: 'T002', name: 'Dr. Samina Chowdhury', role: 'Teacher', department: 'Physics', present: 24, absent: 3, late: 0, leave: 1, attendance: '88%', status: 'Present' },
    { id: 'T003', name: 'Mr. Karim Hossain', role: 'Teacher', department: 'Physics', present: 22, absent: 4, late: 1, leave: 2, attendance: '82%', status: 'Late' },
    { id: 'S002', name: 'Ms. Nazma Begum', role: 'Staff', department: 'Physics', present: 20, absent: 4, late: 1, leave: 1, attendance: '80%', status: 'Absent' },
    { id: 'S003', name: 'Mr. Babul Miah', role: 'Staff', department: 'Physics', present: 22, absent: 3, late: 2, leave: 2, attendance: '82%', status: 'On Leave' },
    { id: 'S004', name: 'Ms. Rina Sultana', role: 'Staff', department: 'Physics', present: 24, absent: 1, late: 1, leave: 0, attendance: '92%', status: 'Present' },
    { id: 'S005', name: 'Mr. Jamil Ahmed', role: 'Officer', department: 'Physics', present: 25, absent: 0, late: 0, leave: 0, attendance: '100%', status: 'Present' },
    { id: 'T006', name: 'Dr. Farhana Akter', role: 'Teacher', department: 'Physics', present: 23, absent: 2, late: 1, leave: 1, attendance: '88%', status: 'Present' },
    { id: 'S006', name: 'Ms. Shirin Akter', role: 'Staff', department: 'Physics', present: 19, absent: 5, late: 1, leave: 2, attendance: '76%', status: 'Absent' },
    { id: 'T010', name: 'Dr. Salma Khatun', role: 'Teacher', department: 'Physics', present: 21, absent: 3, late: 1, leave: 2, attendance: '80%', status: 'Late' },
    // Add more as needed...
  ];

  filteredEmployees() {
    const term = this.searchTerm.toLowerCase();
    return this.employees.filter(emp =>
      emp.name.toLowerCase().includes(term) || emp.id.toLowerCase().includes(term)
    );
  }
}
