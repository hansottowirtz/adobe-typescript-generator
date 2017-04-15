/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ConvertPageBreaks extends Adobe.Csawlib.CSEnumBase {
			/** Converts manual page breaks to column breaks. */
			public static readonly COLUMN_BREAK: Adobe.Indesign.ConvertPageBreaks;
			/**
			 * Alias for COLUMN_BREAK. Converts manual page breaks to 
			 * column breaks.
			 */
			public static readonly columnBreak: Adobe.Indesign.ConvertPageBreaks;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Does not preserve page breaks; allows text 
			 * to flow.
			 */
			public static readonly none: Adobe.Indesign.ConvertPageBreaks;
			/** Does not preserve page breaks; allows text to flow. */
			public static readonly NONE: Adobe.Indesign.ConvertPageBreaks;
			/** Preserves page breaks. */
			public static readonly PAGE_BREAK: Adobe.Indesign.ConvertPageBreaks;
			/** Alias for PAGE_BREAK. Preserves page breaks. */
			public static readonly pageBreak: Adobe.Indesign.ConvertPageBreaks;
			/** Constructor */
			public constructor();
		}
	}
}