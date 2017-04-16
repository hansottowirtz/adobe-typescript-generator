/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ConvertTablesOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Convert tables to unformatted, tab-delimited text.
			 * @type {Adobe.Incopy.ConvertTablesOptions}
			 * @readonly
			 */
			public static readonly UNFORMATTED_TABBED_TEXT: Adobe.Incopy.ConvertTablesOptions;
			/**
			 * Converts tables to basic, unformatted tables.
			 * @type {Adobe.Incopy.ConvertTablesOptions}
			 * @readonly
			 */
			public static readonly UNFORMATTED_TABLE: Adobe.Incopy.ConvertTablesOptions;
			/**
			 * Alias for UNFORMATTED_TABBED_TEXT. Convert tables to 
			 * unformatted, tab-delimited text.
			 * @type {Adobe.Incopy.ConvertTablesOptions}
			 * @readonly
			 */
			public static readonly unformattedTabbedText: Adobe.Incopy.ConvertTablesOptions;
			/**
			 * Alias for UNFORMATTED_TABLE. Converts tables to basic, 
			 * unformatted tables.
			 * @type {Adobe.Incopy.ConvertTablesOptions}
			 * @readonly
			 */
			public static readonly unformattedTable: Adobe.Incopy.ConvertTablesOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}