/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class StrokeOrderTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Places row strokes in front of column strokes when row and 
			 * column strokes are different colors; joins striped strokes 
			 * and connects crossing points.
			 * @type {Adobe.Incopy.StrokeOrderTypes}
			 * @readonly
			 */
			public static readonly BEST_JOINS: Adobe.Incopy.StrokeOrderTypes;
			/**
			 * Alias for BEST_JOINS. Places row strokes in front of column 
			 * strokes when row and column strokes are different colors; 
			 * joins striped strokes and connects crossing points.
			 * @type {Adobe.Incopy.StrokeOrderTypes}
			 * @readonly
			 */
			public static readonly bestJoins: Adobe.Incopy.StrokeOrderTypes;
			/**
			 * Places column strokes in front of row strokes.
			 * @type {Adobe.Incopy.StrokeOrderTypes}
			 * @readonly
			 */
			public static readonly COLUMN_ON_TOP: Adobe.Incopy.StrokeOrderTypes;
			/**
			 * Alias for COLUMN_ON_TOP. Places column strokes in front of 
			 * row strokes.
			 * @type {Adobe.Incopy.StrokeOrderTypes}
			 * @readonly
			 */
			public static readonly columnOnTop: Adobe.Incopy.StrokeOrderTypes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Places row strokes in front when row and column strokes are 
			 * different colors; joins striped strokes only at points where 
			 * strokes cross in a T-shape.
			 * @type {Adobe.Incopy.StrokeOrderTypes}
			 * @readonly
			 */
			public static readonly INDESIGN_2_COMPATIBILITY: Adobe.Incopy.StrokeOrderTypes;
			/**
			 * Alias for INDESIGN_2_COMPATIBILITY. Places row strokes in 
			 * front when row and column strokes are different colors; 
			 * joins striped strokes only at points where strokes cross in 
			 * a T-shape.
			 * @type {Adobe.Incopy.StrokeOrderTypes}
			 * @readonly
			 */
			public static readonly indesign2Compatibility: Adobe.Incopy.StrokeOrderTypes;
			/**
			 * Places row strokes in front of column strokes.
			 * @type {Adobe.Incopy.StrokeOrderTypes}
			 * @readonly
			 */
			public static readonly ROW_ON_TOP: Adobe.Incopy.StrokeOrderTypes;
			/**
			 * Alias for ROW_ON_TOP. Places row strokes in front of column 
			 * strokes.
			 * @type {Adobe.Incopy.StrokeOrderTypes}
			 * @readonly
			 */
			public static readonly rowOnTop: Adobe.Incopy.StrokeOrderTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}