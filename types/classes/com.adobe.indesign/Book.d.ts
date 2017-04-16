/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Book extends Adobe.Csawlib.CSHostObject {
			/**
			 * If true, automatically converts the book content object 
			 * during repagination and synchronization.
			 * @type {boolean}
			 */
			public automaticDocumentConversion: boolean;
			/**
			 * If true, automatically updates page numbers when pages in 
			 * book content files are added, deleted, or rearranged.
			 * @type {boolean}
			 */
			public automaticPagination: boolean;
			/**
			 * A collection of book content objects.
			 * @type {Adobe.Indesign.BookContents}
			 * @readonly
			 */
			public readonly bookContents: Adobe.Indesign.BookContents;
			/**
			 * EPub export preference settings.
			 * @type {Adobe.Indesign.EPubExportPreference}
			 * @readonly
			 */
			public readonly epubExportPreferences: Adobe.Indesign.EPubExportPreference;
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
			 * The full path to the file.
			 * @type {File}
			 * @readonly
			 */
			public readonly filePath: File;
			/**
			 * The full path to the Book, including the name of the Book.
			 * @type {File}
			 * @readonly
			 */
			public readonly fullName: File;
			/**
			 * The index of the Book within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * If true, inserts a blank page as necessary to fill in page 
			 * number gaps caused by the odd or even specification set in 
			 * the repagination option.
			 * @type {boolean}
			 */
			public insertBlankPage: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * If true, merges identically named layers when exporting to 
			 * PDF.
			 * @type {boolean}
			 */
			public mergeIdenticalLayers: boolean;
			/**
			 * If true, the Book has been modified since it was last saved.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly modified: boolean;
			/**
			 * The name of the Book.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The parent of the Book (a Application).
			 * @type {Adobe.Indesign.Application}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * A collection of preferences objects.
			 * @type {Adobe.Indesign.Preferences}
			 * @readonly
			 */
			public readonly preferences: Adobe.Indesign.Preferences;
			/**
			 * Preflight book option settings.
			 * @type {Adobe.Indesign.PreflightBookOption}
			 * @readonly
			 */
			public readonly preflightBookOptions: Adobe.Indesign.PreflightBookOption;
			/**
			 * Print preference settings.
			 * @type {Adobe.Indesign.PrintPreference}
			 * @readonly
			 */
			public readonly printPreferences: Adobe.Indesign.PrintPreference;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * Page numbering options for book content objects within the 
			 * book.
			 * @type {Adobe.Indesign.RepaginateOption}
			 */
			public repaginationOption: Adobe.Indesign.RepaginateOption;
			/**
			 * If true, the Book has been saved since it was created.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly saved: boolean;
			/**
			 * How to match styles with same name while synchronizing a 
			 * book.
			 * @type {Adobe.Indesign.SmartMatchOptions}
			 */
			public smartMatchStyleGroups: Adobe.Indesign.SmartMatchOptions;
			/**
			 * Current style source document. Can return: Document or 
			 * BookContent.
			 * @type {any}
			 */
			public styleSourceDocument: any;
			/**
			 * If true, synchronize bullets and numbering.
			 * @type {boolean}
			 */
			public synchronizeBulletNumberingList: boolean;
			/**
			 * If true, synchronize cell styles.
			 * @type {boolean}
			 */
			public synchronizeCellStyle: boolean;
			/**
			 * If true, synchronize character styles.
			 * @type {boolean}
			 */
			public synchronizeCharacterStyle: boolean;
			/**
			 * If true, synchronize conditional text.
			 * @type {boolean}
			 */
			public synchronizeConditionalText: boolean;
			/**
			 * If true, synchronize master pages.
			 * @type {boolean}
			 */
			public synchronizeMasterPage: boolean;
			/**
			 * If true, synchronize object styles.
			 * @type {boolean}
			 */
			public synchronizeObjectStyle: boolean;
			/**
			 * If true, synchronize paragraph styles.
			 * @type {boolean}
			 */
			public synchronizeParagraphStyle: boolean;
			/**
			 * If true, synchronize swatches.
			 * @type {boolean}
			 */
			public synchronizeSwatch: boolean;
			/**
			 * If true, synchronize table of content styles.
			 * @type {boolean}
			 */
			public synchronizeTableOfContentStyle: boolean;
			/**
			 * If true, synchronize table styles.
			 * @type {boolean}
			 */
			public synchronizeTableStyle: boolean;
			/**
			 * If true, synchronize text variables.
			 * @type {boolean}
			 */
			public synchronizeTextVariable: boolean;
			/**
			 * If true, synchronize trap styles.
			 * @type {boolean}
			 */
			public synchronizeTrapStyle: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerBook(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Close the Book
			 * @param {SaveOptions} savingParam Whether to save changes 
			 * before closing the Book (Optional)
			 * @param {File} savingInParam The file in which to save the 
			 * Book (Optional)
			 * @param {string} versionCommentsParam The comment for this 
			 * version (Optional)
			 * @param {boolean} forceSaveParam Forcibly save a version 
			 * (Optional)
			 * @returns {void}
			 */
			public close(savingParam: SaveOptions, savingInParam: File, versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Exports the book to a file.
			 * @param {any} formatParam The export format, specified as an 
			 * enumeration value or as an extension that appears in the 
			 * Save as type or Format menu in the Export dialog. Can 
			 * accept: ExportFormat enumerator or String.
			 * @param {File} toParam The file to which to export the book. 
			 * (Optional)
			 * @param {boolean} showingOptionsParam Used to specify if the 
			 * PDF Export Options Dialog needs to be shown or not 
			 * (Optional)
			 * @param {PDFExportPreset} usingParam Used to specify the 
			 * presets for the export which can be the object of the preset 
			 * type, enumeration for existing presets or user defined 
			 * presets, or a string naming the preset to be used, but in 
			 * case Showing Options is true, the preset specified in the 
			 * Export Dialog will over ride this parameter (Optional)
			 * @param {any[]} whichDocumentsParam Used to specify a list of 
			 * book content references, from the current book, where the 
			 * list may contain duplicate entries and if the list is not 
			 * specified then the entire book contents shall be exported 
			 * (Optional)
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {void}
			 */
			public exportFile(formatParam: any, toParam: File, showingOptionsParam: boolean, usingParam: PDFExportPreset, whichDocumentsParam: any[], versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 * @returns {string}
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Packages the document.
			 * @param {File} toParam The folder, alias, or path in which to 
			 * place the packaged files.
			 * @param {boolean} copyingFontsParam If true, copies fonts 
			 * used in the document to the package folder.
			 * @param {boolean} copyingLinkedGraphicsParam If true, copies 
			 * linked graphics files to the package folder.
			 * @param {boolean} copyingProfilesParam If true, copies color 
			 * profiles to the package folder.
			 * @param {boolean} updatingGraphicsParam If true, updates 
			 * graphics links to the package folder. 
			 * @param {boolean} includingHiddenLayersParam If true, copies 
			 * fonts and links from hidden layers to the package.
			 * @param {boolean} ignorePreflightErrorsParam If true, ignores 
			 * preflight errors and proceeds with the packaging. If false, 
			 * cancels the packaging when errors exist.
			 * @param {boolean} creatingReportParam If true, creates a 
			 * package report that includes printing instructions, print 
			 * settings, lists of fonts, links and required inks, and other 
			 * information.
			 * @param {string} versionCommentsParam The comments for the 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {boolean}
			 */
			public packageForPrint(toParam: File, copyingFontsParam: boolean, copyingLinkedGraphicsParam: boolean, copyingProfilesParam: boolean, updatingGraphicsParam: boolean, includingHiddenLayersParam: boolean, ignorePreflightErrorsParam: boolean, creatingReportParam: boolean, versionCommentsParam: string, forceSaveParam: boolean): boolean;
			/**
			 * Preflight a book and optionally save the resulting report.
			 * @param {File} toParam The preflight report to save to. 
			 * (Optional)
			 * @param {boolean} autoOpenParam If true, automatically open 
			 * the report after creation. (Optional)
			 * @returns {void}
			 */
			public preflight(toParam: File, autoOpenParam: boolean): void;
			/**
			 * Prints the Book(s).
			 * @param {boolean} printDialogParam Whether to invoke the 
			 * print dialog (Optional)
			 * @param {any} usingParam Printer preset to use. Can accept: 
			 * PrinterPresetTypes enumerator or PrinterPreset. (Optional)
			 * @returns {void}
			 */
			public print(printDialogParam: boolean, usingParam: any): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerBook(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Repaginates the book.
			 * @returns {void}
			 */
			public repaginate(): void;
			/**
			 * Saves the book.
			 * @param {File} toParam The file path. Note: Required only if 
			 * the book has not been previously saved. If the book has 
			 * previously been saved, specifying a path saves a copy and 
			 * closes the original book. (Optional)
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {void}
			 */
			public save(toParam: File, versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Synchronizes the entire book to the style source document.
			 * @returns {void}
			 */
			public synchronize(): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
			/**
			 * Updates the cross references in the entire book.
			 * @returns {void}
			 */
			public updateAllCrossReferences(): void;
			/**
			 * Update all numbers (e.g. Page numbers, chapter numbers and 
			 * paragraph numbers) throughout the book.
			 * @returns {void}
			 */
			public updateAllNumbers(): void;
			/**
			 * Updates chapter numbers and paragraph numbers throughout the 
			 * book.
			 * @returns {void}
			 */
			public updateChapterAndParagraphNumbers(): void;
		}
	}
}