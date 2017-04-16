/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class SpellPreference extends Adobe.Indesign.Preference {
			/** If true, checks for uncapitalized first words in sentences. */
			public checkCapitalizedSentences: boolean;
			/** If true, checks for uncapitalized proper nouns. */
			public checkCapitalizedWords: boolean;
			/** If true, checks for misspelled words. */
			public checkMisspelledWords: boolean;
			/** If true, checks for repeated words. */
			public checkRepeatedWords: boolean;
			/**
			 * If true, underlines misspelled and repeated words, 
			 * uncapitalized proper nouns, and uncapitalized first words in 
			 * sentences. Note: Valid only when the corresponding 
			 * properties are true. For information, see check misspelled 
			 * words, check repeated words, check capitalized words, and 
			 * check capitalized sentences.
			 */
			public dynamicSpellCheck: boolean;
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
			 * The underline color for misspelled words, specified either 
			 * as an array of three doubles, each in the range 0 to 255 and 
			 * representing R, G, and B values, or as a UI color. Note: 
			 * Valid only when both dynamic spell check and check 
			 * misspelled words are true. Can return: Array of 3 Reals (0 - 
			 * 255) or UIColors enumerator.
			 */
			public misspelledWordColor: any;
			/** The parent of the SpellPreference (a Application). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The underline color for repeated words, specified either as 
			 * an array of three doubles, each in the range 0 to 255 and 
			 * representing R, G, and B values, or as a UI color. Note: 
			 * Valid only when both dynamic spell check and check repeated 
			 * words are true. . Can return: Array of 3 Reals (0 - 255) or 
			 * UIColors enumerator.
			 */
			public repeatedWordColor: any;
			/**
			 * The underline color for the first word in sentences that do 
			 * not begin with a capital letter, specified either as an 
			 * array of three doubles, each in the range 0 to 255 and 
			 * representing R, G, and B values, or as a UI color. Note: 
			 * Valid when both dynamic spell check and check capitalized 
			 * sentences are true. Can return: Array of 3 Reals (0 - 255) 
			 * or UIColors enumerator.
			 */
			public uncapitalizedSentenceColor: any;
			/**
			 * The underline color for uncapitalized proper nouns, 
			 * specified either as an array of three doubles, each in the 
			 * range 0 to 255 and representing R, G, and B values, or as a 
			 * UI color. Note: Valid only when both dynamic spell check and 
			 * check capitalized words are true. . Can return: Array of 3 
			 * Reals (0 - 255) or UIColors enumerator.
			 */
			public uncapitalizedWordColor: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerSpellPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerSpellPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}