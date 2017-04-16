/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CoordinateSpaces extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Inner coordinates */
			public static readonly INNER_COORDINATES: Adobe.Indesign.CoordinateSpaces;
			/** Alias for INNER_COORDINATES. Inner coordinates */
			public static readonly innerCoordinates: Adobe.Indesign.CoordinateSpaces;
			/** Page coordinates. */
			public static readonly PAGE_COORDINATES: Adobe.Indesign.CoordinateSpaces;
			/** Alias for PAGE_COORDINATES. Page coordinates. */
			public static readonly pageCoordinates: Adobe.Indesign.CoordinateSpaces;
			/** Parent coordinates */
			public static readonly PARENT_COORDINATES: Adobe.Indesign.CoordinateSpaces;
			/** Alias for PARENT_COORDINATES. Parent coordinates */
			public static readonly parentCoordinates: Adobe.Indesign.CoordinateSpaces;
			/** Pasteboard coordinates */
			public static readonly PASTEBOARD_COORDINATES: Adobe.Indesign.CoordinateSpaces;
			/** Alias for PASTEBOARD_COORDINATES. Pasteboard coordinates */
			public static readonly pasteboardCoordinates: Adobe.Indesign.CoordinateSpaces;
			/** Spread coordinates. */
			public static readonly SPREAD_COORDINATES: Adobe.Indesign.CoordinateSpaces;
			/** Alias for SPREAD_COORDINATES. Spread coordinates. */
			public static readonly spreadCoordinates: Adobe.Indesign.CoordinateSpaces;
			/** Constructor */
			public constructor();
		}
	}
}