/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Window extends Adobe.Csawlib.CSHostObject {
			/**
			 * Dispatched after the Window becomes active. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_ACTIVATE: string;
			/**
			 * Dispatched when the value of a property changes on this 
			 * Window. This event bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_ATTRIBUTE_CHANGED: string;
			/**
			 * Dispatched when a Window is closing. Since the close has 
			 * been committed, it can no longer be canceled. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_CLOSE: string;
			/**
			 * Dispatched after a Window is opened. This event bubbles. 
			 * This event is not cancelable.
			 */
			public static readonly AFTER_OPEN: string;
			/**
			 * Dispatched after an attribute on the active selection 
			 * changes. This event bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_SELECTION_ATTRIBUTE_CHANGED: string;
			/**
			 * Dispatched after the active selection changes. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_SELECTION_CHANGED: string;
			/**
			 * Dispatched before a Window is closed. This event bubbles. 
			 * This event is cancelable.
			 */
			public static readonly BEFORE_CLOSE: string;
			/**
			 * Dispatched before the Window becomes inactive. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly BEFORE_DEACTIVATE: string;
			/**
			 * The bounds of the window (specified in pixels) in the form 
			 * [top, left, bottom, right].
			 */
			public bounds: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The index of the Window within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The name of the Window. */
			public readonly name: string;
			/** The parent of the Window (a Document). */
			public readonly parent: Adobe.Indesign.Document;
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
			/**
			 * The key object of the selection. Can also accept: 
			 * NothingEnum enumerator.
			 */
			public selectionKeyObject: Adobe.Indesign.PageItem;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerWindow(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Brings the object to the front. */
			public bringToFront(): void;
			/** Closes the Window. */
			public close(): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Maximizes the window. */
			public maximize(): void;
			/** Minimizes the window. */
			public minimize(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerWindow(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Restores the window. */
			public restore(): void;
			/**
			 * Selects the specified object(s).
			 * @param {any} selectableItemsParam The objects to select. Can 
			 * accept: Object, Array of Objects, NothingEnum enumerator or 
			 * SelectAll enumerator.
			 * @param {SelectionOptions} existingSelectionParam The 
			 * selection status of the Window in relation to previously 
			 * selected objects. (Optional)
			 */
			public select(selectableItemsParam: any, existingSelectionParam: SelectionOptions): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}