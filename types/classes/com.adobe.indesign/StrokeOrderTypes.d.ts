/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StrokeOrderTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Places row strokes in front of column strokes when row and 
			 * column strokes are different colors; joins striped strokes 
			 * and connects crossing points.
			 */
			public static readonly BEST_JOINS: Adobe.Indesign.StrokeOrderTypes;
			/**
			 * Alias for BEST_JOINS. Places row strokes in front of column 
			 * strokes when row and column strokes are different colors; 
			 * joins striped strokes and connects crossing points.
			 */
			public static readonly bestJoins: Adobe.Indesign.StrokeOrderTypes;
			/** Places column strokes in front of row strokes. */
			public static readonly COLUMN_ON_TOP: Adobe.Indesign.StrokeOrderTypes;
			/**
			 * Alias for COLUMN_ON_TOP. Places column strokes in front of 
			 * row strokes.
			 */
			public static readonly columnOnTop: Adobe.Indesign.StrokeOrderTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Places row strokes in front when row and column strokes are 
			 * different colors; joins striped strokes only at points where 
			 * strokes cross in a T-shape.
			 */
			public static readonly INDESIGN_2_COMPATIBILITY: Adobe.Indesign.StrokeOrderTypes;
			/**
			 * Alias for INDESIGN_2_COMPATIBILITY. Places row strokes in 
			 * front when row and column strokes are different colors; 
			 * joins striped strokes only at points where strokes cross in 
			 * a T-shape.
			 */
			public static readonly indesign2Compatibility: Adobe.Indesign.StrokeOrderTypes;
			/** Places row strokes in front of column strokes. */
			public static readonly ROW_ON_TOP: Adobe.Indesign.StrokeOrderTypes;
			/**
			 * Alias for ROW_ON_TOP. Places row strokes in front of column 
			 * strokes.
			 */
			public static readonly rowOnTop: Adobe.Indesign.StrokeOrderTypes;
			/** Constructor */
			public constructor();
		}
	}
}