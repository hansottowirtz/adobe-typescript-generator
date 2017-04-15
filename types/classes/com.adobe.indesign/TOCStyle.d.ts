/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TOCStyle extends Adobe.Csawlib.CSHostObject {
			/** If true, creates bookmarks for TOC entries. */
			public createBookmarks: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The unique ID of the TOCStyle. */
			public readonly id: number;
			/**
			 * If true, includes the entire book in the TOC. If false, 
			 * includes only the TOC entries in the current document. Note: 
			 * Valid when the current document is part of a book.
			 */
			public includeBookDocuments: boolean;
			/**
			 * If true, the TOC includes entries from text on hidden 
			 * layers.
			 */
			public includeHidden: boolean;
			/** The index of the TOCStyle within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** The name of the TOCStyle. */
			public name: string;
			/** The format for importing numbered paragraphs into the TOC. */
			public numberedParagraphs: Adobe.Indesign.NumberedParagraphsOptions;
			/** The parent of the TOCStyle (a Document). */
			public readonly parent: Adobe.Indesign.Document;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * If true, the lowest-level TOC entries are placed on the same 
			 * line as the previous entry.
			 */
			public runIn: boolean;
			/** The table of contents story direction. */
			public setStoryDirection: Adobe.Indesign.HorizontalOrVertical;
			/** The TOC title. */
			public title: string;
			/** The paragraph style applied to the TOC title. */
			public titleStyle: Adobe.Indesign.ParagraphStyle;
			/** A collection TOC style entries. */
			public readonly tocStyleEntries: Adobe.Indesign.TOCStyleEntries;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTOCStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Duplicates the TOCStyle. */
			public duplicate(): Adobe.Indesign.TOCStyle;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam - The key.
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
			 * @param {string} keyParam - The key.
			 * @param {string} valueParam - The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/** Deletes the TOCStyle. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerTOCStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}