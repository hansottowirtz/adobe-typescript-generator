/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TOCStyle extends Adobe.Csawlib.CSHostObject {
			/**
			 * If true, creates bookmarks for TOC entries.
			 * @type {boolean}
			 */
			public createBookmarks: boolean;
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
			 * The unique ID of the TOCStyle.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * If true, includes the entire book in the TOC. If false, 
			 * includes only the TOC entries in the current document. Note: 
			 * Valid when the current document is part of a book.
			 * @type {boolean}
			 */
			public includeBookDocuments: boolean;
			/**
			 * If true, the TOC includes entries from text on hidden 
			 * layers.
			 * @type {boolean}
			 */
			public includeHidden: boolean;
			/**
			 * The index of the TOCStyle within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
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
			 * The name of the TOCStyle.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The format for importing numbered paragraphs into the TOC.
			 * @type {Adobe.Indesign.NumberedParagraphsOptions}
			 */
			public numberedParagraphs: Adobe.Indesign.NumberedParagraphsOptions;
			/**
			 * The parent of the TOCStyle (a Document).
			 * @type {Adobe.Indesign.Document}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Document;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * If true, the lowest-level TOC entries are placed on the same 
			 * line as the previous entry.
			 * @type {boolean}
			 */
			public runIn: boolean;
			/**
			 * The table of contents story direction.
			 * @type {Adobe.Indesign.HorizontalOrVertical}
			 */
			public setStoryDirection: Adobe.Indesign.HorizontalOrVertical;
			/**
			 * The TOC title.
			 * @type {string}
			 */
			public title: string;
			/**
			 * The paragraph style applied to the TOC title.
			 * @type {Adobe.Indesign.ParagraphStyle}
			 */
			public titleStyle: Adobe.Indesign.ParagraphStyle;
			/**
			 * A collection TOC style entries.
			 * @type {Adobe.Indesign.TOCStyleEntries}
			 * @readonly
			 */
			public readonly tocStyleEntries: Adobe.Indesign.TOCStyleEntries;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerTOCStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Duplicates the TOCStyle.
			 * @returns {Adobe.Indesign.TOCStyle}
			 */
			public duplicate(): Adobe.Indesign.TOCStyle;
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
			 * Deletes the TOCStyle.
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
			public removeEventListenerTOCStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}