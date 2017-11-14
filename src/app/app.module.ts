import { BrowserModule } from '@angular/platform-browser';


import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { Http, RequestOptions, XHRBackend } from '@angular/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
//import { ConfirmationDialog } from '../../app/common/confirm-dialog/confirmation-dialog';
import { AppComponent } from './app.component';
import { LoginComponent } from './common/login/login.component';

import { HeaderComponent } from './layouts/header.component';
import { FooterComponent } from './layouts/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserService } from './service/user.service';

import { RegisterComponent } from './common/register/register.component';
import {appRoutes} from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AuthenticationService } from './service/authentication.service';
import { AuthenticatedHttp } from './service/AuthenticatedHttp';
import {LoaderService} from './service/loading-service/loading.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CheckListAddTagsComponent } from "./component/checkList/check-list-tags/check-list-add-tags.component";
import { CheckListEditTagsComponent } from "./component/checkList/check-list-tags/check-list-edit-tags.component";
import { CheckListComponent } from './component/checkList/check-list/check-list.component';
import { CheckListTagsComponent } from './component/checkList/check-list-tags/check-list-tags.component';
import { CheckListTagsService} from './component/checkList/check-list-tags/check-list-tags.service';
import { ResetPasswordComponent } from './common/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './common/forget-password/forget-password.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    RegisterComponent,
    CheckListComponent,
    CheckListTagsComponent,
    CheckListAddTagsComponent,
    CheckListEditTagsComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent
  ],
   imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule, 
    BrowserAnimationsModule,    
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents:[CheckListTagsComponent,CheckListAddTagsComponent,CheckListEditTagsComponent,LoginComponent,ResetPasswordComponent,ForgetPasswordComponent],
  providers: [UserService,CheckListTagsService, AuthenticationService, LoaderService,
  {
      provide: AuthenticatedHttp,
      useFactory: getAuthenticatedHttp,
      deps: [XHRBackend, RequestOptions, Router, LoaderService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function getAuthenticatedHttp(backend: XHRBackend, options: RequestOptions, router: Router, loaderService: LoaderService) {
  console.log(router);
  return new AuthenticatedHttp(backend, options, router, loaderService);
}
