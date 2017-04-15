/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Coordinate system used by Illustrator */
		class CoordinateSystem extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Artboard coordinate system. */
			public static readonly ARTBOARDCOORDINATESYSTEM: Adobe.Illustrator.CoordinateSystem;
			/** Document coordinate system. */
			public static readonly DOCUMENTCOORDINATESYSTEM: Adobe.Illustrator.CoordinateSystem;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}