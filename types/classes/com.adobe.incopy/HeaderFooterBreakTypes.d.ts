/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class HeaderFooterBreakTypes extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Places headers or footers in each text column. */
			public static readonly IN_ALL_TEXT_COLUMNS: Adobe.Incopy.HeaderFooterBreakTypes;
			/**
			 * Alias for IN_ALL_TEXT_COLUMNS. Places headers or footers in 
			 * each text column.
			 */
			public static readonly inAllTextColumns: Adobe.Incopy.HeaderFooterBreakTypes;
			/** Places one instance of headers or footers per page. */
			public static readonly ONCE_PER_PAGE: Adobe.Incopy.HeaderFooterBreakTypes;
			/** Repeats headers or footers in each text frame. */
			public static readonly ONCE_PER_TEXT_FRAME: Adobe.Incopy.HeaderFooterBreakTypes;
			/**
			 * Alias for ONCE_PER_PAGE. Places one instance of headers or 
			 * footers per page.
			 */
			public static readonly oncePerPage: Adobe.Incopy.HeaderFooterBreakTypes;
			/**
			 * Alias for ONCE_PER_TEXT_FRAME. Repeats headers or footers in 
			 * each text frame.
			 */
			public static readonly oncePerTextFrame: Adobe.Incopy.HeaderFooterBreakTypes;
			/** Constructor */
			public constructor();
		}
	}
}