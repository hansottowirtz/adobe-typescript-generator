/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RowTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Makes the row a body row.
			 * @type {Adobe.Incopy.RowTypes}
			 * @readonly
			 */
			public static readonly BODY_ROW: Adobe.Incopy.RowTypes;
			/**
			 * Alias for BODY_ROW. Makes the row a body row.
			 * @type {Adobe.Incopy.RowTypes}
			 * @readonly
			 */
			public static readonly bodyRow: Adobe.Incopy.RowTypes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Makes the row a footer row. Note: When setting row type as 
			 * footer row, the row must be either the bottom row in the 
			 * table or adjacent to an existing footer row.
			 * @type {Adobe.Incopy.RowTypes}
			 * @readonly
			 */
			public static readonly FOOTER_ROW: Adobe.Incopy.RowTypes;
			/**
			 * Alias for FOOTER_ROW. Makes the row a footer row. Note: When 
			 * setting row type as footer row, the row must be either the 
			 * bottom row in the table or adjacent to an existing footer 
			 * row.
			 * @type {Adobe.Incopy.RowTypes}
			 * @readonly
			 */
			public static readonly footerRow: Adobe.Incopy.RowTypes;
			/**
			 * Makes the row a header row. Note: When setting row type as 
			 * header row, the row must be either the top row in the table 
			 * or adjacent to an existing header row.
			 * @type {Adobe.Incopy.RowTypes}
			 * @readonly
			 */
			public static readonly HEADER_ROW: Adobe.Incopy.RowTypes;
			/**
			 * Alias for HEADER_ROW. Makes the row a header row. Note: When 
			 * setting row type as header row, the row must be either the 
			 * top row in the table or adjacent to an existing header row.
			 * @type {Adobe.Incopy.RowTypes}
			 * @readonly
			 */
			public static readonly headerRow: Adobe.Incopy.RowTypes;
			/**
			 * (Read-only) The column's rows are of multiple types.
			 * @type {Adobe.Incopy.RowTypes}
			 * @readonly
			 */
			public static readonly MIXED_STATE: Adobe.Incopy.RowTypes;
			/**
			 * Alias for MIXED_STATE. (Read-only) The column's rows are of 
			 * multiple types.
			 * @type {Adobe.Incopy.RowTypes}
			 * @readonly
			 */
			public static readonly mixedState: Adobe.Incopy.RowTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}