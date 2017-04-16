/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** XMLItem */
		class XMLInstruction extends Adobe.Indesign.XMLItem {
			/**
			 * A value that tells the application reading the exported XML 
			 * file what to do with the processing instruction.
			 * @type {string}
			 */
			public data: string;
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
			 * The unique ID of the XMLInstruction.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the XMLInstruction within its containing 
			 * object.
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
			 * The parent of the XMLInstruction (a Document or XMLElement).
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
			 * The insertion point before the table in the story containing 
			 * the table.
			 * @type {Adobe.Indesign.InsertionPoint}
			 * @readonly
			 */
			public readonly storyOffset: Adobe.Indesign.InsertionPoint;
			/**
			 * A name that identifies the processing instruction to an 
			 * application reading the exported XML file.
			 * @type {string}
			 */
			public target: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerXMLInstruction(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Duplicates the XMLInstruction.
			 * @returns {Adobe.Indesign.XMLItem}
			 */
			public duplicate(): Adobe.Indesign.XMLItem;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Moves the element to the specified location.
			 * @param {LocationOptions} toParam The location in relation to 
			 * the reference object or within the containing object.
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to parameter specifies before or after. . 
			 * Can accept: XMLItem or Text. (Optional)
			 * @returns {Adobe.Indesign.XMLInstruction}
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.XMLInstruction;
			/**
			 * Deletes the XMLInstruction.
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
			public removeEventListenerXMLInstruction(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Selects the object.
			 * @param {SelectionOptions} existingSelectionParam The 
			 * selection status of the XMLInstruction in relation to 
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