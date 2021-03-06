/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Behavior */
		class MovieBehavior extends Adobe.Incopy.Behavior {
			/**
			 * The event which triggers the behavior.
			 * @type {Adobe.Incopy.BehaviorEvents}
			 * @readonly
			 */
			public readonly behaviorEvent: Adobe.Incopy.BehaviorEvents;
			/**
			 * If true, the behavior is enabled.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly enableBehavior: boolean;
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
			 * The unique ID of the MovieBehavior.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the MovieBehavior within its containing object.
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
			 * The movie page item.
			 * @type {Adobe.Incopy.Movie}
			 * @readonly
			 */
			public readonly movieItem: Adobe.Incopy.Movie;
			/**
			 * The name of the MovieBehavior.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The id of the navigation point to play from. This property 
			 * is ignored for all operations other than Play From 
			 * Navigation Point.
			 * @type {number}
			 * @readonly
			 */
			public readonly navigationPointID: number;
			/**
			 * The playback mode.
			 * @type {Adobe.Incopy.MoviePlayOperations}
			 * @readonly
			 */
			public readonly operation: Adobe.Incopy.MoviePlayOperations;
			/**
			 * The parent of the MovieBehavior (a Button, CheckBox, 
			 * ComboBox, ListBox, RadioButton, TextBox or SignatureField).
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
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerMovieBehavior(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerMovieBehavior(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}