/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TagRaster extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the default setting. For information, see display 
			 * performance preferences.
			 */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.TagRaster;
			/**
			 * Alias for DEFAULT_VALUE. Uses the default setting. For 
			 * information, see display performance preferences.
			 */
			public static readonly defaultValue: Adobe.Indesign.TagRaster;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Grays out raster images. */
			public static readonly GRAY_OUT: Adobe.Indesign.TagRaster;
			/** Alias for GRAY_OUT. Grays out raster images. */
			public static readonly grayOut: Adobe.Indesign.TagRaster;
			/** Displays a high-resolution version of the image. */
			public static readonly HIGH_RESOLUTION: Adobe.Indesign.TagRaster;
			/**
			 * Alias for HIGH_RESOLUTION. Displays a high-resolution 
			 * version of the image.
			 */
			public static readonly highResolution: Adobe.Indesign.TagRaster;
			/**
			 * Alias for PROXY. Displays a low-resolution proxy image 
			 * appropriate for identifying and positioning an image.
			 */
			public static readonly proxy: Adobe.Indesign.TagRaster;
			/**
			 * Displays a low-resolution proxy image appropriate for 
			 * identifying and positioning an image.
			 */
			public static readonly PROXY: Adobe.Indesign.TagRaster;
			/** Constructor */
			public constructor();
		}
	}
}