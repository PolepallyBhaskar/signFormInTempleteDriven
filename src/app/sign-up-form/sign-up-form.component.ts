import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { SignUp } from '../signUp';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  isSubmitted = false ;
  save(signUpForm: NgForm) {
    this.isSubmitted = true ;
    console.log(signUpForm);
    }



  constructor() { }

  ngOnInit() {
  }

}
