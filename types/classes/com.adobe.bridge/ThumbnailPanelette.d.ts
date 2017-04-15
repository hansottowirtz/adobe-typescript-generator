/// <reference path="../../namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class ThumbnailPanelette extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public keyValuePairs: any[];
			/** This is not a Property Description. */
			public name: string;
			/** This is not a Property Description. */
			public textPosition: string;
			/** This is not a Property Description. */
			public thumbnails: any[];
			/** This is not a Property Description. */
			public titleMarkup: string;
			/** This is not a Method Description. */
			public constructor();
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
		}
	}
}