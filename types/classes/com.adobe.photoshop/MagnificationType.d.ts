/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class MagnificationType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Displays the image at actual size. */
			public static readonly ACTUALSIZE: Adobe.Photoshop.MagnificationType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Fits the image to the page. */
			public static readonly FITPAGE: Adobe.Photoshop.MagnificationType;
			/** Constructor */
			public constructor();
		}
	}
}