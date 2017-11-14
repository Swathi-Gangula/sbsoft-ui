import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

 forgotForm: FormGroup  
  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService) { 
       this.forgotForm = this.formBuilder.group({
               
                'email': [null, Validators.compose([Validators.required])]
               
            });
    }

  ngOnInit() {
  }
forgetPwd(email){
  console.log("Email",email.email);
  this.authenticationService.forgetPassword(email.email).subscribe(res=>console.log(res.success));
}
 cancelModalPopUp() {

        
       // this.router.navigate(['/dashboard-settings']);
    }


}
