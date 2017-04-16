/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageReference extends Adobe.Csawlib.CSHostObject {
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
			 * The unique ID of the PageReference.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the PageReference within its containing object.
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
			 * The name of the PageReference; this is an alias to the 
			 * PageReference's label property.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The character style applied to page numbers.
			 * @type {Adobe.Indesign.CharacterStyle}
			 */
			public pageNumberStyleOverride: Adobe.Indesign.CharacterStyle;
			/**
			 * The paragraph style or number of paragraphs or pages that 
			 * defines the last page in a page range. Note: Valid only when 
			 * page reference type specifies the next use of a paragraph 
			 * style or a number of paragraphs or pages. . Can return: 
			 * ParagraphStyle or Long Integer.
			 * @type {any}
			 */
			public pageReferenceLimit: any;
			/**
			 * Options for index page references.
			 * @type {Adobe.Indesign.PageReferenceType}
			 */
			public pageReferenceType: Adobe.Indesign.PageReferenceType;
			/**
			 * The parent of the PageReference (a Topic).
			 * @type {Adobe.Indesign.Topic}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Topic;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The hyperlinked text or insertion point.
			 * @type {Adobe.Indesign.Text}
			 * @readonly
			 */
			public readonly sourceText: Adobe.Indesign.Text;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerPageReference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			 * Deletes the PageReference.
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
			public removeEventListenerPageReference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}