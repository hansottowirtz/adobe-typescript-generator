/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class NumberingStyle extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ARABIC. Arabic
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly arabic: Adobe.Incopy.NumberingStyle;
			/**
			 * Arabic
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly ARABIC: Adobe.Incopy.NumberingStyle;
			/**
			 * Uses Arabic Abjad
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly ARABIC_ABJAD: Adobe.Incopy.NumberingStyle;
			/**
			 * Uses Arabic Alif Ba Tah
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly ARABIC_ALIF_BA_TAH: Adobe.Incopy.NumberingStyle;
			/**
			 * Alias for ARABIC_ABJAD. Uses Arabic Abjad
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly arabicAbjad: Adobe.Incopy.NumberingStyle;
			/**
			 * Alias for ARABIC_ALIF_BA_TAH. Uses Arabic Alif Ba Tah
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly arabicAlifBaTah: Adobe.Incopy.NumberingStyle;
			/**
			 * Add double leading zeros.
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly DOUBLE_LEADING_ZEROS: Adobe.Incopy.NumberingStyle;
			/**
			 * Alias for DOUBLE_LEADING_ZEROS. Add double leading zeros.
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly doubleLeadingZeros: Adobe.Incopy.NumberingStyle;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Do not add characters.
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly FORMAT_NONE: Adobe.Incopy.NumberingStyle;
			/**
			 * Alias for FORMAT_NONE. Do not add characters.
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly formatNone: Adobe.Incopy.NumberingStyle;
			/**
			 * Uses Hebrew Biblical
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly HEBREW_BIBLICAL: Adobe.Incopy.NumberingStyle;
			/**
			 * Uses Hebrew Non Standard
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly HEBREW_NON_STANDARD: Adobe.Incopy.NumberingStyle;
			/**
			 * Alias for HEBREW_BIBLICAL. Uses Hebrew Biblical
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly hebrewBiblical: Adobe.Incopy.NumberingStyle;
			/**
			 * Alias for HEBREW_NON_STANDARD. Uses Hebrew Non Standard
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly hebrewNonStandard: Adobe.Incopy.NumberingStyle;
			/**
			 * Alias for KANJI. Kanji
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly kanji: Adobe.Incopy.NumberingStyle;
			/**
			 * Kanji
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly KANJI: Adobe.Incopy.NumberingStyle;
			/**
			 * Katakana (a, i, u, e, o...).
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly KATAKANA_MODERN: Adobe.Incopy.NumberingStyle;
			/**
			 * Katakana (i, ro, ha, ni...).
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly KATAKANA_TRADITIONAL: Adobe.Incopy.NumberingStyle;
			/**
			 * Alias for KATAKANA_MODERN. Katakana (a, i, u, e, o...).
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly katakanaModern: Adobe.Incopy.NumberingStyle;
			/**
			 * Alias for KATAKANA_TRADITIONAL. Katakana (i, ro, ha, ni...).
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly katakanaTraditional: Adobe.Incopy.NumberingStyle;
			/**
			 * Lower letters
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly LOWER_LETTERS: Adobe.Incopy.NumberingStyle;
			/**
			 * Lower roman
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly LOWER_ROMAN: Adobe.Incopy.NumberingStyle;
			/**
			 * Alias for LOWER_LETTERS. Lower letters
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly lowerLetters: Adobe.Incopy.NumberingStyle;
			/**
			 * Alias for LOWER_ROMAN. Lower roman
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly lowerRoman: Adobe.Incopy.NumberingStyle;
			/**
			 * Add single leading zeros.
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly SINGLE_LEADING_ZEROS: Adobe.Incopy.NumberingStyle;
			/**
			 * Alias for SINGLE_LEADING_ZEROS. Add single leading zeros.
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly singleLeadingZeros: Adobe.Incopy.NumberingStyle;
			/**
			 * Add triple leading zeros.
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly TRIPLE_LEADING_ZEROS: Adobe.Incopy.NumberingStyle;
			/**
			 * Alias for TRIPLE_LEADING_ZEROS. Add triple leading zeros.
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly tripleLeadingZeros: Adobe.Incopy.NumberingStyle;
			/**
			 * Upper letters
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly UPPER_LETTERS: Adobe.Incopy.NumberingStyle;
			/**
			 * Upper roman
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly UPPER_ROMAN: Adobe.Incopy.NumberingStyle;
			/**
			 * Alias for UPPER_LETTERS. Upper letters
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly upperLetters: Adobe.Incopy.NumberingStyle;
			/**
			 * Alias for UPPER_ROMAN. Upper roman
			 * @type {Adobe.Incopy.NumberingStyle}
			 * @readonly
			 */
			public static readonly upperRoman: Adobe.Incopy.NumberingStyle;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}