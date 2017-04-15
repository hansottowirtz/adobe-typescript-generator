/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class NestedStyleDelimiters extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the first character or characters other than zero-width 
			 * markers as the nested style delimiter. Zero-width markers 
			 * include anchors, index markers, XML tags, and so on.
			 */
			public static readonly ANY_CHARACTER: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Uses the first word or words in the paragraph as the nested 
			 * style delimiter. The first word is considered all characters 
			 * preceding the first space or white space character in the 
			 * paragraph.
			 */
			public static readonly ANY_WORD: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Alias for ANY_CHARACTER. Uses the first character or 
			 * characters other than zero-width markers as the nested style 
			 * delimiter. Zero-width markers include anchors, index 
			 * markers, XML tags, and so on.
			 */
			public static readonly anyCharacter: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Alias for ANY_WORD. Uses the first word or words in the 
			 * paragraph as the nested style delimiter. The first word is 
			 * considered all characters preceding the first space or white 
			 * space character in the paragraph.
			 */
			public static readonly anyWord: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Uses the first automatic page number as the nested style 
			 * delimiter.
			 */
			public static readonly AUTO_PAGE_NUMBER: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Alias for AUTO_PAGE_NUMBER. Uses the first automatic page 
			 * number as the nested style delimiter.
			 */
			public static readonly autoPageNumber: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Alias for DIGITS. Uses the first numeric character or 
			 * characters as the nested style delimiter. Note: To specify 
			 * the number of digits, see repetition.
			 */
			public static readonly digits: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Uses the first numeric character or characters as the nested 
			 * style delimiter. Note: To specify the number of digits, see 
			 * repetition.
			 */
			public static readonly DIGITS: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Alias for DROPCAP. Uses the dropcap as the nested style 
			 * delimiter.
			 */
			public static readonly dropcap: Adobe.Incopy.NestedStyleDelimiters;
			/** Uses the dropcap as the nested style delimiter. */
			public static readonly DROPCAP: Adobe.Incopy.NestedStyleDelimiters;
			/** Uses the first em space as the nested style delimiter. */
			public static readonly EM_SPACE: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Alias for EM_SPACE. Uses the first em space as the nested 
			 * style delimiter.
			 */
			public static readonly emSpace: Adobe.Incopy.NestedStyleDelimiters;
			/** Uses the first en space as the nested style delimiter. */
			public static readonly EN_SPACE: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Uses the inserted end nested style here character as the 
			 * nested style delimiter.
			 */
			public static readonly END_NESTED_STYLE: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Alias for END_NESTED_STYLE. Uses the inserted end nested 
			 * style here character as the nested style delimiter.
			 */
			public static readonly endNestedStyle: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Alias for EN_SPACE. Uses the first en space as the nested 
			 * style delimiter.
			 */
			public static readonly enSpace: Adobe.Incopy.NestedStyleDelimiters;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the first forced line break as the nested style 
			 * delimiter.
			 */
			public static readonly FORCED_LINE_BREAK: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Alias for FORCED_LINE_BREAK. Uses the first forced line 
			 * break as the nested style delimiter.
			 */
			public static readonly forcedLineBreak: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Uses the first indent-to-here tab character as the nested 
			 * style delimiter. Note: Does not use the first indent-to-here 
			 * tab stop. If no actual indent-to-here tab character has been 
			 * inserted in the paragraph, the nested style is applied 
			 * through the end of the paragraph.
			 */
			public static readonly INDENT_HERE_TAB: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Alias for INDENT_HERE_TAB. Uses the first indent-to-here tab 
			 * character as the nested style delimiter. Note: Does not use 
			 * the first indent-to-here tab stop. If no actual 
			 * indent-to-here tab character has been inserted in the 
			 * paragraph, the nested style is applied through the end of 
			 * the paragraph.
			 */
			public static readonly indentHereTab: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Uses the first inline graphic as the nested style delimiter.
			 */
			public static readonly INLINE_GRAPHIC: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Alias for INLINE_GRAPHIC. Uses the first inline graphic as 
			 * the nested style delimiter.
			 */
			public static readonly inlineGraphic: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Alias for LETTERS. Uses the first alpha character or 
			 * characters as the nested style delimiter. Note: To specify 
			 * the number of letters, see repetition.
			 */
			public static readonly letters: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Uses the first alpha character or characters as the nested 
			 * style delimiter. Note: To specify the number of letters, see 
			 * repetition.
			 */
			public static readonly LETTERS: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Uses the first nonbreaking space as the nested style 
			 * delimiter.
			 */
			public static readonly NONBREAKING_SPACE: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Alias for NONBREAKING_SPACE. Uses the first nonbreaking 
			 * space as the nested style delimiter.
			 */
			public static readonly nonbreakingSpace: Adobe.Incopy.NestedStyleDelimiters;
			/** Alias for REPEAT. Repeat */
			public static readonly repeat: Adobe.Incopy.NestedStyleDelimiters;
			/** Repeat */
			public static readonly REPEAT: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Uses the first section name marker as the nested style 
			 * delimiter.
			 */
			public static readonly SECTION_MARKER: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Alias for SECTION_MARKER. Uses the first section name marker 
			 * as the nested style delimiter.
			 */
			public static readonly sectionMarker: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Alias for SENTENCE. Uses the first sentence or sentences in 
			 * the paragraph as the nested style delimiter. The first 
			 * sentence is considered all text preceding the first period, 
			 * question mark, or exclamation mark in the paragraph.
			 */
			public static readonly sentence: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Uses the first sentence or sentences in the paragraph as the 
			 * nested style delimiter. The first sentence is considered all 
			 * text preceding the first period, question mark, or 
			 * exclamation mark in the paragraph.
			 */
			public static readonly SENTENCE: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Alias for TABS. Uses the first tab character as the nested 
			 * style delimiter. Note: Does not use the first tab stop. If 
			 * no actual tab character has been inserted in the paragraph, 
			 * the nested style is applied through the end of the 
			 * paragraph.
			 */
			public static readonly tabs: Adobe.Incopy.NestedStyleDelimiters;
			/**
			 * Uses the first tab character as the nested style delimiter. 
			 * Note: Does not use the first tab stop. If no actual tab 
			 * character has been inserted in the paragraph, the nested 
			 * style is applied through the end of the paragraph.
			 */
			public static readonly TABS: Adobe.Incopy.NestedStyleDelimiters;
			/** Constructor */
			public constructor();
		}
	}
}