/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * A version of the document stored automatically (and added to 
		 * the history states collection, which preserves the document 
		 * state each time the document is changed).
		 */
		class HistoryState extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** The history state name. */
			public readonly name: string;
			/** If true, the history state is a snapshot. */
			public readonly snapshot: boolean;
		}
	}
}