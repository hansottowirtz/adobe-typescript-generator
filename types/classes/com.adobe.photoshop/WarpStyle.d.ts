/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The warp style for text. */
		class WarpStyle extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** The type is warped in the shape of an arc. */
			public static readonly ARC: Adobe.Photoshop.WarpStyle;
			/** Text is warped in the form of an arch. */
			public static readonly ARCH: Adobe.Photoshop.WarpStyle;
			/**
			 * Warp is heavier on the lower or left edge of the text than 
			 * on the upper or right edge.
			 */
			public static readonly ARCLOWER: Adobe.Photoshop.WarpStyle;
			/**
			 * Warp is heavier on the upper or right edge of the text than 
			 * on the lower or left edge.
			 */
			public static readonly ARCUPPER: Adobe.Photoshop.WarpStyle;
			/**
			 * Text is warped outward on both the upper and lower or right 
			 * and left edges.
			 */
			public static readonly BULGE: Adobe.Photoshop.WarpStyle;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Text is warped in the shape of a fish. */
			public static readonly FISH: Adobe.Photoshop.WarpStyle;
			/**
			 * Text bulges in the middle and is squeezed on the edges as if 
			 * viewed through a fisheye lens.
			 */
			public static readonly FISHEYE: Adobe.Photoshop.WarpStyle;
			/** Text is warped in the shape of a waving flag. */
			public static readonly FLAG: Adobe.Photoshop.WarpStyle;
			/** Text is inflated. */
			public static readonly INFLATE: Adobe.Photoshop.WarpStyle;
			/** No warp. */
			public static readonly NONE: Adobe.Photoshop.WarpStyle;
			/** Text is warped in an undulating, rising pattern. */
			public static readonly RISE: Adobe.Photoshop.WarpStyle;
			/**
			 * Text is warped downward or to the right in the shape of a 
			 * fan-like seashell.
			 */
			public static readonly SHELLLOWER: Adobe.Photoshop.WarpStyle;
			/**
			 * Text is warped upward or to the left in the shape of a 
			 * fan-like seashell.
			 */
			public static readonly SHELLUPPER: Adobe.Photoshop.WarpStyle;
			/** Text is squeezed. */
			public static readonly SQUEEZE: Adobe.Photoshop.WarpStyle;
			/** Text is twisted. */
			public static readonly TWIST: Adobe.Photoshop.WarpStyle;
			/** Text is warped in the shape of a wave. */
			public static readonly WAVE: Adobe.Photoshop.WarpStyle;
			/** Constructor */
			public constructor();
		}
	}
}