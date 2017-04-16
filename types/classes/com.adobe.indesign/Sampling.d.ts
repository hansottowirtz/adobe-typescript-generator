/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Sampling extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses a weighted average to determine pixel color.
			 * @type {Adobe.Indesign.Sampling}
			 * @readonly
			 */
			public static readonly BICUBIC_DOWNSAMPLE: Adobe.Indesign.Sampling;
			/**
			 * Alias for BICUBIC_DOWNSAMPLE. Uses a weighted average to 
			 * determine pixel color.
			 * @type {Adobe.Indesign.Sampling}
			 * @readonly
			 */
			public static readonly bicubicDownsample: Adobe.Indesign.Sampling;
			/**
			 * Alias for DOWNSAMPLE. Averages the pixels in a sample area 
			 * and replaces the entire area with the average pixel color.
			 * @type {Adobe.Indesign.Sampling}
			 * @readonly
			 */
			public static readonly downsample: Adobe.Indesign.Sampling;
			/**
			 * Averages the pixels in a sample area and replaces the entire 
			 * area with the average pixel color.
			 * @type {Adobe.Indesign.Sampling}
			 * @readonly
			 */
			public static readonly DOWNSAMPLE: Adobe.Indesign.Sampling;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Uses no resampling.
			 * @type {Adobe.Indesign.Sampling}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.Sampling;
			/**
			 * Uses no resampling.
			 * @type {Adobe.Indesign.Sampling}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.Sampling;
			/**
			 * Alias for SUBSAMPLE. Chooses a pixel in the center of the 
			 * sample area and replaces the entire area with that pixel 
			 * color.
			 * @type {Adobe.Indesign.Sampling}
			 * @readonly
			 */
			public static readonly subsample: Adobe.Indesign.Sampling;
			/**
			 * Chooses a pixel in the center of the sample area and 
			 * replaces the entire area with that pixel color.
			 * @type {Adobe.Indesign.Sampling}
			 * @readonly
			 */
			public static readonly SUBSAMPLE: Adobe.Indesign.Sampling;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}