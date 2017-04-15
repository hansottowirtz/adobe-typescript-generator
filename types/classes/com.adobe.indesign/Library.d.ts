/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Library extends Adobe.Csawlib.CSHostObject {
			/** A collection of object library assets. */
			public readonly assets: Adobe.Indesign.Assets;
			/** The associated panel. */
			public readonly associatedPanel: Adobe.Indesign.Panel;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The full path to the file. */
			public readonly filePath: File;
			/**
			 * The full path to the Library, including the name of the 
			 * Library.
			 */
			public readonly fullName: File;
			/** The index of the Library within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The name of the Library. */
			public readonly name: string;
			/** The parent of the Library (a Application). */
			public readonly parent: Adobe.Indesign.Application;
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
			public addEventListenerLibrary(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Closes the Library. */
			public close(): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerLibrary(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Stores the specified object in the library.
			 * @param {any[]} usingParam - The page item(s) to store. Can 
			 * accept: Array of PageItems, Movies, Sounds, Graphics or 
			 * XMLElements.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new Library (Optional)
			 */
			public store(usingParam: any[], withPropertiesParam: any): Adobe.Indesign.Asset;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}