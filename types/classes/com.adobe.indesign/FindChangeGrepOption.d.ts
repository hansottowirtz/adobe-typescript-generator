/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class FindChangeGrepOption extends Adobe.Indesign.Preference {
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
			 * If true, includes footnotes in the find/change query.
			 * @type {boolean}
			 */
			public includeFootnotes: boolean;
			/**
			 * If true, includes hidden layers in the find/change query.
			 * @type {boolean}
			 */
			public includeHiddenLayers: boolean;
			/**
			 * If true, includes locked layers in the find query.
			 * @type {boolean}
			 */
			public includeLockedLayersForFind: boolean;
			/**
			 * If true, includes locked stories in the find query.
			 * @type {boolean}
			 */
			public includeLockedStoriesForFind: boolean;
			/**
			 * If true, includes master pages in the find/change query.
			 * @type {boolean}
			 */
			public includeMasterPages: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * If true, finds only text that matches the specified kana 
			 * type.
			 * @type {boolean}
			 */
			public kanaSensitive: boolean;
			/**
			 * The parent of the FindChangeGrepOption (a Application).
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
			 * If true, finds only text that matches the specified 
			 * character width.
			 * @type {boolean}
			 */
			public widthSensitive: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerFindChangeGrepOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerFindChangeGrepOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}