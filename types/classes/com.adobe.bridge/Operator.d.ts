/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class Operator extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {boolean}
			 */
			public cancelRequested: boolean;
			/**
			 * @type {string}
			 */
			public conflictMessage: string;
			/**
			 * @type {string}
			 */
			public conflictType: string;
			/**
			 * @type {string}
			 */
			public description: string;
			/**
			 * @type {Adobe.Bridge.Thumbnail}
			 */
			public errorTarget: Adobe.Bridge.Thumbnail;
			/**
			 * @type {any}
			 */
			public getConflictInfo: any;
			/**
			 * @type {any}
			 */
			public getOperationStatus: any;
			/**
			 * @type {any}
			 */
			public getPercentageComplete: any;
			/**
			 * @type {any}
			 */
			public getProcessedNodeCount: any;
			/**
			 * @type {any}
			 */
			public getProcessingStatus: any;
			/**
			 * @type {any}
			 */
			public getProgressMessage: any;
			/**
			 * @type {any}
			 */
			public getPurpose: any;
			/**
			 * @type {any}
			 */
			public getTotalBytesTransferred: any;
			/**
			 * @type {any}
			 */
			public getTotalNodeCount: any;
			/**
			 * @type {any}
			 */
			public getType: any;
			/**
			 * @type {any}
			 */
			public getUIPolicy: any;
			/**
			 * @type {any[]}
			 */
			public newNames: any[];
			/**
			 * @type {string}
			 */
			public operationStatus: string;
			/**
			 * @type {number}
			 */
			public percentageComplete: number;
			/**
			 * @type {string}
			 */
			public processingStatus: string;
			/**
			 * @type {string}
			 */
			public progressMessage: string;
			/**
			 * @type {any}
			 */
			public resolveConflict: any;
			/**
			 * @type {string}
			 */
			public resolveMethod: string;
			/**
			 * @type {string}
			 */
			public resolvePolicy: string;
			/**
			 * @type {string}
			 */
			public result: string;
			/**
			 * @type {any}
			 */
			public resume: any;
			/**
			 * @type {boolean}
			 */
			public showUi: boolean;
			/**
			 * @type {any[]}
			 */
			public sources: any[];
			/**
			 * @type {any}
			 */
			public start: any;
			/**
			 * @type {any}
			 */
			public stop: any;
			/**
			 * @type {Adobe.Bridge.Thumbnail}
			 */
			public target: Adobe.Bridge.Thumbnail;
			/**
			 * @type {number}
			 */
			public timeout: number;
		}
	}
}