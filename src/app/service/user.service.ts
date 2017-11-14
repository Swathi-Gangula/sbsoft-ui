import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions,Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
  private loggedIn = false;
  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('currentUser');
  }
login(username: string , password: string)
{
        let body = JSON.stringify({username,password});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('./login', body, options)
            .map(res=>{
                console.log(res);
                return res.json();             
            })   
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}