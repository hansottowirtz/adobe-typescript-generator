/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StartParagraph extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ANYWHERE. Starts in the next available space.
			 * @type {Adobe.Indesign.StartParagraph}
			 * @readonly
			 */
			public static readonly anywhere: Adobe.Indesign.StartParagraph;
			/**
			 * Starts in the next available space.
			 * @type {Adobe.Indesign.StartParagraph}
			 * @readonly
			 */
			public static readonly ANYWHERE: Adobe.Indesign.StartParagraph;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Starts at the top of the next column.
			 * @type {Adobe.Indesign.StartParagraph}
			 * @readonly
			 */
			public static readonly NEXT_COLUMN: Adobe.Indesign.StartParagraph;
			/**
			 * Starts at the top of the next even-numbered page.
			 * @type {Adobe.Indesign.StartParagraph}
			 * @readonly
			 */
			public static readonly NEXT_EVEN_PAGE: Adobe.Indesign.StartParagraph;
			/**
			 * Starts at the top of the next text frame in the thread.
			 * @type {Adobe.Indesign.StartParagraph}
			 * @readonly
			 */
			public static readonly NEXT_FRAME: Adobe.Indesign.StartParagraph;
			/**
			 * Starts at the top of the next odd-numbered page.
			 * @type {Adobe.Indesign.StartParagraph}
			 * @readonly
			 */
			public static readonly NEXT_ODD_PAGE: Adobe.Indesign.StartParagraph;
			/**
			 * Starts at the top of the next page.
			 * @type {Adobe.Indesign.StartParagraph}
			 * @readonly
			 */
			public static readonly NEXT_PAGE: Adobe.Indesign.StartParagraph;
			/**
			 * Alias for NEXT_COLUMN. Starts at the top of the next column.
			 * @type {Adobe.Indesign.StartParagraph}
			 * @readonly
			 */
			public static readonly nextColumn: Adobe.Indesign.StartParagraph;
			/**
			 * Alias for NEXT_EVEN_PAGE. Starts at the top of the next 
			 * even-numbered page.
			 * @type {Adobe.Indesign.StartParagraph}
			 * @readonly
			 */
			public static readonly nextEvenPage: Adobe.Indesign.StartParagraph;
			/**
			 * Alias for NEXT_FRAME. Starts at the top of the next text 
			 * frame in the thread.
			 * @type {Adobe.Indesign.StartParagraph}
			 * @readonly
			 */
			public static readonly nextFrame: Adobe.Indesign.StartParagraph;
			/**
			 * Alias for NEXT_ODD_PAGE. Starts at the top of the next 
			 * odd-numbered page.
			 * @type {Adobe.Indesign.StartParagraph}
			 * @readonly
			 */
			public static readonly nextOddPage: Adobe.Indesign.StartParagraph;
			/**
			 * Alias for NEXT_PAGE. Starts at the top of the next page.
			 * @type {Adobe.Indesign.StartParagraph}
			 * @readonly
			 */
			public static readonly nextPage: Adobe.Indesign.StartParagraph;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}