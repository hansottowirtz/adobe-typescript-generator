/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The palette type for converting an image to indexed color. */
		class Palette extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The palette uses the exact colors appearing in the RGB 
			 * image; available only if the image uses 256 or fewer colors. 
			 * Because the image's palette contains all colors in the 
			 * image, there is no dithering.
			 */
			public static readonly EXACT: Adobe.Photoshop.Palette;
			/**
			 * Creates a palette by sampling the colors from the spectrum 
			 * appearing most commonly in the image. For example, an RGB 
			 * image with only the colors green and blue produces a palette 
			 * made primarily of greens and blues.
			 */
			public static readonly LOCALADAPTIVE: Adobe.Photoshop.Palette;
			/**
			 * Creates a custom palette by giving priority to colors for in 
			 * the image which the human eye has greater sensitivity.
			 */
			public static readonly LOCALPERCEPTUAL: Adobe.Photoshop.Palette;
			/**
			 * Creates a color table similar to the Perceptual color table, 
			 * but favoring broad areas of color in the image and the 
			 * preservation of web colors. Usually produces images with the 
			 * greatest color integrity.
			 */
			public static readonly LOCALSELECTIVE: Adobe.Photoshop.Palette;
			/**
			 * The Mac OS default 8-bit palette, whch is based on a uniform 
			 * sampling of RGB colors.
			 */
			public static readonly MACOSPALETTE: Adobe.Photoshop.Palette;
			/**
			 * Creates a palette by sampling the colors from the spectrum 
			 * appearing most commonly in a group of open images that share 
			 * the same color palette.
			 */
			public static readonly MASTERADAPTIVE: Adobe.Photoshop.Palette;
			/**
			 * Creates a custom palette by giving priority to colors in a 
			 * group of open images with the same color palette for which 
			 * the human eye has greater sensitivity.
			 */
			public static readonly MASTERPERCEPTUAL: Adobe.Photoshop.Palette;
			/**
			 * Creates a color table similar to the Master Perceptual color 
			 * table, but favoring broad areas of color and the 
			 * preservation of web colors.
			 */
			public static readonly MASTERSELECTIVE: Adobe.Photoshop.Palette;
			/**
			 * Uses the custom palette from the previous conversion, making 
			 * it easy to convert several images with the same custom 
			 * palette.
			 */
			public static readonly PREVIOUSPALETTE: Adobe.Photoshop.Palette;
			/**
			 * Creates a palette by uniformly sampling colors from the RGB 
			 * color cube. For example, if Photoshop takes six evenly 
			 * spaced color levels each of red, green, and blue, the 
			 * combination produces a uniform palette of 216 colors (6 
			 * cubed = 6 x 6 x 6 = 216). The total number of colors 
			 * displayed in an image corresponds to the nearest perfect 
			 * cube (8, 27, 64, 125, or 216) that is less than the value in 
			 * the Colors text box.
			 */
			public static readonly UNIFORM: Adobe.Photoshop.Palette;
			/**
			 * The 216-color palette that web browsers, regardless of 
			 * platform, use to display images on a monitor limited to 256 
			 * colors. A subset of the Mac OS 8-bit palette. Use this 
			 * option to avoid browser dither when viewing images on a 
			 * monitor display limited to 256 colors.
			 */
			public static readonly WEBPALETTE: Adobe.Photoshop.Palette;
			/**
			 * The Windows system's default 8-bit palette, whch is based on 
			 * a uniform sampling of RGB colors.
			 */
			public static readonly WINDOWSPALETTE: Adobe.Photoshop.Palette;
			/** Constructor */
			public constructor();
		}
	}
}