/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Note extends Adobe.Csawlib.CSHostObject {
			/** A collection of characters. */
			public readonly characters: Adobe.Indesign.Characters;
			/** If true, the note is collapsed in galley view. */
			public collapsed: boolean;
			/** The date and time the note was created. */
			public readonly creationDate: Date;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** A collection of hidden text objects. */
			public readonly hiddenTexts: Adobe.Indesign.HiddenTexts;
			/** The unique ID of the Note. */
			public readonly id: number;
			/** The index of the Note within its containing object. */
			public readonly index: number;
			/** A collection of insertion points. */
			public readonly insertionPoints: Adobe.Indesign.InsertionPoints;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** A collection of lines. */
			public readonly lines: Adobe.Indesign.Lines;
			/** The date and time the note was last modified. */
			public readonly modificationDate: Date;
			/**
			 * The name of the Note; this is an alias to the Note's label 
			 * property.
			 */
			public name: string;
			/** A collection of paragraphs. */
			public readonly paragraphs: Adobe.Indesign.Paragraphs;
			/**
			 * The parent of the Note (a XmlStory, Story, TextFrame, 
			 * InsertionPoint or Cell).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The insertion point before the table in the story containing 
			 * the table.
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
			/** The user who made the note. */
			public readonly userName: string;
			/** A collection of words. */
			public readonly words: Adobe.Indesign.Words;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerNote(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Converts the note to story text. */
			public convertToText(): void;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Moves the note to the specified location.
			 * @param {LocationOptions} toParam The new location relative 
			 * to the reference object or within the containing object.
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to parameter specifies before or after. 
			 * Can accept: Text or Story. (Optional)
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.Note;
			/** Deletes the Note. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerNote(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}