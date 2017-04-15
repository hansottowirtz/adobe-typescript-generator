/// <reference path="../../namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class SearchSpecification extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public conditionList: any[];
			/** This is not a Property Description. */
			public conjunction: string;
			/** This is not a Property Description. */
			public maximumResults: number;
			/** This is not a Property Description. */
			public quickSearchItem: string;
			/** This is not a Property Description. */
			public quickSearchValue: string;
			/** This is not a Property Description. */
			public rankField: string;
			/** This is not a Property Description. */
			public rankOrdering: string;
			/** This is not a Property Description. */
			public scopeSpecifiers: any[];
			/** This is not a Method Description. */
			public constructor();
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
		}
	}
}