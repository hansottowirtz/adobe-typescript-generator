/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PDFXStandard extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/**
			 * Supports only a CMYK and spot color workflow, targeted to a 
			 * specific output device.
			 */
			public static readonly PDFX1A2001: PDFXStandard;
			/**
			 * Supports only a CMYK and spot color workflow, targeted to a 
			 * specific output device.
			 */
			public static readonly PDFX1A2003: PDFXStandard;
			/**
			 * Supports a color-managed workflow, allowing the use of 
			 * device-independent color in addition to CMYK and spot 
			 * colors.
			 */
			public static readonly PDFX32001: PDFXStandard;
			/**
			 * Supports a color-managed workflow, allowing the use of 
			 * device-independent color in addition to CMYK and spot 
			 * colors.
			 */
			public static readonly PDFX32002: PDFXStandard;
			/**
			 * Supports a color-managed workflow, allowing the use of 
			 * device-independent color in addition to CMYK and spot 
			 * colors.
			 */
			public static readonly PDFX32003: PDFXStandard;
			/**
			 * Supports a color-managed workflow, allowing the use of 
			 * device-independent color in addition to CMYK and spot 
			 * colors.
			 */
			public static readonly PDFX42007: PDFXStandard;
			/** The user isn't complying with any PDF standard. */
			public static readonly PDFXNONE: PDFXStandard;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}