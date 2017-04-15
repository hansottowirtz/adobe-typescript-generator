/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Change extends Adobe.Csawlib.CSHostObject {
			/**
			 * The type of tracked change. Note: Valid only when track 
			 * changes is true.
			 */
			public readonly changeType: Adobe.Incopy.ChangeTypes;
			/** A collection of characters. */
			public readonly characters: Adobe.Incopy.Characters;
			/**
			 * The date on which the tracked change was made. Note: Valid 
			 * only when track changes is true.
			 */
			public readonly date: Date;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** The index of the Change within its containing object. */
			public readonly index: number;
			/** A collection of insertion points. */
			public readonly insertionPoints: Adobe.Incopy.InsertionPoints;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A collection of lines. */
			public readonly lines: Adobe.Incopy.Lines;
			/** A collection of paragraphs. */
			public readonly paragraphs: Adobe.Incopy.Paragraphs;
			/** The parent of the Change (a Story, XmlStory or Cell). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The location of the first insertion point in the object 
			 * (relative to the beginning of the story).
			 */
			public readonly storyOffset: Adobe.Incopy.InsertionPoint;
			/** A collection of text columns. */
			public readonly textColumns: Adobe.Incopy.TextColumns;
			/** A collection of text objects. */
			public readonly texts: Adobe.Incopy.Texts;
			/** A collection of text style ranges. */
			public readonly textStyleRanges: Adobe.Incopy.TextStyleRanges;
			/** A collection of text variable instances. */
			public readonly textVariableInstances: Adobe.Incopy.TextVariableInstances;
			/**
			 * The user who made the change. Note: Valid only when track 
			 * changes is true.
			 */
			public readonly userName: string;
			/** A collection of words. */
			public readonly words: Adobe.Incopy.Words;
			/**
			 * Accepts the tracked change. Note: Valid only when track 
			 * changes is true.
			 */
			public accept(): void;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerChange(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Rejects the tracked change. Note: Valid only when track 
			 * changes is true.
			 */
			public reject(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerChange(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}