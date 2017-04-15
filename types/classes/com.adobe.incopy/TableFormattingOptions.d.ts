/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TableFormattingOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Converts the spreadsheet to a table that is formatted only 
			 * on initial import but not on update.
			 */
			public static readonly EXCEL_FORMAT_ONLY_ONCE: Adobe.Incopy.TableFormattingOptions;
			/** Use formatting from the original spreadsheet. */
			public static readonly EXCEL_FORMATTED_TABLE: Adobe.Incopy.TableFormattingOptions;
			/** Convert the spreadsheet to unformatted, tab-delimited text. */
			public static readonly EXCEL_UNFORMATTED_TABBED_TEXT: Adobe.Incopy.TableFormattingOptions;
			/** Convert the spreadsheet to an unformatted table. */
			public static readonly EXCEL_UNFORMATTED_TABLE: Adobe.Incopy.TableFormattingOptions;
			/**
			 * Alias for EXCEL_FORMAT_ONLY_ONCE. Converts the spreadsheet 
			 * to a table that is formatted only on initial import but not 
			 * on update.
			 */
			public static readonly excelFormatOnlyOnce: Adobe.Incopy.TableFormattingOptions;
			/**
			 * Alias for EXCEL_FORMATTED_TABLE. Use formatting from the 
			 * original spreadsheet.
			 */
			public static readonly excelFormattedTable: Adobe.Incopy.TableFormattingOptions;
			/**
			 * Alias for EXCEL_UNFORMATTED_TABBED_TEXT. Convert the 
			 * spreadsheet to unformatted, tab-delimited text.
			 */
			public static readonly excelUnformattedTabbedText: Adobe.Incopy.TableFormattingOptions;
			/**
			 * Alias for EXCEL_UNFORMATTED_TABLE. Convert the spreadsheet 
			 * to an unformatted table.
			 */
			public static readonly excelUnformattedTable: Adobe.Incopy.TableFormattingOptions;
			/** Constructor */
			public constructor();
		}
	}
}