/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class TIFFEncoding extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly JPEG: Adobe.Photoshop.TIFFEncoding;
			public static readonly NONE: Adobe.Photoshop.TIFFEncoding;
			public static readonly TIFFLZW: Adobe.Photoshop.TIFFEncoding;
			public static readonly TIFFZIP: Adobe.Photoshop.TIFFEncoding;
			/** Constructor */
			public constructor();
		}
	}
}