/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PDFXStandard extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Supports only a CMYK and spot color workflow, targeted to a 
			 * specific output device.
			 */
			public static readonly PDFX1A2001: Adobe.Illustrator.PDFXStandard;
			/**
			 * Supports only a CMYK and spot color workflow, targeted to a 
			 * specific output device.
			 */
			public static readonly PDFX1A2003: Adobe.Illustrator.PDFXStandard;
			/**
			 * Supports a color-managed workflow, allowing the use of 
			 * device-independent color in addition to CMYK and spot 
			 * colors.
			 */
			public static readonly PDFX32001: Adobe.Illustrator.PDFXStandard;
			/**
			 * Supports a color-managed workflow, allowing the use of 
			 * device-independent color in addition to CMYK and spot 
			 * colors.
			 */
			public static readonly PDFX32002: Adobe.Illustrator.PDFXStandard;
			/**
			 * Supports a color-managed workflow, allowing the use of 
			 * device-independent color in addition to CMYK and spot 
			 * colors.
			 */
			public static readonly PDFX32003: Adobe.Illustrator.PDFXStandard;
			/**
			 * Supports a color-managed workflow, allowing the use of 
			 * device-independent color in addition to CMYK and spot 
			 * colors.
			 */
			public static readonly PDFX42007: Adobe.Illustrator.PDFXStandard;
			/** The user isn't complying with any PDF standard. */
			public static readonly PDFXNONE: Adobe.Illustrator.PDFXStandard;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}