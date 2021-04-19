import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  profileForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  onSubmit() {
    this.toastr.success('Welcome Back', 'Have fun!');

    this.router.navigate(['/dashboard']);
    console.log(this.profileForm.value);
  }
}
