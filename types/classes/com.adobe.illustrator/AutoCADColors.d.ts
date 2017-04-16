/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class AutoCADColors extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly Max16Colors: Adobe.Illustrator.AutoCADColors;
			public static readonly Max256Colors: Adobe.Illustrator.AutoCADColors;
			public static readonly Max8Colors: Adobe.Illustrator.AutoCADColors;
			public static readonly TrueColors: Adobe.Illustrator.AutoCADColors;
			/** Constructor */
			public constructor();
		}
	}
}