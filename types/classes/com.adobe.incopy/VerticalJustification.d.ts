/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class VerticalJustification extends Adobe.Csawlib.CSEnumBase {
			/** Text is aligned at the bottom of the object. */
			public static readonly BOTTOM_ALIGN: Adobe.Incopy.VerticalJustification;
			/**
			 * Alias for BOTTOM_ALIGN. Text is aligned at the bottom of the 
			 * object.
			 */
			public static readonly bottomAlign: Adobe.Incopy.VerticalJustification;
			/** Text is center aligned vertically in the object. */
			public static readonly CENTER_ALIGN: Adobe.Incopy.VerticalJustification;
			/**
			 * Alias for CENTER_ALIGN. Text is center aligned vertically in 
			 * the object.
			 */
			public static readonly centerAlign: Adobe.Incopy.VerticalJustification;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Lines of text are evenly distributed vertically between the 
			 * top and bottom of the object.
			 */
			public static readonly JUSTIFY_ALIGN: Adobe.Incopy.VerticalJustification;
			/**
			 * Alias for JUSTIFY_ALIGN. Lines of text are evenly 
			 * distributed vertically between the top and bottom of the 
			 * object.
			 */
			public static readonly justifyAlign: Adobe.Incopy.VerticalJustification;
			/** Text is aligned at the top of the object. */
			public static readonly TOP_ALIGN: Adobe.Incopy.VerticalJustification;
			/**
			 * Alias for TOP_ALIGN. Text is aligned at the top of the 
			 * object.
			 */
			public static readonly topAlign: Adobe.Incopy.VerticalJustification;
			/** Constructor */
			public constructor();
		}
	}
}