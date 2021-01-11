import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})


export class SignupFormComponent implements OnInit {

  userRegform: FormGroup;
  //minDate = new Date(1900, 0, 1);
  maxDate =  new Date(new Date().setDate(new Date().getDate()-1));

  constructor( public fb: FormBuilder,private router: Router, private signupService: SignupService) {}

  ngOnInit() {
    this.userRegform = this.fb.group({
    userFirstname: ['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    userLastname: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    userDOB:['', [Validators.required]],
    userAge: [''],
    userEmail: ['', [Validators.required,Validators.email]]  
    });
  }
  
  get form_controls(){
    return this.userRegform.controls;
  }

  updateage()
  {
    this.userRegform.patchValue({
      userAge: this.ageFromDateOfBirthday(this.userRegform.value.userDOB)
    });
  }
  
  public ageFromDateOfBirthday(dateOfBirth: any): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  reg_user()
  {
    console.log(this.signupService.regUser(this.userRegform.value));
    this.router.navigateByUrl('img-gallery');
  }

}
