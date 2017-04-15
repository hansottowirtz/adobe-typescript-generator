/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Panel */
		class LibraryPanel extends Adobe.Indesign.Panel {
			/** The library displayed in this LibraryPanel */
			public readonly associatedLibrary: Adobe.Indesign.Library;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The index of the LibraryPanel within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The name of the LibraryPanel. */
			public readonly name: string;
			/** The parent of the LibraryPanel (a Application). */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The selected object(s). Can also accept: Object or 
			 * NothingEnum enumerator.
			 */
			public selection: any;
			/** The sort order of the assets in the LibraryPanel */
			public sortOrder: Adobe.Indesign.SortAssets;
			/** LibraryPanel view */
			public view: Adobe.Indesign.LibraryPanelViews;
			/** If true, the panel is visible. */
			public visible: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerLibraryPanel(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerLibraryPanel(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Selects the specified object(s).
			 * @param {any} selectableItemsParam - The objects to select. 
			 * Can accept: Object, Array of Objects, NothingEnum enumerator 
			 * or SelectAll enumerator.
			 * @param {SelectionOptions} existingSelectionParam - The 
			 * selection status of the LibraryPanel in relation to 
			 * previously selected objects. (Optional)
			 */
			public select(selectableItemsParam: any, existingSelectionParam: SelectionOptions): void;
			/** Show all assets */
			public showAll(): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}