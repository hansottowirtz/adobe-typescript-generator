/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Color */
		class Tint extends Adobe.Indesign.Color {
			/** The color that the tint is based on. */
			public readonly baseColor: Adobe.Indesign.Color;
			/**
			 * The ink values that create the color, specified as a 
			 * percentage for each ink. Note: The number of values required 
			 * and the range depends on the color space. For RGB, specify 
			 * three values, with each value in the range 0 to 255; for 
			 * CMYK, specify four values representing C, M, Y, and K, with 
			 * each value in the range 0 to 100; for LAB, specify three 
			 * values representing L (Range: 0 to 100), A (Range: -128 to 
			 * 127), and B (Range: -128 to 127); for mixed ink, specify 
			 * values for each ink in the ink list, with each value in the 
			 * range 0 to 100.
			 */
			public colorValue: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The unique ID of the Tint. */
			public readonly id: number;
			/** The index of the Tint within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** The color model. */
			public model: Adobe.Indesign.ColorModel;
			/** The name of the Tint. */
			public name: string;
			/** The parent of the Tint (a Application or Document). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The color space. */
			public space: Adobe.Indesign.ColorSpace;
			/** The percent of the base color. (Range: 0 to 100) */
			public tintValue: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTint(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Duplicates the Tint. */
			public duplicate(): Adobe.Indesign.Swatch;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Merges the specified swatches with the swatch.
			 * @param {any} withParam The swatches to merge. Can accept: 
			 * Array of Swatches, Swatch or String.
			 */
			public merge(withParam: any): Adobe.Indesign.Swatch;
			/**
			 * Deletes the swatch.
			 * @param {Swatch} replacingWithParam The swatch to apply in 
			 * place of the deleted swatch. (Optional)
			 */
			public remove(replacingWithParam: Swatch): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerTint(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}