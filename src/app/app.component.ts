import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppSettings } from '../environments/app-settings';
import { LoaderService } from './service/loading-service/loading.service';
import { Subscription } from 'rxjs/Subscription'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent  implements OnInit, OnDestroy {
  title = 'app Works';

  displayLoader: boolean; 
  loaderSubscription: Subscription;
  public static appSettings = new AppSettings(AppSettings.DEV);
 
  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderSubscription = this.loaderService.loaderCounter.subscribe((counter: number) => {

       console.log('counter', counter);

       this.displayLoader = counter != 0; 

        console.log('displayLoader',  this.displayLoader);
    });
  }

  ngOnDestroy() {
    this.loaderSubscription.unsubscribe();
  }
}

window.onbeforeunload = function () {
  sessionStorage.removeItem('currentUser');
  return '';
};
