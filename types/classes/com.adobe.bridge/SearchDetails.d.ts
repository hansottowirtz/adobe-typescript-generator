/// <reference path="../../namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class SearchDetails extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public searchSpecification: Adobe.Bridge.SearchSpecification;
			/** This is not a Property Description. */
			public searchTargetUri: string;
			/** This is not a Method Description. */
			public constructor();
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
		}
	}
}