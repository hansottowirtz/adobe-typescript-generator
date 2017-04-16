/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A history state for the document */
		class HistoryState extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** the history state's name */
			public readonly name: string;
			/** is the history state a snapshot? */
			public readonly snapshot: boolean;
		}
	}
}