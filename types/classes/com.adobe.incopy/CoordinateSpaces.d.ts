/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class CoordinateSpaces extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Inner coordinates */
			public static readonly INNER_COORDINATES: Adobe.Incopy.CoordinateSpaces;
			/** Alias for INNER_COORDINATES. Inner coordinates */
			public static readonly innerCoordinates: Adobe.Incopy.CoordinateSpaces;
			/** Parent coordinates */
			public static readonly PARENT_COORDINATES: Adobe.Incopy.CoordinateSpaces;
			/** Alias for PARENT_COORDINATES. Parent coordinates */
			public static readonly parentCoordinates: Adobe.Incopy.CoordinateSpaces;
			/** Pasteboard coordinates */
			public static readonly PASTEBOARD_COORDINATES: Adobe.Incopy.CoordinateSpaces;
			/** Alias for PASTEBOARD_COORDINATES. Pasteboard coordinates */
			public static readonly pasteboardCoordinates: Adobe.Incopy.CoordinateSpaces;
			/** Spread coordinates. */
			public static readonly SPREAD_COORDINATES: Adobe.Incopy.CoordinateSpaces;
			/** Alias for SPREAD_COORDINATES. Spread coordinates. */
			public static readonly spreadCoordinates: Adobe.Incopy.CoordinateSpaces;
			/** Constructor */
			public constructor();
		}
	}
}