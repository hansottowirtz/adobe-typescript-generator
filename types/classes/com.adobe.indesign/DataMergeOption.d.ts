/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class DataMergeOption extends Adobe.Indesign.Preference {
			/**
			 * If true, centers the image in the frame; preserves the frame 
			 * size as well as content size and proportions. Note: If the 
			 * content is larger than the frame, content around the edges 
			 * is obscured by the bounding box of the frame.
			 * @type {boolean}
			 */
			public centerImage: boolean;
			/**
			 * If true, creates a new document when records are merged.
			 * @type {boolean}
			 */
			public createNewDocument: boolean;
			/**
			 * The maximum number of pages per document.
			 * @type {number}
			 */
			public documentSize: number;
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
			 * Instructions for fitting content in a frame.
			 * @type {Adobe.Indesign.Fitting}
			 */
			public fittingOption: Adobe.Indesign.Fitting;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * If true, links images to the target document. If false, 
			 * embeds images in the target document.
			 * @type {boolean}
			 */
			public linkImages: boolean;
			/**
			 * The parent of the DataMergeOption (a Application or 
			 * Document).
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
			 * If true, removes blank lines caused by empty fields.
			 * @type {boolean}
			 */
			public removeBlankLines: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerDataMergeOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerDataMergeOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}