/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Filters preserve policy used by FXG file format. */
		class FiltersPreservePolicy extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Preserve the appearance of filters by expanding it. */
			public static readonly EXPANDFILTERS: Adobe.Illustrator.FiltersPreservePolicy;
			/** Preserve the editability of filters. */
			public static readonly KEEPFILTERSEDITABLE: Adobe.Illustrator.FiltersPreservePolicy;
			/** Preserve the appearance of filters by rasterizing it. */
			public static readonly RASTERIZEFILTERS: Adobe.Illustrator.FiltersPreservePolicy;
			/** Constructor */
			public constructor();
		}
	}
}