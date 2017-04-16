/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class VerticallyRelativeTo extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CAPHEIGHT. Align the anchored object to the top of 
			 * capital letters.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly capheight: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the top of capital letters.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly CAPHEIGHT: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the edge of the text or table 
			 * column.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly COLUMN_EDGE: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Alias for COLUMN_EDGE. Align the anchored object to the edge 
			 * of the text or table column.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly columnEdge: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the bottom of the embox.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly EMBOX_BOTTOM: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the middle of the embox.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly EMBOX_MIDDLE: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the top of the embox.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly EMBOX_TOP: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Alias for EMBOX_BOTTOM. Align the anchored object to the 
			 * bottom of the embox.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly emboxBottom: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Alias for EMBOX_MIDDLE. Align the anchored object to the 
			 * middle of the embox.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly emboxMiddle: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Alias for EMBOX_TOP. Align the anchored object to the top of 
			 * the embox.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly emboxTop: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Align the anchored object to the top of the tallest letters 
			 * in the text.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly LINE_ASCENT: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the baseline of the line of 
			 * text.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly LINE_BASELINE: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the top of lower case letters 
			 * with no ascent, such as x.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly LINE_XHEIGHT: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Alias for LINE_ASCENT. Align the anchored object to the top 
			 * of the tallest letters in the text.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly lineAscent: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Alias for LINE_BASELINE. Align the anchored object to the 
			 * baseline of the line of text.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly lineBaseline: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Alias for LINE_XHEIGHT. Align the anchored object to the top 
			 * of lower case letters with no ascent, such as x.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly lineXheight: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the edge of the page.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly PAGE_EDGE: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the page margin.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly PAGE_MARGINS: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Alias for PAGE_EDGE. Align the anchored object to the edge 
			 * of the page.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly pageEdge: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Alias for PAGE_MARGINS. Align the anchored object to the 
			 * page margin.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly pageMargins: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the edge of the text frame.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly TEXT_FRAME: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Alias for TEXT_FRAME. Align the anchored object to the edge 
			 * of the text frame.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly textFrame: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Align the anchored object to the top of the text leading.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly TOP_OF_LEADING: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Alias for TOP_OF_LEADING. Align the anchored object to the 
			 * top of the text leading.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 * @readonly
			 */
			public static readonly topOfLeading: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}