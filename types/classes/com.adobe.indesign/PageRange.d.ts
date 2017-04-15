/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageRange extends Adobe.Csawlib.CSEnumBase {
			/** Print or export all pages in the document. */
			public static readonly ALL_PAGES: Adobe.Indesign.PageRange;
			/**
			 * Alias for ALL_PAGES. Print or export all pages in the 
			 * document.
			 */
			public static readonly allPages: Adobe.Indesign.PageRange;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Export selected items in the document. */
			public static readonly SELECTED_ITEMS: Adobe.Indesign.PageRange;
			/**
			 * Alias for SELECTED_ITEMS. Export selected items in the 
			 * document.
			 */
			public static readonly selectedItems: Adobe.Indesign.PageRange;
			/** Constructor */
			public constructor();
		}
	}
}