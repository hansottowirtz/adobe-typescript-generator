/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ConvertTablesOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Convert tables to unformatted, tab-delimited text. */
			public static readonly UNFORMATTED_TABBED_TEXT: Adobe.Incopy.ConvertTablesOptions;
			/** Converts tables to basic, unformatted tables. */
			public static readonly UNFORMATTED_TABLE: Adobe.Incopy.ConvertTablesOptions;
			/**
			 * Alias for UNFORMATTED_TABBED_TEXT. Convert tables to 
			 * unformatted, tab-delimited text.
			 */
			public static readonly unformattedTabbedText: Adobe.Incopy.ConvertTablesOptions;
			/**
			 * Alias for UNFORMATTED_TABLE. Converts tables to basic, 
			 * unformatted tables.
			 */
			public static readonly unformattedTable: Adobe.Incopy.ConvertTablesOptions;
			/** Constructor */
			public constructor();
		}
	}
}