/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BalanceLinesStyle extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Balances lines equally. */
			public static readonly FULLY_BALANCED: Adobe.Indesign.BalanceLinesStyle;
			/** Alias for FULLY_BALANCED. Balances lines equally. */
			public static readonly fullyBalanced: Adobe.Indesign.BalanceLinesStyle;
			/** Does not balance lines. */
			public static readonly NO_BALANCING: Adobe.Indesign.BalanceLinesStyle;
			/** Alias for NO_BALANCING. Does not balance lines. */
			public static readonly noBalancing: Adobe.Indesign.BalanceLinesStyle;
			/** Prefers longer last lines. */
			public static readonly PYRAMID_SHAPE: Adobe.Indesign.BalanceLinesStyle;
			/** Alias for PYRAMID_SHAPE. Prefers longer last lines. */
			public static readonly pyramidShape: Adobe.Indesign.BalanceLinesStyle;
			/** Prefers shorter last lines. */
			public static readonly VEE_SHAPE: Adobe.Indesign.BalanceLinesStyle;
			/** Alias for VEE_SHAPE. Prefers shorter last lines. */
			public static readonly veeShape: Adobe.Indesign.BalanceLinesStyle;
			/** Constructor */
			public constructor();
		}
	}
}