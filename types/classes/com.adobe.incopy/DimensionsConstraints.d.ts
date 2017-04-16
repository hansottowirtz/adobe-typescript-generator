/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class DimensionsConstraints extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The dimension remains fixed relative to the parent. */
			public static readonly FIXED_DIMENSION: Adobe.Incopy.DimensionsConstraints;
			/**
			 * Alias for FIXED_DIMENSION. The dimension remains fixed 
			 * relative to the parent.
			 */
			public static readonly fixedDimension: Adobe.Incopy.DimensionsConstraints;
			/** The dimension can vary relative to the parent. */
			public static readonly FLEXIBLE_DIMENSION: Adobe.Incopy.DimensionsConstraints;
			/**
			 * Alias for FLEXIBLE_DIMENSION. The dimension can vary 
			 * relative to the parent.
			 */
			public static readonly flexibleDimension: Adobe.Incopy.DimensionsConstraints;
			/** Constructor */
			public constructor();
		}
	}
}