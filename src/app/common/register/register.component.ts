import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public submitted:boolean;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      conformPassword: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      isCheck: new FormControl('', Validators.required)
    });
  }
  register(isValid: boolean) {
   
    this.submitted=true;
    if(isValid==true){
     // let result = this.userService.register(this.registerForm.value)
     // alert(result);
    }
    
  }

}
