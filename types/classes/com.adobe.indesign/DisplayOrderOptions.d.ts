/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DisplayOrderOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Order by columns.
			 * @type {Adobe.Indesign.DisplayOrderOptions}
			 * @readonly
			 */
			public static readonly ORDER_BY_COLUMNS: Adobe.Indesign.DisplayOrderOptions;
			/**
			 * Order by rows.
			 * @type {Adobe.Indesign.DisplayOrderOptions}
			 * @readonly
			 */
			public static readonly ORDER_BY_ROWS: Adobe.Indesign.DisplayOrderOptions;
			/**
			 * Alias for ORDER_BY_COLUMNS. Order by columns.
			 * @type {Adobe.Indesign.DisplayOrderOptions}
			 * @readonly
			 */
			public static readonly orderByColumns: Adobe.Indesign.DisplayOrderOptions;
			/**
			 * Alias for ORDER_BY_ROWS. Order by rows.
			 * @type {Adobe.Indesign.DisplayOrderOptions}
			 * @readonly
			 */
			public static readonly orderByRows: Adobe.Indesign.DisplayOrderOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}