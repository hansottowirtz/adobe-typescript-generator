/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Submenu extends Adobe.Incopy.MenuElement {
			/**
			 * Dispatched before the Submenu is displayed. This event does 
			 * not bubble. This event is not cancelable.
			 */
			public static readonly BEFORE_DISPLAY: string;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** The index of the Submenu within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A collection of menu elements. */
			public readonly menuElements: Adobe.Incopy.MenuElements;
			/** A collection of menu items. */
			public readonly menuItems: Adobe.Incopy.MenuItems;
			/** A collection of menu separators. */
			public readonly menuSeparators: Adobe.Incopy.MenuSeparators;
			/** The name of the Submenu. */
			public readonly name: string;
			/** The parent of the Submenu (a Menu or Submenu). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of submenus. */
			public readonly submenus: Adobe.Incopy.Submenus;
			/**
			 * The name of the Submenu for display in the user interface. 
			 * The title includes any ampersand characters (&), which are 
			 * used to tell the Windows OS to underline the following 
			 * character in the name for use with the Alt key to navigate 
			 * to a menu item. Double ampersands are used to display an 
			 * actual ampersand character in the name. The Mac OS ignores 
			 * and removes the extra ampersand characters.
			 */
			public readonly title: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerSubmenu(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Deletes the Submenu. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerSubmenu(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}