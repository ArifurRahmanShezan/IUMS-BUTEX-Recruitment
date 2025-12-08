import { AfterViewInit, Component } from '@angular/core';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  LineElement,
  PointElement,
  LineController,
  ArcElement,
  PieController,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  LineElement,
  PointElement,
  LineController,
  ArcElement,
  PieController,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.renderLineChart();
    this.renderBarChart();
    this.renderPieChart();
    this.renderStackedChart();
  }

  renderLineChart() {
    new Chart('studentLineChart', {
      type: 'line',
      data: {
        labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
        datasets: [{
          label: 'Total Students',
          data: [200, 250, 120, 280],
          borderColor: '#4f46e5',
          backgroundColor: 'transparent',
          borderWidth: 3,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  renderBarChart() {
    new Chart('attendanceBarChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Present',
            data: [85, 81, 90, 87, 92, 88, 91, 89, 93, 90, 87, 88],
            backgroundColor: '#16a34a'
          },
          {
            label: 'Absent',
            data: [10, 12, 6, 8, 5, 7, 5, 7, 4, 6, 9, 8],
            backgroundColor: '#dc2626'
          },
          {
            label: 'Leave',
            data: [5, 7, 4, 5, 3, 5, 4, 4, 3, 4, 4, 4],
            backgroundColor: '#f59e0b'
          },
          {
            label: 'Late',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: '#8b5cf6'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { x: { stacked: true }, y: { stacked: true } }
      }
    });
  }

  renderPieChart() {
    new Chart('facultyPieChart', {
      type: 'doughnut',
      data: {
        labels: ['Full Time', 'Part Time', 'Contract', 'Other'],
        datasets: [{
          data: [45, 25, 15, 10],
          backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'],
          borderColor: '#fff',
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  renderStackedChart() {
    new Chart('workloadStackedChart', {
      type: 'bar',
      data: {
        labels: ['Computer Science', 'Electrical Eng', 'Mechanical Eng', 'Civil Eng', 'Chemical Eng'],
        datasets: [
          {
            label: 'Teaching',
            data: [12, 15, 10, 13, 11],
            backgroundColor: '#3b82f6'
          },
          {
            label: 'Research',
            data: [8, 6, 9, 7, 10],
            backgroundColor: '#10b981'
          },
          {
            label: 'Service',
            data: [5, 4, 6, 5, 4],
            backgroundColor: '#f59e0b'
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { stacked: true, beginAtZero: true },
          y: { stacked: true }
        },
        plugins: {
          legend: { position: 'top', align: 'end' }
        }
      }
    });
  }

  calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

  notifications = [
    { title: 'New Syllabus Instructions', date: '11 Mar 2023', color: '#9CA3AF' },
    { title: 'World Environment Day Program...!!!', date: '29 Apr 2024', color: '#6EE7B7' },
    { title: 'Exam Preparation Notification', date: '18 Mar 2023', color: '#FCA5A5' },
    { title: 'Online Classes Preparation', date: '29 May 2024', color: '#93C5FD' },
    { title: 'Exam Time Table Release', date: '20 May 2024', color: '#FDE68A' },
    { title: 'English Exam Preparation', date: '23 Mar 2024', color: '#FCA5A5' }
  ];

}
