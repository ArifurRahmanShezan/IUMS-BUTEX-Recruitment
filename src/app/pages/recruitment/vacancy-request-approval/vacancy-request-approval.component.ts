import { Component } from '@angular/core';

// Define an interface for a Vacancy Item
interface Vacancy {
  department: string;
  requestDate: string;
  remarks: string;
  attachment: string;
}

@Component({
  selector: 'app-vacancy-request-approval',
  templateUrl: './vacancy-request-approval.component.html',
  styleUrls: ['./vacancy-request-approval.component.css']
})
export class VacancyRequestApprovalComponent {

  search: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5; // Items per page

  // Declare vacancyList as an array of Vacancy items
  vacancyList: Vacancy[] = [
    {
      department: 'Department of Yarn Engineering',
      requestDate: '12/10/2025',
      remarks: 'Justification is a reason or explanation for something, while "remarks" are brief comments or observations...',
      attachment: 'JD_Professor.pdf'
    },
    {
      department: 'Department of CSE',
      requestDate: '12/10/2025',
      remarks: 'Justification is a reason or explanation for something, while "remarks" are brief comments or observations...',
      attachment: 'JD_Professor.pdf'
    },
    {
      department: 'Department of GIS',
      requestDate: '12/10/2025',
      remarks: 'Justification is a reason or explanation for something, while "remarks" are brief comments or observations...',
      attachment: 'JD_Professor.pdf'
    },
    {
      department: 'Department of Software',
      requestDate: '12/10/2025',
      remarks: 'Justification is a reason or explanation for something, while "remarks" are brief comments or observations...',
      attachment: 'JD_Professor.pdf'
    },
    {
      department: 'Department of Mechanical',
      requestDate: '12/10/2025',
      remarks: 'Justification is a reason or explanation for something, while "remarks" are brief comments or observations...',
      attachment: 'JD_Professor.pdf'
    },
    {
      department: 'Department of EEE',
      requestDate: '12/10/2025',
      remarks: 'Justification is a reason or explanation for something, while "remarks" are brief comments or observations...',
      attachment: 'JD_Professor.pdf'
    },
    {
      department: 'Department of ETE',
      requestDate: '12/10/2025',
      remarks: 'Justification is a reason or explanation for something, while "remarks" are brief comments or observations...',
      attachment: 'JD_Professor.pdf'
    },
    {
      department: 'Department of IT',
      requestDate: '12/10/2025',
      remarks: 'Justification is a reason or explanation for something, while "remarks" are brief comments or observations...',
      attachment: 'JD_Professor.pdf'
    },
    {
      department: 'Department of IT',
      requestDate: '12/10/2025',
      remarks: 'Justification is a reason or explanation for something, while "remarks" are brief comments or observations...',
      attachment: 'JD_Professor.pdf'
    },
    {
      department: 'Department of IT',
      requestDate: '12/10/2025',
      remarks: 'Justification is a reason or explanation for something, while "remarks" are brief comments or observations...',
      attachment: 'JD_Professor.pdf'
    },
    {
      department: 'Department of IT',
      requestDate: '12/10/2025',
      remarks: 'Justification is a reason or explanation for something, while "remarks" are brief comments or observations...',
      attachment: 'JD_Professor.pdf'
    },
    {
      department: 'Department of IT',
      requestDate: '12/10/2025',
      remarks: 'Justification is a reason or explanation for something, while "remarks" are brief comments or observations...',
      attachment: 'JD_Professor.pdf'
    }
  ];

  // Declare paginatedVacancyList as an array of Vacancy items
  filteredVacancyList: Vacancy[] = [...this.vacancyList];
  paginatedVacancyList: Vacancy[] = [];

  // Filter vacancy list based on search
  filterVacancyList() {
    this.filteredVacancyList = this.vacancyList.filter(item =>
      item.department.toLowerCase().includes(this.search.toLowerCase()) ||
      item.remarks.toLowerCase().includes(this.search.toLowerCase())
    );
    this.updatePagination();
  }

  // Update pagination whenever the list changes
  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedVacancyList = this.filteredVacancyList.slice(startIndex, endIndex);
  }

  // Go to previous page
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  // Go to next page
  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.filteredVacancyList.length) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  // View details of a row
  viewDetails(row: Vacancy) {
    alert('View Details: ' + JSON.stringify(row));
  }

  // Edit a row
  editRow(row: Vacancy) {
    alert('Edit Row: ' + JSON.stringify(row));
  }

  // Delete a row
  deleteRow(row: Vacancy) {
    this.vacancyList = this.vacancyList.filter(item => item !== row);
    this.filterVacancyList(); // Re-filter list after deletion
    console.log('Vacancy deleted:', row);
  }

  ngOnInit() {
    this.updatePagination(); // Initialize pagination when component loads
  }
}
