/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AnchoredRelativeTo extends Adobe.Csawlib.CSEnumBase {
			/** Align the anchored object to the anchor. */
			public static readonly ANCHOR_LOCATION: Adobe.Incopy.AnchoredRelativeTo;
			/**
			 * Alias for ANCHOR_LOCATION. Align the anchored object to the 
			 * anchor.
			 */
			public static readonly anchorLocation: Adobe.Incopy.AnchoredRelativeTo;
			/**
			 * Align the anchored object to the edge of the text or table 
			 * column.
			 */
			public static readonly COLUMN_EDGE: Adobe.Incopy.AnchoredRelativeTo;
			/**
			 * Alias for COLUMN_EDGE. Align the anchored object to the edge 
			 * of the text or table column.
			 */
			public static readonly columnEdge: Adobe.Incopy.AnchoredRelativeTo;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Align the anchored object to the edge of the page. */
			public static readonly PAGE_EDGE: Adobe.Incopy.AnchoredRelativeTo;
			/** Align the anchored object to the page margin. */
			public static readonly PAGE_MARGINS: Adobe.Incopy.AnchoredRelativeTo;
			/**
			 * Alias for PAGE_EDGE. Align the anchored object to the edge 
			 * of the page.
			 */
			public static readonly pageEdge: Adobe.Incopy.AnchoredRelativeTo;
			/**
			 * Alias for PAGE_MARGINS. Align the anchored object to the 
			 * page margin.
			 */
			public static readonly pageMargins: Adobe.Incopy.AnchoredRelativeTo;
			/** Align the anchored object to the edge of the text frame. */
			public static readonly TEXT_FRAME: Adobe.Incopy.AnchoredRelativeTo;
			/**
			 * Alias for TEXT_FRAME. Align the anchored object to the edge 
			 * of the text frame.
			 */
			public static readonly textFrame: Adobe.Incopy.AnchoredRelativeTo;
			/** Constructor */
			public constructor();
		}
	}
}