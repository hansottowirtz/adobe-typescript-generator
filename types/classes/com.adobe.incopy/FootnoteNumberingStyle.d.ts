/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class FootnoteNumberingStyle extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ARABIC. Uses Arabic numerals.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly arabic: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Uses Arabic numerals.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly ARABIC: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Uses Arabic Abjad
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly ARABIC_ABJAD: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Uses Arabic Alif Ba Tah
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly ARABIC_ALIF_BA_TAH: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Alias for ARABIC_ABJAD. Uses Arabic Abjad
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly arabicAbjad: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Alias for ARABIC_ALIF_BA_TAH. Uses Arabic Alif Ba Tah
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly arabicAlifBaTah: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Alias for ASTERISKS. Asterisks.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly asterisks: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Asterisks.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly ASTERISKS: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Double leading zeros.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly DOUBLE_LEADING_ZEROS: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Alias for DOUBLE_LEADING_ZEROS. Double leading zeros.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly doubleLeadingZeros: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Full-width Arabic.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly FULL_WIDTH_ARABIC: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Alias for FULL_WIDTH_ARABIC. Full-width Arabic.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly fullWidthArabic: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Uses Hebrew Biblical
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly HEBREW_BIBLICAL: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Uses Hebrew Non Standard
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly HEBREW_NON_STANDARD: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Alias for HEBREW_BIBLICAL. Uses Hebrew Biblical
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly hebrewBiblical: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Alias for HEBREW_NON_STANDARD. Uses Hebrew Non Standard
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly hebrewNonStandard: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Alias for KANJI. Kanji.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly kanji: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Kanji.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly KANJI: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Uses lowercase letters.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly LOWER_LETTERS: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Uses lowercase Roman numerals.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly LOWER_ROMAN: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Alias for LOWER_LETTERS. Uses lowercase letters.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly lowerLetters: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Alias for LOWER_ROMAN. Uses lowercase Roman numerals.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly lowerRoman: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Single leading zeros.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly SINGLE_LEADING_ZEROS: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Alias for SINGLE_LEADING_ZEROS. Single leading zeros.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly singleLeadingZeros: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Alias for SYMBOLS. Uses symbols.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly symbols: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Uses symbols.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly SYMBOLS: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Uses uppercase letters.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly UPPER_LETTERS: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Uses uppercase Roman numerals.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly UPPER_ROMAN: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Alias for UPPER_LETTERS. Uses uppercase letters.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly upperLetters: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Alias for UPPER_ROMAN. Uses uppercase Roman numerals.
			 * @type {Adobe.Incopy.FootnoteNumberingStyle}
			 * @readonly
			 */
			public static readonly upperRoman: Adobe.Incopy.FootnoteNumberingStyle;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}