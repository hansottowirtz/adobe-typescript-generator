/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** GradientFeatherSetting */
		class FindChangeGradientFeatherSetting extends Adobe.Indesign.GradientFeatherSetting {
			/**
			 * The angle of the gradient feather. Can return: Real (-180 - 
			 * 180) or NothingEnum enumerator.
			 * @type {number}
			 */
			public angle: number;
			/**
			 * If true, the gradient feather effect is applied. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {boolean}
			 */
			public applied: boolean;
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
			 * The center point (for a radial gradient) or starting point 
			 * (for a linear gradient) applied to the fill, as page 
			 * coordinates in the format [x, y]. Can return: Array of 2 
			 * Units or NothingEnum enumerator.
			 * @type {any}
			 */
			public gradientStart: any;
			/**
			 * The hilite angle of the radial gradient feather. Can return: 
			 * Real or NothingEnum enumerator.
			 * @type {number}
			 */
			public hiliteAngle: number;
			/**
			 * The hilite length of the radial gradient feather. Can 
			 * return: Unit or NothingEnum enumerator.
			 * @type {any}
			 */
			public hiliteLength: any;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The length of the axial gradient, or radius of the radial 
			 * gradient. Can return: Unit or NothingEnum enumerator.
			 * @type {any}
			 */
			public length: any;
			/**
			 * A collection of opacity gradient stops.
			 * @type {Adobe.Indesign.OpacityGradientStops}
			 * @readonly
			 */
			public readonly opacityGradientStops: Adobe.Indesign.OpacityGradientStops;
			/**
			 * The parent of the FindChangeGradientFeatherSetting (a 
			 * FindChangeTransparencySetting, 
			 * FindChangeStrokeTransparencySetting, 
			 * FindChangeFillTransparencySetting or 
			 * FindChangeContentTransparencySetting).
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
			 * The type of gradient. Can return: GradientType enumerator or 
			 * NothingEnum enumerator.
			 * @type {Adobe.Indesign.GradientType}
			 */
			public type: Adobe.Indesign.GradientType;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerFindChangeGradientFeatherSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerFindChangeGradientFeatherSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}