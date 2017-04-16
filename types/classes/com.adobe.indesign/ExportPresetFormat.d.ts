/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ExportPresetFormat extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Document presets.
			 * @type {Adobe.Indesign.ExportPresetFormat}
			 * @readonly
			 */
			public static readonly DOCUMENT_PRESETS_FORMAT: Adobe.Indesign.ExportPresetFormat;
			/**
			 * Alias for DOCUMENT_PRESETS_FORMAT. Document presets.
			 * @type {Adobe.Indesign.ExportPresetFormat}
			 * @readonly
			 */
			public static readonly documentPresetsFormat: Adobe.Indesign.ExportPresetFormat;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Flattener presets.
			 * @type {Adobe.Indesign.ExportPresetFormat}
			 * @readonly
			 */
			public static readonly FLATTENER_PRESETS_FORMAT: Adobe.Indesign.ExportPresetFormat;
			/**
			 * Alias for FLATTENER_PRESETS_FORMAT. Flattener presets.
			 * @type {Adobe.Indesign.ExportPresetFormat}
			 * @readonly
			 */
			public static readonly flattenerPresetsFormat: Adobe.Indesign.ExportPresetFormat;
			/**
			 * PDF export presets.
			 * @type {Adobe.Indesign.ExportPresetFormat}
			 * @readonly
			 */
			public static readonly PDF_EXPORT_PRESETS_FORMAT: Adobe.Indesign.ExportPresetFormat;
			/**
			 * Alias for PDF_EXPORT_PRESETS_FORMAT. PDF export presets.
			 * @type {Adobe.Indesign.ExportPresetFormat}
			 * @readonly
			 */
			public static readonly pdfExportPresetsFormat: Adobe.Indesign.ExportPresetFormat;
			/**
			 * Printer presets.
			 * @type {Adobe.Indesign.ExportPresetFormat}
			 * @readonly
			 */
			public static readonly PRINTER_PRESETS_FORMAT: Adobe.Indesign.ExportPresetFormat;
			/**
			 * Alias for PRINTER_PRESETS_FORMAT. Printer presets.
			 * @type {Adobe.Indesign.ExportPresetFormat}
			 * @readonly
			 */
			public static readonly printerPresetsFormat: Adobe.Indesign.ExportPresetFormat;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}