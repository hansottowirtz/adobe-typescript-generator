/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class MatchCharacterStylePreference extends Adobe.Indesign.Preference {
			/**
			 * The character style applied to the text. Can also accept: 
			 * String.
			 * @type {Adobe.Indesign.CharacterStyle}
			 */
			public appliedCharacterStyle: Adobe.Indesign.CharacterStyle;
			/**
			 * The case of the matched text.
			 * @type {Adobe.Indesign.ChangeCaseOptions}
			 */
			public changeCase: Adobe.Indesign.ChangeCaseOptions;
			/**
			 * If true, deletes end punctuation from the matched text.
			 * @type {boolean}
			 */
			public deleteEndPunctuation: boolean;
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
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the MatchCharacterStylePreference (a 
			 * TextVariable).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The starting point and direction in which the search will be 
			 * conducted.
			 * @type {Adobe.Indesign.SearchStrategies}
			 */
			public searchStrategy: Adobe.Indesign.SearchStrategies;
			/**
			 * The text that follows the value of the variable. (Limit: 128 
			 * characters)
			 * @type {string}
			 */
			public textAfter: string;
			/**
			 * The text that precedes the value of the variable. (Limit: 
			 * 128 characters)
			 * @type {string}
			 */
			public textBefore: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerMatchCharacterStylePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerMatchCharacterStylePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}