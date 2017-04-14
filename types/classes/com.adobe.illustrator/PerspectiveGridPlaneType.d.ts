/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PerspectiveGridPlaneType extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Perspective Grid Floor Plane Type. */
			public static readonly FLOORPLANE: PerspectiveGridPlaneType;
			/** Perspective Grid Left Plane Type. */
			public static readonly LEFTPLANE: PerspectiveGridPlaneType;
			/** Invalid Perspective Grid Plane Type. */
			public static readonly NOPLANE: PerspectiveGridPlaneType;
			/** Perspective Grid Right Plane Type. */
			public static readonly RIGHTPLANE: PerspectiveGridPlaneType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}