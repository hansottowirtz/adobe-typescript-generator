/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * Camera raw image file settings stored in an XMP file in the 
		 * same folder as the raw file with the same base name and an 
		 * XMP extension.
		 */
		class XmpMetadata extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** The raw XML form of file information. */
			public rawData: string;
		}
	}
}