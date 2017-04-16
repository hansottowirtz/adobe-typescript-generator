/// <reference path="../../packages/com.adobe.csawlib.misc/references.d.ts"/>

declare namespace Adobe {
	namespace CsawlibMisc {
		class BridgeTalk extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {string}
			 * @readonly
			 */
			public static readonly appInfo: string;
			/**
			 * @type {string}
			 * @readonly
			 */
			public static readonly appInstance: string;
			/**
			 * @type {string}
			 * @readonly
			 */
			public static readonly appLocale: string;
			/**
			 * @type {string}
			 * @readonly
			 */
			public static readonly appName: string;
			/**
			 * @type {string}
			 */
			public static appSpecifier: string;
			/**
			 * @type {string}
			 * @readonly
			 */
			public static readonly appStatus: string;
			/**
			 * @type {string}
			 * @readonly
			 */
			public static readonly appVersion: string;
			/**
			 * @type {string}
			 */
			public body: string;
			/**
			 * @type {Adobe.CsawlibMisc.BridgeTalkHeaders}
			 * @readonly
			 */
			public readonly headers: Adobe.CsawlibMisc.BridgeTalkHeaders;
			/**
			 * @type {string}
			 */
			public sender: string;
			/**
			 * @type {string}
			 */
			public target: string;
			/**
			 * @type {number}
			 */
			public timeout: number;
			/**
			 * @type {string}
			 */
			public type: string;
			/**
			 * @param {string} target_param
			 * @returns {void}
			 */
			public bringToFront(target_param: string): void;
			/**
			 * @param {string} target_param
			 * @returns {string}
			 */
			public getDisplayName(target_param: string): string;
			/**
			 * @param {string} app_param
			 * @param {number} version_param
			 * @param {string} locale_param
			 * @returns {string}
			 */
			public getSpecifier(app_param: string, version_param: number, locale_param: string): string;
			/**
			 * @param {string} target_param
			 * @returns {string}
			 */
			public getStatus(target_param: string): string;
			/**
			 * @param {number} version_param
			 * @param {string} locale_param
			 * @returns {any[]}
			 */
			public getTargets(version_param: number, locale_param: string): any[];
			/**
			 * @param {string} target_param
			 * @returns {boolean}
			 */
			public isInstalled(target_param: string): boolean;
			/**
			 * @param {string} target_param
			 * @returns {boolean}
			 */
			public isRunning(target_param: string): boolean;
			/**
			 * @param {string} target_param
			 * @param {string} background_param
			 * @returns {void}
			 */
			public launch(target_param: string, background_param: string): void;
			/**
			 * @param {string} target_param
			 * @returns {boolean}
			 */
			public loadAppScript(target_param: string): boolean;
			/**
			 * @param {string} target_param
			 * @param {string} key_param
			 * @returns {string}
			 */
			public ping(target_param: string, key_param: string): string;
			/**
			 * @returns {boolean}
			 */
			public pump(): boolean;
			/**
			 * @returns {boolean}
			 */
			public pump2(): boolean;
			/**
			 * @param {number} timeout_param
			 * @param {string} launchParams_param
			 * @returns {boolean}
			 */
			public send(timeout_param: number, launchParams_param: string): boolean;
			/**
			 * @param {any} result_param
			 * @returns {boolean}
			 */
			public sendResult(result_param: any): boolean;
			/**
			 * @param {any} scanRunningApps_param
			 * @returns {boolean}
			 */
			public updateConnectorCache(scanRunningApps_param: any): boolean;
		}
	}
}