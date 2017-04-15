/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The type of dither. */
		class Dither extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * Diffuses dither effects in random patterns across adjacent 
			 * pixels.
			 */
			public static readonly DIFFUSION: Adobe.Photoshop.Dither;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Applies a random pattern but without diffusing the pattern 
			 * across adjacent pixels; prevents the appearance of seams.
			 */
			public static readonly NOISE: Adobe.Photoshop.Dither;
			/** No dither is used. */
			public static readonly NONE: Adobe.Photoshop.Dither;
			/** Applies a halftone-like square pattern. */
			public static readonly PATTERN: Adobe.Photoshop.Dither;
			/** Constructor */
			public constructor();
		}
	}
}