import { Component } from '@angular/core';
interface Employee {
  employeeId: string;
  name: string;
  role: string;
  department: string;
  present: number;
  absent: number;
  late: number;
  leave: number;
  attendance: string;
  status: string;
}
@Component({
  selector: 'app-hr-attendence-excel',
  templateUrl: './hr-attendence-excel.component.html',
  styleUrls: ['./hr-attendence-excel.component.css']
})
export class HRAttendenceExcelComponent {
months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  years = [2023, 2024, 2025, 2026];

  filter = {
    role: 'All',
    department: 'All',
    month: 'March',
    year: 2025
  };

  searchText = '';

  employees: Employee[] = [
    { employeeId:'T001', name:'Dr. Rahim Uddin', role:'Teacher', department:'Physics', present:25, absent:2, late:1, leave:2, attendance:'89%', status:'Present' },
    { employeeId:'T002', name:'Ms. Laila Akter', role:'Teacher', department:'Math', present:22, absent:4, late:2, leave:2, attendance:'80%', status:'Late' },
    { employeeId:'S002', name:'Ms. Nazma Begum', role:'Staff', department:'Admin', present:18, absent:5, late:2, leave:3, attendance:'72%', status:'Absent' },
    { employeeId:'S003', name:'Mr. Babul Miah', role:'Staff', department:'Maintenance', present:20, absent:3, late:2, leave:2, attendance:'80%', status:'On Leave' },
    // Add all other employees as needed
  ];

  filteredEmployees(): Employee[] {
    return this.employees.filter(emp => 
      (this.filter.role === 'All' || emp.role === this.filter.role) &&
      (this.filter.department === 'All' || emp.department === this.filter.department) &&
      (emp.name.toLowerCase().includes(this.searchText.toLowerCase()) || emp.employeeId.toLowerCase().includes(this.searchText.toLowerCase()))
    );
  }

  onFileUpload(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      console.log('File uploaded:', input.files[0].name);
    }
  }

  downloadMonthly() {
  const data = this.filteredEmployees().map(emp => ({
    'Employee ID': emp.employeeId,
    'Name': emp.name,
    'Role': emp.role,
    'Department': emp.department,
    'Present': emp.present,
    'Absent': emp.absent,
    'Late': emp.late,
    'Leave': emp.leave,
    'Attendance': emp.attendance,
    'Status': emp.status
  }));

  this.downloadCSV(data, `Attendance_${this.filter.month}_${this.filter.year}.csv`);
}

downloadYearly() {
  const data = this.filteredEmployees().map(emp => ({
    'Employee ID': emp.employeeId,
    'Name': emp.name,
    'Role': emp.role,
    'Department': emp.department,
    'Present': emp.present,
    'Absent': emp.absent,
    'Late': emp.late,
    'Leave': emp.leave,
    'Attendance': emp.attendance,
    'Status': emp.status
  }));

  this.downloadCSV(data, `Attendance_${this.filter.year}.csv`);
}

// Helper function to convert JSON to CSV and trigger download
private downloadCSV(data: any[], filename: string) {
  const csvRows: string[] = [];

  // Get headers
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(','));

  // Add rows
  for (const row of data) {
    const values = headers.map(header => `"${row[header]}"`);
    csvRows.push(values.join(','));
  }

  // Create blob and trigger download
  const csvData = new Blob([csvRows.join('\n')], { type: 'text/csv' });
  const url = window.URL.createObjectURL(csvData);
  const a = document.createElement('a');
  a.setAttribute('hidden', '');
  a.setAttribute('href', url);
  a.setAttribute('download', filename);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
}
