/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class DisplayOrderOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Order by columns.
			 * @type {Adobe.Incopy.DisplayOrderOptions}
			 * @readonly
			 */
			public static readonly ORDER_BY_COLUMNS: Adobe.Incopy.DisplayOrderOptions;
			/**
			 * Order by rows.
			 * @type {Adobe.Incopy.DisplayOrderOptions}
			 * @readonly
			 */
			public static readonly ORDER_BY_ROWS: Adobe.Incopy.DisplayOrderOptions;
			/**
			 * Alias for ORDER_BY_COLUMNS. Order by columns.
			 * @type {Adobe.Incopy.DisplayOrderOptions}
			 * @readonly
			 */
			public static readonly orderByColumns: Adobe.Incopy.DisplayOrderOptions;
			/**
			 * Alias for ORDER_BY_ROWS. Order by rows.
			 * @type {Adobe.Incopy.DisplayOrderOptions}
			 * @readonly
			 */
			public static readonly orderByRows: Adobe.Incopy.DisplayOrderOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}