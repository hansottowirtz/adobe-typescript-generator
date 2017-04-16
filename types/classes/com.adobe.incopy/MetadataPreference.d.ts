/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class MetadataPreference extends Adobe.Incopy.Preference {
			/**
			 * The author of the document.
			 * @type {string}
			 */
			public author: string;
			/**
			 * The URL of the file that contains the linked copyright 
			 * statement.
			 * @type {string}
			 */
			public copyrightInfoURL: string;
			/**
			 * The text to use as a copyright notice.
			 * @type {string}
			 */
			public copyrightNotice: string;
			/**
			 * The copyright status of the document.
			 * @type {Adobe.Incopy.CopyrightStatus}
			 */
			public copyrightStatus: Adobe.Incopy.CopyrightStatus;
			/**
			 * The creation date of the document.
			 * @type {Date}
			 * @readonly
			 */
			public readonly creationDate: Date;
			/**
			 * The name of the application used to create the document.
			 * @type {string}
			 * @readonly
			 */
			public readonly creator: string;
			/**
			 * The description of the MetadataPreference.
			 * @type {string}
			 */
			public description: string;
			/**
			 * The title of the document.
			 * @type {string}
			 */
			public documentTitle: string;
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
			 * The format of the document.
			 * @type {string}
			 * @readonly
			 */
			public readonly format: string;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The job name.
			 * @type {string}
			 */
			public jobName: string;
			/**
			 * The list of keywords associated with the document.
			 * @type {any}
			 */
			public keywords: any;
			/**
			 * The most recent modification date of the document.
			 * @type {Date}
			 * @readonly
			 */
			public readonly modificationDate: Date;
			/**
			 * The parent of the MetadataPreference (a Document).
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
			 * The location of the document on the asset management server.
			 * @type {string}
			 * @readonly
			 */
			public readonly serverURL: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerMetadataPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Uses metadata from the specified external file to define any 
			 * undefined metadata properties in the document.
			 * @param {File} fromParam The path to the external file that 
			 * contains the metadata.
			 * @param {boolean} affectAllParam If true, also replaces 
			 * existing metadata with data from the external file. If 
			 * false, does not replace existing metadata. Note: Defaults to 
			 * false. (Optional)
			 * @returns {void}
			 */
			public append(fromParam: File, affectAllParam: boolean): void;
			/**
			 * Counts the number of items in the container.
			 * @param {string} namespaceParam The namespace of the 
			 * container.
			 * @param {string} pathParam The path to the container.
			 * @returns {number}
			 */
			public countContainer(namespaceParam: string, pathParam: string): number;
			/**
			 * Creates an empty container.
			 * @param {string} namespaceParam The namespace of the 
			 * container.
			 * @param {string} pathParam The path to the container.
			 * @param {number} indexParam The index of the item within the 
			 * container. Specified values must be 1 or greater. To append 
			 * the item to the end of the index and allow the next 
			 * available value to be assigned, use 0. (Optional)
			 * @param {ContainerType} containerParam The container type. 
			 * Note: Required when the new item is the first item added to 
			 * the container. (Optional)
			 * @returns {void}
			 */
			public createContainerItem(namespaceParam: string, pathParam: string, indexParam: number, containerParam: ContainerType): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Gets the XMP property value associated with the specified 
			 * path.
			 * @param {string} namespaceParam The namespace of the 
			 * property.
			 * @param {string} pathParam The specified path.
			 * @returns {string}
			 */
			public getProperty(namespaceParam: string, pathParam: string): string;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerMetadataPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Replaces the current metadata in the document with metadata 
			 * from the specified file.
			 * @param {File} usingParam The full path to the file that 
			 * contains the replacement metadata.
			 * @param {boolean} affectAllParam If true, treats all 
			 * properties as external. Note: Defaults to false. (Optional)
			 * @returns {void}
			 */
			public replace(usingParam: File, affectAllParam: boolean): void;
			/**
			 * Saves the metadata in the document to an external file.
			 * @param {File} toParam The path to the external file. 
			 * @returns {void}
			 */
			public save(toParam: File): void;
			/**
			 * Sets the XMP property associated with the specified path.
			 * @param {string} namespaceParam The namespace of the 
			 * property.
			 * @param {string} pathParam The specified path(s).
			 * @param {string} valueParam The value to assign to the 
			 * property. Note: To remove the property, pass an empty 
			 * string.
			 * @returns {void}
			 */
			public setProperty(namespaceParam: string, pathParam: string, valueParam: string): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}