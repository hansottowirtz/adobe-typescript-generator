/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PointType extends IllustratorEnumBase {
			/** Corner point. */
			public static readonly CORNER: PointType;
			public static readonly enumCache: CSEnumSharedCache;
			/** Smooth path point. */
			public static readonly SMOOTH: PointType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}