/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SearchModes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Glyph search.
			 * @type {Adobe.Incopy.SearchModes}
			 * @readonly
			 */
			public static readonly GLYPH_SEARCH: Adobe.Incopy.SearchModes;
			/**
			 * Alias for GLYPH_SEARCH. Glyph search.
			 * @type {Adobe.Incopy.SearchModes}
			 * @readonly
			 */
			public static readonly glyphSearch: Adobe.Incopy.SearchModes;
			/**
			 * Grep search.
			 * @type {Adobe.Incopy.SearchModes}
			 * @readonly
			 */
			public static readonly GREP_SEARCH: Adobe.Incopy.SearchModes;
			/**
			 * Alias for GREP_SEARCH. Grep search.
			 * @type {Adobe.Incopy.SearchModes}
			 * @readonly
			 */
			public static readonly grepSearch: Adobe.Incopy.SearchModes;
			/**
			 * Object search.
			 * @type {Adobe.Incopy.SearchModes}
			 * @readonly
			 */
			public static readonly OBJECT_SEARCH: Adobe.Incopy.SearchModes;
			/**
			 * Alias for OBJECT_SEARCH. Object search.
			 * @type {Adobe.Incopy.SearchModes}
			 * @readonly
			 */
			public static readonly objectSearch: Adobe.Incopy.SearchModes;
			/**
			 * Text search.
			 * @type {Adobe.Incopy.SearchModes}
			 * @readonly
			 */
			public static readonly TEXT_SEARCH: Adobe.Incopy.SearchModes;
			/**
			 * Alias for TEXT_SEARCH. Text search.
			 * @type {Adobe.Incopy.SearchModes}
			 * @readonly
			 */
			public static readonly textSearch: Adobe.Incopy.SearchModes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}