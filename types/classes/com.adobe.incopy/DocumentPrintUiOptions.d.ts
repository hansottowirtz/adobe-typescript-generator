/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class DocumentPrintUiOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Do not show file save dialog during printing.
			 * @type {Adobe.Incopy.DocumentPrintUiOptions}
			 * @readonly
			 */
			public static readonly SUPPRESS_FILE_SAVE_DIALOG: Adobe.Incopy.DocumentPrintUiOptions;
			/**
			 * Do not show print dialog.
			 * @type {Adobe.Incopy.DocumentPrintUiOptions}
			 * @readonly
			 */
			public static readonly SUPPRESS_PRINT_DIALOG: Adobe.Incopy.DocumentPrintUiOptions;
			/**
			 * Do not show progress bar during printing.
			 * @type {Adobe.Incopy.DocumentPrintUiOptions}
			 * @readonly
			 */
			public static readonly SUPPRESS_PRINT_PROGRESS: Adobe.Incopy.DocumentPrintUiOptions;
			/**
			 * Do not show warning dialog during printing.
			 * @type {Adobe.Incopy.DocumentPrintUiOptions}
			 * @readonly
			 */
			public static readonly SUPPRESS_PRINT_WARNINGS: Adobe.Incopy.DocumentPrintUiOptions;
			/**
			 * Alias for SUPPRESS_FILE_SAVE_DIALOG. Do not show file save 
			 * dialog during printing.
			 * @type {Adobe.Incopy.DocumentPrintUiOptions}
			 * @readonly
			 */
			public static readonly suppressFileSaveDialog: Adobe.Incopy.DocumentPrintUiOptions;
			/**
			 * Alias for SUPPRESS_PRINT_DIALOG. Do not show print dialog.
			 * @type {Adobe.Incopy.DocumentPrintUiOptions}
			 * @readonly
			 */
			public static readonly suppressPrintDialog: Adobe.Incopy.DocumentPrintUiOptions;
			/**
			 * Alias for SUPPRESS_PRINT_PROGRESS. Do not show progress bar 
			 * during printing.
			 * @type {Adobe.Incopy.DocumentPrintUiOptions}
			 * @readonly
			 */
			public static readonly suppressPrintProgress: Adobe.Incopy.DocumentPrintUiOptions;
			/**
			 * Alias for SUPPRESS_PRINT_WARNINGS. Do not show warning 
			 * dialog during printing.
			 * @type {Adobe.Incopy.DocumentPrintUiOptions}
			 * @readonly
			 */
			public static readonly suppressPrintWarnings: Adobe.Incopy.DocumentPrintUiOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}