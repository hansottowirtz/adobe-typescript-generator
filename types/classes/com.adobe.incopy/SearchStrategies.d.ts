/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SearchStrategies extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Searches forward from the start of the current page.
			 * @type {Adobe.Incopy.SearchStrategies}
			 * @readonly
			 */
			public static readonly FIRST_ON_PAGE: Adobe.Incopy.SearchStrategies;
			/**
			 * Alias for FIRST_ON_PAGE. Searches forward from the start of 
			 * the current page.
			 * @type {Adobe.Incopy.SearchStrategies}
			 * @readonly
			 */
			public static readonly firstOnPage: Adobe.Incopy.SearchStrategies;
			/**
			 * Search backward from the end of the current page.
			 * @type {Adobe.Incopy.SearchStrategies}
			 * @readonly
			 */
			public static readonly LAST_ON_PAGE: Adobe.Incopy.SearchStrategies;
			/**
			 * Alias for LAST_ON_PAGE. Search backward from the end of the 
			 * current page.
			 * @type {Adobe.Incopy.SearchStrategies}
			 * @readonly
			 */
			public static readonly lastOnPage: Adobe.Incopy.SearchStrategies;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}