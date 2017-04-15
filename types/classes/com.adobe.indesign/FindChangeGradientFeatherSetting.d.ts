/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FindChangeGradientFeatherSetting extends Adobe.Indesign.GradientFeatherSetting {
			/**
			 * The angle of the gradient feather. Can return: Real (-180 - 
			 * 180) or NothingEnum enumerator.
			 */
			public angle: number;
			/**
			 * If true, the gradient feather effect is applied. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public applied: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The center point (for a radial gradient) or starting point 
			 * (for a linear gradient) applied to the fill, as page 
			 * coordinates in the format [x, y]. Can return: Array of 2 
			 * Units or NothingEnum enumerator.
			 */
			public gradientStart: any;
			/**
			 * The hilite angle of the radial gradient feather. Can return: 
			 * Real or NothingEnum enumerator.
			 */
			public hiliteAngle: number;
			/**
			 * The hilite length of the radial gradient feather. Can 
			 * return: Unit or NothingEnum enumerator.
			 */
			public hiliteLength: any;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The length of the axial gradient, or radius of the radial 
			 * gradient. Can return: Unit or NothingEnum enumerator.
			 */
			public length: any;
			/** A collection of opacity gradient stops. */
			public readonly opacityGradientStops: Adobe.Indesign.OpacityGradientStops;
			/**
			 * The parent of the FindChangeGradientFeatherSetting (a 
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
			 * The type of gradient. Can return: GradientType enumerator or 
			 * NothingEnum enumerator.
			 */
			public type: Adobe.Indesign.GradientType;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerFindChangeGradientFeatherSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerFindChangeGradientFeatherSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}