/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ScaleModes extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Scales the page to fit the paper. Note: Valid only when tile 
			 * is false.
			 */
			public static readonly SCALE_TO_FIT: Adobe.Incopy.ScaleModes;
			/** Scales the page width and height. */
			public static readonly SCALE_WIDTH_HEIGHT: Adobe.Incopy.ScaleModes;
			/**
			 * Alias for SCALE_TO_FIT. Scales the page to fit the paper. 
			 * Note: Valid only when tile is false.
			 */
			public static readonly scaleToFit: Adobe.Incopy.ScaleModes;
			/**
			 * Alias for SCALE_WIDTH_HEIGHT. Scales the page width and 
			 * height.
			 */
			public static readonly scaleWidthHeight: Adobe.Incopy.ScaleModes;
			/** Constructor */
			public constructor();
		}
	}
}