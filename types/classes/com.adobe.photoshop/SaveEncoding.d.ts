/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SaveEncoding extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** ASCII. */
			public static readonly ASCII: Adobe.Photoshop.SaveEncoding;
			/** Binary. */
			public static readonly BINARY: Adobe.Photoshop.SaveEncoding;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** High quality JPEG encoding. */
			public static readonly JPEGHIGH: Adobe.Photoshop.SaveEncoding;
			/** Low quality JPEG encoding (high amount of compression). */
			public static readonly JPEGLOW: Adobe.Photoshop.SaveEncoding;
			/** Maximum quality JPEG encoding (very little compression). */
			public static readonly JPEGMAXIMUM: Adobe.Photoshop.SaveEncoding;
			/** Medium quality JPEG encoding (medium compression). */
			public static readonly JPEGMEDIUM: Adobe.Photoshop.SaveEncoding;
			/** Constructor */
			public constructor();
		}
	}
}