/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class KinsokuSet extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the hard or maximum kinsoku set, which includes all 
			 * Japanese characters that should not begin or end a line.
			 */
			public static readonly HARD_KINSOKU: Adobe.Incopy.KinsokuSet;
			/**
			 * Alias for HARD_KINSOKU. Uses the hard or maximum kinsoku 
			 * set, which includes all Japanese characters that should not 
			 * begin or end a line.
			 */
			public static readonly hardKinsoku: Adobe.Incopy.KinsokuSet;
			/** Uses the Korean kinsoku set. */
			public static readonly KOREAN_KINSOKU: Adobe.Incopy.KinsokuSet;
			/** Alias for KOREAN_KINSOKU. Uses the Korean kinsoku set. */
			public static readonly koreanKinsoku: Adobe.Incopy.KinsokuSet;
			/** Alias for NOTHING. Does not use a kinsoku set. */
			public static readonly nothing: Adobe.Incopy.KinsokuSet;
			/** Does not use a kinsoku set. */
			public static readonly NOTHING: Adobe.Incopy.KinsokuSet;
			/** Uses the simplified Chinese kinsoku set. */
			public static readonly SIMPLIFIED_CHINESE_KINSOKU: Adobe.Incopy.KinsokuSet;
			/**
			 * Alias for SIMPLIFIED_CHINESE_KINSOKU. Uses the simplified 
			 * Chinese kinsoku set.
			 */
			public static readonly simplifiedChineseKinsoku: Adobe.Incopy.KinsokuSet;
			/**
			 * Uses the soft or weak kinsoku set, which omits from the hard 
			 * kinsoku set long vowel symbols and small hiragana and 
			 * katakana characters.
			 */
			public static readonly SOFT_KINSOKU: Adobe.Incopy.KinsokuSet;
			/**
			 * Alias for SOFT_KINSOKU. Uses the soft or weak kinsoku set, 
			 * which omits from the hard kinsoku set long vowel symbols and 
			 * small hiragana and katakana characters.
			 */
			public static readonly softKinsoku: Adobe.Incopy.KinsokuSet;
			/** Uses the traditional Chinese kinsoku set. */
			public static readonly TRADITIONAL_CHINESE_KINSOKU: Adobe.Incopy.KinsokuSet;
			/**
			 * Alias for TRADITIONAL_CHINESE_KINSOKU. Uses the traditional 
			 * Chinese kinsoku set.
			 */
			public static readonly traditionalChineseKinsoku: Adobe.Incopy.KinsokuSet;
			/** Constructor */
			public constructor();
		}
	}
}