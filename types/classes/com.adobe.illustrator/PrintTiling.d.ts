/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PrintTiling extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly TILEFULLPAGES: Adobe.Illustrator.PrintTiling;
			public static readonly TILEIMAGEABLEAREAS: Adobe.Illustrator.PrintTiling;
			public static readonly TILESINGLEFULLPAGE: Adobe.Illustrator.PrintTiling;
			/** Constructor */
			public constructor();
		}
	}
}