/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Topic extends Adobe.Csawlib.CSHostObject {
			/**
			 * A collection of index cross references. (For cross 
			 * references in text, use the 'cross reference source' and 
			 * 'hyperlink' objects.)
			 */
			public readonly crossReferences: Adobe.Indesign.CrossReferences;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The index of the Topic within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The name of the Topic. */
			public name: string;
			/** A collection of index page references. */
			public readonly pageReferences: Adobe.Indesign.PageReferences;
			/** The parent of the Topic (a IndexSection, Topic or Index). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The string by which the topic is sorted instead of the topic 
			 * name is not used. Note: The actual topic text, rather than 
			 * the sort order text, appears in the index.
			 */
			public sortOrder: string;
			/** A collection of index topics. */
			public readonly topics: Adobe.Indesign.Topics;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTopic(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Makes the initial letter for the specified index topic or 
			 * group of index topics upper case.
			 * @param {IndexCapitalizationOptions} 
			 * capitalizationOptionParam - The entry or entries to 
			 * capitalize. (Optional)
			 */
			public capitalize(capitalizationOptionParam: IndexCapitalizationOptions): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Deletes the Topic. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerTopic(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}