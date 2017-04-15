/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BlendMode extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for COLOR. Creates a color with the luminance of the 
			 * base color and the hue and saturation of the blend color. 
			 * Note: Preserves gray levels and is useful for coloring 
			 * monochrome images or tinting color images. Creates the 
			 * inverse effect of the luminosity blend mode.
			 */
			public static readonly color: Adobe.Indesign.BlendMode;
			/**
			 * Creates a color with the luminance of the base color and the 
			 * hue and saturation of the blend color. Note: Preserves gray 
			 * levels and is useful for coloring monochrome images or 
			 * tinting color images. Creates the inverse effect of the 
			 * luminosity blend mode.
			 */
			public static readonly COLOR: Adobe.Indesign.BlendMode;
			/**
			 * Darkens the base color to reflect the blend color. Note: 
			 * Blending with white produces no change.
			 */
			public static readonly COLOR_BURN: Adobe.Indesign.BlendMode;
			/**
			 * Brightens the base color to reflect the blend color. Note: 
			 * Blending with pure black produces no change.
			 */
			public static readonly COLOR_DODGE: Adobe.Indesign.BlendMode;
			/**
			 * Alias for COLOR_BURN. Darkens the base color to reflect the 
			 * blend color. Note: Blending with white produces no change.
			 */
			public static readonly colorBurn: Adobe.Indesign.BlendMode;
			/**
			 * Alias for COLOR_DODGE. Brightens the base color to reflect 
			 * the blend color. Note: Blending with pure black produces no 
			 * change.
			 */
			public static readonly colorDodge: Adobe.Indesign.BlendMode;
			/**
			 * Alias for DARKEN. Selects the darker of the base or blend 
			 * colors as the resulting color; replaces areas lighter than 
			 * the blend color but does not change areas darker than the 
			 * blend color.
			 */
			public static readonly darken: Adobe.Indesign.BlendMode;
			/**
			 * Selects the darker of the base or blend colors as the 
			 * resulting color; replaces areas lighter than the blend color 
			 * but does not change areas darker than the blend color.
			 */
			public static readonly DARKEN: Adobe.Indesign.BlendMode;
			/**
			 * Alias for DIFFERENCE. Subtracts either the blend color from 
			 * the base color or vice versa, depending on which has the 
			 * greater brightness value. Note: Blending with white inverts 
			 * the base color values; blending with black produces no 
			 * change.
			 */
			public static readonly difference: Adobe.Indesign.BlendMode;
			/**
			 * Subtracts either the blend color from the base color or vice 
			 * versa, depending on which has the greater brightness value. 
			 * Note: Blending with white inverts the base color values; 
			 * blending with black produces no change.
			 */
			public static readonly DIFFERENCE: Adobe.Indesign.BlendMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for EXCLUSION. Creates an effect similar to--but lower 
			 * in contrast than--the difference blend mode. Note: Blending 
			 * with white inverts the base color values; blending with 
			 * black produces no change
			 */
			public static readonly exclusion: Adobe.Indesign.BlendMode;
			/**
			 * Creates an effect similar to--but lower in contrast 
			 * than--the difference blend mode. Note: Blending with white 
			 * inverts the base color values; blending with black produces 
			 * no change
			 */
			public static readonly EXCLUSION: Adobe.Indesign.BlendMode;
			/**
			 * For blend colors lighter than 50% gray, lightens the artwork 
			 * as if it were screened; for blend colors darker than 50% 
			 * gray, darkens the artwork as if it were multiplied. Note: 
			 * Painting with pure black or white results in pure black or 
			 * white.
			 */
			public static readonly HARD_LIGHT: Adobe.Indesign.BlendMode;
			/**
			 * Alias for HARD_LIGHT. For blend colors lighter than 50% 
			 * gray, lightens the artwork as if it were screened; for blend 
			 * colors darker than 50% gray, darkens the artwork as if it 
			 * were multiplied. Note: Painting with pure black or white 
			 * results in pure black or white.
			 */
			public static readonly hardLight: Adobe.Indesign.BlendMode;
			/**
			 * Alias for HUE. Creates a color with the luminance and 
			 * saturation of the base color and the hue of the blend color.
			 */
			public static readonly hue: Adobe.Indesign.BlendMode;
			/**
			 * Creates a color with the luminance and saturation of the 
			 * base color and the hue of the blend color.
			 */
			public static readonly HUE: Adobe.Indesign.BlendMode;
			/**
			 * Alias for LIGHTEN. Selects the lighter of the base or blend 
			 * colors as the resulting color; replaces areas darker than 
			 * the blend color but does not change areas lighter than the 
			 * blend color
			 */
			public static readonly lighten: Adobe.Indesign.BlendMode;
			/**
			 * Selects the lighter of the base or blend colors as the 
			 * resulting color; replaces areas darker than the blend color 
			 * but does not change areas lighter than the blend color
			 */
			public static readonly LIGHTEN: Adobe.Indesign.BlendMode;
			/**
			 * Alias for LUMINOSITY. Creates a color with the hue and 
			 * saturation of the base color and the luminance of the blend 
			 * color. Note: Creates the inverse effect of the color blend 
			 * mode.
			 */
			public static readonly luminosity: Adobe.Indesign.BlendMode;
			/**
			 * Creates a color with the hue and saturation of the base 
			 * color and the luminance of the blend color. Note: Creates 
			 * the inverse effect of the color blend mode.
			 */
			public static readonly LUMINOSITY: Adobe.Indesign.BlendMode;
			/**
			 * Alias for MULTIPLY. Multiplies the base color by the blend 
			 * color, resulting in a darker color. Note: Multiplying with 
			 * black produces black; multiplying with white leaves the 
			 * color unchanged.
			 */
			public static readonly multiply: Adobe.Indesign.BlendMode;
			/**
			 * Multiplies the base color by the blend color, resulting in a 
			 * darker color. Note: Multiplying with black produces black; 
			 * multiplying with white leaves the color unchanged.
			 */
			public static readonly MULTIPLY: Adobe.Indesign.BlendMode;
			/**
			 * Alias for NORMAL. Colors the object with the blend color, 
			 * without interaction with the base color.
			 */
			public static readonly normal: Adobe.Indesign.BlendMode;
			/**
			 * Colors the object with the blend color, without interaction 
			 * with the base color.
			 */
			public static readonly NORMAL: Adobe.Indesign.BlendMode;
			/**
			 * Alias for OVERLAY. Multiplies or screens the colors, 
			 * depending on the base color; patterns or colors overlay the 
			 * existing artwork, preserving base color highlights and 
			 * shadows while mixing in the blend color to reflect the 
			 * lightness or darkness of the original color.
			 */
			public static readonly overlay: Adobe.Indesign.BlendMode;
			/**
			 * Multiplies or screens the colors, depending on the base 
			 * color; patterns or colors overlay the existing artwork, 
			 * preserving base color highlights and shadows while mixing in 
			 * the blend color to reflect the lightness or darkness of the 
			 * original color.
			 */
			public static readonly OVERLAY: Adobe.Indesign.BlendMode;
			/**
			 * Alias for SATURATION. Creates a color with the luminance and 
			 * hue of the base color and the saturation of the blend color. 
			 * Note: Does not change areas with no saturation (0% gray).
			 */
			public static readonly saturation: Adobe.Indesign.BlendMode;
			/**
			 * Creates a color with the luminance and hue of the base color 
			 * and the saturation of the blend color. Note: Does not change 
			 * areas with no saturation (0% gray).
			 */
			public static readonly SATURATION: Adobe.Indesign.BlendMode;
			/**
			 * Alias for SCREEN. Multiplies the inverse of the blend and 
			 * base colors, resulting in a lighter color. Note: Screening 
			 * with white produces white; screening with black leaves the 
			 * color unchanged.
			 */
			public static readonly screen: Adobe.Indesign.BlendMode;
			/**
			 * Multiplies the inverse of the blend and base colors, 
			 * resulting in a lighter color. Note: Screening with white 
			 * produces white; screening with black leaves the color 
			 * unchanged.
			 */
			public static readonly SCREEN: Adobe.Indesign.BlendMode;
			/**
			 * For blend colors lighter than 50% gray, lightens the artwork 
			 * as if it were dodged; for blend colors darker than 50% gray, 
			 * darkens the artwork as if it were burned. Note: Painting 
			 * with pure black or white produces a distinctly darker or 
			 * lighter area, but does not result in pure black or white.
			 */
			public static readonly SOFT_LIGHT: Adobe.Indesign.BlendMode;
			/**
			 * Alias for SOFT_LIGHT. For blend colors lighter than 50% 
			 * gray, lightens the artwork as if it were dodged; for blend 
			 * colors darker than 50% gray, darkens the artwork as if it 
			 * were burned. Note: Painting with pure black or white 
			 * produces a distinctly darker or lighter area, but does not 
			 * result in pure black or white.
			 */
			public static readonly softLight: Adobe.Indesign.BlendMode;
			/** Constructor */
			public constructor();
		}
	}
}