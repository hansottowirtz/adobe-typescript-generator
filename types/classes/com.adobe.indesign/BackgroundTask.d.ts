/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BackgroundTask extends Adobe.Csawlib.CSHostObject {
			/**
			 * The alerts encountered while running this task object. Can 
			 * return: Array of Array of 2 TaskAlertType enumerators or 
			 * Strings.
			 */
			public readonly alerts: any;
			/** The document name on which this task operates. */
			public readonly documentName: string;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The unique ID of the BackgroundTask. */
			public readonly id: number;
			/**
			 * The index of the BackgroundTask within its containing 
			 * object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The name of the BackgroundTask. */
			public readonly name: string;
			/** The parent of the BackgroundTask (a Application). */
			public readonly parent: Adobe.Indesign.Application;
			/** Progress information for this task. */
			public readonly percentDone: number;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The current status of this task object. */
			public readonly status: Adobe.Indesign.TaskState;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerBackgroundTask(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Cancels the specified background task. */
			public cancelTask(): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Queries for a particular property in the task metadata.
			 * @param {string} nameParam - The task property being queried
			 */
			public queryProperty(nameParam: string): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerBackgroundTask(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/** Waits for the task to finish. */
			public waitForTask(): Adobe.Indesign.TaskState;
		}
	}
}