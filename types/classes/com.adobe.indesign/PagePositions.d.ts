/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PagePositions extends Adobe.Csawlib.CSEnumBase {
			/** Centers the page horizontally. */
			public static readonly CENTER_HORIZONTALLY: Adobe.Indesign.PagePositions;
			/** Centers the page vertically. */
			public static readonly CENTER_VERTICALLY: Adobe.Indesign.PagePositions;
			/**
			 * Alias for CENTERED. Centers the page horizontally and 
			 * vertically.
			 */
			public static readonly centered: Adobe.Indesign.PagePositions;
			/** Centers the page horizontally and vertically. */
			public static readonly CENTERED: Adobe.Indesign.PagePositions;
			/**
			 * Alias for CENTER_HORIZONTALLY. Centers the page 
			 * horizontally.
			 */
			public static readonly centerHorizontally: Adobe.Indesign.PagePositions;
			/** Alias for CENTER_VERTICALLY. Centers the page vertically. */
			public static readonly centerVertically: Adobe.Indesign.PagePositions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Places the page in the upper left corner. */
			public static readonly UPPER_LEFT: Adobe.Indesign.PagePositions;
			/**
			 * Alias for UPPER_LEFT. Places the page in the upper left 
			 * corner.
			 */
			public static readonly upperLeft: Adobe.Indesign.PagePositions;
			/** Constructor */
			public constructor();
		}
	}
}