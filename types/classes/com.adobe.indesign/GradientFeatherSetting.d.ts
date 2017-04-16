/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class GradientFeatherSetting extends Adobe.Indesign.Preference {
			/** The angle of the gradient feather. */
			public angle: number;
			/** If true, the gradient feather effect is applied. */
			public applied: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The center point (for a radial gradient) or starting point 
			 * (for a linear gradient) applied to the fill, as page 
			 * coordinates in the format [x, y].
			 */
			public gradientStart: any;
			/** The hilite angle of the radial gradient feather. */
			public hiliteAngle: number;
			/** The hilite length of the radial gradient feather. */
			public hiliteLength: any;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The length of the axial gradient, or radius of the radial 
			 * gradient.
			 */
			public length: any;
			/** A collection of opacity gradient stops. */
			public readonly opacityGradientStops: Adobe.Indesign.OpacityGradientStops;
			/**
			 * The parent of the GradientFeatherSetting (a 
			 * TransparencySetting, StrokeTransparencySetting, 
			 * FillTransparencySetting or ContentTransparencySetting).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The type of gradient. */
			public type: Adobe.Indesign.GradientType;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerGradientFeatherSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerGradientFeatherSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}