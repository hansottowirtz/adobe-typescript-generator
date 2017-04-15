/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class InteractivePDFExportPreference extends Adobe.Indesign.Preference {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * If true, saves each layer as an Acrobat layer within the PDF 
			 * document.
			 */
			public exportLayers: boolean;
			/**
			 * If true, each spread in the exported document is combined 
			 * into a single page that has spread's original width.
			 */
			public exportReaderSpreads: boolean;
			/** Automatically flip pages in the exported PDF. */
			public flipPages: boolean;
			/** The speed that the pages flip. */
			public flipPagesSpeed: number;
			/**
			 * If true, generates thumbnail images for each page or spread.
			 */
			public generateThumbnails: boolean;
			/**
			 * If true, creates a tagged PDF file. Note: If acrobat 
			 * compatibility is acrobat 6 or higher, tags are visible only 
			 * when the PDF is opened in Acrobat 6 or higher.
			 */
			public includeStructure: boolean;
			/** How to draw interactive elements. */
			public interactivePDFInteractiveElementsOption: Adobe.Indesign.InteractivePDFInteractiveElementsOptions;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** Open PDF in full screen mode. */
			public openInFullScreen: boolean;
			/**
			 * The pages to print, specified either as an enumeration or a 
			 * string. To specify a range, separate page numbers in the 
			 * string with a hyphen (-). To specify separate pages, 
			 * separate page numbers in the string with a comma (,). Can 
			 * return: PageRange enumerator or String.
			 */
			public pageRange: any;
			/** The name of the page transition to use for all pages. */
			public pageTransitionOverride: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * The parent of the InteractivePDFExportPreference (a 
			 * Application).
			 */
			public readonly parent: any;
			/** The PDF JPEG quality options. */
			public pdfJPEGQuality: Adobe.Indesign.PDFJPEGQualityOptions;
			/** The export PDF magnification options. */
			public pdfMagnification: Adobe.Indesign.PdfMagnificationOptions;
			/** The export PDF page layout. */
			public pdfPageLayout: Adobe.Indesign.PageLayoutOptions;
			/** The PDF raster compression options. */
			public pdfRasterCompression: Adobe.Indesign.PDFRasterCompressionOptions;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The raster resolution. Can return: RasterResolutionOptions 
			 * enumerator or Long Integer (72 - 300).
			 */
			public rasterResolution: any;
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
			public addEventListenerInteractivePDFExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerInteractivePDFExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}