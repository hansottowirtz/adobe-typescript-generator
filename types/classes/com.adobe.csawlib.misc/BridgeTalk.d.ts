/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.csawlib.misc/index.d.ts"/>
declare namespace Adobe {
	namespace CsawlibMisc {
		class BridgeTalk extends CSHostObject {
			public static readonly appInfo: string;
			public static readonly appInstance: string;
			public static readonly appLocale: string;
			public static readonly appName: string;
			public static appSpecifier: string;
			public static readonly appStatus: string;
			public static readonly appVersion: string;
			public body: string;
			public readonly headers: BridgeTalkHeaders;
			public sender: string;
			public target: string;
			public timeout: number;
			public type: string;
			public bringToFront(target_param: string): void;
			public getDisplayName(target_param: string): string;
			public getSpecifier(app_param: string, version_param: number, locale_param: string): string;
			public getStatus(target_param: string): string;
			public getTargets(version_param: number, locale_param: string): any[];
			public isInstalled(target_param: string): boolean;
			public isRunning(target_param: string): boolean;
			public launch(target_param: string, background_param: string): void;
			public loadAppScript(target_param: string): boolean;
			public ping(target_param: string, key_param: string): string;
			public pump(): boolean;
			public pump2(): boolean;
			public send(timeout_param: number, launchParams_param: string): boolean;
			public sendResult(result_param: any): boolean;
			public updateConnectorCache(scanRunningApps_param: any): boolean;
		}
	}
}