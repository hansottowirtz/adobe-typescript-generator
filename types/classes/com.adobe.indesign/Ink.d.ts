/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Ink extends Adobe.Csawlib.CSHostObject {
			/**
			 * The ink object to map this ink to.
			 * @type {string}
			 */
			public aliasInkName: string;
			/**
			 * The angle of the ink. (Range: 0 to 360)
			 * @type {number}
			 */
			public angle: number;
			/**
			 * Converts spot inks to process inks.
			 * @type {boolean}
			 */
			public convertToProcess: boolean;
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
			 * The frequency of the ink. (Range: 1 to 500)
			 * @type {number}
			 */
			public frequency: number;
			/**
			 * The unique ID of the Ink.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the Ink within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * The trapping type of the ink.
			 * @type {Adobe.Indesign.InkTypes}
			 */
			public inkType: Adobe.Indesign.InkTypes;
			/**
			 * If true, the ink is a process ink.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isProcessInk: boolean;
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
			 * The name of the Ink.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The neutral density of the ink. (Range: 0.001 to 10.0)
			 * @type {number}
			 */
			public neutralDensity: number;
			/**
			 * The parent of the Ink (a Application or Document).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * If true, prints the ink. Only valid when printing 
			 * separations.
			 * @type {boolean}
			 */
			public printInk: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The solidity value of the ink. (Range: 0.0 to 1.0)
			 * @type {number}
			 * @readonly
			 */
			public readonly solidity: number;
			/**
			 * The place of the ink in the trapping sequence.
			 * @type {number}
			 */
			public trapOrder: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerInk(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerInk(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}