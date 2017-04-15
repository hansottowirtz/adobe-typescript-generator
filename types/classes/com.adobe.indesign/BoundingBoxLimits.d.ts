/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BoundingBoxLimits extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Geometric path bounds */
			public static readonly GEOMETRIC_PATH_BOUNDS: Adobe.Indesign.BoundingBoxLimits;
			/** Alias for GEOMETRIC_PATH_BOUNDS. Geometric path bounds */
			public static readonly geometricPathBounds: Adobe.Indesign.BoundingBoxLimits;
			/** Outer stroke bounds */
			public static readonly OUTER_STROKE_BOUNDS: Adobe.Indesign.BoundingBoxLimits;
			/** Alias for OUTER_STROKE_BOUNDS. Outer stroke bounds */
			public static readonly outerStrokeBounds: Adobe.Indesign.BoundingBoxLimits;
			/** Constructor */
			public constructor();
		}
	}
}