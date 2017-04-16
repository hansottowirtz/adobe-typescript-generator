/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class BackgroundTask extends Adobe.Csawlib.CSHostObject {
			/**
			 * The alerts encountered while running this task object. Can 
			 * return: Array of Array of 2 TaskAlertType enumerators or 
			 * Strings.
			 * @type {any}
			 * @readonly
			 */
			public readonly alerts: any;
			/**
			 * The document name on which this task operates.
			 * @type {string}
			 * @readonly
			 */
			public readonly documentName: string;
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
			 * The unique ID of the BackgroundTask.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the BackgroundTask within its containing 
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
			 * The name of the BackgroundTask.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The parent of the BackgroundTask (a Application).
			 * @type {Adobe.Incopy.Application}
			 * @readonly
			 */
			public readonly parent: Adobe.Incopy.Application;
			/**
			 * Progress information for this task.
			 * @type {number}
			 * @readonly
			 */
			public readonly percentDone: number;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The current status of this task object.
			 * @type {Adobe.Incopy.TaskState}
			 * @readonly
			 */
			public readonly status: Adobe.Incopy.TaskState;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerBackgroundTask(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Cancels the specified background task.
			 * @returns {void}
			 */
			public cancelTask(): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Queries for a particular property in the task metadata.
			 * @param {string} nameParam The task property being queried
			 * @returns {any}
			 */
			public queryProperty(nameParam: string): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerBackgroundTask(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
			/**
			 * Waits for the task to finish.
			 * @returns {Adobe.Incopy.TaskState}
			 */
			public waitForTask(): Adobe.Incopy.TaskState;
		}
	}
}