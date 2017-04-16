/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PrintingBounds extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly ARTBOARDBOUNDS: Adobe.Illustrator.PrintingBounds;
			public static readonly ARTWORKBOUNDS: Adobe.Illustrator.PrintingBounds;
			public static readonly CROPBOUNDS: Adobe.Illustrator.PrintingBounds;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}