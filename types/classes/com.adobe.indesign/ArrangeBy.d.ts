/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ArrangeBy extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Arranges records by column.
			 * @type {Adobe.Indesign.ArrangeBy}
			 * @readonly
			 */
			public static readonly COLUMNS_FIRST: Adobe.Indesign.ArrangeBy;
			/**
			 * Alias for COLUMNS_FIRST. Arranges records by column.
			 * @type {Adobe.Indesign.ArrangeBy}
			 * @readonly
			 */
			public static readonly columnsFirst: Adobe.Indesign.ArrangeBy;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Arranges records by row.
			 * @type {Adobe.Indesign.ArrangeBy}
			 * @readonly
			 */
			public static readonly ROWS_FIRST: Adobe.Indesign.ArrangeBy;
			/**
			 * Alias for ROWS_FIRST. Arranges records by row.
			 * @type {Adobe.Indesign.ArrangeBy}
			 * @readonly
			 */
			public static readonly rowsFirst: Adobe.Indesign.ArrangeBy;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}