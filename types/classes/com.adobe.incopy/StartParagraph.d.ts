/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class StartParagraph extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ANYWHERE. Starts in the next available space.
			 * @type {Adobe.Incopy.StartParagraph}
			 * @readonly
			 */
			public static readonly anywhere: Adobe.Incopy.StartParagraph;
			/**
			 * Starts in the next available space.
			 * @type {Adobe.Incopy.StartParagraph}
			 * @readonly
			 */
			public static readonly ANYWHERE: Adobe.Incopy.StartParagraph;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Starts at the top of the next column.
			 * @type {Adobe.Incopy.StartParagraph}
			 * @readonly
			 */
			public static readonly NEXT_COLUMN: Adobe.Incopy.StartParagraph;
			/**
			 * Starts at the top of the next even-numbered page.
			 * @type {Adobe.Incopy.StartParagraph}
			 * @readonly
			 */
			public static readonly NEXT_EVEN_PAGE: Adobe.Incopy.StartParagraph;
			/**
			 * Starts at the top of the next text frame in the thread.
			 * @type {Adobe.Incopy.StartParagraph}
			 * @readonly
			 */
			public static readonly NEXT_FRAME: Adobe.Incopy.StartParagraph;
			/**
			 * Starts at the top of the next odd-numbered page.
			 * @type {Adobe.Incopy.StartParagraph}
			 * @readonly
			 */
			public static readonly NEXT_ODD_PAGE: Adobe.Incopy.StartParagraph;
			/**
			 * Starts at the top of the next page.
			 * @type {Adobe.Incopy.StartParagraph}
			 * @readonly
			 */
			public static readonly NEXT_PAGE: Adobe.Incopy.StartParagraph;
			/**
			 * Alias for NEXT_COLUMN. Starts at the top of the next column.
			 * @type {Adobe.Incopy.StartParagraph}
			 * @readonly
			 */
			public static readonly nextColumn: Adobe.Incopy.StartParagraph;
			/**
			 * Alias for NEXT_EVEN_PAGE. Starts at the top of the next 
			 * even-numbered page.
			 * @type {Adobe.Incopy.StartParagraph}
			 * @readonly
			 */
			public static readonly nextEvenPage: Adobe.Incopy.StartParagraph;
			/**
			 * Alias for NEXT_FRAME. Starts at the top of the next text 
			 * frame in the thread.
			 * @type {Adobe.Incopy.StartParagraph}
			 * @readonly
			 */
			public static readonly nextFrame: Adobe.Incopy.StartParagraph;
			/**
			 * Alias for NEXT_ODD_PAGE. Starts at the top of the next 
			 * odd-numbered page.
			 * @type {Adobe.Incopy.StartParagraph}
			 * @readonly
			 */
			public static readonly nextOddPage: Adobe.Incopy.StartParagraph;
			/**
			 * Alias for NEXT_PAGE. Starts at the top of the next page.
			 * @type {Adobe.Incopy.StartParagraph}
			 * @readonly
			 */
			public static readonly nextPage: Adobe.Incopy.StartParagraph;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}