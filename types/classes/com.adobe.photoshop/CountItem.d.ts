/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class CountItem extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** The position of count item in the document. */
			public readonly position: any[];
			/** delete the object */
			public remove(): void;
		}
	}
}