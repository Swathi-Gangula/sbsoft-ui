import { AppConfiguration } from './app-config';
import { DevConfiguration } from './dev-config';
import { QAConfiguration } from './qa-config';
import { ProdConfiguration } from './prod-config';

export class AppSettings {

	public static PROD : string= 'prod';
	public static DEV : string= 'dev';
	public static QA : string= 'qa';

	public prodConfiguration : ProdConfiguration;
	public qaConfiguration : ProdConfiguration;
	public devConfiguration : ProdConfiguration;

	constructor(public env: string){ }

	getConfiguration() : AppConfiguration {
		
		switch(this.env) {
			case AppSettings.PROD: {
				if(this.prodConfiguration == null) {
					this.prodConfiguration = new ProdConfiguration();
				}
				return this.prodConfiguration;
			} 
			case AppSettings.DEV: {
				if(this.devConfiguration == null) {
					this.devConfiguration = new DevConfiguration();
				}
				return this.devConfiguration;
			} 
			case AppSettings.QA: {
				if(this.qaConfiguration == null) {
					this.qaConfiguration = new QAConfiguration();
				}
				return this.qaConfiguration;
			} 
		}
	}
}