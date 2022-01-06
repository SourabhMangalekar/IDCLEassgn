import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  title = 'My Angular Project!';

  emailid;
  formdata;
  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.formdata = this.fb.group({});
    this.formdata = new FormGroup({
      username: new FormControl(''),
      emailid: new FormControl(''),
      passwd: new FormControl(''),
      cv: new FormControl(''),
      education: new FormControl(''),
      mobileNumber: new FormControl(''),
    });
  }

  onClickSubmit(data) {
    console.log(data);
    this.router.navigateByUrl('/review', { state: data });
  }
}
