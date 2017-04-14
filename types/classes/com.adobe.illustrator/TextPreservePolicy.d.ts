/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class TextPreservePolicy extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Preserve the editability of text. */
			public static readonly KEEPTEXTEDITABLE: TextPreservePolicy;
			/** Preserve the appearance of text by outlining it. */
			public static readonly OUTLINETEXT: TextPreservePolicy;
			/** Preserve the appearance of text by rasterizing it. */
			public static readonly RASTERIZETEXT: TextPreservePolicy;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}