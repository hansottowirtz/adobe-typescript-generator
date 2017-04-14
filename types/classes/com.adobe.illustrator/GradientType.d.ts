/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class GradientType extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Linear gradient. */
			public static readonly LINEAR: GradientType;
			public static readonly RADIAL: GradientType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}