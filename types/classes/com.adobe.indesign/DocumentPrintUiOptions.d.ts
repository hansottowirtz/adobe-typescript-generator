/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DocumentPrintUiOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Do not show file save dialog during printing.
			 * @type {Adobe.Indesign.DocumentPrintUiOptions}
			 * @readonly
			 */
			public static readonly SUPPRESS_FILE_SAVE_DIALOG: Adobe.Indesign.DocumentPrintUiOptions;
			/**
			 * Do not show print dialog.
			 * @type {Adobe.Indesign.DocumentPrintUiOptions}
			 * @readonly
			 */
			public static readonly SUPPRESS_PRINT_DIALOG: Adobe.Indesign.DocumentPrintUiOptions;
			/**
			 * Do not show progress bar during printing.
			 * @type {Adobe.Indesign.DocumentPrintUiOptions}
			 * @readonly
			 */
			public static readonly SUPPRESS_PRINT_PROGRESS: Adobe.Indesign.DocumentPrintUiOptions;
			/**
			 * Do not show warning dialog during printing.
			 * @type {Adobe.Indesign.DocumentPrintUiOptions}
			 * @readonly
			 */
			public static readonly SUPPRESS_PRINT_WARNINGS: Adobe.Indesign.DocumentPrintUiOptions;
			/**
			 * Alias for SUPPRESS_FILE_SAVE_DIALOG. Do not show file save 
			 * dialog during printing.
			 * @type {Adobe.Indesign.DocumentPrintUiOptions}
			 * @readonly
			 */
			public static readonly suppressFileSaveDialog: Adobe.Indesign.DocumentPrintUiOptions;
			/**
			 * Alias for SUPPRESS_PRINT_DIALOG. Do not show print dialog.
			 * @type {Adobe.Indesign.DocumentPrintUiOptions}
			 * @readonly
			 */
			public static readonly suppressPrintDialog: Adobe.Indesign.DocumentPrintUiOptions;
			/**
			 * Alias for SUPPRESS_PRINT_PROGRESS. Do not show progress bar 
			 * during printing.
			 * @type {Adobe.Indesign.DocumentPrintUiOptions}
			 * @readonly
			 */
			public static readonly suppressPrintProgress: Adobe.Indesign.DocumentPrintUiOptions;
			/**
			 * Alias for SUPPRESS_PRINT_WARNINGS. Do not show warning 
			 * dialog during printing.
			 * @type {Adobe.Indesign.DocumentPrintUiOptions}
			 * @readonly
			 */
			public static readonly suppressPrintWarnings: Adobe.Indesign.DocumentPrintUiOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}