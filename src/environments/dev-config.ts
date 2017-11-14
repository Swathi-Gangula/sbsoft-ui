import { AppConfiguration } from './app-config';

export class DevConfiguration implements AppConfiguration{

	//private static apiUrl : string = 'http://10.104.123.126:9090/api';

	private static apiUrl : string = 'http://localhost:8080/';
	getWebApiUrl() : string {
		return DevConfiguration.apiUrl;
	}

}