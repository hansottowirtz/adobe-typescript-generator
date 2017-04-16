/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ColorSpace extends Adobe.Csawlib.CSEnumBase {
			/** Alias for CMYK. CMYK. */
			public static readonly cmyk: Adobe.Incopy.ColorSpace;
			/** CMYK. */
			public static readonly CMYK: Adobe.Incopy.ColorSpace;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for LAB. LAB. */
			public static readonly lab: Adobe.Incopy.ColorSpace;
			/** LAB. */
			public static readonly LAB: Adobe.Incopy.ColorSpace;
			/** Alias for MIXEDINK. Mixed ink. */
			public static readonly mixedink: Adobe.Incopy.ColorSpace;
			/** Mixed ink. */
			public static readonly MIXEDINK: Adobe.Incopy.ColorSpace;
			/** Alias for RGB. RGB. */
			public static readonly rgb: Adobe.Incopy.ColorSpace;
			/** RGB. */
			public static readonly RGB: Adobe.Incopy.ColorSpace;
			/** Constructor */
			public constructor();
		}
	}
}