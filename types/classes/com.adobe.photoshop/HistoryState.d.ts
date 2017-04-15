/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class HistoryState extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** The history state name. */
			public readonly name: string;
			/** If true, the history state is a snapshot. */
			public readonly snapshot: boolean;
		}
	}
}