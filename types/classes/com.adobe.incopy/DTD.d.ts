/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** XMLItem */
		class DTD extends Adobe.Incopy.XMLItem {
			/**
			 * The contents of the text. Can return: String or 
			 * SpecialCharacters enumerator.
			 */
			public readonly contents: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** The unique ID of the DTD. */
			public readonly id: number;
			/** The index of the DTD within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The parent of the DTD (a Document). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The public ID of the DOCTYPE declaration. Note: Valid only 
			 * when the DTD is an external subset.
			 */
			public readonly publicId: string;
			/** The tag of the root object. */
			public rootTag: Adobe.Incopy.XMLTag;
			/**
			 * The system ID of the DOCTYPE declaration. Note: Valid only 
			 * when the DTD is an external subset.
			 */
			public readonly systemId: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerDTD(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Deletes the DTD. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerDTD(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Selects the object.
			 * @param {SelectionOptions} existingSelectionParam The 
			 * selection status of the DTD in relation to previously 
			 * selected objects. (Optional)
			 */
			public select(existingSelectionParam: SelectionOptions): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}