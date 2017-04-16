/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Index extends Adobe.Csawlib.CSHostObject {
			/**
			 * The topics in the specified index section.
			 * @type {any}
			 * @readonly
			 */
			public readonly allTopics: any;
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
			 * The unique ID of the Index.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the Index within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * A collection of index sections.
			 * @type {Adobe.Indesign.IndexSections}
			 * @readonly
			 */
			public readonly indexSections: Adobe.Indesign.IndexSections;
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
			 * The name of the Index; this is an alias to the Index's label 
			 * property.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The parent of the Index (a Document).
			 * @type {Adobe.Indesign.Document}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Document;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * A collection of index topics.
			 * @type {Adobe.Indesign.Topics}
			 * @readonly
			 */
			public readonly topics: Adobe.Indesign.Topics;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerIndex(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Makes the initial letter for the specified index topic or 
			 * group of index topics upper case.
			 * @param {IndexCapitalizationOptions} 
			 * capitalizationOptionParam The entry or entries to 
			 * capitalize. (Optional)
			 * @returns {void}
			 */
			public capitalize(capitalizationOptionParam: IndexCapitalizationOptions): void;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 * @returns {string}
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
			 * @returns {any}
			 */
			public generate(onParam: any, placePointParam: any[], destinationLayerParam: Layer, autoflowingParam: boolean, includeOversetParam: boolean): any;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Imports a list of index topics.
			 * @param {File} fromParam The file from which to import the 
			 * topics.
			 * @returns {void}
			 */
			public importTopics(fromParam: File): void;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerIndex(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Removes all index topics that do not have any index entries.
			 * @returns {void}
			 */
			public removeUnusedTopics(): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
			/**
			 * Updates the index preview pane. Note: Does not update the 
			 * index.
			 * @returns {void}
			 */
			public update(): void;
		}
	}
}