/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * To implement an extension, you must define the methods that 
		 * handle nodes. See Adobe Bridge JavaScript Guide and Adobe 
		 * Bridge JavaScript Reference for complete details.
		 */
		class ExtensionModel extends Adobe.Csawlib.CSHostObject {
			public addToDrag: any;
			public authenticate: any;
			public cancelRefresh: any;
			public copyFrom: any;
			public createNewContainer: any;
			public doLosslessRotate: any;
			public eject: any;
			public exists: any;
			public getCacheStatus: any;
			public getDisplayName: any;
			public getDisplayPath: any;
			public getFilterCriteria: any;
			public getParent: any;
			public getPhysicalFileName: any;
			public getSearchDefinition: any;
			public getSearchDetails: any;
			public getSortCriteria: any;
			public getUserSortOrder: any;
			public initialize: any;
			public linkFrom: any;
			public lock: any;
			public moveFrom: any;
			public needAuthentication: any;
			public physicalFileExists: any;
			public privateData: any;
			public refreshInfoset: any;
			public registerInterest: any;
			public registerStructuralInterest: any;
			public resolveLink: any;
			public setName: any;
			public setUserSortOrder: any;
			public supportsLosslessRotate: any;
			public supportsUserSortOrder: any;
			public terminate: any;
			public unlock: any;
			public unregisterInterest: any;
			public unregisterStructuralInterest: any;
			public verifyExternalChanges: any;
			public wouldAcceptDrop: any;
			public constructor();
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
		}
	}
}