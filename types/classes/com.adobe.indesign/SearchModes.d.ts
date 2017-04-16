/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SearchModes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Glyph search.
			 * @type {Adobe.Indesign.SearchModes}
			 * @readonly
			 */
			public static readonly GLYPH_SEARCH: Adobe.Indesign.SearchModes;
			/**
			 * Alias for GLYPH_SEARCH. Glyph search.
			 * @type {Adobe.Indesign.SearchModes}
			 * @readonly
			 */
			public static readonly glyphSearch: Adobe.Indesign.SearchModes;
			/**
			 * Grep search.
			 * @type {Adobe.Indesign.SearchModes}
			 * @readonly
			 */
			public static readonly GREP_SEARCH: Adobe.Indesign.SearchModes;
			/**
			 * Alias for GREP_SEARCH. Grep search.
			 * @type {Adobe.Indesign.SearchModes}
			 * @readonly
			 */
			public static readonly grepSearch: Adobe.Indesign.SearchModes;
			/**
			 * Object search.
			 * @type {Adobe.Indesign.SearchModes}
			 * @readonly
			 */
			public static readonly OBJECT_SEARCH: Adobe.Indesign.SearchModes;
			/**
			 * Alias for OBJECT_SEARCH. Object search.
			 * @type {Adobe.Indesign.SearchModes}
			 * @readonly
			 */
			public static readonly objectSearch: Adobe.Indesign.SearchModes;
			/**
			 * Text search.
			 * @type {Adobe.Indesign.SearchModes}
			 * @readonly
			 */
			public static readonly TEXT_SEARCH: Adobe.Indesign.SearchModes;
			/**
			 * Alias for TEXT_SEARCH. Text search.
			 * @type {Adobe.Indesign.SearchModes}
			 * @readonly
			 */
			public static readonly textSearch: Adobe.Indesign.SearchModes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}