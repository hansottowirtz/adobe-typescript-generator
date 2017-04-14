/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class SVGCSSPropertyLocation extends IllustratorEnumBase {
			/** Style attributes with entity reference. */
			public static readonly ENTITIES: SVGCSSPropertyLocation;
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly PRESENTATIONATTRIBUTES: SVGCSSPropertyLocation;
			public static readonly STYLEATTRIBUTES: SVGCSSPropertyLocation;
			public static readonly STYLEELEMENTS: SVGCSSPropertyLocation;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}