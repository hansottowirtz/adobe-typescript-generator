/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** MenuAction */
		class ScriptMenuAction extends Adobe.Indesign.MenuAction {
			/**
			 * Dispatched after the ScriptMenuAction is invoked. This event 
			 * does not bubble. This event is not cancelable.
			 */
			public static readonly AFTER_INVOKE: string;
			/** The menu action area. */
			public area: string;
			/**
			 * Dispatched before the ScriptMenuAction is displayed. This 
			 * event does not bubble. This event is not cancelable.
			 */
			public static readonly BEFORE_DISPLAY: string;
			/**
			 * Dispatched before the ScriptMenuAction is invoked. This 
			 * event does not bubble. This event is cancelable.
			 */
			public static readonly BEFORE_INVOKE: string;
			/**
			 * If true, the menu item associated with the menu action is 
			 * checked.
			 */
			public checked: boolean;
			/** If true, the ScriptMenuAction is enabled. */
			public enabled: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The unique ID of the ScriptMenuAction. */
			public readonly id: number;
			/**
			 * The index of the ScriptMenuAction within its containing 
			 * object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** The name of the ScriptMenuAction. */
			public name: string;
			/**
			 * Dispatched when the ScriptMenuAction is invoked. This event 
			 * does not bubble. This event is not cancelable.
			 */
			public static readonly ON_INVOKE: string;
			/** The parent of the ScriptMenuAction (a Application). */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The name of the ScriptMenuAction for display in the user 
			 * interface. The title includes any ampersand characters (&), 
			 * which are used to tell the Windows OS to underline the 
			 * following character in the name for use with the Alt key to 
			 * navigate to a menu item. Double ampersands are used to 
			 * display an actual ampersand character in the name. The Mac 
			 * OS ignores and removes the extra ampersand characters.
			 */
			public title: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerScriptMenuAction(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			/** Deletes the ScriptMenuAction. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerScriptMenuAction(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}