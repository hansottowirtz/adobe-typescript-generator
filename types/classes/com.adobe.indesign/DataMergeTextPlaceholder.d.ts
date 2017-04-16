/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DataMergeTextPlaceholder extends Adobe.Csawlib.CSHostObject {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The data merge field to insert in the placeholder. For 
			 * information, see data merge text placeholder and data merge 
			 * image placeholder.
			 */
			public readonly field: Adobe.Indesign.DataMergeField;
			/**
			 * The index of the DataMergeTextPlaceholder within its 
			 * containing object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The number of objects in the collection. */
			public readonly length: number;
			/** The parent of the DataMergeTextPlaceholder (a Document). */
			public readonly parent: Adobe.Indesign.Document;
			/** The story that contains the text. */
			public readonly parentStory: Adobe.Indesign.Story;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The insertion point before the table in the story containing 
			 * the table.
			 */
			public readonly storyOffset: Adobe.Indesign.InsertionPoint;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerDataMergeTextPlaceholder(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerDataMergeTextPlaceholder(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}