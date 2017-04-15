/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class XmpMetadata extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** The raw XML form of file information. */
			public rawData: string;
		}
	}
}