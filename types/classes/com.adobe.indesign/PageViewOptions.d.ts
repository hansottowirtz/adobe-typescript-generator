/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageViewOptions extends Adobe.Csawlib.CSEnumBase {
			/** Pages arranged in vertical columns by alternate layout. */
			public static readonly BY_ALTERNATE_LAYOUT: Adobe.Indesign.PageViewOptions;
			/**
			 * Alias for BY_ALTERNATE_LAYOUT. Pages arranged in vertical 
			 * columns by alternate layout.
			 */
			public static readonly byAlternateLayout: Adobe.Indesign.PageViewOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for HORIZONTALLY. Pages arranged in horizontal rows. */
			public static readonly horizontally: Adobe.Indesign.PageViewOptions;
			/** Pages arranged in horizontal rows. */
			public static readonly HORIZONTALLY: Adobe.Indesign.PageViewOptions;
			/** Alias for VERTICALLY. Pages arranged in a vertical column. */
			public static readonly vertically: Adobe.Indesign.PageViewOptions;
			/** Pages arranged in a vertical column. */
			public static readonly VERTICALLY: Adobe.Indesign.PageViewOptions;
			/** Constructor */
			public constructor();
		}
	}
}