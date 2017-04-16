/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class FiltersPreservePolicy extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly EXPANDFILTERS: Adobe.Illustrator.FiltersPreservePolicy;
			public static readonly KEEPFILTERSEDITABLE: Adobe.Illustrator.FiltersPreservePolicy;
			public static readonly RASTERIZEFILTERS: Adobe.Illustrator.FiltersPreservePolicy;
			/** Constructor */
			public constructor();
		}
	}
}