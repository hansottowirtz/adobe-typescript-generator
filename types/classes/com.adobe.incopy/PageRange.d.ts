/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PageRange extends Adobe.Csawlib.CSEnumBase {
			/** Print or export all pages in the document. */
			public static readonly ALL_PAGES: Adobe.Incopy.PageRange;
			/**
			 * Alias for ALL_PAGES. Print or export all pages in the 
			 * document.
			 */
			public static readonly allPages: Adobe.Incopy.PageRange;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Export selected items in the document. */
			public static readonly SELECTED_ITEMS: Adobe.Incopy.PageRange;
			/**
			 * Alias for SELECTED_ITEMS. Export selected items in the 
			 * document.
			 */
			public static readonly selectedItems: Adobe.Incopy.PageRange;
			/** Constructor */
			public constructor();
		}
	}
}