/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class OpenTypeFeature extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Provides authentic small caps rather than scaled-down 
			 * versions of the font's regular caps.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly ALL_SMALL_CAPS_FEATURE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for ALL_SMALL_CAPS_FEATURE. Provides authentic small 
			 * caps rather than scaled-down versions of the font's regular 
			 * caps.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly allSmallCapsFeature: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Activates contextual ligatures and connecting alternates.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly CONTEXTUAL_ALTERNATES_FEATURE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for CONTEXTUAL_ALTERNATES_FEATURE. Activates 
			 * contextual ligatures and connecting alternates.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly contextualAlternatesFeature: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Applies the default figure style of the current font to 
			 * figure glyphs.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly DEFAULT_FIGURE_STYLE_FEATURE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for DEFAULT_FIGURE_STYLE_FEATURE. Applies the default 
			 * figure style of the current font to figure glyphs.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly defaultFigureStyleFeature: Adobe.Indesign.OpenTypeFeature;
			/**
			 * In a series of two numbers separated by a slash that form a 
			 * non-standard fraction, such as 4/13, reformats the second 
			 * number as a denominator.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly DENOMINATOR_FEATURE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for DENOMINATOR_FEATURE. In a series of two numbers 
			 * separated by a slash that form a non-standard fraction, such 
			 * as 4/13, reformats the second number as a denominator.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly denominatorFeature: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Allows the use of optional discretionary ligatures.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly DISCRETIONARY_LIGATURES_FEATURE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for DISCRETIONARY_LIGATURES_FEATURE. Allows the use of 
			 * optional discretionary ligatures.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly discretionaryLigaturesFeature: Adobe.Indesign.OpenTypeFeature;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Reformats numbers separated by a slash, such as 1/2, as 
			 * fractions. Note: In some fonts, the fractions feature 
			 * reformats only standard fractions. For information on 
			 * reformatting non-standard fractions such as 4/13, see 
			 * denominator feature and numerator feature.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly FRACTIONS_FEATURE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for FRACTIONS_FEATURE. Reformats numbers separated by 
			 * a slash, such as 1/2, as fractions. Note: In some fonts, the 
			 * fractions feature reformats only standard fractions. For 
			 * information on reformatting non-standard fractions such as 
			 * 4/13, see denominator feature and numerator feature.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly fractionsFeature: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Justification alternate
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly JUSTIFICATION_ALTERNATE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for JUSTIFICATION_ALTERNATE. Justification alternate
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly justificationAlternate: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for LOW. Low.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly low: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Low.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly LOW: Adobe.Indesign.OpenTypeFeature;
			/**
			 * In a series of two numbers separated by a slash that form a 
			 * non-standard fraction, such as 4/13, reformats the first 
			 * number as a numerator.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly NUMERATOR_FEATURE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for NUMERATOR_FEATURE. In a series of two numbers 
			 * separated by a slash that form a non-standard fraction, such 
			 * as 4/13, reformats the first number as a numerator.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly numeratorFeature: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Superscripts the alpha characters in ordinal numbers.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly ORDINAL_FEATURE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for ORDINAL_FEATURE. Superscripts the alpha characters 
			 * in ordinal numbers.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly ordinalFeature: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Overlap swash
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly OVERLAP_SWASH: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for OVERLAP_SWASH. Overlap swash
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly overlapSwash: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Gives full-height figures varying widths.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly PROPORTIONAL_LINING_FEATURE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Gives varying-height figures varying widths.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly PROPORTIONAL_OLDSTYLE_FEATURE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for PROPORTIONAL_LINING_FEATURE. Gives full-height 
			 * figures varying widths.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly proportionalLiningFeature: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for PROPORTIONAL_OLDSTYLE_FEATURE. Gives 
			 * varying-height figures varying widths.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly proportionalOldstyleFeature: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Stretched alternate
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly STRETCHED_ALTERNATE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for STRETCHED_ALTERNATE. Stretched alternate
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly stretchedAlternate: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Stylistic alternate
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly STYLISTIC_ALTERNATE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for STYLISTIC_ALTERNATE. Stylistic alternate
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly stylisticAlternate: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Sizes lowered glyphs correctly relative to the surrounding 
			 * characters.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly SUBSCRIPT_FEATURE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for SUBSCRIPT_FEATURE. Sizes lowered glyphs correctly 
			 * relative to the surrounding characters.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly subscriptFeature: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Sizes raised glyphs correctly relative to the surrounding 
			 * characters.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly SUPERSCRIPT_FEATURE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for SUPERSCRIPT_FEATURE. Sizes raised glyphs correctly 
			 * relative to the surrounding characters.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly superscriptFeature: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Provides regular and contextual swashes, which may include 
			 * alternate caps and end-of-word alternatives.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly SWASH_FEATURE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for SWASH_FEATURE. Provides regular and contextual 
			 * swashes, which may include alternate caps and end-of-word 
			 * alternatives.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly swashFeature: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Gives full-height figures fixed, equal width.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly TABULAR_LINING_FEATURE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Gives varying-height figures fixed, equal widths.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly TABULAR_OLDSTYLE_FEATURE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for TABULAR_LINING_FEATURE. Gives full-height figures 
			 * fixed, equal width.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly tabularLiningFeature: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for TABULAR_OLDSTYLE_FEATURE. Gives varying-height 
			 * figures fixed, equal widths.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly tabularOldstyleFeature: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Activates alternative characters used for uppercase titles.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly TITLING_FEATURE: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Alias for TITLING_FEATURE. Activates alternative characters 
			 * used for uppercase titles.
			 * @type {Adobe.Indesign.OpenTypeFeature}
			 * @readonly
			 */
			public static readonly titlingFeature: Adobe.Indesign.OpenTypeFeature;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}