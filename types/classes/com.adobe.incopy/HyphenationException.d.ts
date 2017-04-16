/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class HyphenationException extends Adobe.Csawlib.CSHostObject {
			/**
			 * A list of words added to the hyphenation exceptions list.
			 * @type {any}
			 */
			public addedExceptions: any;
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
			 * The index of the HyphenationException within its containing 
			 * object.
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
			 * The name of the HyphenationException.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The parent of the HyphenationException (a Document).
			 * @type {Adobe.Incopy.Document}
			 * @readonly
			 */
			public readonly parent: Adobe.Incopy.Document;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * A list of words removed from the hyphenation exceptions 
			 * list.
			 * @type {any}
			 */
			public removedExceptions: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerHyphenationException(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Adds the specified words to the hyphenation exceptions list.
			 * @param {any[]} addedExceptionsParam The list of words to 
			 * add.
			 * @param {boolean} removedListParam If true, adds the words to 
			 * the removed exceptions list. If false or unspecified, adds 
			 * the words to the added exceptions list. (Optional)
			 * @returns {void}
			 */
			public addException(addedExceptionsParam: any[], removedListParam: boolean): void;
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
			public removeEventListenerHyphenationException(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Removes the specified words from the hyphenation exceptions 
			 * list.
			 * @param {any[]} removedExceptionsParam The list of words to 
			 * remove.
			 * @param {boolean} removedListParam If true, removes the words 
			 * from the removed exceptions list. If false or unspecified, 
			 * adds the words to the added exceptions list. (Optional)
			 * @returns {void}
			 */
			public removeException(removedExceptionsParam: any[], removedListParam: boolean): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}