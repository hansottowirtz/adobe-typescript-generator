/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.csawlib.misc/index.d.ts"/>

declare namespace Adobe {
	namespace CsawlibMisc {
		class BridgeTalk extends Adobe.Csawlib.CSHostObject {
			public static readonly appInfo: string;
			public static readonly appInstance: string;
			public static readonly appLocale: string;
			public static readonly appName: string;
			public static appSpecifier: string;
			public static readonly appStatus: string;
			public static readonly appVersion: string;
			public body: string;
			public readonly headers: Adobe.CsawlibMisc.BridgeTalkHeaders;
			public sender: string;
			public target: string;
			public timeout: number;
			public type: string;
			/**
			 * @param {string} target_param - 
			 */
			public bringToFront(target_param: string): void;
			/**
			 * @param {string} target_param - 
			 */
			public getDisplayName(target_param: string): string;
			/**
			 * @param {string} app_param - 
			 * @param {number} version_param - 
			 * @param {string} locale_param - 
			 */
			public getSpecifier(app_param: string, version_param: number, locale_param: string): string;
			/**
			 * @param {string} target_param - 
			 */
			public getStatus(target_param: string): string;
			/**
			 * @param {number} version_param - 
			 * @param {string} locale_param - 
			 */
			public getTargets(version_param: number, locale_param: string): any[];
			/**
			 * @param {string} target_param - 
			 */
			public isInstalled(target_param: string): boolean;
			/**
			 * @param {string} target_param - 
			 */
			public isRunning(target_param: string): boolean;
			/**
			 * @param {string} target_param - 
			 * @param {string} background_param - 
			 */
			public launch(target_param: string, background_param: string): void;
			/**
			 * @param {string} target_param - 
			 */
			public loadAppScript(target_param: string): boolean;
			/**
			 * @param {string} target_param - 
			 * @param {string} key_param - 
			 */
			public ping(target_param: string, key_param: string): string;
			public pump(): boolean;
			public pump2(): boolean;
			/**
			 * @param {number} timeout_param - 
			 * @param {string} launchParams_param - 
			 */
			public send(timeout_param: number, launchParams_param: string): boolean;
			/**
			 * @param {any} result_param - 
			 */
			public sendResult(result_param: any): boolean;
			/**
			 * @param {any} scanRunningApps_param - 
			 */
			public updateConnectorCache(scanRunningApps_param: any): boolean;
		}
	}
}