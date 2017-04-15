/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class MetadataPreference extends Adobe.Indesign.Preference {
			/** The author of the document. */
			public author: string;
			/**
			 * The URL of the file that contains the linked copyright 
			 * statement.
			 */
			public copyrightInfoURL: string;
			/** The text to use as a copyright notice. */
			public copyrightNotice: string;
			/** The copyright status of the document. */
			public copyrightStatus: Adobe.Indesign.CopyrightStatus;
			/** The creation date of the document. */
			public readonly creationDate: Date;
			/** The name of the application used to create the document. */
			public readonly creator: string;
			/** The description of the MetadataPreference. */
			public description: string;
			/** The title of the document. */
			public documentTitle: string;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The format of the document. */
			public readonly format: string;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The job name. */
			public jobName: string;
			/** The list of keywords associated with the document. */
			public keywords: any;
			/** The most recent modification date of the document. */
			public readonly modificationDate: Date;
			/** The parent of the MetadataPreference (a Document). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The location of the document on the asset management server.
			 */
			public readonly serverURL: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerMetadataPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Uses metadata from the specified external file to define any 
			 * undefined metadata properties in the document.
			 * @param {File} fromParam - The path to the external file that 
			 * contains the metadata.
			 * @param {boolean} affectAllParam - If true, also replaces 
			 * existing metadata with data from the external file. If 
			 * false, does not replace existing metadata. Note: Defaults to 
			 * false. (Optional)
			 */
			public append(fromParam: File, affectAllParam: boolean): void;
			/**
			 * Counts the number of items in the container.
			 * @param {string} namespaceParam - The namespace of the 
			 * container.
			 * @param {string} pathParam - The path to the container.
			 */
			public countContainer(namespaceParam: string, pathParam: string): number;
			/**
			 * Creates an empty container.
			 * @param {string} namespaceParam - The namespace of the 
			 * container.
			 * @param {string} pathParam - The path to the container.
			 * @param {number} indexParam - The index of the item within 
			 * the container. Specified values must be 1 or greater. To 
			 * append the item to the end of the index and allow the next 
			 * available value to be assigned, use 0. (Optional)
			 * @param {ContainerType} containerParam - The container type. 
			 * Note: Required when the new item is the first item added to 
			 * the container. (Optional)
			 */
			public createContainerItem(namespaceParam: string, pathParam: string, indexParam: number, containerParam: ContainerType): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Gets the XMP property value associated with the specified 
			 * path.
			 * @param {string} namespaceParam - The namespace of the 
			 * property.
			 * @param {string} pathParam - The specified path.
			 */
			public getProperty(namespaceParam: string, pathParam: string): string;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerMetadataPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Replaces the current metadata in the document with metadata 
			 * from the specified file.
			 * @param {File} usingParam - The full path to the file that 
			 * contains the replacement metadata.
			 * @param {boolean} affectAllParam - If true, treats all 
			 * properties as external. Note: Defaults to false. (Optional)
			 */
			public replace(usingParam: File, affectAllParam: boolean): void;
			/**
			 * Saves the metadata in the document to an external file.
			 * @param {File} toParam - The path to the external file. 
			 */
			public save(toParam: File): void;
			/**
			 * Sets the XMP property associated with the specified path.
			 * @param {string} namespaceParam - The namespace of the 
			 * property.
			 * @param {string} pathParam - The specified path(s).
			 * @param {string} valueParam - The value to assign to the 
			 * property. Note: To remove the property, pass an empty 
			 * string.
			 */
			public setProperty(namespaceParam: string, pathParam: string, valueParam: string): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}