import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl(),
      })
    });
  }

  onLoadData(): void {
    this.employeeForm.patchValue({
      fullName: 'TestName',
      email: 'testName@gmail.com',
      skills: {
        skillName: 'JavaScript',
        experienceInYears: 5,
        proficiency: 'advanced'
      }
    })
  }

  onSubmit(): void {
    console.log(this.employeeForm.touched);
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.get('fullName').value);
  }
}
