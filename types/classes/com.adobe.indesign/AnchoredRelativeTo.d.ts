/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AnchoredRelativeTo extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Align the anchored object to the anchor.
			 * @type {Adobe.Indesign.AnchoredRelativeTo}
			 * @readonly
			 */
			public static readonly ANCHOR_LOCATION: Adobe.Indesign.AnchoredRelativeTo;
			/**
			 * Alias for ANCHOR_LOCATION. Align the anchored object to the 
			 * anchor.
			 * @type {Adobe.Indesign.AnchoredRelativeTo}
			 * @readonly
			 */
			public static readonly anchorLocation: Adobe.Indesign.AnchoredRelativeTo;
			/**
			 * Align the anchored object to the edge of the text or table 
			 * column.
			 * @type {Adobe.Indesign.AnchoredRelativeTo}
			 * @readonly
			 */
			public static readonly COLUMN_EDGE: Adobe.Indesign.AnchoredRelativeTo;
			/**
			 * Alias for COLUMN_EDGE. Align the anchored object to the edge 
			 * of the text or table column.
			 * @type {Adobe.Indesign.AnchoredRelativeTo}
			 * @readonly
			 */
			public static readonly columnEdge: Adobe.Indesign.AnchoredRelativeTo;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Align the anchored object to the edge of the page.
			 * @type {Adobe.Indesign.AnchoredRelativeTo}
			 * @readonly
			 */
			public static readonly PAGE_EDGE: Adobe.Indesign.AnchoredRelativeTo;
			/**
			 * Align the anchored object to the page margin.
			 * @type {Adobe.Indesign.AnchoredRelativeTo}
			 * @readonly
			 */
			public static readonly PAGE_MARGINS: Adobe.Indesign.AnchoredRelativeTo;
			/**
			 * Alias for PAGE_EDGE. Align the anchored object to the edge 
			 * of the page.
			 * @type {Adobe.Indesign.AnchoredRelativeTo}
			 * @readonly
			 */
			public static readonly pageEdge: Adobe.Indesign.AnchoredRelativeTo;
			/**
			 * Alias for PAGE_MARGINS. Align the anchored object to the 
			 * page margin.
			 * @type {Adobe.Indesign.AnchoredRelativeTo}
			 * @readonly
			 */
			public static readonly pageMargins: Adobe.Indesign.AnchoredRelativeTo;
			/**
			 * Align the anchored object to the edge of the text frame.
			 * @type {Adobe.Indesign.AnchoredRelativeTo}
			 * @readonly
			 */
			public static readonly TEXT_FRAME: Adobe.Indesign.AnchoredRelativeTo;
			/**
			 * Alias for TEXT_FRAME. Align the anchored object to the edge 
			 * of the text frame.
			 * @type {Adobe.Indesign.AnchoredRelativeTo}
			 * @readonly
			 */
			public static readonly textFrame: Adobe.Indesign.AnchoredRelativeTo;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}