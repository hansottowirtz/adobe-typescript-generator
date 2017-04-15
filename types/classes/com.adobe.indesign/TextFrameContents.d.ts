/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TextFrameContents extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Fills the text frame with placeholder text. */
			public static readonly PLACEHOLDER_TEXT: Adobe.Indesign.TextFrameContents;
			/**
			 * Alias for PLACEHOLDER_TEXT. Fills the text frame with 
			 * placeholder text.
			 */
			public static readonly placeholderText: Adobe.Indesign.TextFrameContents;
			/** Constructor */
			public constructor();
		}
	}
}