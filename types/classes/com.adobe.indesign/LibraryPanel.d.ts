/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Panel */
		class LibraryPanel extends Adobe.Indesign.Panel {
			/**
			 * The library displayed in this LibraryPanel
			 * @type {Adobe.Indesign.Library}
			 * @readonly
			 */
			public readonly associatedLibrary: Adobe.Indesign.Library;
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
			 * The index of the LibraryPanel within its containing object.
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
			 * The name of the LibraryPanel.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The parent of the LibraryPanel (a Application).
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
			 * The selected object(s). Can also accept: Object or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public selection: any;
			/**
			 * The sort order of the assets in the LibraryPanel
			 * @type {Adobe.Indesign.SortAssets}
			 */
			public sortOrder: Adobe.Indesign.SortAssets;
			/**
			 * LibraryPanel view
			 * @type {Adobe.Indesign.LibraryPanelViews}
			 */
			public view: Adobe.Indesign.LibraryPanelViews;
			/**
			 * If true, the panel is visible.
			 * @type {boolean}
			 */
			public visible: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerLibraryPanel(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerLibraryPanel(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Selects the specified object(s).
			 * @param {any} selectableItemsParam The objects to select. Can 
			 * accept: Object, Array of Objects, NothingEnum enumerator or 
			 * SelectAll enumerator.
			 * @param {SelectionOptions} existingSelectionParam The 
			 * selection status of the LibraryPanel in relation to 
			 * previously selected objects. (Optional)
			 * @returns {void}
			 */
			public select(selectableItemsParam: any, existingSelectionParam: SelectionOptions): void;
			/**
			 * Show all assets
			 * @returns {void}
			 */
			public showAll(): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}