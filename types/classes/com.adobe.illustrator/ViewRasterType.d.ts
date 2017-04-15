/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Controls the type of raster image visualization. */
		class ViewRasterType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Adjusted image. */
			public static readonly TRACINGVIEWRASTERADJUSTEDIMAGE: Adobe.Illustrator.ViewRasterType;
			/** No rasters. */
			public static readonly TRACINGVIEWRASTERNOIMAGE: Adobe.Illustrator.ViewRasterType;
			/** Original image. */
			public static readonly TRACINGVIEWRASTERORIGINALIMAGE: Adobe.Illustrator.ViewRasterType;
			/** Original transparent (dimmed) image. */
			public static readonly TRACINGVIEWRASTERTRANSPARENTIMAGE: Adobe.Illustrator.ViewRasterType;
			/** Constructor */
			public constructor();
		}
	}
}