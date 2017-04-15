/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The PDF version with which to make the document compatible. */
		class PDFCompatibility extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** PDF 1.3 (Acrobat 4 or higher). */
			public static readonly PDF13: Adobe.Photoshop.PDFCompatibility;
			/** PDF 1.4 (Acrobat 5 or higher). */
			public static readonly PDF14: Adobe.Photoshop.PDFCompatibility;
			/** PDF 1.5 (Acrobat 6 or higher). */
			public static readonly PDF15: Adobe.Photoshop.PDFCompatibility;
			/** PDF 1.6 (Acrobat 7 or higher) */
			public static readonly PDF16: Adobe.Photoshop.PDFCompatibility;
			/** PDF 1.7 (Acrobat 9 or higher) */
			public static readonly PDF17: Adobe.Photoshop.PDFCompatibility;
			/** Constructor */
			public constructor();
		}
	}
}