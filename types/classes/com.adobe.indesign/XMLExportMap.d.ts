/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLExportMap extends Adobe.Csawlib.CSHostObject {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * If true, includes empty stories when mapping styles to tags.
			 */
			public includeEmptyStories: boolean;
			/**
			 * If true, includes stories on master spreads when mapping 
			 * styles to tags.
			 */
			public includeMasterPageStories: boolean;
			/**
			 * If true, includes stories on the pasteboard when mapping 
			 * styles to tags.
			 */
			public includePasteboardStories: boolean;
			/** The index of the XMLExportMap within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The style mapped to the XML tag. Can return: ParagraphStyle, 
			 * CharacterStyle, TableStyle or CellStyle. Can also accept: 
			 * String.
			 */
			public readonly mappedStyle: any;
			/**
			 * The XML tag applied to the element. Can also accept: String.
			 */
			public markupTag: Adobe.Indesign.XMLTag;
			/** The parent of the XMLExportMap (a Application or Document). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerXMLExportMap(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Deletes the XMLExportMap. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerXMLExportMap(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}