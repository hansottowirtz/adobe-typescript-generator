/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class PDFLayoutExportPreference extends Adobe.Incopy.Preference {
			/** The exported PDF document's Acrobat compatibility. */
			public acrobatCompatibility: Adobe.Incopy.AcrobatCompatibility;
			/**
			 * Changes the open document password to the specified string. 
			 * Valid only when use security is true. Note: A script can set 
			 * but not get this value.
			 */
			public changeSecurityPassword: string;
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
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * If true, each spread in the exported document is combined 
			 * into a single page that has spread's original width.
			 */
			public exportReaderSpreads: boolean;
			/**
			 * If true, generates thumbnail images for each page or spread.
			 */
			public generateThumbnails: boolean;
			/**
			 * If true, includes inline notes in the exported PDF document.
			 */
			public includeNotes: boolean;
			/** How to draw interactive elements. */
			public interactiveElementsOption: Adobe.Incopy.InteractiveElementsOptions;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
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
			 * If true, adds crop marks, bleed marks, and other printer's 
			 * marks to the exported PDF document.
			 */
			public pageInformationMarks: boolean;
			/**
			 * The pages to print, specified either as an enumeration or a 
			 * string. To specify a range, separate page numbers in the 
			 * string with a hyphen (-). To specify separate pages, 
			 * separate page numbers in the string with a comma (,). Can 
			 * return: PageRange enumerator or String.
			 */
			public pageRange: any;
			/**
			 * The parent of the PDFLayoutExportPreference (a Application).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
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
			/** If true, activates security controls for the PDF document. */
			public useSecurity: boolean;
			/** If true, automatically opens the PDF file after exporting. */
			public viewPDF: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerPDFLayoutExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerPDFLayoutExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}