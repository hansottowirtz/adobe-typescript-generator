/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PICTCompression extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly JPEGHIGHPICT: Adobe.Photoshop.PICTCompression;
			public static readonly JPEGLOWPICT: Adobe.Photoshop.PICTCompression;
			public static readonly JPEGMAXIMUMPICT: Adobe.Photoshop.PICTCompression;
			public static readonly JPEGMEDIUMPICT: Adobe.Photoshop.PICTCompression;
			public static readonly NONE: Adobe.Photoshop.PICTCompression;
			/** Constructor */
			public constructor();
		}
	}
}