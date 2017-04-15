/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class LanguageWithVendors extends Adobe.Csawlib.CSHostObject {
			/** The user dictionaries for the language. */
			public dictionaryPaths: any;
			/** The double quotes pair for the language. */
			public doubleQuotes: string;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The hyphenation rules source. */
			public hyphenationVendor: string;
			/** A list of hyphenation vendors. */
			public readonly hyphenationVendorList: any;
			/** The full name of the Language object's ICU locale. */
			public readonly icuLocaleName: string;
			/** The unique ID of the LanguageWithVendors. */
			public readonly id: number;
			/**
			 * The index of the LanguageWithVendors within its containing 
			 * object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** The name of the LanguageWithVendors. */
			public readonly name: string;
			/** The parent of the LanguageWithVendors (a Application). */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The single quotes pair for the language. */
			public singleQuotes: string;
			/** The spell-checking source. */
			public spellingVendor: string;
			/** A list of spelling vendors. */
			public readonly spellingVendorList: any;
			/** The thesaurus source. */
			public thesaurusVendor: string;
			/**
			 * Adds the specified user dictionary.
			 * @param {string} filePathParam - The path to the dictionary 
			 * file.
			 */
			public addDictionaryPath(filePathParam: string): string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerLanguageWithVendors(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam - The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam - The key.
			 * @param {string} valueParam - The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Removes the specified user dictionary.
			 * @param {string} filePathParam - The path to the dictionary 
			 * file.
			 */
			public removeDictionaryPath(filePathParam: string): string;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerLanguageWithVendors(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}