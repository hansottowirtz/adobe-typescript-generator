/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLAttribute extends Adobe.Csawlib.CSHostObject {
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
			 * The index of the XMLAttribute within its containing object.
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
			 * The name of the XMLAttribute.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The parent of the XMLAttribute (a XMLElement).
			 * @type {Adobe.Indesign.XMLElement}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.XMLElement;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The value of the XMLAttribute.
			 * @type {string}
			 */
			public value: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerXMLAttribute(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Converts the XML attribute to a child element of its parent 
			 * element.
			 * @param {XMLElementLocation} locatedParam The location of the 
			 * new XML element within the parent XML element of the XML 
			 * attribute. (Optional)
			 * @param {XMLTag} markupTagParam The XML tag to apply to the 
			 * new XML element. (Optional)
			 * @returns {Adobe.Indesign.XMLElement}
			 */
			public convertToElement(locatedParam: XMLElementLocation, markupTagParam: XMLTag): Adobe.Indesign.XMLElement;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Deletes the XMLAttribute.
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
			public removeEventListenerXMLAttribute(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Selects the object.
			 * @param {SelectionOptions} existingSelectionParam The 
			 * selection status of the XMLAttribute in relation to 
			 * previously selected objects. (Optional)
			 * @returns {void}
			 */
			public select(existingSelectionParam: SelectionOptions): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}