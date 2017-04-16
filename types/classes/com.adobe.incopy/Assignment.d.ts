/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Assignment extends Adobe.Csawlib.CSHostObject {
			/** A collection of assigned stories. */
			public readonly assignedStories: Adobe.Incopy.AssignedStories;
			/**
			 * The path to the document that the hyperlink destination 
			 * points to.
			 */
			public readonly documentPath: File;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** The content to export in the assignment. */
			public readonly exportOptions: Adobe.Incopy.AssignmentExportOptions;
			/**
			 * The file path (colon delimited on the Mac OS). Can also 
			 * accept: File.
			 */
			public readonly filePath: string;
			/**
			 * The color of the assignment's frames. Can return: Array of 3 
			 * Reals (0 - 255) or UIColors enumerator or NothingEnum 
			 * enumerator.
			 */
			public readonly frameColor: any;
			/** The unique ID of the Assignment. */
			public readonly id: number;
			/**
			 * If true, includes linked files when packaging the 
			 * assignment.
			 */
			public includeLinksWhenPackage: boolean;
			/** The index of the Assignment within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** The name of the Assignment. */
			public readonly name: string;
			/** If true, the assignment is packaged. */
			public readonly packaged: boolean;
			/** If true, the assignment package is up to date. */
			public readonly packageUpToDate: boolean;
			/** The parent of the Assignment (a Document). */
			public readonly parent: Adobe.Incopy.Document;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The user name to assign to tracked changes and notes. */
			public readonly userName: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerAssignment(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Creates an assignment package.
			 * @param {File} filePathParam The full path name of the 
			 * assignment pacakge file.
			 * @param {PackageType} packageTypeParam The package type.
			 * @param {boolean} submitParam If true, submit assigned 
			 * stories before packaging the assignment. (Optional)
			 * @param {boolean} includeAddedParam If true, includes added 
			 * links in the assginment package. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Assignment (Optional)
			 */
			public createPackage(filePathParam: File, packageTypeParam: PackageType, submitParam: boolean, includeAddedParam: boolean, withPropertiesParam: any): File;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
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
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerAssignment(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}