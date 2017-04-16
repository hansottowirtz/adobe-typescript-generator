/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PageRange extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Print or export all pages in the document.
			 * @type {Adobe.Incopy.PageRange}
			 * @readonly
			 */
			public static readonly ALL_PAGES: Adobe.Incopy.PageRange;
			/**
			 * Alias for ALL_PAGES. Print or export all pages in the 
			 * document.
			 * @type {Adobe.Incopy.PageRange}
			 * @readonly
			 */
			public static readonly allPages: Adobe.Incopy.PageRange;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Export selected items in the document.
			 * @type {Adobe.Incopy.PageRange}
			 * @readonly
			 */
			public static readonly SELECTED_ITEMS: Adobe.Incopy.PageRange;
			/**
			 * Alias for SELECTED_ITEMS. Export selected items in the 
			 * document.
			 * @type {Adobe.Incopy.PageRange}
			 * @readonly
			 */
			public static readonly selectedItems: Adobe.Incopy.PageRange;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}