/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class SatinSetting extends Adobe.Indesign.Preference {
			/**
			 * The light angle of the satin effect. (Range: -360 to 360)
			 * @type {number}
			 */
			public angle: number;
			/**
			 * If true, applies the satin effect.
			 * @type {boolean}
			 */
			public applied: boolean;
			/**
			 * The blending mode for the satin effect.
			 * @type {Adobe.Indesign.BlendMode}
			 */
			public blendMode: Adobe.Indesign.BlendMode;
			/**
			 * The distance (in pixels) from the SatinSetting to the satin 
			 * effect.
			 * @type {any}
			 */
			public distance: any;
			/**
			 * The color applied to the satin effect, specified as a swatch 
			 * (color, gradient, tint, or mixed ink), a color library 
			 * color, a hex value, or as an array of color values. The 
			 * color mode dictates the array values: for RGB, specify three 
			 * values, each in the range 0 to 255, in the format [R,G,B]; 
			 * for CMYK, specify four values, each as a percentage and each 
			 * in the range 0 to 100, in the format [C,M,Y,K]; for LAB, 
			 * specify three values in the format [L,A,B], with L in the 
			 * range 0 to 100 and A and B in the range -128 to 127; for 
			 * HSB, specify three colors in the format [H,S,B], with H in 
			 * the range 0 to 360 and S and B as percentages in the range 0 
			 * to 100.
			 * @type {Adobe.Indesign.Swatch}
			 */
			public effectColor: Adobe.Indesign.Swatch;
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
			 * If true, inverts the satin effect.
			 * @type {boolean}
			 */
			public invertEffect: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The opacity of the satin effect (as a percentage). (Range: 0 
			 * to 100)
			 * @type {number}
			 */
			public opacity: number;
			/**
			 * The parent of the SatinSetting (a TransparencySetting, 
			 * StrokeTransparencySetting, FillTransparencySetting or 
			 * ContentTransparencySetting).
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
			 * The width (in pixels) of the satin effect.
			 * @type {any}
			 */
			public size: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerSatinSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerSatinSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}