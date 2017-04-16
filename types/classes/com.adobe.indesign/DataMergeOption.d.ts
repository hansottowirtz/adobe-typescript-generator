/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class DataMergeOption extends Adobe.Indesign.Preference {
			/**
			 * If true, centers the image in the frame; preserves the frame 
			 * size as well as content size and proportions. Note: If the 
			 * content is larger than the frame, content around the edges 
			 * is obscured by the bounding box of the frame.
			 */
			public centerImage: boolean;
			/** If true, creates a new document when records are merged. */
			public createNewDocument: boolean;
			/** The maximum number of pages per document. */
			public documentSize: number;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** Instructions for fitting content in a frame. */
			public fittingOption: Adobe.Indesign.Fitting;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * If true, links images to the target document. If false, 
			 * embeds images in the target document.
			 */
			public linkImages: boolean;
			/**
			 * The parent of the DataMergeOption (a Application or 
			 * Document).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** If true, removes blank lines caused by empty fields. */
			public removeBlankLines: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerDataMergeOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerDataMergeOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}