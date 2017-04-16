/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class XmpMetadata extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * raw XML form of file information
			 * @type {string}
			 */
			public rawData: string;
		}
	}
}