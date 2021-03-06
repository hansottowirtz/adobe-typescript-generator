/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class NumberingStyle extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ARABIC. Arabic
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly arabic: Adobe.Indesign.NumberingStyle;
			/**
			 * Arabic
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly ARABIC: Adobe.Indesign.NumberingStyle;
			/**
			 * Uses Arabic Abjad
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly ARABIC_ABJAD: Adobe.Indesign.NumberingStyle;
			/**
			 * Uses Arabic Alif Ba Tah
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly ARABIC_ALIF_BA_TAH: Adobe.Indesign.NumberingStyle;
			/**
			 * Alias for ARABIC_ABJAD. Uses Arabic Abjad
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly arabicAbjad: Adobe.Indesign.NumberingStyle;
			/**
			 * Alias for ARABIC_ALIF_BA_TAH. Uses Arabic Alif Ba Tah
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly arabicAlifBaTah: Adobe.Indesign.NumberingStyle;
			/**
			 * Add double leading zeros.
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly DOUBLE_LEADING_ZEROS: Adobe.Indesign.NumberingStyle;
			/**
			 * Alias for DOUBLE_LEADING_ZEROS. Add double leading zeros.
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly doubleLeadingZeros: Adobe.Indesign.NumberingStyle;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Do not add characters.
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly FORMAT_NONE: Adobe.Indesign.NumberingStyle;
			/**
			 * Alias for FORMAT_NONE. Do not add characters.
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly formatNone: Adobe.Indesign.NumberingStyle;
			/**
			 * Uses Hebrew Biblical
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly HEBREW_BIBLICAL: Adobe.Indesign.NumberingStyle;
			/**
			 * Uses Hebrew Non Standard
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly HEBREW_NON_STANDARD: Adobe.Indesign.NumberingStyle;
			/**
			 * Alias for HEBREW_BIBLICAL. Uses Hebrew Biblical
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly hebrewBiblical: Adobe.Indesign.NumberingStyle;
			/**
			 * Alias for HEBREW_NON_STANDARD. Uses Hebrew Non Standard
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly hebrewNonStandard: Adobe.Indesign.NumberingStyle;
			/**
			 * Alias for KANJI. Kanji
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly kanji: Adobe.Indesign.NumberingStyle;
			/**
			 * Kanji
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly KANJI: Adobe.Indesign.NumberingStyle;
			/**
			 * Katakana (a, i, u, e, o...).
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly KATAKANA_MODERN: Adobe.Indesign.NumberingStyle;
			/**
			 * Katakana (i, ro, ha, ni...).
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly KATAKANA_TRADITIONAL: Adobe.Indesign.NumberingStyle;
			/**
			 * Alias for KATAKANA_MODERN. Katakana (a, i, u, e, o...).
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly katakanaModern: Adobe.Indesign.NumberingStyle;
			/**
			 * Alias for KATAKANA_TRADITIONAL. Katakana (i, ro, ha, ni...).
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly katakanaTraditional: Adobe.Indesign.NumberingStyle;
			/**
			 * Lower letters
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly LOWER_LETTERS: Adobe.Indesign.NumberingStyle;
			/**
			 * Lower roman
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly LOWER_ROMAN: Adobe.Indesign.NumberingStyle;
			/**
			 * Alias for LOWER_LETTERS. Lower letters
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly lowerLetters: Adobe.Indesign.NumberingStyle;
			/**
			 * Alias for LOWER_ROMAN. Lower roman
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly lowerRoman: Adobe.Indesign.NumberingStyle;
			/**
			 * Add single leading zeros.
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly SINGLE_LEADING_ZEROS: Adobe.Indesign.NumberingStyle;
			/**
			 * Alias for SINGLE_LEADING_ZEROS. Add single leading zeros.
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly singleLeadingZeros: Adobe.Indesign.NumberingStyle;
			/**
			 * Add triple leading zeros.
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly TRIPLE_LEADING_ZEROS: Adobe.Indesign.NumberingStyle;
			/**
			 * Alias for TRIPLE_LEADING_ZEROS. Add triple leading zeros.
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly tripleLeadingZeros: Adobe.Indesign.NumberingStyle;
			/**
			 * Upper letters
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly UPPER_LETTERS: Adobe.Indesign.NumberingStyle;
			/**
			 * Upper roman
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly UPPER_ROMAN: Adobe.Indesign.NumberingStyle;
			/**
			 * Alias for UPPER_LETTERS. Upper letters
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly upperLetters: Adobe.Indesign.NumberingStyle;
			/**
			 * Alias for UPPER_ROMAN. Upper roman
			 * @type {Adobe.Indesign.NumberingStyle}
			 * @readonly
			 */
			public static readonly upperRoman: Adobe.Indesign.NumberingStyle;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}