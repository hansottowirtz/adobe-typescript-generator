/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SearchModes extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Glyph search. */
			public static readonly GLYPH_SEARCH: Adobe.Indesign.SearchModes;
			/** Alias for GLYPH_SEARCH. Glyph search. */
			public static readonly glyphSearch: Adobe.Indesign.SearchModes;
			/** Grep search. */
			public static readonly GREP_SEARCH: Adobe.Indesign.SearchModes;
			/** Alias for GREP_SEARCH. Grep search. */
			public static readonly grepSearch: Adobe.Indesign.SearchModes;
			/** Object search. */
			public static readonly OBJECT_SEARCH: Adobe.Indesign.SearchModes;
			/** Alias for OBJECT_SEARCH. Object search. */
			public static readonly objectSearch: Adobe.Indesign.SearchModes;
			/** Text search. */
			public static readonly TEXT_SEARCH: Adobe.Indesign.SearchModes;
			/** Alias for TEXT_SEARCH. Text search. */
			public static readonly textSearch: Adobe.Indesign.SearchModes;
			/** Constructor */
			public constructor();
		}
	}
}