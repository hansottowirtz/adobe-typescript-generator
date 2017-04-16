/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * To implement an extension, you must define the methods that 
		 * handle nodes. See Adobe Bridge JavaScript Guide and Adobe 
		 * Bridge JavaScript Reference for complete details.
		 */
		class ExtensionModel extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {any}
			 */
			public addToDrag: any;
			/**
			 * @type {any}
			 */
			public authenticate: any;
			/**
			 * @type {any}
			 */
			public cancelRefresh: any;
			/**
			 * @type {any}
			 */
			public copyFrom: any;
			/**
			 * @type {any}
			 */
			public createNewContainer: any;
			/**
			 * @type {any}
			 */
			public doLosslessRotate: any;
			/**
			 * @type {any}
			 */
			public eject: any;
			/**
			 * @type {any}
			 */
			public exists: any;
			/**
			 * @type {any}
			 */
			public getCacheStatus: any;
			/**
			 * @type {any}
			 */
			public getDisplayName: any;
			/**
			 * @type {any}
			 */
			public getDisplayPath: any;
			/**
			 * @type {any}
			 */
			public getFilterCriteria: any;
			/**
			 * @type {any}
			 */
			public getParent: any;
			/**
			 * @type {any}
			 */
			public getPhysicalFileName: any;
			/**
			 * @type {any}
			 */
			public getSearchDefinition: any;
			/**
			 * @type {any}
			 */
			public getSearchDetails: any;
			/**
			 * @type {any}
			 */
			public getSortCriteria: any;
			/**
			 * @type {any}
			 */
			public getUserSortOrder: any;
			/**
			 * @type {any}
			 */
			public initialize: any;
			/**
			 * @type {any}
			 */
			public linkFrom: any;
			/**
			 * @type {any}
			 */
			public lock: any;
			/**
			 * @type {any}
			 */
			public moveFrom: any;
			/**
			 * @type {any}
			 */
			public needAuthentication: any;
			/**
			 * @type {any}
			 */
			public physicalFileExists: any;
			/**
			 * @type {any}
			 */
			public privateData: any;
			/**
			 * @type {any}
			 */
			public refreshInfoset: any;
			/**
			 * @type {any}
			 */
			public registerInterest: any;
			/**
			 * @type {any}
			 */
			public registerStructuralInterest: any;
			/**
			 * @type {any}
			 */
			public resolveLink: any;
			/**
			 * @type {any}
			 */
			public setName: any;
			/**
			 * @type {any}
			 */
			public setUserSortOrder: any;
			/**
			 * @type {any}
			 */
			public supportsLosslessRotate: any;
			/**
			 * @type {any}
			 */
			public supportsUserSortOrder: any;
			/**
			 * @type {any}
			 */
			public terminate: any;
			/**
			 * @type {any}
			 */
			public unlock: any;
			/**
			 * @type {any}
			 */
			public unregisterInterest: any;
			/**
			 * @type {any}
			 */
			public unregisterStructuralInterest: any;
			/**
			 * @type {any}
			 */
			public verifyExternalChanges: any;
			/**
			 * @type {any}
			 */
			public wouldAcceptDrop: any;
			/**
			 * @returns {void}
			 */
			public constructor();
			/**
			 * @param {any[]} args
			 * @returns {void}
			 */
			protected createWithArgs(args: any[]): void;
		}
	}
}