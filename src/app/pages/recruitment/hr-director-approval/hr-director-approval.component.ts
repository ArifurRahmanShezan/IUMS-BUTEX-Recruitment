import { Component, OnInit } from '@angular/core';

interface ApprovalData {
  requisitionId: string;
  department: string;
  position: string;
  total: number;
  booked: number;
  vacancy: number;
  requestedMembers: number;
  budgetFit: string;
  orgGap: string;
  comments: string;
  decision: string;
  approvalDate: string;
}


@Component({
  selector: 'app-hr-director-approval',
  templateUrl: './hr-director-approval.component.html',
  styleUrls: ['./hr-director-approval.component.css']
})
export class HrDirectorApprovalComponent implements OnInit{
approvalData: ApprovalData[] = [];
  currentIndex: number = -1;
  currentMode: 'View' | 'Approve' | 'Review' = 'View';

  // Modal form fields
  modalRequested = 0;
  modalComments = '';
  modalDecision = 'Approved';

  constructor() { }

  ngOnInit(): void {
    const departments: any = {
      "HR & Admin":[{position:"HR Officer", total:3, booked:2}],
      "Dept of Yarn Engineering":[{position:"Lecturer", total:6, booked:4}],
      "Dept of Fabric Engineering":[{position:"Assistant Professor", total:5, booked:3}],
    };
    let reqCounter = 1001;
    for(let i=0;i<10;i++){
      const deptKeys = Object.keys(departments);
      const dept = deptKeys[i%deptKeys.length];
      const pos = departments[dept][0];
      this.approvalData.push({
        requisitionId: "REQ"+(reqCounter+i),
        department: dept,
        position: pos.position,
        total: pos.total,
        booked: pos.booked,
        vacancy: pos.total - pos.booked,
        requestedMembers: Math.floor(Math.random()*(pos.total - pos.booked)+1),
        budgetFit: i%2===0?"Yes":"No",
        orgGap: i%2===0?"No":"Yes",
        comments: "",
        decision: "Submitted",
        approvalDate: ""
      });
    }
  }

  getStatusClass(decision: string) {
    return 'status-' + decision;
  }

  openModal(index: number, mode: 'Approve' | 'Review') {
    this.currentIndex = index;
    this.currentMode = mode;
    const d = this.approvalData[index];
    this.modalRequested = d.requestedMembers;
    this.modalComments = d.comments;
    this.modalDecision = mode==='Approve'?'Approved':'Review';
  }

  closeModal() {
    this.currentIndex = -1;
  }

  submitModal() {
    const d = this.approvalData[this.currentIndex];
    if(this.currentMode==='Review'){
      d.requestedMembers = this.modalRequested;
      d.comments = this.modalComments;
      d.decision = 'Review';
    } else if(this.currentMode==='Approve'){
      d.comments = this.modalComments;
      d.decision = 'Approved';
    }
    d.approvalDate = new Date().toLocaleDateString();
    this.closeModal();
  }

}
