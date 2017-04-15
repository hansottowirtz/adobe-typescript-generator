/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Sampling extends Adobe.Csawlib.CSEnumBase {
			/** Uses a weighted average to determine pixel color. */
			public static readonly BICUBIC_DOWNSAMPLE: Adobe.Indesign.Sampling;
			/**
			 * Alias for BICUBIC_DOWNSAMPLE. Uses a weighted average to 
			 * determine pixel color.
			 */
			public static readonly bicubicDownsample: Adobe.Indesign.Sampling;
			/**
			 * Alias for DOWNSAMPLE. Averages the pixels in a sample area 
			 * and replaces the entire area with the average pixel color.
			 */
			public static readonly downsample: Adobe.Indesign.Sampling;
			/**
			 * Averages the pixels in a sample area and replaces the entire 
			 * area with the average pixel color.
			 */
			public static readonly DOWNSAMPLE: Adobe.Indesign.Sampling;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NONE. Uses no resampling. */
			public static readonly none: Adobe.Indesign.Sampling;
			/** Uses no resampling. */
			public static readonly NONE: Adobe.Indesign.Sampling;
			/**
			 * Alias for SUBSAMPLE. Chooses a pixel in the center of the 
			 * sample area and replaces the entire area with that pixel 
			 * color.
			 */
			public static readonly subsample: Adobe.Indesign.Sampling;
			/**
			 * Chooses a pixel in the center of the sample area and 
			 * replaces the entire area with that pixel color.
			 */
			public static readonly SUBSAMPLE: Adobe.Indesign.Sampling;
			/** Constructor */
			public constructor();
		}
	}
}