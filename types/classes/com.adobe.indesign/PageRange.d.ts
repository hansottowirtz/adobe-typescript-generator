/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageRange extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Print or export all pages in the document.
			 * @type {Adobe.Indesign.PageRange}
			 * @readonly
			 */
			public static readonly ALL_PAGES: Adobe.Indesign.PageRange;
			/**
			 * Alias for ALL_PAGES. Print or export all pages in the 
			 * document.
			 * @type {Adobe.Indesign.PageRange}
			 * @readonly
			 */
			public static readonly allPages: Adobe.Indesign.PageRange;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Export selected items in the document.
			 * @type {Adobe.Indesign.PageRange}
			 * @readonly
			 */
			public static readonly SELECTED_ITEMS: Adobe.Indesign.PageRange;
			/**
			 * Alias for SELECTED_ITEMS. Export selected items in the 
			 * document.
			 * @type {Adobe.Indesign.PageRange}
			 * @readonly
			 */
			public static readonly selectedItems: Adobe.Indesign.PageRange;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}