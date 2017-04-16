/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BaselineFrameGridRelativeOption extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Offsets the grid from the top of the text frame. */
			public static readonly TOP_OF_FRAME: Adobe.Indesign.BaselineFrameGridRelativeOption;
			/** Offsets the grid from the top inset of the text frame. */
			public static readonly TOP_OF_INSET: Adobe.Indesign.BaselineFrameGridRelativeOption;
			/** Offsets the grid from the top margin of the page. */
			public static readonly TOP_OF_MARGIN: Adobe.Indesign.BaselineFrameGridRelativeOption;
			/** Offsets the grid from the top of the page. */
			public static readonly TOP_OF_PAGE: Adobe.Indesign.BaselineFrameGridRelativeOption;
			/**
			 * Alias for TOP_OF_FRAME. Offsets the grid from the top of the 
			 * text frame.
			 */
			public static readonly topOfFrame: Adobe.Indesign.BaselineFrameGridRelativeOption;
			/**
			 * Alias for TOP_OF_INSET. Offsets the grid from the top inset 
			 * of the text frame.
			 */
			public static readonly topOfInset: Adobe.Indesign.BaselineFrameGridRelativeOption;
			/**
			 * Alias for TOP_OF_MARGIN. Offsets the grid from the top 
			 * margin of the page.
			 */
			public static readonly topOfMargin: Adobe.Indesign.BaselineFrameGridRelativeOption;
			/**
			 * Alias for TOP_OF_PAGE. Offsets the grid from the top of the 
			 * page.
			 */
			public static readonly topOfPage: Adobe.Indesign.BaselineFrameGridRelativeOption;
			/** Constructor */
			public constructor();
		}
	}
}