/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class DocumentTransparencyGrid extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Blue grids. */
			public static readonly TransparencyGridBlue: Adobe.Illustrator.DocumentTransparencyGrid;
			/** Dark color grids. */
			public static readonly TransparencyGridDark: Adobe.Illustrator.DocumentTransparencyGrid;
			/** Green grids. */
			public static readonly TransparencyGridGreen: Adobe.Illustrator.DocumentTransparencyGrid;
			/** Light grid colors. */
			public static readonly TransparencyGridLight: Adobe.Illustrator.DocumentTransparencyGrid;
			/** Medium grid colors. */
			public static readonly TransparencyGridMedium: Adobe.Illustrator.DocumentTransparencyGrid;
			/** No grids. */
			public static readonly TransparencyGridNone: Adobe.Illustrator.DocumentTransparencyGrid;
			/** Orange grids. */
			public static readonly TransparencyGridOrange: Adobe.Illustrator.DocumentTransparencyGrid;
			/** Purple grids. */
			public static readonly TransparencyGridPurple: Adobe.Illustrator.DocumentTransparencyGrid;
			/** Red grids. */
			public static readonly TransparencyGridRed: Adobe.Illustrator.DocumentTransparencyGrid;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}