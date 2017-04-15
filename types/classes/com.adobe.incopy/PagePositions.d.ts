/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PagePositions extends Adobe.Csawlib.CSEnumBase {
			/** Centers the page horizontally. */
			public static readonly CENTER_HORIZONTALLY: Adobe.Incopy.PagePositions;
			/** Centers the page vertically. */
			public static readonly CENTER_VERTICALLY: Adobe.Incopy.PagePositions;
			/**
			 * Alias for CENTERED. Centers the page horizontally and 
			 * vertically.
			 */
			public static readonly centered: Adobe.Incopy.PagePositions;
			/** Centers the page horizontally and vertically. */
			public static readonly CENTERED: Adobe.Incopy.PagePositions;
			/**
			 * Alias for CENTER_HORIZONTALLY. Centers the page 
			 * horizontally.
			 */
			public static readonly centerHorizontally: Adobe.Incopy.PagePositions;
			/** Alias for CENTER_VERTICALLY. Centers the page vertically. */
			public static readonly centerVertically: Adobe.Incopy.PagePositions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Places the page in the upper left corner. */
			public static readonly UPPER_LEFT: Adobe.Incopy.PagePositions;
			/**
			 * Alias for UPPER_LEFT. Places the page in the upper left 
			 * corner.
			 */
			public static readonly upperLeft: Adobe.Incopy.PagePositions;
			/** Constructor */
			public constructor();
		}
	}
}