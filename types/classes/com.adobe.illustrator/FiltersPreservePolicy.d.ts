/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class FiltersPreservePolicy extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Preserve the appearance of filters by expanding it. */
			public static readonly EXPANDFILTERS: Adobe.Illustrator.FiltersPreservePolicy;
			/** Preserve the editability of filters. */
			public static readonly KEEPFILTERSEDITABLE: Adobe.Illustrator.FiltersPreservePolicy;
			/** Preserve the appearance of filters by rasterizing it. */
			public static readonly RASTERIZEFILTERS: Adobe.Illustrator.FiltersPreservePolicy;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}