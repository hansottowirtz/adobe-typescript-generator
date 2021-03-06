/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Bookmark extends Adobe.Csawlib.CSHostObject {
			/**
			 * A collection of bookmarks.
			 * @type {Adobe.Indesign.Bookmarks}
			 * @readonly
			 */
			public readonly bookmarks: Adobe.Indesign.Bookmarks;
			/**
			 * The destination that the hyperlink points to. Can return: 
			 * HyperlinkTextDestination, HyperlinkPageDestination, 
			 * HyperlinkExternalPageDestination or Page.
			 * @type {any}
			 * @readonly
			 */
			public readonly destination: any;
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
			 * The unique ID of the Bookmark.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The indent level of the bookmark.
			 * @type {number}
			 * @readonly
			 */
			public readonly indent: number;
			/**
			 * The index of the Bookmark within its containing object.
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
			 * The name of the Bookmark.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The parent of the Bookmark (a Document or Bookmark).
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
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerBookmark(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			 * Moves the bookmark to the specified location.
			 * @param {LocationOptions} toParam The bookmark location 
			 * relative to the reference object or within the containing 
			 * object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to parameter specifies before or after. 
			 * Can accept: Bookmark, Document or Bookmark. (Optional)
			 * @returns {Adobe.Indesign.Bookmark}
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.Bookmark;
			/**
			 * Deletes the Bookmark.
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
			public removeEventListenerBookmark(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Go to the bookmark.
			 * @returns {void}
			 */
			public showBookmark(): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}