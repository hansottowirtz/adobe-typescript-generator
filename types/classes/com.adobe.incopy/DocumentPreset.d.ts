/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class DocumentPreset extends Adobe.Csawlib.CSHostObject {
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
			 * If true, the document has facing pages.
			 * @type {boolean}
			 */
			public facingPages: boolean;
			/**
			 * The unique ID of the DocumentPreset.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the DocumentPreset within its containing 
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
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * The name of the DocumentPreset.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The height of the page.
			 * @type {any}
			 */
			public pageHeight: any;
			/**
			 * The size of the page.
			 * @type {string}
			 */
			public pageSize: string;
			/**
			 * The width of the page.
			 * @type {any}
			 */
			public pageWidth: any;
			/**
			 * The parent of the DocumentPreset (a Application).
			 * @type {Adobe.Incopy.Application}
			 * @readonly
			 */
			public readonly parent: Adobe.Incopy.Application;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The depth of the text area.
			 * @type {number}
			 */
			public textAreaDepth: number;
			/**
			 * The unit in which to measure the text area depth.
			 * @type {Adobe.Incopy.TextAreaDepthUnit}
			 */
			public textAreaDepthUnit: Adobe.Incopy.TextAreaDepthUnit;
			/**
			 * The width of the text area.
			 * @type {any}
			 */
			public textAreaWidth: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerDocumentPreset(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Duplicates the DocumentPreset.
			 * @returns {Adobe.Incopy.DocumentPreset}
			 */
			public duplicate(): Adobe.Incopy.DocumentPreset;
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
			 * Deletes the DocumentPreset.
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
			public removeEventListenerDocumentPreset(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}