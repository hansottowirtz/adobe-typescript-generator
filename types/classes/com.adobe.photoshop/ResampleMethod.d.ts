/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ResampleMethod extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * Uses a weighted average to determine pixel color, which 
			 * usually yields better results than the simple averageing 
			 * method of downsampling. The slowest but most precise method, 
			 * resulting in the smoothest gradations.
			 */
			public static readonly BICUBIC: Adobe.Photoshop.ResampleMethod;
			/**
			 * A good method for reducing the size of an image based on 
			 * Bicubic interpolation with enhanced sharpening. Maintains 
			 * the detail in a resampled image.
			 */
			public static readonly BICUBICSHARPER: Adobe.Photoshop.ResampleMethod;
			/**
			 * A good method for enlarging images based on Bicubic 
			 * interpolation but designed to produce smoother results.
			 */
			public static readonly BICUBICSMOOTHER: Adobe.Photoshop.ResampleMethod;
			/**
			 * Averages the pixels in a sample area and replaces the entire 
			 * area with the average pixel color at the specified 
			 * resolution. Same as average downsampling.
			 */
			public static readonly BILINEAR: Adobe.Photoshop.ResampleMethod;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Chooses a pixel in the center of the sample area and 
			 * replaces the entire area with that pixel color. Same as 
			 * subsampling. Significantly reduces the conversion time 
			 * compared with downsampling but results in images that are 
			 * less smooth and continuous.
			 */
			public static readonly NEARESTNEIGHBOR: Adobe.Photoshop.ResampleMethod;
			/** Does not resample. */
			public static readonly NONE: Adobe.Photoshop.ResampleMethod;
			/** Constructor */
			public constructor();
		}
	}
}