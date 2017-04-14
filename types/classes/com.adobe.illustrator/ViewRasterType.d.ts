/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
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
			public constructor(ho: HostObject, _enum: number);
		}
	}
}