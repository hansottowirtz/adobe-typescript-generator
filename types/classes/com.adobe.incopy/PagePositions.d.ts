/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PagePositions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Centers the page horizontally.
			 * @type {Adobe.Incopy.PagePositions}
			 * @readonly
			 */
			public static readonly CENTER_HORIZONTALLY: Adobe.Incopy.PagePositions;
			/**
			 * Centers the page vertically.
			 * @type {Adobe.Incopy.PagePositions}
			 * @readonly
			 */
			public static readonly CENTER_VERTICALLY: Adobe.Incopy.PagePositions;
			/**
			 * Alias for CENTERED. Centers the page horizontally and 
			 * vertically.
			 * @type {Adobe.Incopy.PagePositions}
			 * @readonly
			 */
			public static readonly centered: Adobe.Incopy.PagePositions;
			/**
			 * Centers the page horizontally and vertically.
			 * @type {Adobe.Incopy.PagePositions}
			 * @readonly
			 */
			public static readonly CENTERED: Adobe.Incopy.PagePositions;
			/**
			 * Alias for CENTER_HORIZONTALLY. Centers the page 
			 * horizontally.
			 * @type {Adobe.Incopy.PagePositions}
			 * @readonly
			 */
			public static readonly centerHorizontally: Adobe.Incopy.PagePositions;
			/**
			 * Alias for CENTER_VERTICALLY. Centers the page vertically.
			 * @type {Adobe.Incopy.PagePositions}
			 * @readonly
			 */
			public static readonly centerVertically: Adobe.Incopy.PagePositions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Places the page in the upper left corner.
			 * @type {Adobe.Incopy.PagePositions}
			 * @readonly
			 */
			public static readonly UPPER_LEFT: Adobe.Incopy.PagePositions;
			/**
			 * Alias for UPPER_LEFT. Places the page in the upper left 
			 * corner.
			 * @type {Adobe.Incopy.PagePositions}
			 * @readonly
			 */
			public static readonly upperLeft: Adobe.Incopy.PagePositions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}