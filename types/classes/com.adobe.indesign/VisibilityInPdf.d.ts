/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class VisibilityInPdf extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The field is invisible when the PDF document is displayed 
			 * on-screen but visible when the document is printed.
			 * @type {Adobe.Indesign.VisibilityInPdf}
			 * @readonly
			 */
			public static readonly HIDDEN_BUT_PRINTABLE_IN_PDF: Adobe.Indesign.VisibilityInPdf;
			/**
			 * The field is not visible.
			 * @type {Adobe.Indesign.VisibilityInPdf}
			 * @readonly
			 */
			public static readonly HIDDEN_IN_PDF: Adobe.Indesign.VisibilityInPdf;
			/**
			 * Alias for HIDDEN_BUT_PRINTABLE_IN_PDF. The field is 
			 * invisible when the PDF document is displayed on-screen but 
			 * visible when the document is printed.
			 * @type {Adobe.Indesign.VisibilityInPdf}
			 * @readonly
			 */
			public static readonly hiddenButPrintableInPdf: Adobe.Indesign.VisibilityInPdf;
			/**
			 * Alias for HIDDEN_IN_PDF. The field is not visible.
			 * @type {Adobe.Indesign.VisibilityInPdf}
			 * @readonly
			 */
			public static readonly hiddenInPdf: Adobe.Indesign.VisibilityInPdf;
			/**
			 * The field is visible when the PDF document is displayed 
			 * on-screen but invisible when the document is printed.
			 * @type {Adobe.Indesign.VisibilityInPdf}
			 * @readonly
			 */
			public static readonly VISIBLE_BUT_DOES_NOT_PRINT_IN_PDF: Adobe.Indesign.VisibilityInPdf;
			/**
			 * The field is visible.
			 * @type {Adobe.Indesign.VisibilityInPdf}
			 * @readonly
			 */
			public static readonly VISIBLE_IN_PDF: Adobe.Indesign.VisibilityInPdf;
			/**
			 * Alias for VISIBLE_BUT_DOES_NOT_PRINT_IN_PDF. The field is 
			 * visible when the PDF document is displayed on-screen but 
			 * invisible when the document is printed.
			 * @type {Adobe.Indesign.VisibilityInPdf}
			 * @readonly
			 */
			public static readonly visibleButDoesNotPrintInPdf: Adobe.Indesign.VisibilityInPdf;
			/**
			 * Alias for VISIBLE_IN_PDF. The field is visible.
			 * @type {Adobe.Indesign.VisibilityInPdf}
			 * @readonly
			 */
			public static readonly visibleInPdf: Adobe.Indesign.VisibilityInPdf;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}