/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class LanguageWithVendors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The user dictionaries for the language.
			 * @type {any}
			 */
			public dictionaryPaths: any;
			/**
			 * The double quotes pair for the language.
			 * @type {string}
			 */
			public doubleQuotes: string;
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
			 * The hyphenation rules source.
			 * @type {string}
			 */
			public hyphenationVendor: string;
			/**
			 * A list of hyphenation vendors.
			 * @type {any}
			 * @readonly
			 */
			public readonly hyphenationVendorList: any;
			/**
			 * The full name of the Language object's ICU locale.
			 * @type {string}
			 * @readonly
			 */
			public readonly icuLocaleName: string;
			/**
			 * The unique ID of the LanguageWithVendors.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the LanguageWithVendors within its containing 
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
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * The name of the LanguageWithVendors.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The parent of the LanguageWithVendors (a Application).
			 * @type {Adobe.Indesign.Application}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The single quotes pair for the language.
			 * @type {string}
			 */
			public singleQuotes: string;
			/**
			 * The spell-checking source.
			 * @type {string}
			 */
			public spellingVendor: string;
			/**
			 * A list of spelling vendors.
			 * @type {any}
			 * @readonly
			 */
			public readonly spellingVendorList: any;
			/**
			 * The thesaurus source.
			 * @type {string}
			 */
			public thesaurusVendor: string;
			/**
			 * Adds the specified user dictionary.
			 * @param {string} filePathParam The path to the dictionary 
			 * file.
			 * @returns {string}
			 */
			public addDictionaryPath(filePathParam: string): string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerLanguageWithVendors(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			 * Removes the specified user dictionary.
			 * @param {string} filePathParam The path to the dictionary 
			 * file.
			 * @returns {string}
			 */
			public removeDictionaryPath(filePathParam: string): string;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerLanguageWithVendors(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}