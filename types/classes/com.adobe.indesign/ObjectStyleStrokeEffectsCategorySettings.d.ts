/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class ObjectStyleStrokeEffectsCategorySettings extends Adobe.Indesign.Preference {
			/**
			 * If true, the object style will apply bevel emboss.
			 * @type {boolean}
			 */
			public enableBevelEmboss: boolean;
			/**
			 * If true, the object style will apply directional feathering.
			 * @type {boolean}
			 */
			public enableDirectionalFeather: boolean;
			/**
			 * If true, the object style will apply drop shadows.
			 * @type {boolean}
			 */
			public enableDropShadow: boolean;
			/**
			 * If true, the object style will apply feathering.
			 * @type {boolean}
			 */
			public enableFeather: boolean;
			/**
			 * If true, the object style will apply gradient feathering.
			 * @type {boolean}
			 */
			public enableGradientFeather: boolean;
			/**
			 * If true, the object style will apply inner glow.
			 * @type {boolean}
			 */
			public enableInnerGlow: boolean;
			/**
			 * If true, the object style will apply inner shadows.
			 * @type {boolean}
			 */
			public enableInnerShadow: boolean;
			/**
			 * If true, the object style will apply outer glow.
			 * @type {boolean}
			 */
			public enableOuterGlow: boolean;
			/**
			 * If true, the object style will apply satin.
			 * @type {boolean}
			 */
			public enableSatin: boolean;
			/**
			 * If true, the object style will apply transparency settings.
			 * @type {boolean}
			 */
			public enableTransparency: boolean;
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
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the ObjectStyleStrokeEffectsCategorySettings 
			 * (a ObjectStyle).
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
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerObjectStyleStrokeEffectsCategorySettings(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerObjectStyleStrokeEffectsCategorySettings(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}