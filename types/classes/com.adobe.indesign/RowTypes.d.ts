/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RowTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Makes the row a body row.
			 * @type {Adobe.Indesign.RowTypes}
			 * @readonly
			 */
			public static readonly BODY_ROW: Adobe.Indesign.RowTypes;
			/**
			 * Alias for BODY_ROW. Makes the row a body row.
			 * @type {Adobe.Indesign.RowTypes}
			 * @readonly
			 */
			public static readonly bodyRow: Adobe.Indesign.RowTypes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Makes the row a footer row. Note: When setting row type as 
			 * footer row, the row must be either the bottom row in the 
			 * table or adjacent to an existing footer row.
			 * @type {Adobe.Indesign.RowTypes}
			 * @readonly
			 */
			public static readonly FOOTER_ROW: Adobe.Indesign.RowTypes;
			/**
			 * Alias for FOOTER_ROW. Makes the row a footer row. Note: When 
			 * setting row type as footer row, the row must be either the 
			 * bottom row in the table or adjacent to an existing footer 
			 * row.
			 * @type {Adobe.Indesign.RowTypes}
			 * @readonly
			 */
			public static readonly footerRow: Adobe.Indesign.RowTypes;
			/**
			 * Makes the row a header row. Note: When setting row type as 
			 * header row, the row must be either the top row in the table 
			 * or adjacent to an existing header row.
			 * @type {Adobe.Indesign.RowTypes}
			 * @readonly
			 */
			public static readonly HEADER_ROW: Adobe.Indesign.RowTypes;
			/**
			 * Alias for HEADER_ROW. Makes the row a header row. Note: When 
			 * setting row type as header row, the row must be either the 
			 * top row in the table or adjacent to an existing header row.
			 * @type {Adobe.Indesign.RowTypes}
			 * @readonly
			 */
			public static readonly headerRow: Adobe.Indesign.RowTypes;
			/**
			 * (Read-only) The column's rows are of multiple types.
			 * @type {Adobe.Indesign.RowTypes}
			 * @readonly
			 */
			public static readonly MIXED_STATE: Adobe.Indesign.RowTypes;
			/**
			 * Alias for MIXED_STATE. (Read-only) The column's rows are of 
			 * multiple types.
			 * @type {Adobe.Indesign.RowTypes}
			 * @readonly
			 */
			public static readonly mixedState: Adobe.Indesign.RowTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}