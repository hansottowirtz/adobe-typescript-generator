/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** XMLItem */
		class XMLComment extends Adobe.Incopy.XMLItem {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** The unique ID of the XMLComment. */
			public readonly id: number;
			/** The index of the XMLComment within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The parent of the XMLComment (a Document or XMLElement). */
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
			public readonly storyOffset: Adobe.Incopy.InsertionPoint;
			/** The text of the XML comment. */
			public value: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerXMLComment(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/** Duplicates the XMLComment. */
			public duplicate(): Adobe.Incopy.XMLItem;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Moves the element to the specified location.
			 * @param {LocationOptions} toParam The location in relation to 
			 * the reference object or within the containing object.
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to parameter specifies before or after. . 
			 * Can accept: XMLItem or Text. (Optional)
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Incopy.XMLComment;
			/** Deletes the XMLComment. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerXMLComment(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Selects the object.
			 * @param {SelectionOptions} existingSelectionParam The 
			 * selection status of the XMLComment in relation to previously 
			 * selected objects. (Optional)
			 */
			public select(existingSelectionParam: SelectionOptions): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}