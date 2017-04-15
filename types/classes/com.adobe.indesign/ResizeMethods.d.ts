/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ResizeMethods extends Adobe.Csawlib.CSEnumBase {
			/** Add additional width and height to current values */
			public static readonly ADDING_CURRENT_DIMENSIONS_TO: Adobe.Indesign.ResizeMethods;
			/**
			 * Alias for ADDING_CURRENT_DIMENSIONS_TO. Add additional width 
			 * and height to current values
			 */
			public static readonly addingCurrentDimensionsTo: Adobe.Indesign.ResizeMethods;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Multiply current width and height by the given factors */
			public static readonly MULTIPLYING_CURRENT_DIMENSIONS_BY: Adobe.Indesign.ResizeMethods;
			/**
			 * Alias for MULTIPLYING_CURRENT_DIMENSIONS_BY. Multiply 
			 * current width and height by the given factors
			 */
			public static readonly multiplyingCurrentDimensionsBy: Adobe.Indesign.ResizeMethods;
			/** Change width and height overriding current values */
			public static readonly REPLACING_CURRENT_DIMENSIONS_WITH: Adobe.Indesign.ResizeMethods;
			/**
			 * Alias for REPLACING_CURRENT_DIMENSIONS_WITH. Change width 
			 * and height overriding current values
			 */
			public static readonly replacingCurrentDimensionsWith: Adobe.Indesign.ResizeMethods;
			/** Change width to height ratio keeping the current area */
			public static readonly RESHAPING_AREA_TO_RATIO: Adobe.Indesign.ResizeMethods;
			/** Change width to height ratio keeping the current perimeter */
			public static readonly RESHAPING_BORDER_TO_RATIO: Adobe.Indesign.ResizeMethods;
			/**
			 * Alias for RESHAPING_AREA_TO_RATIO. Change width to height 
			 * ratio keeping the current area
			 */
			public static readonly reshapingAreaToRatio: Adobe.Indesign.ResizeMethods;
			/**
			 * Alias for RESHAPING_BORDER_TO_RATIO. Change width to height 
			 * ratio keeping the current perimeter
			 */
			public static readonly reshapingBorderToRatio: Adobe.Indesign.ResizeMethods;
			/** Constructor */
			public constructor();
		}
	}
}