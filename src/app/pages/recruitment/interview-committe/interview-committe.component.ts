import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-interview-committe',
  templateUrl: './interview-committe.component.html',
  styleUrls: ['./interview-committe.component.css']
})
export class InterviewCommitteComponent {

  searchText = "";
  committees: any[] = [
    { name: "Professor Recruit Committee", validFrom: "11/12/2025", validTo: "02/02/2025", status: "Active" }
  ];
  filteredCommittees = [...this.committees];

  departments = ["Yarn Engineering", "CSE", "EEE", "Mechanical"];
  designations = ["Professor", "Associate Professor", "Lecturer"];
  internalMembersList = ["Asif Mahmud Akash", "Shovon Islam", "Tusar Islam"];

  selectedInternalMember = "";
  form: any = {
    name: "",
    department: "",
    designation: "",
    validFrom: "",
    validTo: "",
    internalMembers: [] as string[],
    externalMembers: [
      { name: "", designation: "", department: "", mobile: "", email: "", address: "" }
    ]
  };

  showViewModal = false;
  selectedCommittee: any = null;

  // Table filter
  filterCommittees() {
    const text = this.searchText.toLowerCase();
    this.filteredCommittees = this.committees.filter(c =>
      c.name.toLowerCase().includes(text)
    );
  }

  deleteCommittee(cm: any) {
    this.committees = this.committees.filter(c => c !== cm);
    this.filterCommittees();
  }

  // Internal Members
  addInternalMember() {
    if (this.selectedInternalMember &&
      !this.form.internalMembers.includes(this.selectedInternalMember)) {
      this.form.internalMembers.push(this.selectedInternalMember);
    }
    this.selectedInternalMember = "";
  }

  removeInternalMember(member: string) {
    this.form.internalMembers =
      this.form.internalMembers.filter((m: string) => m !== member);
  }

  // External Members
  addExternalMember() {
    this.form.externalMembers.push({ name: "", designation: "", department: "", mobile: "", email: "", address: "" });
  }

  removeExternalMember(index: number) {
    this.form.externalMembers.splice(index, 1);
  }

  // Mark all fields touched (so errors appear)
  markAllFieldsTouched(form: NgForm) {
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  // Submit
  submitForm(form: NgForm) {
    this.markAllFieldsTouched(form);

    if (form.invalid || this.form.internalMembers.length === 0) return;

    const newCommittee = {
      name: this.form.name,
      department: this.form.department,
      designation: this.form.designation,
      validFrom: this.form.validFrom,
      validTo: this.form.validTo,
      internalMembers: [...this.form.internalMembers],
      externalMembers: JSON.parse(JSON.stringify(this.form.externalMembers)),
      status: "Active"
    };

    this.committees.push(newCommittee);
    this.filterCommittees();

    alert("Committee Created Successfully!");

    this.form = {
      name: "",
      department: "",
      designation: "",
      validFrom: "",
      validTo: "",
      internalMembers: [],
      externalMembers: [{ name: "", designation: "", department: "", mobile: "", email: "", address: "" }]
    };
  }

  // View Modal
  openViewModal(cm: any) {
    this.selectedCommittee = cm;
    this.showViewModal = true;
  }

  closeViewModal() {
    this.showViewModal = false;
    this.selectedCommittee = null;
  }
}
