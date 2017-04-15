/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** BevelAndEmbossSetting */
		class FindChangeBevelAndEmbossSetting extends Adobe.Indesign.BevelAndEmbossSetting {
			/**
			 * The altitude of the light source. (Range: 0 to 90). Can 
			 * return: Real (0 - 100) or NothingEnum enumerator.
			 */
			public altitude: number;
			/**
			 * The angle of the light source. (Range: -180 to 180). Can 
			 * return: Real (-180 - 180) or NothingEnum enumerator.
			 */
			public angle: number;
			/**
			 * If true, the bevel or emboss effect is applied. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public applied: boolean;
			/**
			 * The depth of the bevel or emboss (as a percentage). (Range: 
			 * 0 to 1000). Can return: Real (0 - 1000) or NothingEnum 
			 * enumerator.
			 */
			public depth: number;
			/**
			 * The direction of the bevel or emboss. Can return: 
			 * BevelAndEmbossDirection enumerator or NothingEnum 
			 * enumerator.
			 */
			public direction: Adobe.Indesign.BevelAndEmbossDirection;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The blending mode for the highlight portion of the effect. 
			 * Can return: BlendMode enumerator or NothingEnum enumerator.
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
			 * percentages in the range 0 to 100. Can return: Swatch or 
			 * NothingEnum enumerator.
			 */
			public highlightColor: Adobe.Indesign.Swatch;
			/**
			 * The opacity of the highlight portion of the effect (as a 
			 * percentage). (Range: 0 to 100). Can return: Real (0 - 100) 
			 * or NothingEnum enumerator.
			 */
			public highlightOpacity: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the FindChangeBevelAndEmbossSetting (a 
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
			 * The blending mode for the shadow portion of the effect. Can 
			 * return: BlendMode enumerator or NothingEnum enumerator.
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
			 * percentages in the range 0 to 100. Can return: Swatch or 
			 * NothingEnum enumerator.
			 */
			public shadowColor: Adobe.Indesign.Swatch;
			/**
			 * The opacity of the shadow portion of the effect (as a 
			 * percentage). (Range: 0 to 100). Can return: Real (0 - 100) 
			 * or NothingEnum enumerator.
			 */
			public shadowOpacity: number;
			/**
			 * The size of the bevel or emboss. Can return: Unit (0 - 144 
			 * points) or NothingEnum enumerator.
			 */
			public size: any;
			/**
			 * The amount (in pixels) of softening. Can return: Unit (0 - 
			 * 144 points) or NothingEnum enumerator.
			 */
			public soften: any;
			/**
			 * The style of bevel or emboss. Can return: 
			 * BevelAndEmbossStyle enumerator or NothingEnum enumerator.
			 */
			public style: Adobe.Indesign.BevelAndEmbossStyle;
			/**
			 * The edging technique of the bevel or emboss. Can return: 
			 * BevelAndEmbossTechnique enumerator or NothingEnum 
			 * enumerator.
			 */
			public technique: Adobe.Indesign.BevelAndEmbossTechnique;
			/**
			 * If true, the global light source is used. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public useGlobalLight: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerFindChangeBevelAndEmbossSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerFindChangeBevelAndEmbossSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}