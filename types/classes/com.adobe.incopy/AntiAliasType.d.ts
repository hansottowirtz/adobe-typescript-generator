/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AntiAliasType extends Adobe.Csawlib.CSEnumBase {
			/** Color anti-aliasing. */
			public static readonly COLOR_ANTIALIASING: Adobe.Incopy.AntiAliasType;
			/** Alias for COLOR_ANTIALIASING. Color anti-aliasing. */
			public static readonly colorAntialiasing: Adobe.Incopy.AntiAliasType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Gray anti-aliasing. */
			public static readonly GRAY_ANTIALIASING: Adobe.Incopy.AntiAliasType;
			/** Alias for GRAY_ANTIALIASING. Gray anti-aliasing. */
			public static readonly grayAntialiasing: Adobe.Incopy.AntiAliasType;
			/** Thicker anti-aliasing. */
			public static readonly THICKER_ANTIALIASING: Adobe.Incopy.AntiAliasType;
			/** Alias for THICKER_ANTIALIASING. Thicker anti-aliasing. */
			public static readonly thickerAntialiasing: Adobe.Incopy.AntiAliasType;
			/** Constructor */
			public constructor();
		}
	}
}