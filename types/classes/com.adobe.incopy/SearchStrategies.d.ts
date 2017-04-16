/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SearchStrategies extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Searches forward from the start of the current page. */
			public static readonly FIRST_ON_PAGE: Adobe.Incopy.SearchStrategies;
			/**
			 * Alias for FIRST_ON_PAGE. Searches forward from the start of 
			 * the current page.
			 */
			public static readonly firstOnPage: Adobe.Incopy.SearchStrategies;
			/** Search backward from the end of the current page. */
			public static readonly LAST_ON_PAGE: Adobe.Incopy.SearchStrategies;
			/**
			 * Alias for LAST_ON_PAGE. Search backward from the end of the 
			 * current page.
			 */
			public static readonly lastOnPage: Adobe.Incopy.SearchStrategies;
			/** Constructor */
			public constructor();
		}
	}
}