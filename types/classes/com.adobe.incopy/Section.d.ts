/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Section extends Adobe.Csawlib.CSHostObject {
			/**
			 * If true, continues page numbers sequentially from the 
			 * previous section.
			 */
			public readonly continueNumbering: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** The unique ID of the Section. */
			public readonly id: number;
			/**
			 * If true, places the specified prefix before page numbers on 
			 * all pages in the section.
			 */
			public readonly includeSectionPrefix: boolean;
			/** The index of the Section within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** The number of pages in the section. */
			public readonly length: number;
			/** The section marker. */
			public readonly marker: string;
			/**
			 * The name of the Section; this is an alias to the Section's 
			 * label property.
			 */
			public name: string;
			/**
			 * The page number assigned to the first page in the section. 
			 * Note: Valid only when continue numbering is false.
			 */
			public readonly pageNumberStart: number;
			/**
			 * The page number style. Can return: PageNumberStyle 
			 * enumerator or String.
			 */
			public readonly pageNumberStyle: any;
			/** The start page for the section. */
			public readonly pageStart: Adobe.Incopy.Page;
			/** The parent of the Section (a Document). */
			public readonly parent: Adobe.Incopy.Document;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The prefix to place before page numbers on pages in the 
			 * section. May include up to 8 characters. Note: Valid only 
			 * when include section prefix is true.
			 */
			public sectionPrefix: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerSection(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerSection(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}