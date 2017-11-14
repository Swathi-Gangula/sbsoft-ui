import { AppConfiguration } from './app-config';

export class ProdConfiguration implements AppConfiguration{

	private static apiUrl : string = 'http://prod.localhost:61209/api';

	getWebApiUrl() : string {
		return ProdConfiguration.apiUrl;
	}

}