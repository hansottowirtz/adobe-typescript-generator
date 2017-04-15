/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class FootnoteRestarting extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Does not restart numbering; numbers footnotes sequentially 
			 * throughout the document.
			 */
			public static readonly DONT_RESTART: Adobe.Incopy.FootnoteRestarting;
			/**
			 * Alias for DONT_RESTART. Does not restart numbering; numbers 
			 * footnotes sequentially throughout the document.
			 */
			public static readonly dontRestart: Adobe.Incopy.FootnoteRestarting;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Restarts footnote numbering on each page. */
			public static readonly PAGE_RESTART: Adobe.Incopy.FootnoteRestarting;
			/**
			 * Alias for PAGE_RESTART. Restarts footnote numbering on each 
			 * page.
			 */
			public static readonly pageRestart: Adobe.Incopy.FootnoteRestarting;
			/** Restarts footnote numbering in each section. */
			public static readonly SECTION_RESTART: Adobe.Incopy.FootnoteRestarting;
			/**
			 * Alias for SECTION_RESTART. Restarts footnote numbering in 
			 * each section.
			 */
			public static readonly sectionRestart: Adobe.Incopy.FootnoteRestarting;
			/** Restarts footnote numbering on each spread. */
			public static readonly SPREAD_RESTART: Adobe.Incopy.FootnoteRestarting;
			/**
			 * Alias for SPREAD_RESTART. Restarts footnote numbering on 
			 * each spread.
			 */
			public static readonly spreadRestart: Adobe.Incopy.FootnoteRestarting;
			/** Constructor */
			public constructor();
		}
	}
}