/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class KinsokuSet extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the hard or maximum kinsoku set, which includes all 
			 * Japanese characters that should not begin or end a line.
			 * @type {Adobe.Indesign.KinsokuSet}
			 * @readonly
			 */
			public static readonly HARD_KINSOKU: Adobe.Indesign.KinsokuSet;
			/**
			 * Alias for HARD_KINSOKU. Uses the hard or maximum kinsoku 
			 * set, which includes all Japanese characters that should not 
			 * begin or end a line.
			 * @type {Adobe.Indesign.KinsokuSet}
			 * @readonly
			 */
			public static readonly hardKinsoku: Adobe.Indesign.KinsokuSet;
			/**
			 * Uses the Korean kinsoku set.
			 * @type {Adobe.Indesign.KinsokuSet}
			 * @readonly
			 */
			public static readonly KOREAN_KINSOKU: Adobe.Indesign.KinsokuSet;
			/**
			 * Alias for KOREAN_KINSOKU. Uses the Korean kinsoku set.
			 * @type {Adobe.Indesign.KinsokuSet}
			 * @readonly
			 */
			public static readonly koreanKinsoku: Adobe.Indesign.KinsokuSet;
			/**
			 * Alias for NOTHING. Does not use a kinsoku set.
			 * @type {Adobe.Indesign.KinsokuSet}
			 * @readonly
			 */
			public static readonly nothing: Adobe.Indesign.KinsokuSet;
			/**
			 * Does not use a kinsoku set.
			 * @type {Adobe.Indesign.KinsokuSet}
			 * @readonly
			 */
			public static readonly NOTHING: Adobe.Indesign.KinsokuSet;
			/**
			 * Uses the simplified Chinese kinsoku set.
			 * @type {Adobe.Indesign.KinsokuSet}
			 * @readonly
			 */
			public static readonly SIMPLIFIED_CHINESE_KINSOKU: Adobe.Indesign.KinsokuSet;
			/**
			 * Alias for SIMPLIFIED_CHINESE_KINSOKU. Uses the simplified 
			 * Chinese kinsoku set.
			 * @type {Adobe.Indesign.KinsokuSet}
			 * @readonly
			 */
			public static readonly simplifiedChineseKinsoku: Adobe.Indesign.KinsokuSet;
			/**
			 * Uses the soft or weak kinsoku set, which omits from the hard 
			 * kinsoku set long vowel symbols and small hiragana and 
			 * katakana characters.
			 * @type {Adobe.Indesign.KinsokuSet}
			 * @readonly
			 */
			public static readonly SOFT_KINSOKU: Adobe.Indesign.KinsokuSet;
			/**
			 * Alias for SOFT_KINSOKU. Uses the soft or weak kinsoku set, 
			 * which omits from the hard kinsoku set long vowel symbols and 
			 * small hiragana and katakana characters.
			 * @type {Adobe.Indesign.KinsokuSet}
			 * @readonly
			 */
			public static readonly softKinsoku: Adobe.Indesign.KinsokuSet;
			/**
			 * Uses the traditional Chinese kinsoku set.
			 * @type {Adobe.Indesign.KinsokuSet}
			 * @readonly
			 */
			public static readonly TRADITIONAL_CHINESE_KINSOKU: Adobe.Indesign.KinsokuSet;
			/**
			 * Alias for TRADITIONAL_CHINESE_KINSOKU. Uses the traditional 
			 * Chinese kinsoku set.
			 * @type {Adobe.Indesign.KinsokuSet}
			 * @readonly
			 */
			public static readonly traditionalChineseKinsoku: Adobe.Indesign.KinsokuSet;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}