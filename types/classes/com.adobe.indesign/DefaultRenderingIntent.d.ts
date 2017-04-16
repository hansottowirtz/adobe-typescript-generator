/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DefaultRenderingIntent extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Aims to maintain color accuracy at the expense of color 
			 * relationshps and is suitable for proofing to simulate the 
			 * output of a particular device. Note: Leaves colors that fall 
			 * inside the destination gamut unchanged and clips 
			 * out-of-gamut colors.
			 */
			public static readonly ABSOLUTE_COLORIMETRIC: Adobe.Indesign.DefaultRenderingIntent;
			/**
			 * Alias for ABSOLUTE_COLORIMETRIC. Aims to maintain color 
			 * accuracy at the expense of color relationshps and is 
			 * suitable for proofing to simulate the output of a particular 
			 * device. Note: Leaves colors that fall inside the destination 
			 * gamut unchanged and clips out-of-gamut colors.
			 */
			public static readonly absoluteColorimetric: Adobe.Indesign.DefaultRenderingIntent;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for PERCEPTUAL. Aims to preserve the visual 
			 * relationship between colors so they are perceived as natural 
			 * to the human eye, even though the color values themselves 
			 * may change.
			 */
			public static readonly perceptual: Adobe.Indesign.DefaultRenderingIntent;
			/**
			 * Aims to preserve the visual relationship between colors so 
			 * they are perceived as natural to the human eye, even though 
			 * the color values themselves may change.
			 */
			public static readonly PERCEPTUAL: Adobe.Indesign.DefaultRenderingIntent;
			/**
			 * Compares the extreme highlight of the source color space to 
			 * that of the destination color space and shifts all colors 
			 * accordingly. Out-of-gamut colors are shifted to the closest 
			 * reproducible color in the destination color space. Note: 
			 * Preserves more of the original colors in an image than 
			 * perceptual rendering intent does.
			 */
			public static readonly RELATIVE_COLORIMETRIC: Adobe.Indesign.DefaultRenderingIntent;
			/**
			 * Alias for RELATIVE_COLORIMETRIC. Compares the extreme 
			 * highlight of the source color space to that of the 
			 * destination color space and shifts all colors accordingly. 
			 * Out-of-gamut colors are shifted to the closest reproducible 
			 * color in the destination color space. Note: Preserves more 
			 * of the original colors in an image than perceptual rendering 
			 * intent does.
			 */
			public static readonly relativeColorimetric: Adobe.Indesign.DefaultRenderingIntent;
			/**
			 * Alias for SATURATION. Tries to produce vivid colors in an 
			 * image at the expense of color accuracy.
			 */
			public static readonly saturation: Adobe.Indesign.DefaultRenderingIntent;
			/**
			 * Tries to produce vivid colors in an image at the expense of 
			 * color accuracy.
			 */
			public static readonly SATURATION: Adobe.Indesign.DefaultRenderingIntent;
			/** Constructor */
			public constructor();
		}
	}
}