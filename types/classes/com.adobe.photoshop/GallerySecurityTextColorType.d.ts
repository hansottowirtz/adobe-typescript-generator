/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * The color to use for text displayed over gallery images as 
		 * an antitheft deterrent.
		 */
		class GallerySecurityTextColorType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Black text. */
			public static readonly BLACK: Adobe.Photoshop.GallerySecurityTextColorType;
			/** Custom color. */
			public static readonly CUSTOM: Adobe.Photoshop.GallerySecurityTextColorType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** White text. */
			public static readonly WHITE: Adobe.Photoshop.GallerySecurityTextColorType;
			/** Constructor */
			public constructor();
		}
	}
}