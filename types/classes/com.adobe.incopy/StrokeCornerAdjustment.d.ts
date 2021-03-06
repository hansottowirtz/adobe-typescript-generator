/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class StrokeCornerAdjustment extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for DASHES. Changes the length of dashes so that 
			 * dashes always occur at path ends and corners; maintains set 
			 * gap length. Note: Can cause dashes to be different lengths 
			 * on shapes whose sides are of different lengths, such as 
			 * rectangles.
			 * @type {Adobe.Incopy.StrokeCornerAdjustment}
			 * @readonly
			 */
			public static readonly dashes: Adobe.Incopy.StrokeCornerAdjustment;
			/**
			 * Changes the length of dashes so that dashes always occur at 
			 * path ends and corners; maintains set gap length. Note: Can 
			 * cause dashes to be different lengths on shapes whose sides 
			 * are of different lengths, such as rectangles.
			 * @type {Adobe.Incopy.StrokeCornerAdjustment}
			 * @readonly
			 */
			public static readonly DASHES: Adobe.Incopy.StrokeCornerAdjustment;
			/**
			 * Adjusts both dashes and gaps to cover corners and end 
			 * points. Note: Causes dash and gap sizes to be consistent on 
			 * all sides of the shape.
			 * @type {Adobe.Incopy.StrokeCornerAdjustment}
			 * @readonly
			 */
			public static readonly DASHES_AND_GAPS: Adobe.Incopy.StrokeCornerAdjustment;
			/**
			 * Alias for DASHES_AND_GAPS. Adjusts both dashes and gaps to 
			 * cover corners and end points. Note: Causes dash and gap 
			 * sizes to be consistent on all sides of the shape.
			 * @type {Adobe.Incopy.StrokeCornerAdjustment}
			 * @readonly
			 */
			public static readonly dashesAndGaps: Adobe.Incopy.StrokeCornerAdjustment;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for GAPS. Changes the length of gaps so that dashes or 
			 * dots always occur at ends and corners; maintains dash length 
			 * or dot diameter. Note: Can cause gaps to be different 
			 * lengths on shapes whose sides are of different lengths, such 
			 * as rectangles.
			 * @type {Adobe.Incopy.StrokeCornerAdjustment}
			 * @readonly
			 */
			public static readonly gaps: Adobe.Incopy.StrokeCornerAdjustment;
			/**
			 * Changes the length of gaps so that dashes or dots always 
			 * occur at ends and corners; maintains dash length or dot 
			 * diameter. Note: Can cause gaps to be different lengths on 
			 * shapes whose sides are of different lengths, such as 
			 * rectangles.
			 * @type {Adobe.Incopy.StrokeCornerAdjustment}
			 * @readonly
			 */
			public static readonly GAPS: Adobe.Incopy.StrokeCornerAdjustment;
			/**
			 * Alias for NONE. No adjustment.
			 * @type {Adobe.Incopy.StrokeCornerAdjustment}
			 * @readonly
			 */
			public static readonly none: Adobe.Incopy.StrokeCornerAdjustment;
			/**
			 * No adjustment.
			 * @type {Adobe.Incopy.StrokeCornerAdjustment}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Incopy.StrokeCornerAdjustment;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}