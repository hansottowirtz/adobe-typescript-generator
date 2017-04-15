/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class BoundingBoxLimits extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Geometric path bounds */
			public static readonly GEOMETRIC_PATH_BOUNDS: Adobe.Incopy.BoundingBoxLimits;
			/** Alias for GEOMETRIC_PATH_BOUNDS. Geometric path bounds */
			public static readonly geometricPathBounds: Adobe.Incopy.BoundingBoxLimits;
			/** Outer stroke bounds */
			public static readonly OUTER_STROKE_BOUNDS: Adobe.Incopy.BoundingBoxLimits;
			/** Alias for OUTER_STROKE_BOUNDS. Outer stroke bounds */
			public static readonly outerStrokeBounds: Adobe.Incopy.BoundingBoxLimits;
			/** Constructor */
			public constructor();
		}
	}
}