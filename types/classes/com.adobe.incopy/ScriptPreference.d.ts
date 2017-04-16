/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class ScriptPreference extends Adobe.Incopy.Preference {
			/**
			 * If true, enables redraw during script execution.
			 * @type {boolean}
			 */
			public enableRedraw: boolean;
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
			 * The measurement unit used during script processing. Can 
			 * return: AutoEnum enumerator or MeasurementUnits enumerator.
			 * @type {any}
			 */
			public measurementUnit: any;
			/**
			 * The parent of the ScriptPreference (a Application).
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
			 * The path to the Scripts folder for the application.
			 * @type {File}
			 * @readonly
			 */
			public readonly scriptsFolder: File;
			/**
			 * A list of the scripts in the Scripts folder. Can return: 
			 * Array of Array of 2 Strings or Files.
			 * @type {any}
			 * @readonly
			 */
			public readonly scriptsList: any;
			/**
			 * Controls the display of dialogs and alerts during script 
			 * processing.
			 * @type {Adobe.Incopy.UserInteractionLevels}
			 */
			public userInteractionLevel: Adobe.Incopy.UserInteractionLevels;
			/**
			 * The version of the scripting environment. Can also accept: 
			 * Real.
			 * @type {string}
			 */
			public version: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerScriptPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerScriptPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}