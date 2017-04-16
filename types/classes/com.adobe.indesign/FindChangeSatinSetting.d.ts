/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** SatinSetting */
		class FindChangeSatinSetting extends Adobe.Indesign.SatinSetting {
			/**
			 * The light angle of the satin effect. (Range: -360 to 360). 
			 * Can return: Real (-180 - 180) or NothingEnum enumerator.
			 */
			public angle: number;
			/**
			 * If true, applies the satin effect. Can return: Boolean or 
			 * NothingEnum enumerator.
			 */
			public applied: boolean;
			/**
			 * The blending mode for the satin effect. Can return: 
			 * BlendMode enumerator or NothingEnum enumerator.
			 */
			public blendMode: Adobe.Indesign.BlendMode;
			/**
			 * The distance (in pixels) from the FindChangeSatinSetting to 
			 * the satin effect. Can return: Unit (0 - 1000 points) or 
			 * NothingEnum enumerator.
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
			 * to 100. Can return: Swatch or NothingEnum enumerator.
			 */
			public effectColor: Adobe.Indesign.Swatch;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * If true, inverts the satin effect. Can return: Boolean or 
			 * NothingEnum enumerator.
			 */
			public invertEffect: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The opacity of the satin effect (as a percentage). (Range: 0 
			 * to 100). Can return: Real (0 - 100) or NothingEnum 
			 * enumerator.
			 */
			public opacity: number;
			/**
			 * The parent of the FindChangeSatinSetting (a 
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
			 * The width (in pixels) of the satin effect. Can return: Unit 
			 * (0 - 144 points) or NothingEnum enumerator.
			 */
			public size: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerFindChangeSatinSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerFindChangeSatinSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}