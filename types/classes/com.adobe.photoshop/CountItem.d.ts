/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A counted item in a document. See the counting tool. */
		class CountItem extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** position of count item (unit value) */
			public readonly position: any[];
			/** delete the object */
			public remove(): void;
		}
	}
}