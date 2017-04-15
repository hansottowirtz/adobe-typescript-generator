/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Intent extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * Aims to maintain color accuracy at the expense of preserving 
			 * relationships between colors and is suitable for proofing to 
			 * simulate the output of a particular device. This intent is 
			 * particularly useful for previewing how paper color affects 
			 * printed colors. Leaves colors that fall inside the 
			 * destination gamut unchanged. Out of gamut colors are 
			 * clipped. No scaling of colors to destination white point is 
			 * performed.
			 */
			public static readonly ABSOLUTECOLORIMETRIC: Adobe.Photoshop.Intent;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Gives priority to colors for which the human eye has greater 
			 * sensitivity. Suitable for photographic images with a lot of 
			 * out of gamut colors. This is the standard rendering intent 
			 * for the Japanese printing industry.
			 */
			public static readonly PERCEPTUAL: Adobe.Photoshop.Intent;
			/**
			 * Compares the extreme highlight of the source color space to 
			 * that of the destination color space and shifts all colors 
			 * accordingly. Out of gamut colors are shifted to the closest 
			 * reproducible color in the destination color space. The 
			 * standard rendering intent for printing in North America and 
			 * Europe.
			 */
			public static readonly RELATIVECOLORIMETRIC: Adobe.Photoshop.Intent;
			/**
			 * Tries to produce vivid colors in an image at the expense of 
			 * color accuracy. Suitable for business graphics like graphs 
			 * or charts, where bright saturated colors are more important 
			 * than the exact relationship between colors.
			 */
			public static readonly SATURATION: Adobe.Photoshop.Intent;
			/** Constructor */
			public constructor();
		}
	}
}