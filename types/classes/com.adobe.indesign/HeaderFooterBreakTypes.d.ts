/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class HeaderFooterBreakTypes extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Places headers or footers in each text column. */
			public static readonly IN_ALL_TEXT_COLUMNS: Adobe.Indesign.HeaderFooterBreakTypes;
			/**
			 * Alias for IN_ALL_TEXT_COLUMNS. Places headers or footers in 
			 * each text column.
			 */
			public static readonly inAllTextColumns: Adobe.Indesign.HeaderFooterBreakTypes;
			/** Places one instance of headers or footers per page. */
			public static readonly ONCE_PER_PAGE: Adobe.Indesign.HeaderFooterBreakTypes;
			/** Repeats headers or footers in each text frame. */
			public static readonly ONCE_PER_TEXT_FRAME: Adobe.Indesign.HeaderFooterBreakTypes;
			/**
			 * Alias for ONCE_PER_PAGE. Places one instance of headers or 
			 * footers per page.
			 */
			public static readonly oncePerPage: Adobe.Indesign.HeaderFooterBreakTypes;
			/**
			 * Alias for ONCE_PER_TEXT_FRAME. Repeats headers or footers in 
			 * each text frame.
			 */
			public static readonly oncePerTextFrame: Adobe.Indesign.HeaderFooterBreakTypes;
			/** Constructor */
			public constructor();
		}
	}
}