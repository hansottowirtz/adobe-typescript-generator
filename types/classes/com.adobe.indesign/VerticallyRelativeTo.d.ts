/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class VerticallyRelativeTo extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CAPHEIGHT. Align the anchored object to the top of 
			 * capital letters.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly capheight: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the top of capital letters.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly CAPHEIGHT: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the edge of the text or table 
			 * column.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly COLUMN_EDGE: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Alias for COLUMN_EDGE. Align the anchored object to the edge 
			 * of the text or table column.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly columnEdge: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the bottom of the embox.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly EMBOX_BOTTOM: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the middle of the embox.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly EMBOX_MIDDLE: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the top of the embox.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly EMBOX_TOP: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Alias for EMBOX_BOTTOM. Align the anchored object to the 
			 * bottom of the embox.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly emboxBottom: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Alias for EMBOX_MIDDLE. Align the anchored object to the 
			 * middle of the embox.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly emboxMiddle: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Alias for EMBOX_TOP. Align the anchored object to the top of 
			 * the embox.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly emboxTop: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Align the anchored object to the top of the tallest letters 
			 * in the text.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly LINE_ASCENT: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the baseline of the line of 
			 * text.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly LINE_BASELINE: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the top of lower case letters 
			 * with no ascent, such as x.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly LINE_XHEIGHT: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Alias for LINE_ASCENT. Align the anchored object to the top 
			 * of the tallest letters in the text.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly lineAscent: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Alias for LINE_BASELINE. Align the anchored object to the 
			 * baseline of the line of text.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly lineBaseline: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Alias for LINE_XHEIGHT. Align the anchored object to the top 
			 * of lower case letters with no ascent, such as x.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly lineXheight: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the edge of the page.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly PAGE_EDGE: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the page margin.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly PAGE_MARGINS: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Alias for PAGE_EDGE. Align the anchored object to the edge 
			 * of the page.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly pageEdge: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Alias for PAGE_MARGINS. Align the anchored object to the 
			 * page margin.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly pageMargins: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the edge of the text frame.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly TEXT_FRAME: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Alias for TEXT_FRAME. Align the anchored object to the edge 
			 * of the text frame.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly textFrame: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the top of the text leading.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly TOP_OF_LEADING: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Alias for TOP_OF_LEADING. Align the anchored object to the 
			 * top of the text leading.
			 * @type {Adobe.Indesign.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly topOfLeading: Adobe.Indesign.VerticallyRelativeTo;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}