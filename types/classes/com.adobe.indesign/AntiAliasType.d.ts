/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AntiAliasType extends Adobe.Csawlib.CSEnumBase {
			/** Color anti-aliasing. */
			public static readonly COLOR_ANTIALIASING: Adobe.Indesign.AntiAliasType;
			/** Alias for COLOR_ANTIALIASING. Color anti-aliasing. */
			public static readonly colorAntialiasing: Adobe.Indesign.AntiAliasType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Gray anti-aliasing. */
			public static readonly GRAY_ANTIALIASING: Adobe.Indesign.AntiAliasType;
			/** Alias for GRAY_ANTIALIASING. Gray anti-aliasing. */
			public static readonly grayAntialiasing: Adobe.Indesign.AntiAliasType;
			/** Thicker anti-aliasing. */
			public static readonly THICKER_ANTIALIASING: Adobe.Indesign.AntiAliasType;
			/** Alias for THICKER_ANTIALIASING. Thicker anti-aliasing. */
			public static readonly thickerAntialiasing: Adobe.Indesign.AntiAliasType;
			/** Constructor */
			public constructor();
		}
	}
}