/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextFrameContents extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Fills the text frame with placeholder text. */
			public static readonly PLACEHOLDER_TEXT: Adobe.Incopy.TextFrameContents;
			/** Fills the text frame with arabic placeholder text. */
			public static readonly PLACEHOLDER_TEXT_ARABIC: Adobe.Incopy.TextFrameContents;
			/** Fills the text frame with cyrillic placeholder text. */
			public static readonly PLACEHOLDER_TEXT_CYRILLIC: Adobe.Incopy.TextFrameContents;
			/** Fills the text frame with greek placeholder text. */
			public static readonly PLACEHOLDER_TEXT_GREEK: Adobe.Incopy.TextFrameContents;
			/** Fills the text frame with hebrew placeholder text. */
			public static readonly PLACEHOLDER_TEXT_HEBREW: Adobe.Incopy.TextFrameContents;
			/**
			 * Alias for PLACEHOLDER_TEXT. Fills the text frame with 
			 * placeholder text.
			 */
			public static readonly placeholderText: Adobe.Incopy.TextFrameContents;
			/**
			 * Alias for PLACEHOLDER_TEXT_ARABIC. Fills the text frame with 
			 * arabic placeholder text.
			 */
			public static readonly placeholderTextArabic: Adobe.Incopy.TextFrameContents;
			/**
			 * Alias for PLACEHOLDER_TEXT_CYRILLIC. Fills the text frame 
			 * with cyrillic placeholder text.
			 */
			public static readonly placeholderTextCyrillic: Adobe.Incopy.TextFrameContents;
			/**
			 * Alias for PLACEHOLDER_TEXT_GREEK. Fills the text frame with 
			 * greek placeholder text.
			 */
			public static readonly placeholderTextGreek: Adobe.Incopy.TextFrameContents;
			/**
			 * Alias for PLACEHOLDER_TEXT_HEBREW. Fills the text frame with 
			 * hebrew placeholder text.
			 */
			public static readonly placeholderTextHebrew: Adobe.Incopy.TextFrameContents;
			/** Constructor */
			public constructor();
		}
	}
}