/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class MatchParagraphStylePreference extends Adobe.Incopy.Preference {
			/**
			 * The paragraph style applied to the text. Can also accept: 
			 * String.
			 */
			public appliedParagraphStyle: Adobe.Incopy.ParagraphStyle;
			/** The case of the matched text. */
			public changeCase: Adobe.Incopy.ChangeCaseOptions;
			/** If true, deletes end punctuation from the matched text. */
			public deleteEndPunctuation: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the MatchParagraphStylePreference (a 
			 * TextVariable).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The starting point and direction in which the search will be 
			 * conducted.
			 */
			public searchStrategy: Adobe.Incopy.SearchStrategies;
			/**
			 * The text that follows the value of the variable. (Limit: 128 
			 * characters)
			 */
			public textAfter: string;
			/**
			 * The text that precedes the value of the variable. (Limit: 
			 * 128 characters)
			 */
			public textBefore: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerMatchParagraphStylePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerMatchParagraphStylePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}