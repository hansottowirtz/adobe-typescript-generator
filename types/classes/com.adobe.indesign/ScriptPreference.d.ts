/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ScriptPreference extends Adobe.Indesign.Preference {
			/** If true, enables redraw during script execution. */
			public enableRedraw: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The measurement unit used during script processing. Can 
			 * return: AutoEnum enumerator or MeasurementUnits enumerator.
			 */
			public measurementUnit: any;
			/** The parent of the ScriptPreference (a Application). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The path to the Scripts folder for the application. */
			public readonly scriptsFolder: File;
			/**
			 * A list of the scripts in the Scripts folder. Can return: 
			 * Array of Array of 2 Strings or Files.
			 */
			public readonly scriptsList: any;
			/**
			 * Controls the display of dialogs and alerts during script 
			 * processing.
			 */
			public userInteractionLevel: Adobe.Indesign.UserInteractionLevels;
			/**
			 * The version of the scripting environment. Can also accept: 
			 * Real.
			 */
			public version: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerScriptPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerScriptPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}