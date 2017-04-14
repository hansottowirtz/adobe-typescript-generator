/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class GradientsPreservePolicy extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Preserve the editability of gradients. */
			public static readonly KEEPGRADIENTSEDITABLE: GradientsPreservePolicy;
			/** Preserve the apperance of gradients by rasterizing it. */
			public static readonly RASTERIZEGRADIENTS: GradientsPreservePolicy;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}