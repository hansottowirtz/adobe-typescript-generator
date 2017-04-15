/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Change extends Adobe.Csawlib.CSHostObject {
			/**
			 * The type of tracked change. Note: Valid only when track 
			 * changes is true.
			 */
			public readonly changeType: Adobe.Indesign.ChangeTypes;
			/** A collection of characters. */
			public readonly characters: Adobe.Indesign.Characters;
			/**
			 * The date on which the tracked change was made. Note: Valid 
			 * only when track changes is true.
			 */
			public readonly date: Date;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The index of the Change within its containing object. */
			public readonly index: number;
			/** A collection of insertion points. */
			public readonly insertionPoints: Adobe.Indesign.InsertionPoints;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A collection of lines. */
			public readonly lines: Adobe.Indesign.Lines;
			/** A collection of paragraphs. */
			public readonly paragraphs: Adobe.Indesign.Paragraphs;
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
			public readonly storyOffset: Adobe.Indesign.InsertionPoint;
			/** A collection of text columns. */
			public readonly textColumns: Adobe.Indesign.TextColumns;
			/** A collection of text objects. */
			public readonly texts: Adobe.Indesign.Texts;
			/** A collection of text style ranges. */
			public readonly textStyleRanges: Adobe.Indesign.TextStyleRanges;
			/** A collection of text variable instances. */
			public readonly textVariableInstances: Adobe.Indesign.TextVariableInstances;
			/**
			 * The user who made the change. Note: Valid only when track 
			 * changes is true.
			 */
			public readonly userName: string;
			/** A collection of words. */
			public readonly words: Adobe.Indesign.Words;
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
			public addEventListenerChange(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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