/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class SearchDefinition extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public criteriaList: any[];
			/** This is not a Property Description. */
			public defaultResultsLimit: number;
			/** This is not a Property Description. */
			public quickSearchMenuItems: any[];
			/** This is not a Property Description. */
			public ranks: any[];
			/** This is not a Property Description. */
			public scopeSpecifiers: any[];
			/** This is not a Method Description. */
			public constructor();
			/**
			 * @param {any[]} args - 
			 */
			protected createWithArgs(args: any[]): void;
		}
	}
}