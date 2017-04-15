/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * A counted item in the document. The count item feature is 
		 * available in the Extended Version only.
		 */
		class CountItem extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** The position of count item in the document. */
			public readonly position: any[];
			/** delete the object */
			public remove(): void;
		}
	}
}