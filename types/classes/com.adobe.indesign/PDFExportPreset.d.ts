/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PDFExportPreset extends Adobe.Csawlib.CSHostObject {
			/**
			 * The exported PDF document's Acrobat compatibility.
			 * @type {Adobe.Indesign.AcrobatCompatibility}
			 */
			public acrobatCompatibility: Adobe.Indesign.AcrobatCompatibility;
			/**
			 * The transparency flattener preset to use.
			 * @type {Adobe.Indesign.FlattenerPreset}
			 */
			public appliedFlattenerPreset: Adobe.Indesign.FlattenerPreset;
			/**
			 * The height of the bleed area at the bottom of the page. 
			 * Note: Valid only when use document bleed to print is true.
			 * @type {any}
			 */
			public bleedBottom: any;
			/**
			 * The width of the bleed area at the inside of the page. Note: 
			 * Valid only when use document bleed to print is true.
			 * @type {any}
			 */
			public bleedInside: any;
			/**
			 * If true, print bleed marks.
			 * @type {boolean}
			 */
			public bleedMarks: boolean;
			/**
			 * The width of the bleed area at the outside of the page. 
			 * Note: Valid only when use document bleed to print is true.
			 * @type {any}
			 */
			public bleedOutside: any;
			/**
			 * The height of the bleed area at the top of the page. Note: 
			 * Valid only when use document bleed to print is true.
			 * @type {any}
			 */
			public bleedTop: any;
			/**
			 * If true, add small squares of color representing the CMYK 
			 * inks and tints of gray in 10% increments.
			 * @type {boolean}
			 */
			public colorBars: boolean;
			/**
			 * The amount of bitmap compression to use.
			 * @type {Adobe.Indesign.BitmapCompression}
			 */
			public colorBitmapCompression: Adobe.Indesign.BitmapCompression;
			/**
			 * The compression option to apply to color images.
			 * @type {Adobe.Indesign.CompressionQuality}
			 */
			public colorBitmapQuality: Adobe.Indesign.CompressionQuality;
			/**
			 * The sampling option to apply to color bitmap images in the 
			 * PDF document.
			 * @type {Adobe.Indesign.Sampling}
			 */
			public colorBitmapSampling: Adobe.Indesign.Sampling;
			/**
			 * The ppi of the resampled image. (Range: 9 to 2400)
			 * @type {number}
			 */
			public colorBitmapSamplingDPI: number;
			/**
			 * The tile size for color images. Valid only when color bitmap 
			 * compression is JPEG 2000. (Range: 128 to 2048)
			 * @type {number}
			 */
			public colorTileSize: number;
			/**
			 * The objects to compress in the PDF document.
			 * @type {Adobe.Indesign.PDFCompressionType}
			 */
			public compressionType: Adobe.Indesign.PDFCompressionType;
			/**
			 * If true, compresses text and line art using ZIP compression.
			 * @type {boolean}
			 */
			public compressTextAndLineArt: boolean;
			/**
			 * If true, image data that falls outside the visible portion 
			 * of an image's frame is not exported to the PDF document.
			 * @type {boolean}
			 */
			public cropImagesToFrames: boolean;
			/**
			 * Prints crop marks that define where the page should be 
			 * trimmed.
			 * @type {boolean}
			 */
			public cropMarks: boolean;
			/**
			 * Effective PDF/X OC Registry.
			 * @type {string}
			 * @readonly
			 */
			public readonly effectiveOCRegistry: string;
			/**
			 * Effective PDF/X output condition.
			 * @type {string}
			 * @readonly
			 */
			public readonly effectiveOutputCondition: string;
			/**
			 * Effective destination color profile. Can return: 
			 * PDFProfileSelector enumerator or String.
			 * @type {any}
			 * @readonly
			 */
			public readonly effectivePDFDestinationProfile: any;
			/**
			 * Effective PDF X color profile. Can return: 
			 * PDFProfileSelector enumerator or String.
			 * @type {any}
			 * @readonly
			 */
			public readonly effectivePDFXProfile: any;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Indesign.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Indesign.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * If true, includes visible guides and baseline grids in the 
			 * PDF document.
			 * @type {boolean}
			 */
			public exportGuidesAndGrids: boolean;
			/**
			 * If true, saves each layer as an Acrobat layer within the PDF 
			 * document.
			 * @type {boolean}
			 */
			public exportLayers: boolean;
			/**
			 * If true, makes non-printing objects visible in the PDF 
			 * document.
			 * @type {boolean}
			 */
			public exportNonprintingObjects: boolean;
			/**
			 * If true, each spread in the exported document is combined 
			 * into a single page that has spread's original width.
			 * @type {boolean}
			 */
			public exportReaderSpreads: boolean;
			/**
			 * Which layers to export.
			 * @type {Adobe.Indesign.ExportLayerOptions}
			 */
			public exportWhichLayers: Adobe.Indesign.ExportLayerOptions;
			/**
			 * The full path to the PDFExportPreset, including the name of 
			 * the PDFExportPreset.
			 * @type {File}
			 * @readonly
			 */
			public readonly fullName: File;
			/**
			 * If true, generates thumbnail images for each page or spread.
			 * @type {boolean}
			 */
			public generateThumbnails: boolean;
			/**
			 * The bitmap compression option to apply to grayscale bitmap 
			 * images.
			 * @type {Adobe.Indesign.BitmapCompression}
			 */
			public grayscaleBitmapCompression: Adobe.Indesign.BitmapCompression;
			/**
			 * The compression option to apply to grayscale bitmap images.
			 * @type {Adobe.Indesign.CompressionQuality}
			 */
			public grayscaleBitmapQuality: Adobe.Indesign.CompressionQuality;
			/**
			 * The sampling option to apply to grayscale bitmap images.
			 * @type {Adobe.Indesign.Sampling}
			 */
			public grayscaleBitmapSampling: Adobe.Indesign.Sampling;
			/**
			 * The ppi of the resampled image. (Range: 9 to 2400)
			 * @type {number}
			 */
			public grayscaleBitmapSamplingDPI: number;
			/**
			 * The tile size for grayscale images. Valid only when 
			 * grayscale bitmap compression is JPEG 2000. (Range: 128 to 
			 * 2048)
			 * @type {number}
			 */
			public grayTileSize: number;
			/**
			 * If true, ignores flattener spread overrides.
			 * @type {boolean}
			 */
			public ignoreSpreadOverrides: boolean;
			/**
			 * If true, displays bookmarks and table of contents entries as 
			 * links in the bookmarks pane in the PDF document. If false, 
			 * no bookmarks are exported.
			 * @type {boolean}
			 */
			public includeBookmarks: boolean;
			/**
			 * If true, includes hyperlinks when exporting the document.
			 * @type {boolean}
			 */
			public includeHyperlinks: boolean;
			/**
			 * The ICC Profiles to include in the exported PDF document. 
			 * Can also accept: Boolean.
			 * @type {Adobe.Indesign.ICCProfiles}
			 */
			public includeICCProfiles: Adobe.Indesign.ICCProfiles;
			/**
			 * If true, includes the document's slug area in the PDF 
			 * document.
			 * @type {boolean}
			 */
			public includeSlugWithPDF: boolean;
			/**
			 * If true, creates a tagged PDF file. Note: If acrobat 
			 * compatibility is acrobat 6 or higher, tags are visible only 
			 * when the PDF is opened in Acrobat 6 or higher.
			 * @type {boolean}
			 */
			public includeStructure: boolean;
			/**
			 * The index of the PDFExportPreset within its containing 
			 * object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * How to draw interactive elements.
			 * @type {Adobe.Indesign.InteractiveElementsOptions}
			 */
			public interactiveElementsOption: Adobe.Indesign.InteractiveElementsOptions;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The bitmap compression option to apply to monochrome bitmap 
			 * images.
			 * @type {Adobe.Indesign.MonoBitmapCompression}
			 */
			public monochromeBitmapCompression: Adobe.Indesign.MonoBitmapCompression;
			/**
			 * The sampling option to apply to monochrome bitmap images.
			 * @type {Adobe.Indesign.Sampling}
			 */
			public monochromeBitmapSampling: Adobe.Indesign.Sampling;
			/**
			 * The ppi of the resampled image. (Range: 9 to 2400)
			 * @type {number}
			 */
			public monochromeBitmapSamplingDPI: number;
			/**
			 * The name of the PDFExportPreset.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The web address for the output condition registry. Not valid 
			 * when PDF/X-3 is the compliance standard or PDF export 
			 * preset.
			 * @type {string}
			 */
			public ocRegistry: string;
			/**
			 * If true, replaces bitmap images with OPI links.
			 * @type {boolean}
			 */
			public omitBitmaps: boolean;
			/**
			 * If true, replaces EPS images with OPI links.
			 * @type {boolean}
			 */
			public omitEPS: boolean;
			/**
			 * If true, replaces PDF images with OPI links.
			 * @type {boolean}
			 */
			public omitPDF: boolean;
			/**
			 * If true, optimizes the exported PDF document for faster 
			 * viewing in a web browser. Note: Compresses text and line 
			 * art, regardless of specified compression settings.
			 * @type {boolean}
			 */
			public optimizePDF: boolean;
			/**
			 * The name of the intended printing condition. Valid only when 
			 * a PDF/X compliance standard has been defined for the 
			 * document. Not valid when PDF/X-3 is the compliance standard 
			 * or PDF export preset. For information on compliance 
			 * standards, see standards compliance and PDF X standards.
			 * @type {string}
			 */
			public outputCondition: string;
			/**
			 * The name of the output condition. Valid only when a PDF/X 
			 * standard has been defined for the document.
			 * @type {string}
			 */
			public outputConditionName: string;
			/**
			 * If true, prints the filename, page number, current date and 
			 * time, and color separation name.
			 * @type {boolean}
			 */
			public pageInformationMarks: boolean;
			/**
			 * The offset from the edge of the page for page marks.
			 * @type {any}
			 */
			public pageMarksOffset: any;
			/**
			 * The parent of the PDFExportPreset (a Application).
			 * @type {Adobe.Indesign.Application}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * The color space to use to represent color information in the 
			 * exported PDF document.
			 * @type {Adobe.Indesign.PDFColorSpace}
			 */
			public pdfColorSpace: Adobe.Indesign.PDFColorSpace;
			/**
			 * The gamut of the final RGB or CMYK device. Can return: 
			 * PDFProfileSelector enumerator or String.
			 * @type {any}
			 */
			public pdfDestinationProfile: any;
			/**
			 * The type of printer marks, either an enum value or the name 
			 * of a custom marks file. Can return: MarkTypes enumerator or 
			 * String.
			 * @type {any}
			 */
			public pdfMarkType: any;
			/**
			 * The PDF X color profile to use for the PDF document. . Can 
			 * return: PDFProfileSelector enumerator or String.
			 * @type {any}
			 */
			public pdfXProfile: any;
			/**
			 * The stroke weight for printer's marks.
			 * @type {Adobe.Indesign.PDFMarkWeight}
			 */
			public printerMarkWeight: Adobe.Indesign.PDFMarkWeight;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * If true, prints small targets outside the page area for 
			 * aligning color separations.
			 * @type {boolean}
			 */
			public registrationMarks: boolean;
			/**
			 * If true, simulates the effects of overprinting spot inks 
			 * with different neutral density values by converting spot 
			 * colors to process colors for printing. Note: Not valid when 
			 * the color output mode is defined to leave color profiles 
			 * unchanged.
			 * @type {boolean}
			 */
			public simulateOverprint: boolean;
			/**
			 * The PDF/X standards compliance to test against.
			 * @type {Adobe.Indesign.PDFXStandards}
			 */
			public standardsCompliance: Adobe.Indesign.PDFXStandards;
			/**
			 * Sets the threshold for embedding complete fonts based on how 
			 * many of the fonts' characters are used in the document. If 
			 * the percentage of characters used in the document for any 
			 * given font exceeds the specified value, the font is 
			 * completely embedded; otherwise, the font is subsetted. 
			 * (Range: 0 to 100) Notes: Embedding complete fonts increases 
			 * file size. To completely embed all fonts, use 0 (zero).
			 * @type {number}
			 */
			public subsetFontsBelow: number;
			/**
			 * The minimum dpi at which color compression is applied. 
			 * (Range: 1 to 10 times the value specified for color bitmap 
			 * sampling DPI.)
			 * @type {number}
			 */
			public thresholdToCompressColor: number;
			/**
			 * The minimum dpi at which grayscale compression is applied. 
			 * (Range: 1 to 10 times the value specified for grayscale 
			 * bitmap sampling DPI.)
			 * @type {number}
			 */
			public thresholdToCompressGray: number;
			/**
			 * The minimum dpi at which monochrome compression is applied. 
			 * (Range: 1 to 10 times the value specified for monochrome 
			 * bitmap sampling DPI.)
			 * @type {number}
			 */
			public thresholdToCompressMonochrome: number;
			/**
			 * If true, uses the document's bleed settings in the PDF 
			 * document.
			 * @type {boolean}
			 */
			public useDocumentBleedWithPDF: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerPDFExportPreset(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Duplicates the PDFExportPreset.
			 * @returns {Adobe.Indesign.PDFExportPreset}
			 */
			public duplicate(): Adobe.Indesign.PDFExportPreset;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Deletes the PDFExportPreset.
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerPDFExportPreset(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}