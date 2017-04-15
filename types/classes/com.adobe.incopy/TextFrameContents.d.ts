/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextFrameContents extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Fills the text frame with placeholder text. */
			public static readonly PLACEHOLDER_TEXT: Adobe.Incopy.TextFrameContents;
			/**
			 * Alias for PLACEHOLDER_TEXT. Fills the text frame with 
			 * placeholder text.
			 */
			public static readonly placeholderText: Adobe.Incopy.TextFrameContents;
			/** Constructor */
			public constructor();
		}
	}
}