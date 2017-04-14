/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintTiling extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Tile full pages. */
			public static readonly TILEFULLPAGES: PrintTiling;
			/** Tile imageable areas. */
			public static readonly TILEIMAGEABLEAREAS: PrintTiling;
			/** Tile single full page. */
			public static readonly TILESINGLEFULLPAGE: PrintTiling;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}