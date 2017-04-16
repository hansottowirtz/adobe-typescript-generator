/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DimensionsConstraints extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The dimension remains fixed relative to the parent. */
			public static readonly FIXED_DIMENSION: Adobe.Indesign.DimensionsConstraints;
			/**
			 * Alias for FIXED_DIMENSION. The dimension remains fixed 
			 * relative to the parent.
			 */
			public static readonly fixedDimension: Adobe.Indesign.DimensionsConstraints;
			/** The dimension can vary relative to the parent. */
			public static readonly FLEXIBLE_DIMENSION: Adobe.Indesign.DimensionsConstraints;
			/**
			 * Alias for FLEXIBLE_DIMENSION. The dimension can vary 
			 * relative to the parent.
			 */
			public static readonly flexibleDimension: Adobe.Indesign.DimensionsConstraints;
			/** Constructor */
			public constructor();
		}
	}
}