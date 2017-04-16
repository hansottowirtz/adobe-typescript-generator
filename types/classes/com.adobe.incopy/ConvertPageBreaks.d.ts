/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ConvertPageBreaks extends Adobe.Csawlib.CSEnumBase {
			/** Converts manual page breaks to column breaks. */
			public static readonly COLUMN_BREAK: Adobe.Incopy.ConvertPageBreaks;
			/**
			 * Alias for COLUMN_BREAK. Converts manual page breaks to 
			 * column breaks.
			 */
			public static readonly columnBreak: Adobe.Incopy.ConvertPageBreaks;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Does not preserve page breaks; allows text 
			 * to flow.
			 */
			public static readonly none: Adobe.Incopy.ConvertPageBreaks;
			/** Does not preserve page breaks; allows text to flow. */
			public static readonly NONE: Adobe.Incopy.ConvertPageBreaks;
			/** Preserves page breaks. */
			public static readonly PAGE_BREAK: Adobe.Incopy.ConvertPageBreaks;
			/** Alias for PAGE_BREAK. Preserves page breaks. */
			public static readonly pageBreak: Adobe.Incopy.ConvertPageBreaks;
			/** Constructor */
			public constructor();
		}
	}
}