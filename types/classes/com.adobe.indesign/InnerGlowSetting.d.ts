/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class InnerGlowSetting extends Adobe.Indesign.Preference {
			/** If true, the inner glow effect is applied. */
			public applied: boolean;
			/** The blending mode for the inner glow effect. */
			public blendMode: Adobe.Indesign.BlendMode;
			/**
			 * The color applied to the inner glow, specified as a swatch 
			 * (color, gradient, tint, or mixed ink), or as an array of 
			 * color values. The color mode dictates the array values: for 
			 * RGB, specify three values, each in the range 0 to 255, in 
			 * the format [R,G,B]; for CMYK, specify four values, each as a 
			 * percentage and each in the range 0 to 100, in the format 
			 * [C,M,Y,K]; for LAB, specify three values in the format 
			 * [L,A,B], with L in the range 0 to 100 and A and B in the 
			 * range -128 to 127.
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
			 * The amount (as a percentage) of noise applied to the inner 
			 * glow. (Range: 0 to 100)
			 */
			public noise: number;
			/**
			 * The opacity of the inner glow (as a percentage). (Range: 0 
			 * to 100)
			 */
			public opacity: number;
			/**
			 * The parent of the InnerGlowSetting (a TransparencySetting, 
			 * StrokeTransparencySetting, FillTransparencySetting or 
			 * ContentTransparencySetting).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The size of the inner glow. */
			public size: any;
			/** The light source of the inner glow effect. */
			public source: Adobe.Indesign.InnerGlowSource;
			/**
			 * The amount of spread (as a percentage of the inner glow 
			 * size). (Range: 0 to 100)
			 */
			public spread: number;
			/** The technique used for the inner glow. */
			public technique: Adobe.Indesign.GlowTechnique;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerInnerGlowSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerInnerGlowSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}