import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Employee {
  fullName: string;
  employeeId: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  startDate: string;
  endDate: string;
  reason: string;
  file?: string;
  status: string;
}


@Component({
  selector: 'app-experience-certificate-apply',
  templateUrl: './experience-certificate-apply.component.html',
  styleUrls: ['./experience-certificate-apply.component.css'],
})
export class ExperienceCertificateApplyComponent {
  employees: Employee[] = [];
  employeeForm: FormGroup;
  showForm = false;
  editIndex: number | null = null;
  uploadedFileName = '';

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      fullName: ['', Validators.required],
      employeeId: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      department: ['', Validators.required],
      designation: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: [''],
      status: ['Pending', Validators.required],
    });
  }

  openForm() {
    this.showForm = true;
    this.employeeForm.reset({ status: 'Pending' });
    this.editIndex = null;
  }

  closeForm() {
    this.showForm = false;
  }

  onFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadedFileName = input.files[0].name;
    }
  }

  onSubmit() {
    if (this.employeeForm.invalid) return;

    const newEmployee: Employee = {
      ...this.employeeForm.value,
      file: this.uploadedFileName,
    };

    if (this.editIndex !== null) {
      this.employees[this.editIndex] = newEmployee;
    } else {
      this.employees = [...this.employees, newEmployee];
    }

    this.employeeForm.reset({ status: 'Pending' });
    this.uploadedFileName = '';
    this.closeForm();
  }

  editEmployee(index: number) {
    this.editIndex = index;
    this.employeeForm.patchValue(this.employees[index]);
    this.showForm = true;
  }

  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
  }
}
