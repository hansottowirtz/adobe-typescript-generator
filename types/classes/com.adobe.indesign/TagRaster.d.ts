/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TagRaster extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the default setting. For information, see display 
			 * performance preferences.
			 * @type {Adobe.Indesign.TagRaster}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.TagRaster;
			/**
			 * Alias for DEFAULT_VALUE. Uses the default setting. For 
			 * information, see display performance preferences.
			 * @type {Adobe.Indesign.TagRaster}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Indesign.TagRaster;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Grays out raster images.
			 * @type {Adobe.Indesign.TagRaster}
			 * @readonly
			 */
			public static readonly GRAY_OUT: Adobe.Indesign.TagRaster;
			/**
			 * Alias for GRAY_OUT. Grays out raster images.
			 * @type {Adobe.Indesign.TagRaster}
			 * @readonly
			 */
			public static readonly grayOut: Adobe.Indesign.TagRaster;
			/**
			 * Displays a high-resolution version of the image.
			 * @type {Adobe.Indesign.TagRaster}
			 * @readonly
			 */
			public static readonly HIGH_RESOLUTION: Adobe.Indesign.TagRaster;
			/**
			 * Alias for HIGH_RESOLUTION. Displays a high-resolution 
			 * version of the image.
			 * @type {Adobe.Indesign.TagRaster}
			 * @readonly
			 */
			public static readonly highResolution: Adobe.Indesign.TagRaster;
			/**
			 * Alias for PROXY. Displays a low-resolution proxy image 
			 * appropriate for identifying and positioning an image.
			 * @type {Adobe.Indesign.TagRaster}
			 * @readonly
			 */
			public static readonly proxy: Adobe.Indesign.TagRaster;
			/**
			 * Displays a low-resolution proxy image appropriate for 
			 * identifying and positioning an image.
			 * @type {Adobe.Indesign.TagRaster}
			 * @readonly
			 */
			public static readonly PROXY: Adobe.Indesign.TagRaster;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}