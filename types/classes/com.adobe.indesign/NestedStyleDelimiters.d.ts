/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class NestedStyleDelimiters extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the first character or characters other than zero-width 
			 * markers as the nested style delimiter. Zero-width markers 
			 * include anchors, index markers, XML tags, and so on.
			 */
			public static readonly ANY_CHARACTER: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Uses the first word or words in the paragraph as the nested 
			 * style delimiter. The first word is considered all characters 
			 * preceding the first space or white space character in the 
			 * paragraph.
			 */
			public static readonly ANY_WORD: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Alias for ANY_CHARACTER. Uses the first character or 
			 * characters other than zero-width markers as the nested style 
			 * delimiter. Zero-width markers include anchors, index 
			 * markers, XML tags, and so on.
			 */
			public static readonly anyCharacter: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Alias for ANY_WORD. Uses the first word or words in the 
			 * paragraph as the nested style delimiter. The first word is 
			 * considered all characters preceding the first space or white 
			 * space character in the paragraph.
			 */
			public static readonly anyWord: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Uses the first automatic page number as the nested style 
			 * delimiter.
			 */
			public static readonly AUTO_PAGE_NUMBER: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Alias for AUTO_PAGE_NUMBER. Uses the first automatic page 
			 * number as the nested style delimiter.
			 */
			public static readonly autoPageNumber: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Alias for DIGITS. Uses the first numeric character or 
			 * characters as the nested style delimiter. Note: To specify 
			 * the number of digits, see repetition.
			 */
			public static readonly digits: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Uses the first numeric character or characters as the nested 
			 * style delimiter. Note: To specify the number of digits, see 
			 * repetition.
			 */
			public static readonly DIGITS: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Alias for DROPCAP. Uses the dropcap as the nested style 
			 * delimiter.
			 */
			public static readonly dropcap: Adobe.Indesign.NestedStyleDelimiters;
			/** Uses the dropcap as the nested style delimiter. */
			public static readonly DROPCAP: Adobe.Indesign.NestedStyleDelimiters;
			/** Uses the first em space as the nested style delimiter. */
			public static readonly EM_SPACE: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Alias for EM_SPACE. Uses the first em space as the nested 
			 * style delimiter.
			 */
			public static readonly emSpace: Adobe.Indesign.NestedStyleDelimiters;
			/** Uses the first en space as the nested style delimiter. */
			public static readonly EN_SPACE: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Uses the inserted end nested style here character as the 
			 * nested style delimiter.
			 */
			public static readonly END_NESTED_STYLE: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Alias for END_NESTED_STYLE. Uses the inserted end nested 
			 * style here character as the nested style delimiter.
			 */
			public static readonly endNestedStyle: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Alias for EN_SPACE. Uses the first en space as the nested 
			 * style delimiter.
			 */
			public static readonly enSpace: Adobe.Indesign.NestedStyleDelimiters;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the first forced line break as the nested style 
			 * delimiter.
			 */
			public static readonly FORCED_LINE_BREAK: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Alias for FORCED_LINE_BREAK. Uses the first forced line 
			 * break as the nested style delimiter.
			 */
			public static readonly forcedLineBreak: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Uses the first indent-to-here tab character as the nested 
			 * style delimiter. Note: Does not use the first indent-to-here 
			 * tab stop. If no actual indent-to-here tab character has been 
			 * inserted in the paragraph, the nested style is applied 
			 * through the end of the paragraph.
			 */
			public static readonly INDENT_HERE_TAB: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Alias for INDENT_HERE_TAB. Uses the first indent-to-here tab 
			 * character as the nested style delimiter. Note: Does not use 
			 * the first indent-to-here tab stop. If no actual 
			 * indent-to-here tab character has been inserted in the 
			 * paragraph, the nested style is applied through the end of 
			 * the paragraph.
			 */
			public static readonly indentHereTab: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Uses the first inline graphic as the nested style delimiter.
			 */
			public static readonly INLINE_GRAPHIC: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Alias for INLINE_GRAPHIC. Uses the first inline graphic as 
			 * the nested style delimiter.
			 */
			public static readonly inlineGraphic: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Alias for LETTERS. Uses the first alpha character or 
			 * characters as the nested style delimiter. Note: To specify 
			 * the number of letters, see repetition.
			 */
			public static readonly letters: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Uses the first alpha character or characters as the nested 
			 * style delimiter. Note: To specify the number of letters, see 
			 * repetition.
			 */
			public static readonly LETTERS: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Uses the first nonbreaking space as the nested style 
			 * delimiter.
			 */
			public static readonly NONBREAKING_SPACE: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Alias for NONBREAKING_SPACE. Uses the first nonbreaking 
			 * space as the nested style delimiter.
			 */
			public static readonly nonbreakingSpace: Adobe.Indesign.NestedStyleDelimiters;
			/** Alias for REPEAT. Repeat */
			public static readonly repeat: Adobe.Indesign.NestedStyleDelimiters;
			/** Repeat */
			public static readonly REPEAT: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Uses the first section name marker as the nested style 
			 * delimiter.
			 */
			public static readonly SECTION_MARKER: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Alias for SECTION_MARKER. Uses the first section name marker 
			 * as the nested style delimiter.
			 */
			public static readonly sectionMarker: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Alias for SENTENCE. Uses the first sentence or sentences in 
			 * the paragraph as the nested style delimiter. The first 
			 * sentence is considered all text preceding the first period, 
			 * question mark, or exclamation mark in the paragraph.
			 */
			public static readonly sentence: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Uses the first sentence or sentences in the paragraph as the 
			 * nested style delimiter. The first sentence is considered all 
			 * text preceding the first period, question mark, or 
			 * exclamation mark in the paragraph.
			 */
			public static readonly SENTENCE: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Alias for TABS. Uses the first tab character as the nested 
			 * style delimiter. Note: Does not use the first tab stop. If 
			 * no actual tab character has been inserted in the paragraph, 
			 * the nested style is applied through the end of the 
			 * paragraph.
			 */
			public static readonly tabs: Adobe.Indesign.NestedStyleDelimiters;
			/**
			 * Uses the first tab character as the nested style delimiter. 
			 * Note: Does not use the first tab stop. If no actual tab 
			 * character has been inserted in the paragraph, the nested 
			 * style is applied through the end of the paragraph.
			 */
			public static readonly TABS: Adobe.Indesign.NestedStyleDelimiters;
			/** Constructor */
			public constructor();
		}
	}
}