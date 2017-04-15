/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class GalleryFontType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Arial font. */
			public static readonly ARIAL: Adobe.Photoshop.GalleryFontType;
			/** Courier New font. */
			public static readonly COURIERNEW: Adobe.Photoshop.GalleryFontType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Helvetica font. */
			public static readonly HELVETICA: Adobe.Photoshop.GalleryFontType;
			/** Times New Roman font. */
			public static readonly TIMESNEWROMAN: Adobe.Photoshop.GalleryFontType;
			/** Constructor */
			public constructor();
		}
	}
}