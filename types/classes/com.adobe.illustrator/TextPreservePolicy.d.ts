/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class TextPreservePolicy extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Preserve the editability of text. */
			public static readonly KEEPTEXTEDITABLE: Adobe.Illustrator.TextPreservePolicy;
			/** Preserve the appearance of text by outlining it. */
			public static readonly OUTLINETEXT: Adobe.Illustrator.TextPreservePolicy;
			/** Preserve the appearance of text by rasterizing it. */
			public static readonly RASTERIZETEXT: Adobe.Illustrator.TextPreservePolicy;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}