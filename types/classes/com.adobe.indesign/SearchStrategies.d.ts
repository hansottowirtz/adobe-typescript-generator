/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SearchStrategies extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Searches forward from the start of the current page.
			 * @type {Adobe.Indesign.SearchStrategies}
			 * @readonly
			 */
			public static readonly FIRST_ON_PAGE: Adobe.Indesign.SearchStrategies;
			/**
			 * Alias for FIRST_ON_PAGE. Searches forward from the start of 
			 * the current page.
			 * @type {Adobe.Indesign.SearchStrategies}
			 * @readonly
			 */
			public static readonly firstOnPage: Adobe.Indesign.SearchStrategies;
			/**
			 * Search backward from the end of the current page.
			 * @type {Adobe.Indesign.SearchStrategies}
			 * @readonly
			 */
			public static readonly LAST_ON_PAGE: Adobe.Indesign.SearchStrategies;
			/**
			 * Alias for LAST_ON_PAGE. Search backward from the end of the 
			 * current page.
			 * @type {Adobe.Indesign.SearchStrategies}
			 * @readonly
			 */
			public static readonly lastOnPage: Adobe.Indesign.SearchStrategies;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}