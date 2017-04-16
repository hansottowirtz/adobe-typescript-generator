/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class DocumentPrintUiOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Do not show file save dialog during printing. */
			public static readonly SUPPRESS_FILE_SAVE_DIALOG: Adobe.Incopy.DocumentPrintUiOptions;
			/** Do not show print dialog. */
			public static readonly SUPPRESS_PRINT_DIALOG: Adobe.Incopy.DocumentPrintUiOptions;
			/** Do not show progress bar during printing. */
			public static readonly SUPPRESS_PRINT_PROGRESS: Adobe.Incopy.DocumentPrintUiOptions;
			/** Do not show warning dialog during printing. */
			public static readonly SUPPRESS_PRINT_WARNINGS: Adobe.Incopy.DocumentPrintUiOptions;
			/**
			 * Alias for SUPPRESS_FILE_SAVE_DIALOG. Do not show file save 
			 * dialog during printing.
			 */
			public static readonly suppressFileSaveDialog: Adobe.Incopy.DocumentPrintUiOptions;
			/** Alias for SUPPRESS_PRINT_DIALOG. Do not show print dialog. */
			public static readonly suppressPrintDialog: Adobe.Incopy.DocumentPrintUiOptions;
			/**
			 * Alias for SUPPRESS_PRINT_PROGRESS. Do not show progress bar 
			 * during printing.
			 */
			public static readonly suppressPrintProgress: Adobe.Incopy.DocumentPrintUiOptions;
			/**
			 * Alias for SUPPRESS_PRINT_WARNINGS. Do not show warning 
			 * dialog during printing.
			 */
			public static readonly suppressPrintWarnings: Adobe.Incopy.DocumentPrintUiOptions;
			/** Constructor */
			public constructor();
		}
	}
}