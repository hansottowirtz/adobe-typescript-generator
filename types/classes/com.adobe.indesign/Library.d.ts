/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Library extends Adobe.Csawlib.CSHostObject {
			/**
			 * A collection of object library assets.
			 * @type {Adobe.Indesign.Assets}
			 * @readonly
			 */
			public readonly assets: Adobe.Indesign.Assets;
			/**
			 * The associated panel.
			 * @type {Adobe.Indesign.Panel}
			 * @readonly
			 */
			public readonly associatedPanel: Adobe.Indesign.Panel;
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
			 * The full path to the file.
			 * @type {File}
			 * @readonly
			 */
			public readonly filePath: File;
			/**
			 * The full path to the Library, including the name of the 
			 * Library.
			 * @type {File}
			 * @readonly
			 */
			public readonly fullName: File;
			/**
			 * The index of the Library within its containing object.
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
			 * The name of the Library.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The parent of the Library (a Application).
			 * @type {Adobe.Indesign.Application}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Application;
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
			public addEventListenerLibrary(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Closes the Library.
			 * @returns {void}
			 */
			public close(): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerLibrary(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Stores the specified object in the library.
			 * @param {any[]} usingParam The page item(s) to store. Can 
			 * accept: Array of PageItems, Movies, Sounds, Graphics or 
			 * XMLElements.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Library (Optional)
			 * @returns {Adobe.Indesign.Asset}
			 */
			public store(usingParam: any[], withPropertiesParam: any): Adobe.Indesign.Asset;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}