/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DimensionsConstraints extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The dimension remains fixed relative to the parent.
			 * @type {Adobe.Indesign.DimensionsConstraints}
			 * @readonly
			 */
			public static readonly FIXED_DIMENSION: Adobe.Indesign.DimensionsConstraints;
			/**
			 * Alias for FIXED_DIMENSION. The dimension remains fixed 
			 * relative to the parent.
			 * @type {Adobe.Indesign.DimensionsConstraints}
			 * @readonly
			 */
			public static readonly fixedDimension: Adobe.Indesign.DimensionsConstraints;
			/**
			 * The dimension can vary relative to the parent.
			 * @type {Adobe.Indesign.DimensionsConstraints}
			 * @readonly
			 */
			public static readonly FLEXIBLE_DIMENSION: Adobe.Indesign.DimensionsConstraints;
			/**
			 * Alias for FLEXIBLE_DIMENSION. The dimension can vary 
			 * relative to the parent.
			 * @type {Adobe.Indesign.DimensionsConstraints}
			 * @readonly
			 */
			public static readonly flexibleDimension: Adobe.Indesign.DimensionsConstraints;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}