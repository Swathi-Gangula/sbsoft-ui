import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';


import { AuthenticationService } from '../../service/authentication.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
 resetForm: FormGroup  
  constructor(private formBuilder: FormBuilder
    ,private authenticationService: AuthenticationService) { 
       this.resetForm = this.formBuilder.group({
               
                'oldPassword': [null, Validators.compose([Validators.required])],
                'newPassword': [null, Validators.compose([Validators.required])]
               
            });
    }

  ngOnInit() {
  }
resetPwd(email){
  console.log("Email",email.email);
  this.authenticationService.forgetPassword(email.email).subscribe(res=>console.log(res.success));
}
 cancelModalPopUp() {

      
       // this.router.navigate(['/dashboard-settings']);
    }

}
