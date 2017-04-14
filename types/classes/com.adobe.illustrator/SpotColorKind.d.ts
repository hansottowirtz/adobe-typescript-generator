/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class SpotColorKind extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Solid ink, expressed in four CMYK values. */
			public static readonly SPOTCMYK: SpotColorKind;
			/** Lab color. Only valid for spot colors. */
			public static readonly SPOTLAB: SpotColorKind;
			/** Solid color, expressed as three RGB values. */
			public static readonly SPOTRGB: SpotColorKind;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}