import { Component } from '@angular/core';

interface Application {
  id: string;
  name: string;
  phone: string;
  email: string;
  score: number;
  status: 'pending' | 'shortlisted' | 'rejected';
  submitted: string;
  cover: string;
  resume: string;
  feedback?: string;
}

@Component({
  selector: 'app-hr-see-shorlisted',
  templateUrl: './hr-see-shorlisted.component.html',
  styleUrls: ['./hr-see-shorlisted.component.css']
})
export class HRSeeShorlistedComponent {

  applications: Application[] = [
    {
      id: 'APP-001',
      name: 'Rahim Uddin',
      phone: '+8801900000000',
      email: 'rahim@example.com',
      score: 100,
      status: 'pending',
      submitted: '2025-10-10, 10:37 AM',
      cover: 'Dear team, I am excited to apply for this position.',
      resume: 'Experience: 3 years in frontend dev with Angular & React.',
    },
    {
      id: 'APP-002',
      name: 'Sadia Noor',
      phone: '+8801900000001',
      email: 'sadia@example.com',
      score: 92,
      status: 'shortlisted',
      submitted: '2025-10-09, 09:12 AM',
      cover: 'Enthusiastic developer with a passion for UI design.',
      resume: 'Experience: React, TypeScript, and Figma to code conversion.',
    },
    {
      id: 'APP-003',
      name: 'Arif Hossain',
      phone: '+8801900000002',
      email: 'arif@example.com',
      score: 68,
      status: 'rejected',
      submitted: '2025-10-08, 01:30 PM',
      cover: 'Entry-level web developer looking for opportunities.',
      resume: 'Basic knowledge in JS, HTML, CSS.',
    },
  ];
  

  filteredApps = [...this.applications];
  selectedApp: Application | null = null;
  searchText = '';
  statusFilter = 'all';
  minScore: number | null = null;
  feedbackText = '';

  filterApplications() {
    this.filteredApps = this.applications.filter((app) => {
      const matchesSearch =
        app.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        app.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
        app.id.toLowerCase().includes(this.searchText.toLowerCase());

      const matchesStatus =
        this.statusFilter === 'all' || app.status === this.statusFilter;

      const matchesScore =
        this.minScore == null || app.score >= this.minScore;

      return matchesSearch && matchesStatus && matchesScore;
    });
  }

  resetFilters() {
    this.searchText = '';
    this.statusFilter = 'all';
    this.minScore = null;
    this.filteredApps = [...this.applications];
  }

  viewDetails(app: Application) {
    this.selectedApp = app;
  }
saveFeedback() {
    if (this.selectedApp) {
      this.selectedApp.feedback = this.feedbackText;
      alert('Feedback saved successfully!');
    }
  }
   downloadResume() {
    if (this.selectedApp) {
      const blob = new Blob([this.selectedApp.resume], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${this.selectedApp.name}_Resume.txt`;
      a.click();
      window.URL.revokeObjectURL(url);
    }
  }
  closeDetail() {
    this.selectedApp = null;
  }

  markShortlisted(app: Application) {
    app.status = 'shortlisted';
  }
  markPending(app: Application) {
    app.status = 'pending';
}

  markRejected(app: Application) {
    app.status = 'rejected';
  }
}
