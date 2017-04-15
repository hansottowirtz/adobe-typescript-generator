/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RangeSortOrder extends Adobe.Csawlib.CSEnumBase {
			/** Sort the ranges in ascending order. */
			public static readonly ASCENDING_SORT: Adobe.Incopy.RangeSortOrder;
			/**
			 * Alias for ASCENDING_SORT. Sort the ranges in ascending 
			 * order.
			 */
			public static readonly ascendingSort: Adobe.Incopy.RangeSortOrder;
			/** Sort the ranges in descending order. */
			public static readonly DESCENDING_SORT: Adobe.Incopy.RangeSortOrder;
			/**
			 * Alias for DESCENDING_SORT. Sort the ranges in descending 
			 * order.
			 */
			public static readonly descendingSort: Adobe.Incopy.RangeSortOrder;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Do not sort the ranges. */
			public static readonly NO_SORT: Adobe.Incopy.RangeSortOrder;
			/** Alias for NO_SORT. Do not sort the ranges. */
			public static readonly noSort: Adobe.Incopy.RangeSortOrder;
			/** Constructor */
			public constructor();
		}
	}
}