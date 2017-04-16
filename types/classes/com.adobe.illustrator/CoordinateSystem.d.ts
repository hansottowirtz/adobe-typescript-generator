/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class CoordinateSystem extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly ARTBOARDCOORDINATESYSTEM: Adobe.Illustrator.CoordinateSystem;
			public static readonly DOCUMENTCOORDINATESYSTEM: Adobe.Illustrator.CoordinateSystem;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}