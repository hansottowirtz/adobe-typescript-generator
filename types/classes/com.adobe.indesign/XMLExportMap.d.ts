/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLExportMap extends Adobe.Csawlib.CSHostObject {
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
			 * If true, includes empty stories when mapping styles to tags.
			 * @type {boolean}
			 */
			public includeEmptyStories: boolean;
			/**
			 * If true, includes stories on master spreads when mapping 
			 * styles to tags.
			 * @type {boolean}
			 */
			public includeMasterPageStories: boolean;
			/**
			 * If true, includes stories on the pasteboard when mapping 
			 * styles to tags.
			 * @type {boolean}
			 */
			public includePasteboardStories: boolean;
			/**
			 * The index of the XMLExportMap within its containing object.
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
			 * The style mapped to the XML tag. Can return: ParagraphStyle, 
			 * CharacterStyle, TableStyle or CellStyle. Can also accept: 
			 * String.
			 * @type {any}
			 * @readonly
			 */
			public readonly mappedStyle: any;
			/**
			 * The XML tag applied to the element. Can also accept: String.
			 * @type {Adobe.Indesign.XMLTag}
			 */
			public markupTag: Adobe.Indesign.XMLTag;
			/**
			 * The parent of the XMLExportMap (a Application or Document).
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
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerXMLExportMap(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Deletes the XMLExportMap.
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
			public removeEventListenerXMLExportMap(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}