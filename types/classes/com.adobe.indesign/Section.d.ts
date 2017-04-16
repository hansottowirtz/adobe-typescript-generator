/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Section extends Adobe.Csawlib.CSHostObject {
			/**
			 * The alternate layout name for a set of pages.
			 * @type {string}
			 */
			public alternateLayout: string;
			/**
			 * The number of pages in the alternate layout section.
			 * @type {number}
			 * @readonly
			 */
			public readonly alternateLayoutLength: number;
			/**
			 * If true, continues page numbers sequentially from the 
			 * previous section.
			 * @type {boolean}
			 */
			public continueNumbering: boolean;
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
			 * The unique ID of the Section.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * If true, places the specified prefix before page numbers on 
			 * all pages in the section.
			 * @type {boolean}
			 */
			public includeSectionPrefix: boolean;
			/**
			 * The index of the Section within its containing object.
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
			 * The number of pages in the section.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * The section marker.
			 * @type {string}
			 */
			public marker: string;
			/**
			 * The name of the Section.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The page number assigned to the first page in the section. 
			 * Note: Valid only when continue numbering is false.
			 * @type {number}
			 */
			public pageNumberStart: number;
			/**
			 * The page number style. Can return: PageNumberStyle 
			 * enumerator or String.
			 * @type {any}
			 */
			public pageNumberStyle: any;
			/**
			 * The start page for the section.
			 * @type {Adobe.Indesign.Page}
			 */
			public pageStart: Adobe.Indesign.Page;
			/**
			 * The pagination option for this section for adding and 
			 * removing pages in HTML5.
			 * @type {Adobe.Indesign.PaginationOption}
			 */
			public pagination: Adobe.Indesign.PaginationOption;
			/**
			 * The master to apply when pages are added in HTML5. Can also 
			 * accept: NothingEnum enumerator.
			 * @type {Adobe.Indesign.MasterSpread}
			 */
			public paginationMaster: Adobe.Indesign.MasterSpread;
			/**
			 * The parent of the Section (a Document).
			 * @type {Adobe.Indesign.Document}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Document;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The prefix to place before page numbers on pages in the 
			 * section. May include up to 8 characters. Note: Valid only 
			 * when include section prefix is true.
			 * @type {string}
			 */
			public sectionPrefix: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerSection(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			 * Deletes the Section.
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
			public removeEventListenerSection(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}