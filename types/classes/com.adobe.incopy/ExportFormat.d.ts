/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ExportFormat extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Exports to PDF format.
			 * @type {Adobe.Incopy.ExportFormat}
			 * @readonly
			 */
			public static readonly PDF_TYPE: Adobe.Incopy.ExportFormat;
			/**
			 * Alias for PDF_TYPE. Exports to PDF format.
			 * @type {Adobe.Incopy.ExportFormat}
			 * @readonly
			 */
			public static readonly pdfType: Adobe.Incopy.ExportFormat;
			/**
			 * Alias for RTF. Exports to rich text format (RTF).
			 * @type {Adobe.Incopy.ExportFormat}
			 * @readonly
			 */
			public static readonly rtf: Adobe.Incopy.ExportFormat;
			/**
			 * Exports to rich text format (RTF).
			 * @type {Adobe.Incopy.ExportFormat}
			 * @readonly
			 */
			public static readonly RTF: Adobe.Incopy.ExportFormat;
			/**
			 * Exports to a text file that contains formatting information 
			 * tags.
			 * @type {Adobe.Incopy.ExportFormat}
			 * @readonly
			 */
			public static readonly TAGGED_TEXT: Adobe.Incopy.ExportFormat;
			/**
			 * Alias for TAGGED_TEXT. Exports to a text file that contains 
			 * formatting information tags.
			 * @type {Adobe.Incopy.ExportFormat}
			 * @readonly
			 */
			public static readonly taggedText: Adobe.Incopy.ExportFormat;
			/**
			 * Exports to a text (TXT) file.
			 * @type {Adobe.Incopy.ExportFormat}
			 * @readonly
			 */
			public static readonly TEXT_TYPE: Adobe.Incopy.ExportFormat;
			/**
			 * Alias for TEXT_TYPE. Exports to a text (TXT) file.
			 * @type {Adobe.Incopy.ExportFormat}
			 * @readonly
			 */
			public static readonly textType: Adobe.Incopy.ExportFormat;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}