/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** StrokeStyle */
		class StripedStrokeStyle extends Adobe.Indesign.StrokeStyle {
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
			 * The unique ID of the StripedStrokeStyle.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the StripedStrokeStyle within its containing 
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
			 * The name of the StripedStrokeStyle.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The parent of the StripedStrokeStyle (a Document or 
			 * Application).
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
			 * The width and position of stripes in a striped stroke 
			 * pattern. Each stripe is specified by a start-end pair in the 
			 * format [start1, end1, start2, end2]; each value indicates a 
			 * percentage of the stroke weight. Each value must be greater 
			 * than the previous value. (Range: 0 to 100).
			 * @type {any}
			 */
			public stripeArray: any;
			/**
			 * The stroke style type.
			 * @type {string}
			 * @readonly
			 */
			public readonly strokeStyleType: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerStripedStrokeStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Duplicates the StripedStrokeStyle.
			 * @returns {Adobe.Indesign.StrokeStyle}
			 */
			public duplicate(): Adobe.Indesign.StrokeStyle;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Deletes the stroke style.
			 * @param {any} replacingWithParam The stroke style to apply in 
			 * place of the deleted style. . Can accept: StrokeStyle or 
			 * String. (Optional)
			 * @returns {void}
			 */
			public remove(replacingWithParam: any): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerStripedStrokeStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}