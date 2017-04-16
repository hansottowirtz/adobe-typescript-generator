/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageViewOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Pages arranged in vertical columns by alternate layout.
			 * @type {Adobe.Indesign.PageViewOptions}
			 * @readonly
			 */
			public static readonly BY_ALTERNATE_LAYOUT: Adobe.Indesign.PageViewOptions;
			/**
			 * Alias for BY_ALTERNATE_LAYOUT. Pages arranged in vertical 
			 * columns by alternate layout.
			 * @type {Adobe.Indesign.PageViewOptions}
			 * @readonly
			 */
			public static readonly byAlternateLayout: Adobe.Indesign.PageViewOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for HORIZONTALLY. Pages arranged in horizontal rows.
			 * @type {Adobe.Indesign.PageViewOptions}
			 * @readonly
			 */
			public static readonly horizontally: Adobe.Indesign.PageViewOptions;
			/**
			 * Pages arranged in horizontal rows.
			 * @type {Adobe.Indesign.PageViewOptions}
			 * @readonly
			 */
			public static readonly HORIZONTALLY: Adobe.Indesign.PageViewOptions;
			/**
			 * Alias for VERTICALLY. Pages arranged in a vertical column.
			 * @type {Adobe.Indesign.PageViewOptions}
			 * @readonly
			 */
			public static readonly vertically: Adobe.Indesign.PageViewOptions;
			/**
			 * Pages arranged in a vertical column.
			 * @type {Adobe.Indesign.PageViewOptions}
			 * @readonly
			 */
			public static readonly VERTICALLY: Adobe.Indesign.PageViewOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}