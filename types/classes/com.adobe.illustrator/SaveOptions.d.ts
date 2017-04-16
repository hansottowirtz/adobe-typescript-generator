/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class SaveOptions extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly DONOTSAVECHANGES: Adobe.Illustrator.SaveOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly PROMPTTOSAVECHANGES: Adobe.Illustrator.SaveOptions;
			public static readonly SAVECHANGES: Adobe.Illustrator.SaveOptions;
			/** Constructor */
			public constructor();
		}
	}
}