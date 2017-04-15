/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * Deprecated for Adobe Photoshop CS3. web photo gallery 
		 * security text rotation types.
		 */
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