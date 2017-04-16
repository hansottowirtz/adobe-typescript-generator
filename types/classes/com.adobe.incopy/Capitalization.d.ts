/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Capitalization extends Adobe.Csawlib.CSEnumBase {
			/** Use all uppercase letters. */
			public static readonly ALL_CAPS: Adobe.Incopy.Capitalization;
			/** Alias for ALL_CAPS. Use all uppercase letters. */
			public static readonly allCaps: Adobe.Incopy.Capitalization;
			/** Use OpenType small caps. */
			public static readonly CAP_TO_SMALL_CAP: Adobe.Incopy.Capitalization;
			/** Alias for CAP_TO_SMALL_CAP. Use OpenType small caps. */
			public static readonly capToSmallCap: Adobe.Incopy.Capitalization;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NORMAL. Do not change the capitalization of the 
			 * text.
			 */
			public static readonly normal: Adobe.Incopy.Capitalization;
			/** Do not change the capitalization of the text. */
			public static readonly NORMAL: Adobe.Incopy.Capitalization;
			/** Use small caps for lowercase letters. */
			public static readonly SMALL_CAPS: Adobe.Incopy.Capitalization;
			/** Alias for SMALL_CAPS. Use small caps for lowercase letters. */
			public static readonly smallCaps: Adobe.Incopy.Capitalization;
			/** Constructor */
			public constructor();
		}
	}
}