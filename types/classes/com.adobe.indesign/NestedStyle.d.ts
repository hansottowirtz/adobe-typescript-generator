/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class NestedStyle extends Adobe.Csawlib.CSHostObject {
			/**
			 * The character style applied to the text. Can also accept: 
			 * String.
			 * @type {Adobe.Indesign.CharacterStyle}
			 */
			public appliedCharacterStyle: Adobe.Indesign.CharacterStyle;
			/**
			 * The delimiting expression that indicates how deeply into the 
			 * paragraph the nested style is applied. Can return: String or 
			 * NestedStyleDelimiters enumerator.
			 * @type {any}
			 */
			public delimiter: any;
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
			 * If true, the nested style is applied through the last 
			 * delimiter. If false, the nested style is applied up to the 
			 * last delimiter.
			 * @type {boolean}
			 */
			public inclusive: boolean;
			/**
			 * The index of the NestedStyle within its containing object.
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
			 * The parent of the NestedStyle (a TextDefault, Paragraph, 
			 * ParagraphStyle, Text, InsertionPoint, TextStyleRange, 
			 * TextColumn, Line, Word, Character, Story or XmlStory).
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
			 * The number instances of the specified delimiter up to which, 
			 * or through which, to apply the nested style.
			 * @type {number}
			 */
			public repetition: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerNestedStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Deletes the NestedStyle.
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
			public removeEventListenerNestedStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}