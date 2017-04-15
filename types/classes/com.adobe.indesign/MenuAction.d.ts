/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MenuAction extends Adobe.Csawlib.CSHostObject {
			/**
			 * Dispatched after the MenuAction is invoked. This event does 
			 * not bubble. This event is not cancelable.
			 */
			public static readonly AFTER_INVOKE: string;
			/** The menu action area. */
			public readonly area: string;
			/**
			 * Dispatched before the MenuAction is invoked. This event does 
			 * not bubble. This event is cancelable.
			 */
			public static readonly BEFORE_INVOKE: string;
			/**
			 * If true, the menu item associated with the menu action is 
			 * checked.
			 */
			public readonly checked: boolean;
			/** If true, the MenuAction is enabled. */
			public readonly enabled: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The unique ID of the MenuAction. */
			public readonly id: number;
			/** The index of the MenuAction within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** The name of the MenuAction. */
			public readonly name: string;
			/** The parent of the MenuAction (a Application). */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The name of the MenuAction for display in the user 
			 * interface. The title includes any ampersand characters (&), 
			 * which are used to tell the Windows OS to underline the 
			 * following character in the name for use with the Alt key to 
			 * navigate to a menu item. Double ampersands are used to 
			 * display an actual ampersand character in the name. The Mac 
			 * OS ignores and removes the extra ampersand characters.
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
			public addEventListenerMenuAction(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam - The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam - The key.
			 * @param {string} valueParam - The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/** Invoke the action. */
			public invoke(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerMenuAction(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}