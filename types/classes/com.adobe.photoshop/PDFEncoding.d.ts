/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * The type of compression to use when saving a document in PDF 
		 * format.
		 */
		class PDFEncoding extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** JPEG compression. */
			public static readonly JPEG: Adobe.Photoshop.PDFEncoding;
			/** JPEG2000 compression with high image quality. */
			public static readonly JPEG2000HIGH: Adobe.Photoshop.PDFEncoding;
			/** JPEG2000 lossless compression. */
			public static readonly JPEG2000LOSSLESS: Adobe.Photoshop.PDFEncoding;
			/** JPEG2000 compression with low image quality. */
			public static readonly JPEG2000LOW: Adobe.Photoshop.PDFEncoding;
			/** JPEG2000 compression with medium image quality. */
			public static readonly JPEG2000MED: Adobe.Photoshop.PDFEncoding;
			/** JPEG2000 compression with medium high image quality. */
			public static readonly JPEG2000MEDHIGH: Adobe.Photoshop.PDFEncoding;
			/** JPEG2000 compression with medium low image quality. */
			public static readonly JPEG2000MEDLOW: Adobe.Photoshop.PDFEncoding;
			/** JPEG compression with high image quality. */
			public static readonly JPEGHIGH: Adobe.Photoshop.PDFEncoding;
			/** JPEG compression with low image quality. */
			public static readonly JPEGLOW: Adobe.Photoshop.PDFEncoding;
			/** JPEG compression with medium image quality. */
			public static readonly JPEGMED: Adobe.Photoshop.PDFEncoding;
			/** JPEG compression with medium high image quality. */
			public static readonly JPEGMEDHIGH: Adobe.Photoshop.PDFEncoding;
			/** JPEG compression with medium low image quality. */
			public static readonly JPEGMEDLOW: Adobe.Photoshop.PDFEncoding;
			/** No encoding. */
			public static readonly NONE: Adobe.Photoshop.PDFEncoding;
			/** Zip compression. */
			public static readonly PDFZIP: Adobe.Photoshop.PDFEncoding;
			/** Zip compression with 4-bit image quality. */
			public static readonly PDFZIP4BIT: Adobe.Photoshop.PDFEncoding;
			/** Constructor */
			public constructor();
		}
	}
}