import { Component } from '@angular/core';

@Component({
  selector: 'app-vacancy-request',
  templateUrl: './vacancy-request.component.html'
})
export class VacancyRequestComponent {

  departmentName = 'Department of Yarn Engineering';

  allDesignations = ['Professor', 'Associate Professor', 'Assistant Professor'];
  selectedDesignations: string[] = [];
  selectedDesignation: string = '';

  requestDate!: string;
  attachmentFile!: File | null;
  remarks: string = '';
  search: string = '';

  vacancyList: any[] = [];

  mockData: any = {
    'Professor': { proposed: 5, current: 4, ugc: 1, required: 0, error: false },
    'Associate Professor': { proposed: 5, current: 4, ugc: 1, required: 0, error: false },
    'Assistant Professor': { proposed: 5, current: 4, ugc: 1, required: 0, error: false }
  };

  addDesignation() {
    if (this.selectedDesignation && !this.selectedDesignations.includes(this.selectedDesignation)) {
      this.selectedDesignations.push(this.selectedDesignation);
    }
  }

  removeDesignation(d: string) {
    this.selectedDesignations = this.selectedDesignations.filter(x => x !== d);
  }

  validateRequired(designation: string) {
    const data = this.mockData[designation];
    data.error = data.required > data.ugc;
  }

  onFileChange(event: any) {
    this.attachmentFile = event.target.files[0] || null;
  }

  submit() {
    const newVacancy = {
      designation: this.selectedDesignations.join(', '),
      proposed: this.mockData['Professor'].proposed,
      current: this.mockData['Professor'].current,
      ugc: this.mockData['Professor'].ugc,
      required: this.mockData['Professor'].required,
      attachment: this.attachmentFile ? this.attachmentFile.name : 'No file selected'
    };

    this.vacancyList.push(newVacancy);
    console.log('Vacancy added:', newVacancy);
  }

  viewDetails(row: any) {
    alert('View Details: ' + JSON.stringify(row));
  }

  editRow(row: any) {
    // Prefill data in the form for editing
    this.selectedDesignations = row.designation.split(', ');
    this.mockData['Professor'].proposed = row.proposed;
    this.mockData['Professor'].current = row.current;
    this.mockData['Professor'].ugc = row.ugc;
    this.mockData['Professor'].required = row.required;
    this.attachmentFile = null;
  }

  deleteRow(row: any) {
    this.vacancyList = this.vacancyList.filter(item => item !== row);
    console.log('Vacancy deleted:', row);
  }
}
