/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class StrokeJoin extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Beveled joints. */
			public static readonly BEVELENDJOIN: Adobe.Illustrator.StrokeJoin;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Mitered joints. */
			public static readonly MITERENDJOIN: Adobe.Illustrator.StrokeJoin;
			/** Rounded joints. */
			public static readonly ROUNDENDJOIN: Adobe.Illustrator.StrokeJoin;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}