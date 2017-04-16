/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class NestedStyle extends Adobe.Csawlib.CSHostObject {
			/**
			 * The character style applied to the text. Can also accept: 
			 * String.
			 */
			public appliedCharacterStyle: Adobe.Incopy.CharacterStyle;
			/**
			 * The delimiting expression that indicates how deeply into the 
			 * paragraph the nested style is applied. Can return: String or 
			 * NestedStyleDelimiters enumerator.
			 */
			public delimiter: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * If true, the nested style is applied through the last 
			 * delimiter. If false, the nested style is applied up to the 
			 * last delimiter.
			 */
			public inclusive: boolean;
			/** The index of the NestedStyle within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the NestedStyle (a TextDefault, Paragraph, 
			 * ParagraphStyle, Text, InsertionPoint, TextStyleRange, 
			 * TextColumn, Line, Word, Character, Story or XmlStory).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The number instances of the specified delimiter up to which, 
			 * or through which, to apply the nested style.
			 */
			public repetition: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerNestedStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Deletes the NestedStyle. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerNestedStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}