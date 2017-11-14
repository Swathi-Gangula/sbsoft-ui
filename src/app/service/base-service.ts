import {AppComponent} from '../app.component';

export class BaseService {
	getBaseUrl(): string {
         return AppComponent.appSettings.getConfiguration().getWebApiUrl();
    }
}