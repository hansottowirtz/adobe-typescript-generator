/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageReferenceType extends Adobe.Csawlib.CSEnumBase {
			/** The page on which the index entry is located. */
			public static readonly CURRENT_PAGE: Adobe.Indesign.PageReferenceType;
			/**
			 * Alias for CURRENT_PAGE. The page on which the index entry is 
			 * located.
			 */
			public static readonly currentPage: Adobe.Indesign.PageReferenceType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The range of pages from the page containing the inedex entry 
			 * to the nth page after that page (where n is the number of 
			 * pages to include).
			 */
			public static readonly FOR_NEXT_N_PAGES: Adobe.Indesign.PageReferenceType;
			/**
			 * The range of pages from the page containing the index entry 
			 * to the page containing the nth full paragraph from the 
			 * paragraph containing the index entry (where n is the number 
			 * of paragraphs to include).
			 */
			public static readonly FOR_NEXT_N_PARAGRAPHS: Adobe.Indesign.PageReferenceType;
			/**
			 * Alias for FOR_NEXT_N_PAGES. The range of pages from the page 
			 * containing the inedex entry to the nth page after that page 
			 * (where n is the number of pages to include).
			 */
			public static readonly forNextNPages: Adobe.Indesign.PageReferenceType;
			/**
			 * Alias for FOR_NEXT_N_PARAGRAPHS. The range of pages from the 
			 * page containing the index entry to the page containing the 
			 * nth full paragraph from the paragraph containing the index 
			 * entry (where n is the number of paragraphs to include).
			 */
			public static readonly forNextNParagraphs: Adobe.Indesign.PageReferenceType;
			/** Turns off page numbers for the index topic. */
			public static readonly SUPPRESS_PAGE_NUMBERS: Adobe.Indesign.PageReferenceType;
			/**
			 * Alias for SUPPRESS_PAGE_NUMBERS. Turns off page numbers for 
			 * the index topic.
			 */
			public static readonly suppressPageNumbers: Adobe.Indesign.PageReferenceType;
			/** The last page in the document. */
			public static readonly TO_END_OF_DOCUMENT: Adobe.Indesign.PageReferenceType;
			/**
			 * The last page in the numbered section containing the index 
			 * entry.
			 */
			public static readonly TO_END_OF_SECTION: Adobe.Indesign.PageReferenceType;
			/** The last page in the story containing the index entry. */
			public static readonly TO_END_OF_STORY: Adobe.Indesign.PageReferenceType;
			/**
			 * The range of pages from the page containing the index entry 
			 * to the page containing the next paragraph style change.
			 */
			public static readonly TO_NEXT_STYLE_CHANGE: Adobe.Indesign.PageReferenceType;
			/**
			 * The range of pages from the page containing the index entry 
			 * to the page that contains the next occurrance of the 
			 * specified paragraph style. If no paragraph style is 
			 * specified, the paragraph style of the index entry paragraph 
			 * is used.
			 */
			public static readonly TO_NEXT_USE_OF_STYLE: Adobe.Indesign.PageReferenceType;
			/**
			 * Alias for TO_END_OF_DOCUMENT. The last page in the document.
			 */
			public static readonly toEndOfDocument: Adobe.Indesign.PageReferenceType;
			/**
			 * Alias for TO_END_OF_SECTION. The last page in the numbered 
			 * section containing the index entry.
			 */
			public static readonly toEndOfSection: Adobe.Indesign.PageReferenceType;
			/**
			 * Alias for TO_END_OF_STORY. The last page in the story 
			 * containing the index entry.
			 */
			public static readonly toEndOfStory: Adobe.Indesign.PageReferenceType;
			/**
			 * Alias for TO_NEXT_STYLE_CHANGE. The range of pages from the 
			 * page containing the index entry to the page containing the 
			 * next paragraph style change.
			 */
			public static readonly toNextStyleChange: Adobe.Indesign.PageReferenceType;
			/**
			 * Alias for TO_NEXT_USE_OF_STYLE. The range of pages from the 
			 * page containing the index entry to the page that contains 
			 * the next occurrance of the specified paragraph style. If no 
			 * paragraph style is specified, the paragraph style of the 
			 * index entry paragraph is used.
			 */
			public static readonly toNextUseOfStyle: Adobe.Indesign.PageReferenceType;
			/** Constructor */
			public constructor();
		}
	}
}