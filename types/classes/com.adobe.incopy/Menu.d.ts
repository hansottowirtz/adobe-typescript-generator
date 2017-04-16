/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Menu extends Adobe.Csawlib.CSHostObject {
			/**
			 * Dispatched before the Menu is displayed. This event does not 
			 * bubble. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_DISPLAY: string;
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
			 * The index of the Menu within its containing object.
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
			 * A collection of menu elements.
			 * @type {Adobe.Incopy.MenuElements}
			 * @readonly
			 */
			public readonly menuElements: Adobe.Incopy.MenuElements;
			/**
			 * A collection of menu items.
			 * @type {Adobe.Incopy.MenuItems}
			 * @readonly
			 */
			public readonly menuItems: Adobe.Incopy.MenuItems;
			/**
			 * A collection of menu separators.
			 * @type {Adobe.Incopy.MenuSeparators}
			 * @readonly
			 */
			public readonly menuSeparators: Adobe.Incopy.MenuSeparators;
			/**
			 * The name of the Menu.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The parent of the Menu (a Application).
			 * @type {Adobe.Incopy.Application}
			 * @readonly
			 */
			public readonly parent: Adobe.Incopy.Application;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * A collection of submenus.
			 * @type {Adobe.Incopy.Submenus}
			 * @readonly
			 */
			public readonly submenus: Adobe.Incopy.Submenus;
			/**
			 * The name of the Menu for display in the user interface. The 
			 * title includes any ampersand characters (&), which are used 
			 * to tell the Windows OS to underline the following character 
			 * in the name for use with the Alt key to navigate to a menu 
			 * item. Double ampersands are used to display an actual 
			 * ampersand character in the name. The Mac OS ignores and 
			 * removes the extra ampersand characters.
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
			public addEventListenerMenu(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerMenu(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}