/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class MenuAction extends Adobe.Csawlib.CSHostObject {
			/**
			 * Dispatched after the MenuAction is invoked. This event does 
			 * not bubble. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_INVOKE: string;
			/**
			 * The menu action area.
			 * @type {string}
			 * @readonly
			 */
			public readonly area: string;
			/**
			 * Dispatched before the MenuAction is invoked. This event does 
			 * not bubble. This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_INVOKE: string;
			/**
			 * If true, the menu item associated with the menu action is 
			 * checked.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly checked: boolean;
			/**
			 * If true, the MenuAction is enabled.
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
			 * The unique ID of the MenuAction.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the MenuAction within its containing object.
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
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * The name of the MenuAction.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The parent of the MenuAction (a Application).
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
			 * The name of the MenuAction for display in the user 
			 * interface. The title includes any ampersand characters (&), 
			 * which are used to tell the Windows OS to underline the 
			 * following character in the name for use with the Alt key to 
			 * navigate to a menu item. Double ampersands are used to 
			 * display an actual ampersand character in the name. The Mac 
			 * OS ignores and removes the extra ampersand characters.
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
			public addEventListenerMenuAction(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 * @returns {string}
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Invoke the action.
			 * @returns {void}
			 */
			public invoke(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerMenuAction(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}