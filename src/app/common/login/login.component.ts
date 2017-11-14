import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { AuthenticationService } from '../../service/authentication.service';

import { LoaderService } from '../../service/loading-service/loading.service'

import { ResetPasswordComponent } from '../../../app/common/reset-password/reset-password.component';
import { ForgetPasswordComponent } from '../../../app/common/forget-password/forget-password.component';
declare let $: any;
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  loading = false;
  error = '';
   msg:string;
   @ViewChild('modal') modal:ElementRef;
   public password: string;
  public loginForm: FormGroup;
  constructor(private authenticationService: AuthenticationService, private router: Router, private loaderService: LoaderService) { }
  public submitted: boolean;
  public flag: boolean;
  public logindata:any;
  public errorMessage:string;
  ngOnInit() {

    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    })
 this.authenticationService.logout();
  }
 

  loginSuccess(user, token) {
      this.loading = false;
      sessionStorage.setItem("userToken", token);
      sessionStorage.setItem("user", JSON.stringify(user) );
      localStorage.setItem("currentUser", JSON.stringify({username:user.username, token:token}));
      this.router.navigate(["./dashboard"]);
  }

  loginFailure(errorMessage) {
      this.loading = false;
      this.password = '';
      this.error = errorMessage;
  }
  public login(isValid: boolean): void {
    debugger;
    // this.submitted = true;
    //   this.userService.login(this.loginForm.value)
	  //   .subscribe( logindata => {
    //                  this.router.navigate(['./dashboard']);
    //             },
    //                     error => this.errorMessage = <any>error);
           this.authenticationService.validLogin(this.loginForm.value).subscribe(
    			response => {
    				//TODO store in local storage
    				if(response.success)
            {
             this.router.navigate(['./dashboard']);
             localStorage.setItem("currentUser",JSON.stringify(response.user));
            }
    				else
            {
              this.router.navigate(['./dashboard']);
            }
    			}
    		);           
  }
   
 updatePassword(): void {
   this.msg="Password Reset successfully"
    $(this.modal.nativeElement).modal('show');
 }
 
 forgotPassword(): void {
   this.msg="Mail send successfully"
    $(this.modal.nativeElement).modal('show');
  
 }
}
