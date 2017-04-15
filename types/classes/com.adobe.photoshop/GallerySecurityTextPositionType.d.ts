/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * The position of the text displayed over gallery images as an 
		 * antitheft deterrent.
		 */
		class GallerySecurityTextPositionType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Text is centered on each image. */
			public static readonly CENTERED: Adobe.Photoshop.GallerySecurityTextPositionType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Ltext is in the lower left corner of each image. */
			public static readonly LOWERLEFT: Adobe.Photoshop.GallerySecurityTextPositionType;
			/** Text is in the lower right corner of each image. */
			public static readonly LOWERRIGHT: Adobe.Photoshop.GallerySecurityTextPositionType;
			/** Text is in the upper left corner of each image. */
			public static readonly UPPERLEFT: Adobe.Photoshop.GallerySecurityTextPositionType;
			/** Text is in the upper right corner of each image. */
			public static readonly UPPERRIGHT: Adobe.Photoshop.GallerySecurityTextPositionType;
			/** Constructor */
			public constructor();
		}
	}
}