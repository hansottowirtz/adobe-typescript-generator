/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class OutlineJoin extends Adobe.Csawlib.CSEnumBase {
			/** Beveled end join. */
			public static readonly BEVEL_END_JOIN: Adobe.Indesign.OutlineJoin;
			/** Alias for BEVEL_END_JOIN. Beveled end join. */
			public static readonly bevelEndJoin: Adobe.Indesign.OutlineJoin;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Miter end join. */
			public static readonly MITER_END_JOIN: Adobe.Indesign.OutlineJoin;
			/** Alias for MITER_END_JOIN. Miter end join. */
			public static readonly miterEndJoin: Adobe.Indesign.OutlineJoin;
			/** Rounded end join. */
			public static readonly ROUND_END_JOIN: Adobe.Indesign.OutlineJoin;
			/** Alias for ROUND_END_JOIN. Rounded end join. */
			public static readonly roundEndJoin: Adobe.Indesign.OutlineJoin;
			/** Constructor */
			public constructor();
		}
	}
}