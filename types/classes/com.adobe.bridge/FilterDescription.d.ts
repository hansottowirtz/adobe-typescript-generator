/// <reference path="../../namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class FilterDescription extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public closedValueList: any[];
			/** This is not a Property Description. */
			public displayName: string;
			/** This is not a Property Description. */
			public filterType: string;
			/** This is not a Property Description. */
			public infosetMember: string;
			/** This is not a Property Description. */
			public isExclusive: boolean;
			/** This is not a Property Description. */
			public name: string;
			/** This is not a Property Description. */
			public xmpNamespace: string;
			/** This is not a Property Description. */
			public xmpProperty: string;
			/** This is not a Method Description. */
			public constructor();
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
		}
	}
}