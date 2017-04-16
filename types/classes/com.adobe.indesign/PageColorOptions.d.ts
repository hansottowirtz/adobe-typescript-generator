/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageColorOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NOTHING. No color.
			 * @type {Adobe.Indesign.PageColorOptions}
			 * @readonly
			 */
			public static readonly nothing: Adobe.Indesign.PageColorOptions;
			/**
			 * No color.
			 * @type {Adobe.Indesign.PageColorOptions}
			 * @readonly
			 */
			public static readonly NOTHING: Adobe.Indesign.PageColorOptions;
			/**
			 * Uses the color label of the page's master page.
			 * @type {Adobe.Indesign.PageColorOptions}
			 * @readonly
			 */
			public static readonly USE_MASTER_COLOR: Adobe.Indesign.PageColorOptions;
			/**
			 * Alias for USE_MASTER_COLOR. Uses the color label of the 
			 * page's master page.
			 * @type {Adobe.Indesign.PageColorOptions}
			 * @readonly
			 */
			public static readonly useMasterColor: Adobe.Indesign.PageColorOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}