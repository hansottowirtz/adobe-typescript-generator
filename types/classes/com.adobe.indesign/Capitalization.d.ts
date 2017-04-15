/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Capitalization extends Adobe.Csawlib.CSEnumBase {
			/** Use all uppercase letters. */
			public static readonly ALL_CAPS: Adobe.Indesign.Capitalization;
			/** Alias for ALL_CAPS. Use all uppercase letters. */
			public static readonly allCaps: Adobe.Indesign.Capitalization;
			/** Use OpenType small caps. */
			public static readonly CAP_TO_SMALL_CAP: Adobe.Indesign.Capitalization;
			/** Alias for CAP_TO_SMALL_CAP. Use OpenType small caps. */
			public static readonly capToSmallCap: Adobe.Indesign.Capitalization;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NORMAL. Do not change the capitalization of the 
			 * text.
			 */
			public static readonly normal: Adobe.Indesign.Capitalization;
			/** Do not change the capitalization of the text. */
			public static readonly NORMAL: Adobe.Indesign.Capitalization;
			/** Use small caps for lowercase letters. */
			public static readonly SMALL_CAPS: Adobe.Indesign.Capitalization;
			/** Alias for SMALL_CAPS. Use small caps for lowercase letters. */
			public static readonly smallCaps: Adobe.Indesign.Capitalization;
			/** Constructor */
			public constructor();
		}
	}
}