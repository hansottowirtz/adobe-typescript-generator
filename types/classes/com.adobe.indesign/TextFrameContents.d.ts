/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TextFrameContents extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Fills the text frame with placeholder text. */
			public static readonly PLACEHOLDER_TEXT: Adobe.Indesign.TextFrameContents;
			/** Fills the text frame with arabic placeholder text. */
			public static readonly PLACEHOLDER_TEXT_ARABIC: Adobe.Indesign.TextFrameContents;
			/** Fills the text frame with cyrillic placeholder text. */
			public static readonly PLACEHOLDER_TEXT_CYRILLIC: Adobe.Indesign.TextFrameContents;
			/** Fills the text frame with greek placeholder text. */
			public static readonly PLACEHOLDER_TEXT_GREEK: Adobe.Indesign.TextFrameContents;
			/** Fills the text frame with hebrew placeholder text. */
			public static readonly PLACEHOLDER_TEXT_HEBREW: Adobe.Indesign.TextFrameContents;
			/**
			 * Alias for PLACEHOLDER_TEXT. Fills the text frame with 
			 * placeholder text.
			 */
			public static readonly placeholderText: Adobe.Indesign.TextFrameContents;
			/**
			 * Alias for PLACEHOLDER_TEXT_ARABIC. Fills the text frame with 
			 * arabic placeholder text.
			 */
			public static readonly placeholderTextArabic: Adobe.Indesign.TextFrameContents;
			/**
			 * Alias for PLACEHOLDER_TEXT_CYRILLIC. Fills the text frame 
			 * with cyrillic placeholder text.
			 */
			public static readonly placeholderTextCyrillic: Adobe.Indesign.TextFrameContents;
			/**
			 * Alias for PLACEHOLDER_TEXT_GREEK. Fills the text frame with 
			 * greek placeholder text.
			 */
			public static readonly placeholderTextGreek: Adobe.Indesign.TextFrameContents;
			/**
			 * Alias for PLACEHOLDER_TEXT_HEBREW. Fills the text frame with 
			 * hebrew placeholder text.
			 */
			public static readonly placeholderTextHebrew: Adobe.Indesign.TextFrameContents;
			/** Constructor */
			public constructor();
		}
	}
}