/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PDFExportPreference extends Adobe.Indesign.Preference {
			/** The exported PDF document's Acrobat compatibility. */
			public acrobatCompatibility: Adobe.Indesign.AcrobatCompatibility;
			/** The transparency flattener preset to use. */
			public appliedFlattenerPreset: Adobe.Indesign.FlattenerPreset;
			/**
			 * The height of the bleed area at the bottom of the page. 
			 * Note: Valid only when use document bleed to print is true.
			 */
			public bleedBottom: any;
			/**
			 * The width of the bleed area at the inside of the page. Note: 
			 * Valid only when use document bleed to print is true.
			 */
			public bleedInside: any;
			/** If true, print bleed marks. */
			public bleedMarks: boolean;
			/**
			 * The width of the bleed area at the outside of the page. 
			 * Note: Valid only when use document bleed to print is true.
			 */
			public bleedOutside: any;
			/**
			 * The height of the bleed area at the top of the page. Note: 
			 * Valid only when use document bleed to print is true.
			 */
			public bleedTop: any;
			/**
			 * Changes the open document password to the specified string. 
			 * Valid only when use security is true. Note: A script can set 
			 * but not get this value.
			 */
			public changeSecurityPassword: string;
			/**
			 * If true, add small squares of color representing the CMYK 
			 * inks and tints of gray in 10% increments.
			 */
			public colorBars: boolean;
			/** The amount of bitmap compression to use. */
			public colorBitmapCompression: Adobe.Indesign.BitmapCompression;
			/** The compression option to apply to color images. */
			public colorBitmapQuality: Adobe.Indesign.CompressionQuality;
			/**
			 * The sampling option to apply to color bitmap images in the 
			 * PDF document.
			 */
			public colorBitmapSampling: Adobe.Indesign.Sampling;
			/** The ppi of the resampled image. (Range: 9 to 2400) */
			public colorBitmapSamplingDPI: number;
			/**
			 * The tile size for color images. Valid only when color bitmap 
			 * compression is JPEG 2000. (Range: 128 to 2048)
			 */
			public colorTileSize: number;
			/** The objects to compress in the PDF document. */
			public compressionType: Adobe.Indesign.PDFCompressionType;
			/**
			 * If true, compresses text and line art using ZIP compression.
			 */
			public compressTextAndLineArt: boolean;
			/**
			 * If true, image data that falls outside the visible portion 
			 * of an image's frame is not exported to the PDF document.
			 */
			public cropImagesToFrames: boolean;
			/**
			 * Prints crop marks that define where the page should be 
			 * trimmed.
			 */
			public cropMarks: boolean;
			/**
			 * If true, users cannot fill in forms, sign, extract pages, or 
			 * add comments in the PDF document. Valid only when use 
			 * security is true.
			 */
			public disallowChanging: boolean;
			/**
			 * If true, users cannot copy and paste text, images, or other 
			 * content from the PDF document. Valid only when use security 
			 * is true.
			 */
			public disallowCopying: boolean;
			/**
			 * If true, users cannot insert, delete, or rotate pages in the 
			 * PDF document. Valid only when use security is true.
			 */
			public disallowDocumentAssembly: boolean;
			/**
			 * If true, users cannot extract content from the PDF document 
			 * using software tools for the visually impaired. Valid only 
			 * when use security is true.
			 */
			public disallowExtractionForAccessibility: boolean;
			/**
			 * If true, users cannot change form fields in the PDF 
			 * document. Valid only when use security is true.
			 */
			public disallowFormFillIn: boolean;
			/**
			 * If true, users cannot print high-resolution copies of the 
			 * PDF document. Valid only when use security is true.
			 */
			public disallowHiResPrinting: boolean;
			/**
			 * If true, users cannot add or change notes, edit text, or 
			 * fill in form fields in the PDF document. Valid only when use 
			 * security is true.
			 */
			public disallowNotes: boolean;
			/**
			 * If true and acrobat compatibility is Acrobat 6 or higher, 
			 * storage systems and search engines cannot access metadata 
			 * stored in the PDF document. If true and acrobat 
			 * compatibility is acrobat 5 or higher, users cannot copy and 
			 * extract content from the document. Valid only when use 
			 * security is true.
			 */
			public disallowPlaintextMetadata: boolean;
			/**
			 * If true, users cannot print the PDF document. Valid only 
			 * when use security is true.
			 */
			public disallowPrinting: boolean;
			/** Effective PDF/X OC Registry. */
			public readonly effectiveOCRegistry: string;
			/** Effective PDF/X output condition. */
			public readonly effectiveOutputCondition: string;
			/**
			 * Effective destination color profile. Can return: 
			 * PDFProfileSelector enumerator or String.
			 */
			public readonly effectivePDFDestinationProfile: any;
			/**
			 * Effective PDF X color profile. Can return: 
			 * PDFProfileSelector enumerator or String.
			 */
			public readonly effectivePDFXProfile: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * If true, includes visible guides and baseline grids in the 
			 * PDF document.
			 */
			public exportGuidesAndGrids: boolean;
			/**
			 * If true, saves each layer as an Acrobat layer within the PDF 
			 * document.
			 */
			public exportLayers: boolean;
			/**
			 * If true, makes non-printing objects visible in the PDF 
			 * document.
			 */
			public exportNonprintingObjects: boolean;
			/**
			 * If true, each spread in the exported document is combined 
			 * into a single page that has spread's original width.
			 */
			public exportReaderSpreads: boolean;
			/** Which layers to export. */
			public exportWhichLayers: Adobe.Indesign.ExportLayerOptions;
			/**
			 * If true, generates thumbnail images for each page or spread.
			 */
			public generateThumbnails: boolean;
			/**
			 * The bitmap compression option to apply to grayscale bitmap 
			 * images.
			 */
			public grayscaleBitmapCompression: Adobe.Indesign.BitmapCompression;
			/** The compression option to apply to grayscale bitmap images. */
			public grayscaleBitmapQuality: Adobe.Indesign.CompressionQuality;
			/** The sampling option to apply to grayscale bitmap images. */
			public grayscaleBitmapSampling: Adobe.Indesign.Sampling;
			/** The ppi of the resampled image. (Range: 9 to 2400) */
			public grayscaleBitmapSamplingDPI: number;
			/**
			 * The tile size for grayscale images. Valid only when 
			 * grayscale bitmap compression is JPEG 2000. (Range: 128 to 
			 * 2048)
			 */
			public grayTileSize: number;
			/** If true, ignores flattener spread overrides. */
			public ignoreSpreadOverrides: boolean;
			/**
			 * If true, displays bookmarks and table of contents entries as 
			 * links in the bookmarks pane in the PDF document. If false, 
			 * no bookmarks are exported.
			 */
			public includeBookmarks: boolean;
			/** If true, includes hyperlinks when exporting the document. */
			public includeHyperlinks: boolean;
			/**
			 * The ICC Profiles to include in the exported PDF document. 
			 * Can also accept: Boolean.
			 */
			public includeICCProfiles: Adobe.Indesign.ICCProfiles;
			/**
			 * If true, includes the document's slug area in the PDF 
			 * document.
			 */
			public includeSlugWithPDF: boolean;
			/**
			 * If true, creates a tagged PDF file. Note: If acrobat 
			 * compatibility is acrobat 6 or higher, tags are visible only 
			 * when the PDF is opened in Acrobat 6 or higher.
			 */
			public includeStructure: boolean;
			/** How to draw interactive elements. */
			public interactiveElementsOption: Adobe.Indesign.InteractiveElementsOptions;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The bitmap compression option to apply to monochrome bitmap 
			 * images.
			 */
			public monochromeBitmapCompression: Adobe.Indesign.MonoBitmapCompression;
			/** The sampling option to apply to monochrome bitmap images. */
			public monochromeBitmapSampling: Adobe.Indesign.Sampling;
			/** The ppi of the resampled image. (Range: 9 to 2400) */
			public monochromeBitmapSamplingDPI: number;
			/**
			 * The web address for the output condition registry. Not valid 
			 * when PDF/X-3 is the compliance standard or PDF export 
			 * preset.
			 */
			public ocRegistry: string;
			/** If true, replaces bitmap images with OPI links. */
			public omitBitmaps: boolean;
			/** If true, replaces EPS images with OPI links. */
			public omitEPS: boolean;
			/** If true, replaces PDF images with OPI links. */
			public omitPDF: boolean;
			/**
			 * The password to enter when opening the PDF document. Valid 
			 * only when use security is true. Note: A script can set but 
			 * not get this value.
			 */
			public openDocumentPassword: string;
			/**
			 * If true, optimizes the exported PDF document for faster 
			 * viewing in a web browser. Note: Compresses text and line 
			 * art, regardless of specified compression settings.
			 */
			public optimizePDF: boolean;
			/**
			 * The name of the intended printing condition. Valid only when 
			 * a PDF/X compliance standard has been defined for the 
			 * document. Not valid when PDF/X-3 is the compliance standard 
			 * or PDF export preset. For information on compliance 
			 * standards, see standards compliance and PDF X standards.
			 */
			public outputCondition: string;
			/**
			 * The name of the output condition. Valid only when a PDF/X 
			 * standard has been defined for the document.
			 */
			public outputConditionName: string;
			/**
			 * If true, prints the filename, page number, current date and 
			 * time, and color separation name.
			 */
			public pageInformationMarks: boolean;
			/** The offset from the edge of the page for page marks. */
			public pageMarksOffset: any;
			/**
			 * The pages to print, specified either as an enumeration or a 
			 * string. To specify a range, separate page numbers in the 
			 * string with a hyphen (-). To specify separate pages, 
			 * separate page numbers in the string with a comma (,). Can 
			 * return: PageRange enumerator or String.
			 */
			public pageRange: any;
			/** The parent of the PDFExportPreference (a Application). */
			public readonly parent: any;
			/**
			 * The color space to use to represent color information in the 
			 * exported PDF document.
			 */
			public pdfColorSpace: Adobe.Indesign.PDFColorSpace;
			/**
			 * The gamut of the final RGB or CMYK device. Can return: 
			 * PDFProfileSelector enumerator or String.
			 */
			public pdfDestinationProfile: any;
			/**
			 * The type of printer marks, either an enum value or the name 
			 * of a custom marks file. Can return: MarkTypes enumerator or 
			 * String.
			 */
			public pdfMarkType: any;
			/**
			 * The PDF X color profile to use for the PDF document. . Can 
			 * return: PDFProfileSelector enumerator or String.
			 */
			public pdfXProfile: any;
			/** The stroke weight for printer's marks. */
			public printerMarkWeight: Adobe.Indesign.PDFMarkWeight;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * If true, prints small targets outside the page area for 
			 * aligning color separations.
			 */
			public registrationMarks: boolean;
			/**
			 * If true, simulates the effects of overprinting spot inks 
			 * with different neutral density values by converting spot 
			 * colors to process colors for printing. Note: Not valid when 
			 * the color output mode is defined to leave color profiles 
			 * unchanged.
			 */
			public simulateOverprint: boolean;
			/** The PDF/X standards compliance to test against. */
			public standardsCompliance: Adobe.Indesign.PDFXStandards;
			/**
			 * Sets the threshold for embedding complete fonts based on how 
			 * many of the fonts' characters are used in the document. If 
			 * the percentage of characters used in the document for any 
			 * given font exceeds the specified value, the font is 
			 * completely embedded; otherwise, the font is subsetted. 
			 * (Range: 0 to 100) Notes: Embedding complete fonts increases 
			 * file size. To completely embed all fonts, use 0 (zero).
			 */
			public subsetFontsBelow: number;
			/**
			 * The minimum dpi at which color compression is applied. 
			 * (Range: 1 to 10 times the value specified for color bitmap 
			 * sampling DPI.)
			 */
			public thresholdToCompressColor: number;
			/**
			 * The minimum dpi at which grayscale compression is applied. 
			 * (Range: 1 to 10 times the value specified for grayscale 
			 * bitmap sampling DPI.)
			 */
			public thresholdToCompressGray: number;
			/**
			 * The minimum dpi at which monochrome compression is applied. 
			 * (Range: 1 to 10 times the value specified for monochrome 
			 * bitmap sampling DPI.)
			 */
			public thresholdToCompressMonochrome: number;
			/**
			 * If true, uses the document's bleed settings in the PDF 
			 * document.
			 */
			public useDocumentBleedWithPDF: boolean;
			/** If true, activates security controls for the PDF document. */
			public useSecurity: boolean;
			/**
			 * If true, creates a Job Definition Format (JDF) file using 
			 * Acrobat.
			 */
			public viewJDF: boolean;
			/** If true, automatically opens the PDF file after exporting. */
			public viewPDF: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerPDFExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerPDFExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}