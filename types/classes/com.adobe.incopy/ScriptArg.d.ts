/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class ScriptArg extends Adobe.Incopy.Preference {
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
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the ScriptArg (a Application).
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
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerScriptArg(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Clears all script arguments.
			 * @returns {void}
			 */
			public clear(): void;
			/**
			 * Gets the value of a script argument.
			 * @param {string} nameParam The name of the script argument.
			 * @returns {string}
			 */
			public get(nameParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Gets the value of a script argument.
			 * @param {string} nameParam The name of the script argument.
			 * @returns {string}
			 */
			public getValue(nameParam: string): string;
			/**
			 * Verifies whether the script argument is defined.
			 * @param {string} nameParam The name of the script argument.
			 * @returns {boolean}
			 */
			public isDefined(nameParam: string): boolean;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerScriptArg(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Restores all script arguments.
			 * @returns {void}
			 */
			public restore(): void;
			/**
			 * Saves the script arguments.
			 * @returns {void}
			 */
			public save(): void;
			/**
			 * Sets the value of a script argument.
			 * @param {string} nameParam The name of the script argument.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public set(nameParam: string, valueParam: string): void;
			/**
			 * Sets the value of a script argument.
			 * @param {string} nameParam The name of the script argument.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public setValue(nameParam: string, valueParam: string): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}