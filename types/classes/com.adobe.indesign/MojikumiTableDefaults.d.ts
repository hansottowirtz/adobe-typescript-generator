/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MojikumiTableDefaults extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses full-width spacing for all characters.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly LINE_END_ALL_ONE_EM_ENUM: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Uses half-width spacing for all characters.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly LINE_END_ALL_ONE_HALF_EM_ENUM: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Uses full-width spacing for punctuation.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly LINE_END_PERIOD_ONE_EM_ENUM: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Uses line end uke no float.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly LINE_END_UKE_NO_FLOAT_ENUM: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Alias for LINE_END_ALL_ONE_EM_ENUM. Uses full-width spacing 
			 * for all characters.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly lineEndAllOneEmEnum: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Alias for LINE_END_ALL_ONE_HALF_EM_ENUM. Uses half-width 
			 * spacing for all characters.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly lineEndAllOneHalfEmEnum: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Alias for LINE_END_PERIOD_ONE_EM_ENUM. Uses full-width 
			 * spacing for punctuation.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly lineEndPeriodOneEmEnum: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Alias for LINE_END_UKE_NO_FLOAT_ENUM. Uses line end uke no 
			 * float.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly lineEndUkeNoFloatEnum: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Alias for NOTHING. Turns off mojikumi.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly nothing: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Turns off mojikumi.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly NOTHING: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Indents lines one full space and uses no float for all 
			 * characters.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly ONE_EM_INDENT_LINE_END_ALL_NO_FLOAT_ENUM: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Indents lines one full space and uses full-width spacing for 
			 * all characters.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly ONE_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Indents lines one full space and uses half-width spacing for 
			 * all characters.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly ONE_EM_INDENT_LINE_END_ALL_ONE_HALF_EM_ENUM: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Indents lines one full space and uses full-width spacing for 
			 * punctuation and for the last character in the line.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly ONE_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Indents lines one full space and uses line end uke no float.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly ONE_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Indents lines one space and uses line end uke one half 
			 * space.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly ONE_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Uses full-witdh spacing for all characters except the last 
			 * character in the line, which uses either full- or half-width 
			 * spacing.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly ONE_OR_ONE_HALF_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Indents lines one or one-half space and uses full-width 
			 * spacing for punctuation and for the last character in the 
			 * line.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly ONE_OR_ONE_HALF_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Indents lines one half space or one full space and uses line 
			 * end uke no float.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Indents lines one full or half space and uses line end uke 
			 * one half space.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Alias for ONE_EM_INDENT_LINE_END_ALL_NO_FLOAT_ENUM. Indents 
			 * lines one full space and uses no float for all characters.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly oneEmIndentLineEndAllNoFloatEnum: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Alias for ONE_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM. Indents 
			 * lines one full space and uses full-width spacing for all 
			 * characters.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly oneEmIndentLineEndAllOneEmEnum: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Alias for ONE_EM_INDENT_LINE_END_ALL_ONE_HALF_EM_ENUM. 
			 * Indents lines one full space and uses half-width spacing for 
			 * all characters.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly oneEmIndentLineEndAllOneHalfEmEnum: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Alias for ONE_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM. Indents 
			 * lines one full space and uses full-width spacing for 
			 * punctuation and for the last character in the line.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly oneEmIndentLineEndPeriodOneEmEnum: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Alias for ONE_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM. Indents 
			 * lines one full space and uses line end uke no float.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly oneEmIndentLineEndUkeNoFloatEnum: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Alias for ONE_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM. 
			 * Indents lines one space and uses line end uke one half 
			 * space.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly oneEmIndentLineEndUkeOneHalfEmEnum: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Alias for 
			 * ONE_OR_ONE_HALF_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM. Uses 
			 * full-witdh spacing for all characters except the last 
			 * character in the line, which uses either full- or half-width 
			 * spacing.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly oneOrOneHalfEmIndentLineEndAllOneEmEnum: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Alias for 
			 * ONE_OR_ONE_HALF_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM. 
			 * Indents lines one or one-half space and uses full-width 
			 * spacing for punctuation and for the last character in the 
			 * line.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly oneOrOneHalfEmIndentLineEndPeriodOneEmEnum: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Alias for 
			 * ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM. 
			 * Indents lines one half space or one full space and uses line 
			 * end uke no float.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly oneOrOneHalfEmIndentLineEndUkeNoFloatEnum: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Alias for 
			 * ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM. 
			 * Indents lines one full or half space and uses line end uke 
			 * one half space.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly oneOrOneHalfEmIndentLineEndUkeOneHalfEmEnum: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Uses mojikumi tsume and aki optimized for Simplified Chinese 
			 * punctuation glyphs.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly SIMP_CHINESE_DEFAULT: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Alias for SIMP_CHINESE_DEFAULT. Uses mojikumi tsume and aki 
			 * optimized for Simplified Chinese punctuation glyphs.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly simpChineseDefault: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Uses mojikumi tsume and aki optimized for Traditional 
			 * Chinese centered punctuation glyphs.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly TRAD_CHINESE_DEFAULT: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Alias for TRAD_CHINESE_DEFAULT. Uses mojikumi tsume and aki 
			 * optimized for Traditional Chinese centered punctuation 
			 * glyphs.
			 * @type {Adobe.Indesign.MojikumiTableDefaults}
			 * @readonly
			 */
			public static readonly tradChineseDefault: Adobe.Indesign.MojikumiTableDefaults;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}