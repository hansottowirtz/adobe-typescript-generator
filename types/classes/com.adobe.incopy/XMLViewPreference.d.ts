/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class XMLViewPreference extends Adobe.Incopy.Preference {
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
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the XMLViewPreference (a Application or 
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
			 * If true, displays attributes as well as elements in the 
			 * structure view. Note: Valid only when show structure is 
			 * true.
			 * @type {boolean}
			 */
			public showAttributes: boolean;
			/**
			 * If true, displays the structure view.
			 * @type {boolean}
			 */
			public showStructure: boolean;
			/**
			 * If true, displays XML tags in tagged frames.
			 * @type {boolean}
			 */
			public showTaggedFrames: boolean;
			/**
			 * If true, displays XML tags.
			 * @type {boolean}
			 */
			public showTagMarkers: boolean;
			/**
			 * If true, displays the tag options dialog when tagging any 
			 * item whose parent is not tagged.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly showTagOptions: boolean;
			/**
			 * If true, the structure view displays text snippets of 
			 * element content. Note: Valid only when show structure is 
			 * true.
			 * @type {boolean}
			 */
			public showTextSnippets: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerXMLViewPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerXMLViewPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}