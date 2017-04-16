/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ResizeMethods extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Add additional width and height to current values
			 * @type {Adobe.Indesign.ResizeMethods}
			 * @readonly
			 */
			public static readonly ADDING_CURRENT_DIMENSIONS_TO: Adobe.Indesign.ResizeMethods;
			/**
			 * Alias for ADDING_CURRENT_DIMENSIONS_TO. Add additional width 
			 * and height to current values
			 * @type {Adobe.Indesign.ResizeMethods}
			 * @readonly
			 */
			public static readonly addingCurrentDimensionsTo: Adobe.Indesign.ResizeMethods;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Multiply current width and height by the given factors
			 * @type {Adobe.Indesign.ResizeMethods}
			 * @readonly
			 */
			public static readonly MULTIPLYING_CURRENT_DIMENSIONS_BY: Adobe.Indesign.ResizeMethods;
			/**
			 * Alias for MULTIPLYING_CURRENT_DIMENSIONS_BY. Multiply 
			 * current width and height by the given factors
			 * @type {Adobe.Indesign.ResizeMethods}
			 * @readonly
			 */
			public static readonly multiplyingCurrentDimensionsBy: Adobe.Indesign.ResizeMethods;
			/**
			 * Change width and height overriding current values
			 * @type {Adobe.Indesign.ResizeMethods}
			 * @readonly
			 */
			public static readonly REPLACING_CURRENT_DIMENSIONS_WITH: Adobe.Indesign.ResizeMethods;
			/**
			 * Alias for REPLACING_CURRENT_DIMENSIONS_WITH. Change width 
			 * and height overriding current values
			 * @type {Adobe.Indesign.ResizeMethods}
			 * @readonly
			 */
			public static readonly replacingCurrentDimensionsWith: Adobe.Indesign.ResizeMethods;
			/**
			 * Change width to height ratio keeping the current area
			 * @type {Adobe.Indesign.ResizeMethods}
			 * @readonly
			 */
			public static readonly RESHAPING_AREA_TO_RATIO: Adobe.Indesign.ResizeMethods;
			/**
			 * Change width to height ratio keeping the current perimeter
			 * @type {Adobe.Indesign.ResizeMethods}
			 * @readonly
			 */
			public static readonly RESHAPING_BORDER_TO_RATIO: Adobe.Indesign.ResizeMethods;
			/**
			 * Alias for RESHAPING_AREA_TO_RATIO. Change width to height 
			 * ratio keeping the current area
			 * @type {Adobe.Indesign.ResizeMethods}
			 * @readonly
			 */
			public static readonly reshapingAreaToRatio: Adobe.Indesign.ResizeMethods;
			/**
			 * Alias for RESHAPING_BORDER_TO_RATIO. Change width to height 
			 * ratio keeping the current perimeter
			 * @type {Adobe.Indesign.ResizeMethods}
			 * @readonly
			 */
			public static readonly reshapingBorderToRatio: Adobe.Indesign.ResizeMethods;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}