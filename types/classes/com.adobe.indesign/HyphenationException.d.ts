/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class HyphenationException extends Adobe.Csawlib.CSHostObject {
			/** A list of words added to the hyphenation exceptions list. */
			public addedExceptions: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The index of the HyphenationException within its containing 
			 * object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The name of the HyphenationException. */
			public readonly name: string;
			/** The parent of the HyphenationException (a Document). */
			public readonly parent: Adobe.Indesign.Document;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * A list of words removed from the hyphenation exceptions 
			 * list.
			 */
			public removedExceptions: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerHyphenationException(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Adds the specified words to the hyphenation exceptions list.
			 * @param {any[]} addedExceptionsParam - The list of words to 
			 * add.
			 * @param {boolean} removedListParam - If true, adds the words 
			 * to the removed exceptions list. If false or unspecified, 
			 * adds the words to the added exceptions list. (Optional)
			 */
			public addException(addedExceptionsParam: any[], removedListParam: boolean): void;
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
			public removeEventListenerHyphenationException(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Removes the specified words from the hyphenation exceptions 
			 * list.
			 * @param {any[]} removedExceptionsParam - The list of words to 
			 * remove.
			 * @param {boolean} removedListParam - If true, removes the 
			 * words from the removed exceptions list. If false or 
			 * unspecified, adds the words to the added exceptions list. 
			 * (Optional)
			 */
			public removeException(removedExceptionsParam: any[], removedListParam: boolean): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}