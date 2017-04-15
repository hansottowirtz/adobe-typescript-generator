/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MenuItem extends Adobe.Indesign.MenuElement {
			/** The menu action that implements the menu item. */
			public readonly associatedMenuAction: Adobe.Indesign.MenuAction;
			/**
			 * If true, the menu item associated with the menu action is 
			 * checked.
			 */
			public readonly checked: boolean;
			/** If true, the MenuItem is enabled. */
			public readonly enabled: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The unique ID of the MenuItem. */
			public readonly id: number;
			/** The index of the MenuItem within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The name of the MenuItem. */
			public readonly name: string;
			/** The parent of the MenuItem (a Menu or Submenu). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
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
			public addEventListenerMenuItem(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Deletes the MenuItem. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerMenuItem(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Selects the MenuItem. */
			public select(): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}