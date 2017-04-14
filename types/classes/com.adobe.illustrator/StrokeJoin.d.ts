/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class StrokeJoin extends IllustratorEnumBase {
			/** Beveled joints. */
			public static readonly BEVELENDJOIN: StrokeJoin;
			public static readonly enumCache: CSEnumSharedCache;
			/** Mitered joints. */
			public static readonly MITERENDJOIN: StrokeJoin;
			/** Rounded joints. */
			public static readonly ROUNDENDJOIN: StrokeJoin;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}