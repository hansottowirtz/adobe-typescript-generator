/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class DropShadowSetting extends Adobe.Indesign.Preference {
			/**
			 * The angle at which the shadow is thrown
			 * @type {number}
			 */
			public angle: number;
			/**
			 * The blending mode for the drop shadow effect.
			 * @type {Adobe.Indesign.BlendMode}
			 */
			public blendMode: Adobe.Indesign.BlendMode;
			/**
			 * The distance between the item and its shadow
			 * @type {any}
			 */
			public distance: any;
			/**
			 * The color applied to the drop shadow, specified as a swatch 
			 * (color, gradient, tint, or mixed ink), or as an array of 
			 * color values. The color mode dictates the array values: for 
			 * RGB, specify three values, each in the range 0 to 255, in 
			 * the format [R,G,B]; for CMYK, specify four values, each as a 
			 * percentage and each in the range 0 to 100, in the format 
			 * [C,M,Y,K]; for LAB, specify three values in the format 
			 * [L,A,B], with L in the range 0 to 100 and A and B in the 
			 * range -128 to 127.
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
			 * If true, the drop shadow will take into account other 
			 * non-shadow effects.
			 * @type {boolean}
			 */
			public honorOtherEffects: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * If true, the layer will knock out the drop shadow.
			 * @type {boolean}
			 */
			public knockedOut: boolean;
			/**
			 * The shadow mode.
			 * @type {Adobe.Indesign.ShadowMode}
			 */
			public mode: Adobe.Indesign.ShadowMode;
			/**
			 * The amount (as a percentage) of noise applied to the shadow. 
			 * (Range: 0 to 100)
			 * @type {number}
			 */
			public noise: number;
			/**
			 * The opacity of the drop shadow (as a percentage). (Range: 0 
			 * to 100)
			 * @type {number}
			 */
			public opacity: number;
			/**
			 * The parent of the DropShadowSetting (a TransparencySetting, 
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
			 * The radius (in pixels) of the blur applied to the drop 
			 * shadow. (Range depends on the unit type. For points: 0 to 
			 * 144; for picas: 0p0 to 12p0; for inches: 0 to 2; for mm: 0 
			 * to 50.08; for cm: 0 to 5.08; for ciceros: 0c0 to 11c3.128.)
			 * @type {any}
			 */
			public size: any;
			/**
			 * The amount (as a percentage of the blur width) to spread the 
			 * footprint of the drop shadow and reduce the radius of the 
			 * blur. (Range: 0 to 100)
			 * @type {number}
			 */
			public spread: number;
			/**
			 * If true, uses the global light angle.
			 * @type {boolean}
			 */
			public useGlobalLight: boolean;
			/**
			 * The horizontal offset of the drop shadow. Range depends on 
			 * the unit type. For points: -1000 to 1000; for picas: -83p4 
			 * to 83p4; for inches: -13.8889 to 13.8889; for mm: -352.778 
			 * to 352.778; for cm: -35.277 to 35.277; for ciceros: 
			 * -78c2.389 to 78c2.389.
			 * @type {any}
			 */
			public xOffset: any;
			/**
			 * The vertical offset of the drop shadow. (Range depends on 
			 * the unit type. For points: -1000 to 1000; for picas: -83p4 
			 * to 83p4; for inches: -13.8889 to 13.8889; for mm: -352.778 
			 * to 352.778; for cm: -35.277 to 35.277; for ciceros: 
			 * -78c2.389 to 78c2.389)
			 * @type {any}
			 */
			public yOffset: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerDropShadowSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerDropShadowSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}