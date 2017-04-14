/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintTiling extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Tile full pages. */
			public static readonly TILEFULLPAGES: Adobe.Illustrator.PrintTiling;
			/** Tile imageable areas. */
			public static readonly TILEIMAGEABLEAREAS: Adobe.Illustrator.PrintTiling;
			/** Tile single full page. */
			public static readonly TILESINGLEFULLPAGE: Adobe.Illustrator.PrintTiling;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}