/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PDFCompressionType extends Adobe.Csawlib.CSEnumBase {
			/** Uses no compression. */
			public static readonly COMPRESS_NONE: Adobe.Indesign.PDFCompressionType;
			/** Compress all objects. */
			public static readonly COMPRESS_OBJECTS: Adobe.Indesign.PDFCompressionType;
			/** Compresses only objects related to PDF structure. */
			public static readonly COMPRESS_STRUCTURE: Adobe.Indesign.PDFCompressionType;
			/** Alias for COMPRESS_NONE. Uses no compression. */
			public static readonly compressNone: Adobe.Indesign.PDFCompressionType;
			/** Alias for COMPRESS_OBJECTS. Compress all objects. */
			public static readonly compressObjects: Adobe.Indesign.PDFCompressionType;
			/**
			 * Alias for COMPRESS_STRUCTURE. Compresses only objects 
			 * related to PDF structure.
			 */
			public static readonly compressStructure: Adobe.Indesign.PDFCompressionType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}