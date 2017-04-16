/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PaginationOption extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Pages are added and removed automatically in HTML5, removing 
			 * Optional pages first.
			 */
			public static readonly AUTO_PAGINATE: Adobe.Indesign.PaginationOption;
			/**
			 * Alias for AUTO_PAGINATE. Pages are added and removed 
			 * automatically in HTML5, removing Optional pages first.
			 */
			public static readonly autoPaginate: Adobe.Indesign.PaginationOption;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Pages are added and removed from the end of the layout in 
			 * HTML5.
			 */
			public static readonly FROM_LAST_PAGE: Adobe.Indesign.PaginationOption;
			/**
			 * Alias for FROM_LAST_PAGE. Pages are added and removed from 
			 * the end of the layout in HTML5.
			 */
			public static readonly fromLastPage: Adobe.Indesign.PaginationOption;
			/** Constructor */
			public constructor();
		}
	}
}