/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PDFXStandards extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Does not check for compliance with a PDF/X 
			 * standard.
			 */
			public static readonly none: Adobe.Indesign.PDFXStandards;
			/** Does not check for compliance with a PDF/X standard. */
			public static readonly NONE: Adobe.Indesign.PDFXStandards;
			/** Checks for compliance with the PDF/X-1a:2001 standard. */
			public static readonly PDFX1A2001_STANDARD: Adobe.Indesign.PDFXStandards;
			/**
			 * Alias for PDFX1A2001_STANDARD. Checks for compliance with 
			 * the PDF/X-1a:2001 standard.
			 */
			public static readonly pdfx1a2001Standard: Adobe.Indesign.PDFXStandards;
			/** Checks for compliance with the PDF/X-1a:2003 standard. */
			public static readonly PDFX1A2003_STANDARD: Adobe.Indesign.PDFXStandards;
			/**
			 * Alias for PDFX1A2003_STANDARD. Checks for compliance with 
			 * the PDF/X-1a:2003 standard.
			 */
			public static readonly pdfx1a2003Standard: Adobe.Indesign.PDFXStandards;
			/** Checks for compliance with the PDF/X-3:2002 standard. */
			public static readonly PDFX32002_STANDARD: Adobe.Indesign.PDFXStandards;
			/**
			 * Alias for PDFX32002_STANDARD. Checks for compliance with the 
			 * PDF/X-3:2002 standard.
			 */
			public static readonly pdfx32002Standard: Adobe.Indesign.PDFXStandards;
			/** Checks for compliance with the PDF/X-3:2003 standard. */
			public static readonly PDFX32003_STANDARD: Adobe.Indesign.PDFXStandards;
			/**
			 * Alias for PDFX32003_STANDARD. Checks for compliance with the 
			 * PDF/X-3:2003 standard.
			 */
			public static readonly pdfx32003Standard: Adobe.Indesign.PDFXStandards;
			/** PDFX42007 standard is used. */
			public static readonly PDFX42007_STANDARD: Adobe.Indesign.PDFXStandards;
			/** Alias for PDFX42007_STANDARD. PDFX42007 standard is used. */
			public static readonly pdfx42007Standard: Adobe.Indesign.PDFXStandards;
			/** Constructor */
			public constructor();
		}
	}
}