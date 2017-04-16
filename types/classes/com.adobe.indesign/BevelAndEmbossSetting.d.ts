/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class BevelAndEmbossSetting extends Adobe.Indesign.Preference {
			/**
			 * The altitude of the light source. (Range: 0 to 90)
			 * @type {number}
			 */
			public altitude: number;
			/**
			 * The angle of the light source. (Range: -180 to 180)
			 * @type {number}
			 */
			public angle: number;
			/**
			 * If true, the bevel or emboss effect is applied.
			 * @type {boolean}
			 */
			public applied: boolean;
			/**
			 * The depth of the bevel or emboss (as a percentage). (Range: 
			 * 0 to 1000)
			 * @type {number}
			 */
			public depth: number;
			/**
			 * The direction of the bevel or emboss.
			 * @type {Adobe.Indesign.BevelAndEmbossDirection}
			 */
			public direction: Adobe.Indesign.BevelAndEmbossDirection;
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
			 * The blending mode for the highlight portion of the effect.
			 * @type {Adobe.Indesign.BlendMode}
			 */
			public highlightBlendMode: Adobe.Indesign.BlendMode;
			/**
			 * The color applied to the highlight portion of the effect, 
			 * specified as a swatch (color, gradient, tint, or mixed ink), 
			 * a color library color, a hex value, or as an array of color 
			 * values. The color mode dictates the array values: for RGB, 
			 * specify three values, each in the range 0 to 255, in the 
			 * format [R,G,B]; for CMYK, specify four values, each as a 
			 * percentage and each in the range 0 to 100, in the format 
			 * [C,M,Y,K]; for LAB, specify three values in the format 
			 * [L,A,B], with L in the range 0 to 100 and A and B in the 
			 * range -128 to 127; for HSB, specify three colors in the 
			 * format [H,S,B], with H in the range 0 to 360 and S and B as 
			 * percentages in the range 0 to 100.
			 * @type {Adobe.Indesign.Swatch}
			 */
			public highlightColor: Adobe.Indesign.Swatch;
			/**
			 * The opacity of the highlight portion of the effect (as a 
			 * percentage). (Range: 0 to 100)
			 * @type {number}
			 */
			public highlightOpacity: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the BevelAndEmbossSetting (a 
			 * TransparencySetting, StrokeTransparencySetting, 
			 * FillTransparencySetting or ContentTransparencySetting).
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
			 * The blending mode for the shadow portion of the effect.
			 * @type {Adobe.Indesign.BlendMode}
			 */
			public shadowBlendMode: Adobe.Indesign.BlendMode;
			/**
			 * The color applied to the shadow portion of the effect, 
			 * specified as a swatch (color, gradient, tint, or mixed ink), 
			 * a color library color, a hex value, or as an array of color 
			 * values. The color mode dictates the array values: for RGB, 
			 * specify three values, each in the range 0 to 255, in the 
			 * format [R,G,B]; for CMYK, specify four values, each as a 
			 * percentage and each in the range 0 to 100, in the format 
			 * [C,M,Y,K]; for LAB, specify three values in the format 
			 * [L,A,B], with L in the range 0 to 100 and A and B in the 
			 * range -128 to 127; for HSB, specify three colors in the 
			 * format [H,S,B], with H in the range 0 to 360 and S and B as 
			 * percentages in the range 0 to 100.
			 * @type {Adobe.Indesign.Swatch}
			 */
			public shadowColor: Adobe.Indesign.Swatch;
			/**
			 * The opacity of the shadow portion of the effect (as a 
			 * percentage). (Range: 0 to 100)
			 * @type {number}
			 */
			public shadowOpacity: number;
			/**
			 * The size of the bevel or emboss.
			 * @type {any}
			 */
			public size: any;
			/**
			 * The amount (in pixels) of softening.
			 * @type {any}
			 */
			public soften: any;
			/**
			 * The style of bevel or emboss.
			 * @type {Adobe.Indesign.BevelAndEmbossStyle}
			 */
			public style: Adobe.Indesign.BevelAndEmbossStyle;
			/**
			 * The edging technique of the bevel or emboss.
			 * @type {Adobe.Indesign.BevelAndEmbossTechnique}
			 */
			public technique: Adobe.Indesign.BevelAndEmbossTechnique;
			/**
			 * If true, the global light source is used.
			 * @type {boolean}
			 */
			public useGlobalLight: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerBevelAndEmbossSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerBevelAndEmbossSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}