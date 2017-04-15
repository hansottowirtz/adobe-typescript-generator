/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class BalanceLinesStyle extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Balances lines equally. */
			public static readonly FULLY_BALANCED: Adobe.Incopy.BalanceLinesStyle;
			/** Alias for FULLY_BALANCED. Balances lines equally. */
			public static readonly fullyBalanced: Adobe.Incopy.BalanceLinesStyle;
			/** Does not balance lines. */
			public static readonly NO_BALANCING: Adobe.Incopy.BalanceLinesStyle;
			/** Alias for NO_BALANCING. Does not balance lines. */
			public static readonly noBalancing: Adobe.Incopy.BalanceLinesStyle;
			/** Prefers longer last lines. */
			public static readonly PYRAMID_SHAPE: Adobe.Incopy.BalanceLinesStyle;
			/** Alias for PYRAMID_SHAPE. Prefers longer last lines. */
			public static readonly pyramidShape: Adobe.Incopy.BalanceLinesStyle;
			/** Prefers shorter last lines. */
			public static readonly VEE_SHAPE: Adobe.Incopy.BalanceLinesStyle;
			/** Alias for VEE_SHAPE. Prefers shorter last lines. */
			public static readonly veeShape: Adobe.Incopy.BalanceLinesStyle;
			/** Constructor */
			public constructor();
		}
	}
}