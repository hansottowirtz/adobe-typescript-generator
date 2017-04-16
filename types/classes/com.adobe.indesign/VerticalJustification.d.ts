/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class VerticalJustification extends Adobe.Csawlib.CSEnumBase {
			/** Text is aligned at the bottom of the object. */
			public static readonly BOTTOM_ALIGN: Adobe.Indesign.VerticalJustification;
			/**
			 * Alias for BOTTOM_ALIGN. Text is aligned at the bottom of the 
			 * object.
			 */
			public static readonly bottomAlign: Adobe.Indesign.VerticalJustification;
			/** Text is center aligned vertically in the object. */
			public static readonly CENTER_ALIGN: Adobe.Indesign.VerticalJustification;
			/**
			 * Alias for CENTER_ALIGN. Text is center aligned vertically in 
			 * the object.
			 */
			public static readonly centerAlign: Adobe.Indesign.VerticalJustification;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Lines of text are evenly distributed vertically between the 
			 * top and bottom of the object.
			 */
			public static readonly JUSTIFY_ALIGN: Adobe.Indesign.VerticalJustification;
			/**
			 * Alias for JUSTIFY_ALIGN. Lines of text are evenly 
			 * distributed vertically between the top and bottom of the 
			 * object.
			 */
			public static readonly justifyAlign: Adobe.Indesign.VerticalJustification;
			/** Text is aligned at the top of the object. */
			public static readonly TOP_ALIGN: Adobe.Indesign.VerticalJustification;
			/**
			 * Alias for TOP_ALIGN. Text is aligned at the top of the 
			 * object.
			 */
			public static readonly topAlign: Adobe.Indesign.VerticalJustification;
			/** Constructor */
			public constructor();
		}
	}
}