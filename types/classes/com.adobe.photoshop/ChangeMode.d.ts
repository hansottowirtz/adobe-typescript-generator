/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ChangeMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * Bitmap. Note: Color images must be changed to Grayscale mode 
			 * before you can change them to Bitmap mode.
			 */
			public static readonly BITMAP: Adobe.Photoshop.ChangeMode;
			/** CMYK. */
			public static readonly CMYK: Adobe.Photoshop.ChangeMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Grayscale. */
			public static readonly GRAYSCALE: Adobe.Photoshop.ChangeMode;
			/**
			 * Indexed color, in which the number of colors in the image is 
			 * reduced to at most 256, the standard number of colors 
			 * supported by the GIF and PNG-8 formats and many multimedia 
			 * applications. This conversion reduces file size by deleting 
			 * color information from the image. To convert to indexed 
			 * color, you must start with an image that is 8 bits per 
			 * channel and in either Grayscale or RGB mode.
			 */
			public static readonly INDEXEDCOLOR: Adobe.Photoshop.ChangeMode;
			/** Lab. */
			public static readonly LAB: Adobe.Photoshop.ChangeMode;
			/**
			 * Image with multiple color channels. Uses 256 levels of gray 
			 * in each channel. Useful for specialized printing. Color 
			 * channels in the original image become spot color channels in 
			 * the converted image. A CMYK image converted to Multichannel 
			 * mode creates cyan, magenta, yellow, and black spot channels. 
			 * An RGB image converted Multichannel mode creates cyan, 
			 * magenta, and yellow spot channels. The new grayscale 
			 * information is based on the color values of the pixels in 
			 * each channel. Multichannel mode images can be saved in 
			 * Photoshop, Photoshop 2.0, Photoshop Raw, or Photoshop DCS 
			 * 2.0 format. To export a multichannel image, save it in 
			 * Photoshop DCS 2.0 format.
			 */
			public static readonly MULTICHANNEL: Adobe.Photoshop.ChangeMode;
			/** RGB. */
			public static readonly RGB: Adobe.Photoshop.ChangeMode;
			/** Constructor */
			public constructor();
		}
	}
}