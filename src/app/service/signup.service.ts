import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  user_details = {};

  constructor() {}

  regUser(data : any)
  {

    this.user_details['firstName'] = data.userFirstname;
    this.user_details['lastName'] = data.userLastname;
    this.user_details['DOB'] = data.userDOB;
    this.user_details['age'] = data.userAge;
    this.user_details['email'] = data.userEmail;

    return this.user_details;
  }
  
}
