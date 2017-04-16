/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class NumberedParagraphsOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Excludes paragraph numbers.
			 * @type {Adobe.Indesign.NumberedParagraphsOptions}
			 * @readonly
			 */
			public static readonly EXCLUDE_NUMBERS: Adobe.Indesign.NumberedParagraphsOptions;
			/**
			 * Alias for EXCLUDE_NUMBERS. Excludes paragraph numbers.
			 * @type {Adobe.Indesign.NumberedParagraphsOptions}
			 * @readonly
			 */
			public static readonly excludeNumbers: Adobe.Indesign.NumberedParagraphsOptions;
			/**
			 * Includes the full paragraph text.
			 * @type {Adobe.Indesign.NumberedParagraphsOptions}
			 * @readonly
			 */
			public static readonly INCLUDE_FULL_PARAGRAPH: Adobe.Indesign.NumberedParagraphsOptions;
			/**
			 * Includes only the paragraph number.
			 * @type {Adobe.Indesign.NumberedParagraphsOptions}
			 * @readonly
			 */
			public static readonly INCLUDE_NUMBERS_ONLY: Adobe.Indesign.NumberedParagraphsOptions;
			/**
			 * Alias for INCLUDE_FULL_PARAGRAPH. Includes the full 
			 * paragraph text.
			 * @type {Adobe.Indesign.NumberedParagraphsOptions}
			 * @readonly
			 */
			public static readonly includeFullParagraph: Adobe.Indesign.NumberedParagraphsOptions;
			/**
			 * Alias for INCLUDE_NUMBERS_ONLY. Includes only the paragraph 
			 * number.
			 * @type {Adobe.Indesign.NumberedParagraphsOptions}
			 * @readonly
			 */
			public static readonly includeNumbersOnly: Adobe.Indesign.NumberedParagraphsOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}