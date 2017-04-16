/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class LinkMetadata extends Adobe.Indesign.Preference {
			/** The author of the document. */
			public readonly author: string;
			/**
			 * The URL of the file that contains the linked copyright 
			 * statement.
			 */
			public readonly copyrightInfoURL: string;
			/** The text to use as a copyright notice. */
			public readonly copyrightNotice: string;
			/** The copyright status of the document. */
			public readonly copyrightStatus: Adobe.Indesign.CopyrightStatus;
			/** The creation date of the document. */
			public readonly creationDate: Date;
			/** The name of the application used to create the document. */
			public readonly creator: string;
			/** The description of the LinkMetadata. */
			public readonly description: string;
			/** The title of the document. */
			public readonly documentTitle: string;
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
			public readonly jobName: string;
			/** The list of keywords associated with the document. */
			public readonly keywords: any;
			/** The most recent modification date of the document. */
			public readonly modificationDate: Date;
			/** The parent of the LinkMetadata (a Link). */
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
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerLinkMetadata(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Counts the number of items in the container.
			 * @param {string} namespaceParam The namespace of the 
			 * container.
			 * @param {string} pathParam The path to the container.
			 */
			public countContainer(namespaceParam: string, pathParam: string): number;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Gets the XMP property value associated with the specified 
			 * path.
			 * @param {string} namespaceParam The namespace of the 
			 * property.
			 * @param {string} pathParam The specified path.
			 */
			public getProperty(namespaceParam: string, pathParam: string): string;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerLinkMetadata(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}