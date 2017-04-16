/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class SpotColorKind extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly SPOTCMYK: Adobe.Illustrator.SpotColorKind;
			public static readonly SPOTLAB: Adobe.Illustrator.SpotColorKind;
			public static readonly SPOTRGB: Adobe.Illustrator.SpotColorKind;
			/** Constructor */
			public constructor();
		}
	}
}