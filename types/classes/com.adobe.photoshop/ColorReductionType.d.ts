/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ColorReductionType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * Samples color from the spectrum appearing most commonly in 
			 * the image.
			 */
			public static readonly ADAPTIVE: Adobe.Photoshop.ColorReductionType;
			/** Uses a set palette of colors. */
			public static readonly BLACKWHITE: Adobe.Photoshop.ColorReductionType;
			/**
			 * Uses a color palette that is created or modified by the 
			 * user. If you open an existing GIF or PNG-8 file, it will 
			 * have a custom color palette.
			 */
			public static readonly CUSTOM: Adobe.Photoshop.ColorReductionType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses a set palette of colors. */
			public static readonly GRAYSCALE: Adobe.Photoshop.ColorReductionType;
			/** Uses a set palette of colors. */
			public static readonly MACINTOSH: Adobe.Photoshop.ColorReductionType;
			/**
			 * Gives priority to colors for which the human eye has greater 
			 * sensitivity.
			 */
			public static readonly PERCEPTUAL: Adobe.Photoshop.ColorReductionType;
			/**
			 * Uses the standard 216-color color table common to Windows 
			 * and Mac OS 8-bit (256-color or web-safe palette); ensures 
			 * that no browser dither is applied when the image is 
			 * displayed using 8-bit color.
			 */
			public static readonly RESTRICTIVE: Adobe.Photoshop.ColorReductionType;
			/**
			 * Gives priority to broad areas of color and the preservation 
			 * of web colors; usually produces images with the greatest 
			 * color integrity.
			 */
			public static readonly SELECTIVE: Adobe.Photoshop.ColorReductionType;
			/** Uses a set palette of colors. */
			public static readonly WINDOWS: Adobe.Photoshop.ColorReductionType;
			/** Constructor */
			public constructor();
		}
	}
}