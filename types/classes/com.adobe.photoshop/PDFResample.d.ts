/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PDFResample extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly NONE: Adobe.Photoshop.PDFResample;
			public static readonly PDFAVERAGE: Adobe.Photoshop.PDFResample;
			public static readonly PDFBICUBIC: Adobe.Photoshop.PDFResample;
			public static readonly PDFSUBSAMPLE: Adobe.Photoshop.PDFResample;
			/** Constructor */
			public constructor();
		}
	}
}