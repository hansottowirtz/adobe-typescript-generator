/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class BoundingBoxLimits extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Geometric path bounds
			 * @type {Adobe.Incopy.BoundingBoxLimits}
			 * @readonly
			 */
			public static readonly GEOMETRIC_PATH_BOUNDS: Adobe.Incopy.BoundingBoxLimits;
			/**
			 * Alias for GEOMETRIC_PATH_BOUNDS. Geometric path bounds
			 * @type {Adobe.Incopy.BoundingBoxLimits}
			 * @readonly
			 */
			public static readonly geometricPathBounds: Adobe.Incopy.BoundingBoxLimits;
			/**
			 * Outer stroke bounds
			 * @type {Adobe.Incopy.BoundingBoxLimits}
			 * @readonly
			 */
			public static readonly OUTER_STROKE_BOUNDS: Adobe.Incopy.BoundingBoxLimits;
			/**
			 * Alias for OUTER_STROKE_BOUNDS. Outer stroke bounds
			 * @type {Adobe.Incopy.BoundingBoxLimits}
			 * @readonly
			 */
			public static readonly outerStrokeBounds: Adobe.Incopy.BoundingBoxLimits;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}