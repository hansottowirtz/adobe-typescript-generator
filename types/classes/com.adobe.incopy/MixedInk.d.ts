/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Swatch */
		class MixedInk extends Adobe.Incopy.Swatch {
			/**
			 * The mixed ink group that a mixed ink swatch is based on.
			 * @type {Adobe.Incopy.MixedInkGroup}
			 * @readonly
			 */
			public readonly baseColor: Adobe.Incopy.MixedInkGroup;
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
			 * The unique ID of the MixedInk.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the MixedInk within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * The component inks.
			 * @type {any}
			 * @readonly
			 */
			public readonly inkList: any;
			/**
			 * The array of tint percentages for inks in the ink list. 
			 * Note: Specify a value for each ink.
			 * @type {any}
			 */
			public inkPercentages: any;
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
			 * The color model.
			 * @type {Adobe.Incopy.ColorModel}
			 */
			public model: Adobe.Incopy.ColorModel;
			/**
			 * The name of the MixedInk.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The parent of the MixedInk (a Application or Document).
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
			 * The color space.
			 * @type {Adobe.Incopy.ColorSpace}
			 */
			public space: Adobe.Incopy.ColorSpace;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerMixedInk(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Duplicates the MixedInk.
			 * @returns {Adobe.Incopy.Swatch}
			 */
			public duplicate(): Adobe.Incopy.Swatch;
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
			 * Merges the specified swatches with the swatch.
			 * @param {any} withParam The swatches to merge. Can accept: 
			 * Array of Swatches, Swatch or String.
			 * @returns {Adobe.Incopy.Swatch}
			 */
			public merge(withParam: any): Adobe.Incopy.Swatch;
			/**
			 * Deletes the swatch.
			 * @param {Swatch} replacingWithParam The swatch to apply in 
			 * place of the deleted swatch. (Optional)
			 * @returns {void}
			 */
			public remove(replacingWithParam: Swatch): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerMixedInk(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}