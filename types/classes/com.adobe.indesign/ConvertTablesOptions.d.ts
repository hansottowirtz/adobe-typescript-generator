/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ConvertTablesOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Convert tables to unformatted, tab-delimited text.
			 * @type {Adobe.Indesign.ConvertTablesOptions}
			 * @readonly
			 */
			public static readonly UNFORMATTED_TABBED_TEXT: Adobe.Indesign.ConvertTablesOptions;
			/**
			 * Converts tables to basic, unformatted tables.
			 * @type {Adobe.Indesign.ConvertTablesOptions}
			 * @readonly
			 */
			public static readonly UNFORMATTED_TABLE: Adobe.Indesign.ConvertTablesOptions;
			/**
			 * Alias for UNFORMATTED_TABBED_TEXT. Convert tables to 
			 * unformatted, tab-delimited text.
			 * @type {Adobe.Indesign.ConvertTablesOptions}
			 * @readonly
			 */
			public static readonly unformattedTabbedText: Adobe.Indesign.ConvertTablesOptions;
			/**
			 * Alias for UNFORMATTED_TABLE. Converts tables to basic, 
			 * unformatted tables.
			 * @type {Adobe.Indesign.ConvertTablesOptions}
			 * @readonly
			 */
			public static readonly unformattedTable: Adobe.Indesign.ConvertTablesOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}