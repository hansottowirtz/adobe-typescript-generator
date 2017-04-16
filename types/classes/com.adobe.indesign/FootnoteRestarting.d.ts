/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FootnoteRestarting extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Does not restart numbering; numbers footnotes sequentially 
			 * throughout the document.
			 * @type {Adobe.Indesign.FootnoteRestarting}
			 * @readonly
			 */
			public static readonly DONT_RESTART: Adobe.Indesign.FootnoteRestarting;
			/**
			 * Alias for DONT_RESTART. Does not restart numbering; numbers 
			 * footnotes sequentially throughout the document.
			 * @type {Adobe.Indesign.FootnoteRestarting}
			 * @readonly
			 */
			public static readonly dontRestart: Adobe.Indesign.FootnoteRestarting;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Restarts footnote numbering on each page.
			 * @type {Adobe.Indesign.FootnoteRestarting}
			 * @readonly
			 */
			public static readonly PAGE_RESTART: Adobe.Indesign.FootnoteRestarting;
			/**
			 * Alias for PAGE_RESTART. Restarts footnote numbering on each 
			 * page.
			 * @type {Adobe.Indesign.FootnoteRestarting}
			 * @readonly
			 */
			public static readonly pageRestart: Adobe.Indesign.FootnoteRestarting;
			/**
			 * Restarts footnote numbering in each section.
			 * @type {Adobe.Indesign.FootnoteRestarting}
			 * @readonly
			 */
			public static readonly SECTION_RESTART: Adobe.Indesign.FootnoteRestarting;
			/**
			 * Alias for SECTION_RESTART. Restarts footnote numbering in 
			 * each section.
			 * @type {Adobe.Indesign.FootnoteRestarting}
			 * @readonly
			 */
			public static readonly sectionRestart: Adobe.Indesign.FootnoteRestarting;
			/**
			 * Restarts footnote numbering on each spread.
			 * @type {Adobe.Indesign.FootnoteRestarting}
			 * @readonly
			 */
			public static readonly SPREAD_RESTART: Adobe.Indesign.FootnoteRestarting;
			/**
			 * Alias for SPREAD_RESTART. Restarts footnote numbering on 
			 * each spread.
			 * @type {Adobe.Indesign.FootnoteRestarting}
			 * @readonly
			 */
			public static readonly spreadRestart: Adobe.Indesign.FootnoteRestarting;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}