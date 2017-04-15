/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XFLRasterizeFormatOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for AUTOMATIC. Uses the best format based on the image 
			 * when rasterizes.
			 */
			public static readonly automatic: Adobe.Indesign.XFLRasterizeFormatOptions;
			/** Uses the best format based on the image when rasterizes. */
			public static readonly AUTOMATIC: Adobe.Indesign.XFLRasterizeFormatOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for GIF. Uses GIF format when rasterizes. */
			public static readonly gif: Adobe.Indesign.XFLRasterizeFormatOptions;
			/** Uses GIF format when rasterizes. */
			public static readonly GIF: Adobe.Indesign.XFLRasterizeFormatOptions;
			/** Alias for JPEG. Uses JPEG format when rasterizes. */
			public static readonly jpeg: Adobe.Indesign.XFLRasterizeFormatOptions;
			/** Uses JPEG format when rasterizes. */
			public static readonly JPEG: Adobe.Indesign.XFLRasterizeFormatOptions;
			/** Alias for PNG. Uses PNG format when rasterizes. */
			public static readonly png: Adobe.Indesign.XFLRasterizeFormatOptions;
			/** Uses PNG format when rasterizes. */
			public static readonly PNG: Adobe.Indesign.XFLRasterizeFormatOptions;
			/** Constructor */
			public constructor();
		}
	}
}