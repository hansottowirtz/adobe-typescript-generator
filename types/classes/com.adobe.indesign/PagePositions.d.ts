/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PagePositions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Centers the page horizontally.
			 * @type {Adobe.Indesign.PagePositions}
			 * @readonly
			 */
			public static readonly CENTER_HORIZONTALLY: Adobe.Indesign.PagePositions;
			/**
			 * Centers the page vertically.
			 * @type {Adobe.Indesign.PagePositions}
			 * @readonly
			 */
			public static readonly CENTER_VERTICALLY: Adobe.Indesign.PagePositions;
			/**
			 * Alias for CENTERED. Centers the page horizontally and 
			 * vertically.
			 * @type {Adobe.Indesign.PagePositions}
			 * @readonly
			 */
			public static readonly centered: Adobe.Indesign.PagePositions;
			/**
			 * Centers the page horizontally and vertically.
			 * @type {Adobe.Indesign.PagePositions}
			 * @readonly
			 */
			public static readonly CENTERED: Adobe.Indesign.PagePositions;
			/**
			 * Alias for CENTER_HORIZONTALLY. Centers the page 
			 * horizontally.
			 * @type {Adobe.Indesign.PagePositions}
			 * @readonly
			 */
			public static readonly centerHorizontally: Adobe.Indesign.PagePositions;
			/**
			 * Alias for CENTER_VERTICALLY. Centers the page vertically.
			 * @type {Adobe.Indesign.PagePositions}
			 * @readonly
			 */
			public static readonly centerVertically: Adobe.Indesign.PagePositions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Places the page in the upper left corner.
			 * @type {Adobe.Indesign.PagePositions}
			 * @readonly
			 */
			public static readonly UPPER_LEFT: Adobe.Indesign.PagePositions;
			/**
			 * Alias for UPPER_LEFT. Places the page in the upper left 
			 * corner.
			 * @type {Adobe.Indesign.PagePositions}
			 * @readonly
			 */
			public static readonly upperLeft: Adobe.Indesign.PagePositions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}