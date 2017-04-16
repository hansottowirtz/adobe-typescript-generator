/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class LinkMetadata extends Adobe.Incopy.Preference {
			/**
			 * The author of the document.
			 * @type {string}
			 * @readonly
			 */
			public readonly author: string;
			/**
			 * The URL of the file that contains the linked copyright 
			 * statement.
			 * @type {string}
			 * @readonly
			 */
			public readonly copyrightInfoURL: string;
			/**
			 * The text to use as a copyright notice.
			 * @type {string}
			 * @readonly
			 */
			public readonly copyrightNotice: string;
			/**
			 * The copyright status of the document.
			 * @type {Adobe.Incopy.CopyrightStatus}
			 * @readonly
			 */
			public readonly copyrightStatus: Adobe.Incopy.CopyrightStatus;
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
			 * The description of the LinkMetadata.
			 * @type {string}
			 * @readonly
			 */
			public readonly description: string;
			/**
			 * The title of the document.
			 * @type {string}
			 * @readonly
			 */
			public readonly documentTitle: string;
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
			 * @readonly
			 */
			public readonly jobName: string;
			/**
			 * The list of keywords associated with the document.
			 * @type {any}
			 * @readonly
			 */
			public readonly keywords: any;
			/**
			 * The most recent modification date of the document.
			 * @type {Date}
			 * @readonly
			 */
			public readonly modificationDate: Date;
			/**
			 * The parent of the LinkMetadata (a Link).
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
			public addEventListenerLinkMetadata(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Counts the number of items in the container.
			 * @param {string} namespaceParam The namespace of the 
			 * container.
			 * @param {string} pathParam The path to the container.
			 * @returns {number}
			 */
			public countContainer(namespaceParam: string, pathParam: string): number;
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
			public removeEventListenerLinkMetadata(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}