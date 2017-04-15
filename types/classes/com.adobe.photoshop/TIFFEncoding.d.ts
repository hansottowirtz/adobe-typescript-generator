/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The encoding to use when saving to TIFF format. */
		class TIFFEncoding extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * JPEG compression, which is lossy and recommended for 
			 * continuous-tone images, such as photographs.
			 */
			public static readonly JPEG: Adobe.Photoshop.TIFFEncoding;
			/** No compression. */
			public static readonly NONE: Adobe.Photoshop.TIFFEncoding;
			/**
			 * LZW compression, which is lossless and most useful for 
			 * images with large areas of single color.
			 */
			public static readonly TIFFLZW: Adobe.Photoshop.TIFFEncoding;
			/**
			 * Zip compression, which is lossless and most effective for 
			 * images that contain large areas of single color.
			 */
			public static readonly TIFFZIP: Adobe.Photoshop.TIFFEncoding;
			/** Constructor */
			public constructor();
		}
	}
}