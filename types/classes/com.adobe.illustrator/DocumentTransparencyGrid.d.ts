/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class DocumentTransparencyGrid extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Blue grids. */
			public static readonly TransparencyGridBlue: DocumentTransparencyGrid;
			/** Dark color grids. */
			public static readonly TransparencyGridDark: DocumentTransparencyGrid;
			/** Green grids. */
			public static readonly TransparencyGridGreen: DocumentTransparencyGrid;
			/** Light grid colors. */
			public static readonly TransparencyGridLight: DocumentTransparencyGrid;
			/** Medium grid colors. */
			public static readonly TransparencyGridMedium: DocumentTransparencyGrid;
			/** No grids. */
			public static readonly TransparencyGridNone: DocumentTransparencyGrid;
			/** Orange grids. */
			public static readonly TransparencyGridOrange: DocumentTransparencyGrid;
			/** Purple grids. */
			public static readonly TransparencyGridPurple: DocumentTransparencyGrid;
			/** Red grids. */
			public static readonly TransparencyGridRed: DocumentTransparencyGrid;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}