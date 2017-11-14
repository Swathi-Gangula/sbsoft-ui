import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AuthGuard } from './service/auth.service';
import { CheckListComponent } from './component/checkList/check-list/check-list.component';
import { CheckListTagsComponent } from './component/checkList/check-list-tags/check-list-tags.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'checkListTags', component: CheckListTagsComponent },
  { path: 'checkList', component: CheckListComponent }
 ]


