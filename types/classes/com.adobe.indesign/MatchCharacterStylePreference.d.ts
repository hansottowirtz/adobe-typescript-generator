/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MatchCharacterStylePreference extends Adobe.Indesign.Preference {
			/**
			 * The character style applied to the text. Can also accept: 
			 * String.
			 */
			public appliedCharacterStyle: Adobe.Indesign.CharacterStyle;
			/** The case of the matched text. */
			public changeCase: Adobe.Indesign.ChangeCaseOptions;
			/** If true, deletes end punctuation from the matched text. */
			public deleteEndPunctuation: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the MatchCharacterStylePreference (a 
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
			public searchStrategy: Adobe.Indesign.SearchStrategies;
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
			public addEventListenerMatchCharacterStylePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerMatchCharacterStylePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}