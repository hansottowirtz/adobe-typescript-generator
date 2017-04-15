/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RasterCompressionOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses JPEG compression and automatically determines the best 
			 * quality type.
			 */
			public static readonly AUTOMATIC_COMPRESSION: Adobe.Indesign.RasterCompressionOptions;
			/**
			 * Alias for AUTOMATIC_COMPRESSION. Uses JPEG compression and 
			 * automatically determines the best quality type.
			 */
			public static readonly automaticCompression: Adobe.Indesign.RasterCompressionOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses JPEG compression. */
			public static readonly JPEG_COMPRESSION: Adobe.Indesign.RasterCompressionOptions;
			/** Alias for JPEG_COMPRESSION. Uses JPEG compression. */
			public static readonly jpegCompression: Adobe.Indesign.RasterCompressionOptions;
			/** Uses the best quality type. */
			public static readonly LOSSLESS_COMPRESSION: Adobe.Indesign.RasterCompressionOptions;
			/** Alias for LOSSLESS_COMPRESSION. Uses the best quality type. */
			public static readonly losslessCompression: Adobe.Indesign.RasterCompressionOptions;
			/** Constructor */
			public constructor();
		}
	}
}