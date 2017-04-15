/// <reference path="../../namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class Infoset extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public cacheData: any;
			/** This is not a Property Description. */
			public description: any[];
			/** This is not a Property Description. */
			public readonly extension: string;
			/** This is not a Property Description. */
			public infosetName: string;
			/**
			 * This is not a Method Description.
			 * @param {string} path - 
			 * @param {any} model - 
			 * @param {string} containerHint - 
			 */
			public addChild(path: string, model: any, containerHint: string): void;
			/** This is not a Method Description. */
			public initializeMembersToDefaultValues(): void;
		}
	}
}