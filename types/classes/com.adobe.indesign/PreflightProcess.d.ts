/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PreflightProcess extends Adobe.Csawlib.CSHostObject {
			/**
			 * The aggregated results found by the process. Can return: 
			 * Ordered array containing documentName:String, 
			 * profileName:String, results:Array of Ordered array 
			 * containing parentNodeID:Long Integer, errorName:String, 
			 * pageNumber:String, errorInfo:String, errorDetail:Array of 
			 * Ordered array containing label:String, description:String.
			 */
			public readonly aggregatedResults: any;
			/** The preflight profile the process is using. */
			public readonly appliedProfile: Adobe.Indesign.PreflightProfile;
			/** The description of the PreflightProcess. */
			public readonly description: string;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The index of the PreflightProcess within its containing 
			 * object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The parent of the PreflightProcess (a Application). */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * A string containing a description of all elements visited by 
			 * the process.
			 */
			public readonly processInventory: string;
			/** The results found by the process as a large string. */
			public readonly processResults: string;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The target document the process is inspecting. */
			public readonly targetObject: Adobe.Indesign.Document;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerPreflightProcess(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Deletes the PreflightProcess. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerPreflightProcess(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Saves a report of the completed preflight process.
			 * @param {File} toParam - The preflight report to save to.
			 * @param {boolean} autoOpenParam - If true, automatically open 
			 * the report after creation. (Optional)
			 */
			public saveReport(toParam: File, autoOpenParam: boolean): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/**
			 * Waits for the process to finish, up to an optional maximum 
			 * amount of time. No other processes get cycles during this 
			 * time.
			 * @param {number} waitTimeParam - The maximum time to wait, in 
			 * seconds; if omitted, waits until completion no matter how 
			 * long it takes. (Optional)
			 */
			public waitForProcess(waitTimeParam: number): boolean;
		}
	}
}