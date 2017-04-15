/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The quality of an image converted to bitmap mode. */
		class BitmapConversionType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * Simulates the effect of printing a grayscale image through a 
			 * custom halftone screen. This method lets you apply a screen 
			 * texture, such as a wood grain, to an image. To use this 
			 * option, you must first define a pattern.
			 */
			public static readonly CUSTOMPATTERN: Adobe.Photoshop.BitmapConversionType;
			/**
			 * Applies a random pattern that is usually less noticeable 
			 * than pattern dither. The dither effects are diffused across 
			 * adjacent pixels. If you select this algorithm, specify a 
			 * dither percentage to control the amount of dithering applied 
			 * to the image. May cause detectable seams to appear across 
			 * slice boundaries. Linking slices diffuses the dither pattern 
			 * across all linked slices, and eliminates the seams.
			 */
			public static readonly DIFFUSIONDITHER: Adobe.Photoshop.BitmapConversionType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** 50% Threshold. */
			public static readonly HALFTHRESHOLD: Adobe.Photoshop.BitmapConversionType;
			/**
			 * Lets you convert a grayscale image to simulated halftone 
			 * dots.
			 */
			public static readonly HALFTONESCREEN: Adobe.Photoshop.BitmapConversionType;
			/**
			 * Applies a halftone-like square pattern to determine the 
			 * value of pixels.
			 */
			public static readonly PATTERNDITHER: Adobe.Photoshop.BitmapConversionType;
			/** Constructor */
			public constructor();
		}
	}
}