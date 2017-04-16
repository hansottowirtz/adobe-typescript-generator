/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PDFXStandards extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Does not check for compliance with a PDF/X 
			 * standard.
			 * @type {Adobe.Indesign.PDFXStandards}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.PDFXStandards;
			/**
			 * Does not check for compliance with a PDF/X standard.
			 * @type {Adobe.Indesign.PDFXStandards}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.PDFXStandards;
			/**
			 * Checks for compliance with the PDF/X-1a:2001 standard.
			 * @type {Adobe.Indesign.PDFXStandards}
			 * @readonly
			 */
			public static readonly PDFX1A2001_STANDARD: Adobe.Indesign.PDFXStandards;
			/**
			 * Alias for PDFX1A2001_STANDARD. Checks for compliance with 
			 * the PDF/X-1a:2001 standard.
			 * @type {Adobe.Indesign.PDFXStandards}
			 * @readonly
			 */
			public static readonly pdfx1a2001Standard: Adobe.Indesign.PDFXStandards;
			/**
			 * Checks for compliance with the PDF/X-1a:2003 standard.
			 * @type {Adobe.Indesign.PDFXStandards}
			 * @readonly
			 */
			public static readonly PDFX1A2003_STANDARD: Adobe.Indesign.PDFXStandards;
			/**
			 * Alias for PDFX1A2003_STANDARD. Checks for compliance with 
			 * the PDF/X-1a:2003 standard.
			 * @type {Adobe.Indesign.PDFXStandards}
			 * @readonly
			 */
			public static readonly pdfx1a2003Standard: Adobe.Indesign.PDFXStandards;
			/**
			 * Checks for compliance with the PDF/X-3:2002 standard.
			 * @type {Adobe.Indesign.PDFXStandards}
			 * @readonly
			 */
			public static readonly PDFX32002_STANDARD: Adobe.Indesign.PDFXStandards;
			/**
			 * Alias for PDFX32002_STANDARD. Checks for compliance with the 
			 * PDF/X-3:2002 standard.
			 * @type {Adobe.Indesign.PDFXStandards}
			 * @readonly
			 */
			public static readonly pdfx32002Standard: Adobe.Indesign.PDFXStandards;
			/**
			 * Checks for compliance with the PDF/X-3:2003 standard.
			 * @type {Adobe.Indesign.PDFXStandards}
			 * @readonly
			 */
			public static readonly PDFX32003_STANDARD: Adobe.Indesign.PDFXStandards;
			/**
			 * Alias for PDFX32003_STANDARD. Checks for compliance with the 
			 * PDF/X-3:2003 standard.
			 * @type {Adobe.Indesign.PDFXStandards}
			 * @readonly
			 */
			public static readonly pdfx32003Standard: Adobe.Indesign.PDFXStandards;
			/**
			 * PDFX42010 standard is used.
			 * @type {Adobe.Indesign.PDFXStandards}
			 * @readonly
			 */
			public static readonly PDFX42010_STANDARD: Adobe.Indesign.PDFXStandards;
			/**
			 * Alias for PDFX42010_STANDARD. PDFX42010 standard is used.
			 * @type {Adobe.Indesign.PDFXStandards}
			 * @readonly
			 */
			public static readonly pdfx42010Standard: Adobe.Indesign.PDFXStandards;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}