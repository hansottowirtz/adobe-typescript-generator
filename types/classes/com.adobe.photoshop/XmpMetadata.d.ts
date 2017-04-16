/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class XmpMetadata extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** raw XML form of file information */
			public rawData: string;
		}
	}
}