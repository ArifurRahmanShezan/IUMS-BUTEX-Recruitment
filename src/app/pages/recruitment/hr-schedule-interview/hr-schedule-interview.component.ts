import { Component, OnInit } from '@angular/core';

export interface Interview {
  candidate: string;
  interviewers: string[];
  dateTime: string;
  mode: 'Online' | 'Offline';
  status?: 'Scheduled' | 'Pending';
}

@Component({
  selector: 'app-hr-schedule-interview',
  templateUrl: './hr-schedule-interview.component.html',
  styleUrls: ['./hr-schedule-interview.component.css']
})
export class HRScheduleInterviewComponent implements OnInit {

  // Form model
  candidateName = '';
  assignedInterviewers: string[] = [];
  dateTime = '';
  mode: 'Online' | 'Offline' = 'Online';
  interviewLink = '';
  notes = '';

  allInterviewers = ['Dr. Rahman', 'Prof. Karim', 'Ms. Sultana', 'Mr. Hasan'];
  candidate: { name: string } = { name: '' };

  upcomingInterviews: Interview[] = [
    { candidate: 'Arif Hossain', interviewers: ['Dr. Rahman', 'Ms. Sultana'], dateTime: '2025-09-15T10:00', mode: 'Online', status: 'Scheduled' },
    { candidate: 'Nusrat Jahan', interviewers: ['Prof. Karim'], dateTime: '2025-09-14T14:00', mode: 'Offline', status: 'Scheduled' },
    { candidate: 'Tanvir Ahmed', interviewers: ['Mr. Hasan'], dateTime: '2025-09-20T11:30', mode: 'Online', status: 'Scheduled' },
    { candidate: 'Farhana Akter', interviewers: ['Dr. Rahman', 'Prof. Karim'], dateTime: '2025-09-18T09:00', mode: 'Offline', status: 'Scheduled' },
    { candidate: 'Rafiul Islam', interviewers: ['Ms. Sultana'], dateTime: '2025-09-19T16:00', mode: 'Online', status: 'Scheduled' },
  ];

  allInvites: Interview[] = [...this.upcomingInterviews];

  assignedInterviewersMap: { [key: string]: boolean } = {};

  ngOnInit() {
    // Initialize map so checkboxes work correctly
    this.allInterviewers.forEach(name => {
      this.assignedInterviewersMap[name] = false;
    });
  }

  sendInvite() {
    // Get selected interviewers
    this.assignedInterviewers = Object.keys(this.assignedInterviewersMap)
      .filter(name => this.assignedInterviewersMap[name]);

    if (!this.candidateName || this.assignedInterviewers.length === 0 || !this.dateTime) {
      alert('Please fill all required fields!');
      return;
    }

    const newInterview: Interview = {
      candidate: this.candidateName,
      interviewers: [...this.assignedInterviewers],
      dateTime: this.dateTime,
      mode: this.mode,
      status: 'Scheduled'
    };

    this.upcomingInterviews = [...this.upcomingInterviews, newInterview];
    this.allInvites = [...this.allInvites, newInterview];

    // Reset form
    this.candidateName = '';
    this.assignedInterviewers = [];
    this.assignedInterviewersMap = {};
    this.allInterviewers.forEach(name => {
      this.assignedInterviewersMap[name] = false;
    });
    this.dateTime = '';
    this.mode = 'Online';
    this.interviewLink = '';
    this.notes = '';
  }
}
