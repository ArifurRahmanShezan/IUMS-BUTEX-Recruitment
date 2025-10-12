import { Component, OnInit } from '@angular/core';
interface Job {
  id: string;
  department: string;
  position: string;
  requested: number;
  status: string;
  postingTime: string;
  attachment: string;
  channels: string;
}
@Component({
  selector: 'app-job-post-form',
  templateUrl: './job-post-form.component.html',
  styleUrls: ['./job-post-form.component.css']
})
export class JobPostFormComponent {

  approvedVacancies: Job[] = [];
  departments: string[] = ["HR & Admin","Dept of Yarn Engineering","Dept of Fabric Engineering","Dept of Textile Chemistry","Dept of Industrial Engineering"];
  positions: string[] = ["HR Officer","Lecturer","Assistant Professor","Professor","Lab Instructor"];

  filterDept = '';
  filterPos = '';
  filterStatus = '';

  // Modal related
  modalOpen = false;
  previewOpen = false;
  currentJobIndex: number = -1;

  // Form fields
  jobPosition = '';
  jobDepartment = '';
  jobType = 'Full-time';
  jobDescEng = '';
  jobDescBan = '';
  jobSalary = '';
  appStart = '';
  appDeadline = '';
  channelsSelected: {[key: string]: boolean} = {
    Website: false, Portal: false, LinkedIn: false, Others: false
  };
  jobAttachment: File | null = null;

  constructor() { }

  ngOnInit(): void {
    // Populate demo data
    for(let i=1;i<=22;i++){
      const dept = this.departments[i % this.departments.length];
      const pos = this.positions[i % this.positions.length];
      this.approvedVacancies.push({
        id: "REQ" + (1000 + i),
        department: dept,
        position: pos,
        requested: Math.floor(Math.random() * 3) + 1,
        status: "Draft",
        postingTime: "",
        attachment: "-",
        channels: "-"
      });
    }
  }

  get filteredJobs() {
    return this.approvedVacancies.filter(d => 
      (!this.filterDept || d.department === this.filterDept) &&
      (!this.filterPos || d.position === this.filterPos) &&
      (!this.filterStatus || d.status === this.filterStatus)
    );
  }

  openJobModal(index: number) {
    this.currentJobIndex = index;
    const d = this.approvedVacancies[index];
    this.jobPosition = d.position;
    this.jobDepartment = d.department;
    this.jobType = "Full-time";
    this.jobDescEng = `We are hiring ${d.position} in ${d.department}. Please submit your application.`;
    this.jobDescBan = `আমরা ${d.department} এ ${d.position} পদে নিয়োগ দিচ্ছি। আবেদন করুন।`;
    this.jobSalary = '';
    this.appStart = '';
    this.appDeadline = '';
    this.channelsSelected = {Website:false, Portal:false, LinkedIn:false, Others:false};
    this.jobAttachment = null;
    this.modalOpen = true;
  }

  closeJobModal() { this.modalOpen = false; }
  closePreviewModal() { this.previewOpen = false; }

  saveDraft() {
    if(this.currentJobIndex === -1) return;
    const d = this.approvedVacancies[this.currentJobIndex];
    d.status = 'Draft';
    d.postingTime = new Date().toLocaleString();
    d.channels = this.getSelectedChannels();
    d.attachment = this.jobAttachment ? this.jobAttachment.name : '-';
    this.closeJobModal();
    alert("Job saved as Draft!");
  }

  previewJob() {
    this.previewOpen = true;
    this.modalOpen = false;
  }

  publishJob() {
    if(this.currentJobIndex === -1) return;
    const d = this.approvedVacancies[this.currentJobIndex];
    d.status = 'Posted';
    d.postingTime = new Date().toLocaleString();
    d.channels = this.getSelectedChannels();
    d.attachment = this.jobAttachment ? this.jobAttachment.name : '-';
    this.previewOpen = false;
    alert("Job Published Successfully!");
  }

  getSelectedChannels() {
    return Object.keys(this.channelsSelected).filter(ch => this.channelsSelected[ch]).join(', ') || '-';
  }

  onAttachmentChange(event: any) {
    this.jobAttachment = event.target.files[0] || null;
  }
}



