/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class ScriptArg extends Adobe.Incopy.Preference {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The parent of the ScriptArg (a Application). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerScriptArg(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/** Clears all script arguments. */
			public clear(): void;
			/**
			 * Gets the value of a script argument.
			 * @param {string} nameParam The name of the script argument.
			 */
			public get(nameParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Gets the value of a script argument.
			 * @param {string} nameParam The name of the script argument.
			 */
			public getValue(nameParam: string): string;
			/**
			 * Verifies whether the script argument is defined.
			 * @param {string} nameParam The name of the script argument.
			 */
			public isDefined(nameParam: string): boolean;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerScriptArg(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Restores all script arguments. */
			public restore(): void;
			/** Saves the script arguments. */
			public save(): void;
			/**
			 * Sets the value of a script argument.
			 * @param {string} nameParam The name of the script argument.
			 * @param {string} valueParam The value.
			 */
			public set(nameParam: string, valueParam: string): void;
			/**
			 * Sets the value of a script argument.
			 * @param {string} nameParam The name of the script argument.
			 * @param {string} valueParam The value.
			 */
			public setValue(nameParam: string, valueParam: string): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}