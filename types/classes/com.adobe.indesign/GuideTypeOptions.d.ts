/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GuideTypeOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for LIQUID. Liquid guide. */
			public static readonly liquid: Adobe.Indesign.GuideTypeOptions;
			/** Liquid guide. */
			public static readonly LIQUID: Adobe.Indesign.GuideTypeOptions;
			/** Alias for RULER. Ruler guide (default). */
			public static readonly ruler: Adobe.Indesign.GuideTypeOptions;
			/** Ruler guide (default). */
			public static readonly RULER: Adobe.Indesign.GuideTypeOptions;
			/** Constructor */
			public constructor();
		}
	}
}