/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StartParagraph extends Adobe.Csawlib.CSEnumBase {
			/** Alias for ANYWHERE. Starts in the next available space. */
			public static readonly anywhere: Adobe.Indesign.StartParagraph;
			/** Starts in the next available space. */
			public static readonly ANYWHERE: Adobe.Indesign.StartParagraph;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Starts at the top of the next column. */
			public static readonly NEXT_COLUMN: Adobe.Indesign.StartParagraph;
			/** Starts at the top of the next even-numbered page. */
			public static readonly NEXT_EVEN_PAGE: Adobe.Indesign.StartParagraph;
			/** Starts at the top of the next text frame in the thread. */
			public static readonly NEXT_FRAME: Adobe.Indesign.StartParagraph;
			/** Starts at the top of the next odd-numbered page. */
			public static readonly NEXT_ODD_PAGE: Adobe.Indesign.StartParagraph;
			/** Starts at the top of the next page. */
			public static readonly NEXT_PAGE: Adobe.Indesign.StartParagraph;
			/**
			 * Alias for NEXT_COLUMN. Starts at the top of the next column.
			 */
			public static readonly nextColumn: Adobe.Indesign.StartParagraph;
			/**
			 * Alias for NEXT_EVEN_PAGE. Starts at the top of the next 
			 * even-numbered page.
			 */
			public static readonly nextEvenPage: Adobe.Indesign.StartParagraph;
			/**
			 * Alias for NEXT_FRAME. Starts at the top of the next text 
			 * frame in the thread.
			 */
			public static readonly nextFrame: Adobe.Indesign.StartParagraph;
			/**
			 * Alias for NEXT_ODD_PAGE. Starts at the top of the next 
			 * odd-numbered page.
			 */
			public static readonly nextOddPage: Adobe.Indesign.StartParagraph;
			/** Alias for NEXT_PAGE. Starts at the top of the next page. */
			public static readonly nextPage: Adobe.Indesign.StartParagraph;
			/** Constructor */
			public constructor();
		}
	}
}