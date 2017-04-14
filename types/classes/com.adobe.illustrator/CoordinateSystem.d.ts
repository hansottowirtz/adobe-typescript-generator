/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class CoordinateSystem extends IllustratorEnumBase {
			/** Artboard coordinate system. */
			public static readonly ARTBOARDCOORDINATESYSTEM: CoordinateSystem;
			/** Document coordinate system. */
			public static readonly DOCUMENTCOORDINATESYSTEM: CoordinateSystem;
			public static readonly enumCache: CSEnumSharedCache;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}