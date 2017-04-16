/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class PDFGalleyExportPreference extends Adobe.Incopy.Preference {
			/**
			 * The exported PDF document's Acrobat compatibility.
			 * @type {Adobe.Incopy.AcrobatCompatibility}
			 */
			public acrobatCompatibility: Adobe.Incopy.AcrobatCompatibility;
			/**
			 * The name of the font.
			 * @type {string}
			 */
			public appliedFont: string;
			/**
			 * Changes the open document password to the specified string. 
			 * Valid only when use security is true. Note: A script can set 
			 * but not get this value.
			 * @type {string}
			 */
			public changeSecurityPassword: string;
			/**
			 * If true, users cannot fill in forms, sign, extract pages, or 
			 * add comments in the PDF document. Valid only when use 
			 * security is true.
			 * @type {boolean}
			 */
			public disallowChanging: boolean;
			/**
			 * If true, users cannot copy and paste text, images, or other 
			 * content from the PDF document. Valid only when use security 
			 * is true.
			 * @type {boolean}
			 */
			public disallowCopying: boolean;
			/**
			 * If true, users cannot insert, delete, or rotate pages in the 
			 * PDF document. Valid only when use security is true.
			 * @type {boolean}
			 */
			public disallowDocumentAssembly: boolean;
			/**
			 * If true, users cannot extract content from the PDF document 
			 * using software tools for the visually impaired. Valid only 
			 * when use security is true.
			 * @type {boolean}
			 */
			public disallowExtractionForAccessibility: boolean;
			/**
			 * If true, users cannot change form fields in the PDF 
			 * document. Valid only when use security is true.
			 * @type {boolean}
			 */
			public disallowFormFillIn: boolean;
			/**
			 * If true, users cannot print high-resolution copies of the 
			 * PDF document. Valid only when use security is true.
			 * @type {boolean}
			 */
			public disallowHiResPrinting: boolean;
			/**
			 * If true, users cannot add or change notes, edit text, or 
			 * fill in form fields in the PDF document. Valid only when use 
			 * security is true.
			 * @type {boolean}
			 */
			public disallowNotes: boolean;
			/**
			 * If true and acrobat compatibility is Acrobat 6 or higher, 
			 * storage systems and search engines cannot access metadata 
			 * stored in the PDF document. If true and acrobat 
			 * compatibility is acrobat 5 or higher, users cannot copy and 
			 * extract content from the document. Valid only when use 
			 * security is true.
			 * @type {boolean}
			 */
			public disallowPlaintextMetadata: boolean;
			/**
			 * If true, users cannot print the PDF document. Valid only 
			 * when use security is true.
			 * @type {boolean}
			 */
			public disallowPrinting: boolean;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Incopy.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Incopy.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * The name of the font style.
			 * @type {string}
			 */
			public fontStyle: string;
			/**
			 * If true, exports line endings as they appear in the story.
			 * @type {boolean}
			 */
			public includeAccurateLineEndings: boolean;
			/**
			 * If true, exports all tracked changes. If false, exports only 
			 * visible tracked changes.
			 * @type {boolean}
			 */
			public includeAllChanges: boolean;
			/**
			 * If true, exports both invisible and visible notes. If false, 
			 * exports only visible notes.
			 * @type {boolean}
			 */
			public includeAllNotes: boolean;
			/**
			 * If true, exports all stories. If false, exports only the 
			 * current story.
			 * @type {boolean}
			 */
			public includeAllStories: boolean;
			/**
			 * If true, includes the line numbers column in the exported 
			 * PDF document. Valid only when include accurate line endings 
			 * is true.
			 * @type {boolean}
			 */
			public includeLineNumbers: boolean;
			/**
			 * If true, includes inline notes in the exported PDF document.
			 * @type {boolean}
			 */
			public includeNotes: boolean;
			/**
			 * If true, includes page information in the exported PDF 
			 * document.
			 * @type {boolean}
			 */
			public includePageInfo: boolean;
			/**
			 * If true, includes paragraph style information in the 
			 * exported PDF document.
			 * @type {boolean}
			 */
			public includeParagraphStyles: boolean;
			/**
			 * If true, includes story information including document 
			 * title, author, and description in the exported PDF document.
			 * @type {boolean}
			 */
			public includeStoryInfo: boolean;
			/**
			 * If true, includes tracked changes in the exported PDF 
			 * document.
			 * @type {boolean}
			 */
			public includeTrackedChanges: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The default amount of space as a percentage to include 
			 * between two lines of text. (Range: 100 to 300)
			 * @type {number}
			 */
			public leading: number;
			/**
			 * The lines to export. . Can return: LineRange enumerator or 
			 * String.
			 * @type {any}
			 */
			public lineRange: any;
			/**
			 * The password to enter when opening the PDF document. Valid 
			 * only when use security is true. Note: A script can set but 
			 * not get this value.
			 * @type {string}
			 */
			public openDocumentPassword: string;
			/**
			 * The parent of the PDFGalleyExportPreference (a Application).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The default text size (in points). (Range: 4 to 72).
			 * @type {any}
			 */
			public pointSize: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * If true, exports inline notes in the color assigned to 
			 * individuals on the project. Valid only when include notes is 
			 * true.
			 * @type {boolean}
			 */
			public showNotesBackgroundsInColor: boolean;
			/**
			 * If true, displays tracked changes in the colors assigned to 
			 * each person who made changes. Valid only when include 
			 * tracked changes is true.
			 * @type {boolean}
			 */
			public showTrackedChangesBackgroundsInColor: boolean;
			/**
			 * The width of columns to export. Valid only when include 
			 * accurate line endings is true.
			 * @type {number}
			 */
			public storyColumns: number;
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
			 * If true, activates security controls for the PDF document.
			 * @type {boolean}
			 */
			public useSecurity: boolean;
			/**
			 * If true, automatically opens the PDF file after exporting.
			 * @type {boolean}
			 */
			public viewPDF: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerPDFGalleyExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerPDFGalleyExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}