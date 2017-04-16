/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PDFBoxType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly PDFARTBOX: Adobe.Illustrator.PDFBoxType;
			public static readonly PDFBLEEDBOX: Adobe.Illustrator.PDFBoxType;
			public static readonly PDFBOUNDINGBOX: Adobe.Illustrator.PDFBoxType;
			public static readonly PDFCROPBOX: Adobe.Illustrator.PDFBoxType;
			public static readonly PDFMEDIABOX: Adobe.Illustrator.PDFBoxType;
			public static readonly PDFTRIMBOX: Adobe.Illustrator.PDFBoxType;
			/** Constructor */
			public constructor();
		}
	}
}