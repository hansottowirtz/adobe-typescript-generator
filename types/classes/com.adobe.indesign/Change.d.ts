/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Change extends Adobe.Csawlib.CSHostObject {
			/**
			 * The type of tracked change. Note: Valid only when track 
			 * changes is true.
			 * @type {Adobe.Indesign.ChangeTypes}
			 * @readonly
			 */
			public readonly changeType: Adobe.Indesign.ChangeTypes;
			/**
			 * A collection of characters.
			 * @type {Adobe.Indesign.Characters}
			 * @readonly
			 */
			public readonly characters: Adobe.Indesign.Characters;
			/**
			 * The date on which the tracked change was made. Note: Valid 
			 * only when track changes is true.
			 * @type {Date}
			 * @readonly
			 */
			public readonly date: Date;
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
			 * The index of the Change within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * A collection of insertion points.
			 * @type {Adobe.Indesign.InsertionPoints}
			 * @readonly
			 */
			public readonly insertionPoints: Adobe.Indesign.InsertionPoints;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * A collection of lines.
			 * @type {Adobe.Indesign.Lines}
			 * @readonly
			 */
			public readonly lines: Adobe.Indesign.Lines;
			/**
			 * A collection of paragraphs.
			 * @type {Adobe.Indesign.Paragraphs}
			 * @readonly
			 */
			public readonly paragraphs: Adobe.Indesign.Paragraphs;
			/**
			 * The parent of the Change (a Story, XmlStory or Cell).
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
			 * The location of the first insertion point in the object 
			 * (relative to the beginning of the story).
			 * @type {Adobe.Indesign.InsertionPoint}
			 * @readonly
			 */
			public readonly storyOffset: Adobe.Indesign.InsertionPoint;
			/**
			 * A collection of text columns.
			 * @type {Adobe.Indesign.TextColumns}
			 * @readonly
			 */
			public readonly textColumns: Adobe.Indesign.TextColumns;
			/**
			 * A collection of text objects.
			 * @type {Adobe.Indesign.Texts}
			 * @readonly
			 */
			public readonly texts: Adobe.Indesign.Texts;
			/**
			 * A collection of text style ranges.
			 * @type {Adobe.Indesign.TextStyleRanges}
			 * @readonly
			 */
			public readonly textStyleRanges: Adobe.Indesign.TextStyleRanges;
			/**
			 * A collection of text variable instances.
			 * @type {Adobe.Indesign.TextVariableInstances}
			 * @readonly
			 */
			public readonly textVariableInstances: Adobe.Indesign.TextVariableInstances;
			/**
			 * The user who made the change. Note: Valid only when track 
			 * changes is true.
			 * @type {string}
			 * @readonly
			 */
			public readonly userName: string;
			/**
			 * A collection of words.
			 * @type {Adobe.Indesign.Words}
			 * @readonly
			 */
			public readonly words: Adobe.Indesign.Words;
			/**
			 * Accepts the tracked change. Note: Valid only when track 
			 * changes is true.
			 * @returns {void}
			 */
			public accept(): void;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerChange(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Rejects the tracked change. Note: Valid only when track 
			 * changes is true.
			 * @returns {void}
			 */
			public reject(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerChange(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}