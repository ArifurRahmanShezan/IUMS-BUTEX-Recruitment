import { Component, OnInit } from '@angular/core';

interface JobCircular {
  id: string;
  position: string;
  type: string;
  start: string;
  end: string;
  descEng: string;
  descBan: string;
  salary: string;
}

interface Application {
  job: JobCircular;
  name: string;
  email: string;
  phone: string;
  resume: string;
  cover: string;
}

@Component({
  selector: 'app-job-circular',
  templateUrl: './job-circular.component.html',
  styleUrls: ['./job-circular.component.css']
})
export class JobCircularComponent implements OnInit {
jobCirculars: JobCircular[] = [];
  applications: Application[] = [];

  showDetailsModal = false;
  showApplyModal = false;

  currentJobIndex = -1;
  currentJob: JobCircular | null = null;

  // Form fields
  appName = '';
  appEmail = '';
  appPhone = '';
  appResume: File | null = null;
  appCover = '';

  constructor() { }

  ngOnInit(): void {
    this.jobCirculars = [
      {id:"JOB1001", position:"Lecturer - Textile Chemistry", type:"Full-time", start:"2025-09-15T08:00", end:"2025-10-01T23:59", descEng:"Lecturer in Textile Chemistry.", descBan:"টেক্সটাইল কেমিস্ট্রিতে লেকচারার।", salary:"25,000-35,000 BDT"},
      {id:"JOB1002", position:"Assistant Professor - Fabric Engineering", type:"Full-time", start:"2025-09-16T09:00", end:"2025-10-05T23:59", descEng:"Assistant Professor in Fabric Engineering.", descBan:"ফ্যাব্রিক ইঞ্জিনিয়ারিং এ অ্যাসিস্ট্যান্ট প্রফেসর।", salary:"50,000-60,000 BDT"},
      {id:"JOB1003", position:"Lab Instructor - Industrial Engineering", type:"Part-time", start:"2025-09-20T10:00", end:"2025-10-10T23:59", descEng:"Lab Instructor needed.", descBan:"ল্যাব ইনস্ট্রাক্টর প্রয়োজন।", salary:"15,000-20,000 BDT"},
      {id:"JOB1004", position:"Senior Lecturer - Mechanical", type:"Full-time", start:"2025-09-18T09:00", end:"2025-10-08T23:59", descEng:"Senior Lecturer in Mechanical.", descBan:"মেকানিক্যাল এ সিনিয়র লেকচারার।", salary:"45,000-55,000 BDT"},
      {id:"JOB1005", position:"Assistant Professor - Electrical", type:"Full-time", start:"2025-09-19T08:00", end:"2025-10-09T23:59", descEng:"Assistant Professor in Electrical.", descBan:"ইলেকট্রিক্যাল এ অ্যাসিস্ট্যান্ট প্রফেসর।", salary:"50,000-60,000 BDT"},
      {id:"JOB1006", position:"Lecturer - Computer Science", type:"Full-time", start:"2025-09-20T08:00", end:"2025-10-12T23:59", descEng:"Lecturer in Computer Science.", descBan:"কম্পিউটার সায়েন্স এ লেকচারার।", salary:"30,000-40,000 BDT"},
      {id:"JOB1007", position:"Lab Technician - Chemistry", type:"Part-time", start:"2025-09-21T09:00", end:"2025-10-15T23:59", descEng:"Lab Technician in Chemistry.", descBan:"কেমিস্ট্রি ল্যাবে টেকনিশিয়ান।", salary:"15,000-18,000 BDT"},
      {id:"JOB1008", position:"Lecturer - Physics", type:"Full-time", start:"2025-09-22T08:00", end:"2025-10-16T23:59", descEng:"Lecturer in Physics.", descBan:"ফিজিক্স এ লেকচারার।", salary:"25,000-35,000 BDT"},
      {id:"JOB1009", position:"Assistant Professor - Mathematics", type:"Full-time", start:"2025-09-23T08:00", end:"2025-10-18T23:59", descEng:"Assistant Professor in Mathematics.", descBan:"ম্যাথমেটিক্স এ অ্যাসিস্ট্যান্ট প্রফেসর।", salary:"50,000-60,000 BDT"},
      {id:"JOB1010", position:"Lecturer - Statistics", type:"Full-time", start:"2025-09-24T09:00", end:"2025-10-20T23:59", descEng:"Lecturer in Statistics.", descBan:"স্ট্যাটিস্টিক্স এ লেকচারার।", salary:"25,000-35,000 BDT"}
    ];
  }

  openDetailsModal(index: number) {
    this.currentJobIndex = index;
    this.currentJob = this.jobCirculars[index];
    this.showDetailsModal = true;
  }

  closeDetailsModal() {
    this.showDetailsModal = false;
    this.currentJob = null;
  }

  openApplyModal(index: number) {
    this.currentJobIndex = index;
    this.currentJob = this.jobCirculars[index];
    this.showApplyModal = true;
  }

  closeApplyModal() {
    this.showApplyModal = false;
    this.currentJob = null;
    this.appName = '';
    this.appEmail = '';
    this.appPhone = '';
    this.appResume = null;
    this.appCover = '';
  }

  handleResumeUpload(event: any) {
    this.appResume = event.target.files[0];
  }

  submitApplication() {
    if(!this.appName || !this.appEmail || !this.appPhone || !this.appResume) {
      alert("Please fill all required fields.");
      return;
    }

    this.applications.push({
      job: this.jobCirculars[this.currentJobIndex],
      name: this.appName,
      email: this.appEmail,
      phone: this.appPhone,
      resume: this.appResume.name,
      cover: this.appCover
    });

    alert("Application submitted successfully!");
    this.closeApplyModal();
  }

}
