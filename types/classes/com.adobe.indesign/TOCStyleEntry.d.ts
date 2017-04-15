/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TOCStyleEntry extends Adobe.Csawlib.CSHostObject {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The paragraph style applied to the TOC entry. Can return: 
			 * ParagraphStyle or String.
			 */
			public formatStyle: any;
			/**
			 * The index of the TOCStyleEntry within its containing object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The indent level of the entry in the TOC. */
			public level: number;
			/** The name of the TOCStyleEntry. */
			public name: string;
			/** The page number placement for the TOC entry style. */
			public pageNumberPosition: Adobe.Indesign.PageNumberPosition;
			/**
			 * The character style applied to the page number of the entry. 
			 * Can return: CharacterStyle or String.
			 */
			public pageNumberStyle: any;
			/** The parent of the TOCStyleEntry (a TOCStyle). */
			public readonly parent: Adobe.Indesign.TOCStyle;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The string to insert between the entry text and the page 
			 * numbers.
			 */
			public separator: string;
			/**
			 * The character style applied to the string separating the TOC 
			 * entry text and the page numbers. Can return: CharacterStyle 
			 * or String.
			 */
			public separatorStyle: any;
			/** If true, sorts the entries alphabetically. */
			public sortAlphabet: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTOCStyleEntry(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Deletes the TOCStyleEntry. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerTOCStyleEntry(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}