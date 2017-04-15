/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StrokeCornerAdjustment extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for DASHES. Changes the length of dashes so that 
			 * dashes always occur at path ends and corners; maintains set 
			 * gap length. Note: Can cause dashes to be different lengths 
			 * on shapes whose sides are of different lengths, such as 
			 * rectangles.
			 */
			public static readonly dashes: Adobe.Indesign.StrokeCornerAdjustment;
			/**
			 * Changes the length of dashes so that dashes always occur at 
			 * path ends and corners; maintains set gap length. Note: Can 
			 * cause dashes to be different lengths on shapes whose sides 
			 * are of different lengths, such as rectangles.
			 */
			public static readonly DASHES: Adobe.Indesign.StrokeCornerAdjustment;
			/**
			 * Adjusts both dashes and gaps to cover corners and end 
			 * points. Note: Causes dash and gap sizes to be consistent on 
			 * all sides of the shape.
			 */
			public static readonly DASHES_AND_GAPS: Adobe.Indesign.StrokeCornerAdjustment;
			/**
			 * Alias for DASHES_AND_GAPS. Adjusts both dashes and gaps to 
			 * cover corners and end points. Note: Causes dash and gap 
			 * sizes to be consistent on all sides of the shape.
			 */
			public static readonly dashesAndGaps: Adobe.Indesign.StrokeCornerAdjustment;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for GAPS. Changes the length of gaps so that dashes or 
			 * dots always occur at ends and corners; maintains dash length 
			 * or dot diameter. Note: Can cause gaps to be different 
			 * lengths on shapes whose sides are of different lengths, such 
			 * as rectangles.
			 */
			public static readonly gaps: Adobe.Indesign.StrokeCornerAdjustment;
			/**
			 * Changes the length of gaps so that dashes or dots always 
			 * occur at ends and corners; maintains dash length or dot 
			 * diameter. Note: Can cause gaps to be different lengths on 
			 * shapes whose sides are of different lengths, such as 
			 * rectangles.
			 */
			public static readonly GAPS: Adobe.Indesign.StrokeCornerAdjustment;
			/** Alias for NONE. No adjustment. */
			public static readonly none: Adobe.Indesign.StrokeCornerAdjustment;
			/** No adjustment. */
			public static readonly NONE: Adobe.Indesign.StrokeCornerAdjustment;
			/** Constructor */
			public constructor();
		}
	}
}