/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BookContent extends Adobe.Csawlib.CSHostObject {
			/**
			 * The date and time the BookContent was created.
			 * @type {Date}
			 * @readonly
			 */
			public readonly date: Date;
			/**
			 * The page range of the book content object within the book.
			 * @type {string}
			 * @readonly
			 */
			public readonly documentPageRange: string;
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
			 * The full path to the BookContent, including the name of the 
			 * BookContent.
			 * @type {File}
			 * @readonly
			 */
			public readonly fullName: File;
			/**
			 * The unique ID of the BookContent.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the BookContent within its containing object.
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
			 * The name of the BookContent.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The parent of the BookContent (a Book).
			 * @type {Adobe.Indesign.Book}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Book;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The size of the BookContent file.
			 * @type {number}
			 * @readonly
			 */
			public readonly size: number;
			/**
			 * The status of the book content object file.
			 * @type {Adobe.Indesign.BookContentStatus}
			 * @readonly
			 */
			public readonly status: Adobe.Indesign.BookContentStatus;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerBookContent(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			 * Moves the book content object.
			 * @param {LocationOptions} toParam The location relative to 
			 * the reference object or within the book. (Optional)
			 * @param {BookContent} referenceParam The reference object. 
			 * Note: Required when the to parameter specifies before or 
			 * after. (Optional)
			 * @returns {Adobe.Indesign.BookContent}
			 */
			public move(toParam: LocationOptions, referenceParam: BookContent): Adobe.Indesign.BookContent;
			/**
			 * Preflight a book content object and optionally save the 
			 * resulting report.
			 * @param {File} toParam The preflight report to save to. 
			 * (Optional)
			 * @param {boolean} autoOpenParam If true, automatically open 
			 * the report after creation. (Optional)
			 * @returns {void}
			 */
			public preflight(toParam: File, autoOpenParam: boolean): void;
			/**
			 * Deletes the BookContent.
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
			public removeEventListenerBookContent(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Replaces a book content object with a new file. Note: If the 
			 * new file replaces the current style source document, the new 
			 * file becomes the style source document.
			 * @param {File} usingParam The full path name of the new book 
			 * content object.
			 * @returns {Adobe.Indesign.BookContent}
			 */
			public replace(usingParam: File): Adobe.Indesign.BookContent;
			/**
			 * Matches the formatting of the book content object to the 
			 * style source document.
			 * @returns {void}
			 */
			public synchronize(): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}