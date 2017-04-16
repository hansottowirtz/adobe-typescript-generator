/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** MenuElement */
		class MenuItem extends Adobe.Incopy.MenuElement {
			/**
			 * The menu action that implements the menu item.
			 * @type {Adobe.Incopy.MenuAction}
			 * @readonly
			 */
			public readonly associatedMenuAction: Adobe.Incopy.MenuAction;
			/**
			 * If true, the menu item associated with the menu action is 
			 * checked.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly checked: boolean;
			/**
			 * If true, the MenuItem is enabled.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly enabled: boolean;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Incopy.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Incopy.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * The unique ID of the MenuItem.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the MenuItem within its containing object.
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
			 * The name of the MenuItem.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The parent of the MenuItem (a Menu or Submenu).
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
			 * The name of the MenuItem for display in the user interface. 
			 * The title includes any ampersand characters (&), which are 
			 * used to tell the Windows OS to underline the following 
			 * character in the name for use with the Alt key to navigate 
			 * to a menu item. Double ampersands are used to display an 
			 * actual ampersand character in the name. The Mac OS ignores 
			 * and removes the extra ampersand characters.
			 * @type {string}
			 * @readonly
			 */
			public readonly title: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerMenuItem(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Deletes the MenuItem.
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
			public removeEventListenerMenuItem(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Selects the MenuItem.
			 * @returns {void}
			 */
			public select(): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}