/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class FiltersPreservePolicy extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Preserve the appearance of filters by expanding it. */
			public static readonly EXPANDFILTERS: FiltersPreservePolicy;
			/** Preserve the editability of filters. */
			public static readonly KEEPFILTERSEDITABLE: FiltersPreservePolicy;
			/** Preserve the appearance of filters by rasterizing it. */
			public static readonly RASTERIZEFILTERS: FiltersPreservePolicy;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}