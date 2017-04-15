/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TableFormattingOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Converts the spreadsheet to a table that is formatted only 
			 * on initial import but not on update.
			 */
			public static readonly EXCEL_FORMAT_ONLY_ONCE: Adobe.Indesign.TableFormattingOptions;
			/** Use formatting from the original spreadsheet. */
			public static readonly EXCEL_FORMATTED_TABLE: Adobe.Indesign.TableFormattingOptions;
			/** Convert the spreadsheet to unformatted, tab-delimited text. */
			public static readonly EXCEL_UNFORMATTED_TABBED_TEXT: Adobe.Indesign.TableFormattingOptions;
			/** Convert the spreadsheet to an unformatted table. */
			public static readonly EXCEL_UNFORMATTED_TABLE: Adobe.Indesign.TableFormattingOptions;
			/**
			 * Alias for EXCEL_FORMAT_ONLY_ONCE. Converts the spreadsheet 
			 * to a table that is formatted only on initial import but not 
			 * on update.
			 */
			public static readonly excelFormatOnlyOnce: Adobe.Indesign.TableFormattingOptions;
			/**
			 * Alias for EXCEL_FORMATTED_TABLE. Use formatting from the 
			 * original spreadsheet.
			 */
			public static readonly excelFormattedTable: Adobe.Indesign.TableFormattingOptions;
			/**
			 * Alias for EXCEL_UNFORMATTED_TABBED_TEXT. Convert the 
			 * spreadsheet to unformatted, tab-delimited text.
			 */
			public static readonly excelUnformattedTabbedText: Adobe.Indesign.TableFormattingOptions;
			/**
			 * Alias for EXCEL_UNFORMATTED_TABLE. Convert the spreadsheet 
			 * to an unformatted table.
			 */
			public static readonly excelUnformattedTable: Adobe.Indesign.TableFormattingOptions;
			/** Constructor */
			public constructor();
		}
	}
}