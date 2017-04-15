/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PICTCompression extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** High quality JPEG encoding. */
			public static readonly JPEGHIGHPICT: Adobe.Photoshop.PICTCompression;
			/** Low quality JPEG encoding (high amount of compression). */
			public static readonly JPEGLOWPICT: Adobe.Photoshop.PICTCompression;
			/** Maximum quality JPEG encoding (very little compression). */
			public static readonly JPEGMAXIMUMPICT: Adobe.Photoshop.PICTCompression;
			/**
			 * Medium quality JPEG encoding (medium amount of compression).
			 */
			public static readonly JPEGMEDIUMPICT: Adobe.Photoshop.PICTCompression;
			/** No compression. */
			public static readonly NONE: Adobe.Photoshop.PICTCompression;
			/** Constructor */
			public constructor();
		}
	}
}