/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Gradients preserve policy used by FXG file format. */
		class GradientsPreservePolicy extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Preserve the editability of gradients. */
			public static readonly KEEPGRADIENTSEDITABLE: Adobe.Illustrator.GradientsPreservePolicy;
			/** Preserve the apperance of gradients by rasterizing it. */
			public static readonly RASTERIZEGRADIENTS: Adobe.Illustrator.GradientsPreservePolicy;
			/** Constructor */
			public constructor();
		}
	}
}