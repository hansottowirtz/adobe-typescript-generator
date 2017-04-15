/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DocumentMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * Bitmap, which uses one of two color values (black or white) 
			 * to represent the pixels in an image.
			 */
			public static readonly BITMAP: Adobe.Photoshop.DocumentMode;
			/** CMYK. */
			public static readonly CMYK: Adobe.Photoshop.DocumentMode;
			/**
			 * Duotone mode, which creates monotone, duotone (two-color), 
			 * tritone (three-color), and quadtone (four-color) grayscale 
			 * images using one to four custom inks.
			 */
			public static readonly DUOTONE: Adobe.Photoshop.DocumentMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Grayscale. */
			public static readonly GRAYSCALE: Adobe.Photoshop.DocumentMode;
			/**
			 * Indexed color, in which the number of colors in the image is 
			 * at most 256, the standard number of colors supported by the 
			 * GIF and PNG-8 formats and many multimedia applications.
			 */
			public static readonly INDEXEDCOLOR: Adobe.Photoshop.DocumentMode;
			/** Lab. */
			public static readonly LAB: Adobe.Photoshop.DocumentMode;
			/** Image with multiple color channels. */
			public static readonly MULTICHANNEL: Adobe.Photoshop.DocumentMode;
			/** RGB. */
			public static readonly RGB: Adobe.Photoshop.DocumentMode;
			/** Constructor */
			public constructor();
		}
	}
}