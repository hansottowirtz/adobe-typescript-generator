/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class OutlineJoin extends Adobe.Csawlib.CSEnumBase {
			/** Beveled end join. */
			public static readonly BEVEL_END_JOIN: Adobe.Incopy.OutlineJoin;
			/** Alias for BEVEL_END_JOIN. Beveled end join. */
			public static readonly bevelEndJoin: Adobe.Incopy.OutlineJoin;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Miter end join. */
			public static readonly MITER_END_JOIN: Adobe.Incopy.OutlineJoin;
			/** Alias for MITER_END_JOIN. Miter end join. */
			public static readonly miterEndJoin: Adobe.Incopy.OutlineJoin;
			/** Rounded end join. */
			public static readonly ROUND_END_JOIN: Adobe.Incopy.OutlineJoin;
			/** Alias for ROUND_END_JOIN. Rounded end join. */
			public static readonly roundEndJoin: Adobe.Incopy.OutlineJoin;
			/** Constructor */
			public constructor();
		}
	}
}