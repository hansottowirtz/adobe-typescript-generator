/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PhotoCDSize extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** 1024x1536 image. */
			public static readonly EXTRALARGE: Adobe.Photoshop.PhotoCDSize;
			/** 512x768 image. */
			public static readonly LARGE: Adobe.Photoshop.PhotoCDSize;
			/** 2048x3072 image. */
			public static readonly MAXIMUM: Adobe.Photoshop.PhotoCDSize;
			/** 256x384 image. */
			public static readonly MEDIUM: Adobe.Photoshop.PhotoCDSize;
			/** 64x96 image. */
			public static readonly MINIMUM: Adobe.Photoshop.PhotoCDSize;
			/** 128x192 image. */
			public static readonly SMALL: Adobe.Photoshop.PhotoCDSize;
			/** Constructor */
			public constructor();
		}
	}
}