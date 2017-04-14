/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ViewRasterType extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Adjusted image. */
			public static readonly TRACINGVIEWRASTERADJUSTEDIMAGE: ViewRasterType;
			/** No rasters. */
			public static readonly TRACINGVIEWRASTERNOIMAGE: ViewRasterType;
			/** Original image. */
			public static readonly TRACINGVIEWRASTERORIGINALIMAGE: ViewRasterType;
			/** Original transparent (dimmed) image. */
			public static readonly TRACINGVIEWRASTERTRANSPARENTIMAGE: ViewRasterType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}