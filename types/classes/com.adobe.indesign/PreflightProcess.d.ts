/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

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
			 * @type {any}
			 * @readonly
			 */
			public readonly aggregatedResults: any;
			/**
			 * The preflight profile the process is using.
			 * @type {Adobe.Indesign.PreflightProfile}
			 * @readonly
			 */
			public readonly appliedProfile: Adobe.Indesign.PreflightProfile;
			/**
			 * The description of the PreflightProcess.
			 * @type {string}
			 * @readonly
			 */
			public readonly description: string;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Indesign.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Indesign.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The index of the PreflightProcess within its containing 
			 * object.
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
			 * The parent of the PreflightProcess (a Application).
			 * @type {Adobe.Indesign.Application}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * A string containing a description of all elements visited by 
			 * the process.
			 * @type {string}
			 * @readonly
			 */
			public readonly processInventory: string;
			/**
			 * The results found by the process as a large string.
			 * @type {string}
			 * @readonly
			 */
			public readonly processResults: string;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The target document the process is inspecting.
			 * @type {Adobe.Indesign.Document}
			 * @readonly
			 */
			public readonly targetObject: Adobe.Indesign.Document;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerPreflightProcess(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Deletes the PreflightProcess.
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerPreflightProcess(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Saves a report of the completed preflight process.
			 * @param {File} toParam The preflight report to save to.
			 * @param {boolean} autoOpenParam If true, automatically open 
			 * the report after creation. (Optional)
			 * @returns {void}
			 */
			public saveReport(toParam: File, autoOpenParam: boolean): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
			/**
			 * Waits for the process to finish, up to an optional maximum 
			 * amount of time. No other processes get cycles during this 
			 * time.
			 * @param {number} waitTimeParam The maximum time to wait, in 
			 * seconds; if omitted, waits until completion no matter how 
			 * long it takes. (Optional)
			 * @returns {boolean}
			 */
			public waitForProcess(waitTimeParam: number): boolean;
		}
	}
}