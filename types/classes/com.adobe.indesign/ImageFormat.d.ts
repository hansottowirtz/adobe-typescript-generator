/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImageFormat extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for GIF. Uses GIF format for selected object. */
			public static readonly gif: Adobe.Indesign.ImageFormat;
			/** Uses GIF format for selected object. */
			public static readonly GIF: Adobe.Indesign.ImageFormat;
			/** Alias for JPEG. Uses JPEG format for selected object. */
			public static readonly jpeg: Adobe.Indesign.ImageFormat;
			/** Uses JPEG format for selected object. */
			public static readonly JPEG: Adobe.Indesign.ImageFormat;
			/** Alias for PNG. Uses PNG format, for selected object. */
			public static readonly png: Adobe.Indesign.ImageFormat;
			/** Uses PNG format, for selected object. */
			public static readonly PNG: Adobe.Indesign.ImageFormat;
			/** Constructor */
			public constructor();
		}
	}
}