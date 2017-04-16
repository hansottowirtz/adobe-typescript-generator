/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FootnoteNumberingStyle extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ARABIC. Uses Arabic numerals.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly arabic: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Uses Arabic numerals.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly ARABIC: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Uses Arabic Abjad
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly ARABIC_ABJAD: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Uses Arabic Alif Ba Tah
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly ARABIC_ALIF_BA_TAH: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Alias for ARABIC_ABJAD. Uses Arabic Abjad
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly arabicAbjad: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Alias for ARABIC_ALIF_BA_TAH. Uses Arabic Alif Ba Tah
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly arabicAlifBaTah: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Alias for ASTERISKS. Asterisks.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly asterisks: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Asterisks.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly ASTERISKS: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Double leading zeros.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly DOUBLE_LEADING_ZEROS: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Alias for DOUBLE_LEADING_ZEROS. Double leading zeros.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly doubleLeadingZeros: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Full-width Arabic.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly FULL_WIDTH_ARABIC: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Alias for FULL_WIDTH_ARABIC. Full-width Arabic.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly fullWidthArabic: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Uses Hebrew Biblical
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly HEBREW_BIBLICAL: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Uses Hebrew Non Standard
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly HEBREW_NON_STANDARD: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Alias for HEBREW_BIBLICAL. Uses Hebrew Biblical
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly hebrewBiblical: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Alias for HEBREW_NON_STANDARD. Uses Hebrew Non Standard
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly hebrewNonStandard: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Alias for KANJI. Kanji.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly kanji: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Kanji.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly KANJI: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Uses lowercase letters.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly LOWER_LETTERS: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Uses lowercase Roman numerals.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly LOWER_ROMAN: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Alias for LOWER_LETTERS. Uses lowercase letters.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly lowerLetters: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Alias for LOWER_ROMAN. Uses lowercase Roman numerals.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly lowerRoman: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Single leading zeros.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly SINGLE_LEADING_ZEROS: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Alias for SINGLE_LEADING_ZEROS. Single leading zeros.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly singleLeadingZeros: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Alias for SYMBOLS. Uses symbols.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly symbols: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Uses symbols.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly SYMBOLS: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Uses uppercase letters.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly UPPER_LETTERS: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Uses uppercase Roman numerals.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly UPPER_ROMAN: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Alias for UPPER_LETTERS. Uses uppercase letters.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly upperLetters: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Alias for UPPER_ROMAN. Uses uppercase Roman numerals.
			 * @type {Adobe.Indesign.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly upperRoman: Adobe.Indesign.FootnoteNumberingStyle;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}