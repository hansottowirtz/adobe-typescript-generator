/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class UserDictionary extends Adobe.Csawlib.CSHostObject {
			/** A list of words added to the user dictionary. */
			public addedWords: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * The index of the UserDictionary within its containing 
			 * object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The name of the UserDictionary. */
			public readonly name: string;
			/** The parent of the UserDictionary (a Application). */
			public readonly parent: Adobe.Incopy.Application;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A list of words removed from the user dictionary. */
			public removedWords: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerUserDictionary(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Adds the specified words to the specified list in the 
			 * dictionary.
			 * @param {any[]} addedWordsParam - The words to add.
			 * @param {boolean} removedListParam - If true, adds the words 
			 * to the removed words list. If false or unspecified, adds the 
			 * words to the added words list. (Optional)
			 */
			public addWord(addedWordsParam: any[], removedListParam: boolean): void;
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
			public removeEventListenerUserDictionary(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Removes the specified words from the specified list in the 
			 * dictionary.
			 * @param {any[]} removedWordsParam - The words to remove.
			 * @param {boolean} removedListParam - If true, removes the 
			 * words from the removed words list. If false or unspecified, 
			 * removes the words from the added words list. (Optional)
			 */
			public removeWord(removedWordsParam: any[], removedListParam: boolean): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}