/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class Operator extends Adobe.Csawlib.CSHostObject {
			public cancelRequested: boolean;
			public conflictMessage: string;
			public conflictType: string;
			public description: string;
			public errorTarget: Adobe.Bridge.Thumbnail;
			public getConflictInfo: any;
			public getOperationStatus: any;
			public getPercentageComplete: any;
			public getProcessedNodeCount: any;
			public getProcessingStatus: any;
			public getProgressMessage: any;
			public getPurpose: any;
			public getTotalBytesTransferred: any;
			public getTotalNodeCount: any;
			public getType: any;
			public getUIPolicy: any;
			public newNames: any[];
			public operationStatus: string;
			public percentageComplete: number;
			public processingStatus: string;
			public progressMessage: string;
			public resolveConflict: any;
			public resolveMethod: string;
			public resolvePolicy: string;
			public result: string;
			public resume: any;
			public showUi: boolean;
			public sources: any[];
			public start: any;
			public stop: any;
			public target: Adobe.Bridge.Thumbnail;
			public timeout: number;
		}
	}
}