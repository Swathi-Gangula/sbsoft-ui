import { AppConfiguration } from './app-config';

export class QAConfiguration implements AppConfiguration{

	private static apiUrl : string = 'http://qa.localhost:61209/api';

	getWebApiUrl() : string {
		return QAConfiguration.apiUrl;
	}

}