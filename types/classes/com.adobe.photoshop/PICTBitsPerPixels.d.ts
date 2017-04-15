/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * The number of bits per pixel to use when compressing a PICT 
		 * file.
		 */
		class PICTBitsPerPixels extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** 8 bits per pixel. */
			public static readonly EIGHT: Adobe.Photoshop.PICTBitsPerPixels;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** 4 bits per pixel. */
			public static readonly FOUR: Adobe.Photoshop.PICTBitsPerPixels;
			/** 16 bits per pixel. */
			public static readonly SIXTEEN: Adobe.Photoshop.PICTBitsPerPixels;
			/** 32 bits per pixel. */
			public static readonly THIRTYTWO: Adobe.Photoshop.PICTBitsPerPixels;
			/** 2 bits per pixel. */
			public static readonly TWO: Adobe.Photoshop.PICTBitsPerPixels;
			/** Constructor */
			public constructor();
		}
	}
}