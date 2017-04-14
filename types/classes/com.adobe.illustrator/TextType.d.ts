/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class TextType extends IllustratorEnumBase {
			/** Text within an area. */
			public static readonly AREATEXT: TextType;
			public static readonly enumCache: CSEnumSharedCache;
			/** Text on a path. */
			public static readonly PATHTEXT: TextType;
			/** Text from a point. */
			public static readonly POINTTEXT: TextType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}