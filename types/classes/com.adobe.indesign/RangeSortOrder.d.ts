/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RangeSortOrder extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Sort the ranges in ascending order.
			 * @type {Adobe.Indesign.RangeSortOrder}
			 * @readonly
			 */
			public static readonly ASCENDING_SORT: Adobe.Indesign.RangeSortOrder;
			/**
			 * Alias for ASCENDING_SORT. Sort the ranges in ascending 
			 * order.
			 * @type {Adobe.Indesign.RangeSortOrder}
			 * @readonly
			 */
			public static readonly ascendingSort: Adobe.Indesign.RangeSortOrder;
			/**
			 * Sort the ranges in descending order.
			 * @type {Adobe.Indesign.RangeSortOrder}
			 * @readonly
			 */
			public static readonly DESCENDING_SORT: Adobe.Indesign.RangeSortOrder;
			/**
			 * Alias for DESCENDING_SORT. Sort the ranges in descending 
			 * order.
			 * @type {Adobe.Indesign.RangeSortOrder}
			 * @readonly
			 */
			public static readonly descendingSort: Adobe.Indesign.RangeSortOrder;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Do not sort the ranges.
			 * @type {Adobe.Indesign.RangeSortOrder}
			 * @readonly
			 */
			public static readonly NO_SORT: Adobe.Indesign.RangeSortOrder;
			/**
			 * Alias for NO_SORT. Do not sort the ranges.
			 * @type {Adobe.Indesign.RangeSortOrder}
			 * @readonly
			 */
			public static readonly noSort: Adobe.Indesign.RangeSortOrder;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}