/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class OpenTypeFeature extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Provides authentic small caps rather than scaled-down 
			 * versions of the font's regular caps.
			 */
			public static readonly ALL_SMALL_CAPS_FEATURE: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Alias for ALL_SMALL_CAPS_FEATURE. Provides authentic small 
			 * caps rather than scaled-down versions of the font's regular 
			 * caps.
			 */
			public static readonly allSmallCapsFeature: Adobe.Incopy.OpenTypeFeature;
			/** Activates contextual ligatures and connecting alternates. */
			public static readonly CONTEXTUAL_ALTERNATES_FEATURE: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Alias for CONTEXTUAL_ALTERNATES_FEATURE. Activates 
			 * contextual ligatures and connecting alternates.
			 */
			public static readonly contextualAlternatesFeature: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Applies the default figure style of the current font to 
			 * figure glyphs.
			 */
			public static readonly DEFAULT_FIGURE_STYLE_FEATURE: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Alias for DEFAULT_FIGURE_STYLE_FEATURE. Applies the default 
			 * figure style of the current font to figure glyphs.
			 */
			public static readonly defaultFigureStyleFeature: Adobe.Incopy.OpenTypeFeature;
			/**
			 * In a series of two numbers separated by a slash that form a 
			 * non-standard fraction, such as 4/13, reformats the second 
			 * number as a denominator.
			 */
			public static readonly DENOMINATOR_FEATURE: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Alias for DENOMINATOR_FEATURE. In a series of two numbers 
			 * separated by a slash that form a non-standard fraction, such 
			 * as 4/13, reformats the second number as a denominator.
			 */
			public static readonly denominatorFeature: Adobe.Incopy.OpenTypeFeature;
			/** Allows the use of optional discretionary ligatures. */
			public static readonly DISCRETIONARY_LIGATURES_FEATURE: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Alias for DISCRETIONARY_LIGATURES_FEATURE. Allows the use of 
			 * optional discretionary ligatures.
			 */
			public static readonly discretionaryLigaturesFeature: Adobe.Incopy.OpenTypeFeature;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Reformats numbers separated by a slash, such as 1/2, as 
			 * fractions. Note: In some fonts, the fractions feature 
			 * reformats only standard fractions. For information on 
			 * reformatting non-standard fractions such as 4/13, see 
			 * denominator feature and numerator feature.
			 */
			public static readonly FRACTIONS_FEATURE: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Alias for FRACTIONS_FEATURE. Reformats numbers separated by 
			 * a slash, such as 1/2, as fractions. Note: In some fonts, the 
			 * fractions feature reformats only standard fractions. For 
			 * information on reformatting non-standard fractions such as 
			 * 4/13, see denominator feature and numerator feature.
			 */
			public static readonly fractionsFeature: Adobe.Incopy.OpenTypeFeature;
			/** Justification alternate */
			public static readonly JUSTIFICATION_ALTERNATE: Adobe.Incopy.OpenTypeFeature;
			/** Alias for JUSTIFICATION_ALTERNATE. Justification alternate */
			public static readonly justificationAlternate: Adobe.Incopy.OpenTypeFeature;
			/** Alias for LOW. Low. */
			public static readonly low: Adobe.Incopy.OpenTypeFeature;
			/** Low. */
			public static readonly LOW: Adobe.Incopy.OpenTypeFeature;
			/**
			 * In a series of two numbers separated by a slash that form a 
			 * non-standard fraction, such as 4/13, reformats the first 
			 * number as a numerator.
			 */
			public static readonly NUMERATOR_FEATURE: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Alias for NUMERATOR_FEATURE. In a series of two numbers 
			 * separated by a slash that form a non-standard fraction, such 
			 * as 4/13, reformats the first number as a numerator.
			 */
			public static readonly numeratorFeature: Adobe.Incopy.OpenTypeFeature;
			/** Superscripts the alpha characters in ordinal numbers. */
			public static readonly ORDINAL_FEATURE: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Alias for ORDINAL_FEATURE. Superscripts the alpha characters 
			 * in ordinal numbers.
			 */
			public static readonly ordinalFeature: Adobe.Incopy.OpenTypeFeature;
			/** Overlap swash */
			public static readonly OVERLAP_SWASH: Adobe.Incopy.OpenTypeFeature;
			/** Alias for OVERLAP_SWASH. Overlap swash */
			public static readonly overlapSwash: Adobe.Incopy.OpenTypeFeature;
			/** Gives full-height figures varying widths. */
			public static readonly PROPORTIONAL_LINING_FEATURE: Adobe.Incopy.OpenTypeFeature;
			/** Gives varying-height figures varying widths. */
			public static readonly PROPORTIONAL_OLDSTYLE_FEATURE: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Alias for PROPORTIONAL_LINING_FEATURE. Gives full-height 
			 * figures varying widths.
			 */
			public static readonly proportionalLiningFeature: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Alias for PROPORTIONAL_OLDSTYLE_FEATURE. Gives 
			 * varying-height figures varying widths.
			 */
			public static readonly proportionalOldstyleFeature: Adobe.Incopy.OpenTypeFeature;
			/** Stretched alternate */
			public static readonly STRETCHED_ALTERNATE: Adobe.Incopy.OpenTypeFeature;
			/** Alias for STRETCHED_ALTERNATE. Stretched alternate */
			public static readonly stretchedAlternate: Adobe.Incopy.OpenTypeFeature;
			/** Stylistic alternate */
			public static readonly STYLISTIC_ALTERNATE: Adobe.Incopy.OpenTypeFeature;
			/** Alias for STYLISTIC_ALTERNATE. Stylistic alternate */
			public static readonly stylisticAlternate: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Sizes lowered glyphs correctly relative to the surrounding 
			 * characters.
			 */
			public static readonly SUBSCRIPT_FEATURE: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Alias for SUBSCRIPT_FEATURE. Sizes lowered glyphs correctly 
			 * relative to the surrounding characters.
			 */
			public static readonly subscriptFeature: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Sizes raised glyphs correctly relative to the surrounding 
			 * characters.
			 */
			public static readonly SUPERSCRIPT_FEATURE: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Alias for SUPERSCRIPT_FEATURE. Sizes raised glyphs correctly 
			 * relative to the surrounding characters.
			 */
			public static readonly superscriptFeature: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Provides regular and contextual swashes, which may include 
			 * alternate caps and end-of-word alternatives.
			 */
			public static readonly SWASH_FEATURE: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Alias for SWASH_FEATURE. Provides regular and contextual 
			 * swashes, which may include alternate caps and end-of-word 
			 * alternatives.
			 */
			public static readonly swashFeature: Adobe.Incopy.OpenTypeFeature;
			/** Gives full-height figures fixed, equal width. */
			public static readonly TABULAR_LINING_FEATURE: Adobe.Incopy.OpenTypeFeature;
			/** Gives varying-height figures fixed, equal widths. */
			public static readonly TABULAR_OLDSTYLE_FEATURE: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Alias for TABULAR_LINING_FEATURE. Gives full-height figures 
			 * fixed, equal width.
			 */
			public static readonly tabularLiningFeature: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Alias for TABULAR_OLDSTYLE_FEATURE. Gives varying-height 
			 * figures fixed, equal widths.
			 */
			public static readonly tabularOldstyleFeature: Adobe.Incopy.OpenTypeFeature;
			/** Activates alternative characters used for uppercase titles. */
			public static readonly TITLING_FEATURE: Adobe.Incopy.OpenTypeFeature;
			/**
			 * Alias for TITLING_FEATURE. Activates alternative characters 
			 * used for uppercase titles.
			 */
			public static readonly titlingFeature: Adobe.Incopy.OpenTypeFeature;
			/** Constructor */
			public constructor();
		}
	}
}