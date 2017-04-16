/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Topic extends Adobe.Csawlib.CSHostObject {
			/**
			 * A collection of index cross references. (For cross 
			 * references in text, use the 'cross reference source' and 
			 * 'hyperlink' objects.)
			 * @type {Adobe.Indesign.CrossReferences}
			 * @readonly
			 */
			public readonly crossReferences: Adobe.Indesign.CrossReferences;
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
			 * The index of the Topic within its containing object.
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
			 * The name of the Topic.
			 * @type {string}
			 */
			public name: string;
			/**
			 * A collection of index page references.
			 * @type {Adobe.Indesign.PageReferences}
			 * @readonly
			 */
			public readonly pageReferences: Adobe.Indesign.PageReferences;
			/**
			 * The parent of the Topic (a IndexSection, Topic or Index).
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
			 * The string by which the topic is sorted instead of the topic 
			 * name is not used. Note: The actual topic text, rather than 
			 * the sort order text, appears in the index.
			 * @type {string}
			 */
			public sortOrder: string;
			/**
			 * A collection of index topics.
			 * @type {Adobe.Indesign.Topics}
			 * @readonly
			 */
			public readonly topics: Adobe.Indesign.Topics;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerTopic(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Makes the initial letter for the specified index topic or 
			 * group of index topics upper case.
			 * @param {IndexCapitalizationOptions} 
			 * capitalizationOptionParam The entry or entries to 
			 * capitalize. (Optional)
			 * @returns {void}
			 */
			public capitalize(capitalizationOptionParam: IndexCapitalizationOptions): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Deletes the Topic.
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerTopic(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}