/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BoundingBoxLimits extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Geometric path bounds
			 * @type {Adobe.Indesign.BoundingBoxLimits}
			 * @readonly
			 */
			public static readonly GEOMETRIC_PATH_BOUNDS: Adobe.Indesign.BoundingBoxLimits;
			/**
			 * Alias for GEOMETRIC_PATH_BOUNDS. Geometric path bounds
			 * @type {Adobe.Indesign.BoundingBoxLimits}
			 * @readonly
			 */
			public static readonly geometricPathBounds: Adobe.Indesign.BoundingBoxLimits;
			/**
			 * Outer stroke bounds
			 * @type {Adobe.Indesign.BoundingBoxLimits}
			 * @readonly
			 */
			public static readonly OUTER_STROKE_BOUNDS: Adobe.Indesign.BoundingBoxLimits;
			/**
			 * Alias for OUTER_STROKE_BOUNDS. Outer stroke bounds
			 * @type {Adobe.Indesign.BoundingBoxLimits}
			 * @readonly
			 */
			public static readonly outerStrokeBounds: Adobe.Indesign.BoundingBoxLimits;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}