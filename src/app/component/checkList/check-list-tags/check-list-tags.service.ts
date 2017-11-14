import { Component, Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { CheckListTags} from './check-list-tags.model';
//import {AuthenticatedHttp} from '../../../service/AuthenticatedHttp';
//import "rxjs/Rx";
//import 'rxjs/Rx';
//import {BaseService} from '../../../service/base-service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import {AuthenticationService} from '../../../service/authentication.service';



@Injectable()
export class CheckListTagsService { 


private _url: string = "./assets/apiJson/checkListTags.json ";

private _getCheckListTagsUrl: string=" http://www.saisansa.com/sbsoft/data/api/checklistTagList";
private _getCheckListTagByIdUrl: string="";
private _saveTagNameUrl: string="http://www.saisansa.com/sbsoft/data/api/addChecklistTag";
private _updateTagNameUrl: string="http://www.saisansa.com/sbsoft/data/api/updateChecklistTag";
private _ActivationUrl: string="http://www.saisansa.com/sbsoft/data/api/checklistTagStaus";
  
    constructor(private _http: Http){} 
    
    // getCheckListTags():Observable<CheckListTags[]>{        
    //     return this._http.get(this._url)
    //     .map((response:Response)=><CheckListTags[]>response.json())
    //     .catch(this.handleError);
    // }

  
    getCheckListTags(){    

    const headers = new Headers({ 'Content-Type': 'application/json' });   
    
          if (localStorage.getItem('currentUser')) {
              var currentUser=JSON.parse(localStorage.getItem('currentUser'))
              let token=currentUser.token;
               headers.append('token',token );
         }    
   const options = new RequestOptions({ headers: headers });            
         return this._http.get(this._url, options)
         .map((response: Response) => response.json());
    }

    getCheckListTagById(id){   

    const headers = new Headers({ 'Content-Type': 'application/json' });        
          if (localStorage.getItem('currentUser')) {
              var currentUser=JSON.parse(localStorage.getItem('currentUser'))
              let token=currentUser.token;
               headers.append('token',token );
         }   
     const options = new RequestOptions({ headers: headers });         
         return this._http.post(this._url,id, options)
         .map((response: Response) => response.json());
    }

    handleError(error:Response){
        console.error(error);
        return Observable.throw(error);
    }
  
   
    saveTagName(tagData){
           const headers = new Headers({ 'Content-Type': 'application/json' });      
           if (localStorage.getItem('currentUser')) {
              var currentUser=JSON.parse(localStorage.getItem('currentUser'))
              let token=currentUser.token;
              headers.append('token',token );
         }    
          const options = new RequestOptions({ headers: headers });            
            return this._http.post(this._url,tagData, options)
               .map((response: Response) => response.json());
    }
 
    updateTagName(tagId,tagData){
        const headers = new Headers({ 'Content-Type': 'application/json' });      
           if (localStorage.getItem('currentUser')) {
              var currentUser=JSON.parse(localStorage.getItem('currentUser'))
              let token=currentUser.token;
              headers.append('token',token );
         }    
          const options = new RequestOptions({ headers: headers });            
            return this._http.post(this._url,tagData, options)
               .map((response: Response) => response.json());

   }

   Activation(status){
       const headers = new Headers({ 'Content-Type': 'application/json' });      
           if (localStorage.getItem('currentUser')) {
              var currentUser=JSON.parse(localStorage.getItem('currentUser'))
              let token=currentUser.token;
              headers.append('token',token );
         }    
          const options = new RequestOptions({ headers: headers });            
            return this._http.post(this._url,status, options)
               .map((response: Response) => response.json());

      
   }
}


// callApi(url: string, method: string, body: Object): Observable<any> {
//     // console.log(`Http call - url: ${url}, body: ${JSON.stringify(body)}`);

//     const headers = new Headers({ 'Content-Type': 'application/json' });
//     const options = new RequestOptions({ headers: headers });

//     // if user is logged in, append token to header
//     if (localStorage.getItem('currentUser')) {
//       headers.append('token', localStorage.getItem('currentUser'));
//     }

//     switch (method) {
//       case 'post': return this._http.post(url, body, options).map((response: Response) => response.json());
//       case 'get': return this._http.get(url, options).map((response: Response) => response.json());
//     }
//   }


//      Login api url - http://www.saisansa.com/sbsoft/data/api/validLogin
// Body - username
// password

// sample login details - username: admin; password: kiran;

//       1) Checklist Tags List api url - http://www.saisansa.com/sbsoft/data/api/checklistTagList

// Body - no body


// 2) Add Checklist Tag api url - http://www.saisansa.com/sbsoft/data/api/addChecklistTag

// Body - tag (ex:- tag = office_work)


// 3) Update Checklist Tag api url - http://www.saisansa.com/sbsoft/data/api/updateChecklistTag

// Body - tag, ct_id 


// 4) Checklist Tag status change api url - http://www.saisansa.com/sbsoft/data/api/checklistTagStaus

// Body - ct_id 
//    Logged in staff details api url - http://www.saisansa.com/sbsoft/data/api/staffData

// Body - no body
//    Change password api url - http://www.saisansa.com/sbsoft/data/api/changePassword

// Body - old_pass, new_pass
//    Forgot password api url - http://www.saisansa.com/sbsoft/data/api/forgotPassword
// Body - fp_email
    