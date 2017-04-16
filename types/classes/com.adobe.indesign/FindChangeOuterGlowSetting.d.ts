/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** OuterGlowSetting */
		class FindChangeOuterGlowSetting extends Adobe.Indesign.OuterGlowSetting {
			/**
			 * If true, the outer glow effect is applied. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public applied: boolean;
			/**
			 * The blending mode for the outer glow effect. Can return: 
			 * BlendMode enumerator or NothingEnum enumerator.
			 */
			public blendMode: Adobe.Indesign.BlendMode;
			/**
			 * The color applied to the outer glow, specified as a swatch 
			 * (color, gradient, tint, or mixed ink), or an array of color 
			 * values. The color mode dictates the array values: for RGB, 
			 * specify three values, each in the range 0 to 255, in the 
			 * format [R,G,B]; for CMYK, specify four values, each as a 
			 * percentage and each in the range 0 to 100, in the format 
			 * [C,M,Y,K]; for LAB, specify three values in the format 
			 * [L,A,B], with L in the range 0 to 100 and A and B in the 
			 * range -128 to 127. Can return: Swatch or NothingEnum 
			 * enumerator.
			 */
			public effectColor: Adobe.Indesign.Swatch;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The amount (as a percentage) of noise applied to the outer 
			 * glow. (Range: 0 to 100). Can return: Real (0 - 100) or 
			 * NothingEnum enumerator.
			 */
			public noise: number;
			/**
			 * The opacity of the outer glow (as a percentage). (Range: 0 
			 * to 100). Can return: Real (0 - 100) or NothingEnum 
			 * enumerator.
			 */
			public opacity: number;
			/**
			 * The parent of the FindChangeOuterGlowSetting (a 
			 * FindChangeTransparencySetting, 
			 * FindChangeStrokeTransparencySetting, 
			 * FindChangeFillTransparencySetting or 
			 * FindChangeContentTransparencySetting).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The size of the outer glow. Can return: Unit (0 - 144 
			 * points) or NothingEnum enumerator.
			 */
			public size: any;
			/**
			 * The amount of spread (as a percentage of the outer glow 
			 * size). (Range: 0 to 100). Can return: Real (0 - 100) or 
			 * NothingEnum enumerator.
			 */
			public spread: number;
			/**
			 * The technique applied to the outer glow. Can return: 
			 * GlowTechnique enumerator or NothingEnum enumerator.
			 */
			public technique: Adobe.Indesign.GlowTechnique;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerFindChangeOuterGlowSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerFindChangeOuterGlowSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}