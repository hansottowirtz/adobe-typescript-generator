/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class TextPreservePolicy extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly AUTOMATICALLYCONVERTTEXT: Adobe.Illustrator.TextPreservePolicy;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly KEEPTEXTEDITABLE: Adobe.Illustrator.TextPreservePolicy;
			public static readonly OUTLINETEXT: Adobe.Illustrator.TextPreservePolicy;
			public static readonly RASTERIZETEXT: Adobe.Illustrator.TextPreservePolicy;
			/** Constructor */
			public constructor();
		}
	}
}