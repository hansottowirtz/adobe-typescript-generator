/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ExportPresetFormat extends Adobe.Csawlib.CSEnumBase {
			/** Document presets. */
			public static readonly DOCUMENT_PRESETS_FORMAT: Adobe.Indesign.ExportPresetFormat;
			/** Alias for DOCUMENT_PRESETS_FORMAT. Document presets. */
			public static readonly documentPresetsFormat: Adobe.Indesign.ExportPresetFormat;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Flattener presets. */
			public static readonly FLATTENER_PRESETS_FORMAT: Adobe.Indesign.ExportPresetFormat;
			/** Alias for FLATTENER_PRESETS_FORMAT. Flattener presets. */
			public static readonly flattenerPresetsFormat: Adobe.Indesign.ExportPresetFormat;
			/** PDF export presets. */
			public static readonly PDF_EXPORT_PRESETS_FORMAT: Adobe.Indesign.ExportPresetFormat;
			/** Alias for PDF_EXPORT_PRESETS_FORMAT. PDF export presets. */
			public static readonly pdfExportPresetsFormat: Adobe.Indesign.ExportPresetFormat;
			/** Printer presets. */
			public static readonly PRINTER_PRESETS_FORMAT: Adobe.Indesign.ExportPresetFormat;
			/** Alias for PRINTER_PRESETS_FORMAT. Printer presets. */
			public static readonly printerPresetsFormat: Adobe.Indesign.ExportPresetFormat;
			/** Constructor */
			public constructor();
		}
	}
}