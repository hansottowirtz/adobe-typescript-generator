/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PageNumberStyle extends Adobe.Csawlib.CSEnumBase {
			/** Alias for ARABIC. Uses Arabic numerals. */
			public static readonly arabic: Adobe.Incopy.PageNumberStyle;
			/** Uses Arabic numerals. */
			public static readonly ARABIC: Adobe.Incopy.PageNumberStyle;
			/** Uses Arabic Abjad */
			public static readonly ARABIC_ABJAD: Adobe.Incopy.PageNumberStyle;
			/** Uses Arabic Alif Ba Tah */
			public static readonly ARABIC_ALIF_BA_TAH: Adobe.Incopy.PageNumberStyle;
			/** Alias for ARABIC_ABJAD. Uses Arabic Abjad */
			public static readonly arabicAbjad: Adobe.Incopy.PageNumberStyle;
			/** Alias for ARABIC_ALIF_BA_TAH. Uses Arabic Alif Ba Tah */
			public static readonly arabicAlifBaTah: Adobe.Incopy.PageNumberStyle;
			/**
			 * Uses Arabic numerals and formats all page numbers as three 
			 * digits.
			 */
			public static readonly DOUBLE_LEADING_ZEROS: Adobe.Incopy.PageNumberStyle;
			/**
			 * Alias for DOUBLE_LEADING_ZEROS. Uses Arabic numerals and 
			 * formats all page numbers as three digits.
			 */
			public static readonly doubleLeadingZeros: Adobe.Incopy.PageNumberStyle;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses Hebrew Biblical */
			public static readonly HEBREW_BIBLICAL: Adobe.Incopy.PageNumberStyle;
			/** Uses Hebrew Non Standard */
			public static readonly HEBREW_NON_STANDARD: Adobe.Incopy.PageNumberStyle;
			/** Alias for HEBREW_BIBLICAL. Uses Hebrew Biblical */
			public static readonly hebrewBiblical: Adobe.Incopy.PageNumberStyle;
			/** Alias for HEBREW_NON_STANDARD. Uses Hebrew Non Standard */
			public static readonly hebrewNonStandard: Adobe.Incopy.PageNumberStyle;
			/** Alias for KANJI. Uses Kanji. */
			public static readonly kanji: Adobe.Incopy.PageNumberStyle;
			/** Uses Kanji. */
			public static readonly KANJI: Adobe.Incopy.PageNumberStyle;
			/** Uses lowercase letters. */
			public static readonly LOWER_LETTERS: Adobe.Incopy.PageNumberStyle;
			/** Uses lowercase Roman numerals. */
			public static readonly LOWER_ROMAN: Adobe.Incopy.PageNumberStyle;
			/** Alias for LOWER_LETTERS. Uses lowercase letters. */
			public static readonly lowerLetters: Adobe.Incopy.PageNumberStyle;
			/** Alias for LOWER_ROMAN. Uses lowercase Roman numerals. */
			public static readonly lowerRoman: Adobe.Incopy.PageNumberStyle;
			/**
			 * Uses Arabic numerals and formats all page numbers as two 
			 * digits.
			 */
			public static readonly SINGLE_LEADING_ZEROS: Adobe.Incopy.PageNumberStyle;
			/**
			 * Alias for SINGLE_LEADING_ZEROS. Uses Arabic numerals and 
			 * formats all page numbers as two digits.
			 */
			public static readonly singleLeadingZeros: Adobe.Incopy.PageNumberStyle;
			/**
			 * Uses Arabic numerals and formats all page numbers as four 
			 * digits.
			 */
			public static readonly TRIPLE_LEADING_ZEROS: Adobe.Incopy.PageNumberStyle;
			/**
			 * Alias for TRIPLE_LEADING_ZEROS. Uses Arabic numerals and 
			 * formats all page numbers as four digits.
			 */
			public static readonly tripleLeadingZeros: Adobe.Incopy.PageNumberStyle;
			/** Uses uppercase letters. */
			public static readonly UPPER_LETTERS: Adobe.Incopy.PageNumberStyle;
			/** Uses uppercase Roman numerals. */
			public static readonly UPPER_ROMAN: Adobe.Incopy.PageNumberStyle;
			/** Alias for UPPER_LETTERS. Uses uppercase letters. */
			public static readonly upperLetters: Adobe.Incopy.PageNumberStyle;
			/** Alias for UPPER_ROMAN. Uses uppercase Roman numerals. */
			public static readonly upperRoman: Adobe.Incopy.PageNumberStyle;
			/** Constructor */
			public constructor();
		}
	}
}