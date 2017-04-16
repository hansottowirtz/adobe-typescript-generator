/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PaginationOption extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Pages are added and removed automatically in HTML5, removing 
			 * Optional pages first.
			 */
			public static readonly AUTO_PAGINATE: Adobe.Incopy.PaginationOption;
			/**
			 * Alias for AUTO_PAGINATE. Pages are added and removed 
			 * automatically in HTML5, removing Optional pages first.
			 */
			public static readonly autoPaginate: Adobe.Incopy.PaginationOption;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Pages are added and removed from the end of the layout in 
			 * HTML5.
			 */
			public static readonly FROM_LAST_PAGE: Adobe.Incopy.PaginationOption;
			/**
			 * Alias for FROM_LAST_PAGE. Pages are added and removed from 
			 * the end of the layout in HTML5.
			 */
			public static readonly fromLastPage: Adobe.Incopy.PaginationOption;
			/** Constructor */
			public constructor();
		}
	}
}