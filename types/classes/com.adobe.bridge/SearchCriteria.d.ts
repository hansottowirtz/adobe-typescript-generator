/// <reference path="../../namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class SearchCriteria extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public operands: any[];
			/** This is not a Property Description. */
			public operandType: string;
			/** This is not a Property Description. */
			public operatorTypesToDisable: any[];
			/** This is not a Property Description. */
			public searchField: string;
			/** This is not a Property Description. */
			public searchFieldDisplay: string;
			/** This is not a Property Description. */
			public searchFieldSort: boolean;
			/** This is not a Method Description. */
			public constructor();
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
		}
	}
}