/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ZOrderMethod extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly BRINGFORWARD: Adobe.Illustrator.ZOrderMethod;
			public static readonly BRINGTOFRONT: Adobe.Illustrator.ZOrderMethod;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly SENDBACKWARD: Adobe.Illustrator.ZOrderMethod;
			public static readonly SENDTOBACK: Adobe.Illustrator.ZOrderMethod;
			/** Constructor */
			public constructor();
		}
	}
}