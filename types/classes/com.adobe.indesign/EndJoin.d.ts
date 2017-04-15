/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class EndJoin extends Adobe.Csawlib.CSEnumBase {
			/** Beveled end join. */
			public static readonly BEVEL_END_JOIN: Adobe.Indesign.EndJoin;
			/** Alias for BEVEL_END_JOIN. Beveled end join. */
			public static readonly bevelEndJoin: Adobe.Indesign.EndJoin;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Miter end join. */
			public static readonly MITER_END_JOIN: Adobe.Indesign.EndJoin;
			/** Alias for MITER_END_JOIN. Miter end join. */
			public static readonly miterEndJoin: Adobe.Indesign.EndJoin;
			/** Rounded end join. */
			public static readonly ROUND_END_JOIN: Adobe.Indesign.EndJoin;
			/** Alias for ROUND_END_JOIN. Rounded end join. */
			public static readonly roundEndJoin: Adobe.Indesign.EndJoin;
			/** Constructor */
			public constructor();
		}
	}
}