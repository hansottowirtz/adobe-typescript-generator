/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PhotoCDColorSpace extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Lab with 16 bits per channel. */
			public static readonly LAB16: Adobe.Photoshop.PhotoCDColorSpace;
			/** Lab with 8 bits per channel. */
			public static readonly LAB8: Adobe.Photoshop.PhotoCDColorSpace;
			/** RGB with 16 bits per channel. */
			public static readonly RGB16: Adobe.Photoshop.PhotoCDColorSpace;
			/** RGB with 8 bits per channel. */
			public static readonly RGB8: Adobe.Photoshop.PhotoCDColorSpace;
			/** Constructor */
			public constructor();
		}
	}
}