/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImagePageBreakType extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Page break after image. */
			public static readonly PAGE_BREAK_AFTER: Adobe.Indesign.ImagePageBreakType;
			/** Page break before image. */
			public static readonly PAGE_BREAK_BEFORE: Adobe.Indesign.ImagePageBreakType;
			/** Page break before and after image. */
			public static readonly PAGE_BREAK_BEFORE_AND_AFTER: Adobe.Indesign.ImagePageBreakType;
			/** Alias for PAGE_BREAK_AFTER. Page break after image. */
			public static readonly pageBreakAfter: Adobe.Indesign.ImagePageBreakType;
			/** Alias for PAGE_BREAK_BEFORE. Page break before image. */
			public static readonly pageBreakBefore: Adobe.Indesign.ImagePageBreakType;
			/**
			 * Alias for PAGE_BREAK_BEFORE_AND_AFTER. Page break before and 
			 * after image.
			 */
			public static readonly pageBreakBeforeAndAfter: Adobe.Indesign.ImagePageBreakType;
			/** Constructor */
			public constructor();
		}
	}
}