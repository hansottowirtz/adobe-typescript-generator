/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ExportFormat extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Exports to EPS format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly EPS_TYPE: Adobe.Indesign.ExportFormat;
			/**
			 * Alias for EPS_TYPE. Exports to EPS format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly epsType: Adobe.Indesign.ExportFormat;
			/**
			 * Alias for EPUB. Exports to EPub format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly epub: Adobe.Indesign.ExportFormat;
			/**
			 * Exports to EPub format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly EPUB: Adobe.Indesign.ExportFormat;
			/**
			 * Alias for HTML. Exports to XHTML format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly html: Adobe.Indesign.ExportFormat;
			/**
			 * Exports to XHTML format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly HTML: Adobe.Indesign.ExportFormat;
			/**
			 * Exports to InCopy markup (ICML) format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly INCOPY_MARKUP: Adobe.Indesign.ExportFormat;
			/**
			 * Alias for INCOPY_MARKUP. Exports to InCopy markup (ICML) 
			 * format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly incopyMarkup: Adobe.Indesign.ExportFormat;
			/**
			 * Exports to InDesign markup (IDML) format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly INDESIGN_MARKUP: Adobe.Indesign.ExportFormat;
			/**
			 * Exports to InDesign snippet (IDMS) format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly INDESIGN_SNIPPET: Adobe.Indesign.ExportFormat;
			/**
			 * Alias for INDESIGN_MARKUP. Exports to InDesign markup (IDML) 
			 * format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly indesignMarkup: Adobe.Indesign.ExportFormat;
			/**
			 * Alias for INDESIGN_SNIPPET. Exports to InDesign snippet 
			 * (IDMS) format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly indesignSnippet: Adobe.Indesign.ExportFormat;
			/**
			 * Exports to Interactive PDF format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly INTERACTIVE_PDF: Adobe.Indesign.ExportFormat;
			/**
			 * Alias for INTERACTIVE_PDF. Exports to Interactive PDF 
			 * format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly interactivePdf: Adobe.Indesign.ExportFormat;
			/**
			 * Alias for JPG. Exports to JPEG format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly jpg: Adobe.Indesign.ExportFormat;
			/**
			 * Exports to JPEG format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly JPG: Adobe.Indesign.ExportFormat;
			/**
			 * Exports to packaged XFL format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly PACKAGED_XFL: Adobe.Indesign.ExportFormat;
			/**
			 * Alias for PACKAGED_XFL. Exports to packaged XFL format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly packagedXfl: Adobe.Indesign.ExportFormat;
			/**
			 * Exports to PDF format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly PDF_TYPE: Adobe.Indesign.ExportFormat;
			/**
			 * Alias for PDF_TYPE. Exports to PDF format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly pdfType: Adobe.Indesign.ExportFormat;
			/**
			 * Exports to PNG format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly PNG_FORMAT: Adobe.Indesign.ExportFormat;
			/**
			 * Alias for PNG_FORMAT. Exports to PNG format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly pngFormat: Adobe.Indesign.ExportFormat;
			/**
			 * Alias for RTF. Exports to rich text format (RTF).
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly rtf: Adobe.Indesign.ExportFormat;
			/**
			 * Exports to rich text format (RTF).
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly RTF: Adobe.Indesign.ExportFormat;
			/**
			 * Alias for SWF. Exports to SWF format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly swf: Adobe.Indesign.ExportFormat;
			/**
			 * Exports to SWF format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly SWF: Adobe.Indesign.ExportFormat;
			/**
			 * Exports to a tagged text file with a TXT extension.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly TAGGED_TEXT: Adobe.Indesign.ExportFormat;
			/**
			 * Alias for TAGGED_TEXT. Exports to a tagged text file with a 
			 * TXT extension.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly taggedText: Adobe.Indesign.ExportFormat;
			/**
			 * Exports to text (TXT) format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly TEXT_TYPE: Adobe.Indesign.ExportFormat;
			/**
			 * Alias for TEXT_TYPE. Exports to text (TXT) format.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly textType: Adobe.Indesign.ExportFormat;
			/**
			 * Alias for XML. Exports the document's tagged content to XML.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly xml: Adobe.Indesign.ExportFormat;
			/**
			 * Exports the document's tagged content to XML.
			 * @type {Adobe.Indesign.ExportFormat}
			 * @readonly
			 */
			public static readonly XML: Adobe.Indesign.ExportFormat;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}