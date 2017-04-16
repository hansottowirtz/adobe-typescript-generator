/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class FeatherSetting extends Adobe.Indesign.Preference {
			/**
			 * The amount to choke the feather (as a percentage of the 
			 * feather width). (Range: 0 to 100)
			 * @type {number}
			 */
			public chokeAmount: number;
			/**
			 * The corner effect applied to the feather.
			 * @type {Adobe.Indesign.FeatherCornerType}
			 */
			public cornerType: Adobe.Indesign.FeatherCornerType;
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
			 * The feather mode.
			 * @type {Adobe.Indesign.FeatherMode}
			 */
			public mode: Adobe.Indesign.FeatherMode;
			/**
			 * The amount (as a percentage) of noise applied to the 
			 * feather. (Range: 0 to 100)
			 * @type {number}
			 */
			public noise: number;
			/**
			 * The parent of the FeatherSetting (a TransparencySetting, 
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
			 * The feather width. (Range depends on the unit type. For 
			 * points: 0 to 1000; for picas: 0 to 83p4; for inches: 0 to 
			 * 13.8889; for mm: 0 to 352.778; for cm: 0 to 35.277; for 
			 * ciceros: 0 to 78c2.389.)
			 * @type {any}
			 */
			public width: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerFeatherSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerFeatherSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}