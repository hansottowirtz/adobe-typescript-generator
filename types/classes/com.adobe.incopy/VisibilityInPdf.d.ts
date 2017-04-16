/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class VisibilityInPdf extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The field is invisible when the PDF document is displayed 
			 * on-screen but visible when the document is printed.
			 * @type {Adobe.Incopy.VisibilityInPdf}
			 * @readonly
			 */
			public static readonly HIDDEN_BUT_PRINTABLE_IN_PDF: Adobe.Incopy.VisibilityInPdf;
			/**
			 * The field is not visible.
			 * @type {Adobe.Incopy.VisibilityInPdf}
			 * @readonly
			 */
			public static readonly HIDDEN_IN_PDF: Adobe.Incopy.VisibilityInPdf;
			/**
			 * Alias for HIDDEN_BUT_PRINTABLE_IN_PDF. The field is 
			 * invisible when the PDF document is displayed on-screen but 
			 * visible when the document is printed.
			 * @type {Adobe.Incopy.VisibilityInPdf}
			 * @readonly
			 */
			public static readonly hiddenButPrintableInPdf: Adobe.Incopy.VisibilityInPdf;
			/**
			 * Alias for HIDDEN_IN_PDF. The field is not visible.
			 * @type {Adobe.Incopy.VisibilityInPdf}
			 * @readonly
			 */
			public static readonly hiddenInPdf: Adobe.Incopy.VisibilityInPdf;
			/**
			 * The field is visible when the PDF document is displayed 
			 * on-screen but invisible when the document is printed.
			 * @type {Adobe.Incopy.VisibilityInPdf}
			 * @readonly
			 */
			public static readonly VISIBLE_BUT_DOES_NOT_PRINT_IN_PDF: Adobe.Incopy.VisibilityInPdf;
			/**
			 * The field is visible.
			 * @type {Adobe.Incopy.VisibilityInPdf}
			 * @readonly
			 */
			public static readonly VISIBLE_IN_PDF: Adobe.Incopy.VisibilityInPdf;
			/**
			 * Alias for VISIBLE_BUT_DOES_NOT_PRINT_IN_PDF. The field is 
			 * visible when the PDF document is displayed on-screen but 
			 * invisible when the document is printed.
			 * @type {Adobe.Incopy.VisibilityInPdf}
			 * @readonly
			 */
			public static readonly visibleButDoesNotPrintInPdf: Adobe.Incopy.VisibilityInPdf;
			/**
			 * Alias for VISIBLE_IN_PDF. The field is visible.
			 * @type {Adobe.Incopy.VisibilityInPdf}
			 * @readonly
			 */
			public static readonly visibleInPdf: Adobe.Incopy.VisibilityInPdf;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}