/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class GallerySecurityType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Caption security. */
			public static readonly CAPTION: Adobe.Photoshop.GallerySecurityType;
			/** Copyright security. */
			public static readonly COPYRIGHT: Adobe.Photoshop.GallerySecurityType;
			/** Credit security. */
			public static readonly CREDIT: Adobe.Photoshop.GallerySecurityType;
			/** Custom text security. */
			public static readonly CUSTOMTEXT: Adobe.Photoshop.GallerySecurityType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Filename security. */
			public static readonly FILENAME: Adobe.Photoshop.GallerySecurityType;
			/** No security. */
			public static readonly NONE: Adobe.Photoshop.GallerySecurityType;
			/** Title security. */
			public static readonly TITLE: Adobe.Photoshop.GallerySecurityType;
			/** Constructor */
			public constructor();
		}
	}
}