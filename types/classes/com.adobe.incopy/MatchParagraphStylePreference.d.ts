/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class MatchParagraphStylePreference extends Adobe.Incopy.Preference {
			/**
			 * The paragraph style applied to the text. Can also accept: 
			 * String.
			 * @type {Adobe.Incopy.ParagraphStyle}
			 */
			public appliedParagraphStyle: Adobe.Incopy.ParagraphStyle;
			/**
			 * The case of the matched text.
			 * @type {Adobe.Incopy.ChangeCaseOptions}
			 */
			public changeCase: Adobe.Incopy.ChangeCaseOptions;
			/**
			 * If true, deletes end punctuation from the matched text.
			 * @type {boolean}
			 */
			public deleteEndPunctuation: boolean;
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
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the MatchParagraphStylePreference (a 
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
			 * @type {Adobe.Incopy.SearchStrategies}
			 */
			public searchStrategy: Adobe.Incopy.SearchStrategies;
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
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerMatchParagraphStylePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerMatchParagraphStylePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}