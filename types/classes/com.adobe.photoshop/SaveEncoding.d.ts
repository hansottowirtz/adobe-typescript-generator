/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SaveEncoding extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly ASCII: Adobe.Photoshop.SaveEncoding;
			public static readonly BINARY: Adobe.Photoshop.SaveEncoding;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly JPEGHIGH: Adobe.Photoshop.SaveEncoding;
			public static readonly JPEGLOW: Adobe.Photoshop.SaveEncoding;
			public static readonly JPEGMAXIMUM: Adobe.Photoshop.SaveEncoding;
			public static readonly JPEGMEDIUM: Adobe.Photoshop.SaveEncoding;
			/** Constructor */
			public constructor();
		}
	}
}