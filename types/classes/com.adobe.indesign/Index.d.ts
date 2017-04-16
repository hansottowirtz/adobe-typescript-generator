/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Index extends Adobe.Csawlib.CSHostObject {
			/** The topics in the specified index section. */
			public readonly allTopics: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The unique ID of the Index. */
			public readonly id: number;
			/** The index of the Index within its containing object. */
			public readonly index: number;
			/** A collection of index sections. */
			public readonly indexSections: Adobe.Indesign.IndexSections;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/**
			 * The name of the Index; this is an alias to the Index's label 
			 * property.
			 */
			public name: string;
			/** The parent of the Index (a Document). */
			public readonly parent: Adobe.Indesign.Document;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of index topics. */
			public readonly topics: Adobe.Indesign.Topics;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerIndex(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Makes the initial letter for the specified index topic or 
			 * group of index topics upper case.
			 * @param {IndexCapitalizationOptions} 
			 * capitalizationOptionParam The entry or entries to 
			 * capitalize. (Optional)
			 */
			public capitalize(capitalizationOptionParam: IndexCapitalizationOptions): void;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Generates a new index story.
			 * @param {any} onParam The spread or page on which to place 
			 * the story. Can accept: Page, Spread or MasterSpread. 
			 * (Optional)
			 * @param {any[]} placePointParam The coordinates of the upper 
			 * left corner of the story bounding box, in the format [x, y]. 
			 * (Optional)
			 * @param {Layer} destinationLayerParam The layer on which to 
			 * place the story. (Optional)
			 * @param {boolean} autoflowingParam If true, allows the story 
			 * to flow onto subsequent pages if the story does not fit on 
			 * the specified page. If no subsequent pages exist in the 
			 * document, creates the necessary pages. (Optional)
			 * @param {boolean} includeOversetParam If true, includes 
			 * topics in overset text in the story.  (Optional)
			 */
			public generate(onParam: any, placePointParam: any[], destinationLayerParam: Layer, autoflowingParam: boolean, includeOversetParam: boolean): any;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Imports a list of index topics.
			 * @param {File} fromParam The file from which to import the 
			 * topics.
			 */
			public importTopics(fromParam: File): void;
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
			public removeEventListenerIndex(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Removes all index topics that do not have any index entries.
			 */
			public removeUnusedTopics(): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/**
			 * Updates the index preview pane. Note: Does not update the 
			 * index.
			 */
			public update(): void;
		}
	}
}