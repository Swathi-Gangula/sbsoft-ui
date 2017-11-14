import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';

import { AuthenticationService } from './authentication.service';
import { LoaderService } from './loading-service/loading.service';

@Injectable()
export class AuthenticatedHttp extends Http  {

    constructor(backend: XHRBackend, defaultOptions: RequestOptions, private router: Router, public loaderService: LoaderService) {
        super(backend, defaultOptions);
    }

    
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        options = this.checkForToken(url, options)
        return this.intercept(super.request(url, options));
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.loaderService.displayLoader(true);
        options = this.checkForToken(url, options)
        return this.intercept(super.get(url, options).finally(() => { this.onEnd(); }));
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
       
        this.loaderService.displayLoader(true);
        options = this.checkForToken(url, options)
        return this.intercept(super.post(url, body, options).finally(() => { this.onEnd(); }));
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        this.loaderService.displayLoader(true);
        options = this.checkForToken(url, options)
        return this.intercept(super.put(url, body, options).finally(() => { this.onEnd(); }));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.loaderService.displayLoader(true);
        options = this.checkForToken(url, options)
        return this.intercept(super.delete(url, options).finally(() => { this.onEnd(); }));
    }

    private checkForToken(url: string | Request, options?: RequestOptionsArgs): RequestOptionsArgs {
        //	if(options != null) return options;

        //let token = AuthenticationService.Token;
       let currentUser =  JSON.parse(localStorage.getItem("currentUser"));
       let token=currentUser.token;
        console.log('AuthenticatedHttp.checkForToken found token ' + token);
        if (token == null || token == "") return null;
        if (options == null) {
            let headers = new Headers({ 'Authorization': token });
            options = new RequestOptions({ headers: headers });
        }
        else {
            if (!options.headers.has('Authorization'))
                options.headers.append('Authorization', token);
        }
        return options;
    }

    intercept(observable: Observable<Response>): Observable<Response> {
        return observable.catch((error: Response) => {
            if (error.status === 401 || error.status === 403) {
                console.log('The session expired or the user is not authorized');

                //TODO: how to deal with this
                //this.router.navigateByUrl('/login');
                return Observable.throw(error);
            }
            else {
                return Observable.throw(error);
            }
        });;
    }

    private onEnd(): void {
        this.loaderService.displayLoader(false);
    }
}