import { Component } from '@angular/core';
interface Candidate {
  name: string;
  interviewDate: string;
}
interface Evaluation {
  name: string;
  date: string;
  ranking: string;
  strengths: string;
  weaknesses: string;
  recommendation: string;
  comments: string;
}
@Component({
  selector: 'app-interview-approval',
  templateUrl: './interview-approval.component.html',
  styleUrls: ['./interview-approval.component.css']
})
export class InterviewApprovalComponent {
  candidates: Candidate[] = [
    { name: 'John Doe', interviewDate: '2025-09-15' },
    { name: 'Sarah Ali', interviewDate: '2025-09-16' },
    { name: 'Michael Lee', interviewDate: '2025-09-17' }
  ];

  selectedCandidate: Candidate = { name: '', interviewDate: '' };

  evaluation: Partial<Evaluation> = {
    ranking: '',
    strengths: '',
    weaknesses: '',
    recommendation: '',
    comments: ''
  };

  submittedEvaluations: Evaluation[] = [];

  viewDetails(candidate: Candidate) {
    this.selectedCandidate = { ...candidate };
    this.evaluation = {
      ranking: '',
      strengths: '',
      weaknesses: '',
      recommendation: '',
      comments: ''
    };
  }

  submitEvaluation() {
    if (!this.selectedCandidate.name) return;

    const newEval: Evaluation = {
      name: this.selectedCandidate.name,
      date: this.selectedCandidate.interviewDate,
      ranking: this.evaluation.ranking || '',
      strengths: this.evaluation.strengths || '',
      weaknesses: this.evaluation.weaknesses || '',
      recommendation: this.evaluation.recommendation || '',
      comments: this.evaluation.comments || ''
    };

    this.submittedEvaluations.push(newEval);

    // Reset form (but keep candidate loaded)
    this.evaluation = {
      ranking: '',
      strengths: '',
      weaknesses: '',
      recommendation: '',
      comments: ''
    };
  }

}
