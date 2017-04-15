/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class GallerySecurityTextRotateType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Rotate 45 degrees clock wise. */
			public static readonly CLOCKWISE45: Adobe.Photoshop.GallerySecurityTextRotateType;
			/** Rotate 90 degrees clock wise. */
			public static readonly CLOCKWISE90: Adobe.Photoshop.GallerySecurityTextRotateType;
			/** Rotate 45 degrees counter clock wise. */
			public static readonly COUNTERCLOCKWISE45: Adobe.Photoshop.GallerySecurityTextRotateType;
			/** Rotate 90 degrees counter clock wise. */
			public static readonly COUNTERCLOCKWISE90: Adobe.Photoshop.GallerySecurityTextRotateType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** No rotate. */
			public static readonly ZERO: Adobe.Photoshop.GallerySecurityTextRotateType;
			/** Constructor */
			public constructor();
		}
	}
}