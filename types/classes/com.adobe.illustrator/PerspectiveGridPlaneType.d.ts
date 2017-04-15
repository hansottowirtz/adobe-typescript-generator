/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Perspective grid plane types */
		class PerspectiveGridPlaneType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Perspective Grid Floor Plane Type. */
			public static readonly FLOORPLANE: Adobe.Illustrator.PerspectiveGridPlaneType;
			/** Perspective Grid Left Plane Type. */
			public static readonly LEFTPLANE: Adobe.Illustrator.PerspectiveGridPlaneType;
			/** Invalid Perspective Grid Plane Type. */
			public static readonly NOPLANE: Adobe.Illustrator.PerspectiveGridPlaneType;
			/** Perspective Grid Right Plane Type. */
			public static readonly RIGHTPLANE: Adobe.Illustrator.PerspectiveGridPlaneType;
			/** Constructor */
			public constructor();
		}
	}
}