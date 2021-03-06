/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PDFRasterCompressionOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses JPEG compression and automatically determines the best 
			 * quality type.
			 * @type {Adobe.Indesign.PDFRasterCompressionOptions}
			 * @readonly
			 */
			public static readonly AUTOMATIC_COMPRESSION: Adobe.Indesign.PDFRasterCompressionOptions;
			/**
			 * Alias for AUTOMATIC_COMPRESSION. Uses JPEG compression and 
			 * automatically determines the best quality type.
			 * @type {Adobe.Indesign.PDFRasterCompressionOptions}
			 * @readonly
			 */
			public static readonly automaticCompression: Adobe.Indesign.PDFRasterCompressionOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses JPEG compression.
			 * @type {Adobe.Indesign.PDFRasterCompressionOptions}
			 * @readonly
			 */
			public static readonly JPEG_COMPRESSION: Adobe.Indesign.PDFRasterCompressionOptions;
			/**
			 * Alias for JPEG_COMPRESSION. Uses JPEG compression.
			 * @type {Adobe.Indesign.PDFRasterCompressionOptions}
			 * @readonly
			 */
			public static readonly jpegCompression: Adobe.Indesign.PDFRasterCompressionOptions;
			/**
			 * Uses the best quality type.
			 * @type {Adobe.Indesign.PDFRasterCompressionOptions}
			 * @readonly
			 */
			public static readonly LOSSLESS_COMPRESSION: Adobe.Indesign.PDFRasterCompressionOptions;
			/**
			 * Alias for LOSSLESS_COMPRESSION. Uses the best quality type.
			 * @type {Adobe.Indesign.PDFRasterCompressionOptions}
			 * @readonly
			 */
			public static readonly losslessCompression: Adobe.Indesign.PDFRasterCompressionOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}