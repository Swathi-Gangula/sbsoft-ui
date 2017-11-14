import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {LoaderService} from './loading-service/loading.service';
import {BaseService} from './base-service';
@Injectable()
export class AuthenticationService extends BaseService {
    //public token: string;
   public static Token : string = '';
    constructor(private http: Http, private loaderService : LoaderService) {

        // var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        // this.token = currentUser && currentUser.token;

        super(); 
		
		var currentUser = JSON.parse(localStorage.getItem('currentUser'));        
       	AuthenticationService.Token = currentUser && currentUser.token;
    }

    validLogin(loginForm) : Observable<any> {

       
        let _loader = this.loaderService;
          _loader.displayLoader(true);

        setTimeout(function () {
            _loader.displayLoader(false);
        }, 3000);
          
       
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = {
            'username': loginForm.userName,
            'password': loginForm.password
        }

         console.log("entered in valid",options);
         return this.http.post("http://www.saisansa.com/sbsoft/data/api/validLogin",options )
			.map(
				(response: Response) => {
                return response.json();
              
			});


        // if (username == 'admin' && password == 'admin') {
        //    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: '123456' }));
        
        //    return true;
        // } else {
        //    return false;
        // }
    }
    
    logout(): void  {
        // this.token = null;
        // localStorage.removeItem('currentUser');
        AuthenticationService.Token = null;
        localStorage.removeItem('currentUser');

    }

    forgetPassword(email: string ): Observable<any> {

      // let headers = new Headers({ 'Content-Type': 'application/json' });
      console.log(email)
        let body = {
            fp_email:email
            }
        return this.http.post("http://www.saisansa.com/sbsoft/data/api/forgotPassword",body).map(res=>{
               // console.log(res.json());
                return res.json();             
            })
    }
}

class JwtHelper {
        private static urlBase64Decode(str: string) {
           var output = str.replace(/-/g, '+').replace(/_/g, '/');
             switch (output.length % 4) {
                case 0: { break; }
                 case 2: { output += '=='; break; }
                 case 3: { output += '='; break; }
                 default: {
                    throw 'Illegal base64url string!';
               }
            }
            return decodeURIComponent(encodeURI(window.atob(output)));
        }
     
        public static decodeToken(token: string) {
            var parts = token.split('.');
            if (parts.length !== 3) {
                throw new Error('JWT must have 3 parts');
            }
            var decoded = this.urlBase64Decode(parts[1]);
            if (!decoded) {
                throw new Error('Cannot decode the token');
            }
            return JSON.parse(decoded);
        }
}