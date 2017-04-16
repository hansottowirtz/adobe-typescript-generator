/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SearchModes extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Glyph search. */
			public static readonly GLYPH_SEARCH: Adobe.Incopy.SearchModes;
			/** Alias for GLYPH_SEARCH. Glyph search. */
			public static readonly glyphSearch: Adobe.Incopy.SearchModes;
			/** Grep search. */
			public static readonly GREP_SEARCH: Adobe.Incopy.SearchModes;
			/** Alias for GREP_SEARCH. Grep search. */
			public static readonly grepSearch: Adobe.Incopy.SearchModes;
			/** Object search. */
			public static readonly OBJECT_SEARCH: Adobe.Incopy.SearchModes;
			/** Alias for OBJECT_SEARCH. Object search. */
			public static readonly objectSearch: Adobe.Incopy.SearchModes;
			/** Text search. */
			public static readonly TEXT_SEARCH: Adobe.Incopy.SearchModes;
			/** Alias for TEXT_SEARCH. Text search. */
			public static readonly textSearch: Adobe.Incopy.SearchModes;
			/** Constructor */
			public constructor();
		}
	}
}