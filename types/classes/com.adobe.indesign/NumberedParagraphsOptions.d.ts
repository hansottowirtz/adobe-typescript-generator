/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class NumberedParagraphsOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Excludes paragraph numbers. */
			public static readonly EXCLUDE_NUMBERS: Adobe.Indesign.NumberedParagraphsOptions;
			/** Alias for EXCLUDE_NUMBERS. Excludes paragraph numbers. */
			public static readonly excludeNumbers: Adobe.Indesign.NumberedParagraphsOptions;
			/** Includes the full paragraph text. */
			public static readonly INCLUDE_FULL_PARAGRAPH: Adobe.Indesign.NumberedParagraphsOptions;
			/** Includes only the paragraph number. */
			public static readonly INCLUDE_NUMBERS_ONLY: Adobe.Indesign.NumberedParagraphsOptions;
			/**
			 * Alias for INCLUDE_FULL_PARAGRAPH. Includes the full 
			 * paragraph text.
			 */
			public static readonly includeFullParagraph: Adobe.Indesign.NumberedParagraphsOptions;
			/**
			 * Alias for INCLUDE_NUMBERS_ONLY. Includes only the paragraph 
			 * number.
			 */
			public static readonly includeNumbersOnly: Adobe.Indesign.NumberedParagraphsOptions;
			/** Constructor */
			public constructor();
		}
	}
}