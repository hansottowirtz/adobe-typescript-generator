/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RangeSortOrder extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Sort the ranges in ascending order.
			 * @type {Adobe.Incopy.RangeSortOrder}
			 * @readonly
			 */
			public static readonly ASCENDING_SORT: Adobe.Incopy.RangeSortOrder;
			/**
			 * Alias for ASCENDING_SORT. Sort the ranges in ascending 
			 * order.
			 * @type {Adobe.Incopy.RangeSortOrder}
			 * @readonly
			 */
			public static readonly ascendingSort: Adobe.Incopy.RangeSortOrder;
			/**
			 * Sort the ranges in descending order.
			 * @type {Adobe.Incopy.RangeSortOrder}
			 * @readonly
			 */
			public static readonly DESCENDING_SORT: Adobe.Incopy.RangeSortOrder;
			/**
			 * Alias for DESCENDING_SORT. Sort the ranges in descending 
			 * order.
			 * @type {Adobe.Incopy.RangeSortOrder}
			 * @readonly
			 */
			public static readonly descendingSort: Adobe.Incopy.RangeSortOrder;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Do not sort the ranges.
			 * @type {Adobe.Incopy.RangeSortOrder}
			 * @readonly
			 */
			public static readonly NO_SORT: Adobe.Incopy.RangeSortOrder;
			/**
			 * Alias for NO_SORT. Do not sort the ranges.
			 * @type {Adobe.Incopy.RangeSortOrder}
			 * @readonly
			 */
			public static readonly noSort: Adobe.Incopy.RangeSortOrder;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}