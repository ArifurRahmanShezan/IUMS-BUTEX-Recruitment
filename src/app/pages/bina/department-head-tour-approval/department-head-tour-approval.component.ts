import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
interface Tour {
  tourId: string;
  employee: string;
  dept: string;
  type: string;
  destination: string;
  from: string;
  to: string;
  cost: number;
  status: 'Approved' | 'Pending' | 'Rejected';
}
@Component({
  selector: 'app-department-head-tour-approval',
  templateUrl: './department-head-tour-approval.component.html',
  styleUrls: ['./department-head-tour-approval.component.css']
})
export class DepartmentHeadTourApprovalComponent {

  tours: Tour[] = [
    { tourId: 'T001', employee: 'Employee 1', dept: 'HR', type: 'Foreign', destination: 'Singapore', from: '2025-09-22', to: '2025-09-23', cost: 1000, status: 'Approved' },
    { tourId: 'T002', employee: 'Employee 2', dept: 'Finance', type: 'Domestic', destination: 'Dhaka', from: '2025-09-23', to: '2025-09-24', cost: 2000, status: 'Pending' },
    { tourId: 'T003', employee: 'Employee 3', dept: 'IT', type: 'Foreign', destination: 'Singapore', from: '2025-09-24', to: '2025-09-25', cost: 3000, status: 'Rejected' },
    { tourId: 'T004', employee: 'Employee 4', dept: 'Admin', type: 'Domestic', destination: 'Dhaka', from: '2025-09-25', to: '2025-09-26', cost: 4000, status: 'Approved' },
    { tourId: 'T005', employee: 'Employee 5', dept: 'Research', type: 'Foreign', destination: 'Singapore', from: '2025-09-26', to: '2025-09-27', cost: 5000, status: 'Pending' },
    { tourId: 'T006', employee: 'Employee 6', dept: 'HR', type: 'Domestic', destination: 'Dhaka', from: '2025-09-27', to: '2025-09-28', cost: 6000, status: 'Pending' },
  ];

  logs: string[] = [];

  showPopup = false;
  editTour: Tour | null = null;
  editedTour: Tour = {} as Tour;

  // --- Action handlers ---
  approve(tour: Tour) {
    tour.status = 'Approved';
    this.addLog(`${tour.tourId} approved`);
  }

  reject(tour: Tour) {
    tour.status = 'Rejected';
    this.addLog(`${tour.tourId} rejected`);
  }

  openEdit(tour: Tour) {
    this.editTour = tour;
    this.editedTour = { ...tour };
    this.showPopup = true;
  }

  updateTour() {
    if (this.editTour) Object.assign(this.editTour, this.editedTour);
    this.showPopup = false;
    this.addLog(`${this.editedTour.tourId} updated`);
  }

  cancelEdit() {
    this.showPopup = false;
  }

  sanction(tour: Tour) {
    alert(`Sanction letter generated for ${tour.tourId}`);
    this.addLog(`Sanction letter generated for ${tour.tourId}`);
  }

  exportReport() {
    const table = document.getElementById('tourTable');
    if (!table) return;

    html2canvas(table).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const width = 190;
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, 'PNG', 10, 10, width, height);
      pdf.save('Tour_Report.pdf');
      this.addLog('Report exported');
    });
  }

  private addLog(message: string) {
    const timestamp = new Date().toLocaleString();
    this.logs.unshift(`${timestamp} – Tour ${message}`);
  }
}


