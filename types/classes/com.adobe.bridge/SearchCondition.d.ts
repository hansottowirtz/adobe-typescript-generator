/// <reference path="../../namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class SearchCondition extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public operand: string;
			/** This is not a Property Description. */
			public operatorType: string;
			/** This is not a Property Description. */
			public searchField: string;
			/** This is not a Property Description. */
			public secondaryOperand: string;
			/** This is not a Method Description. */
			public constructor();
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
		}
	}
}