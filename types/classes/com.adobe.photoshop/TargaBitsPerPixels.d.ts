/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class TargaBitsPerPixels extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** 16 bits per pixel. */
			public static readonly SIXTEEN: Adobe.Photoshop.TargaBitsPerPixels;
			/** 32 bits per pixel. */
			public static readonly THIRTYTWO: Adobe.Photoshop.TargaBitsPerPixels;
			/** 24 bits per pixel. */
			public static readonly TWENTYFOUR: Adobe.Photoshop.TargaBitsPerPixels;
			/** Constructor */
			public constructor();
		}
	}
}