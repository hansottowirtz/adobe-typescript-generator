/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Controls the type of raster image visualization. */
		class ViewRasterType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Adjusted image.
			 * @type {Adobe.Illustrator.ViewRasterType}
			 * @readonly
			 */
			public static readonly TRACINGVIEWRASTERADJUSTEDIMAGE: Adobe.Illustrator.ViewRasterType;
			/**
			 * No rasters.
			 * @type {Adobe.Illustrator.ViewRasterType}
			 * @readonly
			 */
			public static readonly TRACINGVIEWRASTERNOIMAGE: Adobe.Illustrator.ViewRasterType;
			/**
			 * Original image.
			 * @type {Adobe.Illustrator.ViewRasterType}
			 * @readonly
			 */
			public static readonly TRACINGVIEWRASTERORIGINALIMAGE: Adobe.Illustrator.ViewRasterType;
			/**
			 * Original transparent (dimmed) image.
			 * @type {Adobe.Illustrator.ViewRasterType}
			 * @readonly
			 */
			public static readonly TRACINGVIEWRASTERTRANSPARENTIMAGE: Adobe.Illustrator.ViewRasterType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}