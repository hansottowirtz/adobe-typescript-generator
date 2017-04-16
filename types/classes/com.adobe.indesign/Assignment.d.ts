/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Assignment extends Adobe.Csawlib.CSHostObject {
			/**
			 * A collection of assigned stories.
			 * @type {Adobe.Indesign.AssignedStories}
			 * @readonly
			 */
			public readonly assignedStories: Adobe.Indesign.AssignedStories;
			/**
			 * The status of the assignment file.
			 * @type {Adobe.Indesign.AssignmentStatus}
			 * @readonly
			 */
			public readonly assignmentFileStatus: Adobe.Indesign.AssignmentStatus;
			/**
			 * The path to the document that the hyperlink destination 
			 * points to.
			 * @type {File}
			 * @readonly
			 */
			public readonly documentPath: File;
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
			 * The content to export in the assignment.
			 * @type {Adobe.Indesign.AssignmentExportOptions}
			 */
			public exportOptions: Adobe.Indesign.AssignmentExportOptions;
			/**
			 * The file path (colon delimited on the Mac OS). Can also 
			 * accept: File.
			 * @type {string}
			 * @readonly
			 */
			public readonly filePath: string;
			/**
			 * The color of the assignment's frames. Can return: Array of 3 
			 * Reals (0 - 255) or UIColors enumerator or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public frameColor: any;
			/**
			 * The unique ID of the Assignment.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * If true, includes linked files when packaging the 
			 * assignment.
			 * @type {boolean}
			 */
			public includeLinksWhenPackage: boolean;
			/**
			 * The index of the Assignment within its containing object.
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
			 * The name of the Assignment.
			 * @type {string}
			 */
			public name: string;
			/**
			 * If true, the assignment is packaged.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly packaged: boolean;
			/**
			 * If true, the assignment package is up to date.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly packageUpToDate: boolean;
			/**
			 * The parent of the Assignment (a Document).
			 * @type {Adobe.Indesign.Document}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Document;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The user name to assign to tracked changes and notes.
			 * @type {string}
			 */
			public userName: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerAssignment(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Cancels the package for an assignment.
			 * @returns {void}
			 */
			public cancelPackage(): void;
			/**
			 * Creates an assignment package.
			 * @param {File} filePathParam The full path name of the 
			 * assignment package file.
			 * @param {boolean} submitParam If true, submits assigned 
			 * stories before packaging the assignment. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Assignment (Optional)
			 * @returns {File}
			 */
			public createPackage(filePathParam: File, submitParam: boolean, withPropertiesParam: any): File;
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
			 * Deletes the assignment and its file.
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
			public removeEventListenerAssignment(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
			/**
			 * Updates the assignment file.
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {void}
			 */
			public update(versionCommentsParam: string, forceSaveParam: boolean): void;
		}
	}
}