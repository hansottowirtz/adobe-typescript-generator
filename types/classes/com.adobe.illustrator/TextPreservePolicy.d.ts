/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Text preserve policy used by FXG file format. */
		class TextPreservePolicy extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Preserve the editability of text. */
			public static readonly KEEPTEXTEDITABLE: Adobe.Illustrator.TextPreservePolicy;
			/** Preserve the appearance of text by outlining it. */
			public static readonly OUTLINETEXT: Adobe.Illustrator.TextPreservePolicy;
			/** Preserve the appearance of text by rasterizing it. */
			public static readonly RASTERIZETEXT: Adobe.Illustrator.TextPreservePolicy;
			/** Constructor */
			public constructor();
		}
	}
}