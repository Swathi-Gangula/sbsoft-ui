import { Component, Input ,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input('active-menu') activeMenu: string;
  @Input('pageTitle') pageTitle: string;
  //public currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  //public username = this.currentUser.username;
  public username = "Admin";

  constructor(private router: Router,private elementRef: ElementRef){
    console.log("Entered here")
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "assets/js/endless/endless.js";
    this.elementRef.nativeElement.appendChild(s);
    }

    checklistTag()
  {
    this.router.navigate(["./checkListTags"]);
  }
  checkList(){
    this.router.navigate(["./checkList"]);
  }
  logout(){
    localStorage.removeItem("currentUser");
     this.router.navigate([""]);
  }
}
