/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PaginationOption extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Pages are added and removed automatically in HTML5, removing 
			 * Optional pages first.
			 * @type {Adobe.Incopy.PaginationOption}
			 * @readonly
			 */
			public static readonly AUTO_PAGINATE: Adobe.Incopy.PaginationOption;
			/**
			 * Alias for AUTO_PAGINATE. Pages are added and removed 
			 * automatically in HTML5, removing Optional pages first.
			 * @type {Adobe.Incopy.PaginationOption}
			 * @readonly
			 */
			public static readonly autoPaginate: Adobe.Incopy.PaginationOption;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Pages are added and removed from the end of the layout in 
			 * HTML5.
			 * @type {Adobe.Incopy.PaginationOption}
			 * @readonly
			 */
			public static readonly FROM_LAST_PAGE: Adobe.Incopy.PaginationOption;
			/**
			 * Alias for FROM_LAST_PAGE. Pages are added and removed from 
			 * the end of the layout in HTML5.
			 * @type {Adobe.Incopy.PaginationOption}
			 * @readonly
			 */
			public static readonly fromLastPage: Adobe.Incopy.PaginationOption;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}